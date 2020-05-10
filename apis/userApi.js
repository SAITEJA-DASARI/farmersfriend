const exp=require("express");
const userApp=exp.Router()

userApp.use(exp.json());

//getting prediction


//handling errors in between
userApp.use((err,req,res,next)=>{
    console.log("error is ",err.message);
    res.send({message:"something went wrong"})
})

//exporting userApp
module.exports=userApp