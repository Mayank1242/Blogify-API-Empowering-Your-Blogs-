const express= require('express');

require('dotenv').config();
require("../src/db/conn.js");
require("../src/model/user.js")
const router=require("../src/routers/user-routes");
const blogRouter = require('./routers/blog-routes.js');

const app=express();

const port= process.env.PORT || 3000; 

app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);


app.listen(port ,()=>{
    console.log(`connected to the port ${port}`);
})