require('dotenv').config({
	path: '.env',
});

module.exports = {
	siteMetadata: {
		title: `Legal Aid Society`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `Regan Loper`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`abril fatface`, `montserrat\:400,700`],
				display: 'swap',
			},
		},
		{
			resolve: `gatsby-source-stripe`,
			options: {
				objects: ['Price'],
				secretKey: process.env.STRIPE_SECRET_KEY,
				downloadFiles: false,
			},
		},
	],
};