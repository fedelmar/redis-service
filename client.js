const redis = require("redis");

// Crea un nuevo cliente Redis
// Si no se establece REDIS_HOST, el host predeterminado es localhost
// Si no se establece REDIS_PORT, el puerto predeterminado es 6379
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT  
});

redisClient.on("error", function(err) {
    console.log("Error " + err);
});

// Establece la clave "octocat" para un valor de "Mona the octocat"
redisClient.set("octocat", "Mona the Octocat", redis.print);

module.exports = {
  redisClient,
}