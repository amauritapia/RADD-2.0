import React, { useEffect, useState } from "react";
import SelectedHero from "./SelectedHero";
function SelectedHeroPage(props) {
  //will only display the hero when a hero image is clicked on
  if (props.heroID !== 0) {
    //the whole hero data is based into the SelectedHero Component in order to be displayed
    //stylization will be developed later
    return (
      <div>
        <SelectedHero hero={props.aHero} atri={props.atri} />
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default SelectedHeroPage;
