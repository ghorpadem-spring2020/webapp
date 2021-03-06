/**
 * @file logger.js
 * @namespace logger
 * @author Mrunal
 * Created Date: 01/18/2020
 * @description Logger
 */
const log4js = require('log4js');
const path = require("path");
var appRoot = require('app-root-path');
log4js.configure({
    appenders: {
        out: {
            type: 'stdout'
        },
        app: {
            type: 'file',
            filename: `${appRoot}/app.log`,
            maxLogSize: 10485760,
            backups: 1,
            compress: true
        }
    },
    categories: {
        default: {
            appenders: ['out', 'app'],
            level: 'info'
        }
    }
});
const logger = log4js.getLogger();
logger.debug('Logger Level On : ', 'info');
logger.info('check');
module.exports = logger;
