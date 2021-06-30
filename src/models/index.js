const PersonModel = require("./person-model");
const MovieModel = require("./movie-model");
const MovieCreditsModel = require("./movie-credits-model");
const MovieGenreModel = require("./movie-genre-model");

module.exports = {
  Person: PersonModel,
  Movie: MovieModel,
  MovieCredits: MovieCreditsModel,
  MovieGenre: MovieGenreModel,
};
