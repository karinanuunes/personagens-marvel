import React from "react";
import "./styles.css";

const Image = (props) => {
  return <img src={props.src} alt={props.alt} />;
};

export default Image;
