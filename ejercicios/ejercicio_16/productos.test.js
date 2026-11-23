import { filtrarPorPrecioMaximo, ordenarPorPrecio, nombresDisponibles } from './productos';

const catalogo = [
  { nombre: 'Laptop', precio: 650, stock: 3 },
  { nombre: 'Mouse', precio: 12, stock: 0 },
  { nombre: 'Teclado', precio: 25, stock: 10 },
  { nombre: 'Monitor', precio: 180, stock: 2 },
];

describe('filtrarPorPrecioMaximo', () => {
  test('devuelve los productos hasta el precio indicado', () => {
    const baratos = filtrarPorPrecioMaximo(catalogo, 25);
    expect(baratos.map((p) => p.nombre)).toEqual(['Mouse', 'Teclado']);
  });

  test('si ninguno cumple, devuelve una lista vacía', () => {
    expect(filtrarPorPrecioMaximo(catalogo, 5)).toEqual([]);
  });
});

describe('ordenarPorPrecio', () => {
  test('ordena de menor a mayor', () => {
    const nombres = ordenarPorPrecio(catalogo).map((p) => p.nombre);
    expect(nombres).toEqual(['Mouse', 'Teclado', 'Monitor', 'Laptop']);
  });

  test('ordena de mayor a menor', () => {
    expect(ordenarPorPrecio(catalogo, 'desc')[0].nombre).toBe('Laptop');
  });

  test('no modifica la lista original', () => {
    ordenarPorPrecio(catalogo);
    expect(catalogo[0].nombre).toBe('Laptop');
  });
});

describe('nombresDisponibles', () => {
  test('solo incluye productos con stock', () => {
    expect(nombresDisponibles(catalogo)).not.toContain('Mouse');
    expect(nombresDisponibles(catalogo)).toHaveLength(3);
  });
});
