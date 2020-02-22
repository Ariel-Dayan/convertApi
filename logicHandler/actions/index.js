const fs = require('fs');
const path = require('path');
const ACTIONS_PATH = __dirname;
const THIS_FILE_PATH = path.resolve(__dirname, __filename);

const getActions = (actionPath, actionHandler={}) => {
  if (fs.existsSync(actionPath)) {
    fs.readdirSync(actionPath).forEach(file => {
      const curPath = path.join(actionPath, file);
      if (fs.lstatSync(curPath).isDirectory()) { 
        actionHandler = getActions(curPath, actionHandler);
      } else if(curPath !== THIS_FILE_PATH) {
        actionHandler[path.basename(curPath, '.js')] = require(curPath);
      }
    });
  }

  return actionHandler;
};

module.exports = getActions(ACTIONS_PATH, {});