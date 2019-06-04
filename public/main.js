/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const OctadeskIframe = __webpack_require__(/*! @octadesk/iframe */ \"./node_modules/@octadesk/iframe/dist/octadesk.iframe.min.js\");\r\n\r\n// create a instance of service with your app id\r\nwindow.addEventListener('load', function() {\r\n  const octadeskIframe = new OctadeskIframe(\r\n    'c454fade-8245-11e9-bc42-526af7764f64'\r\n  );\r\n\r\n  // listen the octadesk events\r\n  window.addEventListener('octadesk_onSendUserLogged', function(e) {\r\n    const user = e.detail;\r\n    console.log('octadesk_onSendUserLogged: ', user);\r\n  });\r\n\r\n  window.addEventListener('octadesk_onSendUserToken', function(e) {\r\n    const userToken = e.detail;\r\n    console.log('octadesk_onSendUserToken: ', userToken);\r\n  });\r\n\r\n  window.addEventListener('octadesk_onOpenTicket', function(e) {\r\n    const ticket = e.detail;\r\n    console.log('octadesk_onOpenTicket: ', ticket);\r\n  });\r\n\r\n  window.addEventListener('octadesk_onOpenPerson', function(e) {\r\n    const person = e.detail;\r\n    console.log('octadesk_onOpenPerson: ', person);\r\n  });\r\n\r\n  window.addEventListener('octadesk_onAfterSaveTicket', function(e) {\r\n    const ticket = e.detail;\r\n    console.log('octadesk_onAfterSaveTicket: ', ticket);\r\n  });\r\n\r\n  window.addEventListener('octadesk_onAfterSavePerson', function(e) {\r\n    const person = e.detail;\r\n    console.log('octadesk_onAfterSavePerson: ', person);\r\n  });\r\n\r\n  // tell octadesk to connect\r\n  octadeskIframe.connect();\r\n  octadeskIframe.openTicket(2054);  \r\n  console.log('App connected');\r\n});\r\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./node_modules/@octadesk/iframe/dist/octadesk.iframe.min.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@octadesk/iframe/dist/octadesk.iframe.min.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=0)}([function(e,t,n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,\"value\"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n(1);var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e),this.appId=t}var t,n,r;return t=e,(n=[{key:\"_postEvent\",value:function(e,t){window&&window.parent&&window.parent.postMessage(Object.assign({name:e,octaapp:!0,id:this.appId},t||{}),\"*\")}},{key:\"connect\",value:function(){this._postEvent(\"appConnected\")}},{key:\"openTicket\",value:function(e){this._postEvent(\"showTicket\",{ticketNumber:e})}},{key:\"openPerson\",value:function(e){this._postEvent(\"openPerson\",{personId:e})}},{key:\"goTo\",value:function(e){this._postEvent(\"changeUrl\",{url:e})}}])&&o(t.prototype,n),r&&o(t,r),e}();window&&(window.OctadeskIframeService=r),e.exports=r},function(e,t){function n(e){return(n=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e})(e)}Object.keys||(Object.keys=function(){\"use strict\";var e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable(\"toString\"),o=[\"toString\",\"toLocaleString\",\"valueOf\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"constructor\"],r=o.length;return function(i){if(\"object\"!==n(i)&&(\"function\"!=typeof i||null===i))throw new TypeError(\"Object.keys chamado de non-object\");var c,a,u=[];for(c in i)e.call(i,c)&&u.push(c);if(t)for(a=0;a<r;a++)e.call(i,o[a])&&u.push(o[a]);return u}}());var o=window&&window.addEventListener?\"addEventListener\":\"attachEvent\",r=window&&window[o],i={\"open-ticket\":function(e){c(\"octadesk_onOpenTicket\",e)},\"after-save-ticket\":function(e){c(\"octadesk_onAfterSaveTicket\",e)},\"open-person\":function(e){c(\"octadesk_onOpenPerson\",e)},\"after-save-person\":function(e){c(\"octadesk_onAfterSavePerson\",e)},userLogged:function(e){c(\"octadesk_onSendUserLogged\",e)},userToken:function(e){c(\"octadesk_onSendUserToken\",e)}};r(\"attachEvent\"===o?\"onmessage\":\"message\",function(e){Object.keys(e.data).forEach(function(t){i[t]&&i[t](e.data[t])})},!1);var c=function(e,t){var n=new(0,window.CustomEvent)(e,{detail:t});window.dispatchEvent(n)}}])});\n//# sourceMappingURL=octadesk.iframe.min.js.map\n\n//# sourceURL=webpack:///./node_modules/@octadesk/iframe/dist/octadesk.iframe.min.js?");

/***/ })

/******/ });