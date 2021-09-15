const mongoose = require("mongoose");

const PlSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    fact: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { collection: "Pls" }
);

module.exports = mongoose.model("Pl", PlSchema);
