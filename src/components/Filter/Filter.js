import { useState } from "react"

function Filter(props) {

  const [tipoValue, setTipoValue] = useState('todos')
  return (
    <div>
      <select onChange={(e) => {
        setTipoValue(e.target.value);
        console.log(tipoValue)
        }}>
        <option value='heroi'>Heroi</option>
        <option value='vilao'>Vilao</option>
        <option value='todos'>Todos</option>
      </select>
      <button onClick={props.onChangeOption(tipoValue)}>Filtrar</button>
    </div>
  )
}

export default Filter