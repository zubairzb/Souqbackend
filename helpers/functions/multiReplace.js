/*
  FUNCTION USE 
  * this function can replace multiple words from a string
  request
   * an object of replacement like keys and values
   * {nobody:'rafath',nothing:'Code'}
   * and the string for replacement
   * {my name is nobody and i like nothing}
  response
   *  {my name is rafath and i like code};
   */

export default function multiReplace(objReplaces, strQueryForReplace) {
  if (!objReplaces) return 0;
  if (!strQueryForReplace) return 0;
  for (let strWord in objReplaces) {
    strQueryForReplace = strQueryForReplace.replace(
      strWord,
      objReplaces[strWord]
    );
  }
  return strQueryForReplace;
}
