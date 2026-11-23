// Ejercicio 8 · Limpiar datos antes de comparar
export function esPalindromo(texto) {
  const limpio = texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // quita tildes
    .replace(/[^a-z0-9]/g, ''); // quita espacios y signos
  return limpio.length > 0 && limpio === [...limpio].reverse().join('');
}
