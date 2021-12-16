const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 2,
    layersOrder: [
      // { name: "Background" },
      { name: "Base_body" },
      { name: "Clothes" },
      { name: "Hair" },
      { name: "body_accessories" },
    ],
  },
  {
    // Creates an additional 5 artworks
    growEditionSizeTo: 5,
    layersOrder: [
      // { name: "Background" },
      { name: "Base_body" },
      { name: "Clothes" },
      { name: "ears_accessories" },
      { name: "Hair" },
      { name: "body_accessories" },
    ],
  },
  {
    // Creates an additional 5 artworks
    growEditionSizeTo: 10,
    layersOrder: [
      // { name: "Background" },
      { name: "Base_body" },
      { name: "Clothes" },
      { name: "ears_accessories" },
      { name: "Hair" },
      { name: "body_accessories" },
      { name: "hair_accessories" },
    ],
  },
  {
    // Creates an additional 5 artworks
    growEditionSizeTo: 50,
    layersOrder: [
      // { name: "Background" },
      { name: "Base_body" },
      { name: "Clothes" },
      { name: "ears_accessories" },
      { name: "face_accessories" },
      { name: "Hair" },
      { name: "body_accessories" },
      { name: "hairpin_accessories" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = true;

const format = {
  width: 1080,
  height: 1080,
  smoothing: true,
};

const gif = {
  export: true,
  repeat: -1,
  quality: 200,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 2,
  thumbWidth: 50,
  imageRatio: format.height / 100,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 50,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 1080,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};


// I wanted to generate an animated GIF collection with hashlips,
// with all animated layers, background, body and character face.
// I ended up editing the hashlips code in a way that hashlips does the
// file selection and rarity checking, then it runs a command using the
// imagemagick library. This is the command:

