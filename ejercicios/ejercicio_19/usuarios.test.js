import { obtenerNombreCompleto, obtenerNombres } from './usuarios';

describe('obtenerNombreCompleto', () => {
  test('devuelve el nombre completo (con await)', async () => {
    const api = {
      obtenerUsuario: jest.fn().mockResolvedValue({ nombre: 'Ana', apellido: 'López' }),
    };
    const nombre = await obtenerNombreCompleto(7, api);
    expect(nombre).toBe('Ana López');
    expect(api.obtenerUsuario).toHaveBeenCalledWith(7);
  });

  test('devuelve el nombre completo (con resolves)', async () => {
    const api = {
      obtenerUsuario: jest.fn().mockResolvedValue({ nombre: 'Luis', apellido: 'Pérez' }),
    };
    await expect(obtenerNombreCompleto(3, api)).resolves.toBe('Luis Pérez');
  });

  test('si el usuario no existe, rechaza con un error', async () => {
    const api = { obtenerUsuario: jest.fn().mockResolvedValue(null) };
    await expect(obtenerNombreCompleto(99, api)).rejects.toThrow('Usuario no encontrado');
  });

  test('si el servidor falla, el error llega al que llama', async () => {
    const api = { obtenerUsuario: jest.fn().mockRejectedValue(new Error('Sin conexión')) };
    await expect(obtenerNombreCompleto(1, api)).rejects.toThrow('Sin conexión');
  });
});

describe('obtenerNombres', () => {
  test('consulta varios usuarios a la vez', async () => {
    const api = {
      obtenerUsuario: jest
        .fn()
        .mockResolvedValueOnce({ nombre: 'Ana', apellido: 'López' })
        .mockResolvedValueOnce({ nombre: 'Luis', apellido: 'Pérez' }),
    };
    await expect(obtenerNombres([1, 2], api)).resolves.toEqual(['Ana López', 'Luis Pérez']);
    expect(api.obtenerUsuario).toHaveBeenCalledTimes(2);
  });
});
