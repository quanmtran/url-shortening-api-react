import React from 'react';

// Import components
import FooterNav from './FooterNav';

export default function FooterNavChildContainer(props) {
	const { navSection } = props;

	return (
		<div className="footer-nav-child-container">
			<div className="heading">{navSection.heading}</div>
			<div className="footer-navs gray-text">
				{navSection.navs.map((nav) => {
					return <FooterNav href={nav.href} text={nav.text} />;
				})}
			</div>
		</div>
	);
}
