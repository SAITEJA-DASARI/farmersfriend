const exp=require('express')
const path=require('path')

const app=exp()

app.use(exp.json())

app.use(exp.static(path.join(__dirname,'./dist/farmersfriend')));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/dist/farmersfriend/index.html'));
})

//importing dotenv module
const env=require('dotenv').config()

const host =  '0.0.0.0'
const port = process.env.PORT || 5700

app.listen(port || 5700 , host,()=>{
    console.log(`server running on ${port}`)
});

