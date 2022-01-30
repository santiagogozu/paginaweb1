const express =require("express")
const app=express()

const rutasMain =require("./routers/main.js") //Se conecta con el archivo routers

app.use(express.static("public")) //busca archivos estaticos (imagenes y CCS, se coloca "public" poeque etsa en la carpeta con ese nombre)

app.listen(process.env.PORT||3000, function() {
    console.log('Servidor funcionando');
});

app.use("/", rutasMain)
