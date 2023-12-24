import { Schema, model } from "mongoose";

const UserSchema = Schema({
    name: {
        type: String,
        default: "-",
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    mobile:{
        type: Number,
        required: true,
        unique:true,
        
    },
    gender: {
        type: String,
        default: "prefer not to say"
    }
},
{
    timestamps: true,
})
      
const User = model("User", UserSchema);

export default User;