import mongoose from 'mongoose';


const userSchema  = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const User = mongoose.model('User',userSchema);

export default User