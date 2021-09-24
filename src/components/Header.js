import React, { useState } from 'react';

// Import components
import HeaderNavContainer from './HeaderNavContainer';

export default function Header() {
	const [navVisibility, setNavVisibility] = useState(false);

	const toggleNav = () => {
		setNavVisibility(!navVisibility);
	};

	return (
		<header>
			<div className="logo"></div>
			<div className="burger-btn" onClick={toggleNav}>
				<span className="material-icons"> menu </span>
			</div>
			<HeaderNavContainer isVisible={navVisibility} />
		</header>
	);
}
