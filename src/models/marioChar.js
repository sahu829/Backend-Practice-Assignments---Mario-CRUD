
const mongoose = require("mongoose");

//  Your code goes here to do
const marioSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Luigi"
  },
  weight: {
    type: Number,
    default: 60
  }
});

const marioModel = new mongoose.model("mariochar", marioSchema);

module.exports = marioModel;