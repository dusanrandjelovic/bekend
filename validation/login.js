const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  const errors = {};

  if (!Validator.isEmail(data.email)) {
    errors.email = "Ispravan email je obavezan!";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Polje za unos emaila je obavezno!";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Polje za unos passvord-a je obavezno!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
