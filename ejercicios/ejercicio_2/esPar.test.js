import { esPar } from './esPar';

describe('esPar', () => {
  test('4 es par', () => {
    expect(esPar(4)).toBe(true);
  });

  test('7 no es par', () => {
    expect(esPar(7)).toBe(false);
  });

  test('0 es par', () => {
    expect(esPar(0)).toBeTruthy();
  });

  test('funciona con negativos', () => {
    expect(esPar(-2)).toBe(true);
    expect(esPar(-3)).toBeFalsy();
  });
});
