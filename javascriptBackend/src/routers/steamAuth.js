let express= require("express");
let {Application, Request, Response, Router} =require("express");
let server=require("./../server");
let steamRouter=Router();




steamRouter.get("/",async(req,res)=>
{
    console.log(server.port);
    //res.send("Cannot view you are not an admin");

});

    


module.exports.steamRouter=steamRouter;