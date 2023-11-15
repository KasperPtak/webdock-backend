const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors({
    origin: "*"
}));

// Middleware to parse JSON request body
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/verify', async (req, res) => {
    const { ssoToken } = req.body;

    const user = jwt.verify(ssoToken, 'e389bb7b-dc58-4b0b-8f54-dac159d5a609')

    console.log(user);
    res.json(user)
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});