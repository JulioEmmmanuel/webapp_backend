const Joi = require('joi');

const id = Joi.number().integer();
const idSubscription = Joi.number().integer();
const amount = Joi.number().precision(2);
const isPaid = Joi.boolean();
const isCancelled = Joi.boolean();

const getChargeSchema = Joi.object({
	id: id.required(),
})

const createChargeSchema = Joi.object({
  idSubscription: idSubscription.required(),
  amount: amount.required(),
  isPaid,
  isCancelled
});

module.exports = {
	getChargeSchema,
	createChargeSchema,
}
