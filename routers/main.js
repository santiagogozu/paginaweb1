const express = require("express")
const router=express.Router()


const mainControlers =require("../controllers/mainController")

router.get("/", mainControlers.home)
router.get("/about", mainControlers.about)

module.exports=router