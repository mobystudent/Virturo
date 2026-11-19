const fs = require('fs');
const geoip = require('geoip-lite');
const axios = require('axios');

const getCountryList = async function () {
  const filePath = `${process.cwd()}/storage/block.json`;
  if (
    !fs.existsSync(filePath) ||
    Date.parse(fs.statSync(filePath).mtime) + 60000 * 1 < Date.now() // +1 minutes
  ) {
    const data = {
      blockCountries: [],
      whiteList: [],
    };
    try {
      const url = process.env.NUXT_ENV_SITE_URL ? process.env.NUXT_ENV_SITE_URL.replace(new RegExp('"', 'g'), '') : 'app.example.com';
      const response = await axios.get(`${url}/api/countries/block`);
      data.blockCountries = response.data.countryBlocks || [];
      data.whiteList = response.data.whiteList || [];
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    fs.writeFile(filePath, JSON.stringify(data), err => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log('File is created successfully.');
    });

    return data;
  }
  const rawdata = fs.readFileSync(filePath);
  const blocks = JSON.parse(rawdata);
  return blocks;
};

module.exports = async function (req, res, next) {
  // req is the Node.js http request object
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
  const { blockCountries, whiteList } = await getCountryList();
  if (ip) ip = ip.split(',')[0];
  // eslint-disable-next-line no-console
  console.log(ip);
  const whiteListed = [...whiteList, '172.24.0.1', '127.0.0.1', '::1', 'localhost'];
  if (req.url !== '/restricted' && req.url !== '/app' && !whiteListed.includes(ip) && !/(\.css|\.js|\/sse|\.txt)$/.test(req.url)) {
    const geo = geoip.lookup(ip);
    if (!geo || blockCountries.includes(geo.country)) {
      // eslint-disable-next-line no-console
      console.log(geo?.country);
      res.writeHead(301, { Location: '/restricted' });
      return res.end();
    }
  }
  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  next();
};
