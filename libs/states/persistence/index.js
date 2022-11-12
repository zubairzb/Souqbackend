import objQuery from './query'
import getStatesDb from './statePersistence.js'

let stateDB = getStatesDb({ objQuery })

export default stateDB
