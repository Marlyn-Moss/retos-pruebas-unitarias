# Ejercicio 20 · Componente Contador en React

**Enunciado.** El componente `Contador` muestra "Valor: N" y tiene los botones Restar, Sumar y Reiniciar. No baja de 0 ni pasa del máximo (10 por defecto), y Reiniciar vuelve al valor inicial. Puedes verlo funcionando en la página principal con `npm run dev`.

**Qué practicas:** pruebas de interfaz con React Testing Library: `render`, `screen.getByRole`, `fireEvent.click` y los matchers `toBeInTheDocument` y `toBeDisabled`. Es el puente entre las pruebas unitarias y la automatización de UI de la unidad 3.

**Ejecuta:** `npm test -- ejercicio_20`

**Reto:** agrega un botón "Sumar 5" que no pase del máximo, y su prueba.
