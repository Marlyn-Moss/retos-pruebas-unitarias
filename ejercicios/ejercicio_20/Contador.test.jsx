/**
 * @jest-environment jsdom
 */
// La línea de arriba hace que esta prueba corra en un navegador simulado (jsdom).
import { render, screen, fireEvent } from '@testing-library/react';
import Contador from './Contador';

describe('Contador', () => {
  test('muestra el valor inicial', () => {
    render(<Contador />);
    expect(screen.getByText('Valor: 0')).toBeInTheDocument();
  });

  test('suma 1 al hacer clic en Sumar', () => {
    render(<Contador />);
    fireEvent.click(screen.getByRole('button', { name: 'Sumar' }));
    expect(screen.getByText('Valor: 1')).toBeInTheDocument();
  });

  test('no permite bajar de 0', () => {
    render(<Contador />);
    expect(screen.getByRole('button', { name: 'Restar' })).toBeDisabled();
  });

  test('no permite pasar del máximo', () => {
    render(<Contador inicial={3} maximo={3} />);
    expect(screen.getByRole('button', { name: 'Sumar' })).toBeDisabled();
  });

  test('Reiniciar vuelve al valor inicial', () => {
    render(<Contador inicial={2} />);
    fireEvent.click(screen.getByRole('button', { name: 'Sumar' }));
    fireEvent.click(screen.getByRole('button', { name: 'Sumar' }));
    fireEvent.click(screen.getByRole('button', { name: 'Reiniciar' }));
    expect(screen.getByText('Valor: 2')).toBeInTheDocument();
  });
});
