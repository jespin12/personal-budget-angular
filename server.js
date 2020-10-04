const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget ={
  myBudget: [
  {
    title: 'Eat out',
    budget: 100
  },
  {
    title: 'Rent',
    budget: 800
  },
  {
    title: 'Grocery',
    budget: 200
  },
  {
    title: 'Credit Card',
    budget: 150
  },
  {
    title: 'Car payment',
    budget: 300
  },
  {
    title: 'Internet',
    budget: 75
  },
  {
    title: 'Electric bill',
    budget: 50
  },
]
};

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/budget', (req, res) => {
  res.json(budget);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});