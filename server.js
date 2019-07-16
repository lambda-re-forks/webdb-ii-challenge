const express = require("express");

const helmet = require("helmet");
const morgan = require("morgan");

const server = express();

server.use(helmet());
server.use(morgan("dev"));
server.get("/", (req, res) => res.send("<h1>WebDB-II-Challenge</h1>"));
server.use("/api/cars", carsRouter);

module.exports = server;
