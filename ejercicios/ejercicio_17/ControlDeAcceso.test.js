import { ControlDeAcceso } from './ControlDeAcceso';

describe('ControlDeAcceso', () => {
  let acceso;

  beforeEach(() => {
    acceso = new ControlDeAcceso('Retos2026');
  });

  test('CP-01 · contraseña correcta: inicia sesión', () => {
    expect(acceso.iniciarSesion('Retos2026')).toBe('Bienvenido');
    expect(acceso.estado).toBe('Con sesión');
  });

  test('CP-02 · contraseña incorrecta: suma un intento fallido', () => {
    expect(acceso.iniciarSesion('clave')).toBe('Contraseña incorrecta');
    expect(acceso.intentosFallidos).toBe(1);
  });

  test('CP-03 · un acceso correcto reinicia el contador', () => {
    acceso.iniciarSesion('mal');
    acceso.iniciarSesion('mal');
    acceso.iniciarSesion('Retos2026');
    expect(acceso.intentosFallidos).toBe(0);
  });

  test('CP-04 · tres fallos seguidos bloquean la cuenta', () => {
    acceso.iniciarSesion('mal');
    acceso.iniciarSesion('mal');
    expect(acceso.iniciarSesion('mal')).toBe('Cuenta bloqueada');
    expect(acceso.estado).toBe('Bloqueada');
  });

  test('CP-05 · transición inválida: bloqueada no entra ni con la contraseña correcta', () => {
    acceso.iniciarSesion('mal');
    acceso.iniciarSesion('mal');
    acceso.iniciarSesion('mal');
    expect(acceso.iniciarSesion('Retos2026')).toBe('Cuenta bloqueada');
    expect(acceso.estado).toBe('Bloqueada');
  });

  test('cerrar sesión vuelve al estado inicial', () => {
    acceso.iniciarSesion('Retos2026');
    acceso.cerrarSesion();
    expect(acceso.estado).toBe('Sin sesión');
  });
});
