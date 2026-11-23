// Configuración de Jest para Next.js.
// next/jest se encarga de transformar el código (JSX, import/export) con SWC.
const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const config = {
  // La mayoría de ejercicios son funciones: corren en Node.
  // El ejercicio 20 (componente React) cambia a jsdom con un comentario al inicio de su prueba.
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [
    '<rootDir>/ejercicios/**/*.test.{js,jsx}',
    '<rootDir>/app/clases/**/*.test.{js,jsx}',
  ],
  collectCoverageFrom: [
    'ejercicios/**/*.{js,jsx}',
    '!ejercicios/**/*.test.{js,jsx}',
    '!ejercicios/lista.js',
    'app/clases/**/*.{js,jsx}',
    '!app/clases/**/*.test.{js,jsx}',
  ],
};

module.exports = createJestConfig(config);
