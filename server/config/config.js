// VARIABLES DE ENTORNO, MANDA A LALMAR UN PUERTO RANDOM O SI NO ELIGE EL 3000.
//Configuraciones globales de todo nuestro proyecto.


//cONFIGURAMOS EL PUERTO
process.env.PORT = process.env.PORT || 3000;


//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//Configuración de la base de datos

if(process.env.NODE_ENV === "dev") {

    process.env.URLDB = "mongodb+srv://user5a:GF8TaI1UH6ZsyUWr@cluster0.slgur.mongodb.net/UTM19040021?retryWrites=true&w=majority";
} else {
    process.env.URLDB = "mongodb+srv://user5a:GF8TaI1UH6ZsyUWr@cluster0.slgur.mongodb.net/UTM19040021?retryWrites=true&w=majority";
}