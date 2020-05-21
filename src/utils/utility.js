export const checkValidity = (value, rules) => {
  let isValid = true;
  let error = "";
  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
    if (isValid === false) {
      error = "fields are empty";
    }
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
    if (isValid === false) {
      error = "field should be minimum of 4 characters";
    }
  }
  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
    if (isValid === false) {
      error = "password should be min 8 and max 15 characters";
    }
  }
  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
    if (isValid === false) {
      error = "email is incorrect";
    }
  }
  return error;
};
