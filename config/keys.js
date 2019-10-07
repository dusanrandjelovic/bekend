//module.exports = {
  //  mongoURI: "mongodb+srv://nesa:nesamentol@dreact-bsqje.mongodb.net/test?retryWrites=true&w=majority",
  //  secretOrKey: "secret"        //  kljuc za generisanje tokena
//};

/*
"start": "node server.js",
*/

if(process.env.NODE_ENV === "production"){
    module.exports = require("./keys_prod");
}  else {
    module.exports = require("./keys_dev");
}