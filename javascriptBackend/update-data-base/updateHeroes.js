let {queryDB, httpsReq, delay} = require('./methods/databaseRequests');


let allAbilities=[];
let maxHeroSize=0;
let currentHeroNumber=-1;
const timeIncrementer=300;
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

    //add hero to database
    let h=hero;    
    let storedHero=[h.id,h.agi_gain,h.attack_range,
    h.base_agi,Math.round(h.base_armor),Math.round((h.base_attack_min+h.base_attack_max)/2),
    h.base_health,h.base_int,h.base_mana,
    h.move_speed, h.base_str, h.icon,
    h.img, h.int_gain, h.localized_name,
    h.name,h.str_gain, (attributesNames.indexOf(h.primary_attr)+1)];
    queryDB(`INSERT INTO raddtwo.hero (id,agi_gain,attack_range,base_agi,base_armour,base_dmg,base_health,base_int,base_mana,base_speed,base_str,icon_url,image_url,int_gain,localized_name,"name",str_gain,"attribute") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18);`,storedHero);
  
    currentHeroNumber++;
    //Enter this if statement if your all done loading in heroes and all abilities are loaded into array
    if(currentHeroNumber==maxHeroSize)
    {
      for(let p=0;p<allAbilities.length;p++)
      {
        setTimeout(()=>
        {
          let c=allAbilities[p]
          let cooldown="N/A";
          let manaCost="N/A"
          if(c.cd)
          {
            cooldown=c.cd.toString();
          }
          if(c.mc)
          {
            manaCost=c.mc.toString();
          }
          c.desc="";
          let singleAbility=[p+1,c.behavior,c.dname,
                            true,false,c.bkbpierce,//active skill, ags
                            cooldown,c.desc,c.dmg_type,
                            c.img,manaCost,c.heroId]
          queryDB(`INSERT INTO raddtwo.abilities (ability_id,ability_behavior,ability_name,active_skill,ags_skill,bkb_pierce,cool_down,description,dmg_type,image_url,mana_cost,id)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);`,singleAbility)
        },p*timeIncrementer)
      }

    }
  },i*timeIncrementer)
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




