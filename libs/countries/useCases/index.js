import getCountryListUseCaseFunction from "./getCountryListUseCase";
import createCountryUseCaseFunction from "./createCountryUseCase";
import updateCountryUseCaseFunction from "./updateCountryUseCase";
import deleteCountryUseCaseFunction from "./deleteCountryUseCase";
import countryEntity from "../entity/index.js";

import countryDB from "../persistence/index.js";

const createCountryUseCase = createCountryUseCaseFunction({
  countryDB,
  countryEntity,
});
const getCountryListUseCase = getCountryListUseCaseFunction({ countryDB });
const updateCountryUseCase = updateCountryUseCaseFunction({
  countryDB,
  countryEntity,
});
const deleteCountryUseCase = deleteCountryUseCaseFunction({ countryDB });

const commentService = Object.freeze({
  createCountryUseCase,
  getCountryListUseCase,
  updateCountryUseCase,
  deleteCountryUseCase,
});

export default commentService;
export {
  createCountryUseCase,
  getCountryListUseCase,
  updateCountryUseCase,
  deleteCountryUseCase,
};
