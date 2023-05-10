const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'none'; font-src 'self'", "http://localhost:3000;");
  next();
});

app.use(express.static(path.join(__dirname, 'client/build')));

// Configura la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users'
});

// Conéctate a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  else {
    console.log('Conexión exitosa a la base de datos');
  }
});

app.get('/', (req, res) => {
  res.send('Start');
});

// Middleware para analizar el cuerpo de la solicitud
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Crea un registro en la tabla users
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (error, results) => {
    if (error) throw error;
    res.send(`Usuario añadido con el ID: ${results.insertId} ${name} (${email}`);
    //res.alert(`Usuario añadido con el ID: ${results.insertId} ${name} (${email}`);
  });
});

/*$.ajax({
  url: 'localhost:3000/users',
  type: 'POST',
  data: { name: 'Juan', email: 'juan@example.com' },
  success: function(data) {
    console.log(data);
  },
  error: function(xhr, status, error) {
    console.error(error);
  }
});*/

// Obtiene todos los registros de la tabla users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

// Actualiza un registro en la tabla users
app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;

  db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (error, results) => {
    if (error) throw error;
    res.send(`Usuario actualizado con el ID: ${id}`);
  });
});

// Elimina un registro de la tabla users
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.send(`Usuario eliminado con el ID: ${id}`);
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

//Conexión a xampp
//const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'futman'
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ', err);
    return;
  }
  console.log('Conexión a XAMPP exitosa!');
});

module.exports = connection;

//const express = require('express');
//const router = express.Router();
//const connection = require('./connection'); // la conexión creada anteriormente

//GET TEAMS
app.get('/teams', (req, res) => {
  const sql = 'SELECT * FROM teams';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

module.exports = connection;

//GET CLASSIFICATION
app.get('/classification', (req, res) => {
  const sql = 'SELECT * FROM classification';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

//GET ALL PLAYERS
app.get('/players', (req, res) => {
  const sql = 'SELECT * FROM players';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

//GET PLAYER BY ID
app.get('/players/:id', (req, res) => {
  const id = req.params.id;

  connection.query('SELECT * FROM players WHERE PlayerID = ?', [id], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

//CREATE PLAYER
app.post('/players', (req, res) => {
  const { teamID, goals, assists, minutes, yellowCards, redCards } = req.body;

  connection.query('SELECT * FROM players WHERE TeamID = ?', [teamID], (error, results) => {
    if (error) throw error;

    if (results.length > 0) {
      res.status(400).send('Ya existe un jugador con este TeamID');
    } else {
      connection.query('INSERT INTO players (TeamID, Goals, Assists, Minutes, YellowCards, RedCards) VALUES (?, ?, ?, ?, ?, ?)', [teamID, goals, assists, minutes, yellowCards, redCards], (error, results) => {
        if (error) throw error;
        res.send(`Usuario añadido con el ID: ${results.insertId} ${teamID} ${goals} ${assists} ${minutes} ${yellowCards} ${redCards}`);
      });
    }
  });

  /*connection.query('INSERT INTO players (TeamID, Goals, Assists, Minutes, YellowCards, RedCards) VALUES (?, ?, ?, ?, ?, ?)', [teamID, goals, assists, minutes, yellowCards, redCards], (error, results) => {
    if (error) throw error;
    res.send(`Usuario añadido con el ID: ${results.insertId} ${teamID} ${goals} ${assists} ${minutes} ${yellowCards} ${redCards}`);
    //res.alert(`Usuario añadido con el ID: ${results.insertId} ${name} (${email}`);
  });*/
});

//UPDATE PLAYER
app.put('/players/:id', (req, res) => {
  const id = req.params.id;
  const { teamID, goals, assists, minutes, yellowCards, redCards } = req.body;

  connection.query('UPDATE players SET TeamID = ?, Goals = ?, Assists = ?, Minutes = ?, YellowCards = ?, RedCards = ? WHERE PlayerID = ?', [teamID, goals, assists, minutes, yellowCards, redCards, id], (error, results) => {
    if (error) throw error;
    res.send(`Usuario actualizado con el ID: ${id} ${results.insertId}`);
  });
});

//DELETE PLAYER
app.delete('/players/:id', (req, res) => {
  const id = req.params.id;

  connection.query('DELETE FROM players WHERE PlayerID = ?', [id], (error, results) => {
    if (error) throw error;
    res.send(`Usuario eliminado con el ID: ${id}`);
  });
});

const bcrypt = require('bcryptjs');

//REGISTER USERS
app.get('/futmanUsers', (req, res) => {
  const sql = 'SELECT * FROM users';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.post('/futmanUsers', (req, res) => {
  const { name, surname, email, password } = req.body;

  // Generate a salt to hash the password with
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);

  // Hash the password with the generated salt
  const hashedPassword = bcrypt.hashSync(password, salt);

  const insertQuery = `INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)`;
  connection.query(insertQuery, [name, surname, email, hashedPassword], (error, results) => {
    if (error) {
      console.error('Error inserting data into database: ', error);
      res.status(500).json({ message: 'Error inserting data.' });
      //res.status(500).send('Internal server error.');
    } else {
      console.log('Data inserted into database.');
      res.status(200).json({ message: 'Data registered correctly.' });
      //res.status(200).send('Data inserted successfully.');
    }
  });
});

app.post('/futmanUsers/login', (req, res) => {
  const { email, password } = req.body;

  console.log(password);
  const selectQuery = `SELECT * FROM users WHERE email = ?`;
  connection.query(selectQuery, [email], (error, results) => {
    if (error) {
      console.error('Error selecting data from database: ', error);
      //res.status(500).send('+SELECT+ Internal server error.');
      res.status(500).json({ message: '+SELECT+ Internal server error.' });
    } else if (results.length === 0) {
      console.log('User not found in database.');
      //res.status(401).send('Invalid email or password.');
      res.status(401).json({ message: 'Invalid email or password.' });
    } else {
      const user = results[0];
      console.log(results);
      const isPasswordMatch = bcrypt.compareSync(password, user.Password);

      if (isPasswordMatch) {
        //alert('Logged in');
        console.log('User logged in successfully.');
        //res.status(200).send('Logged in successfully.');
        res.status(200).json({ message: 'Logged in successfully.', loggedIn : true });
      } else {
        console.log('Invalid password.');
        //res.status(401).send('Email or password incorrect.');
        res.status(401).json({ message: 'Email or password incorrect.', loggedIn : false });
      }
    }
  });
});

app.put('/futmanUsers/forgotPassword', (req, res) => {
  const { email, password } = req.body;

  console.log(password);
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);

  // Hash the password with the generated salt
  const hashedPassword = bcrypt.hashSync(password, salt);
  console.log(hashedPassword);
  connection.query('UPDATE users SET password = ? WHERE email = ?', [hashedPassword, email], (error, results) => {
    if (error) {
      console.error('Error updating user password: ', error);
      res.status(500).json({ message: 'Failed to update user password.' });
    }
    else {
      console.log('User password updated.');
      res.status(200).json({ message: 'User password updated.' });
    }
  });

});


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


