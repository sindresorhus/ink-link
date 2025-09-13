import process from 'node:process';
import {test, afterEach} from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import {Text} from 'ink';
import {render} from 'ink-testing-library';
import Link from './source/index.js';

afterEach(() => {
	delete process.env.FORCE_HYPERLINK;
});

test('render', () => {
	if (process.env.CI) {
		return;
	}

	process.env.FORCE_HYPERLINK = '1';

	const result = render(<Link url='https://sindresorhus.com'>
		My{' '}<Text color='green'>Website</Text>
	</Link>);
	console.log('render:', result.lastFrame());
	// With hyperlinks enabled, should contain the hyperlink escape sequences
	assert.ok(result.lastFrame().includes('sindresorhus.com'));
});

test('render fallback', () => {
	process.env.FORCE_HYPERLINK = '0';

	const result = render(<Link url='https://sindresorhus.com'>
		My Website
	</Link>);
	console.log('render fallback:', result.lastFrame());
	// New terminal-link v5 format: "text url" (no parens)
	assert.strictEqual(result.lastFrame(), 'My Website https://sindresorhus.com');
});

test('exclude fallback if disabled', () => {
	process.env.FORCE_HYPERLINK = '0';

	const result = render(<Link url='https://sindresorhus.com' fallback={false}>
		My Website
	</Link>);
	console.log('exclude fallback:', result.lastFrame());
	assert.strictEqual(result.lastFrame(), 'My Website');
});

test('include fallback if explicitly enabled', () => {
	process.env.FORCE_HYPERLINK = '0';

	const result = render(<Link fallback url='https://sindresorhus.com'>
		My Website
	</Link>);
	console.log('include fallback:', result.lastFrame());
	// New terminal-link v5 format: "text url" (no parens)
	assert.strictEqual(result.lastFrame(), 'My Website https://sindresorhus.com');
});

test('custom fallback function', () => {
	process.env.FORCE_HYPERLINK = '0';

	const customFallback = (text: string, url: string) => `[${text}](${url})`;

	const result = render(<Link url='https://sindresorhus.com' fallback={customFallback}>
		My Website
	</Link>);
	console.log('custom fallback:', result.lastFrame());
	assert.strictEqual(result.lastFrame(), '[My Website](https://sindresorhus.com)');
});

test('custom fallback function with complex text', () => {
	process.env.FORCE_HYPERLINK = '0';

	const customFallback = (text: string, url: string) => `${text} -> ${url}`;

	const result = render(<Link url='https://example.com/path?query=value' fallback={customFallback}>
		Visit <Text color='cyan'>our site</Text>
	</Link>);
	console.log('complex fallback:', result.lastFrame());
	// The text includes ANSI color codes from the cyan Text component
	assert.match(result.lastFrame(), /Visit.*our site.* -> https:\/\/example\.com\/path\?query=value/);
});
