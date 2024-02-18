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

const Card = (props) => {
  return (
    <div className="card">
      <Name name={props.name} />
      <Image src={props.src} alt={props.alt} />
      <Height height={props.height ? props.height + " metros" : "Indefinida"} />
      <Age age={props.age ? props.age + " anos" : "Indefinida"} />
      <Origin origin={props.origin} />
      <Race race={props.race ? props.race : "Indefinida"} />
      <Type type={props.type} />
      <Description description={props.description} />
      <Button onClick={props.onDetail} label={props.detail} />
      <Button onClick={props.onDelete} label={props.delete} />
    </div>
  );
};

export default Card;

// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   height: PropTypes.number.isRequired,
//   age: PropTypes.number,
//   origin: PropTypes.string.isRequired,
//   race: PropTypes.string,
//   type: PropTypes.bool.isRequired,
//   image: PropTypes.string.isRequired,
// };

// Vou precisar desse propTypes para garantir que seja preenchido o formulario
