const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./apps.js');

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('The server is running....');
});
