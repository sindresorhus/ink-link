'use strict';
const {h, renderToString} = require('ink');
const PropTypes = require('prop-types');
const ansiEscapes = require('ansi-escapes');
const supportsHyperlinks = require('supports-hyperlinks');

const Link = props => {
	const text = renderToString(<span>{props.children}</span>);

	if (!supportsHyperlinks.stdout) {
		return <span>{`${text} (${props.url})`}</span>;
	}

	return <span>{ansiEscapes.link(text, props.url)}</span>;
};

Link.propTypes = {
	url: PropTypes.string,
	children: PropTypes.any.isRequired
};

Link.defaultProps = {
	url: ''
};

module.exports = Link;
