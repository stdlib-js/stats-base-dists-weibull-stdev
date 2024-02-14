// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.0-esm/index.mjs";function m(m,a){var i;return s(m)||s(a)||m<=0||a<=0?NaN:(i=t(1+1/m),a*e(t(1+2/m)-i*i))}export{m as default};
//# sourceMappingURL=index.mjs.map
