const express = require("express");
const app = express();
var body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended:true}));

const usuario = require("./routes/usuario");
app.use(usuario);
const categorias = require("./routes/categorias");
app.use(categorias);
app.listen(3000, () => {console.log("Se esta escuchando en el puerto 3000")});

