// Ejercicio 18 · Dobles de prueba: stubs y mocks (semana 4)
// La pasarela y el correo llegan como parámetros para poder reemplazarlos en las pruebas.
export function confirmarPedido(pedido, pasarela, correo) {
  if (!pedido.total || pedido.total <= 0) {
    throw new Error('El pedido no tiene un total válido');
  }
  const pago = pasarela.cobrar(pedido.total);
  if (pago.aprobado) {
    correo.enviar(pedido.cliente, 'Pedido confirmado');
    return 'Confirmado';
  }
  return 'Rechazado';
}
