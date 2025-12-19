const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        require:true
    },
    userEmail:{
        type: String,
        require:true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        unique: true,
        lowercase: true,
    },
    userPassword:{
        type:String,
        require:true,
        minlength:6,
    }
})

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;