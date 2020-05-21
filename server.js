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



app.listen(process.env.port || 5700);

