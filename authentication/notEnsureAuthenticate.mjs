function notEnsureAuthenticate (req,res,next){
    if(req.isAuthenticated&&req.isAuthenticated()){
         res.redirect('/index');
         return 
    }
    return next()
}

export default notEnsureAuthenticate;