import redis from 'redis'

const { promisifyAll } = require('bluebird')
promisifyAll(redis)

const redisClient = redis.createClient({
  port: 25060,
  host: 'app-446b2b25-76d2-4a95-baa7-cc544ff7cfd7-do-user-8654638-0.b.db.ondigitalocean.com'
})

redisClient.on('connect', () => {
  console.log('CLIENT CONNECTED TO SERVER')
})

redisClient.on('ready', () => {
  console.log('CLIENT CONNECTED TO REDIS')
})

redisClient.on('error', (error) => {
  console.log(error.message)
})

redisClient.on('end', () => {
  console.log('REDIS CLIENT CLOSED')
})

process.on('SIGINT', () => {
  redisClient.quit()
})

module.exports = redisClient
