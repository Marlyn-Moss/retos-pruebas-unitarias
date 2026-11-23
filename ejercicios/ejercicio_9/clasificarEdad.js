// Ejercicio 9 · Particiones de equivalencia y valores límite (semana 3)
export function clasificarEdad(edad) {
  if (!Number.isInteger(edad)) {
    throw new Error('La edad debe ser un número entero');
  }
  if (edad < 0 || edad > 120) {
    throw new RangeError('Edad fuera de rango');
  }
  if (edad < 18) return 'Menor de edad';
  if (edad < 65) return 'Adulto';
  return 'Adulto mayor';
}
