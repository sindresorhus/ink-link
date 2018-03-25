import {serial as test} from 'ava';
import {h, renderToString, Text} from 'ink';
import clearModule from 'clear-module';

test('render', t => {
	process.env.FORCE_HYPERLINK = 1;
	process.env.FORCE_COLOR = 0;
	clearModule('.');
	const Link = require('.');

	const actual = renderToString(
		<Link url="https://sindresorhus.com">
			My <Text magenta>Website</Text>
		</Link>
	);
	console.log(actual);
	t.snapshot(actual);

	delete process.env.FORCE_HYPERLINK;
	delete process.env.FORCE_COLOR;
});

test('render fallback', t => {
	process.env.FORCE_HYPERLINK = 0;
	process.env.FORCE_COLOR = 0;
	clearModule.all();
	const Link = require('.');

	const actual = renderToString(
		<Link url="https://sindresorhus.com">
			My <Text magenta>Website</Text>
		</Link>
	);
	console.log(actual);
	t.snapshot(actual);

	delete process.env.FORCE_HYPERLINK;
	delete process.env.FORCE_COLOR;
});
