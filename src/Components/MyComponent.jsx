import React from 'react';

const Batatav = () => {
  return <p>batata</p>; // Componente válido retornando JSX
};

export default function MyComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React component.</p>
      <Batatav /> {/* Chamando o componente Batatav */}
    </div>
  );
}