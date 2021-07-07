const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { movieController, movieCreditsController } = require("../controllers");

const movieRouter = Router();

movieRouter.get(
  "/:id/credits",
  authMiddleware,
  movieCreditsController.fetchCredits,
);
movieRouter.post(
  "/:id/credits",
  authMiddleware,
  movieCreditsController.addCredits,
);
movieRouter.put(
  "/:id/credits",
  authMiddleware,
  movieCreditsController.updateCredits,
);

movieRouter.get("/:id", authMiddleware, movieController.fetchMovie);
movieRouter.put("/:id", authMiddleware, movieController.updateMovie);

movieRouter.get("/", authMiddleware, movieController.fetchMovies);
movieRouter.post("/", authMiddleware, movieController.addMovie);

module.exports = { movieRouter: movieRouter };
