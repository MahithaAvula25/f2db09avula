const mongoose = require("mongoose") 
const icecreamSchema = mongoose.Schema({ 
    name:String,
    flavor:String,
    price:Number 
}) 
 
module.exports = mongoose.model("icecream", icecreamSchema) 