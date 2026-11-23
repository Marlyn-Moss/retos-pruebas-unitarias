# Ejercicio 11 · Costo de envío

**Enunciado.** El envío cuesta $5, pero es gratis en compras desde $50 o si el cliente es premium. Un total negativo lanza un error.

**Qué practicas:** pruebas de valor límite que atrapan el defecto de "mayor que" contra "mayor o igual que".

**Ejecuta:** `npm test -- ejercicio_11`

**Reto:** cambia `>=` por `>` en el código y observa qué prueba falla. Esa es la prueba que habría evitado el BUG-014.
