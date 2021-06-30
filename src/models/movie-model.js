const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Movie title is required"],
  },
  releaseYear: Number,
  duration: Number,
  originalLanguage: String,
  posterPath: String,
  plot: String,
  budget: {
    type: Number,
    min: 0,
  },
  productionCountries: [String],
  productionCompanies: [String],
  genres: [String],
  externalIds: {
    type: Map,
    of: String,
  },
});

const MovieModel = new mongoose.model("movie", MovieSchema);

module.exports = MovieModel;
