const express = require("express");
const route = express.Router();
const companyRoute = require('./company');

route.use('/company', companyRoute)

module.exports = route;
