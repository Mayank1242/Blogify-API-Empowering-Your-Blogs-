const express= require('express');
const { getAllUSer, user,signup ,login} = require("../controller/user-controller");
const router=new express.Router();

router.get("/",getAllUSer) 
router.post("/signup",signup)
router.post("/login", login)

module.exports=router;