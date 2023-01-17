const express = require("express");
const routerApi = require("./routes");
const cors = require("cors");

const {logErrors, errorHandler, boomErrorHandler, ormErrorHandler} = require("./middlewares/error.handler")


const createApp = () => {
  const app = express();

  const whitelist = ["http://localhost:8080", "https://myapp.co"];

  app.use(express.json());
  setUpCors(whitelist, app);

  routerApi(app);

  app.use(logErrors);
  app.use(ormErrorHandler);
  app.use(boomErrorHandler);
  app.use(errorHandler);

  return app;
}

const setUpCors = (whitelist, app) => {
  const options = {
    origin: (origin, callback) => {
      if(whitelist.includes(origin) || !origin){
        callback(null, true);
      } else {
        callback(new Error("No permitido"));
      }
    }
  }

  app.use(cors(options));

}

module.exports = {createApp};

