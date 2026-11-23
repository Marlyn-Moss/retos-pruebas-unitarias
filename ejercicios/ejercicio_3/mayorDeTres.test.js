import { mayorDeTres } from './mayorDeTres';

describe('mayorDeTres', () => {
  // test.each ejecuta la misma prueba con cada fila de datos
  test.each([
    [1, 2, 3, 3],
    [3, 2, 1, 3],
    [2, 3, 1, 3],
    [5, 5, 5, 5],
    [-1, -5, -3, -1],
  ])('mayorDeTres(%s, %s, %s) devuelve %s', (a, b, c, esperado) => {
    expect(mayorDeTres(a, b, c)).toBe(esperado);
  });
});
