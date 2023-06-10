import process from 'node:process';
import test from 'ava';
import React, {type FC as ReactFC, type ReactNode} from 'react';
import {Text} from 'ink';
import {render} from 'ink-testing-library';
import Link from './source/index.js';

test.afterEach(() => {
	delete process.env.FORCE_HYPERLINK;
});

test('render', t => {
	if (process.env.CI) {
		t.pass();
		return;
	}

	process.env.FORCE_HYPERLINK = 1;

	const {lastFrame} = render(
		<Link url='https://sindresorhus.com'>
			My{' '}<Text color='green'>Website</Text>
		</Link>,
	);
	console.log(lastFrame());
	t.snapshot(lastFrame());
});

test('render fallback', t => {
	process.env.FORCE_HYPERLINK = 0;

	const {lastFrame} = render(
		<Link url='https://sindresorhus.com'>
			My Website
		</Link>,
	);
	console.log(lastFrame());
	t.snapshot(lastFrame());
});

test('exclude fallback if disabled', t => {
	process.env.FORCE_HYPERLINK = 0;

	const {lastFrame} = render(
		<Link url='https://sindresorhus.com' fallback={false}>
			My Website
		</Link>,
	);
	console.log(lastFrame());
	t.snapshot(lastFrame());
});

test('include fallback if explicitly enabled', t => {
	process.env.FORCE_HYPERLINK = 0;

	const {lastFrame} = render(
		<Link fallback url='https://sindresorhus.com'>
			My Website
		</Link>,
	);
	console.log(lastFrame());
	t.snapshot(lastFrame());
});
