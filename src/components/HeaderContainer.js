import React from 'react';

// Import components
import Header from './Header';
import HeroContainer from './HeroContainer';

export default function HeaderContainer() {
	return (
		<div className="header-container">
			<Header />
			<HeroContainer />
		</div>
	);
}
