const routes = require("express").Router();

const PLController = require("../controllers/PLControllers");
const PLMiddlewares = require("../middlewares/PLMiddleawares");

routes.get("/PL", PLController.getAll);
routes.get("/PL/:id", PLMiddlewares.validaID, PLController.getById);
routes.post("/PLS", PLController.create);
routes.put("/PLS/:id", PLMiddlewares.validaID, PLController.update);
routes.delete("/PL/:id", PLMiddlewares.validaID, PLController.del);

routes.get("/filterByname", PLController.filterByname);
routes.get("/filterAll", PLController.filterAll);

module.exports = routes;
