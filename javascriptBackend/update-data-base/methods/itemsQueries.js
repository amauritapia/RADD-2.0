const axios = require("axios");
const fs = require("fs");

async function getItems(){
    return await axios.get("https://api.opendota.com/api/constants/items")
    .then(function (response){
        data = response.data;
        
        
    for(name in data){
    if(data[name].dname == undefined){
        fs.appendFileSync('/home/amauri-tapia/Desktop/items.csv',data[name].id + "\t" + "N/A" + "\t" + data[name].cost + "\t" + data[name].img + "\r\n",(err) =>{
            if(err) throw err;
                })
}   else{
        if(data[name].cost == null){
        fs.appendFileSync('/home/amauri-tapia/Desktop/items.csv',data[name].id + "\t" + data[name].dname + "\t" + 0 + "\t" + data[name].img  + "\r\n",(err) =>{
            if(err) throw err;
                })
}   else{
        if(data[name].lore == ""){
        fs.appendFileSync('/home/amauri-tapia/Desktop/items.csv',data[name].id + "\t" + data[name].dname + "\t" + data[name].cost + "\t" + data[name].img 
         + "\r\n",(err) =>{
            if(err) throw err;
                })
        } else{
            fs.appendFileSync('/home/amauri-tapia/Desktop/items.csv',data[name].id + "\t" + data[name].dname + "\t" + data[name].cost + "\t" + data[name].img 
            + "\r\n",(err) =>{
                if(err) throw err;
                    })
        }
}
}
    

}

    }).catch(function (error){
        console.log(error)
    })
};

getItems();