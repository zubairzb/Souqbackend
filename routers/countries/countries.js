import express from 'express'
import makeCallback from '../../helpers/express-callback'
const Router = express.Router()
import verifyToken from '../../helpers/middleware/loginVerifyMiddleware.js'

import {
  getCountryListController,
  createCountryController,
  updateCountryController,
  deleteCountryController
} from '../../libs/countries/appLayer'

Router.post('/getCountries', makeCallback(getCountryListController))
Router.post(
  '/createCountry',
  verifyToken,
  makeCallback(createCountryController)
)
Router.put('/updateCountry', verifyToken, makeCallback(updateCountryController))
Router.delete(
  '/deleteCountry',
  verifyToken,
  makeCallback(deleteCountryController)
)

module.exports = Router
