import { useNavigate, useLocation } from "react-router-dom";
import "./details.css";

function Details() {
  const navigate = useNavigate();
  const location = useLocation();
  const character = location.state.character;

  function goToHome() {
    navigate("/");
  }

  return (
    <div className="details-card">
      <div className="image-card">
        <img
          src={
            character.urlImagem.length > 14
              ? character.urlImagem
              : "https://iili.io/JEUVMxt.png"
          }
          alt={character.nome}
        />
      </div>
      <div className="tipo-card">
        <p>{character.tipo}</p>
      </div>
      <h2 className="nome-card">{character.nome}</h2>
      <p className="descricao-card">{character.descricao}</p>

      <div className="caracteristicas">
        <div className="itens">
          <div className="caracteristica-card-valor">
            <p>{character.idade ? character.idade + " anos" : "Indefinida"}</p>
          </div>
          <div className="caracteristica-card-item">Idade</div>
        </div>

        <div className="itens">
          <div className="caracteristica-card-valor">{character.raca}</div>
          <div className="caracteristica-card-item">Raça</div>
        </div>

        <div className="itens no-border">
          <div className="caracteristica-card-valor">
            {character.altura ? character.altura + " metros" : "Indefinida"}
          </div>
          <div className="caracteristica-card-item">Altura</div>
        </div>
      </div>
      <button onClick={goToHome} className="button-card">
        Home
      </button>
    </div>
  );
}

export default Details;
