const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


//import routes
const projectRoutes = require('./routes/projects');

//app middleware
app.use(bodyParser.json());
app.use(cors());


app.use(projectRoutes);


const port = 8001;

const DB_URL= 'mongodb+srv://harsha:harsha@cluster0.8kib3.mongodb.net/project?retryWrites=true&w=majority';


mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=> console.log('DB Connection error',err));

app.listen(port, () =>{
    console.log(`App is running on ${port}`);
});


