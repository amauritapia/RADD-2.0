const axios = require("axios");
const fs = require("fs");

async function getItems(){
    return await axios.get("https://api.stratz.com/api/v1/Item")
    .then(function (response){
        data = response.data;
        /*for(n = 1; n < data.length; n++){
            if(data[n] === undefined){
                console.log('This is not defined. Skipping')
            }
            else{
                console.log(n,data[n].language['displayName'])
            }
        }*/

        for(i=1; i < 1032;i++){
            if(data[i] === undefined){
                fs.appendFile('/home/amauri-tapia/Desktop/test-2.csv',"",(err) =>{
                    if(err) throw err;
                })
            } else{
                if(data[i].language['description'] == ""){
                    fs.appendFileSync('/home/amauri-tapia/Desktop/test-2.csv',data[i].id + "," + data[i].name + "," + "N/A" + "\r\n",(err) =>{
                        if(err) throw err;
                        })
                }
                else{
                fs.appendFileSync('/home/amauri-tapia/Desktop/test-2.csv',data[i].id + "," + data[i].name + "," + data[i].language['description']+ "\r\n",(err) =>{
                    if(err) throw err;
                    })
                }
            }
        }
    }).catch(function (error){
        console.log(error)
    })
};

getItems();