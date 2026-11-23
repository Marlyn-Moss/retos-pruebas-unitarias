import { celsiusAFahrenheit, fahrenheitACelsius } from './temperatura';

describe('celsiusAFahrenheit', () => {
  test('0 °C son 32 °F', () => {
    expect(celsiusAFahrenheit(0)).toBe(32);
  });

  test('100 °C son 212 °F', () => {
    expect(celsiusAFahrenheit(100)).toBe(212);
  });

  test('-40 es igual en ambas escalas', () => {
    expect(celsiusAFahrenheit(-40)).toBe(-40);
  });

  test('37 °C son 98.6 °F', () => {
    expect(celsiusAFahrenheit(37)).toBeCloseTo(98.6);
  });
});

describe('fahrenheitACelsius', () => {
  test('212 °F son 100 °C', () => {
    expect(fahrenheitACelsius(212)).toBe(100);
  });

  test('ida y vuelta devuelve el mismo valor', () => {
    expect(fahrenheitACelsius(celsiusAFahrenheit(25))).toBeCloseTo(25);
  });
});
