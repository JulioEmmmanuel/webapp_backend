const express = require('express');

const ChargesService = require('../services/charges.service');
const {TimerInstance} = require("../utils/timer");
const {DateUtil} = require("../utils/date.util");
const validatorHandler = require('../middlewares/validator.handler');
const {
	getChargeSchema,
  createChargeSchema
} = require('../schemas/charges.schema');

const router = express.Router();
const service = new ChargesService();

router.get(
	'/',
	async (req, res, next) => {
		try {
			const charges = await service.find();
			res.status(200).json(charges);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	'/:id',
	validatorHandler(getChargeSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const charge = await service.findOne(id);
			res.status(200).json(charge);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	'/',
	validatorHandler(createChargeSchema, 'body'),
	async (req, res, next) => {
		try {
			const body = req.body;
      let today = TimerInstance.getToday();
      body.date = DateUtil.formatDate(today);
      console.log(body);
			const newCharge = await service.create(body);
			res.status(201).json({ newCharge });
		} catch (error) {
			next(error);
		}
	}
);

router.put(
	'/:id',
	validatorHandler(getChargeSchema, 'params'),
  validatorHandler(createChargeSchema, 'body'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const charge = await service.update(id, req.body);
			res.status(200).json(charge);
		} catch (error) {
			next(error);
		}
	}
);

router.delete(
	'/:id',
	validatorHandler(getChargeSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const charge = await service.delete(id);
			res.status(200).json(charge);
		} catch (error) {
			next(error);
		}
	}
);



module.exports = router;
