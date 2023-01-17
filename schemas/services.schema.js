const Joi = require('joi');

const id = Joi.number().integer()
const name = Joi.string();
const description = Joi.string();
const periodicity = Joi.string();
const cost = Joi.number().precision(2);


const getServiceSchema = Joi.object({
	id: id.required(),
})

const createServiceSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  periodicity: periodicity.required(),
	cost: cost.required(),
});

module.exports = {
	getServiceSchema,
	createServiceSchema,
}
