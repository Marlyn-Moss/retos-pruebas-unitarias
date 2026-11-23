# Pruebas unitarias con Jest · 20 ejercicios

Proyecto de Next.js para el **Módulo 21: Aplicación de Testing y QA** del Instituto RETOS (Ciclo III, semana 4). Tiene 20 ejercicios, cada uno con su código, sus pruebas en Jest y un README con el enunciado y un reto. Van de lo más básico a temas como dobles de prueba, código asíncrono y componentes de React.

## Requisitos

- Node.js 18.18 o más reciente (recomendado: la versión LTS actual)
- VS Code

## Cómo empezar

```bash
npm install          # instala Next.js, React y Jest
npm test             # ejecuta las pruebas de los 20 ejercicios
```

## Comandos útiles

| Comando | Qué hace |
| --- | --- |
| `npm test` | Ejecuta todas las pruebas |
| `npm test -- ejercicio_5` | Ejecuta solo las pruebas del ejercicio 5 |
| `npm run test:watch` | Vuelve a ejecutar las pruebas cada vez que guardas un archivo |
| `npm run test:coverage` | Muestra el porcentaje de cobertura y crea el reporte en `coverage/` |
| `npm run dev` | Abre la página con la lista de ejercicios en http://localhost:3000 |

## Estructura

```
retos-pruebas-unitarias/
├── app/                      Página de Next.js con la lista de ejercicios
├── ejercicios/
│   ├── ejercicio_1/
│   │   ├── sumar.js          El código que se prueba
│   │   ├── sumar.test.js     Las pruebas en Jest
│   │   └── README.md         Enunciado, qué practicas y un reto
│   ├── ejercicio_2/
│   └── … hasta ejercicio_20/
├── jest.config.js            Configuración de Jest para Next.js
└── jest.setup.js             Matchers extra para probar componentes
```

## Los 20 ejercicios

| # | Ejercicio | Concepto de Jest | Relación con la clase |
| --- | --- | --- | --- |
| 1 | Sumar dos números | `describe`, `test`, AAA, `toBe`, `toBeCloseTo` | Estructura AAA |
| 2 | ¿Es par? | `toBeTruthy`, `toBeFalsy` | Primeras afirmaciones |
| 3 | El mayor de tres números | `test.each` | Muchos casos en una prueba |
| 4 | Calcular el IVA | `toThrow` | Errores esperados |
| 5 | Convertir temperaturas | Valores conocidos | Elegir buenos datos de prueba |
| 6 | Invertir un texto | `toThrow(TypeError)` | Casos borde |
| 7 | Contar vocales | Datos que rompen soluciones ingenuas | Casos borde |
| 8 | ¿Es palíndromo? | Pruebas que suman reglas | De lo simple a lo complejo |
| 9 | Clasificar por edad | `test.each`, `RangeError` | Particiones y valores límite (semana 3) |
| 10 | Resultado del estudiante | `npm run test:coverage` | Cobertura de caja blanca (semana 3) |
| 11 | Costo de envío | Pruebas de límite | El defecto BUG-014 (semana 3) |
| 12 | Cupón de descuento | Pruebas en orden TDD | Kata Rojo-Verde-Refactor (semana 4) |
| 13 | FizzBuzz | `toEqual`, `toHaveLength` | Kata clásica de TDD |
| 14 | Validar una contraseña | `toEqual` con objetos, `toContain` | Valores límite 8 y 16 |
| 15 | Carrito de compras | Clases, `beforeEach` | Pruebas independientes (FIRST) |
| 16 | Filtrar y ordenar productos | `.not`, inmutabilidad | Efectos secundarios |
| 17 | Inicio de sesión con bloqueo | Estado de un objeto | Transición de estados (semana 3) |
| 18 | Confirmar un pedido | `jest.fn`, `toHaveBeenCalledWith` | Stubs y mocks (semana 4) |
| 19 | Consultar usuarios | `async`, `resolves`, `rejects`, `mockResolvedValue` | Código asíncrono |
| 20 | Componente Contador | React Testing Library, jsdom | Puente a pruebas de UI (unidad 3) |

## Cómo usar los ejercicios en clase

1. Abre el README del ejercicio y lee el enunciado.
2. Ejecuta sus pruebas con `npm test -- ejercicio_N` y revisa que pasen en verde.
3. Rompe el código a propósito (por ejemplo, cambia `>=` por `>`) y mira qué prueba falla.
4. Resuelve el **reto** del README: escribe primero la prueba y después el código.

> Para practicar TDD desde cero: borra el contenido de una función, deja solo su firma y vuelve a construirla prueba por prueba hasta que todas pasen.
