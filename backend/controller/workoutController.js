const Workout = require("../modules/workoutModel");
const mongoose=require('mongoose')
//get all workouts
const getWorkouts=async(req,res)=>{
    const workouts=await Workout.find().sort({createdAt:-1})
    res.status(200).json(workouts)
}

//get a single workout
const getSingleWorkout=async(req,res)=>{
    
    const {id}=req.params;
    console.log(id)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error:"no such workout"
        })
    }


    const workout=await Workout.findById(id)
  

    res.status(200).json(workout)
}

//create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    });

    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

//delete a woorkout
const deleteWorkout=async(req,res)=>{
const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "no such workout",
    });
  }

  const workout=await Workout.findByIdAndDelete({_id:id})

  if(!workout){
    return res.status(400).json({
        error:"No Such Workout"
    })
  }
  res.status(200).json(workout)
}


//update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "no such workout",
    });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id },{
  ...req.body
  });

  if (!workout) {
    return res.status(400).json({
      error: "No Such Workout",
    });
  }
  res.status(200).json(workout);
};

module.exports={
    getWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}