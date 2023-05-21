const express=require('express')
require('dotenv').config()
//express app
const app=express()

app.get('/',(req,res)=>{
    res.json({"msg":"welcome to the app"})
})

//listen for request
app.listen(process.env.PORT,()=>{
    console.log(`listening at Port ${process.env.PORT}`)
})