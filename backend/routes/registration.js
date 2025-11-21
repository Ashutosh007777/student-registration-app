const express = require("express");
const Registration = require("../models/Registration");

const router = express.Router();

// ADD COURSE
router.post("/register-course", async (req, res) => {
  const { studentId, semester, department, course } = req.body;

  await Registration.create({
    student: studentId,
    semester,
    department,
    course
  });

  res.json({ message: "Course Registered" });
});

// GET COURSES
router.get("/courses/:id", async (req, res) => {
  const data = await Registration.find({ student: req.params.id });
  res.json(data);
});

module.exports = router;
