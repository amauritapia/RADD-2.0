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

    //add hero to database

    // {
    //   id: 129,
    //   name: 'npc_dota_hero_mars',
    //   localized_name: 'Mars',
    //   primary_attr: 'str',
    //   attack_type: 'Melee',
    //   roles: [ 'Carry', 'Initiator', 'Disabler', 'Durable' ],
    //   img: '/apps/dota2/images/heroes/mars_full.png?',
    //   icon: '/apps/dota2/images/heroes/mars_icon.png',
    //   base_health: 200,
    //   base_health_regen: null,
    //   base_mana: 75,
    //   base_mana_regen: 0,
    //   base_armor: -1,
    //   base_mr: 25,
    //   base_attack_min: 29,
    //   base_attack_max: 37,
    //   base_str: 23,
    //   base_agi: 20,
    //   base_int: 17,
    //   str_gain: 3.4,
    //   agi_gain: 1.9,
    //   int_gain: 1.4,
    //   attack_range: 250,
    //   projectile_speed: 900,
    //   attack_rate: 1.8,
    //   move_speed: 310,
    //   turn_rate: 0.8,
    //   cm_enabled: true,
    //   legs: 2
    // }
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
      //console.log(allAbilities)
    }
      //queryDB("INSERT INTO raddtwo.dota_stage VALUES()").then(data=>{console.log(data)});
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




