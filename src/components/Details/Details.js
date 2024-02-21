import { useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
import "./details.css";

// import Lista from "../../List"

function Details() {
  const navigate = useNavigate();
  const location = useLocation();
  const character = location.state.character;

  function goToHome() {
    navigate("/");
  }

  // const [classe, setClasse] = useState("");
  // const handleClass = () => {
  //   if (character.tipo === "Herói") {
  //     setClasse("cgreen");
  //   } else if (character.tipo === "Vilão") {
  //     setClasse("cred");
  //   }
  // };
  // useEffect(handleClass, [character.tipo]);

  // const Parag = ({ poder }) => {
  //   return <p>{poder}</p>
  // }

  return (
    // <div className="cp-bg-img">
    //   <div className="cp-opacity">
    //     <div className={`char-page-container ${classe}`}>
    //       <h1 className="charpage-name">{character.nome}</h1>
    //       <img
    //         className="charpage-img"
    //         src={character.urlImagem}
    //         alt="character"
    //       />
    //       <div className="data-container">
    //         <h2>Tipo:</h2>
    //         <p>{character.tipo}</p>
    //         <h2>Raca:</h2>
    //         <p>{character.raca}</p>
    //         {/* <h2>Poderes:</h2>
    //         {character.poderes.map((e, index) => <Parag key={index} poder={e} />)} */}
    //         <h2>Historia:</h2>
    //         <p>{character.descricao}</p>
    //         <h2>Idade:</h2>
    //         <p>{character.idade}</p>
    //         <h2>Altura:</h2>
    //         <p>{character.altura}</p>
    //       </div>

    //       <button className="go-home-button" onClick={goToHome}>
    //         Home
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="details-card">
      <div className="image-card">
        <img src={character.urlImagem} alt={character.nome} />
      </div>
      <div className="tipo-card">
        <p>{character.tipo}</p>
      </div>
      <h2 className="nome-card">{character.nome}</h2>
      <p className="descricao-card">{character.descricao}</p>

      <div class="caracteristicas">
        <div class="itens">
          <div class="caracteristica-card-valor">
            <p>{character.idade ? character.idade + " anos" : "Indefinida"}</p>
          </div>
          <div class="caracteristica-card-item">Idade</div>
        </div>

        <div class="itens">
          <div class="caracteristica-card-valor">{character.raca}</div>
          <div class="caracteristica-card-item">Raça</div>
        </div>

        <div class="itens no-border">
          <div class="caracteristica-card-valor">
            {character.altura ? character.altura + " metros" : "Indefinida"}
          </div>
          <div class="caracteristica-card-item">Altura</div>
        </div>
      </div>
      <button onClick={goToHome} className="button-card">
        Home
      </button>
    </div>
  );
}

export default Details;
