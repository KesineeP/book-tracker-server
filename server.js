const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to KK book tracker')
})



mongoose.connect('mongodb+srv://dbAdmin:admin1234@booktrackerapi.fcxpl.mongodb.net/')
.then(() =>{
    console.log('Connect to MongoDB')
    app.listen(port, () => {
        console.log(`KK book tracker server is running on port: ${port}`)
    })
}).catch((error) => {
    console.log(error)
})
