require("dotenv").config();

exports.config = {
    mongoUrl:process.env.DBSTRING,
    projectUrl:process.env.ULPANURL
}