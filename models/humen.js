let mongoose = require("mongoose");

const humenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
const Humen = mongoose.model("Humen", humenSchema);

module.exports = Humen;
