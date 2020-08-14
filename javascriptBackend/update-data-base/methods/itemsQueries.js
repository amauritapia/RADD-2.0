const axios = require("axios");
const fs = require("fs");

async function getItems(){
    return await axios.get("https://api.pandascore.co/dota2/items/?range[id]=1,100&per_page=100&token=nPbfyNrliDhjXrJisutMh5Dw5oYctBTHStEtLIN_UrlDC9-id_I")
    .then(function (response){
        data = JSON.parse(response.data);
        fs.writeFile('/home/amauri-tapia/Desktop/test.csv', data,(err) =>{
            if(err) throw err;
        })
    }).catch(function (error){
        console.log(error)
    })
};

getItems();