// Creating USer types in models
const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    name:{ type: String,required:true},
    email:{ type: String, requried:true, unique:true},
    password:{type: String,requied:true}
},{timestamps:true});

module.exports = mongoose.model("User",userSchema);