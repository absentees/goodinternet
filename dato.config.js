'use strict'

// dato, allows you to get content coming from your administrative area;
// root, represents the root of your project and makes it easy to create local files and directories;
// i18n, is useful in multi-language sites to switch between the various available locales and get back translated content;
const util = require('util');
const fs = require('fs');
module.exports = (dato, root, i18n) => {
	root.directory("src/html/pages/sites", (articlesDir) => {
		dato.websites.forEach((site) => {
			articlesDir.createPost(
				`${site.name}.md`, "yaml", {
					frontmatter: {
						title: site.name,
						url: site.url,
						date: site.updatedAt,
						desktopScreenshotThumbnail: site.desktopScreenshot.url({ w: 387, fm: 'pjpg' }),
						desktopScreenshot: site.desktopScreenshot.url({ w: 1600, fm: 'pjpg' }),
						mobileScreenshot: site.mobileScreenshot.url(),
						description: site.description
					}
				}
			);
		});
	});
};
