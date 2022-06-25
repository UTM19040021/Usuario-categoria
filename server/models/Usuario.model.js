const mongoose = require("mongoose");

const  UsuarioSchema = mongoose. Schema({
    nombre: {
        type: String,
        required: [true, "Es obligatorio ingresar los nombres"]
    },
    apellidos: {
        type: String,
        required: [true, "Es obligatorio ingresar los apellidos"]
    },
    correoElectronico: {
        type: String,
        required: [true, "Es obligatorio ingresar el correo electronico"]
    },
    password: {
        type: String,
        required: [true, "Es obligatorio ingresar el password"]
    },

    edad: Number, 
    curp: String
});

module.exports = mongoose.model("usuario", UsuarioSchema);