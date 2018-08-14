function booleanToYesNo(b: boolean) {
    return b ? 'yes' : 'no';
}

/** https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features */
export type OpenWindowFeatures = {
    /** Specifies the distance the new window is placed from the left side of the work area for applications of the user's operating system to the leftmost border (resizing handle) of the browser window. The new window can not be initially positioned offscreen. */
    left?: number,
    /** Specifies the distance the new window is placed from the top side of the work area for applications of the user's operating system to the topmost border (resizing handle) of the browser window. The new window can not be initially positioned offscreen. */
    top?: number,
    /** Specifies the width of the content area, viewing area of the new secondary window in pixels. The width value includes the width of the vertical scrollbar if present. The width value does not include the sidebar if it is expanded. The minimum required value is 100. */
    width?: number,
    /** Specifies the height of the content area, viewing area of the new secondary window in pixels. The height value includes the height of the horizontal scrollbar if present. The minimum required value is 100. */
    height?: number,
    /** Centers the window in relation to its parent's size and position. Requires chrome=yes. */
    centerscreen?: boolean,
    /** Specifies the width of the whole browser window in pixels. This outerWidth value includes the window vertical scrollbar (if present) and left and right window resizing borders. */
    outerWidth?: number,
    /**
     * Specifies the height of the whole browser window in pixels. This outerHeight value includes any/all present toolbar, window horizontal scrollbar (if present) and top and bottom window resizing borders. Minimal required value is 100.  
     * 
     * `Note`: since titlebar is always rendered, then requesting outerHeight=100 will make the innerHeight of the browser window under the minimal 100 pixels.
     */
    outerHeight?: number,
    /** Same as width but only supported by Netscape and Mozilla-based browsers. Specifies the width of the content area, viewing area of the new secondary window in pixels. The innerWidth value includes the width of the vertical scrollbar if present. The innerWidth value does not include the sidebar if it is expanded. Minimal required value is 100. */
    innerWidth?: number,
    /** Same as height but only supported by Netscape and Mozilla-based browsers. Specifies the height of the content area, viewing area of the new secondary window in pixels. The innerHeight value includes the height of the horizontal scrollbar if present. Minimal required value is 100. */
    innerHeight?: number,

    /**
     * If this feature is on, then the new secondary window renders the menubar.  
     * 
     * Mozilla and Firefox users can force new windows to always render the menubar by setting `dom.disable_window_open_feature.menubar` to true in `about:config` or in their `user.js` file.
     */
    menubar?: boolean,

    /**
     * If this feature is on, then the new secondary window renders the Navigation Toolbar (Back, Forward, Reload, Stop buttons). In addition to the Navigation Toolbar, Mozilla-based browsers will render the Tab Bar if it is visible, present in the parent window. (If this feature is set to no all toolbars in the window will be invisible, for example extension toolbars).  
     * 
     * Mozilla and Firefox users can force new windows to always render the Navigation Toolbar by setting dom.disable_window_open_feature.toolbar to true in about:config or in their user.js file. 
     */
    toolbar?: boolean,

    /**
     * If this feature is on, then the new secondary window renders the Location bar in Mozilla-based browsers. MSIE 5+ and Opera 7.x renders the Address Bar.
     * 
     * Mozilla and Firefox users can force new windows to always render the location bar by setting dom.disable_window_open_feature.location to true in about:config or in their user.js file.
     */
    location?: boolean,

    /**
     * If this feature is on, then the new secondary window renders the Personal Toolbar in Netscape 6.x, Netscape 7.x and Mozilla browser. It renders the Bookmarks Toolbar in Firefox. In addition to the Personal Toolbar, Mozilla browser will render the Site Navigation Bar if such toolbar is visible, present in the parent window.
     * 
     * Mozilla and Firefox users can force new windows to always render the Personal Toolbar/Bookmarks toolbar by setting dom.disable_window_open_feature.personalbar to true in about:config or in their user.js file.
     */
    personalbar?: boolean,

    /**
     * If this feature is on, then the new secondary window has a status bar. Users can force the rendering of status bar in all Mozilla-based browsers, in MSIE 6 SP2 (Note on status bar in XP SP2) and in Opera 6+. The default preference setting in recent Mozilla-based browser releases and in Firefox 1.0 is to force the presence of the status bar.
     */
    status?: boolean,

    /**
     * If this feature is specified, the window is able to open even if another application is already in the foreground. This feature is for Firefox OS applications only, and is currently restricted to certified applications. See Internal (Certified) app permissions in App permissions for more information.
     */
    attention?: boolean,

    /**
     * If on, the new window is said to be dependent of its parent window. A dependent window closes when its parent window closes. A dependent window is minimized on the Windows task bar only when its parent window is minimized. On Windows platforms, a dependent window does not show on the task bar. A dependent window also stays in front of the parent window.
     * 
     * Dependent windows are not implemented on MacOS X, this option will be ignored.
     * 
     * The dependent feature is currently under revision to be removed (bug 214867)
     * 
     * In MSIE 6, the nearest equivalent to this feature is the showModelessDialog() method.
     */
    dependent?: boolean,

    /**
     * This setting can only apply to dialog windows; "minimizable" requires `dialog=yes`. If minimizable is on, the new dialog window will have a minimize system command icon in the titlebar and it will be minimizable. Any non-dialog window is always minimizable and `minimizable=no` will be ignored.
     */
    minimizable?: boolean,

    /**
     * Do not use. Not implemented in Mozilla. There are no plans to implement this feature in Mozilla.
     * 
     * This feature no longer works in MSIE 6 SP2 the way it worked in MSIE 5.x. The Windows taskbar, as well as the titlebar and the status bar of the window are not visible, nor accessible when fullscreen is enabled in MSIE 5.x.
     * 
     * `fullscreen` always upsets users with large monitor screen or with dual monitor screen. Forcing fullscreen onto other users is also extremely unpopular and is considered an outright rude attempt to impose web author's viewing preferences onto users.
     */
    fullscreen?: boolean,

    /**
     * If this feature is set, the newly-opened window will open as normal, except that it will not have access back to the originating window (via Window.opener — it returns null). In addition, the window.open() call will also return null, so the originating window will not have access to the new one either.  This is useful for preventing untrusted sites opened via window.open() from tampering with the originating window, and vice versa.
     * 
     * Note that when noopener is used, nonempty target names other than _top, _self, and _parent are all treated like _blank in terms of deciding whether to open a new window/tab.
     * 
     * This is supported in modern browsers including Chrome, and Firefox 52+. See also rel="noopener".
     */
    noopener?: boolean,

    /**
     * If this feature is on, the new secondary window will be resizable.
     * 
     * Note: Starting with version 1.4, Mozilla-based browsers have a window resizing grippy at the right end of the status bar, this ensures that users can resize the browser window even if the web author requested this secondary window to be non-resizable. In such case, the maximize/restore icon in the window's titlebar will be disabled and the window's borders won't allow resizing but the window will still be resizable via that grippy in the status bar.
     * 
     * Starting with Firefox 3, secondary windows are always resizable (bug 177838)
     * 
     * Tip: For accessibility reasons, it is strongly recommended to set this feature always on
     * 
     * Mozilla and Firefox users can force new windows to be easily resizable by setting dom.disable_window_open_feature.resizable to true in about:config or in their user.js file.
     */
    resizable?: boolean,

    /**
     * If this feature is on, the new secondary window will show horizontal and/or vertical scrollbar(s) if the document doesn't fit into the window's viewport.
     * 
     * Tip: For accessibility reasons, it is strongly encouraged to set this feature always on.
     * 
     * Mozilla and Firefox users can force this option to be always enabled for new windows by setting dom.disable_window_open_feature.scrollbars to true in about:config or in their user.js file. Starting in Firefox 49, this feature is on by default, and the dom.disable_window_open_feature.scrollbars preference has been removed.
     */
    scrollbars?: boolean,

    /**
     * Note: Starting with Mozilla 1.7/Firefox 0.9, this feature requires the `UniversalBrowserWrite` privilege (bug 244965). Without this privilege, it is ignored.
     * 
     * If on, the page is loaded as window's only content, without any of the browser's interface elements. There will be no context menu defined by default and none of the standard keyboard shortcuts will work. The page is supposed to provide a user interface of its own, usually this feature is used to open XUL documents (standard dialogs like the JavaScript Console are opened this way).
     */
    chrome?: boolean,

    /**
     * Note: Starting with Firefox 44, this feature can only be used with chrome privileges. If content attempts to toggle this feature, it will be ignored.
     * 
     * The dialog feature removes all icons (restore, minimize, maximize) from the window's titlebar, leaving only the close button. Mozilla 1.2+ and Netscape 7.1 will render the other menu system commands (in FF 1.0 and in NS 7.0x, the command system menu is not identified with the Firefox/NS 7.0x icon on the left end of the titlebar: that's probably a bug. You can access the command system menu with a right-click on the titlebar). Dialog windows are windows which have no minimize system command icon and no maximize/restore down system command icon on the titlebar nor in correspondent menu item in the command system menu. They are said to be dialog because their normal, usual purpose is to only notify info and to be dismissed, closed. On Mac systems, dialog windows have a different window border and they may get turned into a sheet.
     */
    dialog?: boolean,

    /**
     * Note: Starting with Mozilla 1.2.1, this feature requires the UniversalBrowserWrite privilege (bug 180048). Without this privilege, it is ignored.
     * 
     * If on, the new window is said to be modal. The user cannot return to the main window until the modal window is closed. A typical modal window is created by the alert() function.
     * 
     * The exact behavior of modal windows depends on the platform and on the Mozilla release version.
     * 
     * Note: As of Gecko 1.9, the Internet Explorer equivalent to this feature is the window.showModalDialog() method. For compatibility reasons, it's now supported in Firefox. Note also that starting in Gecko 2.0, you can use window.showModalDialog() without UniversalBrowserWrite privileges.
     */
    modal?: boolean,

    /**
     * By default, all new secondary windows have a titlebar. If set to no or 0, this feature removes the titlebar from the new secondary window.
     * 
     * Mozilla and Firefox users can force new windows to always render the titlebar by setting `dom.disable_window_open_feature.titlebar` to true in about:config or in their user.js file.
     */
    titlebar?: boolean,

    /** If on, the new window will always be displayed on top of other browser windows, regardless of whether it is active or not. */
    alwaysRaised?: boolean,

    /**
     * If on, the new created window floats below, under its own parent when the parent window is not minimized. alwaysLowered windows are often referred as pop-under windows. The alwaysLowered window can not be on top of the parent but the parent window can be minimized. In NS 6.x, the alwaysLowered window has no minimize system command icon and no restore/maximize system command.
     */
    alwaysLowered?: boolean,

    /** Same as `alwaysLowered`. */
    'z-lock'?: boolean,

    /**
     * When set to no or 0, this feature removes the system close command icon and system close menu item. It will only work for dialog windows (dialog feature set). close=no will override minimizable=yes.
     * 
     * Mozilla and Firefox users can force new windows to always have a close button by setting `dom.disable_window_open_feature.close` to true in about:config or in their user.js file.
    */
    close?: boolean,
};

/** https://developer.mozilla.org/en-US/docs/Web/API/Window/open */
export function openWindow(params: {
    /** A `DOMString` indicating the URL of the resource to be loaded. This can be a path or URL to an HTML page, image file, or any other resource which is supported by the browser. If the empty string ("") is specified as url, a blank page is opened into the targeted browsing context. */
    url?: string,
    /** A `DOMString` specifying the name of the browsing context (window, <iframe> or tab) into which to load the specified resource; if the name doesn't indicate an existing context, a new window is created and is given the name specified by windowName. This name can then be used as the target of links and forms by specifying it as the target attribute of <a> or <form> elements. The name should not contain whitespace. Keep in mind that this will not be used as the window's displayed title. */
    title?: string,
} & OpenWindowFeatures) {
    const { url, title, ...features } = params;
    const featuresStr = Object.entries(features).map(([ featureKey, featureValue ]) => (
        `${featureKey}=${typeof featureValue === 'boolean' ? booleanToYesNo(featureValue) : featureValue}`
    )).join(',');
    return window.open(url, title, featuresStr);
}