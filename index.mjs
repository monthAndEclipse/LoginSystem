import express from "express"
import expressEjsLayout from "express-ejs-layouts"
import indexRouter from './routes/index.mjs'
import userRouter from './routes/users.mjs'
import moogoose from './db/index.mjs'
import session  from 'express-session'
import passport from 'passport'
import auth from './authentication/passport.mjs'

const app = express();

//add ejs 
app.set('view engine','ejs');
app.use(expressEjsLayout);


//add urlencoded
app.use(express.urlencoded({extended:true}));
app.use(express.json());



//add express session
app.use(session({
    secret:"secrte",
    resave:true,
    saveUninitialized:true
}))

// add passport
auth(passport);
app.use(passport.initialize());
app.use(passport.session());

//add static folder
app.use(express.static('node_modules/bootstrap/dist/'))

//add router
app.use('/',indexRouter);
app.use('/user',userRouter);

app.listen(3000,()=>{
    console.log('server started successfully,vist at http://localhost:3000/')
});
