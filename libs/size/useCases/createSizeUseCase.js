/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { sizeDB, sizeEntity }
    response
     * based the response of functions
    */

export default function createSizeUseCaseFunction({ sizeDB, sizeEntity }) {
  return async function createSize({ strSizeName = '' } = {}) {
    const objValidatedSize = await sizeEntity({
      strSizeName
    })
    let sizeList = await sizeDB.createSize({
      strSizeName: objValidatedSize.getSizeName()
    })
    return sizeList
  }
}
