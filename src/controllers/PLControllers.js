const Pl = require("../models/PL");

const getAll = async (req, res) => {
  try {
    const PLS = await Pl.find();
    console.log(PLS);
    console.log(PLS.length);
    if (PLS.length === 0)
      return res
        .status(404)
        .send({ message: "There are no registered programming languages." });
    return res.send({ PLS });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Pl.findById(id);
    if (!result) {
      res
        .status(404)
        .json({ message: "The programming language was not found" });
      return;
    }
    return res.send({ result });
  } catch (err) {
    console.log(`error on GetById.Error:${err}`);
  
    res.status(500).send({ error: err.message });
  }
};

const create = async (req, res) => {
  const { name, fact, image } = req.body;

  if (!name || !fact || !image) {
    res.status(400).send({
      message:
        "You have not submitted all the necessary information to register it ",
    });
    return;
  }
  const newPL = await new Pl({
    name,
    fact,
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
  const { name, fact, image } = req.body;

  if (!name || !fact || !image) {
    res.status(400).send({
      message:
        "You have not submitted all the necessary information to register it ",
    });
    return;
  }

  res.result.name = name;
  res.result.fact = fact;
  res.result.image = image;

  try {
    await res.result.save();
    res.send({ message: "Programming language successfully updated" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const del = async (req, res) => {
  try {
    await res.result.remove();
    return res.send({ message: "Programming language successfully removed" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const filterByname = async (req, res) => {
  const name = req.query.name;
  if (!name) {
    res.status(400).send({ erro: "Parameter not received" });
    return;
  }
  try {
    const PLS = await PL.find({ $regex: `${nome}}` });
    return res.send({ result });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const filterAll = async (req, res) => {
  let { name, fact, image } = req.query;
  !name ? (name = "") : (name = name);
  !fact ? (fact = "") : (fact = fact);
  !image ? (image = "") : (image = image);

  try {
    const PLS = await PL.find({
      name: { $regex: `${name}`, $options: "i" },
      fact: { $regex: `${fact}`, $options: "i" },
      image: { $regex: `${image}`, $options: "i" },
    });
    if (PLS.length === 0)
      return res.status(404).send({ erro: "Programming language not found." });

    return res.send({ result });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  filterByname,
  filterAll,
};
