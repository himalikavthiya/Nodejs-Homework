const http = require("http"); //require core module http
const express = require("express"); //require express freamwork
const { connectDB } = require("./db/dbconnection");
const config = require("./config/config");
const routes = require("./routes/v1");
const bodyParser = require("body-parser");
const cors = require("cors");
const path =require("path")
const app = express(); //use express in app varible
// app.set('view engine','ejs')

/* allow form-data from body
 * form-data is use for image upload
 * parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));

/*  allow json data from body
 * parse application/json
 */
app.use(bodyParser.json());

/**frantend error handle useing cors */
app.use(cors());

/** Get image */
app.use(express.static(path.join(__dirname,`./public`)));

app.use("/v1", routes);

/* Database connection */
connectDB();

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning", config.port);
});
