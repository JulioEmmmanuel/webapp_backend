const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');
const {TimerInstance} = require("../utils/timer");
const {DateUtil} = require("../utils/date.util");

class SubscriptionsService {

  constructor(){

  }

  async create(data) {
    let today = TimerInstance.getToday();
    data.startDate = DateUtil.formatDate(today);
    const newSub = await models.Subscriptions.create(data);

    return newSub;
  }

  async find() {
    const allSubs = await models.Subscriptions.findAll({
      include: [
        'services',
        'clients',
        'charges'
      ]
    });
    return allSubs;
  }

  async findOne(id) {
    const sub = await models.Subscriptions.findByPk(id, {
      include: [
        'services',
        'clients',
      ]
    });
    return sub;
  }

  async update(id, changes) {
    const sub = await this.findOne(id);
    if(!sub){
      throw boom.notFound();
    }
    const rta = await sub.update(changes);
    return rta;
  }

  async cancel(id) {
    const sub = await this.findOne(id);
    console.log(id);
    if(!sub){
      throw boom.notFound();
    }
    let today = TimerInstance.getToday();
    let endDate = DateUtil.formatDate(today);
    const rta = await sub.update({
      "endDate": endDate
    });
    return rta;
  }

  async delete(id) {
    const sub = await this.findOne(id);
    if(!sub){
      throw boom.notFound();
    }
    await sub.destroy();
    return {message: "Borrado con éxito"};
  }

}

module.exports = SubscriptionsService;
