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

const Card = () => {
  let hero = true;

  return (
    <div className="card">
      <Title title="Homem Aranha" />
      <Image
        src="https://cdn.awsli.com.br/600x700/1610/1610163/produto/177684974/poster-o-espetacular-homem-aranha-2-g-ebc6cbb4.jpg"
        alt="Homem Aranha"
      />
      <Height height={1.6} />
      <Age age={27} />
      <Origin origin="Brasil" />
      <Race race="Humana" />
      <Type type={hero ? "Herói" : "Vilão"} />
      <Description description="É homem e aranha" />
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
