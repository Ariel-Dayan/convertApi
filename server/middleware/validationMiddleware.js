const actions = require('../../logicHandler/actions/index');
const logger = require('../../utils/logger');

const applyValidationMiddleware = (req, res, next) => {
    const from = req.params.from || req.query.from || req.body.from;
    const target = req.params.target || req.query.target || req.body.target;
    const { buffer } = req.file || {};
    
    let errs = '';
    let relevantParameters = {};

    if (!buffer) {
        relevantParameters = {...relevantParameters, ...{'req.file': req.file}};
        errs += `Can not get file buffer (Check if the file is sent).\n`;
    } 
    
    if (!actions[from]) {
        relevantParameters = {...relevantParameters, ...{ from, target }};
        errs += `Can not convert the format: '${from}',\nExisting formats: 
                 ${Object.keys(actions).join(', ')}.\n`;
    } else if (!actions[from][target]) {
        relevantParameters = {...relevantParameters, ...{ from, target }};
        errs += `Can not convert to format: '${target}'.\nExisting formats: 
                 ${Object.keys(actions[from]).join(', ')}.\n`;
    }
    
    if(errs) {
        // logger.info({message: errs, parameters: relevantParameters});
        res.status(400).send(errs);
    } else {
        next();
    }
};

module.exports = { applyValidationMiddleware };