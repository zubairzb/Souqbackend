/*
  FUNCTION USE 
  * this function for validate email address
  request
   * {email}
  response
   *  { emailValid: BOOLEAN, message: ["ARRAY OF STRING"] };
   */
let emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
export default function isEmailValid(email) {
  let validationResponse = { emailValid: true, message: [] };
  if (!email) {
    validationResponse.emailValid = false;
    validationResponse.message.push("KEY_MISSING_EMAIL");
    return validationResponse;
  } else {
    if (email.length > 254) {
      validationResponse.emailValid = false;
      validationResponse.message.push("INVALID_EMAIL");
      return validationResponse;
    }

    let valid = emailRegex.test(email);
    if (!valid) {
      validationResponse.emailValid = false;
      validationResponse.message.push("INVALID_EMAIL");
      return validationResponse;
    } else {
      // Further checking of some things regex can't handle
      let parts = email.split("@");
      if (parts[0].length > 64) {
        validationResponse.emailValid = false;
        validationResponse.message.push("INVALID_EMAIL");
        return validationResponse;
      }
      let domainParts = parts[1].split(".");
      if (
        domainParts.some(function (part) {
          return part.length > 63;
        })
      ) {
        validationResponse.emailValid = false;
        validationResponse.message.push("INVALID_EMAIL");
        return validationResponse;
      }
    }
    return validationResponse;
  }
}
