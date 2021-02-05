const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.static(path.join(__dirname, '../../client/build')));
router.use('/api/organizations', require('./api/organizations'));

router.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
