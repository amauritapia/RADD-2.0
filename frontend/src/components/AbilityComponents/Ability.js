import React from "react";
const imgUrlBase = "http://cdn.dota2.com/";
function Ability(props) {
  return (
    <div>
      {props.abilities.map((ability) => {
        //sets the image and returns it with a col-sm so its all on the same line
        return <img src={imgUrlBase + ability.imageUrl} />;
      })}
    </div>
  );
}
export default Ability;
