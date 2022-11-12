/*
  FUNCTION USE 
  *  this function for basic validations.
  request
  *  {
  *     strCountryName = STRING,
  *   }
  response(success)
  * some freeze object
      * getCountryName
 response(Error)
  * key missing errors
   */
export default function countryEntityFunction() {
  return async function countryEntity({ strCountryName = '' } = {}) {
    if (!strCountryName) throw new Error('KEY_MISSING_COUNTRY_NAME');
    return Object.freeze({
      getCountryName: () => strCountryName.trim()
    });
  };
}
