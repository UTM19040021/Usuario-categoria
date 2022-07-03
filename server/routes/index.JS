const express = require('express');
const app = express();

const usuario = require("./usuario");
const categoria = require("./categoria");



app.use("/categoria", categoria);
app.use("/usuario", usuario);

module.exports = app;