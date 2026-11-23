# Ejercicio 9 · Clasificar por edad

**Enunciado.** Escribe `clasificarEdad(edad)`: de 0 a 17 es "Menor de edad", de 18 a 64 "Adulto" y de 65 a 120 "Adulto mayor". Fuera de 0 a 120 lanza `RangeError`; si no es un número entero, lanza un error.

**Qué practicas:** las técnicas de caja negra de la semana 3 convertidas en código: un caso por partición y los valores límite 17/18 y 64/65.

**Ejecuta:** `npm test -- ejercicio_9`

**Reto:** cambia `edad < 18` por `edad <= 18` en el código. ¿Qué prueba falla? Así se ve un defecto de valor límite.
