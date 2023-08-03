const exp=require('express')
const app=exp()
app.listen(4000,()=>console.log('server listening to port 3500'))
//get path
const path=require("path");
app.use(exp.static(path.join(__dirname, './build')));
//get mongo client
const mclient=require('mongodb').MongoClient
//connect mongoclient to database server

mclient.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2")
.then((dbref)=>{//type mongosh in cm
//connect to database
    const dbob=dbref.db('vnrdb');
    // connect to collections
    const usercollectionobj=dbob.collection('usercollection');
    // share collection to api
    app.set("usercollectionobj",usercollectionobj);
    console.log("db connection success");
}).catch((err)=>console.log("connection error is",err));





//import appr
const appr=require("./API/user")
// connect appr with path middleware
app.use('/user-api',appr)

// middleware to page refresh
const pageRefresh=(request,response,next)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
}
app.use("*",pageRefresh)
//invalid path 
const invalidPath=(request,response,next)=>{
    response.send({message:'invalid path'})
}
app.use("*",invalidPath)
//error handling middleware
const errorHandling=(error,request,response,next)=>{
response.send({message:error})
};
app.use(errorHandling);
