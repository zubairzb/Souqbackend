import objQuery from './query'
import getProductCategoryDb from './productCategoryPersistence.js'

let productCategoryDB = getProductCategoryDb({ objQuery })

export default productCategoryDB
