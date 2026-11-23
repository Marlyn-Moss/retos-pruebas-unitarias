import { calcularIVA, precioConIVA } from './calcularIVA';

describe('calcularIVA', () => {
  test('el IVA de $100 es $13', () => {
    expect(calcularIVA(100)).toBe(13);
  });

  test('redondea a dos decimales', () => {
    // 19.99 × 0.13 = 2.5987 → 2.60
    expect(calcularIVA(19.99)).toBe(2.6);
  });

  test('el IVA de $0 es $0', () => {
    expect(calcularIVA(0)).toBe(0);
  });

  test('un precio negativo lanza un error', () => {
    expect(() => calcularIVA(-5)).toThrow('El precio no puede ser negativo');
  });
});

describe('precioConIVA', () => {
  test('suma el IVA al precio', () => {
    expect(precioConIVA(19.99)).toBe(22.59);
  });
});
