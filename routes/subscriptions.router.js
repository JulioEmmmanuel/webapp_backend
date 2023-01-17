const express = require('express');

const SubscriptionsService = require('../services/subscriptions.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
	getSubscriptionSchema,
  createSubscriptionSchema
} = require('../schemas/subscriptions.schema');

const router = express.Router();
const service = new SubscriptionsService();

router.get(
	'/',
	async (req, res, next) => {
		try {
			const sub = await service.find();
			res.status(200).json(sub);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	'/:id',
	validatorHandler(getSubscriptionSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const sub = await service.findOne(id);
			res.status(200).json(sub);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	'/',
	validatorHandler(createSubscriptionSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newSub = await service.create(body);
			res.status(201).json({ newSub });
		} catch (error) {
			next(error);
		}
	}
);

router.put(
	'/:id',
	validatorHandler(getSubscriptionSchema, 'params'),
  validatorHandler(createSubscriptionSchema, 'body'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const sub = await service.update(id, req.body);
			res.status(200).json(sub);
		} catch (error) {
			next(error);
		}
	}
);

router.delete(
	'/:id',
	validatorHandler(getSubscriptionSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const sub = await service.delete(id);
			res.status(200).json(sub);
		} catch (error) {
			next(error);
		}
	}
);



module.exports = router;
