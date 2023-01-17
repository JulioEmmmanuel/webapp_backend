const express = require('express');

const servicesRouter = require('./services.router');
const clientsRouter = require('./clients.router');


function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/services', servicesRouter);
  router.use('/clients', clientsRouter);

}

module.exports = routerApi;
