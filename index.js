
const express = require('express');
const app = express();

app.get('/pair', (req, res) => {
  res.send('Page Pair active');
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Serveur exécuté');
});
