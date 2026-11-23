import { esPalindromo } from './esPalindromo';

describe('esPalindromo', () => {
  test('una palabra palíndroma', () => {
    expect(esPalindromo('reconocer')).toBe(true);
  });

  test('ignora espacios y mayúsculas', () => {
    expect(esPalindromo('Anita lava la tina')).toBe(true);
  });

  test('ignora tildes y signos', () => {
    expect(esPalindromo('¡Dábale arroz a la zorra el abad!')).toBe(true);
  });

  test('una palabra que no es palíndroma', () => {
    expect(esPalindromo('hola')).toBe(false);
  });

  test('un texto vacío no es palíndromo', () => {
    expect(esPalindromo('')).toBe(false);
  });
});
