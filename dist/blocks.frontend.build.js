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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_alert_msg_block_frontend__ = __webpack_require__(20);\n/**\n * All blocks Frontend imported here.\n */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzLWZyb250ZW5kLmpzP2Y0NWIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBbGwgYmxvY2tzIEZyb250ZW5kIGltcG9ydGVkIGhlcmUuXG4gKi9cbmltcG9ydCAnLi9ibG9ja3MvYWxlcnQtbXNnLWJsb2NrL2Zyb250ZW5kJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MtZnJvbnRlbmQuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_dom_ready__ = __webpack_require__(21);\n\n\n/**\n * Permanently hide the dismissible alert message if clicked.\n */\nObject(__WEBPACK_IMPORTED_MODULE_0__wordpress_dom_ready__[\"a\" /* default */])(function () {\n\tvar elements = document.querySelectorAll('.dgb-alert.dismissible-true[data-messageId]');\n\telements.forEach(function (el) {\n\t\tvar messageId = el.getAttribute('data-messageId');\n\t\tif (!localStorage.getItem('dgb-alert-' + messageId)) {\n\t\t\tel.style.display = 'block';\n\t\t}\n\t\tel.querySelector('.close-button').addEventListener('click', function () {\n\t\t\tlocalStorage.setItem('dgb-alert-' + messageId, 1);\n\t\t\tel.style.display = '';\n\t\t});\n\t});\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2FsZXJ0LW1zZy1ibG9jay9mcm9udGVuZC5qcz9jYjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb21SZWFkeSBmcm9tICdAd29yZHByZXNzL2RvbS1yZWFkeSc7XG5cbi8qKlxuICogUGVybWFuZW50bHkgaGlkZSB0aGUgZGlzbWlzc2libGUgYWxlcnQgbWVzc2FnZSBpZiBjbGlja2VkLlxuICovXG5kb21SZWFkeShmdW5jdGlvbiAoKSB7XG5cdHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZ2ItYWxlcnQuZGlzbWlzc2libGUtdHJ1ZVtkYXRhLW1lc3NhZ2VJZF0nKTtcblx0ZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcblx0XHR2YXIgbWVzc2FnZUlkID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW1lc3NhZ2VJZCcpO1xuXHRcdGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RnYi1hbGVydC0nICsgbWVzc2FnZUlkKSkge1xuXHRcdFx0ZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0fVxuXHRcdGVsLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZ2ItYWxlcnQtJyArIG1lc3NhZ2VJZCwgMSk7XG5cdFx0XHRlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0fSk7XG5cdH0pO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2FsZXJ0LW1zZy1ibG9jay9mcm9udGVuZC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * Specify a function to execute when the DOM is fully loaded.\n *\n * @param {Function} callback A function to execute after the DOM is ready.\n *\n * @return {void}\n */\nvar domReady = function domReady(callback) {\n  if (document.readyState === 'complete' || // DOMContentLoaded + Images/Styles/etc loaded, so we call directly.\n  document.readyState === 'interactive' // DOMContentLoaded fires at this point, so we call directly.\n  ) {\n      return callback();\n    } // DOMContentLoaded has not fired yet, delay callback until then.\n\n\n  document.addEventListener('DOMContentLoaded', callback);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (domReady);\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdvcmRwcmVzcy9kb20tcmVhZHkvYnVpbGQtbW9kdWxlL2luZGV4LmpzP2E3NjMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTcGVjaWZ5IGEgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBET00gaXMgZnVsbHkgbG9hZGVkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEEgZnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciB0aGUgRE9NIGlzIHJlYWR5LlxuICpcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbnZhciBkb21SZWFkeSA9IGZ1bmN0aW9uIGRvbVJlYWR5KGNhbGxiYWNrKSB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IC8vIERPTUNvbnRlbnRMb2FkZWQgKyBJbWFnZXMvU3R5bGVzL2V0YyBsb2FkZWQsIHNvIHdlIGNhbGwgZGlyZWN0bHkuXG4gIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgLy8gRE9NQ29udGVudExvYWRlZCBmaXJlcyBhdCB0aGlzIHBvaW50LCBzbyB3ZSBjYWxsIGRpcmVjdGx5LlxuICApIHtcbiAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgIH0gLy8gRE9NQ29udGVudExvYWRlZCBoYXMgbm90IGZpcmVkIHlldCwgZGVsYXkgY2FsbGJhY2sgdW50aWwgdGhlbi5cblxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYWxsYmFjayk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21SZWFkeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL0B3b3JkcHJlc3MvZG9tLXJlYWR5L2J1aWxkLW1vZHVsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n");

/***/ })

/******/ });