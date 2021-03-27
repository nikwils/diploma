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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_callPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/callPopup */ \"./src/modules/callPopup.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_accordeonSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordeonSection */ \"./src/modules/accordeonSection.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollUp */ \"./src/modules/scrollUp.js\");\n/* harmony import */ var _modules_sliderServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sliderServices */ \"./src/modules/sliderServices.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_dataValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dataValidation */ \"./src/modules/dataValidation.js\");\n\n\n\n\n\n\n\n\n //Заказать звонок\n\n(0,_modules_callPopup__WEBPACK_IMPORTED_MODULE_0__.default)(); //Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.default)(); //accordeon\n\n(0,_modules_accordeonSection__WEBPACK_IMPORTED_MODULE_2__.default)(); //скролл\n\n(0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_3__.default)(); //\n\n(0,_modules_sliderServices__WEBPACK_IMPORTED_MODULE_4__.default)(); //\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__.default)(); //\n\n(0,_modules_dataValidation__WEBPACK_IMPORTED_MODULE_6__.default)();\n\n//# sourceURL=webpack://thesis_project/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar callPopup = function callPopup() {\n  var popup = document.getElementById('callback'),\n      popupOverlay = document.querySelector('.modal-overlay');\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.matches('#modal-close')) {\n      popup.style.display = 'none';\n      popupOverlay.style.display = 'none';\n    }\n  });\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.matches('#modal-close') || target.closest('.modal-overlay')) {\n      popup.style.display = 'none';\n      popupOverlay.style.display = 'none';\n    }\n\n    if (target.matches('#popup') || target.closest('.col-sm-6') || target.matches('.invert')) {\n      popup.style.display = 'block';\n      popupOverlay.style.display = 'block';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callPopup);\n\n//# sourceURL=webpack://thesis_project/./src/modules/callPopup.js?");

/***/ }),

/***/ "./src/modules/dataValidation.js":
/*!***************************************!*\
  !*** ./src/modules/dataValidation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar dataValidation = function dataValidation() {\n  var popup = document.getElementById('callback'),\n      fio = document.getElementById('fio');\n  popup.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('#fio')) {\n      target.value = target.value.replace(/\\w/g, '');\n      fio.addEventListener('change', function () {\n        target.value = target.value.replace(/(^|\\s)\\S/g, function (a) {\n          return a.toUpperCase();\n        });\n      });\n    }\n\n    if (target.matches('#tel')) {\n      target.value = target.value.replace(/[\\D() ]/g, '');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataValidation);\n\n//# sourceURL=webpack://thesis_project/./src/modules/dataValidation.js?");

/***/ }),

/***/ "./src/modules/scrollUp.js":
/*!*********************************!*\
  !*** ./src/modules/scrollUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar scrollUp = function scrollUp() {\n  var classUp = document.querySelector('.span-up'),\n      idUp = document.getElementById('up');\n  window.addEventListener('scroll', function () {\n    classUp.hidden = pageYOffset < document.documentElement.clientHeight;\n  });\n  classUp.addEventListener('click', function () {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n//# sourceURL=webpack://thesis_project/./src/modules/scrollUp.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся';\n  var statusMessage = document.createElement('div');\n  var form = document.getElementById('form-callback'),\n      popup = document.getElementById('callback'),\n      popupOverlay = document.querySelector('.modal-overlay');\n  form.addEventListener('submit', function (event) {\n    statusMessage.style.cssText = 'font-size: 2rem;';\n    var target = event.target;\n    event.preventDefault();\n    statusMessage.hidden = false;\n    statusMessage.textContent = loadMessage;\n    form.appendChild(statusMessage);\n    var formData = new FormData(form);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = successMessage;\n\n      if (target.matches('#callback')) {\n        statusMessage.style.cssText = 'color: black;';\n        setTimeout(function () {\n          popup.style.display = 'none';\n          popupOverlay.style.display = 'none';\n        }, 6000);\n      }\n\n      setTimeout(function () {\n        statusMessage.hidden = true;\n      }, 4000);\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n  });\n\n  var postData = function postData(body) {\n    var inputs = document.querySelectorAll('input');\n    inputs.forEach(function (input) {\n      return input.value = '';\n    });\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n}; // sendForm();\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://thesis_project/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar slider = function slider() {\n  var itemRelative = document.querySelectorAll('.item');\n\n  var autoSlider = function autoSlider() {\n    var i = 0;\n    setInterval(function () {\n      itemRelative[i].parentNode.appendChild(itemRelative[i]);\n      i++;\n\n      if (i === itemRelative.length) {\n        i = 0;\n      }\n    }, 3000);\n  };\n\n  autoSlider();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://thesis_project/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/sliderServices.js":
/*!***************************************!*\
  !*** ./src/modules/sliderServices.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar sliderServices = function sliderServices() {\n  var servicesCarousel = document.querySelector('.services-carousel'),\n      servicesCarouselItems = document.querySelectorAll('.col-sm-6'),\n      servicesArrow = document.querySelector('.services-arrow'),\n      arrowLeft = document.querySelector('.arrow-left'),\n      arrowRight = document.querySelector('.arrow-right');\n  var currentSlide = 0;\n\n  var prevSlide = function prevSlide(el, i) {\n    if (i <= 1) {\n      arrowLeft.hidden = true;\n      el[0].hidden = false;\n      el[3].hidden = true;\n    }\n\n    arrowRight.hidden = false;\n\n    if (i > 1) {\n      el[i - 1].hidden = false;\n      el[i + 2].hidden = true;\n    }\n\n    ;\n    console.log(i);\n  };\n\n  var nextSlide = function nextSlide(el, i) {\n    arrowLeft.hidden = false;\n\n    if (i > 0) {\n      el[i - 1].hidden = true;\n      el[i + 2].hidden = false;\n\n      if (i === 3) {\n        el[i + 1].hidden = false;\n        el[i - 2].hidden = true;\n      }\n    }\n\n    if (i === 3) {\n      arrowRight.hidden = true;\n    }\n  };\n\n  servicesArrow.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n    prevSlide(servicesCarouselItems, currentSlide);\n\n    if (target.matches('.arrow-left')) {\n      currentSlide--;\n\n      if (currentSlide < 0) {\n        currentSlide = 0;\n      }\n    }\n\n    if (target.matches('.arrow-right')) {\n      currentSlide++;\n    }\n\n    nextSlide(servicesCarouselItems, currentSlide);\n    console.log(currentSlide);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderServices);\n\n//# sourceURL=webpack://thesis_project/./src/modules/sliderServices.js?");

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