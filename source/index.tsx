import React, {type FC as ReactFC, type ReactNode} from 'react';
import {Transform, Text} from 'ink';
import PropTypes from 'prop-types';
import terminalLink from 'terminal-link';

/* eslint-disable react/boolean-prop-naming */
export type Props = { // eslint-disable-line unicorn/prevent-abbreviations
	readonly children: ReactNode;

	/**
	The URL to link to.

	@example
	```
	import React from 'react';
	import Link from 'ink-link';

	<Link url="https://sindresorhus.com">
		My <Color cyan>Website</Color>
	</Link>
	```
	*/
	readonly url: string;

	/**
	Determines whether the URL should be printed in parens after the text for unsupported terminals: `My website (https://sindresorhus.com)`.

	@default true

	@example
	```
	import React from 'react';
	import Link from 'ink-link';

	<Link url="https://sindresorhus.com" fallback={false}>
		My <Color cyan>Website</Color>
	</Link>
	```
	*/
	readonly fallback?: boolean;
};
/* eslint-enable react/boolean-prop-naming */

/**
An Ink component that creates clickable links in the terminal.

[Supported terminals.](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda)

For unsupported terminals, the link will be printed in parens after the text: `My website (https://sindresorhus.com)`.

@example
```
import React from 'react';
import {render, Color} from 'ink';
import Link from 'ink-link';

render(
	<Link url="https://sindresorhus.com">
		My <Color cyan>Website</Color>
	</Link>
);
```
*/
const Link: ReactFC<Props> = ({children, url, fallback = true}) => ( // eslint-disable-line react/function-component-definition
	<Transform transform={children => terminalLink(children, url, {fallback})}>
		<Text>
			{children}
		</Text>
	</Transform>
);

Link.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	url: PropTypes.string.isRequired,
	fallback: PropTypes.bool, // eslint-disable-line react/boolean-prop-naming
};

Link.defaultProps = {
	fallback: true,
};

export default Link;
