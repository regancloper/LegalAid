import React from 'react';

import menuHeaderStyles from './menuHeader.module.scss';

interface MenuHeaderProps {
	text: string;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ text }) => {
	return <h2 className={menuHeaderStyles.header}>{text}</h2>;
};

export default MenuHeader;
