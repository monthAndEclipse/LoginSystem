function ensureAuthenticate (req,res,next){
    if(req.isAuthenticated&&req.isAuthenticated()){
        return next()
    }
    res.end(JSON.stringify({code:-1,message:"must signin first"}));
}

export default ensureAuthenticate;