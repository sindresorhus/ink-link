import React from 'react';
import {Text} from 'ink';
import PropTypes from 'prop-types';
import terminalLink from 'terminal-link';

const Link = props => {
	const options = {
		fallback: (text, url) => {
			return props.fallback ? `${text} (\u200B${url}\u200B)` : text;
		}
	};

	return (
		<Text unstable__transformChildren={children => terminalLink(children, props.url, options)}>
			{props.children}
		</Text>
	);
};

Link.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	url: PropTypes.string,
	fallback: PropTypes.bool
};

Link.defaultProps = {
	url: '',
	fallback: true
};

module.exports = Link;
