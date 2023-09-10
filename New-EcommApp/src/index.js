const express = require("express");
const http = require("http");
const bodyparser = require("body-parser");
const config = require("./config/config");
const routes = require("./routes/v1");
const cors = require("cors");
const { connectDB } = require("./db/dbconnection");
const app = express();

/**allow form data from body */
app.use(bodyparser.urlencoded({ extended: false }));

/**allow json data from body */
app.use(bodyparser.json());

/**frantend error handle useing cors */
app.use(cors());

/**use namespace */
app.use("/v1", routes);

//database connection
connectDB();

const server = http.createServer(app);
server.listen(config.port, () => {
  console.log("server lising", +config.port);
});
