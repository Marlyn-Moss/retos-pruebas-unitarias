import { validarContrasena } from './validarContrasena';

describe('validarContrasena', () => {
  test('una contraseña correcta no tiene errores', () => {
    expect(validarContrasena('Retos2026')).toEqual({ valida: true, errores: [] });
  });

  test('límite inferior: 8 caracteres es válido', () => {
    expect(validarContrasena('Abcdefg1').valida).toBe(true);
  });

  test('límite superior: 16 caracteres es válido', () => {
    expect(validarContrasena('Abcdefghijklmno1').valida).toBe(true);
  });

  test('17 caracteres es demasiado largo', () => {
    const resultado = validarContrasena('Abcdefghijklmnop1');
    expect(resultado.valida).toBe(false);
    expect(resultado.errores).toContain('No debe tener más de 16 caracteres');
  });

  test('sin mayúscula no es válida', () => {
    expect(validarContrasena('abcdefg1').errores).toContain('Debe incluir una mayúscula');
  });

  test('una contraseña corta acumula varios errores', () => {
    const { errores } = validarContrasena('abc');
    expect(errores).toHaveLength(3);
    expect(errores).toContain('Debe tener al menos 8 caracteres');
    expect(errores).toContain('Debe incluir un número');
  });
});
