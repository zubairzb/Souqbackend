import objQuery from './query'
import getDashBoardMediaDb from './dashBoardMediaPersistence.js'
import fs from 'fs'
let dashBoardMediaDB = getDashBoardMediaDb({ objQuery, fs })

export default dashBoardMediaDB
