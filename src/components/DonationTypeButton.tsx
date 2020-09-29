import React from 'react';
import cx from 'classnames';

import donationButtonStyles from './donationButton.module.scss';

interface DonationTypeButtonProps {
	text: string;
	active: boolean;
	setOneTimeDonation: React.Dispatch<React.SetStateAction<boolean>>;
}

const DonationTypeButton: React.FC<DonationTypeButtonProps> = ({
	text,
	active,
	setOneTimeDonation,
}) => {
	return (
		<button
			className={donationButtonStyles.button}
			style={{ marginRight: '30px' }}
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

export default DonationTypeButton;
