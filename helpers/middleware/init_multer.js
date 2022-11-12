import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, callback) => {
    if (file.fieldname === 'files')
      callback(null, path.join(__dirname, '../../assets/files'))
    if (file.fieldname === 'dashBoardFiles')
      callback(null, path.join(__dirname, '../../assets/dashBoardFiles'))
  },
  filename: (req, file, callback) => {
    callback(null, new Date().toISOString() + file.originalname)
  }
})
const limits = {
  fileSize: 1024 * 1024 * 5
}
const fileFilter = (req, file, callback) => {
  if (
    file.mimetype !== 'image/png' &&
    file.mimetype !== 'image/jpg' &&
    file.mimetype !== 'image/jpeg' &&
    file.mimetype !== 'video/mp4'
  ) {
    var err = new Error('UNSUPPORTED_FILE_TYPE')
    err.code = 'filetype'
    return callback(err)
  } else {
    var fileName = crypto.randomBytes(10).toString('hex')
    file.filename = fileName
    callback(null, fileName + '.png')
  }
}
export const upload = multer({
  storage: fileStorageEngine,
  limits: limits,
  fileFilter: fileFilter
})

export const uploadMultiple = upload.fields([{ name: 'files', maxCount: 5 }])
