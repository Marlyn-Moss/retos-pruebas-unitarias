const { costoEnvio } = require('./envio');

test('cobra $5 si el total es menor de $50', () => {

    // ARRANGE: Preparar los datos
    const total = 20;
    const envioGratis = false;

    // ACT: Ejecutar la función
    const envio = costoEnvio(total, envioGratis);

    // ASSERT: Comprobar el resultado
    expect(envio).toBe(5);
});