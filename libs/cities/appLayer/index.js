import {
  createCityUseCase,
  getCitiesListUseCase,
  updateCityUseCase,
  deleteCityUseCase
} from '../useCases/index.js';

import {
  getCityControllerFunction,
  createCityControllerFunction,
  updateCityControllerFunction,
  deleteCityControllerFunction
} from './cityControllers.js';

const getCitiesListController = getCityControllerFunction({
  getCitiesListUseCase
});
const createCitiesController = createCityControllerFunction({
  createCityUseCase
});
const updateCitiesController = updateCityControllerFunction({
  updateCityUseCase
});

const deleteCitiesController = deleteCityControllerFunction({
  deleteCityUseCase
});

const cityController = Object.freeze({
  getCitiesListController,
  createCitiesController,
  updateCitiesController,
  deleteCitiesController
});

export default cityController;
export {
  getCitiesListController,
  createCitiesController,
  updateCitiesController,
  deleteCitiesController
};
