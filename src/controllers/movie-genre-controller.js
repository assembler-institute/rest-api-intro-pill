const db = require("../models");
const {
  generateNextPagePath,
  generatePrevPagePath,
} = require("../utils/paginationControl");

async function addGenre(req, res, next) {
  const { name } = req.body;

  try {
    const genre = await db.MovieGenre.create({
      name: name,
    });

    res.status(201).send({
      data: genre._id,
    });
  } catch (err) {
    next(err);
  }
}

async function fetchGenres(req, res, next) {
  const { size = 20, offset = 0 } = req.query;

  const pageSize = parseInt(size);
  const pageOffset = parseInt(offset);
  try {
    const totalGenres = await db.MovieGenre.countDocuments();
    const genres = await db.MovieGenre.find({}, "-__v")
      .skip(pageOffset)
      .limit(pageSize);

    res.status(201).send({
      total: totalGenres,
      next: generateNextPagePath({
        pathPrefix: "/genres/movie",
        currOffset: pageOffset,
        pageSize: pageSize,
        totalItems: totalGenres,
      }),
      prev: generatePrevPagePath({
        pathPrefix: "/genres/movie",
        currOffset: pageOffset,
        pageSize: pageSize,
      }),
      data: genres,
    });
  } catch (err) {
    next(err);
  }
}

async function fetchGenre(req, res, next) {
  const { name } = req.params;

  try {
    const genre = await db.MovieGenre.findOne({ name: name }, "-__v").lean();

    res.status(200).send({
      data: genre,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addGenre: addGenre,
  fetchGenres: fetchGenres,
  fetchGenre: fetchGenre,
};
