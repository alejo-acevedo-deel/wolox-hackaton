const Redis = require('ioredis');
const redis = new Redis();

redis.publish('111111', '10');
