const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    
    id: {
        type: Number,
        require:true
    },
    
    name: {
        type: String,
        require:true
    },

    category: {
        type: String,
        require:true
    },

    desc: {
        type: String,
        require:true
    },
   
    image: {
        type: String,
        require:true
    },

    new_price: {
        type: Number,
        require:true
    },

    old_price: {
        type: Number,
        require:true
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true
    }
    
   


})

const products = mongoose.model("items",itemSchema)

module.exports = products