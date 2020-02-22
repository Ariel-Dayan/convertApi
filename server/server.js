const express = require("express");
const apm = require('elastic-apm-node');
const kaserSender = require('kaser-sender');


const { applyGenericMiddleware } = require("./middleware/genericMiddleware");
const { applyRouteMiddleware } = require("./middleware/routeMiddleware");
const { applyErrorsMiddleware } = require("./middleware/errorsMiddleware");
const { applyValidationMiddleware } = require("./middleware/validationMiddleware");
const { KASER_INFO, APM_INFO, SERVICE_NAME } = require('../config/config');

const {
    hostname,
    port,
    interval,
    intervalMargin,
    useHttp,
    useKasersConfig
} = KASER_INFO;

const { SERVER } = APM_INFO;

const server = () => {
    if (process.env.NODE_ENV === 'production') {
        apm.start({
            serviceName: SERVICE_NAME,
            serverUrl: SERVER,
            captureBody: 'all',
        });

        kaserSender.start({
            kaserService: {
                hostname,
                port,
            },
            serviceName: SERVICE_NAME,
            interval,
            intervalMargin,
            useHttp,
            useKasersConfig,
            logger: {
                allowedLevels: {
                    ERROR: true,
                },
            },
        });
    }

    const app = express();

    applyGenericMiddleware(app);
    applyRouteMiddleware(app);
    applyErrorsMiddleware(app);

    return app;
}


module.exports = server;