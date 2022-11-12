/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { colourDB, colourEntity }
    response
     * based the response of functions
    */

export default function createColourUseCaseFunction({
  colourDB,
  colourEntity
}) {
  return async function createColour({ strColourName = '' } = {}) {
    const objValidatedColour = await colourEntity({
      strColourName
    })
    let colourList = await colourDB.createColour({
      strColourName: objValidatedColour.getColourName()
    })
    return colourList
  }
}
