import getCityListUseCaseFunction from "./getCityListUseCase";
import createCityUseCaseFunction from "./createCityUseCase";
import updateCityUseCaseFunction from "./updateCityUseCase";
import deleteCityUseCaseFunction from "./deleteCityUseCase";
import cityEntity from "../entity/index.js";

import cityDB from "../persistence/index.js";

const createCityUseCase = createCityUseCaseFunction({ cityDB, cityEntity });
const getCitiesListUseCase = getCityListUseCaseFunction({ cityDB });
const updateCityUseCase = updateCityUseCaseFunction({ cityDB, cityEntity });
const deleteCityUseCase = deleteCityUseCaseFunction({ cityDB });

const commentService = Object.freeze({
  createCityUseCase,
  getCitiesListUseCase,
  updateCityUseCase,
  deleteCityUseCase,
});

export default commentService;
export {
  createCityUseCase,
  getCitiesListUseCase,
  updateCityUseCase,
  deleteCityUseCase,
};
