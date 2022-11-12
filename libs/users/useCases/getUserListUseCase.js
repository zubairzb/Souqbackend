/*
    FUNCTION USE
     * in this function we are calling  persistance layers.
    request
     * { userDB }
    response
     * based the response of functions
    */
export default function getUserListUseCaseFunction({ userDB }) {
  return async function getUserList({ intUserPk = 0, intRolePk = 0 }) {
    let userList = await userDB.getAllUsers({
      intUserPk: intUserPk,
      intRolePk: intRolePk
    });
    return userList;
  };
}
