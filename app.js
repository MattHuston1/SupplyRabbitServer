const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const teachers = require("./routes/teachers")
const supplies = require("./routes/supplies")

app.use(cors())
app.use(bodyParser.json())
app.use("/teachers", teachers)
app.use("/supplies", supplies)



app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
  });
});

module.exports = app;
