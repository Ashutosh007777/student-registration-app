// backend/middleware/auth.js

module.exports = (req, res, next) => {
  const { studentId } = req.body;

  if (!studentId) {
    return res.status(401).json({ message: "Unauthorized - Student ID missing" });
  }

  next();
};
