import React from 'react';

export default function Card(props) {
	const { heading, text } = props;

	return (
		<div className="card">
			<div className="card-icon"></div>
			<div className="heading">{heading}</div>
			<div className="gray-text">{text}</div>
		</div>
	);
}
