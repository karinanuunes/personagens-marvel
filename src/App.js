import React from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  let hero = true;
  return (
    <div className="App">
      <Card
        title="Homem Aranha"
        src="https://cdn.awsli.com.br/600x700/1610/1610163/produto/177684974/poster-o-espetacular-homem-aranha-2-g-ebc6cbb4.jpg"
        alt="Homem Aranha"
        height={1.8}
        age={15}
        origin="Estados Unidos"
        race="Humano"
        type={hero ? "Herói" : "Vilão"}
        description="É homem e aranha"
      />
      <Card
        title="Capitão América"
        src="https://i.pinimg.com/564x/91/00/7d/91007d0fe4e7ba58b213051e539dc70c.jpg"
        alt="Capitão América"
        height={1.9}
        age={38}
        origin="Estados Unidos"
        race="Humano"
        type={hero ? "Herói" : "Vilão"}
        description="Velho descongelado"
      />
      <Card
        title="Homem de Ferro"
        src="https://i.pinimg.com/564x/52/08/ac/5208ac301eb3fb378dc6b69a5e94c6ec.jpg"
        alt="Homem de Ferro"
        height={1.85}
        age={53}
        origin="Estados Unidos"
        race="Humano"
        type={hero ? "Herói" : "Vilão"}
        description="Velho rico"
      />
    </div>
  );
};

export default App;
