const indexR = require("./index");
const viewsR =require("./views");

exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/views",viewsR);
}