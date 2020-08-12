let {queryDB, httpsReq, delay} = require('./methods/databaseRequests');


let allAbilities=[];
let maxHeroSize=0;
let currentHeroNumber=0;
const timeIncrementer=500;
let attributesNames=["str","agi","int"];

function loadHeroesAndAbilities()
{
  httpsReq("get","/api/constants/heroes")
  .then(data => 
  {
    httpsReq("get","/api/constants/abilities")
    .then(abilities=>
      {
        let heroKeys=Object.keys(data)
        maxHeroSize=heroKeys.length-1;
        let i=0;
        
        heroKeys.forEach((heroKey,index)=>
        {
         task(data[heroKey],i,abilities);
          i++;
        })
      });
  })
};

async function task(hero,i,abilities)
{
  setTimeout(()=>{
      let splittedName=hero.name.split("_")

      //This will store the info of the all the name of a hero
      let heroNameInfo=[];
      for(let i=3;i<splittedName.length;i++)
      {
        heroNameInfo.push(splittedName[i])
      }
 

    //Get all of the heroes abilities
    let abilitieHeroNames=Object.keys(abilities);

    for(let i=0; i<abilitieHeroNames.length;i++)
    {
      currentSelectedAbility=abilitieHeroNames[i].split("_");
    
      //sand king is a data inconsistency in the database
      if(hero.localized_name=="Sand King")
      {
        heroNameInfo=["sandking"]
      }
      

      //Find the matching heroes to their abilities
      let flag=true;
      for(let j=0; j<heroNameInfo.length;j++)
      {
    
        if(heroNameInfo[j]==currentSelectedAbility[j]&& flag)
        {
          if(j==heroNameInfo.length-1 && abilities[abilitieHeroNames[i]].dname)
          {
            abilities[abilitieHeroNames[i]].heroId=hero.id
            allAbilities.push(abilities[abilitieHeroNames[i]]);
          }
        }
        else
        {
          flag=false;
        }
      }
    }
    
    //Insert heroes into database



    
    currentHeroNumber++;
    //Enter this if statement if your all done loading in heroes and all abilities are loaded into array
    if(currentHeroNumber==maxHeroSize)
    {
      console.log(allAbilities)
    }
      //queryDB("INSERT INTO raddtwo.dota_stage VALUES()").then(data=>{console.log(data)});
  },1*timeIncrementer)
}

//nukes all the tables in the proper order
async function truncateAllTables()
{
  await queryDB(`DELETE FROM raddtwo."abilities" WHERE true`).then(async ()=>
  {
     await queryDB(`DELETE FROM raddtwo."hero" WHERE true`).then(async()=>
    {
      await queryDB(`DELETE FROM raddtwo."attributes" WHERE true`).then(async()=>
      {

      })
    })
  })
}

//This function adds attributes
async function addAttributes()
{
  for(let i=0;i<attributesNames.length;i++)
  {
    await new Promise(function(resolve, reject) 
    { 
      setTimeout(resolve, i*timeIncrementer); 
    })
    .then(async function() 
    { 
      await queryDB(`INSERT INTO raddtwo."attributes" (id,"attribute") VALUES ($1,$2);`,[1+i,attributesNames[i]])
    }); 
  }   
}

function generateAbilitiesHeroesAttributes()
{
  truncateAllTables().then(()=>
  {
    addAttributes().then(()=>
    {
      loadHeroesAndAbilities();
    })
  })
}



generateAbilitiesHeroesAttributes();




