import React, { useState } from "react";
// import {
//   Routes,
//   Route,
//   BrowserRouter,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";
import Card from "../Card";
import Form from "../Form";
// import Filter from "../Filter/Filter";
import "./home.css";

function Home() {
  let hero = true;

  const [personagens, setPersonagens] = useState([]);
  const [listaFiltro, setListaFiltro] = useState([]);

  let onDelete = (name) => {
    const newList = [...personagens];
    const filteredList = newList.filter((e) => (e.nome !== name ? e : null));
    setPersonagens(filteredList);
    setListaFiltro(filteredList);
  };

  const [tipoValue, setTipoValue] = useState("todos");

  let filterTipe = (tipo) => {
    let beforeFilterList = [...personagens];
    let filteredList = [];
    if (tipo === "heroi") {
      filteredList = beforeFilterList.filter((e) =>
        e.tipo === "Herói" ? e : null
      );
      setPersonagens(filteredList);
    } else if (tipo === "vilao") {
      filteredList = beforeFilterList.filter((e) =>
        e.tipo === "Vilão" ? e : null
      );
      setPersonagens(filteredList);
    } else if (tipo === "todos") {
      setPersonagens(listaFiltro);
    }
    console.log(personagens, tipo);
  };

  const handleFormSubmit = (personagem) => {
    setPersonagens((personagens) => [...personagens, personagem]);
    setListaFiltro((personagens) => [...personagens, personagem]);
  };

  return (
    <div className="">
      <Form onSubmit={handleFormSubmit} />
      <div className="cards">
        {personagens.map((personagem, index) => (
          <Card
            key={index}
            character={personagem}
            name={personagem.nome}
            src={personagem.urlImagem}
            alt={personagem.nome}
            height={personagem.altura}
            age={personagem.idade}
            origin={personagem.origem}
            race={personagem.raca}
            type={personagem.tipo}
            description={personagem.descricao}
            // onDetail={verDetalhes}
            detail="Ver detalhes"
            onDelete={() => {
              onDelete(index);
            }}
            delete="Deletar"
          />
        ))}

        {/* <Filter onChangeOption={() => filterTipe} /> */}

        <div>
          <select
            onChange={(e) => {
              setTipoValue(e.target.value);
              console.log(tipoValue);
              setPersonagens(listaFiltro);
            }}
          >
            <option value="heroi">Heroi</option>
            <option value="vilao">Vilao</option>
            <option value="todos">Todos</option>
          </select>
          <button onClick={() => filterTipe(tipoValue)}>Filtrar</button>
        </div>

        <div className="">
          {personagens.map((personagem) => (
            <Card
              name="Homem Aranha"
              src="https://cdn.awsli.com.br/600x700/1610/1610163/produto/177684974/poster-o-espetacular-homem-aranha-2-g-ebc6cbb4.jpg"
              alt="Homem Aranha"
              height={1.8}
              age={15}
              origin="Estados Unidos"
              race="Humano"
              type={hero ? "Herói" : "Vilão"}
              description="É homem e aranha"
              // onDetail={verDetalhes}
              detail="Ver detalhes"
              onDelete={() => onDelete(personagem.nome)}
              delete="Deletar"
            />
          ))}

          {/* <Card
        name="Homem Aranha"
        src="https://cdn.awsli.com.br/600x700/1610/1610163/produto/177684974/poster-o-espetacular-homem-aranha-2-g-ebc6cbb4.jpg"
        alt="Homem Aranha"
        height={1.8}
        age={15}
        origin="Estados Unidos"
        race="Humano"
        type={hero ? "Herói" : "Vilão"}
        description="É homem e aranha"
        // onDetail={verDetalhes}
        detail="Ver detalhes"
        // onDelete={onDelete}
        delete="Deletar"
      />
      <Card
        name="Capitão América"
        src="https://i.pinimg.com/564x/91/00/7d/91007d0fe4e7ba58b213051e539dc70c.jpg"
        alt="Capitão América"
        height={1.9}
        age={38}
        origin="Estados Unidos"
        race="Humano"
        type={hero ? "Herói" : "Vilão"}
        description="Velho descongelado"
        // onDetail={verDetalhes}
        detail="Ver detalhes"
        // onDelete={onDelete}
        delete="Deletar"
      />
      <Card
        name="Homem de Ferro"
        src="https://i.pinimg.com/564x/52/08/ac/5208ac301eb3fb378dc6b69a5e94c6ec.jpg"
        alt="Homem de Ferro"
        height={1.85}
        age={53}
        origin="Estados Unidos"
        race="Humano"
        type={hero ? "Herói" : "Vilão"}
        description="Velho rico"
        // onDetail={verDetalhes}
        detail="Ver detalhes"
        // onDelete={onDelete}
        delete="Deletar"
      /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
