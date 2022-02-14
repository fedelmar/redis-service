require('dotenv').config();

const {
  MONGO_URI,
  REDIS_URI,
  PREFIJO_REDIS,
} = process.env;


module.exports = {

  MONGO_URI,
  REDIS_URI,
  PREFIJO_REDIS,
};
