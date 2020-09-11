import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import blogStyles from './blog.module.scss';

interface BlogPageProps {}

const BlogPage: React.FC<BlogPageProps> = () => {
	const blogData = useStaticQuery(graphql`
		query {
			allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
				edges {
					node {
						title
						slug
						publishedDate(formatString: "MMMM Do, YYYY")
					}
				}
			}
		}
	`);

	const renderBlogs = () => {
		return blogData.allContentfulBlogPost.edges.map((blog: any) => (
			<li
				className={blogStyles.post}
				key={`${blog.node.title}-${blog.node.publishedDate}`}
			>
				<Link to={`/blog/${blog.node.slug}`}>
					<h2>{blog.node.title}</h2>
					<p>{blog.node.publishedDate}</p>
				</Link>
			</li>
		));
	};

	return (
		<Layout>
			<Head title="Blog" />
			<h1>My Blog</h1>
			<ol className={blogStyles.posts}>{renderBlogs()}</ol>
		</Layout>
	);
};

export default BlogPage;
