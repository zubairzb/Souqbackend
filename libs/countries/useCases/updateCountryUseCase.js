/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { countryDB, countryEntity }
    response
     * based the response of functions
    */
export default function updateCountryUseCaseFunction({
  countryDB,
  countryEntity
}) {
  return async function updateCountry({
    intCountryPk = 0,
    strCountryName = ''
  } = {}) {
    if (!intCountryPk) {
      throw new Error('KEY_MISSING_COUNTRY_PK');
    }
    const objValidatedCountry = await countryEntity({
      strCountryName
    });
    let countryList = await countryDB.updateCountry({
      intCountryPk: intCountryPk,
      strCountryName: objValidatedCountry.getCountryName()
    });
    return countryList;
  };
}
