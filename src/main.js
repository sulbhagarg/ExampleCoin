const {Blockchain, Transaction} = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate("fa6bf9d4a7a1ed70ef05acb586f3c141cca0698b158a16b1503ff4df1321a5ca");
const myWalletAddress = myKey.getPublic("hex");

var exampleCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);
exampleCoin.addTransaction(tx1);

console.log("\nStarting the miner...");
exampleCoin.minePendingTransaction(myWalletAddress);

console.log("\nBalance of my wallet is", exampleCoin.getBalanceOfAddress(myWalletAddress));

console.log("\nStarting the miner...");
exampleCoin.minePendingTransaction(myWalletAddress);

console.log("\nBalance of my wallet is", exampleCoin.getBalanceOfAddress(myWalletAddress));