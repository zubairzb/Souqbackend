/*
    FUNCTION USE
     * in this function we are calling  persistance layers.
    request
     * { sizeDB }
    response
     * based the response of functions
    */
export default function getSizeListUseCaseFunction({ sizeDB }) {
  return async function getSizeList(requestsParam) {
    let sizeList = await sizeDB.getAllSize(requestsParam)
    return sizeList
  }
}
