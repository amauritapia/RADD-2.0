let {queryDB, httpsReq} = require('./methods/databaseRequests');




httpsReq("get","/api/constants/heroes")
.then(data => 
{
  httpsReq("get","/api/constants/abilities")
  .then(abilities=>
    {
      let heroKeys=Object.keys(data)
      let i=0;
      heroKeys.forEach((heroKey,index)=>
      {
        task(data[heroKey],i,abilities);
        i++;

      })
    });

});

function task(hero,i,abilities)
{
  setTimeout(()=>{
   // console.log(hero)
      let splittedName=hero.name.split("_")

      //This will store the info of the all the name of a hero
      let heroNameInfo=[];
      for(let i=3;i<splittedName.length;i++)
      {
        heroNameInfo.push(splittedName[i])
      }
      //console.log(heroNameInfo)


      //console.log(heroNameInfo)
    
    //Get all of the heroes abilities
    let abilitieHeroNames=Object.keys(abilities);
    let currentName;
    let allHerosAbilities=[];
    for(let i=0; i<abilitieHeroNames.length;i++)
    {
      currentSelectedAbility=abilitieHeroNames[i].split("_");
    
      //sand king is a data inconsistency
      if(hero.localized_name=="Sand King")
      {
        heroNameInfo=["sandking"]
      }
      
      let flag=true;
      for(let j=0; j<heroNameInfo.length;j++)
      {
    
        if(heroNameInfo[j]==currentSelectedAbility[j]&& flag)
        {
          if(j==heroNameInfo.length-1)
          {
            allHerosAbilities.push(abilities[abilitieHeroNames[i]].dname)
            //console.log(abilities[abilitieHeroNames[i]].dname)
           
          }
        }
        else
        {
          flag=false;
        }
      }
    }
    allHerosAbilities.push("Hero Name: "+hero.localized_name)
    if(hero.localized_name=="Sand King")
    {
      console.log(allHerosAbilities.length)
    }
    if(allHerosAbilities.length>8)
    {
      console.log(hero.localized_name+ ": "+allHerosAbilities.length)
    }
    //console.log(allHerosAbilities)


      //queryDB("INSERT INTO raddtwo.dota_stage VALUES()").then(data=>{console.log(data)});
  },100*i)
}

