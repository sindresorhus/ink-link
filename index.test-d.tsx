import * as React from 'react';
import Link from '.';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
() => {
	return (
		<>
			<Link/>
			<Link url="https://sindresorhus.com/"/>
			<Link fallback={false}/>
		</>
	);
};
