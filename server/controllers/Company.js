const { Company } = require("../models");

class CompanyController {
  static async read(req, res) {
    try {
      const companies = await Company.find();
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static async create(req, res) {
    const company = req.body;

    try {
      await Company.create(company);
      res.status(201).json({ message: "success" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static update() {}
  static delete() {}
}

module.exports = CompanyController;
