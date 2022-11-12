/*
    FUNCTION USE
     * in this function we are calling entities and persistance layers.
    request
     * { dashBoardMediaDB, dashBoardMediaEntity }
    response
     * based the response of functions
    */
export default function updateDashBoardMediaUseCaseFunction({
  dashBoardMediaDB,
  dashBoardMediaEntity
}) {
  return async function updateDashBoardMedia({
    intDashBoardMediaPk = 0,
    objDashBoardMedias = {},
    intProductId = 0
  } = {}) {
    if (!intDashBoardMediaPk) {
      throw new Error('KEY_MISSING_DASH_BOARD_MEDIA_PK')
    }
    const objValidatedDashBoardMedia = await dashBoardMediaEntity({
      objDashBoardMedias,
      intProductId
    })
    let dashBoardMediaList = await dashBoardMediaDB.updateDashBoardMedia({
      intDashBoardMediaPk: intDashBoardMediaPk,
      objDashBoardMedias: objValidatedDashBoardMedia.getDashBoardMedias(),
      intProductId: objValidatedDashBoardMedia.getProductId()
    })
    return dashBoardMediaList
  }
}
