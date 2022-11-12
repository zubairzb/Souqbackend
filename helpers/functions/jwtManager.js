import jwt from 'jsonwebtoken'
import {
  ACCESS_MY_SECRET,
  REFRESH_MY_SECRET
} from '../constants/constVariables'

// import redisClient from './init_redis'

export async function jwtGenerate({ intUserId, blnAccessToken }) {
  try {
    let strSecret = blnAccessToken ? ACCESS_MY_SECRET : REFRESH_MY_SECRET
    let strExpiresInChanger = blnAccessToken ? '1y' : '1y'
    const payload = {
      intUserId: intUserId
    }
    let strToken = jwt.sign(payload, strSecret, {
      expiresIn: strExpiresInChanger
    })
    // redisClient.SET(
    //   intUserId,
    //   strToken,
    //   'EX',
    //   365 * 24 * 60 * 60,
    //   (err, replay) => {
    //     if (err) {
    //       console.log(err.message)
    //       throw new Error('SOMETHING_WENT_WRONG')
    //     }
    //   }
    // )

    return strToken
  } catch (error) {
    console.log(error.message)
  }
}

export async function verifyRefreshToken({ strRefreshToken }) {
  try {
    let strToken = jwt.verify(strRefreshToken, REFRESH_MY_SECRET)
    const intUserId = strToken.intUserId
    // const redisRes = await redisClient.getAsync(intUserId)
    // if (strRefreshToken === redisRes) return intUserId
    if (!intUserId) throw new Error('UNAUTHORIZED')
  } catch (error) {
    console.log(error.message)
  }
}
