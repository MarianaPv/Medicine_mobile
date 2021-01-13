const mongoose = require("mongoose");

const userappSchema = new mongoose.Schema({
  displayName: { type: String, required: true },
  lastName: { type: String, required: true },
  docuId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  verified: { type: Boolean, default: false },
});

module.exports = User = mongoose.model("userapps", userappSchema);
