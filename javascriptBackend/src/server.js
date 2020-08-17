let cors =require("cors");
let express= require("express");
let {Application, Request, Response} =require("express");
let steamRouter=require("./routers/steamAuth");
let session = require('express-session');
var passport = require('passport');
let OpenIDStrategy = require('passport-openid').Strategy;
const app=express();
const port =process.env.HERO_PORT || 8100;



let steamAuthRouter=steamRouter.steamRouter;


//Configure the middleware
app.use(function (req, res, next) 
{
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', "true");
    // Pass to next layer of middleware
    next();
});
  
//allow jsons to be sent back and forth
app.use(express.json())
app.use(session({
    secret: 'YOURSESSIONSECRETKEY', // Change this to anything else
    resave: false,
    saveUninitialized: true
})); 

app.use(passport.initialize());
app.use(passport.session());







app.listen(port, () => 
{
console.log("server started"+port);
});

app.use("/",steamAuthRouter);
module.exports.app=app;
module.exports.port=port;
