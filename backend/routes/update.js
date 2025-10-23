const express = require('express');
const { updateBot, getUpdateHistory } = require('../controllers/updateController');
const { protect } = require('../utils/authMiddleware');

const router = express.Router();

router.post('/', protect, updateBot);
router.get('/:deploymentId', protect, getUpdateHistory);

module.exports = router;
