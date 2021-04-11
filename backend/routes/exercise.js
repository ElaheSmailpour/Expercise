const exercise=require("../models/exercisemodel")
const express = require('express')
const router = express.Router()

router.route('/').get((req,res)=>{
  exercise.find().then(exercise=>res.json(exercise))
  .catch(err=>res.status(400).json("error:"+ err))
})


router.route('/add').post((req,res)=>{
 const username=req.body.username;
 const description=req.body.description;
 const duration=Number(req.body.duration);
 const date=Date.parse(req.body.date);

 const newExercise=new exercise({
     username,
     description,
     duration,
    date
    })
 newExercise.save().then(()=>res.json("Exercise added!"))
 .catch(err=>res.status(400).json("error:"+ err))
 
})

router.route('/:id').get((req,res)=>{
exercise.findById(req.params.id).then(exercise=>res.json(exercise))
.catch(err=>res.status(400).json("error:"+ err))
})

module.exports = router