const express = require('express');
const { calculateMean, calculateMedian, calculateMode, handleStatsRequest } = require('./stats');

const app = express();

app.get('/mean', (req, res) => {
  handleStatsRequest(req, res, calculateMean);
});

app.get('/median', (req, res) => {
  handleStatsRequest(req, res, calculateMedian);
});

app.get('/mode', (req, res) => {
  handleStatsRequest(req, res, calculateMode);
});

const server = app.listen(3000, () => {
  console.log(`Server listening on port ${3000}`);
});

module.exports = server;
