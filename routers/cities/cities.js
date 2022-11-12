import express from 'express'
import makeCallback from '../../helpers/express-callback'
const Router = express.Router()
import verifyToken from '../../helpers/middleware/loginVerifyMiddleware.js'

import {
  getCitiesListController,
  createCitiesController,
  updateCitiesController,
  deleteCitiesController
} from '../../libs/cities/appLayer'

Router.post('/getCities', makeCallback(getCitiesListController))
Router.post('/createCity', verifyToken, makeCallback(createCitiesController))
Router.put('/updateCity', verifyToken, makeCallback(updateCitiesController))
Router.delete('/deleteCity', verifyToken, makeCallback(deleteCitiesController))

module.exports = Router
