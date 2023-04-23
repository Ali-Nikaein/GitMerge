const express = require('express');
const app = express();

const object = {
  name: 'Git-1',
  property: 'Merge-1',
};

app.get('/', (req, res) => {
  res.send('Hello Git Merge\n');
});

app.get('/api/references', (req, res) => {
  res.send({ name: 'Git', property: 'Merge' });
});

app.get('/api/references/object', (req, res) => {
  res.send(object);
});
