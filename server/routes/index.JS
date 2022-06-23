const express = require('express');
const app = express();

const usuario = require("./usuario");
const categorias = require("./categorias");



app.use("/categoria", categorias);
app.use("/usuario", usuario);

module.exports = app;