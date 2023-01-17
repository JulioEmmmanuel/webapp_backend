const Joi = require('joi');

const id = Joi.number().integer()
const name = Joi.string();
const lastName = Joi.string();
const gender = Joi.string();

const getClientSchema = Joi.object({
	id: id.required(),
})

const createClientSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  gender: gender.required()
});

module.exports = {
	getClientSchema,
	createClientSchema,
}
