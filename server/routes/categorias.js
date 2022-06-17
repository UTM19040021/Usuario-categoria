const express = require("express");
const router = express.Router();

router.get("/api/categorias", (request, response) => {
    response.status(200).json({
        response:"Se consulto la API get de categorias"
    })
});

router.post("/api/categorias", (request, response) => {
    response.status(200).json({
        response:"Se consuito la API POST de categorias"
    })
});

router.put("/api/categorias", (request, response) => {
    response.status(200).json({
        response:"Se consuito la API PUT de categorias"
    })
});

router.delete("/api/categorias", (request, response) => {
    response.status(200).json({
        response:"Se consuito la API DELETE de categorias"
    })
});

module.exports = router;