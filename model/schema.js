const mongoose=require("mongoose")

const UserSchema =new mongoose.Schema({
fullName:{
  type:String,
  required:true,
},
email:{
  type:String,
  required:true,
  
},
message:{
  type:String,
  required:true,

}
},{timestamps:true})
// ... existing code ...
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;



