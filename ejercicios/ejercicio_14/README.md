# Ejercicio 14 · Validar una contraseña

**Enunciado.** `validarContrasena(contrasena)` devuelve `{ valida, errores }`. Reglas: de 8 a 16 caracteres, al menos una mayúscula y al menos un número. La lista `errores` trae un mensaje por cada regla que no se cumple.

**Qué practicas:** comparar objetos con `toEqual`, buscar en listas con `toContain` y `toHaveLength`, y los valores límite 8 y 16.

**Ejecuta:** `npm test -- ejercicio_14`

**Reto:** agrega la regla "Debe incluir un símbolo" (por ejemplo ! @ # $) con sus pruebas.
