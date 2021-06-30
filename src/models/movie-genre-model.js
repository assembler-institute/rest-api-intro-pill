const mongoose = require("mongoose");

const MovieGenreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Genre name is required"],
  },
  /*  movies: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "movie",
    },
  ], */
});

const MovieGenreModel = new mongoose.model("movie-genre", MovieGenreSchema);

module.exports = MovieGenreModel;
