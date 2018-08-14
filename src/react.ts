import React from 'react';
import ReactDOM from 'react-dom';

import {
    openWindow,
    OpenWindowFeatures
} from './index';

export function openWindowReact(
    component: any,
    params: {
        title?: string,
        appendHead?: string,
        appendBody?: string,
    } & OpenWindowFeatures,
) {
    const { appendHead, appendBody, ...restParams } = params;
    const wnd = openWindow({ url: '', ...restParams });
    if (!wnd) return null;

    wnd.document.open();
    wnd.document.write(
`<!doctype html>
<html>
    <head>
        ${appendHead || ''}
    </head>
    <body>
        <div id="root">
        </div>
        ${appendBody || ''}
    </body>
</html>`
    );

    const root = wnd.document.getElementById('root');
    ReactDOM.render(React.createElement(component), root);

    return wnd;
}