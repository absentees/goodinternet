// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const Xray = require("x-ray");
let x = Xray();


exports.handler = async (event, context) => {
  try {
    let websites = await x(
			"https://www.designernews.co/badges/design",
			".story-list-item", [{
				url: ".montana-item-title@href",
				upvotes: ".story-vote-count"
			}]
		).then(function (res) {
			return res.map(website => {
				return {
					title: website.url,
					url: website.url,
					upvotes: parseInt(website.upvotes)
				};
			});
		});



    const subject = event.queryStringParameters.name || "World";
    return {
      statusCode: 200,
      body: JSON.stringify(websites)
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
