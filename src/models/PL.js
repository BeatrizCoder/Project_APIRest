const mongoose = require("mongoose");
const PLSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  curiosity: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("PL", PLSchema);
