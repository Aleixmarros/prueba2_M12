const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;

const test = mysql.createConnection({
    host: '172.16.22.8',
    user: 'joandiaper',
    password: 'Monlau2023',
    database: 'Futman'
  });
  
  test.connect((err) => {
    if (err){
      console.error('Error al conectar a la base de datos: ', err);
      return;
    } 
    console.log('Connected to MySQL database UBUNTU!');
  });

  test.query('SELECT * FROM Players', (err, rows) => {
    if (err){
        console.error('Error al ejecutar la consulta: ', err);
        return;
    }

    console.log('Resultados de la consulta: ', rows);
  });