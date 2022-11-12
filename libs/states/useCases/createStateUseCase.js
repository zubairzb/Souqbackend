/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { stateDB, stateEntity }
    response
     * based the response of functions
    */

export default function createStateUseCaseFunction({ stateDB, stateEntity }) {
  return async function createStates({
    intCountryId = 0,
    strStateName = ''
  } = {}) {
    const objValidatedState = await stateEntity({
      intCountryId,
      strStateName
    })
    let stateList = await stateDB.createState({
      strStateName: objValidatedState.getStateName(),
      intCountryId: objValidatedState.getCountryId()
    })
    return stateList
  }
}
