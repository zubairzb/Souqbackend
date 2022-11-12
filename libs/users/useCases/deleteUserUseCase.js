/*
    FUNCTION USE
     * in this function we are calling persistance layers.
    request
     * { userDB }
    response
     * based the response of functions
    */
export default function deleteUserUseCaseFunction({ userDB }) {
  return async function deleteUsers({ intUserPk = 0 } = {}) {
    if (!intUserPk) {
      throw new Error('KEY_MISSING_USER_PK');
    }
    let userList = await userDB.deleteUser({
      intUserPk: intUserPk
    });
    return userList;
  };
}
