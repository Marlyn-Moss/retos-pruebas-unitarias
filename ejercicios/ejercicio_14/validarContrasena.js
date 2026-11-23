// Ejercicio 14 · Devolver varios errores a la vez
export function validarContrasena(contrasena) {
  const errores = [];

  if (contrasena.length < 8) {
    errores.push('Debe tener al menos 8 caracteres');
  }
  if (contrasena.length > 16) {
    errores.push('No debe tener más de 16 caracteres');
  }
  if (!/[A-Z]/.test(contrasena)) {
    errores.push('Debe incluir una mayúscula');
  }
  if (!/[0-9]/.test(contrasena)) {
    errores.push('Debe incluir un número');
  }

  return { valida: errores.length === 0, errores };
}
