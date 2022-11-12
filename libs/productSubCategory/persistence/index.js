import objQuery from './query'
import getProductSubCategoryDb from './productSubCategoryPersistence.js'

let productSubCategoryDB = getProductSubCategoryDb({ objQuery })

export default productSubCategoryDB
