const path = require("path") //path toma la parte path para que funcione la llamada de las ventanas//

const mainController={

    about: (req,res)=>{
        res.sendFile(path.resolve(__dirname, "../views/about.html"))
    },

    home: (req,res)=>{
        res.sendFile(path.resolve(__dirname, "../views/home.html"))
    }

}

module.exports=mainController