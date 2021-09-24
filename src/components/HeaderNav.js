import React from 'react';

export default function HeaderNav(props) {
	const { name } = props;

	return (
		<a href="#" className="header-nav">
			{name}
		</a>
	);
}
