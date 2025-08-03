
const express = require('express');
const app = express();

app.get('/pair', (req, res) => {
  res.send('Page Pair active');
});

app.listen(8000, 'localhost', () => {
  console.log('Server running on http://localhost:8000');
});
