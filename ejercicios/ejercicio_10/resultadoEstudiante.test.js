import { resultadoEstudiante } from './resultadoEstudiante';

describe('resultadoEstudiante', () => {
  test('T1 · nota y asistencia suficientes: Aprobado', () => {
    expect(resultadoEstudiante(8, 90)).toBe('Aprobado');
  });

  test('T2 · nota entre 5 y 6: Recuperación', () => {
    expect(resultadoEstudiante(5.5, 90)).toBe('Recuperación');
  });

  test('T3 · nota menor de 5: Reprobado', () => {
    expect(resultadoEstudiante(3, 90)).toBe('Reprobado');
  });

  test('T4 · buena nota pero poca asistencia: Recuperación', () => {
    expect(resultadoEstudiante(8, 50)).toBe('Recuperación');
  });
});
