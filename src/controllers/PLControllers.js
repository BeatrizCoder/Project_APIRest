const Pl = require("../models/PL");

const index = (req, res) => {
  res.send({ message: "Endpoint was not found" });
};

const getAll = async (req, res) => {
  try {
    const Pls = await Pl.find();

    if (Pls.length === 0)
      return res
        .status(404)
        .send({ message: "There are no registered programming languages." });
    return res.send({ Pls });
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
  const newPl = await new Pl({
    name,
    fact,
    image,
  });

  try {
    await newPl.save();
    return res
      .status(201)
      .send({ message: "Programming language successfully created", newPl });
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
    const Pls = await Pl.find({ name: { $regex: `${name}`, $options: "i" } });
    return res.send({ Pls });
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
    const Pls = await Pl.find({
      name: { $regex: `${name}`, $options: "i" },
      fact: { $regex: `${fact}`, $options: "i" },
      image: { $regex: `${image}`, $options: "i" },
    });
    if (Pls.length === 0)
      return res.status(404).send({ erro: "Programming language not found." });

    return res.send({ Pls });
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
  index,
};
