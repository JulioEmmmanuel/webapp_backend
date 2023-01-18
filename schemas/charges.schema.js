const Joi = require('joi');

const id = Joi.number().integer();
const idSubscription = Joi.number().integer();
const amount = Joi.number().precision(2);
const isPaid = Joi.boolean();
const isCancelled = Joi.boolean();
const date = Joi.date();

const getChargeSchema = Joi.object({
	id: id.required(),
})

const createChargeSchema = Joi.object({
  idSubscription: idSubscription.required(),
  amount: amount.required(),
  isPaid,
  isCancelled,
  date
});

module.exports = {
	getChargeSchema,
	createChargeSchema,
}
