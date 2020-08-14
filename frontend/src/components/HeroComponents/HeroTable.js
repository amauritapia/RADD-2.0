import React from "react";
import HeroModel from "../../models/HeroModel";

const imgUrlBase = "http://cdn.dota2.com/";
function HeroTable(props) {
  return (
    <div>
      {props.heroes.map((hero) => {
        //sets the image, handler, and the name to be passed to a different axios call
        //in order to return abilities and stats
        return (
          <img
            className="heroImage"
            src={imgUrlBase + hero.imageUrl}
            onClick={props.selectHandler}
            id={hero.id}
            value={hero.attribute.attribute}
          />
        );
      })}
    </div>
  );
}
export default HeroTable;
