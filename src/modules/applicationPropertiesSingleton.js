/**
 * @file applicationPropertiesSingleton.js
 * @namespace modules
 * @author Mrunal
 * Created Date: 01/19/2020
 * @description Application Properties
 */
const port = {
    port:8080
}
const contextPath = {
    contextPath: "/assignment"
}
var Sequelize = require('sequelize');
var sequelize = new Sequelize('CSYE6225', 'A', '1234',
    {
        host: 'localhost',
        dialect: 'mariadb'
    }

);
module.exports = {
    port,
    contextPath,
    sequelize : sequelize
}