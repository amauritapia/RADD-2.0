import React, { useEffect, useState } from "react";
import Axios from "axios";
import HeroTable from "./HeroTable";
import SelectedHeroPage from "./SelectedHeroPage";
import AbilityLine from "../AbilityComponents/AbilityLine";

const baseUrl = "http://localhost:8010/hero/";
function BaseHeroPage() {
  //seperating out the heroes into seperate attributes
  const [strHeroes, setStrHeroes] = useState([]);
  const [agiHeroes, setAgiHeroes] = useState([]);
  const [intHeroes, setIntHeroes] = useState([]);
  //seting the selected character/hero id
  const [selectedHero, setSelectedHero] = useState(0);
  //setting the actual selected character/hero
  const [hero, setHero] = useState([]);
  //setting the attribute
  const [atribute, setAtribute] = useState("a");
  //setting the ability array
  const [abilities, setAbilities] = useState([]);

  //use effect statements to load each of the hero lists by attribute
  useEffect(() => {
    const directionUrl = "/atribute/str";
    Axios.get(baseUrl + directionUrl).then((res) => {
      setStrHeroes(res.data);
    });
  }, []);

  useEffect(() => {
    const directionUrl = "/atribute/agi";
    Axios.get(baseUrl + directionUrl).then((res) => {
      setAgiHeroes(res.data);
    });
  }, []);

  useEffect(() => {
    const directionUrl = "/atribute/int";
    Axios.get(baseUrl + directionUrl).then((res) => {
      setIntHeroes(res.data);
    });
  }, []);

  //sets the selected hero id
  //then uses the id to make another axios request in order to get the correct information from the DB
  //this is then passsed onto another component to sperate views
  const heroHandler = (e) => {
    setSelectedHero(e.target.id);
    setAtribute(e.target.atri);
    Axios.get(baseUrl + selectedHero).then((res) => {
      setHero(res.data);
    });
    Axios.get("http://localhost:8010/abilities/hero/" + selectedHero).then(
      (res) => {
        setAbilities(res.data);
      }
    );
  };

  //returns 3 seperate hero "grids" that contain heros of the specified atribute
  return (
    <div>
      <h1>Strength</h1>
      <HeroTable
        heroes={strHeroes}
        atri="Strength"
        selectHandler={heroHandler}
      />
      <br />
      <h1>Agility</h1>
      <HeroTable
        heroes={agiHeroes}
        atri="Agility"
        selectHandler={heroHandler}
      />
      <br />
      <h1>Intellect</h1>
      <HeroTable
        heroes={intHeroes}
        atri="Intellect"
        selectHandler={heroHandler}
      />
      <br />
      <SelectedHeroPage heroID={selectedHero} aHero={hero} atri={atribute} />
      <AbilityLine abilities={abilities} />
    </div>
  );
}
export default BaseHeroPage;
