import React from 'react';

function Layers(props) {
	const title = props.title || "layers";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54 39.6l-1.6-.9 1.9-1.1c1.9-1.2 3-3.2 2.9-5.4S56 28 54 26.9l-3-1.7 3.2-2c1.9-1.2 3-3.2 2.9-5.4s-1.2-4.2-3.2-5.3L35.2 2C33.3.9 31 1 29.1 2L9.9 13.2c-1.9 1.1-3.1 3.1-3.1 5.3 0 2.2 1.2 4.2 3.1 5.3l3.1 1.8-3.1 1.8c-1.9 1.1-3.1 3.1-3.1 5.3 0 2.2 1.1 4.2 3.1 5.3l1.8 1-1.7 1c-1.9 1.1-3.1 3.1-3.1 5.3 0 2.2 1.1 4.2 3.1 5.3l19.1 11c1 .6 2 .8 3.1.8s2.2-.3 3.2-.9l18.9-11.6c1.9-1.2 3-3.2 2.9-5.4-.1-1.9-1.2-3.9-3.2-4.9zM10.3 18.5c0-1 .5-1.8 1.3-2.3L30.8 5.1c.4-.2.9-.4 1.3-.4s.9.1 1.3.3l18.8 10.5c.8.5 1.3 1.3 1.4 2.3 0 1-.5 1.8-1.3 2.3L33.5 31.8c-.8.5-1.9.5-2.7 0l-19.1-11c-.9-.4-1.4-1.3-1.4-2.3zm0 14.3c0-1 .5-1.8 1.3-2.3l4.9-2.8L29 34.9c1 .6 2 .8 3.1.8s2.2-.3 3.2-.9l12.3-7.6 4.7 2.6c.8.5 1.3 1.3 1.4 2.3 0 1-.5 1.8-1.3 2.3L33.5 46.2c-.8.5-1.9.5-2.7 0l-19.1-11c-.9-.5-1.4-1.4-1.4-2.4zm42.1 14.4L33.5 58.9c-.8.5-1.9.5-2.7 0l-19.1-11c-.8-.5-1.3-1.3-1.3-2.3 0-1 .5-1.8 1.3-2.3l3.5-2 13.8 8c1 .6 2 .8 3.1.8s2.2-.3 3.2-.9L49 40.7l3.4 1.9c.8.5 1.3 1.3 1.4 2.3-.1.9-.6 1.8-1.4 2.3z"/>
	</g>
</svg>
	);
};

export default Layers;