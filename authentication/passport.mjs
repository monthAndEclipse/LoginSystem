import passportLocal from 'passport-local'
import User from '../model/User.mjs'
import bcrypt from 'bcrypt-nodejs'

function auth (passport){
    passport.use(
        new passportLocal.Strategy({
            usernameField:"email",
            passwordField:"password"
        },(email,password,done)=>{
                
            User.findOne({
                email:email
            })
            .then(user=>{
                if(!user){
                    return done(null,false,{code:-1,message:"the email is not registered"})
                }
                bcrypt.compare(password,user.password,(err,isMatch)=>{
                    if(err) throw err;
                    if(isMatch){
                        return done(null,user,{code:0,message:"sigin success"})
                    }else{
                        return done(null, false,{code:-1,message:"authentication fail "})
                    }
                })
            })
            .catch(console.log)
        })
    )


    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })

    passport.deserializeUser((id,done)=>{
        User.findById(id,(err,user)=>{
            done(err,user)
        })
    })


}

export default auth;