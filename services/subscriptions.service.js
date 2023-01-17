const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');
const {TimerInstance} = require("../utils/timer");
const {DateUtil} = require("../utils/date.util");

const {ChargeGeneratorInstance} = require("../utils/chargeGenerator");


class SubscriptionsService {

  async create(data) {
    const newSub = await models.Subscriptions.create(data);
    const allData = await this.findOne(newSub.dataValues.id);
    const {cost, periodicity} = allData.services.dataValues;


    let delta = DateUtil.stringToDays(periodicity);
    let nextDate = DateUtil.getDeltaDays(TimerInstance.getToday(), delta);
    ChargeGeneratorInstance.addCharge(nextDate, {
      "periodicity": delta,
      "data": {
        "idSubscription": newSub.dataValues.id,
        "amount": cost
      }
    });

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
        'charges'
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
