const Xray = require("x-ray");
let x = Xray();



export async function handler(event, context) {
    // let websites = await x(
    //     "https://www.designernews.co/badges/design",
    //     ".story-list-item", [{
    //         url: ".montana-item-title@href",
    //         upvotes: ".story-vote-count"
    //     }]
    // ).then(function (res) {
    //     return res.map(website => {
    //         return JSON.stringify({
    //             title: website.url,
    //             url: website.url,
    //             upvotes: parseInt(website.upvotes)
    //         });
    //     });
    // });

    // return Promise.resolve(websites);
  }