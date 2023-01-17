const express = require('express');

const servicesRouter = require('./services.router');
const clientsRouter = require('./clients.router');
const chargesRouter = require('./charges.router');
const subscriptionsRouter = require('./subscriptions.router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/services', servicesRouter);
  router.use('/clients', clientsRouter);
  router.use('/charges', chargesRouter);
  router.use('/subscriptions', subscriptionsRouter);

}

module.exports = routerApi;
