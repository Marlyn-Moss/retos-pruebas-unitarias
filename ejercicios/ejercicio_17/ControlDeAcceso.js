// Ejercicio 17 · Transición de estados (semana 3)
export class ControlDeAcceso {
  #contrasena;

  constructor(contrasena, maxIntentos = 3) {
    this.#contrasena = contrasena;
    this.maxIntentos = maxIntentos;
    this.intentosFallidos = 0;
    this.estado = 'Sin sesión';
  }

  iniciarSesion(contrasena) {
    if (this.estado === 'Bloqueada') {
      return 'Cuenta bloqueada';
    }
    if (contrasena === this.#contrasena) {
      this.intentosFallidos = 0;
      this.estado = 'Con sesión';
      return 'Bienvenido';
    }
    this.intentosFallidos++;
    if (this.intentosFallidos >= this.maxIntentos) {
      this.estado = 'Bloqueada';
      return 'Cuenta bloqueada';
    }
    return 'Contraseña incorrecta';
  }

  cerrarSesion() {
    if (this.estado === 'Con sesión') {
      this.estado = 'Sin sesión';
    }
  }
}
