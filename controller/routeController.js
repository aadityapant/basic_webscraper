const ogs = require('open-graph-scraper');
const webScraper = require('../utils/webScraper');

module.exports = async (req, res, next) => {
  const fullUrl = req.body.url;
  if (fullUrl) {
    const options = { url: fullUrl };
    let results;
    try {
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
