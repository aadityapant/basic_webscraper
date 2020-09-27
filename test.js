const ogs = require('open-graph-scraper');
const request = require('request-promise');
const axios = require('axios');

const options = {
  url: 'http://kanangill.com/hoe/tours/teetar.html',
};

const testFunction = async (options) => {
  try {
    const results = await ogs(options);
    console.log(results);
  } catch (err) {
    console.log(err);
  }
};

testFunction(options);

const testFunction2 = async (url) => {
  let response;
  try {
    response = await request({
      uri: 'http://kanangill.com/home/tours/teetar.html',
      method: 'GET',
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.5',
      },
      gzip: true,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
    console.log('hello');
  }
};

// testFunction2(options);

// await request({
//     uri: 'http://kanangill.com/home/tours/teetar.html',
//     method: 'GET',
//     headers: {
//       accept:
//         'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
//       'accept-encoding': 'gzip, deflate, br',
//       'accept-language': 'en-US,en;q=0.5',
//     },
//     gzip: true,
//   });
