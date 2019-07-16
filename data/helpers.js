const db = require("./dbConfig");

module.exports = {
  find,
  findBy
};

function find() {
  return db("cars");
}

function findBy(filter) {
  return db("cars")
    .where({ filter })
    .first();
}
