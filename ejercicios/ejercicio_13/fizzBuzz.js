// Ejercicio 13 · La kata clásica FizzBuzz
export function fizzBuzz(numero) {
  if (numero % 15 === 0) return 'FizzBuzz';
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  return String(numero);
}

export function generarFizzBuzz(hasta) {
  const resultado = [];
  for (let i = 1; i <= hasta; i++) {
    resultado.push(fizzBuzz(i));
  }
  return resultado;
}
