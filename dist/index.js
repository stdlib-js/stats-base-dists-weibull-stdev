"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=a(function(f,u){
var i=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-gamma/dist'),v=require('@stdlib/math-base-special-sqrt/dist');function q(e,r){var t;return i(e)||i(r)||e<=0||r<=0?NaN:(t=s(1+1/e),r*v(s(1+2/e)-t*t))}u.exports=q
});var c=n();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
