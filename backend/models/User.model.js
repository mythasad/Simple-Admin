import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true, 
    },
    password: {
        type: String, 
        required: true, 
    },
    accountType: {
        type: String,
    }
}, {
    Timestamp: true,
})

export const User = mongoose.model('User', UserSchema)