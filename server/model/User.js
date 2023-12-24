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
    address: {
        type: String,
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