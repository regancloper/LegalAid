const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	// 1. Get path to templates
	const staffMemberTemplate = path.resolve('./src/templates/staffMember.tsx');
	const newsPostTemplate = path.resolve('./src/templates/article.tsx');

	// 2. Get all staff members and news posts stored in Contentful
	const res = await graphql(`
		query {
			allContentfulStaffMember {
				edges {
					node {
						id
						firstName
						lastName
					}
				}
			}
			allContentfulLegalAidNews {
				edges {
					node {
						id
						title
					}
				}
			}
		}
	`);

	// 3. Create new pages for staff members
	res.data.allContentfulStaffMember.edges.forEach(edge => {
		createPage({
			component: staffMemberTemplate,
			path: `/staff/${edge.node.firstName}-${edge.node.lastName}`,
			context: {
				staffId: edge.node.id,
			},
		});
	});

	// 4. Create new pages for news posts
	res.data.allContentfulLegalAidNews.edges.forEach(edge => {
		createPage({
			component: newsPostTemplate,
			path: `/newsroom/${edge.node.title}`,
			context: {
				articleId: edge.node.id,
			},
		});
	});
};
