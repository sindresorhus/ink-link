import {serial as test} from 'ava';
import React from 'react';
import {Color} from 'ink';
import {render} from 'ink-testing-library';
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

	const {lastFrame} = render(
		<Link url="https://sindresorhus.com">
			My{' '}<Color green>Website</Color>
		</Link>
	);
	console.log(lastFrame());
	t.snapshot(lastFrame());
});

test('render fallback', t => {
	process.env.FORCE_HYPERLINK = 0;
	const Link = require('.');

	const {lastFrame} = render(
		<Link url="https://sindresorhus.com">
			My Website
		</Link>
	);
	console.log(lastFrame());
	t.snapshot(lastFrame());
});
