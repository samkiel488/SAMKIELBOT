const express = require('express');
const { deployBot, getDeployments, updateDeployment } = require('../controllers/deployController');
const { protect } = require('../utils/authMiddleware');

const router = express.Router();

router.route('/').post(protect, deployBot).get(protect, getDeployments);
router.route('/:id').put(protect, updateDeployment);

module.exports = router;
