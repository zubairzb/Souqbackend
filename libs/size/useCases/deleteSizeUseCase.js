/*
    FUNCTION USE
     * in this function we are calling persistance layers.
    request
     * { sizeDB }
    response
     * based the response of functions
    */
export default function deleteSizeUseCaseFunction({ sizeDB }) {
  return async function deleteSize({ intSizePk = 0 } = {}) {
    if (!intSizePk) {
      throw new Error('KEY_MISSING_SIZE_PK')
    }
    let sizeList = await sizeDB.deleteSize({
      intSizePk: intSizePk
    })
    return sizeList
  }
}
