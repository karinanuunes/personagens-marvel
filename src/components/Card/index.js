import React from "react";
// import PropTypes from "prop-types";
import Name from "../Name";
import Height from "../Height";
import Age from "../Age";
import Origin from "../Origin";
import Image from "../Image";
import Race from "../Race";
import Type from "../Type";
import Description from "../Description";
import Button from "../Button";
import "./style.css";
// import { Link } from "react-router-dom";
import { Routes, Route, BrowserRouter, useNavigate, useLocation } from "react-router-dom";

const Card = (props) => {

  const navigate = useNavigate()
  const location = useLocation()

  let verDetalhes = () => {
    
    navigate('/details', { state: {character: props.character}  })
    // return console.log("Clicou");
  };
  return (
    <div className="card" >
      <Name name={props.name} />
      <Image
        src={props.src.length > 14 ? props.src : "https://iili.io/JEUVMxt.png"}
        alt={props.alt}
      />
      {/* <Height height={props.height ? props.height + " metros" : "Indefinida"} /> */}
      {/* <Age age={props.age ? props.age + " anos" : "Indefinida"} /> */}
      {/* <Origin origin={props.origin} /> */}
      {/* <Race race={props.race ? props.race : "Indefinida"} /> */}
      <Type type={props.type} />
      {/* <Description description={props.description} /> */}
      <Button onClick={verDetalhes} label={props.detail} />
      
      <Button onClick={props.onDelete} label={props.delete} />
    </div>
  );
};

export default Card;

// Card.propTypes = {
//   name: PropTypes.string.isRequired,
//   height: PropTypes.number.isRequired,
//   age: PropTypes.number,
//   origin: PropTypes.string.isRequired,
//   race: PropTypes.string,
//   type: PropTypes.bool.isRequired,
//   description: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
// };

// Vou precisar desse propTypes para garantir que seja preenchido o formulario
