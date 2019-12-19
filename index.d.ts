import * as React from 'react';

export interface LinkProps {
	/**
	 * The URL to link to.
	 */
	url?: string
	/**
	 * Determines whether the URL should be printed in parens after the text for unsupported terminals: `My website (https://sindresorhus.com)`.
	 *
	 * Defaults to enabled.
	 */
	fallback?: boolean
}

/**
 * An Ink component that creates clickable links in the terminal.
 *
 * Supported terminals: https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda
 *
 * For unsupported terminals, the link will be printed in parens after the text: `My website (https://sindresorhus.com)`.
 */
export default class Link extends React.Component<LinkProps>{}
