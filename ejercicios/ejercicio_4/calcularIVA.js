// Ejercicio 4 · Cálculos con dinero
export const TASA_IVA = 0.13;

function redondear(valor) {
  return Math.round(valor * 100) / 100;
}

export function calcularIVA(precio) {
  if (precio < 0) {
    throw new Error('El precio no puede ser negativo');
  }
  return redondear(precio * TASA_IVA);
}

export function precioConIVA(precio) {
  return redondear(precio + calcularIVA(precio));
}
