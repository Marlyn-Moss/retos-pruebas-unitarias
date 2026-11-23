// pedido.js
function confirmarPedido(pedido, pasarela, correo) {
    const pago = pasarela.cobrar(pedido.total);
    if (pago.aprobado) {
        correo.enviar(pedido.cliente, 'Pedido confirmado');
        return 'Confirmado';
    }
    return 'Rechazado';
}
module.exports = { confirmarPedido };
