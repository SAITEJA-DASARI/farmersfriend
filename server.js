const exp=require('express')
const app=exp()
const router=exp.Router()
const path=require('path')

app.use(exp.static(path.join(__dirname,"./dist/farmersfriend")))

//using json
app.use(exp.json())

//exporting router
module.exports=router

//importing apis
const userApp=require("./apis/userApi")

//forwarding request to apis
app.use('/user',userApp);

//handling unavailable paths
app.use((req,res,next)=>{
    res.send({message:`the requested path ${req.url} is not available`})
})

//assigning port number
port =3500
app.listen(port,()=>{
    console.log(`server is running on ${port} number`);
})