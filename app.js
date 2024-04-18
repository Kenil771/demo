const express=require('express')
const app=express()
const idRouter=require('./router/id')

app.use(express.json())


app.use('/id',idRouter)
 
let mid = (req,res,next)=>{
    console.log(req.query);
    console.log("object");
    next()
}



app.listen(8000)
