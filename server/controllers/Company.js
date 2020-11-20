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

  static update(req, res) {}
  static async delete(req, res) {
    const { id } = req.params
    try {
      await Company.findByIdAndRemove(id)
      res.status(200).json({message: 'success'});
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

module.exports = CompanyController;
