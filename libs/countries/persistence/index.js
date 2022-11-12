import objQuery from './query'
import getCountryDb from './countryPersistence.js'

let countryDB = getCountryDb({ objQuery })

export default countryDB
