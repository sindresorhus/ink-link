import * as React from 'react';
import Link from '.';

// Without optional properties.
() => {
	return <Link/>
}

// With a URL
() => {
	return <Link url='https://sindresorhus.com/'/>
}

// Without fallbacks
() => {
	return <Link fallback={false}/>
}
