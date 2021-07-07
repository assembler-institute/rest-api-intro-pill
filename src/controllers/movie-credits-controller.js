const db = require("../models");
const { generateResponse } = require("../utils/generateResponse");

async function addCredits(req, res, next) {
  const { id: movieId } = req.params;
  const { crew = [], cast = [] } = req.body;

  try {
    const credits = await db.MovieCredits.create({
      movieId: movieId,
      crew: crew,
      cast: cast,
    });

    res.status(201).send(
      generateResponse({
        data: credits._id,
      }),
    );
  } catch (err) {
    next(err);
  }
}

async function updateCredits(req, res, next) {
  const { id: movieId } = req.params;
  const { crew = [], cast = [] } = req.body;

  try {
    const credits = await db.MovieCredits.findOneAndUpdate(
      { movieId: movieId },
      {
        $addToSet: {
          crew: {
            $each: [...crew],
          },
          cast: {
            $each: [...cast],
          },
        },
      },
      {
        new: true,
        upsert: true,
        omitUndefined: true,
        select: {
          __v: 0,
        },
      },
    ).lean();

    res.status(200).send(
      generateResponse({
        data: credits,
      }),
    );
  } catch (err) {
    next(err);
  }
}

async function fetchCredits(req, res, next) {
  const { id: movieId } = req.params;

  try {
    const populate = { path: "cast.personId", select: "-__v" };

    const movieCredits = await db.MovieCredits.findOne(
      { movieId: movieId },
      "-__v",
    )
      .populate(populate)
      .lean();

    res.status(200).send(
      generateResponse({
        data: movieCredits,
      }),
    );
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addCredits: addCredits,
  updateCredits: updateCredits,
  fetchCredits: fetchCredits,
};
