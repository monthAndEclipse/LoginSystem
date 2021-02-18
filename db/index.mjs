import mongoose from 'mongoose'

const DB_Config = {
    url:'mongodb://ip:port/',
    dbName : "test" , //defalut
    dbconfig:{
        connectTimeoutMS: 30000,
        useUnifiedTopology: true ,
        useNewUrlParser:true,
        //add this to remove the authentication error when provided the dbname
        authSource:"admin",
        auth:{
            user: "username",
            password: "pwd"
        }
    }
}

mongoose.connect(DB_Config.url+DB_Config.dbName,DB_Config.dbconfig)
.then(()=>{
    console.log('db connected');
})
.catch(err=>console.log(err));

export default mongoose;