class HeroModel {
  constructor(
    id,
    name,
    atri,
    bHealth,
    bMana,
    bDmg,
    bArmor,
    bStr,
    bAgi,
    bInt,
    strGain,
    agiGain,
    intGain,
    img
  ) {
    this.id = id;
    this.name = name;
    this.bHealth = bHealth + 20 * bStr;
    if (atri === "int") {
      this.bMana = bMana + 15 * bInt;
    } else {
      this.bMana = bMana + 12 * bInt;
    }
    this.bDmg = bDmg;
    this.bArmor = bArmor;
    this.bStr = bStr;
    this.bAgi = bAgi;
    this.bInt = bInt;
    this.strGain = strGain;
    this.agiGain = agiGain;
    this.intGain = intGain;
    this.img = img;
  }
}

export default HeroModel;
