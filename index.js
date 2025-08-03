
const express = require('express');
const app = express();

const pairRoute = require('./pair');
app.use('/pair', pairRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log('Serveur exécuté');
});

