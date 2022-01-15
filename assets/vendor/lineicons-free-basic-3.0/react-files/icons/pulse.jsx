import React from 'react';

function Pulse(props) {
	const title = props.title || "pulse";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M35.8 49.6c-.1 0-.1 0 0 0-2 0-3.6-1.2-4.2-3l-9.1-28.2c-.1-.2-.3-.3-.5-.3h-.1c-.2 0-.4.1-.4.2l-.1.1-10.3 23.4c-.7 1.6-2.3 2.6-4 2.6H3c-1 0-1.8-.8-1.8-1.8S2 40.9 3 40.9h4c.4 0 .7-.2.8-.5L18.1 17c.5-1.5 2.2-2.6 3.9-2.5 1.7 0 3.3 1.1 3.8 2.7l9.1 28.3c.2.5.6.6.8.6.2 0 .7 0 .9-.6l3.7-10.2c.6-1.4 1.9-2.4 3.4-2.6h.1c1.5-.1 2.9.7 3.8 2.1l.1.1 4.2 8.1c.2.3.5.5.8.5H61c1 0 1.8.8 1.8 1.8S62 47 61 47h-8.3c-1.6 0-3.1-.9-3.9-2.4l-4.2-8c-.1-.2-.3-.4-.5-.4s-.5.2-.6.5l-3.6 10c-.7 1.7-2.3 2.9-4.1 2.9z"/>
	</g>
</svg>
	);
};

export default Pulse;