import objQuery from './query'
import getProductDb from './productPersistence.js'
import fs from 'fs'
let productDB = getProductDb({ objQuery, fs })

export default productDB
