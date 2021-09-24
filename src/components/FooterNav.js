import React from 'react';

export default function FooterNav(props) {
	const { href, text } = props;

	return <a href={href}>{text}</a>;
}
