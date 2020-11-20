const express = require("express");
const route = express.Router();
const CompanyController = require('../controllers/Company');

route.get('/', CompanyController.read)
route.post('/', CompanyController.create)
route.delete('/:id', CompanyController.delete)
route.put('/:id', CompanyController.update)


module.exports = route;
