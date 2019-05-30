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

eval("const OctadeskIframe = __webpack_require__(/*! @octadesk/iframe */ \"./node_modules/@octadesk/iframe/index.js\");\n\n// create a instance of service with your app id\nconst octadeskIframe = new OctadeskIframe(\n  \"86f854c4-4582-e911-bc42-526af7764f64\"\n);\n\n// listen the octadesk events\nwindow.addEventListener(\"octadesk_onSendUserLogged\", function(e) {\n  const user = e.detail;\n  console.log(\"octadesk_onSendUserLogged: \", user);\n});\n\nwindow.addEventListener(\"octadesk_onSendUserToken\", function(e) {\n  const userToken = e.detail;\n  console.log(\"octadesk_onSendUserToken: \", userToken);\n});\n\nwindow.addEventListener(\"octadesk_onOpenTicket\", function(e) {\n  const ticket = e.detail;\n  console.log(\"octadesk_onOpenTicket: \", ticket);\n});\n\nwindow.addEventListener(\"octadesk_onOpenPerson\", function(e) {\n  const person = e.detail;\n  console.log(\"octadesk_onOpenPerson: \", person);\n});\n\nwindow.addEventListener(\"octadesk_onAfterSaveTicket\", function(e) {\n  const ticket = e.detail;\n  console.log(\"octadesk_onAfterSaveTicket: \", ticket);\n});\n\nwindow.addEventListener(\"octadesk_onAfterSavePerson\", function(e) {\n  const person = e.detail;\n  console.log(\"octadesk_onAfterSavePerson: \", person);\n});\n\n// tell octadesk to connect\noctadeskIframe.connect();\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./node_modules/@octadesk/iframe/index.js":
/*!************************************************!*\
  !*** ./node_modules/@octadesk/iframe/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src */ \"./node_modules/@octadesk/iframe/src/index.js\")\n\n\n//# sourceURL=webpack:///./node_modules/@octadesk/iframe/index.js?");

/***/ }),

/***/ "./node_modules/@octadesk/iframe/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@octadesk/iframe/src/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./listener */ \"./node_modules/@octadesk/iframe/src/listener.js\")\n\nclass IframeService {\n  constructor(appId) {\n    this.appId = appId\n  }\n\n  /**\n   * @private\n   */\n  _postEvent(event, payload) {\n    if (window && window.parent) {\n      window.parent.postMessage(Object.assign({ name: event, octaapp: true, id: this.appId }, payload || {}), '*')\n    }\n  }\n\n  /**\n   * Tell the Octadesk that the app is ready to receive logged user and token\n   */\n  connect() {\n    this._postEvent('appConnected')\n  }\n\n  /**\n   * Open a current company ticket\n   * @param {long} ticketNumber - Number of the ticket\n   */\n  openTicket(ticketNumber) {\n    this._postEvent('showTicket', { ticketNumber })\n  }\n\n  /**\n   * Open a new tab with the person\n   * @param {GUID} personId - Person Id\n   */\n  openPerson(personId) {\n    this._postEvent('openPerson', { personId })\n  }\n\n  /**\n   * Change the current page of Octadesk\n   * @param {string} url - A Octadesk internal path\n   */\n  goTo(url) {\n    this._postEvent('changeUrl', { url })\n  }\n}\n\nif (window) {\n  window.OctadeskIframeService = IframeService\n}\n\nmodule.exports = IframeService\n\n\n//# sourceURL=webpack:///./node_modules/@octadesk/iframe/src/index.js?");

/***/ }),

/***/ "./node_modules/@octadesk/iframe/src/listener.js":
/*!*******************************************************!*\
  !*** ./node_modules/@octadesk/iframe/src/listener.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const EVENT_METHOD_NAME = window && window.addEventListener ? 'addEventListener' : 'attachEvent'\nconst LISTENER_EVENT = window && window[EVENT_METHOD_NAME]\nconst EVENT_NAME = EVENT_METHOD_NAME === 'attachEvent' ? 'onmessage' : 'message'\n\nconst events = {\n  'open-ticket'(event) {\n    dispatchCustomEvent('octadesk_onOpenTicket', event.data.ticket)\n  },\n  'after-save-ticket'(event) {\n    dispatchCustomEvent('octadesk_onAfterSaveTicket', event.data.ticket)\n  },\n  'open-person'(event) {\n    dispatchCustomEvent('octadesk_onOpenPerson', event.data.person)\n  },\n  'after-save-person'(event) {\n    dispatchCustomEvent('octadesk_onAfterSavePerson', event.data.person)\n  }\n}\n\nLISTENER_EVENT(EVENT_NAME, function (event) {\n  if (event.data.userLogged) {\n    dispatchCustomEvent('octadesk_onSendUserLogged', event.data.userLogged)\n  }\n\n  if (event.data.userToken) {\n    dispatchCustomEvent('octadesk_onSendUserToken', event.data.userToken)\n  }\n\n  if (events[event.data.name]) {\n    events[event.data.name](event)\n  }\n}, false)\n\nconst dispatchCustomEvent = (eventName, data) => {\n  const CustomEvent = window.CustomEvent\n  const event = new CustomEvent(eventName, { detail: data })\n  window.dispatchEvent(event)\n}\n\n\n//# sourceURL=webpack:///./node_modules/@octadesk/iframe/src/listener.js?");

/***/ })

/******/ });