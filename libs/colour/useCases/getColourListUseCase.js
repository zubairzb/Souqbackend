/*
    FUNCTION USE
     * in this function we are calling  persistance layers.
    request
     * { colourDB }
    response
     * based the response of functions
    */
export default function getColourListUseCaseFunction({ colourDB }) {
  return async function getColourList(requestsParam) {
    let colourList = await colourDB.getAllColour(requestsParam)
    return colourList
  }
}
