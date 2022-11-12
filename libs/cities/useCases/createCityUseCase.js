/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { cityDB, cityEntity }
    response
     * based the response of functions
    */

export default function createCityUseCaseFunction({ cityDB, cityEntity }) {
  return async function createCities({
    intStateId = 0,
    strCityName = ''
  } = {}) {
    const objValidatedCity = await cityEntity({
      intStateId,
      strCityName
    })
    let cityList = await cityDB.createCity({
      strCityName: objValidatedCity.getCityName(),
      intStateId: objValidatedCity.getStateId()
    })
    return cityList
  }
}
