const db = require("../models");
const { getSeedMovies, getSeedMovieGenres } = require("./seed-data");

async function seedMovies() {
  const movies = [...getSeedMovies()].map((movie) => ({
    ...movie,
  }));

  await db.Movie.deleteMany({});
  await db.Movie.create([...movies]);
}

async function seedMovieGenres() {
  const genres = [...getSeedMovieGenres()].map((genre) => ({
    name: genre,
  }));

  await db.MovieGenre.deleteMany({});
  await db.MovieGenre.insertMany([...genres]);
}

module.exports = {
  seedMovies: seedMovies,
  seedMovieGenres: seedMovieGenres,
};
