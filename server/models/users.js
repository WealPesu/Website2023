const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    image_url:String,
    google_id:String,
    createdAt: { type: Date, default: new Date() }
  })
module.exports = User = mongoose.model("Users",userSchema)  