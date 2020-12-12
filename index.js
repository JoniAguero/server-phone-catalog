const express = require('express');
const app = express();

const PORT = process.env.PORT || 3100;

app.use('/', (req, res) => {
  res.send(`<h1>Hello Elastic Beanstalk</h1>`);
});

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));