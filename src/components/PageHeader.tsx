import React from 'react';

import headerStyles from './pageHeader.module.scss';

interface PageHeaderProps {
	text: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ text }) => {
	return <h2 className={headerStyles.header}>{text}</h2>;
};

export default PageHeader;
