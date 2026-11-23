import { sumar } from './sumar';

describe('sumar', () => {
  test('suma dos números positivos', () => {
    // Arrange
    const a = 2;
    const b = 3;
    // Act
    const resultado = sumar(a, b);
    // Assert
    expect(resultado).toBe(5);
  });

  test('suma números negativos', () => {
    expect(sumar(-4, -6)).toBe(-10);
  });

  test('sumar cero no cambia el número', () => {
    expect(sumar(7, 0)).toBe(7);
  });

  test('con decimales se usa toBeCloseTo', () => {
    // 0.1 + 0.2 da 0.30000000000000004 en JavaScript
    expect(sumar(0.1, 0.2)).toBeCloseTo(0.3);
  });
});
