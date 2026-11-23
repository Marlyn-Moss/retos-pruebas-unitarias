// Ejercicio 7 · Contar con expresiones regulares
export function contarVocales(texto) {
  // Quita las tildes: "é" pasa a "e"
  const sinTildes = texto.normalize('NFD').replace(/[̀-ͯ]/g, '');
  const vocales = sinTildes.match(/[aeiou]/gi);
  return vocales ? vocales.length : 0;
}
