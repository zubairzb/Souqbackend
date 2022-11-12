import getUserListUseCaseFunction from "./getUserListUseCase";
import createUserUseCaseFunction from "./createUserUseCase";
import updateUserUseCaseFunction from "./updateUserUseCase";
import deleteUserUseCaseFunction from "./deleteUserUseCase";
import userEntity from "../entity/index.js";

import userDB from "../persistence/index.js";

const createUserUseCase = createUserUseCaseFunction({ userDB, userEntity });
const getUsersListUseCase = getUserListUseCaseFunction({ userDB });
const updateUserUseCase = updateUserUseCaseFunction({ userDB, userEntity });
const deleteUserUseCase = deleteUserUseCaseFunction({ userDB });

const commentService = Object.freeze({
  createUserUseCase,
  getUsersListUseCase,
  updateUserUseCase,
  deleteUserUseCase
});

export default commentService;
export {
  createUserUseCase,
  getUsersListUseCase,
  updateUserUseCase,
  deleteUserUseCase
};
