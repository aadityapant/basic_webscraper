# Basic Web Scrapper

Built using libraries: express.js, cheerio, request-promise, open-graph-scraper

Send a POST request to the root address with the url of the website to be scraped.

# request(POST ONLY) in json with format :

{
"url": "wetsite_url"
}

# response in json :

    a) if open-graph parameters are present: (refer to open-graph-scraper documentation)
        {
            "status": "success",
        "body": {
            "ogSiteName": "MEGAN THE VEGAN MOM",
            "ogTitle": "Mexican Socca Pizza with Tomatillo Salsa & Chipotle Corn — MEGAN THE VEGAN MOM",
            "ogUrl": "https://www.megantheveganmom.com/recipes-2/2019/4/29/mexican-socca-pizza-with-tomatillo-salsa-amp-chipotle-corn",
            "ogType": "article",
            "ogDescription": "Have you ever had a pizza made out of Garbanzo bean flour? Its Gluten-free, packed with protein, and really tasty. Just wait until you taste how this garbanzo bean flour makes the best crust for skillet pizza!",
                }
        }

        b) otherwise :

            {
                title,
                subheader,
                date,
                description,
                img
            }
