import React from 'react';
import {Transform, Text} from 'ink';
import PropTypes from 'prop-types';
import terminalLink from 'terminal-link';

const Link = props => {
	return (
		<Transform transform={children => terminalLink(children, props.url, {fallback: props.fallback})}>
			<Text>
				{props.children}
			</Text>
		</Transform>
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
