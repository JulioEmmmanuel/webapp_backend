const Joi = require('joi');

const id = Joi.number().integer();
const idService = Joi.number().integer();
const idClient = Joi.number().integer();
const startDate = Joi.date();
const endDate = Joi.date();
const nextCharge = Joi.date();


const getSubscriptionSchema = Joi.object({
	id: id.required(),
});

const createSubscriptionSchema = Joi.object({
  idService: idService.required(),
  idClient: idClient.required(),
  startDate,
  endDate,
  nextCharge
});

module.exports = {
	getSubscriptionSchema,
	createSubscriptionSchema,
}
