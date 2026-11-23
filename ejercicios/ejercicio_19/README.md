# Ejercicio 19 · Consultar usuarios de forma asíncrona

**Enunciado.** `obtenerNombreCompleto(id, api)` pide un usuario a un servicio y devuelve "Nombre Apellido". Si el usuario no existe, rechaza con "Usuario no encontrado". `obtenerNombres(ids, api)` consulta varios a la vez.

**Qué practicas:** pruebas `async`, `await`, `.resolves` y `.rejects`, y simular un servidor con `mockResolvedValue`, `mockResolvedValueOnce` y `mockRejectedValue`.

**Ejecuta:** `npm test -- ejercicio_19`

**Reto:** quita el `await` de la tercera prueba. ¿Sigue pasando aunque cambies el mensaje esperado? Así se ve una prueba asíncrona mal escrita que nunca falla.
