import * as React from 'react';
import Link, {Props} from '.';
import {expectType} from 'tsd';

expectType<React.ReactElement<Props, any>>(<Link/>)
expectType<React.ReactElement<Props, any>>(<Link url='https://sindresorhus.com/'/>)
expectType<React.ReactElement<Props, any>>(<Link fallback={false}/>)
