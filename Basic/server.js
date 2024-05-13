// server creation

const express=require('express');
const app=express();

// activate server
app.listen(8000,()=>{
    console.log("server run at port 8000")
})

//used to parse req.body in express -> PUT or POST
const bodyParser=require('body-parser');
//specialyy parse json data and add it to the req.body object
app.use(bodyParser.json())

// 
app.get('/',(req,res)=>{
    res.send("hello jee")
})

app.post('/api/post',(req,res)=>{
    const {name,brand}=req.body;
    console.log(name)
    console.log(brand)
    res.send("Card submitted sucess")
})

const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://chinmayakumardas2000:chinmayakumardas@chinmayakumardas.xjfxtm7.mongodb.net/Personal',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Database Connected sucessfully ")
    
}).catch((error)=>{
    console.log("Received an error")
});