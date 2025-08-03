
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Page Pair active');
});

module.exports = router;
