const express = require("express");

const Workout = require("../modules/workoutModel");

const {createWorkout,getWorkouts,getSingleWorkout,deleteWorkout,updateWorkout}=require('../controller/workoutController')

const router = express.Router();

//get all workouts
router.get("/", getWorkouts);

//get a single workouts
router.get("/:id", getSingleWorkout);

// post a new workout
router.post("/",createWorkout);

//delete a workout
router.delete("/:id", deleteWorkout);

//update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
