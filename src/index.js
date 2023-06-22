import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'containers-us-west-185.railway.app',
  port: '5997',
  user: 'root',
  password: 'ktwq47YGizZKhTtVDkvb',
  database: 'railway',
});

// Establecer conexión
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos.');

    // Realizar consulta
    connection.query('SELECT * FROM tabla', (error, results) => {
      if (error) {
        console.error('Error al ejecutar la consulta:', error);
      } else {
        console.log('Resultados:', results);
      }

      // Cerrar conexión después de la consulta
      connection.end();
    });
  }
});
