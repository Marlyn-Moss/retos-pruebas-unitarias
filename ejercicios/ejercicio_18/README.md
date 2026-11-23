# Ejercicio 18 · Confirmar un pedido con dobles de prueba

**Enunciado.** `confirmarPedido(pedido, pasarela, correo)` cobra el total con la pasarela; si el pago se aprueba, envía un correo y devuelve "Confirmado"; si no, devuelve "Rechazado". Un pedido sin total válido lanza un error antes de cobrar.

**Qué practicas:** `jest.fn()` como stub (respuesta fija) y como mock (verificar llamadas con `toHaveBeenCalledWith`, `toHaveBeenCalledTimes` y `.not.toHaveBeenCalled()`).

**Ejecuta:** `npm test -- ejercicio_18`

**Reto:** agrega un parámetro `inventario` con un método `descontar(pedido)` y verifica con un mock que solo se llama cuando el pago se aprueba.
