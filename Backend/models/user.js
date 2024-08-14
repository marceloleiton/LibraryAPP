const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default:
        "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"]
    },
    favouritres: [
      {
        type: mongoose.Types.ObjectId,
        ref: "books"
      }
    ],
    cart: [
      {
        type: mongoose.Types.ObjectId,
        ref: "books"
      }
    ],
    orders: [
      {
        type: mongoose.Types.ObjectId,
        ref: "order"
      }
    ]
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", user);
