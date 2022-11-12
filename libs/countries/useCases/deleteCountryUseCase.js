/*
    FUNCTION USE
     * in this function we are calling persistance layers.
    request
     * { countryDB }
    response
     * based the response of functions
    */
export default function deleteCountryUseCaseFunction({ countryDB }) {
  return async function deleteCountry({ intCountryPk = 0 } = {}) {
    if (!intCountryPk) {
      throw new Error('KEY_MISSING_COUNTRY_PK');
    }
    let countryList = await countryDB.deleteCountry({
      intCountryPk: intCountryPk
    });
    return countryList;
  };
}
