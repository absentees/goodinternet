// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Good Internet',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // required
        baseId: process.env.AIRTABLE_BASE_ID, // required
        tableName: 'Good', // required
        typeName: 'Site', // required
        route: '/:id'
      }
    }
  ]
}