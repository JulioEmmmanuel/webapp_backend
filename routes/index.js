const express = require('express');

const servicesRouter = require('./services.router');
const clientsRouter = require('./clients.router');
const chargesRouter = require('./charges.router');
const subscriptionsRouter = require('./subscriptions.router');
const usersRouter = require('./users.router');
const authRouter = require('./auth.router');


function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/services', servicesRouter);
  router.use('/clients', clientsRouter);
  router.use('/charges', chargesRouter);
  router.use('/subscriptions', subscriptionsRouter);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);

}

module.exports = routerApi;
