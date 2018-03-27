#!/usr/bin/env node
'use strict';
const Airtable = require('airtable');
const fs = require('fs');
const path = require('path');
const sanitize = require("sanitize-filename");
require('babel-polyfill');
require('dotenv').config();

var base = new Airtable({
    apiKey: process.env.GOOD_INTERNET_AIRTABLE_API_KEY
}).base(process.env.GOOD_INTERNET_BASE_ID);

fs.mkdirSync(path.join(__dirname, 'src/html/pages/sites'));

base('Good').select({
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {

    records.forEach(function(record) {
        var desktopThumbURL;
        var filename = "null";

        if(record.get('Name')){
            filename = sanitize(record.get('Name'));
        }

        if(record.get('Desktop Screenshot')[0].thumbnails) {
            desktopThumbURL = record.get('Desktop Screenshot')[0].thumbnails.large.url;
        }


        var outputPath = path.join(__dirname, 'src/html/pages/sites', `${filename}.md`);

        var frontMatter = `---
title: ${record.get('Name')}
date: ${record.get('Date Added')}
url: ${record.get('URL')}
desktopScreenshotThumbnail: ${desktopThumbURL}
desktopScreenshot: ${record.get('Desktop Screenshot')[0].url}
---`;

        fs.writeFile(outputPath, frontMatter, function(err){
            if(err) {
                console.error(err); return;
            }

            console.log(outputPath + ' file generated');
        });
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { 
        console.log("Error with Airtable");
        console.error(err);
        return;
    }

    console.log("Done.");
});


