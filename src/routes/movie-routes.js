const Router = require("express").Router;

// const { authMiddleware } = require("../middlewares");
const { movieController } = require("../controllers");

const movieRouter = Router();

movieRouter.get("/:id", movieController.fetchMovie);
movieRouter.put("/:id", movieController.updateMovie);

movieRouter.get("/", movieController.fetchMovies);
movieRouter.post("/", movieController.addMovie);

module.exports = movieRouter;
