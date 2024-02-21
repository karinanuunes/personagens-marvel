import React, { useState } from "react";
import Card from "../Card";
import Form from "../Form";
import "./Home.css";

function Home() {
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
    <div className="App">
      <Form onSubmit={handleFormSubmit} />
      <div className="filtro">
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
              onDelete(personagem.nome);
            }}
            delete="Deletar"
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
