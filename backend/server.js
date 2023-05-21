const express=require('express')

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


//listen for request
app.listen(process.env.PORT,()=>{
    console.log(`listening at Port ${process.env.PORT}`)
})

/*

const uri =
  "mongodb+srv://hemanthaim543210:AVlIeBy9RN2TF3aD@cluster0.i3qohj3.mongodb.net/?retryWrites=true&w=majority";


mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });
*/