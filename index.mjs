// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";var a=s,m=t,r=e;var i=function(s,t){var e;return a(s)||a(t)||s<=0||t<=0?NaN:(e=m(1+1/s),t*r(m(1+2/s)-e*e))};export{i as default};
//# sourceMappingURL=index.mjs.map
