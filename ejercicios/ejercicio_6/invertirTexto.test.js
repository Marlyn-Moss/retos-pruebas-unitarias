import { invertirTexto } from './invertirTexto';

describe('invertirTexto', () => {
  test('invierte una palabra', () => {
    expect(invertirTexto('hola')).toBe('aloh');
  });

  test('respeta la ñ y las tildes', () => {
    expect(invertirTexto('Ñandú')).toBe('údnaÑ');
  });

  test('un texto vacío sigue vacío', () => {
    expect(invertirTexto('')).toBe('');
  });

  test('una sola letra queda igual', () => {
    expect(invertirTexto('a')).toBe('a');
  });

  test('si no recibe texto lanza TypeError', () => {
    expect(() => invertirTexto(123)).toThrow(TypeError);
  });
});
