// Ejercicio 16 · Filtrar y ordenar listas sin modificarlas
export function filtrarPorPrecioMaximo(productos, precioMaximo) {
  return productos.filter((p) => p.precio <= precioMaximo);
}

export function ordenarPorPrecio(productos, orden = 'asc') {
  // [...productos] crea una copia: no modificamos la lista original
  const copia = [...productos];
  return copia.sort((a, b) => (orden === 'asc' ? a.precio - b.precio : b.precio - a.precio));
}

export function nombresDisponibles(productos) {
  return productos.filter((p) => p.stock > 0).map((p) => p.nombre);
}
