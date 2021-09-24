import React from 'react';

// Import components
import GetStartedButton from './GetStartedButton';

export default function HeroContainer() {
	return (
		<div className="hero-container">
			<div className="hero-img"></div>
			<div className="intro-container">
				<div className="heading">More than just shorter links</div>
				<div className="gray-text">Build your brand’s recognition and get detailed insights on how your links are performing.</div>
				<GetStartedButton />
			</div>
		</div>
	);
}
