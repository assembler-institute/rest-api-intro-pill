const dotenv = require("dotenv");
const logger = require("loglevel");

dotenv.config();

const {
  NODE_ENV = "development",
  MONGO_DB_URL_PRODUCTION,
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_TEST,
  PORT = 4000,
} = process.env;

const ENV = NODE_ENV || "development";

logger.enableAll();

const CONFIG = {
  production: {
    app: {
      PORT: PORT || 4000,
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: MONGO_DB_URL_PRODUCTION,
    },
  },
  development: {
    app: {
      PORT: PORT || 4000,
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
  },
  test: {
    app: {
      PORT: PORT || 4000,
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: MONGO_DB_URL_TEST,
    },
  },
};

module.exports = CONFIG[ENV];
