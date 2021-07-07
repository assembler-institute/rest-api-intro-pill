const app = require("./server");
const { config } = require("./config");
const connect = require("./db/connect");

const { seedMovies, seedMovieGenres } = require("./db/seed");

connect().then(async function onServerInit() {
  config.logger.info(`DB connected`);

  // await seedMovieGenres();
  // await seedMovies();

  app.listen(config.app.PORT, () => {
    config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
  });
});
