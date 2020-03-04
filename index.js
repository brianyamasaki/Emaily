const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT);

app.get('/', (req, res) => {
  console.log(req);
  res.send({ hi: 'there', bye: 'buddy' });
});
