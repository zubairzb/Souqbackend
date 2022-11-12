import {
  createCountryUseCase,
  getCountryListUseCase,
  updateCountryUseCase,
  deleteCountryUseCase,
} from "../useCases/index.js";

import {
  getCountryControllerFunction,
  createCountryControllerFunction,
  updateCountryControllerFunction,
  deleteCountryControllerFunction,
} from "./countryControllers.js";

const getCountryListController = getCountryControllerFunction({
  getCountryListUseCase,
});
const createCountryController = createCountryControllerFunction({
  createCountryUseCase,
});
const updateCountryController = updateCountryControllerFunction({
  updateCountryUseCase,
});

const deleteCountryController = deleteCountryControllerFunction({
  deleteCountryUseCase,
});

const countryController = Object.freeze({
  getCountryListController,
  createCountryController,
  updateCountryController,
  deleteCountryController,
});

export default countryController;
export {
  getCountryListController,
  createCountryController,
  updateCountryController,
  deleteCountryController,
};
