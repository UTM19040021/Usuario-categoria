const express = require("express");
const app = express();
const usuario = require("./routes/usuario");
app.use(usuario);
const categorias = require("./routes/categorias");
app.use(categorias);
app.listen(3000, () => {console.log("Se esta escuchando en el puerto 3000")});
