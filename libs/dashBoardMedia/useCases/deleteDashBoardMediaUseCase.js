/*
    FUNCTION USE
     * in this function we are calling persistance layers.
    request
     * { dashBoardMediaDB }
    response
     * based the response of functions
    */
export default function deleteDashBoardMediaUseCaseFunction({
  dashBoardMediaDB
}) {
  return async function deleteDashBoardMedia({ intDashBoardMediaPk = 0 } = {}) {
    if (!intDashBoardMediaPk) {
      throw new Error('KEY_MISSING_DASH_BOARD_MEDIA_PK')
    }
    let dashBoardMediaList = await dashBoardMediaDB.deleteDashBoardMedia({
      intDashBoardMediaPk: intDashBoardMediaPk
    })
    return dashBoardMediaList
  }
}
