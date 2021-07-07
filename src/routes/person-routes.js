const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { personController } = require("../controllers");

const personRouter = Router();

personRouter.get("/:id", authMiddleware, personController.fetchPerson);
personRouter.put("/:id", authMiddleware, personController.updatePerson);

personRouter.get("/", authMiddleware, personController.fetchPersons);
personRouter.post("/", authMiddleware, personController.addPerson);

module.exports = { personRouter: personRouter };
