import objQuery from "./query";
import getUsersDb from "./userPersistence.js";

let userDB = getUsersDb({ objQuery });

export default userDB;
