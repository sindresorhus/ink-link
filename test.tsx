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

test('custom fallback function', t => {
	process.env.FORCE_HYPERLINK = 0;

	const customFallback = (text: string, url: string) => `[${text}](${url})`;

	const {lastFrame} = render(
		<Link url='https://sindresorhus.com' fallback={customFallback}>
			My Website
		</Link>,
	);
	console.log(lastFrame());
	t.is(lastFrame(), '[My Website](https://sindresorhus.com)');
});

test('custom fallback function with complex text', t => {
	process.env.FORCE_HYPERLINK = 0;

	const customFallback = (text: string, url: string) => `${text} -> ${url}`;

	const {lastFrame} = render(
		<Link url='https://example.com/path?query=value' fallback={customFallback}>
			Visit <Text color='cyan'>our site</Text>
		</Link>,
	);
	console.log(lastFrame());
	// The text includes ANSI color codes from the cyan Text component
	t.regex(lastFrame(), /Visit.*our site.* -> https:\/\/example\.com\/path\?query=value/);
});
