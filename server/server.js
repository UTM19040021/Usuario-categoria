const express = require ("express");
const mongoose = require("mongoose");
require("colors");
require("./config/config");
const app =express();
const routes =  require('./routes/index');

app.use("/api",routes);
mongoose.connect(process.env.URLDB, {})
.then(() => {
    console.log("[MONGODB]" .green + "DATABASE CONNECTION SUCCESSFULLY");
})
.catch((err) => {
    console.log("[MONGODB]" .red + "CONNECTION FAILED" + err);
});
app.listen(3000, ()=> {
    console.log("ONLINE".green+"LISTEN TO PORT: "+"3000".blue);
});
