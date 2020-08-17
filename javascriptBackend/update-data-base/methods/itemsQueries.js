const axios = require("axios");
const fs = require("fs");

async function getItems(){
    return await axios.get("https://api.opendota.com/api/scenarios/itemTimings")
    .then(function (response){
        data = response.data;
        //console.log(data);
        for(i=0; i< data.length;i++){
        fs.appendFile('/home/amauri-tapia/Desktop/test.csv',data[i].hero_id + "," + data[i].item + "\r\n",(err) =>{
            if(err) throw err;
        })}
    }).catch(function (error){
        console.log(error)
    })
};

getItems();