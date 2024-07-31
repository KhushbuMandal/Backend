require('dotenv').config
const express = require('express');
//import express from 'express';

const app = express();

app.get('/' , (req , res) =>{
    res.send("This is Home route");
})

app.get ('/api/jokes' , (req , res) => {
    const jokes = [
        {
            id:1,
            joke:"This is first joke"
        },
        {
            id:2,
            joke:"This is second joke"
        },
        {
            id:3,
            joke:"This is third joke"
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT ||  3000;

app.listen(port , () =>{
    console.log (`The app is working at ${port}`)
})