const mongoose = require("mongoose");

const  CategoriaSchema = mongoose. Schema({
    nombre: {
        type: String,
        required: [true, "Es obligatorio ingresar los nombres"]
    },
    descripcion: {
        type: String,
        required: [true, "Es obligatorio ingresar una descripcion"]
    },
    categoriaNombre: {
        type: String,
        required: [true, "Es obligatorio ingresar una categoria"]

    },   
    activo: {
        type: Boolean,
        default : true
    },

});

module.exports = mongoose.model("categoria", CategoriaSchema);