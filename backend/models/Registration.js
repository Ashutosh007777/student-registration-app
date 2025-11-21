const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  semester: String,
  department: String,
  course: String,
  registeredAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Registration", registrationSchema);
