import {h, renderToString} from 'ink';
import PropTypes from 'prop-types';
import terminalLink from 'terminal-link';

const Link = props => {
	const text = renderToString(<span>{props.children}</span>);
	return <span>{terminalLink(text, props.url)}</span>;
};

Link.propTypes = {
	url: PropTypes.string,
	children: PropTypes.any.isRequired
};

Link.defaultProps = {
	url: ''
};

module.exports = Link;
