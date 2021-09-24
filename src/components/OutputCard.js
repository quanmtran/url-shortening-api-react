import React from 'react';

export default function OutputCard(props) {
	const { originalLink, shortLink, copiedLink, setCopiedLink } = props;

	const copyHandler = () => {
		navigator.clipboard.writeText(shortLink);
		setCopiedLink(shortLink);
	};

	return (
		<div className="output-card">
			<div className="original-link">{originalLink}</div>
			<div className="response">
				<div className="short-link">{shortLink}</div>
				<div className={`${shortLink === copiedLink ? 'btn-violet' : 'btn-cyan'} copy-btn`} onClick={copyHandler}>
					{shortLink === copiedLink ? 'Copied' : 'Copy'}
				</div>
			</div>
		</div>
	);
}
