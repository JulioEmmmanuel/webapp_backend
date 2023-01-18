const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize');

class ClientsService {

  constructor(){
  }

  async create(data) {
    const newClient = await models.Clients.create(data);
    return newClient;
  }

  async find() {
    const allClients = await models.Clients.findAll();
    return allClients;
  }

  async findOne(id) {
    const client = await models.Clients.findByPk(id, {
      include: [
        {
          association: 'subscriptions',
          include: ['services']
        }
      ]
    });
    return client;
  }

  async update(id, changes) {
    const client = await this.findOne(id);
    if(!client){
      throw boom.notFound();
    }
    const rta = await client.update(changes);
    return rta;
  }

  async delete(id) {
    const client = await this.findOne(id);
    if(!client){
      throw boom.notFound();
    }
    await client.destroy();
    return {message: "Borrado con éxito"};
  }

}

module.exports = ClientsService;
