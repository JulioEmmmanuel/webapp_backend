'use strict';

const { ClientsSchema, CLIENTS_TABLE} = require('./../models/clients.model');
const { ServicesSchema, SERVICES_TABLE} = require('./../models/services.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CLIENTS_TABLE, ClientsSchema);
    await queryInterface.createTable(SERVICES_TABLE, ServicesSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CLIENTS_TABLE);
    await queryInterface.dropTable(SERVICES_TABLE);
  }
};
