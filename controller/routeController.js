const ogs = require('open-graph-scraper');
const webScraper = require('../utils/webScraper');

module.exports = async (req, res, next) => {
  const fullUrl = req.body.url;

  //Checking if url is defined
  if (fullUrl) {
    const options = { url: fullUrl };
    let results;
    try {
      //Using ogs to check and find og parameter
      results = await ogs(options);
    } catch (err) {
      return res.status(400).json({
        status: 'failed',
        message: err.result.error,
      });
    }

    if (results.result.success) {
      res.status(200).json({
        status: 'success',
        body: results.result,
      });
    } else {
      // If og parameters arent present in the response
      results = await webScraper(fullUrl);

      if (results.error) {
        return res.status(404).json({
          status: 'error',
          message: results.error,
        });
      } else {
        return res.status(200).json({
          status: 'success',
          body: results,
        });
      }
    }
  } else {
    res.status(400).json({
      status: 'failed',
      message: 'url NOT found. Please specify a url',
    });
  }
};
