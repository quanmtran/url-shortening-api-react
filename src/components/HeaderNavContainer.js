import React from 'react';

// Import components
import HeaderNav from './HeaderNav';

export default function HeaderNavContainer(props) {
	const { isVisible } = props;

	return (
		<nav className={`header-nav-container ${isVisible ? 'visible' : ''}`}>
			<div>
				<HeaderNav name="Features" />
				<HeaderNav name="Pricing" />
				<HeaderNav name="Resources" />
			</div>
			<div>
				<HeaderNav name="Login" />
				<div className="btn-cyan sign-up-btn">
					<a href="#">Sign Up</a>
				</div>
			</div>
		</nav>
	);
}
