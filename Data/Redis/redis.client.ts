import RedisClient from 'ioredis';

const redis = new RedisClient({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || '6379', 10),
});