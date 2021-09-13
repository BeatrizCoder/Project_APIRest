//npm install dotenv.//

require("dotenv").config();

const express = require("express");

const mongodb = require("mongodb");

const ObjectId = mongodb.ObjectId;

const connectToDb = require("./src/database/database");
const routes=require("./src/routes");

connectToDb();
(async () => {
const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;
  const dbName = process.env.DB_NAME;
  const dbChar = process.env.DB_CHAR;
  const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.${dbChar}.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  const options = {
    useUnifiedTopology: true,
  };
  const client = await mongodb.MongoClient.connect(connectionString, options);
  const db = client.db("PL_DB");
  const personagens = db.collection("PL");
  router.use((req, res, next) => {
    next();
  });

const app = express();

const port = 3000;

app.use(express.json());

app.use(routes);

app.listen(port, () =>
  console.info(`Servidor rodando em http://localhost:${port}`)
);
