// src/SopaDeLetras.js
import React, { useState, useEffect } from 'react';

// Función para generar la sopa de letras
const generarSopaDeLetras = (filas, columnas, palabras) => {
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const sopa = Array.from({ length: filas }, () => Array(columnas).fill(''));

  const colocarPalabra = (palabra) => {
    let direccion = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    let fila, columna;
    let colocada = false;

    while (!colocada) {
      fila = Math.floor(Math.random() * filas);
      columna = Math.floor(Math.random() * columnas);

      if (direccion === 'horizontal' && columna + palabra.length <= columnas) {
        colocada = palabra.split('').every((letra, i) => sopa[fila][columna + i] === '' || sopa[fila][columna + i] === letra);
        if (colocada) {
          palabra.split('').forEach((letra, i) => sopa[fila][columna + i] = letra);
        }
      } else if (direccion === 'vertical' && fila + palabra.length <= filas) {
        colocada = palabra.split('').every((letra, i) => sopa[fila + i][columna] === '' || sopa[fila + i][columna] === letra);
        if (colocada) {
          palabra.split('').forEach((letra, i) => sopa[fila + i][columna] = letra);
        }
      }
    }
  };

  palabras.forEach(colocarPalabra);

  // Rellenar el resto de la sopa de letras con letras aleatorias
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (sopa[i][j] === '') {
        sopa[i][j] = alfabeto[Math.floor(Math.random() * alfabeto.length)];
      }
    }
  }

  return sopa;
};

const SopaDeLetras = () => {
  const [sopa, setSopa] = useState([]);
  const [palabras] = useState(['REACT', 'JAVASCRIPT', 'CODIGO', 'DESARROLLO']);

  useEffect(() => {
    setSopa(generarSopaDeLetras(10, 10, palabras));
  }, [palabras]);

  return (
    <div>
      <h1>Sopa de Letras</h1>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(10, 30px)`, gap: '2px' }}>
        {sopa.map((fila, i) =>
          fila.map((letra, j) => (
            <div
              key={`${i}-${j}`}
              style={{
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid black',
                fontSize: '20px',
              }}
            >
              {letra}
            </div>
          ))
        )}
      </div>
      <div>
        <h2>Palabras para buscar:</h2>
        <ul>
          {palabras.map((palabra, index) => (
            <li key={index}>{palabra}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SopaDeLetras;
