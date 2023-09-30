const http = require("http");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { connectDB } = require("./db/dbconnection");
const routes = require("./routes/v1");
const bodyParser=require('body-parser');
const app = express();

/**allow form datafrom body */
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/**Database connection */
connectDB();

/**routes namespace */
app.use("/v1", routes);

const server = http.createServer(app);

/**Server creating */
server.listen(process.env.PORT, () => {
  console.log("Server listning", process.env.PORT);
});
