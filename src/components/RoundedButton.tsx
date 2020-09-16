import React from 'react';

import roundedButtonStyles from './roundedButton.module.scss';

interface RoundedButtonProps {
	text: string;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ text }) => {
	return <button className={roundedButtonStyles.button}>{text}</button>;
};

export default RoundedButton;
