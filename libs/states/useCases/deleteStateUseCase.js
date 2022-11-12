/*
    FUNCTION USE
     * in this function we are calling persistance layers.
    request
     * { stateDB }
    response
     * based the response of functions
    */
export default function deleteStateUseCaseFunction({ stateDB }) {
  return async function deleteStates({ intStatePk = 0 } = {}) {
    if (!intStatePk) {
      throw new Error('KEY_MISSING_STATE_PK')
    }
    let stateList = await stateDB.deleteState({
      intStatePk: intStatePk
    })
    return stateList
  }
}
