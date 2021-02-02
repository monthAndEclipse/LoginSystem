import moogoose from 'mongoose'
const ENV = {
    url:'mongodb://119.23.19.189:27017/',
    dbName : "test" , //defalut
    dbconfig:{
        connectTimeoutMS: 30000,
        useUnifiedTopology: true ,
        useNewUrlParser:true,
        //add this to remove the authentication error when provided the dbname
        authSource:"admin",
        auth:{
            user: "root",
            password: "password"
        }
    }
}
moogoose.connect(ENV.url+ENV.dbName,ENV.dbconfig)
.then(()=>{
    console.log('connected');
})
.catch(err=>console.log(err));

export default moogoose;