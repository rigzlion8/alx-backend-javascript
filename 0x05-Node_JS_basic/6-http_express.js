import express from 'express';

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

module.exports = app;
