import React, { useState } from "react";
import Header from "./Header";

//Componente
//Estado
//Propriedade

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1); //seto o valor da variavel para counter + 1
  }

  return (
    <>
      <Header title="Dashboard" />
      <Header title="Dashboard2" />
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
