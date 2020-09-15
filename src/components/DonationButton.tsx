import React from 'react';
import cx from 'classnames';

import donationButtonStyles from './donationButton.module.scss';

interface DonationButtonProps {
	text: string;
	active: boolean;
	setOneTimeDonation: React.Dispatch<React.SetStateAction<boolean>>;
}

const DonationButton: React.FC<DonationButtonProps> = ({
	text,
	active,
	setOneTimeDonation,
}) => {
	return (
		<button
			className={
				active
					? cx(donationButtonStyles.button, donationButtonStyles.active)
					: cx(donationButtonStyles.button, donationButtonStyles.inactive)
			}
			onClick={() => setOneTimeDonation(text === 'Monthly' ? false : true)}
		>
			{text}
		</button>
	);
};

export default DonationButton;
