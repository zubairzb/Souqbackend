/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { cityDB, cityEntity }
    response
     * based the response of functions
    */
export default function updateCityUseCaseFunction({ cityDB, cityEntity }) {
  return async function updateCities({
    intStateId = 0,
    intCityPk = 0,
    strCityName = ''
  } = {}) {
    if (!intCityPk) {
      throw new Error('KEY_MISSING_CITY_PK')
    }
    const objValidatedCity = await cityEntity({
      intStateId,
      strCityName
    })
    let cityList = await cityDB.updateCity({
      intCityPk: intCityPk,
      strCityName: objValidatedCity.getCityName(),
      intStateId: objValidatedCity.getStateId()
    })
    return cityList
  }
}
