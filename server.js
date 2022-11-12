import express from 'express'
import bodyParser from 'body-parser'
import makeCallback from './helpers/express-callback'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import authentication from './routers/authentication/authentication'
import users from './routers/users/users'
import countries from './routers/countries/countries'
import dashBoardMedia from './routers/dashBoardMedia/dashBoardMedia'
import cities from './routers/cities/cities'
import states from './routers/states/states'
import productCategory from './routers/productCategory/productCategory'
import productSubCategory from './routers/productSubCategory/productSubCategory'
import product from './routers/product/product'
import colour from './routers/colour/colour'
import size from './routers/size/size'
import notFound from './helpers/functions/not-found.js'
import cookieParser from 'cookie-parser'

var app = express()
app.use(cors({ credentials: true, origin: 'https://souqmuscat.com' }))
app.use(bodyParser.json())
app.use(express.static(__dirname))
app.use(cookieParser())
const PORT = process.env.PORT || 3000

app.use(`/auth`, authentication)
app.use(`/users`, users)
app.use(`/countries`, countries)
app.use(`/cities`, cities)
app.use(`/states`, states)
app.use(`/productCategory`, productCategory)
app.use(`/productSubCategory`, productSubCategory)
app.use(`/colours`, colour)
app.use(`/sizes`, size)
app.use(`/products`, product)
app.use(`/dashBoardMedia`, dashBoardMedia)
app.use(makeCallback(notFound))

// listen for requests
app.listen(PORT, () => {
  console.log(`SERVER_IS_LISTENING_ON_PORT ${PORT}`)
})
