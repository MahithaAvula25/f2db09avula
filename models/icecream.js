const mongoose = require("mongoose") 
const icecreamSchema = mongoose.Schema({ 
    name: {
        type: String,
        required:true
    },
    flavor: {
        type: String,
        required: true
    },
     price: {
        type: Number,
        required:true,
        min:1,
        max:60


    }
}) 
 
module.exports = mongoose.model("icecream", icecreamSchema) 