const express = require("express");
require("colors");
require("./config/config");
const app = express();
const routes = require('./routes/index');

var body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended:true}));

app.use("/api",routes);

app.listen(process.env.PORT, () => {
    console.log("ONLINE".green  + "Se esta escuchando en el puerto 3000")
});


