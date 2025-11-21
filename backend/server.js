require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const regRoutes = require("./routes/registration");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", regRoutes);

app.listen(process.env.PORT, () =>
  console.log("Backend running on port", process.env.PORT)
);
