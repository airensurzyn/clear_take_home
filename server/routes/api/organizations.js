const express = require('express');
const router = express.Router();
const axios = require('axios');

const organizations = [
	{
		id: '1',
		created_at: '2020-10-06T20:33:33.956Z',
		name: 'Schulist - Lind',
		headcount: 69,
		is_public: false,
		address_1: '714 Josefa Inlet',
		city: 'South Brendabury',
		zip_code: '69722-8987',
		state: 'MS',
		lat: 36.7576391,
		lng: -76.0091672,
	},
	{
		id: '2',
		created_at: '2020-06-30T14:46:33.209Z',
		name: 'Dach, Koepp and Torphy',
		headcount: 69,
		is_public: false,
		address_1: '6982 Garret Burgs',
		city: 'New George',
		zip_code: '66036',
		state: 'ME',
	},
];

// @route GET api/organizations/geocodes
// @desc Get the lat/long geocodes from the org list
// @access Public
router.get('/geocodes', async (req, res) => {
	try {
		res.status(200).send(organizations);
	} catch (error) {
		logger.error({ error: error });
	}
});

module.exports = router;
