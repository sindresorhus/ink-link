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
const {h, render, Text} = require('ink');
const Link = require('ink-link');

render(
	<div>
		<Link url="https://sindresorhus.com">
			My <Text cyan>Website</Text>
		</Link>
	</div>
);
//=>
```


## API

### `<Link>`

[Supported terminals.](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda)

For unsupported terminals, the link will be printed in parens after the text: `My website (https://sindresorhus.com)`.

#### url

Type: `string`

URL to link to.


## Related

- [terminal-link](https://github.com/sindresorhus/terminal-link) - Create clickable links in the terminal
- [ink-box](https://github.com/sindresorhus/ink-box) - Box component for Ink
- [ink-gradient](https://github.com/sindresorhus/ink-gradient) - Gradient color component for Ink


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
