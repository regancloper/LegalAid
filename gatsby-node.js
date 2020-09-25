const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	// 1. Get path to template
	const staffMemberTemplate = path.resolve('./src/templates/staffMember.tsx');

	// 2. Get all staff members stored in Contentful
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
		}
	`);

	// 3. Create new pages
	res.data.allContentfulStaffMember.edges.forEach(edge => {
		createPage({
			component: staffMemberTemplate,
			path: `/staff/${edge.node.firstName}-${edge.node.lastName}`,
			context: {
				staffId: edge.node.id,
			},
		});
	});
};
