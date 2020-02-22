const path = require('path');
const loggerblueai = require('loggerblueai');

const { LOGGER_INFO, SERVICE_NAME } = require(path.resolve(__dirname, '../config/config'));

const { LOGGER_URL } = LOGGER_INFO;
const logger = loggerblueai(LOGGER_URL, SERVICE_NAME);

module.exports = logger;