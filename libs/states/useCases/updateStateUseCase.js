/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { stateDB, stateEntity }
    response
     * based the response of functions
    */
export default function updateStateUseCaseFunction({ stateDB, stateEntity }) {
  return async function updateStates({
    intCountryId = 0,
    intStatePk = 0,
    strStateName = ''
  } = {}) {
    if (!intStatePk) {
      throw new Error('KEY_MISSING_STATE_PK')
    }
    const objValidatedState = await stateEntity({
      intCountryId,
      strStateName
    })
    let stateList = await stateDB.updateState({
      intStatePk: intStatePk,
      strStateName: objValidatedState.getStateName(),
      intCountryId: objValidatedState.getCountryId()
    })
    return stateList
  }
}
