const knex = require("knex");
const environment = process.env.DB_ENV || "development";
const knexConfig = require("../knexfile")[environment];
module.exports = knex(knexConfig);
