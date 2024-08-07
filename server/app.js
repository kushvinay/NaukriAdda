const env = require("dotenv");
env.config({ path: "./.env" });
const express = require("express");
const app = express();

//connecat mongodb
require("./models/database").databaseConnect();
//bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect cors 
const cors = require('cors');
app.use(cors({ credentials: true, origin: true }));

//session and cookie
const session = require("express-session");
const cookieparser = require("cookie-parser");
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.EXPRESS_SESSION_SECRET
}));
app.use(cookieparser());

//express-fillupload 
const fileupload = require("express-fileupload");
app.use(fileupload());

//loger
const logger = require("morgan");
app.use(logger("dev"));
//router
app.use("/user", require("./routes/indevRoutes"));

app.use("/resume", require("./routes/resumeRoutes"));

app.use("/employe", require("./routes/employeRoutes"));

//error handling
const errorHandler = require("./utils/errorHandler");
const { generatedErrors } = require("./middlewares/error");
app.get("*", (req, res, next) => {
  next(new errorHandler(`request url not found ${req.url}`));
});
app.use(generatedErrors);
app.listen(
  process.env.PORT,
  console.log(`server is runing on ${process.env.PORT}`)
);
