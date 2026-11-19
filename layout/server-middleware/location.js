const geoip = require('geoip-lite');
const axios = require('axios');
const fs = require('fs');

// eslint-disable-next-line func-names
const getCountryList = async function () {
  const filePath = `${process.cwd()}/storage/block.json`;
  if (
    !fs.existsSync(filePath)
    || Date.parse(fs.statSync(filePath).mtime) + 60000 * 1 < Date.now() // +1 minutes
  ) {
    const data = {
      blockCountries: [],
      whiteList: [],
    };
    try {
      const response = await axios.get(`${process.env.NUXT_ENV_API_URL}/api/countries/block`);
      data.blockCountries = response.data.countryBlocks || [];
      data.whiteList = response.data.whiteList || [];
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      fs.writeFile(`${process.cwd()}/storage/error.json`, JSON.stringify(data), (err) => {
        // eslint-disable-next-line no-console
        if (err) console.log(err);
      });
    }
    fs.writeFile(filePath, JSON.stringify(data), (err) => {
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

const stripTrailingSlash = (str) => (str.endsWith('/')
  ? str.slice(0, -1)
  : str);

// eslint-disable-next-line func-names, consistent-return
module.exports = async function (req, res, next) {
  // redirect with slash in end
  if (!['/', '/app'].includes(req.url) && !req.url.endsWith('/') && !/(\.css|\.js|\/sse|\.txt)$/.test(req.url)) {
    res.writeHead(301, { Location: `${req.url}/` });
    // eslint-disable-next-line consistent-return
    return res.end();
  }
  const url = stripTrailingSlash(req.url);
  if (url === '/login' || url === '/sign-up') {
    const u = `${process.env.NUXT_ENV_TRADE_URL || 'www.app.example.com'}`;
    res.writeHead(302, { Location: `${u}${req.url}` });
    // eslint-disable-next-line consistent-return
    return res.end();
  }
  // req is the Node.js http request object
  let ip = req.headers['x-forwarded-for']
    || req.socket.remoteAddress
    || null;
  const { blockCountries, whiteList } = await getCountryList();
  if (ip) [ip] = ip.split(',');
  // eslint-disable-next-line no-console
  console.log(ip);
  const whiteListed = [...whiteList, '172.24.0.1', '127.0.0.1', 'localhost'];
  if (
    url !== '/restricted'
    && url !== '/app'
    && !whiteListed.includes(ip)
    && !/(\.css|\.js|\/sse|\.txt)$/.test(req.url)
  ) {
    const geo = geoip.lookup(ip);
    if (!geo || blockCountries.includes(geo.country)) {
      res.writeHead(301, { Location: '/restricted/' });
      // eslint-disable-next-line consistent-return
      return res.end();
    }
  }
  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  next();
};
