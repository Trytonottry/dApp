# dApp
dApp
This repository contains a decentralized application (dApp) built on the Ethereum blockchain, showcasing the integration of smart contracts with a front-end interface. The project demonstrates key blockchain concepts like token transactions, user interaction via wallets (e.g., MetaMask), and smart contract deployment. It serves as an educational tool for developers learning to build Ethereum-based dApps.
Features

Smart Contracts: Implements ERC-20 compatible token functionality for minting, transferring, and tracking balances.
Front-End Interface: A simple web interface built with HTML, JavaScript, and Bulma CSS for user interaction with the blockchain.
Wallet Integration: Connects to Ethereum wallets (e.g., MetaMask) for transaction signing and account management.
Contract Deployment: Uses Truffle for compiling, testing, and deploying smart contracts to Ethereum networks.
Network Flexibility: Supports local development (e.g., Ganache) and testnets/mainnet via Infura.

Prerequisites

Node.js and npm for JavaScript dependencies
Truffle Framework for smart contract development
MetaMask browser extension for wallet integration
Ganache (optional) for local blockchain testing
Infura account (optional) for connecting to Ethereum testnets/mainnet
Python 3.6 or higher
pip for installing dependencies

Installation

Clone the repository:git clone https://github.com/Trytonottry/dApp.git
cd dApp


Install Node.js dependencies:npm install


Install Truffle globally (if not already installed):npm install -g truffle


Install Python dependencies:pip install -r requirements.txt

Required packages:
Flask
requests
web3


(Optional) Set up a local blockchain with Ganache:ganache-cli


(Optional) Configure Infura for testnet/mainnet in truffle-config.js:module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/YOUR_INFURA_KEY"),
      network_id: 4
    }
  }
};



Usage

Compile and deploy the smart contracts:truffle compile
truffle migrate --network development


Start the Flask server for the back-end:python app.py

The server runs on http://localhost:5000 by default.
Serve the front-end:
Open build/index.html in a browser, or
Use a local server (e.g., npx serve build/).


Connect MetaMask to the appropriate network (e.g., Ganache or Rinkeby).
Interact with the dApp:
View token balances.
Mint new tokens (if authorized).
Transfer tokens to other addresses.


Test endpoints using an HTTP client (e.g., curl or Postman):
GET /chain: Retrieve the blockchain.
POST /transactions/new: Add a transaction (similar to the Blockchain repo).
GET /mine: Mine a new block.



Project Structure

build/: Front-end assets (HTML, CSS, JS, and vendor libraries like Web3.js).
contracts/: Solidity smart contracts (e.g., ERC-20 token implementation).
migrations/: Truffle migration scripts for contract deployment.
app.py: Flask back-end for blockchain interaction.
blockchain.py: Core blockchain logic (inherited from the Blockchain repo).
truffle-config.js: Truffle configuration for network settings.
requirements.txt: Python dependencies.

How It Works

Smart Contracts: Written in Solidity, the contracts handle token logic (minting, transferring) and are deployed to the Ethereum network using Truffle.
Front-End: The index.html file uses Web3.js and Truffle Contract to interact with the deployed contracts, displaying balances and enabling transactions.
Back-End: Flask provides RESTful endpoints to interact with the blockchain, similar to the Blockchain repo, supporting decentralized node communication.
Wallet Integration: MetaMask connects to the dApp, allowing users to sign transactions and view their token balances.
Consensus: Inherits the proof-of-work and consensus mechanisms from the Blockchain repo for node synchronization.

Contributing
Contributions are welcome! Follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

Built with inspiration from Ethereum dApp tutorials and the Vancouver Ethereum Developer Group.
Uses OpenZeppelin contracts for ERC-20 standards.
Leverages Truffle and Web3.js for seamless Ethereum integration.


