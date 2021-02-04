import express  from "express"
import ensureAuthenticate from '../authentication/ensureAuthenticate.mjs'
import notEnsureAuthenticate from '../authentication/notEnsureAuthenticate.mjs'
const router = express.Router();

router.get('/',notEnsureAuthenticate,(req,res)=>{
    res.render("welcome");
})

router.get('/index',ensureAuthenticate,(req,res)=>{
    res.render('index')
})

export default router;