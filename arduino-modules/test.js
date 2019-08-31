const Redis = require('ioredis');
const redis = new Redis();
const redisOld = new Redis();

redis.subscribe('ldr');
redis.on('message', (channel, message) => {
  console.log(`Receive ${message}, from ${channel}`);
});
redisOld.set('led', 'LED_OFF');

//redis.set('ldr').then(res => console.log(res));
