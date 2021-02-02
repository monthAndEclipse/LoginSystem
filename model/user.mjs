import moogoose from 'mongoose';

const userSchema  = new moogoose.Schema({
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

const User = moogoose.model('User',userSchema);

export default User