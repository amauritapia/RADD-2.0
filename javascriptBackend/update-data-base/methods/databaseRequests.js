const { Client,QueryArrayResult } = require('pg')
const connection=
{
    user:"postgresLogin",//process.env.DB_LOGIN
    password:"passwordplop",//process.env.DB_PASSWORD
    host: "java-react-200526.cynb2exc9xns.us-east-2.rds.amazonaws.com",//process.env.HOST_NAME
    port:5432,//process.env.PORT_NAME
    database:"postgres" //process.env.DB_NAME
};
async function queryDB(sent, search="")
{
    
    const query=
    {
        rowMode: "array",
        text: `${sent}`
    };
    const sql=new Client(connection);
    await sql.connect();
    let results;
    if(search)
    {
        results=await sql.query(query,search);
    }
    else
    {
        results=await sql.query(query);
    }
    
    sql.end();
    return results.rows;
}
queryDB("SELECT * from radd.dota_stage").then(data=>{console.log(data)})



//This FUNCTION IS FOR HTTPS REQUESTS
function httpsReq(method,pathStr,hostStr="api.opendota.com",token=""){    
    return new Promise(resolve => {
          let obj='';
          let options={
              host:hostStr,
              path:pathStr,
              'method':method,
              headers:{"Cookie":"JSESSIONID="+token}
          };
          callback = function(response){
              var str='';
  
              response.on('data',function(chunk){
                  str+=chunk;
              });
  
              response.on('end',function(){
                  obj=JSON.parse(str);
                  resolve(obj);
              });
          }
          let request = https.request(options,callback);
          request.end();
    });
  }


  
exports.connection=connection;
exports.queryDB=queryDB;
exports.httpsReq=httpsReq;

