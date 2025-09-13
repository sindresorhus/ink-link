# ink-link

> Link component for [Ink](https://github.com/vadimdemedes/ink)

Creates clickable links in the terminal!

<img src="screenshot.png" width="332">

## Install

```sh
npm install ink-link
```

## Usage

```js
import React from 'react';
import {render, Text} from 'ink';
import Link from 'ink-link';

render(
	<Link url="https://sindresorhus.com">
		My <Text color="cyan">Website</Text>
	</Link>
);
```

## API

### `<Link>`

[Supported terminals.](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda)

For unsupported terminals, the link will be printed after the text: `My website https://sindresorhus.com`.

#### url

Type: `string`

The URL to link to.

#### fallback

Type: `boolean | (text: string, url: string) => string`\
Default: `true`

Determines whether the URL should be printed after the text for unsupported terminals: `My website https://sindresorhus.com`.

Can also be a function that receives the text and URL and returns a custom fallback string.

```js
<Link url="https://sindresorhus.com" fallback={(text, url) => `[${text}](${url})`}>
	My Website
</Link>
```

## Related

- [terminal-link](https://github.com/sindresorhus/terminal-link) - Create clickable links in the terminal
- [ink-gradient](https://github.com/sindresorhus/ink-gradient) - Gradient color component for Ink
- [ink-big-text](https://github.com/sindresorhus/ink-big-text) - Awesome text component for Ink
