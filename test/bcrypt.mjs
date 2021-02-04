import bcrypt from 'bcrypt-nodejs'

//github:https://github.com/shaneGirish/bcrypt-nodejs

bcrypt.genSalt(10,(error,result)=>{
    bcrypt.hash("bacon", null, null, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash)
      });
})