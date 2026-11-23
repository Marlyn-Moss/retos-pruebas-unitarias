// Ejercicio 15 · Probar una clase con estado
export class Carrito {
  constructor() {
    this.items = [];
  }

  agregar(producto, cantidad = 1) {
    if (cantidad <= 0) {
      throw new Error('La cantidad debe ser mayor que cero');
    }
    const existente = this.items.find((item) => item.producto.id === producto.id);
    if (existente) {
      existente.cantidad += cantidad;
    } else {
      this.items.push({ producto, cantidad });
    }
  }

  quitar(idProducto) {
    this.items = this.items.filter((item) => item.producto.id !== idProducto);
  }

  cantidadTotal() {
    return this.items.reduce((suma, item) => suma + item.cantidad, 0);
  }

  total() {
    const total = this.items.reduce(
      (suma, item) => suma + item.producto.precio * item.cantidad,
      0
    );
    return Math.round(total * 100) / 100;
  }

  estaVacio() {
    return this.items.length === 0;
  }
}
