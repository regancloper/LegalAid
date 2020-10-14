require('dotenv').config({
	path: '.env',
});

module.exports = {
	siteMetadata: {
		title: `Legal Aid Society of Birmingham`,
		description: `The Legal Aid Society of Birmingham is a non-profit organization that provides court-appointed legal aid in Birmingham, Alabama. Visit our donate page to give to the cause!`,
		url: 'https://legalaidbirmingham.netlify.app', // No trailing slash allowed!
		image: '/images/logo.jpg', // Path to your image you placed in the 'static' folder
		author: `Legal Aid Society of Birmingham`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				forceFullSync: true,
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
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/sitelogo.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`abril fatface`,
					`montserrat\:400,700`,
					`fira sans\:100,200,300,400,700`,
				],
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
