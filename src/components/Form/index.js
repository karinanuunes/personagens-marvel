import React, { useState } from "react";
import "./styles.css";

const Form = () => {
  const [nome, setNome] = useState("");
  const [altura, setAltura] = useState("");
  const [idade, setIdade] = useState("");
  const [origem, setOrigem] = useState("");
  const [raca, setRaca] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [urlImagem, setUrlImagem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      nome,
      altura,
      idade,
      origem,
      raca,
      tipo,
      descricao,
      urlImagem,
    });

    setNome("");
    setAltura("");
    setIdade("");
    setOrigem("");
    setRaca("");
    setTipo("");
    setDescricao("");
    setUrlImagem("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Cadastro de personagens da Marvel</h2>
      <br />
      <label>Nome:</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <label>Altura:</label>
      <input
        type="text"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <label>Idade:</label>
      <input
        type="text"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <label>Origem:</label>
      <input
        type="text"
        value={origem}
        onChange={(e) => setOrigem(e.target.value)}
        required
      />
      <label>Raça:</label>
      <input
        type="text"
        value={raca}
        onChange={(e) => setRaca(e.target.value)}
      />
      <label>Tipo:</label>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
        <option value="">Selecione...</option>
        <option value="Herói">Herói</option>
        <option value="Vilão">Vilão</option>
      </select>
      <label>Descrição:</label>
      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <label>URL da Imagem:</label>
      <input
        type="text"
        value={urlImagem}
        onChange={(e) => setUrlImagem(e.target.value)}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
