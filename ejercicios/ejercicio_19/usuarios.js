// Ejercicio 19 · Probar código asíncrono (async/await)
// "api" es un servicio que consulta un servidor; en las pruebas lo reemplazamos.
export async function obtenerNombreCompleto(id, api) {
  const usuario = await api.obtenerUsuario(id);
  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }
  return `${usuario.nombre} ${usuario.apellido}`;
}

export async function obtenerNombres(ids, api) {
  return Promise.all(ids.map((id) => obtenerNombreCompleto(id, api)));
}
