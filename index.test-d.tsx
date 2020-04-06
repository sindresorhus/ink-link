import * as React from 'react';
import Link from '.';

() => {
	return (
		<>
			<Link/>
			<Link url='https://sindresorhus.com/'/>
			<Link fallback={false}/>
		</>
	)
}
