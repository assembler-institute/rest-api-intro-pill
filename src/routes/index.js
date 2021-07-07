const { userRouter } = require("./user-routes");
const { personRouter } = require("./person-routes");
const { movieRouter } = require("./movie-routes");
const { movieGenreRouter } = require("./movie-genres-routes");
const { accountRouter } = require("./account-routes");

module.exports = {
  userRouter,
  accountRouter,
  personRouter,
  movieRouter,
  movieGenreRouter,
};
