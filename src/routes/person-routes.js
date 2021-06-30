const Router = require("express").Router;

// const { authMiddleware } = require("../middlewares");
const { personController } = require("../controllers");

const personRouter = Router();

personRouter.get("/:id", personController.fetchPerson);
// personRouter.post("/", personController.addPerson);
personRouter.get("/", personController.fetchPersons);

module.exports = personRouter;
