import { FC as ReactFC } from 'react';

export interface Props {
	/**
	The URL to link to.

	@example
	```
	<Link url="https://sindresorhus.com">
		My <Color cyan>Website</Color>
	</Link>
	```
	*/
	readonly url?: string;

	/**
	Description

	@default foo

	@example
	```
	<Link url="https://sindresorhus.com" fallback={false}>
		My <Color cyan>Website</Color>
	</Link>
	```
	*/
	readonly fallback?: boolean;
}

/**
 * An Ink component that creates clickable links in the terminal.
 *
 * Supported terminals: https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda
 *
 * For unsupported terminals, the link will be printed in parens after the text: `My website (https://sindresorhus.com)`.
 */
declare const Link: ReactFC<Props>

export default Link
