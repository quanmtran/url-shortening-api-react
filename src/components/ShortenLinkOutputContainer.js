import React from 'react';

// Import components
import OutputCard from './OutputCard';

export default function ShortenLinkOutputContainer(props) {
	const { outputContent, copiedLink, setCopiedLink } = props;

	return (
		<div className="shorten-link-output-container">
			{outputContent.map((content) => {
				return (
					<OutputCard
						key={content.id}
						originalLink={content.originalLink}
						shortLink={content.shortLink}
						copiedLink={copiedLink}
						setCopiedLink={setCopiedLink}
					/>
				);
			})}
		</div>
	);
}
