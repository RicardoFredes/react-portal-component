!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0;var o=r(n(4)),u=n(5);Object.defineProperty(t,"Modal",{enumerable:!0,get:function(){return u.Modal}}),t.default=o.default},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(2),i=n.n(u),l=n(1),a=n.n(l);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,p(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"handleClick",value:function(){var e=document.getElementById("portal"),t=a()(b,{},e),n=t.close,r=t.parent;console.log(r),setTimeout(n,5e3)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return a()(b,{id:"modal",title:"My Modal"})}},"Open Modal"),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.handleClick.bind(this)},"Modal auto close after 5s"))}}])&&f(n.prototype,r),u&&f(n,u),t}(o.a.PureComponent);function b(e){var t=e.close,n=e.id,r=e.title;return o.a.createElement(l.Modal,{id:n,close:t},o.a.createElement("h3",null,r),o.a.createElement("p",null,"Lore ipsum on dolor..."),o.a.createElement("button",{onClick:t},"Ok"))}i.a.render(o.a.createElement(y,null),document.getElementById("root"))},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),u=r(n(2));t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;if(!e)throw new Error("Must have a Component");var r=n||document.body,i=function(){var e=document.createElement("div");return e.id="rc-portal-"+Math.ceil(100*Math.random()),e}();r.appendChild(i);var l=function(){return function(e,t){return!!e.contains(t)&&(e.removeChild(t),!0)}(r,i)};return u.default.render(o.default.createElement(e,Object.assign({close:l},t)),i),{close:l,parent:r,wrapper:i}}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),c=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),f=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return c(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0;var s=f(n(0)),p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,i(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(r=[{key:"handleClick",value:function(e){e.stopPropagation()}},{key:"render",value:function(){return s.default.createElement("div",{id:this.props.id,className:"_Modal",onClick:this.props.close.bind(this)},s.default.createElement("div",{className:"_ModalWrapper",onClick:this.handleClick.bind(this)},s.default.createElement("div",{className:"_ModalCloseIcon",onClick:this.props.close.bind(this)}),s.default.createElement("div",{className:"_ModalContent"},this.props.children)))}}])&&o(n.prototype,r),a&&o(n,a),t}(s.PureComponent);t.Modal=p,p.defaultProps={id:"_modal",close:function(){return console.error(new Error("Must have a close Function"))}}}]);