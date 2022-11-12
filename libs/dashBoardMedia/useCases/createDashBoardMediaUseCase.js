/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { dashBoardMediaDB, dashBoardMediaEntity }
    response
     * based the response of functions
    */

export default function createDashBoardMediaUseCaseFunction({
  dashBoardMediaDB,
  dashBoardMediaEntity
}) {
  return async function createDashBoardMedia({
    objDashBoardMedias = {},
    intProductId = 0
  } = {}) {
    const objValidatedDashBoardMedia = await dashBoardMediaEntity({
      objDashBoardMedias,
      intProductId
    })
    let dashBoardMediaList = await dashBoardMediaDB.createDashBoardMedia({
      objDashBoardMedias: objValidatedDashBoardMedia.getDashBoardMedias(),
      intProductId: objValidatedDashBoardMedia.getProductId()
    })
    return dashBoardMediaList
  }
}
