/*
    FUNCTION USE
     * in this function we are calling  persistance layers.
    request
     * { countryDB }
    response
     * based the response of functions
    */
export default function getCountryListUseCaseFunction({ countryDB }) {
  return async function getCountryList(requestsParam) {
    let countryList = await countryDB.getAllCountry(requestsParam);
    return countryList;
  };
}
