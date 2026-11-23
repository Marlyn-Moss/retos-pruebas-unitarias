// Ejercicio 10 · Cobertura de código (caja blanca, semana 3)
export function resultadoEstudiante(nota, asistencia) {
  let estado = 'Reprobado';
  if (nota >= 6 && asistencia >= 80) {
    estado = 'Aprobado';
  } else if (nota >= 5) {
    estado = 'Recuperación';
  }
  return estado;
}
