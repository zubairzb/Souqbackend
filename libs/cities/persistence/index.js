import objQuery from "./query";
import getCitiesDb from "./cityPersistence.js";

let cityDB = getCitiesDb({ objQuery });

export default cityDB;
