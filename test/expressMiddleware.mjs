import express from "express"

const app  = new express();


app.use(express.urlencoded({
    extended:false
}))
app.use(express.json());


//define my own middleware 
//the line next() is neccessary if you still want your code defined in your routes to be done
const myMiddleware = function (req,res,next){
    req.customValue = "hello fuck you ";
    next();
}


app.get('/get',myMiddleware,(req,res)=>{
    res.end("customvalue:"+req.customValue);
})


app.listen(3000,(e)=>{
    if(e){
        throw e
    }else{
        console.log("server started successfully");
    }
})