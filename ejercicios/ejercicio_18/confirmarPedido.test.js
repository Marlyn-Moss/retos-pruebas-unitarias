import { confirmarPedido } from './confirmarPedido';

describe('confirmarPedido', () => {
  const pedido = { total: 80, cliente: 'ana@correo.com' };
  let pasarela;
  let correo;

  beforeEach(() => {
    // Stub: la pasarela siempre aprueba el pago
    pasarela = { cobrar: jest.fn(() => ({ aprobado: true })) };
    // Mock: registra cómo lo llamaron para verificarlo después
    correo = { enviar: jest.fn() };
  });

  test('confirma el pedido cuando el pago se aprueba', () => {
    expect(confirmarPedido(pedido, pasarela, correo)).toBe('Confirmado');
  });

  test('cobra el total del pedido a la pasarela', () => {
    confirmarPedido(pedido, pasarela, correo);
    expect(pasarela.cobrar).toHaveBeenCalledWith(80);
    expect(pasarela.cobrar).toHaveBeenCalledTimes(1);
  });

  test('envía el correo de confirmación al cliente', () => {
    confirmarPedido(pedido, pasarela, correo);
    expect(correo.enviar).toHaveBeenCalledWith('ana@correo.com', 'Pedido confirmado');
  });

  test('si el pago se rechaza, no envía correo', () => {
    pasarela.cobrar.mockReturnValue({ aprobado: false });
    expect(confirmarPedido(pedido, pasarela, correo)).toBe('Rechazado');
    expect(correo.enviar).not.toHaveBeenCalled();
  });

  test('un pedido sin total no llega a la pasarela', () => {
    expect(() => confirmarPedido({ total: 0, cliente: 'ana@correo.com' }, pasarela, correo)).toThrow();
    expect(pasarela.cobrar).not.toHaveBeenCalled();
  });
});
