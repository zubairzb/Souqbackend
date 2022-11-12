// this middleware is used to JWT authentication
import { ACCESS_MY_SECRET } from '../constants/constVariables'
import jwt from 'jsonwebtoken'

export default async function verify(req, res, next) {
  let authHeader = req.headers.authorization
  if (authHeader == undefined) {
    res.status(401).send({ error: 'UNAUTHORIZED_ACCESS' })
  } else {
    let token = authHeader.split(' ')[1]
    jwt.verify(token, ACCESS_MY_SECRET, (err, decoded) => {
      if (err) {
        if (err['name'] === 'JsonWebTokenError') {
          res.status(500).send({ error: 'UNAUTHORIZED_ACCESS' })
        } else {
          res.status(500).send({ error: err.message })
        }
      }
      if (decoded) req.body = { intUserId: decoded['intUserId'], ...req.body }
      next()
    })
  }
}
