const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  const errors = {};

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Ime mora biti od 2 do 30 karaktera";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Polje za unos imena je obavezno!";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Ispravan email je obavezan!";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Polje za unos emaila je obavezno!";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password mora biti od 6 do 30 karaktera!";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Polje za unos passvord-a je obavezno!";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwordi moraju da se poklapaju!";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Polje za potvrdu passworda je obavezno!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
