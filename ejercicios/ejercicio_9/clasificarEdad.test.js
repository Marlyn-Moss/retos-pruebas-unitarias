import { clasificarEdad } from './clasificarEdad';

describe('clasificarEdad · particiones válidas', () => {
  test.each([
    [10, 'Menor de edad'],
    [40, 'Adulto'],
    [80, 'Adulto mayor'],
  ])('%s años: %s', (edad, esperado) => {
    expect(clasificarEdad(edad)).toBe(esperado);
  });
});

describe('clasificarEdad · valores límite', () => {
  test.each([
    [0, 'Menor de edad'],
    [17, 'Menor de edad'],
    [18, 'Adulto'],
    [64, 'Adulto'],
    [65, 'Adulto mayor'],
    [120, 'Adulto mayor'],
  ])('%s años: %s', (edad, esperado) => {
    expect(clasificarEdad(edad)).toBe(esperado);
  });
});

describe('clasificarEdad · particiones inválidas', () => {
  test('-1 está fuera de rango', () => {
    expect(() => clasificarEdad(-1)).toThrow(RangeError);
  });

  test('121 está fuera de rango', () => {
    expect(() => clasificarEdad(121)).toThrow('Edad fuera de rango');
  });

  test('un decimal no es válido', () => {
    expect(() => clasificarEdad(17.5)).toThrow('La edad debe ser un número entero');
  });

  test('un texto no es válido', () => {
    expect(() => clasificarEdad('20')).toThrow('La edad debe ser un número entero');
  });
});
