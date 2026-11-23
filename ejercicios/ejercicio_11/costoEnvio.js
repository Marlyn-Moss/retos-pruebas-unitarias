// Ejercicio 11 · El defecto del borde (BUG-014 de la semana 3)
export const MINIMO_ENVIO_GRATIS = 50;
export const COSTO_ENVIO = 5;

export function costoEnvio(total, esPremium = false) {
  if (total < 0) {
    throw new Error('El total no puede ser negativo');
  }
  if (total >= MINIMO_ENVIO_GRATIS || esPremium) {
    return 0;
  }
  return COSTO_ENVIO;
}
