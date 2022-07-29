import{r as l}from"./index.9d3e0bb5.js";var s={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=l.exports,i=Symbol.for("react.element"),m=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,j=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(t,e,_){var r,o={},p=null,a=null;_!==void 0&&(p=""+_),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)u.call(e,r)&&!c.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:i,type:t,key:p,ref:a,props:o,_owner:j.current}}n.Fragment=m;n.jsx=f;n.jsxs=f;s.exports=n;const y=s.exports.jsx,d=s.exports.jsxs,v=s.exports.Fragment;var b=Object.freeze(Object.defineProperty({__proto__:null,jsx:y,jsxs:d,Fragment:v},Symbol.toStringTag,{value:"Module"}));export{v as F,d as a,b,y as j};
//# sourceMappingURL=jsx-runtime.6c0c090e.js.map
