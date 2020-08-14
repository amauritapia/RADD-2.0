let cors =require("cors");
let express= require("express");
let {Application, Request, Response} =require("express");
const app=express();

app.use(express.json)

app.use("/updateHeroes",()=>{{my:"Test"}});