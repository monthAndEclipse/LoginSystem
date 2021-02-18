import express from 'express'
import indexRouter from './routes/index.mjs'
import userRouter from './routes/user.mjs'
import session from 'express-session'
import mongoose from './db/index.mjs'
import passport from 'passport'
import auth from './authentication/passport.mjs'
import history from 'connect-history-api-fallback'

const app = express();

const staticFileMiddleware = express.static('dist');
app.use(staticFileMiddleware);
app.use(history({
    disableDotRule: true,
    verbose: true
  }));
app.use(staticFileMiddleware);



app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({
    secret:"secrte",
    resave:true,
    saveUninitialized:true
}));




// add passport
auth(passport);
app.use(passport.initialize());
app.use(passport.session());


app.use(indexRouter);
app.use('/user',userRouter)

app.listen('4000',(err)=>{
    if(err) throw err;
    console.log('server started successfully visit : http://localhost:4000/ to see the pages')
})