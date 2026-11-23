import { fizzBuzz, generarFizzBuzz } from './fizzBuzz';

describe('fizzBuzz', () => {
  test('un número común se devuelve como texto', () => {
    expect(fizzBuzz(7)).toBe('7');
  });

  test('múltiplo de 3: Fizz', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  test('múltiplo de 5: Buzz', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  test('múltiplo de 3 y de 5: FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});

describe('generarFizzBuzz', () => {
  test('genera la lista del 1 al 5', () => {
    // toEqual compara el contenido de arreglos y objetos
    expect(generarFizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
  });

  test('genera tantos elementos como se pidan', () => {
    expect(generarFizzBuzz(30)).toHaveLength(30);
  });
});
