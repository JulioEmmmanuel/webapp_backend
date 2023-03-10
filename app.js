const express = require("express");
const routerApi = require("./routes");
const cors = require("cors");
const fileUpload = require('express-fileupload');

const {TimerInstance} = require("./utils/timer")

const {logErrors, errorHandler, boomErrorHandler, ormErrorHandler} = require("./middlewares/error.handler")

require('./utils/auth/index')

const createApp = () => {
  const app = express();

  const whitelist = ["http://localhost:3000", "https://myapp.co"];

  app.use(express.json());
  setUpCors(whitelist, app);
  app.use(fileUpload());

  routerApi(app);

  app.use(logErrors);
  app.use(ormErrorHandler);
  app.use(boomErrorHandler);
  app.use(errorHandler);

  TimerInstance.run();

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

