// 1) Import .env
// Loads .env file contents into process.env by default
require('dotenv').config()

// 2) import Express
// to create server
const express = require('express')

// 3) Import CORS
// to communicate with the server
const cors = require('cors')

// import connection.js

require("./Database/connection")

// import router
 const router = require('./Router/router')

// 4) Create Server
const pfServer = express()

// 5) Use of Cors by server
pfServer.use(cors())

// 6) Returns middleware that only parses json and converts it inot javascript object.
pfServer.use(express.json())

//servre use router

pfServer.use(router)

//pfserver should use uploads folder
//first argument - how the other pplication should use this file
//second argument - to export the upload folder
pfServer.use('/uploads',express.static('./uploads'))

// 7) Customsie the port - by default run = 3000
const PORT = 4000 || process.env.PORT

// 8) Run the server
pfServer.listen(PORT,()=>{
    console.log(`Server running Successfully at PORT number : ${PORT}`);
})