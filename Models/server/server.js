const express = require('express');

const app = express();

app.get('/' , (req , res)=>{
    res.send("Hello");
})

app.get('/send' , (req , res)=>{
    res.send("Hello Send");
})

const PORT = 4000;

app.listen(PORT , () =>{
    console.log(`Server is ${PORT}`);
})