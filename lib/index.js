"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function booleanToYesNo(b) {
    return b ? 'yes' : 'no';
}
/** https://developer.mozilla.org/en-US/docs/Web/API/Window/open */
function openWindow(params) {
    var url = params.url, title = params.title, features = __rest(params, ["url", "title"]);
    var featuresStr = Object.entries(features).map(function (_a) {
        var featureKey = _a[0], featureValue = _a[1];
        return (featureKey + "=" + (typeof featureValue === 'boolean' ? booleanToYesNo(featureValue) : featureValue));
    }).join(',');
    return window.open(url, title, featuresStr);
}
exports.openWindow = openWindow;
//# sourceMappingURL=index.js.map