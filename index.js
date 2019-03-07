import React from 'react';
import {Text} from 'ink';
import PropTypes from 'prop-types';
import terminalLink from 'terminal-link';

const Link = props => {
	return (
		<Text unstable__transformChildren={children => terminalLink(children, props.url)}>
			{props.children}
		</Text>
	);
};

Link.propTypes = {
	url: PropTypes.string,
	children: PropTypes.any.isRequired
};

Link.defaultProps = {
	url: ''
};

module.exports = Link;
