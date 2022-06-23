// VARIABLES DE ENTORNO, MANDA A LALMAR UN PUERTO RANDOM O SI NO ELIGE EL 3000.
//Configuraciones globales de todo nuestro proyecto.


//cONFIGURAMOS EL PUERTO
process.env.PORT = process.env.PORT || 3000;


//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//Configuración de la base de datos

if(process.env.NODE_ENV === "dev") {

    process.env.URLOG = "";
} else {
    process.env.URLOG = "";
}