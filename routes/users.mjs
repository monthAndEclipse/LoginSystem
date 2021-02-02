import express from "express"
import User from '../model/user.mjs'
import bcrypt from "bcrypt-nodejs"

const router = express.Router();

router.post('/signup',(req,res)=>{
    const {email,password,confirmedPassword} = req.body
    let errors =[];
    if(!email||!password|!confirmedPassword){
        errors.push({msg:"please fill in all the fields"});
    }
    if(password!=confirmedPassword){
        errors.push({msg:"two passwords don't match each other"})
    }
    if(errors.length>0){
        res.end(JSON.stringify({
            code: -1 ,
            errors:errors
        }))
    }else{
        //validation passed
        User.findOne({email:email}).exec((err,user)=>{
            if(user){
                errors.push({msg:"email already exits"})
                res.end(JSON.stringify({
                    code:-1,
                    errors:errors
                }))
            }else{
                const user  = new User({
                    email:email,
                    password:password,
                    confirmedPassword:confirmedPassword
                })
                ;
                bcrypt.genSalt(10,(err,result)=>{
                    bcrypt.hash(user.password, null, null, function(err, hash) {
                        if(err) throw err;
                        // Store hash in your password DB.
                        console.log(hash)
                        user.password = hash;
                        //save to mongo
                        user.save()
                        .then((value)=>{
                            if(value.id){
                                res.end(JSON.stringify({code:1,errors:errors}))
                            }
                        })
                        .catch(value=> console.log(value));
                    });
                })
            }
        })
        
    }
})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body;
    let errors = [];
    if(!email||!password){
        errors.push({msg:"email or password should not be empty"})
    }
    if(errors.length>0){
        res.end({code:-1,errors:errors});
    }else{

    }
    

})

router.get('/logout',(req,res)=>{
    res.end('logout');
})

export default router