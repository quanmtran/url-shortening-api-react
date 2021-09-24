import React from 'react';

// Import components
import Card from './Card';

export default function CardsContainer() {
	const cardsContent = [
		{
			id: 1,
			heading: 'Brand Recognition',
			text: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
		},
		{
			id: 2,
			heading: 'Detailed Records',
			text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
		},
		{
			id: 3,
			heading: 'Fully Customizable',
			text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
		},
	];

	return (
		<div className="cards-container">
			{cardsContent.map((card) => {
				return <Card key={card.id} heading={card.heading} text={card.text} />;
			})}
		</div>
	);
}
