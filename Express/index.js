const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3005;

const connection = mysql.createConnection({
    host: '172.16.22.8',
    user: 'joandiaper',
    password: 'Monlau2023',
    database: 'Futman'
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ', err);
        return;
    }
    console.log('Connected to MySQL database UBUNTU!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});

app.get('/', (req, res) => {
    res.send('Start');
});

app.get('/users', (req, res) => {
    const selectQuery = 'SELECT * FROM Users';
    connection.query(selectQuery, (err, rows) => {
        if (err) {
            console.error('Error executing query: ', err);
            res.status(500).json({ message: 'Error retrieving data.' });
        } else {
            console.log('Query results: ', rows);
            res.status(200).json(rows);
        }
    });
});

const bcrypt = require('bcryptjs');
app.post('/futmanUsers', (req, res) => {
    const { name, surname, email, password } = req.body;

    // Generate a salt to hash the password with
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);

    // Hash the password with the generated salt
    const hashedPassword = bcrypt.hashSync(password, salt);

    const insertQuery = `INSERT INTO Users (name, surname, email, password) VALUES (?, ?, ?, ?)`;
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
    console.log(req.body);
    const { email, password } = req.body;

    console.log(password);
    const selectQuery = `SELECT * FROM Users WHERE email = ?`;
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
                res.status(200).json({ message: 'Logged in successfully.', loggedIn: true });
            } else {
                console.log('Invalid password.');
                //res.status(401).send('Email or password incorrect.');
                res.status(401).json({ message: 'Email or password incorrect.', loggedIn: false });
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
    connection.query('UPDATE Users SET password = ? WHERE email = ?', [hashedPassword, email], (error, results) => {
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