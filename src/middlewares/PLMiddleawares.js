const mongoose = require("mongoose");

const PL = require("../models/PL");

const validaID = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: "Invalid ID" });
    return;
  }

  try {
    const PL = await PL.findById(id);
    if (!PL) {
      return res
        .status(404)
        .send({ mensagem: "The programming language was not found" });
    }
    res.PL = PL;
  } catch (err) {
    return res.status(500).send({ error: err });
  }
  next();
};
module.exports = { validaID };
