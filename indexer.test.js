const { expect } = require('chai');
const sqlite3 = require('sqlite3').verbose();

describe('Indexer', () => {
    let db;

    before((done) => {
        db = new sqlite3.Database(':memory:', done);
    });

    it('should create transfers table', (done) => {
        db.run(`CREATE TABLE transfers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            from_addr TEXT,
            to_addr TEXT,
            value TEXT,
            block_number INTEGER
        )`, (err) => {
            expect(err).to.be.null;
            done();
        });
    });
});