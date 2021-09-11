/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module1.js":
/*!********************!*\
  !*** ./module1.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module2 */ \"./module2.js\");\n/* harmony import */ var _module3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module3 */ \"./module3.js\");\n\n\nconsole.log(\"module1: \", (0,_module2__WEBPACK_IMPORTED_MODULE_0__.sum)(3, 4));\nconsole.log(\"%cmodule1:  \".concat(_module2__WEBPACK_IMPORTED_MODULE_0__.name), 'background:red; color:white');\nconsole.log(\"%cmodule1:  \".concat(_module2__WEBPACK_IMPORTED_MODULE_0__.person), 'background:purple; color:pink');\nconsole.log(\"module1: \", _module2__WEBPACK_IMPORTED_MODULE_0__.person);\nconsole.log(_module3__WEBPACK_IMPORTED_MODULE_1__.default.firstName);\nconsole.log(_module2__WEBPACK_IMPORTED_MODULE_0__.year);\n\n//# sourceURL=webpack:///./module1.js?");

/***/ }),

/***/ "./module2.js":
/*!********************!*\
  !*** ./module2.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sum\": () => (/* binding */ sum),\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"person\": () => (/* reexport safe */ _module3__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"year\": () => (/* reexport safe */ _module3__WEBPACK_IMPORTED_MODULE_0__.year)\n/* harmony export */ });\n/* harmony import */ var _module3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module3 */ \"./module3.js\");\n// import Person, {fullName} from \"./module3\";\n\n\nfunction sum(a, b) {\n  return a + b;\n}\n\nvar name = \"Tayebeh Safdari\"; // let person = new Person(\"Tayebeh\", \"Safdari\", 34, \"brown\");\n\nconsole.log(\"fullName: \", _module3__WEBPACK_IMPORTED_MODULE_0__.fullName.apply(_module3__WEBPACK_IMPORTED_MODULE_0__.default));\n\n\n//# sourceURL=webpack:///./module2.js?");

/***/ }),

/***/ "./module3.js":
/*!********************!*\
  !*** ./module3.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fullName\": () => (/* binding */ fullName),\n/* harmony export */   \"year\": () => (/* binding */ year),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Person = /*#__PURE__*/function () {\n  function Person(first, last, age, eye) {\n    _classCallCheck(this, Person);\n\n    console.log(\"module3: \", this);\n    this.firstName = first;\n    this.lastName = last;\n    this.age = age;\n    this.eyeColor = eye;\n  }\n\n  _createClass(Person, null, [{\n    key: \"fullName\",\n    value: function fullName() {\n      return \"\".concat(this.firstName, \" \").concat(this.lastName, \" is \").concat(this.age, \" years old.\");\n    }\n  }]);\n\n  return Person;\n}();\n\nvar fullName = function fullName() {\n  console.log(this);\n  return \"\".concat(this.firstName, \" \").concat(this.lastName);\n};\n\n\nvar year = 66; // export default Person;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Person(\"Tayebeh\", \"Safdari Doost\", 34, \"brown\"));\n\n//# sourceURL=webpack:///./module3.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./module1.js");
/******/ 	
/******/ })()
;