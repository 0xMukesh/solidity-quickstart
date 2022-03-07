const axios = require("axios");
const dotenv = require("dotenv");

const data = require("../data/constants.data.js");

dotenv.config();

const getAmount = async (address) => {
  const response = await axios.get(
    `https://api-testnet.polygonscan.com/api?module=account&action=tokenbalance&contractaddress=${data["contractAddress"]}&address=${address}&tag=latest&apikey=${process.env.POLYGON_API_KEY}`
  );
  console.log(response.data.result / 1000000000000000000);
};

module.exports = getAmount;
