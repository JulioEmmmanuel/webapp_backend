const {config} = require("../config/config");

const URI = config.dbUri;

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres'
  }, production: {
    url: URI,
    dialect: 'postgres'
  }
}
