const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", () => console.error());
  db.once("open", () => console.info("Connected to Database"));
};

module.exports = connectToDb;
