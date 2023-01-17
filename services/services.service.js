const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize');

class ServicesService {

  constructor(){
  }

  async create(data) {
    const newService = await models.Services.create(data);
    return newService;
  }

  async find() {
    const allServices = await models.Services.findAll();
    return allServices;
  }

  async findOne(id) {
    const service = await models.Services.findByPk(id);
    return service;
  }

  async update(id, changes) {
    const service = await this.findOne(id);
    if(!service){
      throw boom.notFound();
    }
    const rta = await service.update(changes);
    return rta;
  }

  async delete(id) {
    const service = await this.findOne(id);
    if(!service){
      throw boom.notFound();
    }
    await service.destroy();
    return {message: "Borrado con éxito"};
  }

}

module.exports = ServicesService;
