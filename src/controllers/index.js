const movieGenreController = require("./movie-genre-controller");
const movieCreditsController = require("./movie-credits-controller");
const movieController = require("./movie-controller");
const personController = require("./person-controller");
const userController = require("./user-controller");
const authController = require("./auth-controller");

module.exports = {
  authController: authController,
  userController: userController,
  movieGenreController: movieGenreController,
  movieCreditsController: movieCreditsController,
  movieController: movieController,
  personController: personController,
};
