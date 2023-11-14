const express = require('express');
const cors = require('cors'); // Import the cors module
const path = require('path');
const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes

app.use(express.static(path.join(__dirname, 'src')));

app.get('/teams', (req, res) => {
  res.sendFile(path.join(__dirname, '../nhl/src/data/teams.json'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
