const exp=require('express')
const path=require('path')

const app=exp()

app.use(exp.static(path.join(__dirname,'./dist/farmersfriend')));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/dist/farmersfriend/index.html'));
})

app.listen(5700);

