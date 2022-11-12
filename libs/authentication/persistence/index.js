import objQuery from './query'
import {
  jwtGenerate,
  verifyRefreshToken
} from '../../../helpers/functions/jwtManager'
import authDbFunction from './authPersistence'
import bcrypt from 'bcrypt'

let authDB = authDbFunction({
  objQuery,
  jwtGenerate,
  verifyRefreshToken,
  bcrypt
})

export default authDB
