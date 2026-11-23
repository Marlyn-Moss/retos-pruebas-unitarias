import { contarVocales } from './contarVocales';

describe('contarVocales', () => {
  test('cuenta las vocales de una palabra', () => {
    expect(contarVocales('hola')).toBe(2);
  });

  test('no distingue mayúsculas y cuenta vocales con tilde', () => {
    expect(contarVocales('MURCIÉLAGO')).toBe(5);
  });

  test('una palabra sin vocales devuelve 0', () => {
    expect(contarVocales('xyz')).toBe(0);
  });

  test('un texto vacío devuelve 0', () => {
    expect(contarVocales('')).toBe(0);
  });
});
