const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();
app.use(cors())
const port = 8080; // Your desired port number

app.use('/api/v1', routes);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
