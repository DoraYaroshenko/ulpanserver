const express = require("express");
const http = require("http");
const path = require("path");
const cors  = require("cors");

const { routesInit } = require("./routes/configRoutes");
const { config } = require("./config/secret");
// התחברות למסד 
require("./db/mongoConnect")

const app = express();
// כדי שנוכל לשלוח באדי מצד לקוח
app.use(express.json());
// להגדיר תיקייה סטטית שתיהיה התיקייה בשם פאבליק
app.use(express.static(path.join(__dirname, "public")));

app.use(cors({
    origin:config.projectUrl,
    credentials:true
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', config.projectUrl);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

routesInit(app);

const server = http.createServer(app);
let port = process.env.PORT || 3001;
    server.listen(port);
// npm install -> כדי להתקין פרוייקט מוכן, שיותקנו בו כל המודולים


// last update!
