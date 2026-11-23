// Ejercicio 12 · Kata TDD de la semana 4
const DESCUENTOS = {
  RETOS10: 0.1,
  RETOS20: 0.2,
};

export function aplicarDescuento(total, cupon = '') {
  const tasa = DESCUENTOS[cupon.toUpperCase()] ?? 0;
  return Math.round(total * (1 - tasa) * 100) / 100;
}
