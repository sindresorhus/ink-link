import { type FC as ReactFC, type ReactNode } from 'react';
export type Props = {
    /**
    The URL to link to.

    @example
    ```
    import React from 'react';
    import Link from 'ink-link';

    <Link url="https://sindresorhus.com">
        My <Color cyan>Website</Color>
    </Link>
    ```
    */
    readonly url: string;
    /**
    Determines whether the URL should be printed in parens after the text for unsupported terminals: `My website (https://sindresorhus.com)`.

    @default true

    @example
    ```
    import React from 'react';
    import Link from 'ink-link';

    <Link url="https://sindresorhus.com" fallback={false}>
        My <Color cyan>Website</Color>
    </Link>
    ```
    */
    readonly fallback?: boolean;
    children?: ReactNode;
};
/**
An Ink component that creates clickable links in the terminal.

[Supported terminals.](https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda)

For unsupported terminals, the link will be printed in parens after the text: `My website (https://sindresorhus.com)`.

@example
```
import React from 'react';
import {render, Color} from 'ink';
import Link from 'ink-link';

render(
    <Link url="https://sindresorhus.com">
        My <Color cyan>Website</Color>
    </Link>
);
```
*/
declare const Link: ReactFC<Props>;
export default Link;
