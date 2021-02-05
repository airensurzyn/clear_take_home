const express = require('express');
const index = require('./routes/index');
const app = express();

const axios = require('axios');

const options = {
	method: 'GET',
	url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
	params: { address: '714 Josefa Inlet, South Brendabury, MS', language: 'en' },
	headers: {
		'x-rapidapi-key': process.env.API_KEY,
		'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
	},
};

/*axios
	.request(options)
	.then(function (response) {
		console.log(response.data.results[0].geometry.location);
	})
	.catch(function (error) {
		console.error(error);
	});*/

app.use(function (req, res, next) {
	if (
		req.hostname != 'localhost' &&
		req.headers['x-forwarded-proto'] &&
		req.headers['x-forwarded-proto'] === 'http'
	) {
		return res.redirect(['https://', req.get('Host'), req.url].join(''));
	}
	next();
});

app.use('/', index);

app.use(function (req, res, next) {
	next(createError(404));
});

module.exports = app;
