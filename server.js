const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();
app.use(cors())
const port = 8080; // Your desired port number

app.use('/api/v1', routes);

// app.get('/api/v1/users', (req, res) => {
//   res.send('ladida');
// });

// app.use('/api/users', userRoutes); // Mount the user-related routes

// app.get('/', (req, res) => {
//   res.send(
//     {
//       name: "David",
//       age: 12,
//     }
//     )
//   })

//

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });