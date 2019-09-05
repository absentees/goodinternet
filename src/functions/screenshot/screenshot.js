/* eslint-disable */
// const fetch = require("node-fetch");

const fs = require("fs");
const imgur = require("imgur");
const chrome = require('chrome-aws-lambda');
// const puppeteer = require('puppeteer-core'); // Use on prod
const puppeteer = require('puppeteer'); // Use on local



exports.handler = async function(event, context) {
    try {

		await auth(event.queryStringParameters.screenshotKey);
		const url = await validateUrl(event.queryStringParameters.url);
		const screenshot = await screenshotURL(url,'.');

        return {
            statusCode: 200,
            body: JSON.stringify({msg: `screenshot taken: ${url}`})
        };
    } catch (err) {
        console.log(err); // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
        };
    }
};

async function auth(key) {
	if(key != process.env.SCREENSHOT_KEY || key == null) {
		throw new Error("Could not authenticate");
	} else {
		Promise.resolve();
	}
}

async function validateUrl(url) {
    const urlRegex = /https?:\/\/|localhost|\./;

    if (urlRegex.test(url)) {
        return Promise.resolve(url);
    } else {
		throw new Error("URL is no good, please try again.");
    }
}

/**
 * Takes a desktop and mobile screenshot at a given path of a given url, returns an array
 *
 * @param {*} url
 * @param {*} filePath
 * @returns
 * @memberof GoodLib
 */
async function screenshotURL(url, filePath) {
    console.log(`Taking screenshots of ${url}`);

    const browser = await puppeteer.launch({
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless
    });

    const page = await browser.newPage();

    await page.goto(url, {
        waitUntil: "networkidle0"
    });
    await page.setViewport({
        width: 1280,
        height: 800
    });
    await page.screenshot({
        path: `${filePath}/desktop.jpg`,
        fullPage: true,
        type: "jpeg"
    });
    await page.setViewport({
        width: 320,
        height: 480,
        isMobile: true
    });
    await page.reload({
        waitUntil: "networkidle0"
    });
    await page.screenshot({
        path: `${filePath}/mobile.jpg`,
        fullPage: true,
        type: "jpeg"
    });
    await browser.close();

    return Promise.resolve();
}

/**
 *
 *
 * @param {*} image
 * @returns
 * @memberof GoodLib
 */
async function uploadToImgur(image) {
    console.log(`Uploading images to Imgur: ${image}`);

    imgur.setCredentials(
        process.env.IMGUR_USER,
        process.env.IMGUR_PASSWORD,
        process.env.IMGUR_CLIENTID
    );

    let json = await imgur.uploadFile(
        image,
        process.env.GOOD_INTERNET_IMGUR_ALBUM_ID
    );
    return Promise.resolve(json.data.link);
}

async function addToAirtable(title, url, desktopImageLink, mobileImageLink) {
    console.log("Uploading files");
    console.log(url);

    let record = await base("Good").create({
        Name: title,
        URL: url,
        "Desktop Screenshot": [
            {
                url: desktopImageLink
            }
        ],
        "Mobile Screenshot": [
            {
                url: mobileImageLink
            }
        ]
    });

    return Promise.resolve(record);
}

/**
 *
 *
 * @param {*} website
 * @returns
 * @memberof GoodLib
 */
async function deleteFile(filePath) {
    fs.unlink(filePath, err => {
        if (err) {
            console.error("Failed to delete local file: " + error);
        } else {
            console.log("Deleted local: " + filePath);
        }
    });

    return Promise.resolve();
}
