// const express = require('express');
// const app = express();


// app.use(express.json())

// req.query 
// localhost:8080/users?limit=10&page=1&name=abc

// app.get('/users',(req,res)=>{  
//     const {limit,page,name} = req.query;
//     res.json({limit,page,name});
// })

// req.params

// app.get('/users/:id',(req,res)=>{  
//     const {id} = req.params;
//     res.json({id});
// })

// req.body

// app.post('/users',(req,res)=>{
//     const body = req.body;
//     res.json({body})
// })

// app.listen(8080,()=>{
//     console.log("Server is running on PORT: 8080");
// })





const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());

app.get("/hello",(req,res)=>{
    const name = req.query.name;
    res.send("My name is " +name)
})


app.get("/hello/:name",(req,res)=>{
    const name = req.params.name;
    res.send("My name is " +name)
})

const products = [
    {id:1,  name :  "Oppo"},
    {id:2,  name :  "Q Mobile"},
    {id:3,  name :  "u MObile"},
    {id:4,  name :  "A mobile"},
    {id:5,  name :  "B mobile"},
]

app.get("/products",(req,res)=>{
    res.status(200).json({data:products});
})



app.listen(8080,(req,res)=>{
console.log("Server is running on PORT: 8080");
})
