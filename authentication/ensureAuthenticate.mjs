function ensureAuthenticate (req,res,next){
    if(req.isAuthenticated&&req.isAuthenticated()){
        return next()
    }
    res.redirect('/')
}

export default ensureAuthenticate;