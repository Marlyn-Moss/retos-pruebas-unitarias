# Ejercicio 17 · Inicio de sesión con bloqueo

**Enunciado.** La clase `ControlDeAcceso` bloquea la cuenta tras 3 contraseñas incorrectas seguidas. Un acceso correcto reinicia el contador. Una cuenta bloqueada no entra ni con la contraseña correcta.

**Qué practicas:** convertir la tabla de estados de la semana 3 en pruebas automáticas. Los casos CP-01 a CP-05 son los mismos del documento de ejemplos.

**Ejecuta:** `npm test -- ejercicio_17`

**Reto:** agrega un método `desbloquear()` para el administrador, con una prueba que muestre que la cuenta vuelve a "Sin sesión" y el contador a 0.
