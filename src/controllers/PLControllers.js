const PL = require("../models/PL");

const getAll = async (req, res) => {
  try {
    const PL = await PL.find();
    return res.send({ PLS });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const PL = await PL.findById(id);
    if (!PL) {
      res
        .status(404)
        .json({ message: "The programming language was not found" });
      return;
    }
    return res.send({ PL });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const create = async (req, res) => {
  const { name, curiosity, image } = req.body;

  if (!name || !curiosity || !image) {
    res.status(400).send({
      message:
        "You have not submitted all the necessary information to register it ",
    });
    return;
  }
  const newPL = await new PL({
    name,
    curiosity,
    image,
  });

  try {
    await newPL.save();
    return res
      .status(201)
      .send({ message: "Programming language successfully created", newPL });
  } catch (err) {
    res.status(500).send({ erro: err });
  }
};

const update = async (req, res) => {
  const { name, curiosity, image } = req.body;

  if (!name || !curiosity || !image) {
    res.status(400).send({
      message:
        "You have not submitted all the necessary information to register it ",
    });
    return;
  }

  res.PL.name = name;
  res.PL.curiosity = curiosity;
  res.PL.image = image;

  try {
    await res.PL.save();
    res.send({ message: "Programming language successfully updated" });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const del = async (req, res) => {
  try {
    await res.PL.remove();
    return res.send({ message: "Programming language successfully removed" });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
};
