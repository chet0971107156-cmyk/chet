const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Server starts successfully');
} );
app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});