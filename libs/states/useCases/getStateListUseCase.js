/*
    FUNCTION USE
     * in this function we are calling  persistance layers.
    request
     * { stateDB }
    response
     * based the response of functions
    */
export default function getStateListUseCaseFunction({ stateDB }) {
  return async function getStateList({ intCountryId }) {
    let stateList = await stateDB.getStates({ intCountryId })
    return stateList
  }
}
