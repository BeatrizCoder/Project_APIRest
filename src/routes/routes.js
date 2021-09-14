const routes = require("express").Router();

const PlController = require("../controllers/PLControllers");
const PlMiddlewares = require("../middlewares/PLMiddleawares");

routes.get("/Pl", PlController.getAll);
routes.get("/Pl/:id", PlMiddlewares.validaID, PlController.getById);
routes.post("/Pl", PlController.create);
routes.put("/Pl/:id", PlMiddlewares.validaID, PlController.update);
routes.delete("/Pl/:id", PlMiddlewares.validaID, PlController.del);

routes.get("/filterByname", PlController.filterByname);
routes.get("/filterAll", PlController.filterAll);

module.exports = routes;
