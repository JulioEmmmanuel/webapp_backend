const Joi = require('joi');

const id = Joi.number().integer()
const username = Joi.string();
const email = Joi.string();
const password = Joi.string();

const getUserSchema = Joi.object({
	id: id.required(),
})

const createUserSchema = Joi.object({
  username: username.required(),
  email: email.required(),
  password: password.required()
});

module.exports = {
	getUserSchema,
	createUserSchema,
}
