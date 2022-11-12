// in this file we are config the mySql connection string
import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

try {
  const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    max: process.env.MAX_CONNECTION_POOL,
    connectionTimeoutMillis: process.env.TIME_OUT_IN_MILLIS,
    idleTimeoutMillis: process.env.IDLE_TIME_OUT_IN_MILLIS
  }

  const pool = new Pool(config)
  console.log('CONNECTED_TO_DB')
  module.exports = pool
} catch {
  console.log('SOMETHING_WENT_WRONG_ON_DB_CONNECTION')
}
