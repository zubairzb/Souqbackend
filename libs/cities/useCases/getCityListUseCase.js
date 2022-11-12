/*
    FUNCTION USE
     * in this function we are calling  persistance layers.
    request
     * { cityDB }
    response
     * based the response of functions
    */
export default function getCityListUseCaseFunction({ cityDB }) {
  return async function getCityList({ intStateId }) {
    let cityList = await cityDB.getCities({ intStateId })
    return cityList
  }
}
