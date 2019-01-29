const express = require("express" )
const mongoose = require("mongoose")
const config = require("./config")
const routers = require("./ford/api/patients/routers");

const app = express();

/*app.use(function(req, res,next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "*");
    res.setHeader('content-type', 'application/json');
     next();
});*/

app.use('/', express.static(__dirname + '/dist/RMD'));

app.get('/patientList', (req,res) =>{
  res.redirect('/')
});

app.get('/view', (req,res) =>{
  res.redirect('/')
});

app.get('/add', (req,res) =>{
  res.redirect('/')
});

app.get('/update', (req,res) =>{
  res.redirect('/')
});

const port = process.env.PORT || 3000;

mongoose.connect(config.getMlabConnectionString(),{useNewUrlParser: true });

routers(app)

app.listen(port,()=> console.log("server listing 3000"));
