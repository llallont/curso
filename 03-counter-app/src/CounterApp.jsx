import { useState } from "react";

const CounterApp = ( {value} ) => {

  const [counter, setCounter] = useState(value);

  const counterIncrement = () => setCounter( c => c + 1 );

  return (
      <>
        <h2>El valor del contador es { counter } </h2>
        {/*este modo sirve para pasar argumentos como el event a la funcion*/}
        {/* <button onClick = { () => {
          counterIncrement();
        } }>Incrementar contador +1</button> */}

        {/*como no se pasa nada de argumentos a la funcion se puede llamar asi*/}
        <button onClick = { counterIncrement }>Incrementar contador +1</button>
      </>
  )
}

export default CounterApp;