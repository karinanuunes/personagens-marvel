import React from "react";
// import PropTypes from "prop-types";
import Title from "../Title";
import Height from "../Height";
import Age from "../Age";
import Origin from "../Origin";
import Image from "../Image";
import Race from "../Race";
import Type from "../Type";
import Description from "../Description";
import "./style.css";

const Card = (props) => {
  return (
    <div className="card">
      <Title title={props.title} />
      <Image src={props.src} alt={props.alt} />
      <Height height={props.height} />
      <Age age={props.age} />
      <Origin origin={props.origin} />
      <Race race={props.race} />
      <Type type={props.type} />
      <Description description={props.description} />
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
