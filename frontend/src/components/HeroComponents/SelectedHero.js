import React from "react";
import "../../App.css";
function SelectedHero(props) {
  return (
    <div className="container">
      <div class="row">
        <div className="col-sm">
          {/*Stats for the hero */}
          <div className="baseStats" style={{ left: 200 }}>
            <h6>Health: {props.hero.baseHealth + props.hero.baseStr * 20}</h6>
            <h6>Mana: {props.hero.baseMana + props.hero.baseInt * 12}</h6>
            <h6>
              Armor:{" "}
              {Math.floor(props.hero.baseArmour + props.hero.baseAgi * 0.167)}
            </h6>
            <h6>Damage: {props.hero.baseDmg}</h6>
            <h6>Attribute: {props.atri}</h6>
          </div>
        </div>
        <div className="col-sm">
          {/*Name of the hero*/}
          <h2>{props.hero.localizedName}</h2>
          <img src={"http://cdn.dota2.com/" + props.hero.imageUrl} />
        </div>
        <div className="col-sm">
          {/*Stat gain for the hero */}
          <div className="statGain">
            <h6>Strength Gain: {props.hero.strGain}</h6>
            <h6>Agility Gain: {props.hero.agiGain}</h6>
            <h6>Intellect Gain: {props.hero.intGain}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SelectedHero;
