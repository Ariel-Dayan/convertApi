const actions = require('../../logicHandler/actions/index');

const applyValidationMiddleware = (req, res, next) => {
    const from = req.params.from || req.query.from || req.body.from;
    const target = req.params.target || req.query.target || req.body.target;
    const { buffer } = req.file || {};
    
    let errs = '';

    if (!buffer) {
        errs += `Can not get file buffer (Check if the file is sent).\n`;
    } 
    
    if (!actions[from]) {
        errs += `Can not convert the format: '${from}',\nExisting formats: 
                 ${Object.keys(actions).join(', ')}.\n`;
    } else if (!actions[from][target]) {
        errs += `Can not convert to format: '${target}'.\nExisting formats: 
                 ${Object.keys(actions[from]).join(', ')}.\n`;
    }
    
    if(errs) {
        res.status(400).send(errs);
    } else {
        next();
    }
};

module.exports = { applyValidationMiddleware };