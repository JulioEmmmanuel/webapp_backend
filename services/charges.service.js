const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');


class ChargesService {

  constructor(){
  }

  async create(data) {

    const newCharge = await models.Charges.create(data);
    return newCharge;
  }

  async find() {
    const allCharges = await models.Charges.findAll({
      include: [
        {
          association: 'subscriptions',
          include: ['clients', 'services']
        }
      ]
    });
    return allCharges;
  }

  async findOne(id) {
    const charge = await models.Charges.findByPk(id, {
      include: [
        {
          association: 'subscriptions',
          include: ['clients', 'services']
        }
      ]
    });
    return charge;
  }

  async update(id, changes) {
    const charge = await this.findOne(id);
    if(!charge){
      throw boom.notFound();
    }
    const rta = await charge.update(changes);
    return rta;
  }

  async delete(id) {
    const charge = await this.findOne(id);
    if(!charge){
      throw boom.notFound();
    }
    await charge.destroy();
    return {message: "Borrado con éxito"};
  }

}

module.exports = ChargesService;
