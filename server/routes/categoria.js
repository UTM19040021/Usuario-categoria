const express = require("express");
const CategoriaModel = require("../models/Categoria.model");
const router = express.Router();

router.post('/', (req, response) => {

    const categoria = new CategoriaModel(req.body);

    categoria.save()
    .then((categoriaRegistrado) => {
        response.status(200).json({
            msg:"categoria registrado exitosamente",
            status: 200,
            cont: {
                categoria: categoriaRegistrado
            }
        });
    })
    .catch((err) =>{
        return response.status(500).json({
            msg: "Error al registrar la categoria",
            status: 500,
            cont:{
                error: err
            }
        });
    });
});

router.get("/", (request, response) => {

    CategoriaModel.find()

    response.status(200).json({
        response:"Se consuito la API GET general de categoria",
    })
});

//API CON PARAMETROS OBLIGATORIOS
router.get("/:nombre/:descripcion/:categoriaNombre/:activo", (request, response) => {

    //DECLARACION INDIVIDUAL 
    /*
    const id = request.params.id;
    const nombre = request.params.nombre;
    const edad = request.params.edad;
    const apellido = request.params.apellido; 
*/
    // == Dos iguales es true (validacion estricta - verifica solamente el vlaor)
    // == Tres iguales es false (Validacion estrcita - Verifica valor y tipo de dato)
    //DESESTRUCTURACION
    const {id,nombre,descripcion,categoriaNombre,activo} = request.params;
    
    return response.status(200).json({
        response:"Se consuito la API GET especiifca de categoria",
        id,
        nombre,
        descripcion,
        categoriaNombre,
        activo
    })
});

//API CON PARAMETROS OPCIONALES
router.get("/categoriaBusqueda", (req, resp) => {

    const id = req.query.id; //Parametro opcional
    resp.status(200).json({

        "message": "Se consulto la API categoriaBusqueda exitosamente",
        id
    })    

}); 


router.put("/", (request, response) => {
    response.status(200).json({
        response:"Se consuito la API PUT de categoria"
    })
});

router.delete("/", (request, response) => {
    response.status(200).json({
        response:"Se consuito la API DELETE de categoria"
    })
});

module.exports = router;