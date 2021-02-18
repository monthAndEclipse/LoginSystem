# LoginSystem
a login system using: bootstrap+nodejs+express+mongodb+passprot-local

# Main branch
using ejs tempalte engine at backend to render pages 
and inside these pages, pure javascript(no jquery or vue framework) was used to implement
all the logic

# Dev branch 
instead of using ejs, we now use vue.js to build our frontend.
doing the same thing, but using different implementation .
So we can tell the advantages provided by the framework(vue).



# Quick Start
```
git clone https://github.com/monthAndEclipse/LoginSystem.git

cd LoginSystem

git checkout dev

npm install 

npm run serve

```

# Note
we modify a little bit source code of the module passport to attach custom error message to the request object when the authentication is failed.(the default behaviour is to return String "Unauthorized" )

code snippet :
```
 function allFailed() {
      ......

      //attach the custom error message to request obj 
      if(options.customMessage){
        req.customMessage = challenge;
        return next();
      }
      res.end(http.STATUS_CODES[res.statusCode]);
 }

 router.post('/signin',
            //customMessage option 
            passport.authenticate('local',{customMessage:true}),
            (req,res,next)=>{
              ...
            }
)

```

so we exculde the passport module from the .gitignore file and the package.json file
and push this module to the github repo.