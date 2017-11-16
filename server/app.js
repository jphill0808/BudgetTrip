const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json('hello world');
});

app.listen(1130, () => {
  console.log('Express is listening on port 1130');
});
