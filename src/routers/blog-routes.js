const express = require('express');
const blogRouter = express.Router();
const {getAllBlogs,addBlogs,updateBlogs,getbyid,deleteBlock}=require("../controller/blog-controller")

blogRouter.get("/",getAllBlogs)
blogRouter.post("/add",addBlogs)
blogRouter.put("/update/:id",updateBlogs)
blogRouter.get("/:id",getbyid)
blogRouter.delete("/:id",deleteBlock)



module.exports =blogRouter;