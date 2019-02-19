import {serial as test} from 'ava';
import React from 'react';
import {renderToString, Color} from 'ink';
import clearModule from 'clear-module';

test.beforeEach(() => {
	clearModule.all();
});

test.afterEach(() => {
	delete process.env.FORCE_HYPERLINK;
});

test('render', t => {
	process.env.FORCE_HYPERLINK = 1;
	const Link = require('.');

	const actual = renderToString(
		<Link url="https://sindresorhus.com">
			My{' '}<Color green>Website</Color>
		</Link>
	);
	console.log(actual);
	t.snapshot(actual);
});

test('render fallback', t => {
	process.env.FORCE_HYPERLINK = 0;
	const Link = require('.');

	const actual = renderToString(
		<Link url="https://sindresorhus.com">
			My Website
		</Link>
	);
	console.log(actual);
	t.snapshot(actual);
});
