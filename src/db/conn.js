const mongoose = require("mongoose");

const mongod=process.env.mongo;
mongoose.connect(mongod,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Susscessfull");
}).catch((e)=>{
    console.log("No connection",e);
})