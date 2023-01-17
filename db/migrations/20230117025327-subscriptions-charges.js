'use strict';

const { SubscriptionsSchema, SUBSCRIPTIONS_TABLE} = require('./../models/subscriptions.model');
const { ChargesSchema, CHARGES_TABLE} = require('./../models/charges.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(SUBSCRIPTIONS_TABLE, SubscriptionsSchema);
    await queryInterface.createTable(CHARGES_TABLE, ChargesSchema);

  },

  async down (queryInterface) {
    await queryInterface.dropTable(CHARGES_TABLE);
    await queryInterface.dropTable(SUBSCRIPTIONS_TABLE);
  }
};
