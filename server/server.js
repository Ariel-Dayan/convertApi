const express = require("express");

const { applyGenericMiddleware } = require("./middleware/genericMiddleware");
const { applyRouteMiddleware } = require("./middleware/routeMiddleware");
const { applyErrorsMiddleware } = require("./middleware/errorsMiddleware");

const server = () => {
    const app = express();

    applyGenericMiddleware(app);
    applyRouteMiddleware(app);
    applyErrorsMiddleware(app);

    return app;
}


module.exports = server;