const db = require("../models");
const { encryptString } = require("../utils/encrypt");
const { generateResponse } = require("../utils/generateResponse");

async function signUp(req, res, next) {
  const { email, password, firstname, lastname } = req.body;

  try {
    const encryptedPassword = await encryptString(password);
    const { _id } = await db.User.create({
      email: email,
      password: encryptedPassword,
      firstName: firstname,
      lastName: lastname,
      active: true,
    });

    return res.status(200).send(
      generateResponse({
        data: {
          id: _id,
          email,
        },
      }),
    );
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function fetchUsers(req, res, next) {
  try {
    const dbResponse = await db.User.find();

    if (dbResponse.error) {
      res.status(400).send(
        generateResponse({
          error: dbResponse.error,
        }),
      );
    }

    res.status(200).send(
      generateResponse({
        data: dbResponse.data,
      }),
    );
  } catch (error) {
    next(error);
  }
}

async function fetchUserById(req, res, next) {
  const {
    params: { id: userId },
    query: { fullFetch },
  } = req;

  try {
    const dbResponse = await db.User.findById(userId);

    if (dbResponse.error) {
      res.status(400).send(
        generateResponse({
          error: dbResponse.error,
        }),
      );
    }

    res.status(200).send(
      generateResponse({
        data: dbResponse.data,
      }),
    );
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signUp: signUp,
  fetchUsers: fetchUsers,
  fetchUserById: fetchUserById,
};
