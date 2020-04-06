# ink-link [![Build Status](https://travis-ci.org/sindresorhus/ink-link.svg?branch=master)](https://travis-ci.org/sindresorhus/ink-link)

> Link component for [Ink](https://github.com/vadimdemedes/ink)

Creates clickable links in the terminal!

<img src="screenshot.png" width="332">

## Install

```
$ npm install ink-link
```

## Usage

```js
import React from 'react';
import {render, Color} from 'ink';
import Link from 'ink-link';

render(
	<Link url="https://sindresorhus.com">
		My <Color cyan>Website</Color>
	</Link>
);
```

## API

### `<Link>`

[Supported terminals.](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda)

For unsupported terminals, the link will be printed in parens after the text: `My website (https://sindresorhus.com)`.

#### url

Type: `string`

The URL to link to.

#### fallback

Type: `boolean`\
Default: `true`

Determines whether the URL should be printed in parens after the text for unsupported terminals: `My website (https://sindresorhus.com)`.

## Related

- [terminal-link](https://github.com/sindresorhus/terminal-link) - Create clickable links in the terminal
- [ink-box](https://github.com/sindresorhus/ink-box) - Styled box component for Ink
- [ink-gradient](https://github.com/sindresorhus/ink-gradient) - Gradient color component for Ink
- [ink-big-text](https://github.com/sindresorhus/ink-big-text) - Awesome text component for Ink
