import React, { useEffect, useState } from "react";
import Ability from "./Ability";
import Axios from "axios";

function AbilityLine(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div>
          <Ability abilities={props.abilities} />
        </div>
      </div>
    </div>
  );
}
export default AbilityLine;
