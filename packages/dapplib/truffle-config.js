require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot dance cost muscle company good enter oil gesture'; 
let testAccounts = [
"0xddad86f4405b5dd67482d04169544e2f1fa0fe9bed948862e3859086802d9312",
"0x46abc91537fa0432b722aad4b6f39ea96bae0a6034db20362c80e94483736f75",
"0x10133ebd119050d184b4cd138898836bc957ab5130ef8c69fb162ba1a73de0ef",
"0x2e8cc9c2c219a94dc0ddd646dad8418bc84d7ad3ecbd7fea1880fb304ece30bc",
"0x7a89904e336e0f60b267dd533236a086c8db8c46eea231f7fadf54382ba45cad",
"0xfdf6bec374cd331d6ac994da08a41579bfcf414bc894b7d1b35fda828050a7b3",
"0x9862bb5633d4c34d1b07bf71b60728eb48720b5b8d3edabb8f20e06681f62d11",
"0x6098be7eea58ae4d116ed03beb7ceb5a779bfab5b3bd2405f663fcf511621195",
"0x868e821dbd7ead2225e82bd77d3a729ee521b2681309c356d2285a024a5bdf4b",
"0x1d0dc93bbb3a3476ca29758631310dda0a8861681f9031fef1ab48ccfd4882bf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

