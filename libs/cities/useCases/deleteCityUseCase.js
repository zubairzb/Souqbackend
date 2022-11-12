/*
    FUNCTION USE
     * in this function we are calling persistance layers.
    request
     * { cityDB }
    response
     * based the response of functions
    */
export default function deleteCityUseCaseFunction({ cityDB }) {
  return async function deleteCities({ intCityPk = 0 } = {}) {
    if (!intCityPk) {
      throw new Error('KEY_MISSING_CITY_PK');
    }
    let cityList = await cityDB.deleteCity({
      intCityPk: intCityPk
    });
    return cityList;
  };
}
