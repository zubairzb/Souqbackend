/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { countryDB, countryEntity }
    response
     * based the response of functions
    */

export default function createCountryUseCaseFunction({
  countryDB,
  countryEntity
}) {
  return async function createCountry({ strCountryName = '' } = {}) {
    const objValidatedCountry = await countryEntity({
      strCountryName
    });
    let countryList = await countryDB.createCountry({
      strCountryName: objValidatedCountry.getCountryName()
    });
    return countryList;
  };
}
