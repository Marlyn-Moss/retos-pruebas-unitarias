import { ejercicios } from '../ejercicios/lista';
import Contador from '../ejercicios/ejercicio_20/Contador';

export default function Inicio() {
  return (
    <main>
      <header>
        <p className="eyebrow">Instituto RETOS · Módulo 21 · Aplicación de Testing y QA</p>
        <h1>Pruebas unitarias con Jest</h1>
        <p className="lead">
          20 ejercicios ordenados de lo básico a lo avanzado. Cada carpeta <code>ejercicios/ejercicio_N</code> tiene
          el código, sus pruebas y un README con el enunciado y un reto.
        </p>
        <div className="comandos">
          <code>npm test</code>
          <code>npm test -- ejercicio_5</code>
          <code>npm run test:coverage</code>
        </div>
      </header>

      <section className="lista">
        {ejercicios.map((e) => (
          <article key={e.n} className="tarjeta">
            <span className={`nivel ${e.nivel.toLowerCase()}`}>{e.nivel}</span>
            <h2>
              {e.n}. {e.titulo}
            </h2>
            <p>{e.concepto}</p>
            <code>ejercicio_{e.n}</code>
          </article>
        ))}
      </section>

      <section className="demo">
        <h2>Demo del ejercicio 20</h2>
        <Contador maximo={5} />
      </section>
    </main>
  );
}
