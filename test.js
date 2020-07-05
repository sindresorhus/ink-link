import {serial as test} from 'ava';
import React from 'react';
import {Text} from 'ink';
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
			My{' '}<Text color="green">Website</Text>
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

test('exclude fallback if disabled', t => {
	process.env.FORCE_HYPERLINK = 0;
	const Link = require('.');

	const {lastFrame} = render(
		<Link url="https://sindresorhus.com" fallback={false}>
			My Website
		</Link>
	);
	console.log(lastFrame());
	t.snapshot(lastFrame());
});

test('include fallback if explicitly enabled', t => {
	process.env.FORCE_HYPERLINK = 0;
	const Link = require('.');

	const {lastFrame} = render(
		<Link fallback url="https://sindresorhus.com">
			My Website
		</Link>
	);
	console.log(lastFrame());
	t.snapshot(lastFrame());
});
