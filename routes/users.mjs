import express from "express"
import User from '../model/user.mjs'
import bcrypt from "bcrypt-nodejs"
import passport from 'passport'
import ensureAuthenticate from '../authentication/ensureAuthenticate.mjs'


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


router.post('/signin',
            passport.authenticate('local',{customMessage:true}),
            (req,res,next)=>{
                console.log(req.customMessage)
                if(req.isAuthenticated()){
                    res.end(JSON.stringify({code:0,message:req.authInfo,user:req.user.id}))
                }else{
                    res.end(JSON.stringify({code:-1,message:req.customMessage,user:{}}))
                }
            }
)



router.get('/logout',ensureAuthenticate,(req,res)=>{
    req.logOut();
    res.end(JSON.stringify({code:0,message:'logout successfully'}));
})


router.get('/info',ensureAuthenticate,(req,res)=>{
    res.end(JSON.stringify({name:req.user.email,id:req.user.id}));
})





export default router