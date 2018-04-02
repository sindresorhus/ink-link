import {h, renderToString} from 'ink';
import PropTypes from 'prop-types';
import ansiEscapes from 'ansi-escapes';
import supportsHyperlinks from 'supports-hyperlinks';

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
