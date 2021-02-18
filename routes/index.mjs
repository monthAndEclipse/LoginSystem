import express  from 'express'
const router  = express.Router();

router.get('/',(req,res)=>{
    res.end(JSON.stringify({message:"hello"}))
})

export default router;