//pedido.test.js
const { confirmarPedido } = require('./pedido');

test('envía el correo cuando el pago se aprueba', () => {
    const pasarela = { cobrar: jest.fn(() => ({ aprobado: true })) }; // stub
    const correo = { enviar: jest.fn() }; // mock
    const pedido = { total: 80, cliente: 'mmoz@retos.edu.sv' };
    const resultado = confirmarPedido(pedido, pasarela, correo);
    expect(resultado).toBe('Confirmado');
    expect(correo.enviar).toHaveBeenCalledWith('mmoz@retos.edu.sv', 'Pedido confirmado');
});