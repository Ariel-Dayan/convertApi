const { PassThrough } = require('stream');
const multer = require('multer');

const { applyValidationMiddleware } = require("./validationMiddleware");
const actions = require('../../logicHandler/actions/index.js');

const convertFile = async (req, res, next) => {
    const from = req.params.from || req.query.from || req.body.from;
    const target = req.params.target || req.query.target || req.body.target;
    const { buffer } = req.file || {};

    try {
        const readStream = new PassThrough();
        const fileBuffer = await actions[from][target](buffer);
        readStream.end(fileBuffer);
        readStream.pipe(res.status(200));

    } catch(err) {
        console.error(err);
        res.status(500).send(err)
    }

};

const applyRouteMiddleware = app => {
    app.get('/', 
            multer({ storage: multer.memoryStorage() }).single('file'), 
            applyValidationMiddleware, 
            convertFile);
};

module.exports = { applyRouteMiddleware };