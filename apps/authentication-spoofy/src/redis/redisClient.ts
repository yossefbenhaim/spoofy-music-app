import Redis from 'ioredis';

const redis = new Redis({
  host: process.env['REDIS_HOST'] || '127.0.0.1', // Redis server host
  port: parseInt(process.env['REDIS_PORT'] || '6379'), // Redis server port
  password: process.env['REDIS_PASSWORD'] || undefined, // Optional password
  lazyConnect: true,
  reconnectOnError: (err) => {
    console.error('Redis connection error:', err);
    return true;
  },
});

redis.on('connect', () => {
  console.log('Connected to Redis successfully!');
});

redis.on('error', (err) => {
  console.error('Redis connection error:', err);
});

export default redis;
