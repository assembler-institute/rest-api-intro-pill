const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { movieGenreController } = require("../controllers");

const movieGenreRouter = Router();

movieGenreRouter.get("/:name", authMiddleware, movieGenreController.fetchGenre);
// genreRouter.post("/", movieGenreController.createGenre);
movieGenreRouter.get("/", authMiddleware, movieGenreController.fetchGenres);
//genreRouter.get("/genres/:id", authMiddleware, genreController.fetchGenreById);

module.exports = { movieGenreRouter: movieGenreRouter };
