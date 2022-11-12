/*
    FUNCTION USE
     * in this function we are calling persistance layers.
    request
     * { colourDB }
    response
     * based the response of functions
    */
export default function deleteColourUseCaseFunction({ colourDB }) {
  return async function deleteColour({ intColourPk = 0 } = {}) {
    if (!intColourPk) {
      throw new Error('KEY_MISSING_COLOUR_PK')
    }
    let colourList = await colourDB.deleteColour({
      intColourPk: intColourPk
    })
    return colourList
  }
}
