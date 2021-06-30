const Router = require("express").Router;

// const { authMiddleware } = require("../middlewares");
const { movieGenreController } = require("../controllers");

const movieGenreRouter = Router();

movieGenreRouter.get("/:name", movieGenreController.fetchGenre);
// genreRouter.post("/", movieGenreController.createGenre);
movieGenreRouter.get("/", movieGenreController.fetchGenres);
//genreRouter.get("/genres/:id", authMiddleware, genreController.fetchGenreById);

module.exports = movieGenreRouter;
