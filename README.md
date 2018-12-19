# dapp_truffle_cafelatte_coin
  https://www.masonforest.com/blockchain/ethereum/2017/11/13/how-to-deploy-an-erc20-token-in-20-minutes.html

# Crud Example With Truffle
This is Example code of Smart contract on ERC20.


## Installation

1. Download and Install Application.
 ```javascript
npm install -g truffle 
npm install
npm install --save-dev dotenv truffle-wallet-provider ethereumjs-wallet
 ```

2. .env created on root directory. 
```
ROPSTEN_PRIVATE_KEY="YourPrivateKeyHere"
MAINNET_PRIVATE_KEY="YourPrivateKeyHere"
``` 

2. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
```javascript
truffle compile
truffle migrate
```
3. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
```javascript
truffle test
```
