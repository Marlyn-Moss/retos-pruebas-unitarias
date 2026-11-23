// Ejercicio 6 · Trabajar con textos
export function invertirTexto(texto) {
  if (typeof texto !== 'string') {
    throw new TypeError('Se esperaba un texto');
  }
  // [...texto] separa bien letras como la ñ o las tildes
  return [...texto].reverse().join('');
}
