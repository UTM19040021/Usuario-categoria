const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).json({
        response:"Se consulto la API get de categorias"
    })
});

router.post("/", (request, response) => {
    response.status(200).json({
        response:"Se consuito la API POST de categorias"
    })
});

router.put("/", (request, response) => {
    response.status(200).json({
        response:"Se consuito la API PUT de categorias"
    })
});

router.delete("/", (request, response) => {
    response.status(200).json({
        response:"Se consuito la API DELETE de categorias"
    })
});

module.exports = router;