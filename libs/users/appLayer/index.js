import {
  createUserUseCase,
  getUsersListUseCase,
  updateUserUseCase,
  deleteUserUseCase
} from "../useCases/index.js";

import {
  getUserControllerFunction,
  createUserControllerFunction,
  updateUserControllerFunction,
  deleteUserControllerFunction
} from "./userControllers.js";

const getUsersListController = getUserControllerFunction({
  getUsersListUseCase
});
const createUsersController = createUserControllerFunction({
  createUserUseCase
});
const updateUsersController = updateUserControllerFunction({
  updateUserUseCase
});

const deleteUsersController = deleteUserControllerFunction({
  deleteUserUseCase
});

const userController = Object.freeze({
  getUsersListController,
  createUsersController,
  updateUsersController,
  deleteUsersController
});

export default userController;
export {
  getUsersListController,
  createUsersController,
  updateUsersController,
  deleteUsersController
};
