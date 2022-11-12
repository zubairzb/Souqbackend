/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { colourDB, colourEntity }
    response
     * based the response of functions
    */
export default function updateColourUseCaseFunction({
  colourDB,
  colourEntity
}) {
  return async function updateColour({
    intColourPk = 0,
    strColourName = ''
  } = {}) {
    if (!intColourPk) {
      throw new Error('KEY_MISSING_COLOUR_PK')
    }
    const objValidatedColour = await colourEntity({
      strColourName
    })
    let colourList = await colourDB.updateColour({
      intColourPk: intColourPk,
      strColourName: objValidatedColour.getColourName()
    })
    return colourList
  }
}
