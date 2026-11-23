import { aplicarDescuento } from './aplicarDescuento';

describe('aplicarDescuento', () => {
  // Estas pruebas se escribieron en el orden del ciclo TDD
  test('1 · RETOS10 descuenta 10 %', () => {
    expect(aplicarDescuento(100, 'RETOS10')).toBe(90);
  });

  test('2 · sin cupón no hay descuento', () => {
    expect(aplicarDescuento(100)).toBe(100);
  });

  test('3 · un cupón que no existe no descuenta', () => {
    expect(aplicarDescuento(100, 'FALSO')).toBe(100);
  });

  test('4 · RETOS20 descuenta 20 %', () => {
    expect(aplicarDescuento(100, 'RETOS20')).toBe(80);
  });

  test('5 · acepta el cupón en minúsculas', () => {
    expect(aplicarDescuento(100, 'retos10')).toBe(90);
  });

  test('6 · redondea a dos decimales', () => {
    expect(aplicarDescuento(59.99, 'RETOS10')).toBe(53.99);
  });
});
