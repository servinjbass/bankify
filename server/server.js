const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const api = require('./routes/api.js');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/api', api)

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});