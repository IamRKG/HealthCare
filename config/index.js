const configValue = require("./config");

const getMlabConnectionString = () => "mongodb://" + configValue.userName + ":" + configValue.password + "@ds157544.mlab.com:57544/rmd_dev"

const getDBConnectionString = () => "mongodb://localhost:27017/rmd_dev"
module.exports = {
    getMlabConnectionString:getMlabConnectionString,
    getDBConnectionString:getDBConnectionString
}