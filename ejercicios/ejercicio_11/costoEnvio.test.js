import { costoEnvio } from './costoEnvio';

describe('costoEnvio', () => {
  test('cobra $5 si el total es menor de $50', () => {
    expect(costoEnvio(20)).toBe(5);
  });

  test('límite: con $49.99 todavía se cobra envío', () => {
    expect(costoEnvio(49.99)).toBe(5);
  });

  test('límite: con exactamente $50 el envío es gratis', () => {
    expect(costoEnvio(50)).toBe(0);
  });

  test('un cliente premium no paga envío', () => {
    expect(costoEnvio(20, true)).toBe(0);
  });

  test('un total negativo lanza un error', () => {
    expect(() => costoEnvio(-1)).toThrow();
  });
});
