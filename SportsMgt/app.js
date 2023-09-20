var createError = require("http-errors");
var express = require("express");
const bodyParser = require("body-parser");

var path = require("path");
const { connectDB } = require("./src/db/db.connection");
var routes = require("./src/routes/v1");

var app = express();

app.use(bodyParser.json());

//database connection
connectDB();
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/v1", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
