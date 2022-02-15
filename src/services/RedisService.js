/* eslint-disable no-console */
const redis = require('redis');
const { PREFIJO_REDIS, REDIS_URI } = require('../constants/Constants');
const { missingKey, missingValue } = require('../constants/serviceErrors');

const client = redis.createClient({
  url: REDIS_URI
});

client.on('error', (err) => console.log('Redis Client Error', err));

(async () => {
  try {
    await client.connect();
  } catch (error) {
    console.log(error)
    throw error;
  }
})();

const get = async (key) => {
  if (!key) throw missingKey;
  return client.get(`${PREFIJO_REDIS}-${key}`);
};

const set = async (key, value) => {
  if (!key) throw missingKey;
  if (!value) throw missingValue;
  return client.setEx(`${PREFIJO_REDIS}-${key}`, 864000, value);
};

const del = async (key) => {
  if (!key) throw missingKey;
  return client.del(`${PREFIJO_REDIS}-${key}`);
};

const disconnect = () => {
  return client.quit();
};

module.exports = {
  get,
  set,
  del,
  disconnect,
  client,
};
