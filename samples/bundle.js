!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=u(n(0)),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.handleClick=function(e){e.stopPropagation()},t.prototype.render=function(){return i.default.createElement("div",{id:this.props.id,className:"_Modal",onClick:this.props.onClose.bind(this)},i.default.createElement("div",{className:"_ModalWrapper",onClick:this.handleClick.bind(this)},i.default.createElement("div",{className:"_ModalCloseIcon",onClick:this.props.onClose.bind(this)}),i.default.createElement("div",{className:"_ModalContent"},this.props.children)))},t.defaultProps={id:"_modal",onClose:function(){return console.error(new Error("Must have a onClose Function"))}},t}(i.PureComponent);t.default=l},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(n(0)),i=o(n(1));t.default=function(e,t,n){if(void 0===t&&(t={}),!e)return{error:"Must have a Component"};var o=n||document.createElement("div");document.body.appendChild(o);var l=function(){return document.body.removeChild(o)};return i.default.render(u.default.createElement(e,r({onClose:l},t)),o),{close:l,parent:o}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(1),i=n.n(u),l=n(2),a=n.n(l),c=n(3),f=n.n(c);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,y(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return f()(h,{id:"modal"})}},"Open Modal"))}}])&&p(n.prototype,r),u&&p(n,u),t}(o.a.PureComponent);function h(e){var t=e.onClose;return o.a.createElement(a.a,{onClose:t},o.a.createElement("h3",null,"My Modal"),o.a.createElement("p",null,"Lore ipsum on dolor..."),o.a.createElement("button",{onClick:t},"Ok"))}i.a.render(o.a.createElement(m,null),document.getElementById("root"))}]);