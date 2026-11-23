import './globals.css';

export const metadata = {
  title: 'Pruebas unitarias con Jest · Instituto RETOS',
  description: '20 ejercicios de pruebas unitarias para el Módulo 21: Aplicación de Testing y QA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
