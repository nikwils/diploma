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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_callPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/callPopup */ \"./src/modules/callPopup.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_accordeonSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordeonSection */ \"./src/modules/accordeonSection.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollUp */ \"./src/modules/scrollUp.js\");\n\n\n\n\n\n //Заказать звонок\n\n(0,_modules_callPopup__WEBPACK_IMPORTED_MODULE_0__.default)(); //Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.default)(); //accordeon\n\n(0,_modules_accordeonSection__WEBPACK_IMPORTED_MODULE_2__.default)(); //скролл\n\n(0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n//# sourceURL=webpack://thesis_project/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeonSection.js":
/*!*****************************************!*\
  !*** ./src/modules/accordeonSection.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar accordeonSection = function accordeonSection() {\n  var accordeon = document.querySelector('.accordeon'),\n      elementsAccordeon = document.querySelectorAll('.accordeon > .element'),\n      elementContent = document.querySelectorAll('.accordeon > .element-content');\n  accordeon.addEventListener('click', function (event) {\n    var target = event.target;\n    console.log(target);\n\n    if (target.matches('.title')) {\n      elementsAccordeon.forEach(function (el) {\n        el.classList.remove('active');\n        el.lastElementChild.style.display = 'none';\n      });\n      target.closest('.element').classList.add('active');\n      target.closest('.element').lastElementChild.style.display = 'block';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeonSection);\n\n//# sourceURL=webpack://thesis_project/./src/modules/accordeonSection.js?");

/***/ }),

/***/ "./src/modules/callPopup.js":
/*!**********************************!*\
  !*** ./src/modules/callPopup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar callPopup = function callPopup() {\n  var popup = document.getElementById('callback'),\n      popupOverlay = document.querySelector('.modal-overlay'),\n      inputsCallback = document.querySelectorAll('#callback input');\n  console.log(inputsCallback);\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.matches('#modal-close')) {\n      popup.style.display = 'none';\n      popupOverlay.style.display = 'none';\n    }\n  });\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (!target.matches('#popup') && !target.closest('#callback')) {\n      popup.style.display = 'none';\n      popupOverlay.style.display = 'none';\n    }\n\n    console.log(target.matches('.col-sm-6'));\n\n    if (target.matches('#popup') || target.closest('.col-sm-6') || target.matches('.invert')) {\n      popup.style.display = 'block';\n      popupOverlay.style.display = 'block';\n    }\n\n    if (target.matches('.up')) {}\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callPopup);\n\n//# sourceURL=webpack://thesis_project/./src/modules/callPopup.js?");

/***/ }),

/***/ "./src/modules/scrollUp.js":
/*!*********************************!*\
  !*** ./src/modules/scrollUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar scrollUp = function scrollUp() {\n  var classUp = document.querySelector('.span-up'),\n      idUp = document.getElementById('up');\n  window.addEventListener('scroll', function () {\n    classUp.hidden = pageYOffset < document.documentElement.clientHeight;\n  });\n  classUp.addEventListener('click', function () {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n//# sourceURL=webpack://thesis_project/./src/modules/scrollUp.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar slider = function slider() {\n  var itemRelative = document.querySelectorAll('.item');\n\n  var autoSlider = function autoSlider() {\n    var i = 0;\n    setInterval(function () {\n      itemRelative[i].parentNode.appendChild(itemRelative[i]);\n      i++;\n\n      if (i === itemRelative.length) {\n        i = 0;\n      }\n    }, 3000);\n  };\n\n  autoSlider();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://thesis_project/./src/modules/slider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;