const http = require('http');
const dotenv = require('dotenv');
const server = require('./server/server');
const logger = require('./utils/logger');
// initialize
dotenv.config();

const app = server();

const port = process.env.PORT || '8000';
app.set('port', port);

const httpServer = http.createServer(app);

httpServer.listen(port);

logger.info('Server is listening on port: ' + port);