# Ejercicio 4 · Calcular el IVA

**Enunciado.** Escribe `calcularIVA(precio)` con una tasa de 13 %, redondeando a dos decimales, y `precioConIVA(precio)`. Un precio negativo debe lanzar un error.

**Qué practicas:** cálculos con decimales y `toThrow` para comprobar errores. Ojo: para esperar un error, la llamada va dentro de una función flecha: `expect(() => calcularIVA(-5))`.

**Ejecuta:** `npm test -- ejercicio_4`

**Reto:** agrega `calcularIVA(precio, tasa)` con una tasa opcional y pruébala con 0.10.
