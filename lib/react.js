"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var index_1 = require("./index");
function openWindowReact(component, params) {
    var appendHead = params.appendHead, appendBody = params.appendBody, restParams = __rest(params, ["appendHead", "appendBody"]);
    var wnd = index_1.openWindow(__assign({ url: '' }, restParams));
    if (!wnd)
        return null;
    wnd.document.open();
    wnd.document.write("<!doctype html>\n<html>\n    <head>\n        " + (appendHead || '') + "\n    </head>\n    <body>\n        <div id=\"root\">\n        </div>\n        " + (appendBody || '') + "\n    </body>\n</html>");
    var root = wnd.document.getElementById('root');
    react_dom_1.default.render(react_1.default.createElement(component), root);
    return wnd;
}
exports.openWindowReact = openWindowReact;
//# sourceMappingURL=react.js.map