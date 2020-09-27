const cheerio = require('cheerio');
const request = require('request-promise');

const webScrapper = async (url) => {
  try {
    // request to the service/website
    const response = await request({
      uri: url,
      method: 'GET',
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.5',
      },
      gzip: true,
    });
    const $ = cheerio.load(response);
    // Finding the title and the first occurence of every tag to get their value
    const title = $('title').first().text().trim();
    const subheader = $('h1').first().text().trim();
    const date = $('time').text().trim();
    const description = $('p').first().text().trim();
    const img = $('img').attr('src');

    return {
      title,
      subheader,
      date,
      description,
      img,
    };
  } catch (err) {
    return {
      error: '404 NOT FOUND',
    };
  }
};

module.exports = webScrapper;
