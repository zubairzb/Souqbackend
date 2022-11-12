/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { sizeDB, sizeEntity }
    response
     * based the response of functions
    */
export default function updateSizeUseCaseFunction({ sizeDB, sizeEntity }) {
  return async function updateSize({ intSizePk = 0, strSizeName = '' } = {}) {
    if (!intSizePk) {
      throw new Error('KEY_MISSING_SIZE_PK')
    }
    const objValidatedSize = await sizeEntity({
      strSizeName
    })
    let sizeList = await sizeDB.updateSize({
      intSizePk: intSizePk,
      strSizeName: objValidatedSize.getSizeName()
    })
    return sizeList
  }
}
