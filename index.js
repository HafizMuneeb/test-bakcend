import express  from 'express';
const app = express();
const port = 5000;

app.get('/api/locations', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});