const express = require('express');

const ClientsService = require('../services/clients.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
	getClientSchema,
  createClientSchema
} = require('../schemas/clients.schema');

const router = express.Router();
const service = new ClientsService();

router.get(
	'/',
	async (req, res, next) => {
		try {
			const clients = await service.find();
			res.status(200).json(clients);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	'/:id',
	validatorHandler(getClientSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const client = await service.findOne(id);
			res.status(200).json(client);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	'/',
	validatorHandler(createClientSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newClient = await service.create(body);
			res.status(201).json({ newClient });
		} catch (error) {
			next(error);
		}
	}
);

router.put(
	'/:id',
	validatorHandler(getClientSchema, 'params'),
  validatorHandler(createClientSchema, 'body'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const client = await service.update(id, req.body);
			res.status(200).json(client);
		} catch (error) {
			next(error);
		}
	}
);

router.delete(
	'/:id',
	validatorHandler(getClientSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const rta = await service.delete(id);
			res.status(200).json(rta);
		} catch (error) {
			next(error);
		}
	}
);



module.exports = router;
