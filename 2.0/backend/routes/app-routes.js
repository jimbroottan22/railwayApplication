const router = require('express').Router();
const mongoose = require('mongoose');

const profile = require('../models/profile-model');
const account = require('../models/account-model');
const session = require('../models/session-model');
const train = require('../models/trainsModel');
const token = require('../token');
const axios = require('axios');
const _ = require('lodash');
const JSON = require('circular-json');
var passport = require('passport');
require('../config/jwt');

var Bcrypt = require('bcryptjs');

//require("../config/jwt");

router.post('/login', (req, res) => {
	if (!req.body.email) {
		return res.status(401).send({ message: 'An `email` is required' });
	} else if (!req.body.password) {
		return res.status(401).send({ message: 'A `password` is required' });
	}
	account.findOne({ email: req.body.email }, (error, result) => {
		console.log(result);
		if (error) {
			return res.status(500).send(error);
		}
		if (!Bcrypt.compareSync(req.body.password, result.password)) {
			return res.status(500).send({ message: 'The password is invalid' });
		}

		let obj = new session({
			pid: result.id
		});
		session.findOne({ pid: result.id }, function(err, data) {
			if (!data) {
				obj
					.save()
					.then(ses =>
						res.send({
							sid: token.generateAccessToken(ses.id),
							message: 'sucessfull'
						})
					)
					.catch(error => res.status(500).send(error));
			} else {
				res.send({
					sid: token.generateAccessToken(data.id),
					message: 'sucessfull'
				});
			}
		});
	});
});
router.post('/account', async (req, res) => {
	if (!req.body.email) {
		return res.status(401).send({ message: 'An `email` is required' });
	} else if (!req.body.password) {
		return res.status(401).send({ message: 'A `password` is required' });
	} else {
		await account.findOne({ email: req.body.email }).then(result => {
			console.log(result);
			if (result) {
				return res.status(401).send({ message: 'email already exist' });
			} else {
				let acc = {
					email: req.body.email,
					password: Bcrypt.hashSync(req.body.password, 10)
				};
				var prof = req.body;

				delete profile.password;
				new profile(prof).save().catch(function(error) {
					return res.status(500).send(error);
				});
				new account(acc).save().catch(function(error) {
					return res.status(500).send(error);
				});
				return res.status(200).send({ message: 'sucessfull' });
			}
		});
	}
});

router.post('/trains', passport.authenticate('jwt-t', { session: false }), (req, res) => {
	console.log(req.user);

	train.findOneAndUpdate(
		{ pid: req.user.pid },
		{ $push: { trainSearch: req.body } },
		{ new: true, upsert: true },
		function(err, doc) {
			if (err) {
				console.log('Something wrong when updating data!');
			}

			console.log(doc);
		}
	);

	console.log(
		`https://api.railwayapi.com/v2/between/source/${req.body.from}/dest/${req.body.to}/date/${req.body
			.date}/apikey/hpibx22qsc/`
	);

	axios
		.get(
			`https://api.railwayapi.com/v2/between/source/${req.body.from}/dest/${req.body.to}/date/${req.body
				.date}/apikey/hpibx22qsc/`
		)
		.then(response => {
			res.send(response.data);
		})
		.catch(error => {
			console.log('response.data axios' + error);
		});
});

router.get('/searches', passport.authenticate('jwt-t', { session: false }), async (req, res) => {
	console.log(req.user.pid);
	searches = await train.findOne({ pid: req.user.pid });
	console.log(searches);
	res.send(searches);
});

module.exports = router;
