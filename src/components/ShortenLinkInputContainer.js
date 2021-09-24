import React from 'react';

export default function ShortenLinkInputContainer(props) {
	const { inputText, inputError, inputChangeHandler, inputSubmitHandler } = props;

	return (
		<div className="shorten-link-input-container">
			<div className={`input-container ${inputError ? 'error' : ''}`}>
				<input type="text" placeholder="Shorten a link here..." value={inputText} onChange={inputChangeHandler} />
				<div className="error-message">Please add a link</div>
			</div>
			<div className="btn-cyan shorten-btn" onClick={inputSubmitHandler}>
				Shorten It!
			</div>
		</div>
	);
}
