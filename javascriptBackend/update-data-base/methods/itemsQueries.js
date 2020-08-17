const axios = require("axios");
const fs = require("fs");

async function getItems(){
    return await axios.get("https://api.opendota.com/api/constants/items")
    .then(function (response){
        data = response.data;
        
        
    for(name in data){
    if(data[name].dname == undefined){
        fs.appendFileSync('/home/amauri-tapia/Desktop/test-2.csv',data[name].id + "," + "N/A" + "," + data[name].cost + "," + data[name].img + "\r\n",(err) =>{
            if(err) throw err;
                })
}   else{
        if(data[name].cost == null){
        fs.appendFileSync('/home/amauri-tapia/Desktop/test-2.csv',data[name].id + "," + data[name].dname + "," + "N/A" + "," + data[name].img + "\r\n",(err) =>{
            if(err) throw err;
                })
}   else{
        fs.appendFileSync('/home/amauri-tapia/Desktop/test-2.csv',data[name].id + "," + data[name].dname + "," + data[name].cost + "," + data[name].img + "\r\n",(err) =>{
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