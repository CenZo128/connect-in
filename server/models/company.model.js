const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Company = new Schema({
  name: {
    type: Schema.Types.String,
  },
  region: {
    type: Schema.Types.String,
  },
  job: {
    type: Schema.Types.String,
  },
  address: {
    type: Schema.Types.String,
  },
  telephone_number: {
    type: Schema.Types.String,
  },
});

module.exports = mongoose.model("Company", Company);
