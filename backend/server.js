const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workouts')

require('dotenv').config()

//express app
const app=express()


app.use(express.json())

app.use((req,res,next)=>{
    
console.log(req.path,req.method)
    next();
})

app.use('/api/workouts',workoutRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(

    //listening for request and connecting to mongodb
    ()=>{
       app.listen(process.env.PORT,()=>{
    console.log(`connected to db &&listening at Port ${process.env.PORT}`)
})

    }
)
.catch((err)=>{
    console.log(err)
})




