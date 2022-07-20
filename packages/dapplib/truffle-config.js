require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stone royal saddle hospital install light army genius'; 
let testAccounts = [
"0xbfba63c0a3862a31f6101e86570639d5c9613e2d9d1146e8807c1f248d04a16b",
"0x1c93d5cb00b5c2afa7f57dc3f0580ab930b5008b6b7c2aaa8906907f164d7745",
"0xa1dcd21b2032a71e5e967b6d9914de409bb1a14e8919a825d7027cbf117b3728",
"0x043f75a2c04ce5d9ccdd868d06adbcf2e07b6a1b7b5e6aca6aee6757929ca1cd",
"0x08c44d5212775c5a5ce21c8ec459cad396173d113e6aba35f3689e4c41168358",
"0xeac00972551fd4385cedbee4bf4c974c89c5563fb35edae34dd78b28c55577c6",
"0xed70f29a07ade69d0a74b7156cb0e41a8287be2569bd4e4518c9023c84f11a5b",
"0x6e4c72f578a25ad5012c3c2aab642d699d78407829f3351c58cf3228d80248dc",
"0xc8346eeb86ab03ad1adff965a51675c2e9f3be45addb0560285cca02118a495d",
"0x34ce3f21bfc140308f74d1ffcbcc055501830938b04ddb9b8ed2047a4cc61bc7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

