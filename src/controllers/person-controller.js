const db = require("../models");
const { generateUrl } = require("../utils/utils");
const { generateResponse } = require("../utils/generateResponse");

const {
  generateNextPagePath,
  generatePrevPagePath,
} = require("../utils/paginationControl");

async function addPerson(req, res, next) {
  const { name, roles = [], birthday, deathday, placeOfBirth = "" } = req.body;

  try {
    const person = await db.Person.create({
      name: name,
      roles: roles,
      birthday: birthday,
      deathday: deathday,
      placeOfBirth: placeOfBirth,
    });

    res.status(201).send(
      generateResponse({
        data: person._id,
      }),
    );
  } catch (err) {
    next(err);
  }
}

async function updatePerson(req, res, next) {
  const { id: personId } = req.params;
  const { name, roles, birthday, deathday, placeOfBirth } = req.body;

  try {
    const person = await db.Person.findOneAndUpdate(
      { _id: personId },
      {
        $set: {
          name: name,
          birthday: birthday,
          deathday: deathday,
          placeOfBirth: placeOfBirth,
        },
        $addToSet: {
          roles: {
            $each: [...roles],
          },
        },
      },
      {
        new: true,
        omitUndefined: true,
        select: {
          __v: 0,
        },
      },
    );

    res.status(200).send(
      generateResponse({
        data: person,
      }),
    );
  } catch (err) {
    next(err);
  }
}

async function fetchPersons(req, res, next) {
  const { size = 20, offset = 0 } = req.query;

  const requestUrl = generateUrl(req);

  const pageSize = parseInt(size);
  const pageOffset = parseInt(offset);

  try {
    const totalPersons = await db.Person.countDocuments();
    const persons = await db.Person.find({}, "-__v")
      .skip(pageOffset)
      .limit(pageSize);

    res.status(201).send(
      generateResponse({
        data: {
          total: totalPersons,
          next: generateNextPagePath({
            pathPrefix: requestUrl,
            currOffset: pageOffset,
            pageSize: pageSize,
            totalItems: totalPersons,
          }),
          prev: generatePrevPagePath({
            pathPrefix: requestUrl,
            currOffset: pageOffset,
            pageSize: pageSize,
          }),
          data: persons,
        },
      }),
    );
  } catch (err) {
    next(err);
  }
}

async function fetchPerson(req, res, next) {
  const { id: personId } = req.params;

  try {
    const person = await db.Person.findOne({ _id: personId }, "-__v").lean();

    res.status(200).send(
      generateResponse({
        data: person,
      }),
    );
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addPerson: addPerson,
  updatePerson: updatePerson,
  fetchPersons: fetchPersons,
  fetchPerson: fetchPerson,
};
