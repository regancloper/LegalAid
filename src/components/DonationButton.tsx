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
			className={donationButtonStyles.button}
			onClick={() => setOneTimeDonation(text === 'Monthly' ? false : true)}
		>
			<span
				className={
					active
						? cx(donationButtonStyles.buttonSpan, donationButtonStyles.active)
						: cx(donationButtonStyles.buttonSpan, donationButtonStyles.inactive)
				}
			>
				{text}
			</span>
		</button>
	);
};

export default DonationButton;
