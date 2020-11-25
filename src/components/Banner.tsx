import React from 'react';
import bannerStyles from './banner.module.scss';
// @ts-ignore
import logo from '../images/givingtuesday.png';
import { Link } from 'gatsby';

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
	return (
		<Link to="/donate" className={bannerStyles.link}>
			<div className={bannerStyles.banner}>
				<span className="mr-2">Donate for</span>
				<img src={logo} alt="Giving Tuesday" className={bannerStyles.image} />
				{/* <span className="ml-2">on 12/1/20</span> */}
			</div>
		</Link>
	);
};

export default Banner;
