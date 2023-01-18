const express = require('express');

const ServicesService = require('../services/services.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
	getServiceSchema,
  createServiceSchema
} = require('../schemas/services.schema');


const router = express.Router();
const service = new ServicesService();

router.get(
	'/',
	async (req, res, next) => {
		try {
			const services = await service.find();
			res.status(200).json(services);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	'/:id',
	validatorHandler(getServiceSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const srv = await service.findOne(id);
			res.status(200).json(srv);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	'/',
	validatorHandler(createServiceSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newService = await service.create(body);
			res.status(201).json({ newService });
		} catch (error) {
			next(error);
		}
	}
);

router.put(
	'/:id',
	validatorHandler(getServiceSchema, 'params'),
  validatorHandler(createServiceSchema, 'body'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const srv = await service.update(id, req.body);
			res.status(200).json(srv);
		} catch (error) {
			next(error);
		}
	}
);

router.delete(
	'/:id',
	validatorHandler(getServiceSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const srv = await service.delete(id);
			res.status(200).json(srv);
		} catch (error) {
			next(error);
		}
	}
);



module.exports = router;
