// import mongoose 

const mongoose = require('mongoose')

//connection string of mongoDB

const connectionString = process.env.Database

//connect to mongoDB using mongoose

mongoose.connect(connectionString).then(()=>{
    console.log("mongoDB connected successfully");
}).catch((err)=>{
    console.log(`mongoDB connection failed due to ${err}`);
})