const mongoose = require("mongoose");

const Pl = require("../models/Pl");


const validaID = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ error: "Invalid ID" });
    return;
  }

  try {
    const result = await Pl.findById(id);
    if (!result) {
      return res
        .status(404)
        .send({ mensagem: "The programming language was not found" });
    }
    res.result = result;
  } catch (err) {
    console.log(`error on ValidaId.Error:${err}`);
    return res.status(500).send({ error: err });
  }
  next();
};
module.exports = { validaID };

