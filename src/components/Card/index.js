import React from "react";
import Name from "../Name";
import Image from "../Image";
import Description from "../Description";
import Button from "../Button";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  let verDetalhes = () => {
    navigate("/details", { state: { character: props.character } });
  };

  return (
    <div className="card">
      <Name name={props.name} />
      <Image
        src={props.src.length > 14 ? props.src : "https://iili.io/JEUVMxt.png"}
        alt={props.alt}
      />
      <Description description={props.description} />
      <Button onClick={verDetalhes} label={props.detail} />

      <Button onClick={props.onDelete} label={props.delete} />
    </div>
  );
};

export default Card;
