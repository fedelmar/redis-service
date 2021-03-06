const redis = require("redis");


const config = {
  host: 'localhost',
  port: 6379,
};
const client = redis.createClient(config);

client.on('connect', () => console.log('Redis Client connect'));
client.on('ready', () => console.log('Redis Client ready'));
client.on('end', () => console.log('Redis Client end'));
client.on('error', (err) => console.log('Redis Client Error', err));
client.on('reconnecting', () => console.log('Redis Client reconnecting'));

(async () => {
  await client.connect();
})();

console.log(client)
// Establece la clave "octocat" para un valor de "Mona the octocat"
client.set("octocat", "Mona the Octocat", redis.print);


module.exports = {
  client,
}