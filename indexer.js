// Требования: npm install web3 express sqlite3
// Настройка: создайте .env с INFURA_URL
// Запуск: node indexer.js
const Web3 = require('web3');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();

const web3 = new Web3(process.env.INFURA_URL);
const app = express();
const db = new sqlite3.Database(':memory:');

const TOKEN_ABI = [
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "name": "from", "type": "address" },
            { "indexed": true, "name": "to", "type": "address" },
            { "indexed": false, "name": "value", "type": "uint256" }
        ],
        "name": "Transfer",
        "type": "event"
    }
];
const TOKEN_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'; // USDC

db.serialize(() => {
    db.run(`CREATE TABLE transfers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        from_addr TEXT,
        to_addr TEXT,
        value TEXT,
        block_number INTEGER
    )`);
});

async function indexTransfers() {
    const contract = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS);
    const fromBlock = await web3.eth.getBlockNumber() - 100;
    const events = await contract.getPastEvents('Transfer', {
        fromBlock,
        toBlock: 'latest'
    });

    const stmt = db.prepare('INSERT INTO transfers (from_addr, to_addr, value, block_number) VALUES (?, ?, ?, ?)');
    events.forEach(event => {
        stmt.run(
            event.returnValues.from,
            event.returnValues.to,
            web3.utils.fromWei(event.returnValues.value, 'mwei'),
            event.blockNumber
        );
    });
    stmt.finalize();
    console.log(`Indexed ${events.length} transfers`);
}

app.get('/transfers', (req, res) => {
    db.all('SELECT * FROM transfers', [], (err, rows) => {
        if (err) return res.status(500).send('Database error');
        res.json(rows);
    });
});

indexTransfers().then(() => {
    app.listen(3000, () => console.log('API running on port 3000'));
}).catch(console.error);