const express = require("express");
const router = express.Router();

router.post('/body', (req, response) => {
    const usuario = req.body
    response.status(200).json({
        resp:"Estas dentro de la API post de usuario",
        usuario
    })
});

router.get("/", (request, response) => {
    response.status(200).json({
        response:"Se consuito la API GET general de usuario",
    })
});

//API CON PARAMETROS OBLIGATORIOS
router.get("/:id/:nombre/:edad/:apellido", (request, response) => {

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
    const {id,nombre,edad,apellido} = request.params;

    if(Number(edad).toString() === "NaN") {
       return response.status(400).json({
          "message": "El valor ingresado en la edad es incorrecto"  
        });
    }
    return response.status(200).json({
        response:"Se consuito la API GET especiifca de usuario",
        id,
        nombre,
        edad : Number(edad),
        apellido
    })
});

//API CON PARAMETROS OPCIONALES
router.get("/usuarioBusqueda", (req, resp) => {

    const id = req.query.id; //Parametro opcional
    resp.status(200).json({

        "message": "Se consulto la API usuarioBusqueda exitosamente",
        id
    })    

}); 

router.post("/", (request, response) => {
    response.status(200).json({
        response:"Se consuito la API POST de usuario"
    })
});

router.put("/", (request, response) => {
    response.status(200).json({
        response:"Se consuito la API PUT de usuario"
    })
});

router.delete("/", (request, response) => {
    response.status(200).json({
        response:"Se consuito la API DELETE de usuario"
    })
});

module.exports = router;