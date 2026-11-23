'use client';
// Ejercicio 20 · Probar un componente de React (Next.js)
import { useState } from 'react';

export default function Contador({ inicial = 0, maximo = 10 }) {
  const [valor, setValor] = useState(inicial);

  return (
    <div className="contador">
      <p>{`Valor: ${valor}`}</p>
      <button onClick={() => setValor(valor - 1)} disabled={valor <= 0}>
        Restar
      </button>
      <button onClick={() => setValor(valor + 1)} disabled={valor >= maximo}>
        Sumar
      </button>
      <button onClick={() => setValor(inicial)}>Reiniciar</button>
    </div>
  );
}
