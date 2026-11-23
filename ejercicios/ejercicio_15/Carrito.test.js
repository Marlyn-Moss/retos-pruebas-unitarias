import { Carrito } from './Carrito';

const mochila = { id: 1, nombre: 'Mochila', precio: 29.99 };
const camiseta = { id: 2, nombre: 'Camiseta', precio: 15.5 };

describe('Carrito', () => {
  let carrito;

  // beforeEach crea un carrito nuevo antes de cada prueba:
  // así las pruebas son independientes (la I de FIRST)
  beforeEach(() => {
    carrito = new Carrito();
  });

  test('empieza vacío', () => {
    expect(carrito.estaVacio()).toBe(true);
    expect(carrito.total()).toBe(0);
  });

  test('agrega un producto', () => {
    carrito.agregar(mochila);
    expect(carrito.cantidadTotal()).toBe(1);
    expect(carrito.total()).toBe(29.99);
  });

  test('suma la cantidad si el producto ya estaba', () => {
    carrito.agregar(mochila, 2);
    carrito.agregar(mochila, 1);
    expect(carrito.items).toHaveLength(1);
    expect(carrito.cantidadTotal()).toBe(3);
  });

  test('calcula el total con varios productos', () => {
    carrito.agregar(mochila, 2);
    carrito.agregar(camiseta, 3);
    // 2 × 29.99 + 3 × 15.50 = 106.48
    expect(carrito.total()).toBe(106.48);
  });

  test('quita un producto', () => {
    carrito.agregar(mochila);
    carrito.agregar(camiseta);
    carrito.quitar(1);
    expect(carrito.items).toHaveLength(1);
    expect(carrito.items[0].producto.nombre).toBe('Camiseta');
  });

  test('no acepta cantidades de cero o menos', () => {
    expect(() => carrito.agregar(mochila, 0)).toThrow('La cantidad debe ser mayor que cero');
  });
});
