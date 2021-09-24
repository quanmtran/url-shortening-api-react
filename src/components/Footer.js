import React from 'react';

// Import components
import FooterNavChildContainer from './FooterNavChildContainer';

export default function Footer() {
	const footerNavSections = [
		{
			id: 1,
			heading: 'Features',
			navs: [
				{
					href: '#',
					text: 'Link Shortening',
				},
				{
					href: '#',
					text: 'Branded Links',
				},
				{
					href: '#',
					text: 'Analytics',
				},
			],
		},
		{
			id: 2,
			heading: 'Resources',
			navs: [
				{
					href: '#',
					text: 'Blog',
				},
				{
					href: '#',
					text: 'Developers',
				},
				{
					href: '#',
					text: 'Support',
				},
			],
		},
		{
			id: 3,
			heading: 'Company',
			navs: [
				{
					href: '#',
					text: 'About',
				},
				{
					href: '#',
					text: 'Our Team',
				},
				{
					href: '#',
					text: 'Careers',
				},
				{
					href: '#',
					text: 'Contact',
				},
			],
		},
	];

	return (
		<footer>
			<div>
				<div className="logo"></div>
				<nav className="footer-nav-parent-container">
					{footerNavSections.map((section) => {
						return <FooterNavChildContainer key={section.id} navSection={section} />;
					})}
					<div className="socials">
						<a href="#">
							<div className="social-logo"></div>
						</a>
						<a href="#">
							<div className="social-logo"></div>
						</a>
						<a href="#">
							<div className="social-logo"></div>
						</a>
						<a href="#">
							<div className="social-logo"></div>
						</a>
					</div>
				</nav>
			</div>
			<div className="attribution">
				Challenge by{' '}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
					Frontend Mentor
				</a>
				. Coded by{' '}
				<a href="https://github.com/quanmtran" target="_blank" rel="noopener noreferrer">
					Quan Tran
				</a>
				.
			</div>
		</footer>
	);
}
