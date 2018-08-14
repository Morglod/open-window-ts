# open-window-ts

Open multiple windows in browser with typed [window.open api](https://developer.mozilla.org/en-US/docs/Web/API/Window/open).

Supports openning window with react component.

## Install

`npm i open-window-ts`

or browser version:

`https://raw.githubusercontent.com/Morglod/open-window-ts/master/lib/open-window.js`  
`https://raw.githubusercontent.com/Morglod/open-window-ts/master/lib/open-window.min.js`

All api in browser exported to global `OW` object.

## Usage

```ts
import { openWindow } from 'open-window-ts';

openWindow({
    url: 'www.google.ru',
});
```

<details>
<summary>
Example with FigmaApi OAuth
</summary>

```ts
import { openWindow } from 'open-window-ts';
import * as Figma from 'figma-api';
import { Result, ResultErr } from 'go-result-js';

async function figmaAuth(
    clientId: string,
    clientSecret: string,
    authState: string = Math.random().toString(16),
): Promise<Result<string>> {
    const authLink = Figma.oAuthLink(
        clientId,
        '/#/auth',
        'file_read',
        authState,
        'code',
    );

    const wnd = openWindow({
        url: authLink,
        title: 'Figma auth',
    });

    if (!wnd) return ResultErr(new Error('failed openWindow'));

    return ResultA((resolve, reject) => {
        wnd.addEventListener('hashchange', async () => {
            if (wnd.location.hash.startsWith('#/auth')) {
                const { code } = window.location.hash.substr(window.location.hash.indexOf('?') + 1)
                    .split('&')
                    .reduce((s, x) => {
                        const [ a, b ] = x.split('=');
                        return Object.assign(s, { [a]: b });
                    }, {}) as any;
                
                const [ tokenErr, tokenRes ] = await Figma.oAuthToken(
                    clientId,
                    clientSecret,
                    '/#/auth',
                    code,
                    'authorization_code'
                );

                if (tokenErr || !tokenRes) reject(tokenErr);
                else resolve(tokenRes.access_token);

                wnd.close();
            }
        });
    });
}
```

</details>

## API

[Window features list](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features).

```ts
function openWindow({
    url?: string,
    title?: string,
    ...features,
}): Window|null;
```

Opens new window with specified params & features.

```ts
import { openWindowReact } from 'open-window-ts/lib/react';

function openWindowReact(
    component: any,
    params: {
        title?: string,
        appendHead?: string,
        appendBody?: string,
    } & OpenWindowFeatures,
): Window|null;
```

Opens new window with specified params & mounts react component.