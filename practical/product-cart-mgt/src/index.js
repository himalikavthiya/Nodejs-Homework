const express = require("express");
const http = require("http");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const routes = require("./routes/v1");
const { connectDB } = require("./db/dbconnection");
const app = express();

/**allow form data from body */
app.use(bodyparser.urlencoded({ extended: false }));

/**allow json data from body */
app.use(bodyparser.json());

/**use namespace */
app.use("/v1", routes);

//database connection
connectDB();

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log("server lising", +process.env.PORT);
});
