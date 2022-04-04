import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'SoulLegacy4',
  tokenName: 'SoulLegacy4',
  tokenSymbol: 'SLLGCY4',
  hiddenMetadataUri: 'ipfs://QmRF4H5PDYtWR5gbkCKPfSTJw9TiDaJtEbVsytKF9hBUry/',
  maxSupply: 5555,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 4,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.07,
    maxMintAmountPerTx: 8,
  },
  contractAddress: "0x913032166A6263fABcb70073D129ab15380c9ee5",
  marketplaceIdentifier: 'SoulLegacy4',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
