//freight_finder/backend/index.js
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5000;

app.use(express.json());

// PostgreSQL connection setup
const pool = new Pool({
    user: 'freighter',
    host: 'localhost',
    database: 'freight_db',
    password: 'freighter123',
    port: 5432,
});

// Test connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error connecting to PostgreSQL:', err);
    } else {
      console.log('Connected to PostgreSQL:', res.rows);
    }
  });

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});