const express = require('express');
const index = require('./routes/index');
const app = express();

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
