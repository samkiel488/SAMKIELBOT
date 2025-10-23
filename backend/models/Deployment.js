const mongoose = require('mongoose');

const deploymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  botName: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'running', 'stopped', 'failed'],
    default: 'pending',
  },
  deployedAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Deployment', deploymentSchema);
