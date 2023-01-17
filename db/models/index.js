const {Services, ServicesSchema} = require('./services.model');
const {Clients, ClientsSchema} = require('./clients.model');
const {Subscriptions, SubscriptionsSchema} = require('./subscriptions.model');
const {Charges, ChargesSchema} = require('./charges.model');



function setUpModels(sequelize){
  Services.init(ServicesSchema, Services.config(sequelize));
  Clients.init(ClientsSchema, Clients.config(sequelize));
  Subscriptions.init(SubscriptionsSchema, Subscriptions.config(sequelize));
  Charges.init(ChargesSchema, Charges.config(sequelize));
}

module.exports = setUpModels;