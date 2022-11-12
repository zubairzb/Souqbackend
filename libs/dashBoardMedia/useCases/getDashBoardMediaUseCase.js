/*
    FUNCTION USE
     * in this function we are calling  persistance layers.
    request
     * { dashBoardMediaDB }
    response
     * based the response of functions
    */
export default function getDashBoardMediaListUseCaseFunction({
  dashBoardMediaDB
}) {
  return async function getDashBoardMediaList({ intProductId = '' }) {
    let dashBoardMediaList = await dashBoardMediaDB.getDashBoardMedia({
      intProductId
    })
    return dashBoardMediaList
  }
}
