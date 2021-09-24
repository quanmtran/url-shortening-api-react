import React, { useState, useEffect } from 'react';

// Import components
import ShortenLinkInputContainer from './ShortenLinkInputContainer';
import ShortenLinkOutputContainer from './ShortenLinkOutputContainer';

export default function ShortenLinkContainer() {
	const [inputText, setInputText] = useState('');
	const [inputError, setInputError] = useState(false);
	const [outputContent, setOutputContent] = useState([]);
	const [copiedLink, setCopiedLink] = useState('');

	const getFromSessionStorage = () => {
		const saved = JSON.parse(sessionStorage.getItem('myShortenLinks'));
		if (saved) {
			setOutputContent(saved);
		}
	};

	useEffect(() => {
		getFromSessionStorage();
	}, []);

	const saveToSessionStorage = () => {
		sessionStorage.setItem('myShortenLinks', JSON.stringify(outputContent));
	};

	useEffect(() => {
		saveToSessionStorage();
	}, [outputContent]);


	const inputChangeHandler = (e) => {
		setInputText(e.target.value);
		setInputError(false);
	};

	async function inputSubmitHandler() {
		if (inputText.trim()) {
			try {
				const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputText}`);
				const data = await response.json();

				if (data.ok) {
					setOutputContent([...outputContent, { id: Date.now(), originalLink: inputText, shortLink: data.result.short_link }]);
				} else {
					setInputError(true);
				}
			} catch (error) {
				console.log(error);
			}
		} else {
			setInputError(true);
		}

		setInputText('');
	}

	return (
		<div className="shorten-link-container">
			<ShortenLinkInputContainer
				inputText={inputText}
				inputError={inputError}
				inputChangeHandler={inputChangeHandler}
				inputSubmitHandler={inputSubmitHandler}
			/>
			<ShortenLinkOutputContainer outputContent={outputContent} copiedLink={copiedLink} setCopiedLink={setCopiedLink} />
		</div>
	);
}
