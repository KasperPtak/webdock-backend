const https = require('https');
const express = require('express');
const fs = require('fs');
const routes = require('./routes/routes');
const cors = require('cors');
const verifyController = require('./controllers/verifyController.js');
const { cronSchedueler } = require('./tasks/scheduler.js');

const app = express();
app.use(cors());
app.use(express.json());

cronSchedueler();

const mailer = require('express-mailer');
const mailerConfig = require('./config/emailConfig/emailConfig.js');
mailer.extend(app, mailerConfig);

app.use('/api/v1', routes);
app.post('/verify', verifyController.verifyUser);

const privateKey = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/fullchain.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, () => {
  console.log('HTTPS Server running on port 443');
});
