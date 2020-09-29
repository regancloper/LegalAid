import React from 'react';
import cx from 'classnames';
import { Spinner } from 'react-bootstrap';

import donationButtonStyles from './donationButton.module.scss';

interface DonateButtonProps {
	text: string;
	loading: boolean;
}

const DonateButton: React.FC<DonateButtonProps> = ({ text, loading }) => {
	return (
		<button
			className={donationButtonStyles.button}
			style={{ bottom: 42, minWidth: '50%' }}
		>
			<span
				className={cx(
					donationButtonStyles.buttonSpan,
					donationButtonStyles.inactive
				)}
				style={{
					border: '3px solid #076666',
					fontWeight: 400,
					textTransform: 'uppercase',
					letterSpacing: 2,
				}}
			>
				{loading ? <Spinner animation="border" size="sm" /> : text}
			</span>
		</button>
	);
};

export default DonateButton;
