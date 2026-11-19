const { exec } = require('child_process');
const bodyParser = require('body-parser');
const app = require('express')();

app.use(bodyParser.json());
app.post('/', (req, res) => {
  if (req.headers.authorization === 'madmind' && process.env.MADMIND_API_KEY) {
    exec(`node ./node_modules/geoip-lite/scripts/updatedb.js license_key=${process.env.MADMIND_API_KEY}`, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(`exec error: ${err}`);
      }
    });
    res.json({ data: true });
  } else {
    res.json({ data: false });
  }
});

module.exports = app;
