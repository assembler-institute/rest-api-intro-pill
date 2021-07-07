const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      trim: true,
      unique: true,
      validate: {
        validator: (value) => isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
    password: {
      type: String,
      unique: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  },
);

const User = mongoose.model("user", UserSchema);

module.exports = User;
