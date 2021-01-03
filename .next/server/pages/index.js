module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Button; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.css */ \"./components/Button.module.css\");\n/* harmony import */ var _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/krishchelikavada/Projects/fetest/fetest/components/Button.js\";\n\nfunction Button() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    className: _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonStyle,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: _Button_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textContent,\n      children: \"Get Early Access\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi5qcz8wODg1Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlcyIsImJ1dHRvblN0eWxlIiwidGV4dENvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxNQUFULEdBQWlCO0FBQzVCLHNCQUNJO0FBQVEsYUFBUyxFQUFFQyx5REFBTSxDQUFDQyxXQUExQjtBQUFBLDJCQUNJO0FBQU0sZUFBUyxFQUFFRCx5REFBTSxDQUFDRSxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CdXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbigpe1xuICAgIHJldHVybihcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25TdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0Q29udGVudH0+R2V0IEVhcmx5IEFjY2Vzczwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Button.js\n");

/***/ }),

/***/ "./components/Button.module.css":
/*!**************************************!*\
  !*** ./components/Button.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"Button_textContent__1CFhP\",\n\t\"buttonStyle\": \"Button_buttonStyle__3McQy\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi5tb2R1bGUuY3NzPzg5YTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQnV0dG9uLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0ZXh0Q29udGVudFwiOiBcIkJ1dHRvbl90ZXh0Q29udGVudF9fMUNGaFBcIixcblx0XCJidXR0b25TdHlsZVwiOiBcIkJ1dHRvbl9idXR0b25TdHlsZV9fM01jUXlcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Button.module.css\n");

/***/ }),

/***/ "./components/HeroSection.js":
/*!***********************************!*\
  !*** ./components/HeroSection.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeroSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HeroSection_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroSection.module.css */ \"./components/HeroSection.module.css\");\n/* harmony import */ var _HeroSection_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HeroSection_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_Rectangle_20_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/Rectangle 20.svg */ \"./public/Rectangle 20.svg\");\n/* harmony import */ var _public_Rectangle_20_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_Rectangle_20_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_Rectangle_21_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/Rectangle 21.svg */ \"./public/Rectangle 21.svg\");\n/* harmony import */ var _public_Rectangle_21_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_Rectangle_21_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.js\");\n\nvar _jsxFileName = \"/Users/krishchelikavada/Projects/fetest/fetest/components/HeroSection.js\";\n\n\n\n\nfunction HeroSection(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _HeroSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.all,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _HeroSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _HeroSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n        children: \"Stay Engaged In Your Meetings\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _HeroSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle,\n        style: {\n          marginBottom: \"30px\"\n        },\n        children: \"This is just the subtitle part. I can go on writing and writing and writing.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: _HeroSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.blob1,\n      src: _public_Rectangle_20_svg__WEBPACK_IMPORTED_MODULE_2___default.a\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: _HeroSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.blob2,\n      src: _public_Rectangle_21_svg__WEBPACK_IMPORTED_MODULE_3___default.a\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uLmpzPzM2MGYiXSwibmFtZXMiOlsiSGVyb1NlY3Rpb24iLCJwcm9wcyIsInN0eWxlcyIsImFsbCIsImNvbnRlbnQiLCJ0aXRsZSIsInN1YnRpdGxlIiwibWFyZ2luQm90dG9tIiwiYmxvYjEiLCJibG9iMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDdkMsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLEdBQXZCO0FBQUEsNEJBRUk7QUFBSyxlQUFTLEVBQUVELDhEQUFNLENBQUNFLE9BQXZCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFRiw4REFBTSxDQUFDRyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFFSCw4REFBTSxDQUFDSSxRQUF2QjtBQUFpQyxhQUFLLEVBQUU7QUFBQ0Msc0JBQVksRUFBQztBQUFkLFNBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFRSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFhSTtBQUFLLGVBQVMsRUFBRUwsOERBQU0sQ0FBQ00sS0FBdkI7QUFBOEIsU0FBRyxFQUFFQSwrREFBS0E7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKLGVBY0k7QUFBSyxlQUFTLEVBQUVOLDhEQUFNLENBQUNPLEtBQXZCO0FBQThCLFNBQUcsRUFBRUEsK0RBQUtBO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1CSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVyb1NlY3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlcm9TZWN0aW9uLm1vZHVsZS5jc3NcIlxuaW1wb3J0IGJsb2IxIGZyb20gXCIuLi9wdWJsaWMvUmVjdGFuZ2xlIDIwLnN2Z1wiO1xuaW1wb3J0IGJsb2IyIGZyb20gXCIuLi9wdWJsaWMvUmVjdGFuZ2xlIDIxLnN2Z1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvU2VjdGlvbihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxsfT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgU3RheSBFbmdhZ2VkIEluIFlvdXIgTWVldGluZ3NcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMzBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgIFRoaXMgaXMganVzdCB0aGUgc3VidGl0bGUgcGFydC4gSSBjYW4gZ28gb24gd3JpdGluZyBhbmQgd3JpdGluZyBhbmQgd3JpdGluZy5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmJsb2IxfSBzcmM9e2Jsb2IxfS8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmJsb2IyfSBzcmM9e2Jsb2IyfS8+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HeroSection.js\n");

/***/ }),

/***/ "./components/HeroSection.module.css":
/*!*******************************************!*\
  !*** ./components/HeroSection.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"all\": \"HeroSection_all__3uIRq\",\n\t\"content\": \"HeroSection_content__7DeNG\",\n\t\"blob1\": \"HeroSection_blob1__3alUo\",\n\t\"blob2\": \"HeroSection_blob2__dsDVZ\",\n\t\"title\": \"HeroSection_title__1QB_5\",\n\t\"subtitle\": \"HeroSection_subtitle__2IR1d\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uLm1vZHVsZS5jc3M/OTIzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhbGxcIjogXCJIZXJvU2VjdGlvbl9hbGxfXzN1SVJxXCIsXG5cdFwiY29udGVudFwiOiBcIkhlcm9TZWN0aW9uX2NvbnRlbnRfXzdEZU5HXCIsXG5cdFwiYmxvYjFcIjogXCJIZXJvU2VjdGlvbl9ibG9iMV9fM2FsVW9cIixcblx0XCJibG9iMlwiOiBcIkhlcm9TZWN0aW9uX2Jsb2IyX19kc0RWWlwiLFxuXHRcInRpdGxlXCI6IFwiSGVyb1NlY3Rpb25fdGl0bGVfXzFRQl81XCIsXG5cdFwic3VidGl0bGVcIjogXCJIZXJvU2VjdGlvbl9zdWJ0aXRsZV9fMklSMWRcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HeroSection.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.js\");\n/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HeroSection */ \"./components/HeroSection.js\");\n\nvar _jsxFileName = \"/Users/krishchelikavada/Projects/fetest/fetest/pages/index.js\";\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_HeroSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUEsMkJBQ0kscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9IZXJvU2VjdGlvblwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8SGVyb1NlY3Rpb24vPlxuXG5cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./public/Rectangle 20.svg":
/*!*********************************!*\
  !*** ./public/Rectangle 20.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIzMCIgaGVpZ2h0PSI3NjAiIHZpZXdCb3g9IjAgMCAxMjMwIDc2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTS0zMjUuNDk3IC05NS44NzY4Qy0zMzguNjUgLTU3OS45NDggNTQ4LjU0OCAtNzU4Ljk4IDgyOC40NDggLTM2My44MTdDOTM1LjEyNyAtMjEzLjIwOSAxMjE2LjIyIC0xNjYuMTMxIDExNDAuNDUgNTcuMjQ1MUM5ODQuOTAzIDUxNS44MzMgNDg5Ljc5MyA4OTguNzI3IDIyNC42MDMgNDkzLjU0NUM5NS40Mjk3IDI5Ni4xODIgLTMxNy40MjggMjAxLjA4OSAtMzI1LjQ5NyAtOTUuODc2OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9Ii0yNzUuMzM5IiB5MT0iLTIzMi43ODQiIHgyPSIxMTUxLjEzIiB5Mj0iOTc1LjIwNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDAwNTIyIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzM1NTg3NSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvUmVjdGFuZ2xlIDIwLnN2Zz9mNDBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQyIsImZpbGUiOiIuL3B1YmxpYy9SZWN0YW5nbGUgMjAuc3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1USXpNQ0lnYUdWcFoyaDBQU0kzTmpBaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TWpNd0lEYzJNQ0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWkQwaVRTMHpNalV1TkRrM0lDMDVOUzQ0TnpZNFF5MHpNemd1TmpVZ0xUVTNPUzQ1TkRnZ05UUTRMalUwT0NBdE56VTRMams0SURneU9DNDBORGdnTFRNMk15NDRNVGRET1RNMUxqRXlOeUF0TWpFekxqSXdPU0F4TWpFMkxqSXlJQzB4TmpZdU1UTXhJREV4TkRBdU5EVWdOVGN1TWpRMU1VTTVPRFF1T1RBeklEVXhOUzQ0TXpNZ05EZzVMamM1TXlBNE9UZ3VOekkzSURJeU5DNDJNRE1nTkRrekxqVTBOVU01TlM0ME1qazNJREk1Tmk0eE9ESWdMVE14Tnk0ME1qZ2dNakF4TGpBNE9TQXRNekkxTGpRNU55QXRPVFV1T0RjMk9Gb2lJR1pwYkd3OUluVnliQ2dqY0dGcGJuUXdYMnhwYm1WaGNpa2lMejRLUEdSbFpuTStDanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpY0dGcGJuUXdYMnhwYm1WaGNpSWdlREU5SWkweU56VXVNek01SWlCNU1UMGlMVEl6TWk0M09EUWlJSGd5UFNJeE1UVXhMakV6SWlCNU1qMGlPVGMxTGpJd055SWdaM0poWkdsbGJuUlZibWwwY3owaWRYTmxjbE53WVdObFQyNVZjMlVpUGdvOGMzUnZjQ0J6ZEc5d0xXTnZiRzl5UFNJak1EQXdOVEl5SWk4K0NqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJek0xTlRnM05TSXZQZ284TDJ4cGJtVmhja2R5WVdScFpXNTBQZ284TDJSbFpuTStDand2YzNablBnbz1cIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/Rectangle 20.svg\n");

/***/ }),

/***/ "./public/Rectangle 21.svg":
/*!*********************************!*\
  !*** ./public/Rectangle 21.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0OCIgaGVpZ2h0PSI5MDMiIHZpZXdCb3g9IjAgMCAxMjQ4IDkwMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUyLjYxNTQgNDcuMTIzMkMzOS40NjI1IC00MzYuOTQ4IDkyNi42NiAtNjE1Ljk4IDEyMDYuNTYgLTIyMC44MTdDMTMxMy4yNCAtNzAuMjA4OCAxNTk0LjMzIC0yMy4xMzE1IDE1MTguNTYgMjAwLjI0NUMxMzYzLjAyIDY1OC44MzMgODY3LjkwNiAxMDQxLjczIDYwMi43MTYgNjM2LjU0NUM0NzMuNTQyIDQzOS4xODIgNjAuNjg0NCAzNDQuMDg5IDUyLjYxNTQgNDcuMTIzMloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjMzLjU4MTYiIHkxPSItMzExLjg5IiB4Mj0iMjUyNy42NSIgeTI9IjM4Ni4wMjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzM1NTg3NSIvPgo8c3RvcCBvZmZzZXQ9IjAuNTgwNDk0IiBzdG9wLWNvbG9yPSIjMUYzNjUzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzM1NTg3NSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvUmVjdGFuZ2xlIDIxLnN2Zz9jYTlkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQyIsImZpbGUiOiIuL3B1YmxpYy9SZWN0YW5nbGUgMjEuc3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1USTBPQ0lnYUdWcFoyaDBQU0k1TURNaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TWpRNElEa3dNeUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWkQwaVRUVXlMall4TlRRZ05EY3VNVEl6TWtNek9TNDBOakkxSUMwME16WXVPVFE0SURreU5pNDJOaUF0TmpFMUxqazRJREV5TURZdU5UWWdMVEl5TUM0NE1UZERNVE14TXk0eU5DQXROekF1TWpBNE9DQXhOVGswTGpNeklDMHlNeTR4TXpFMUlERTFNVGd1TlRZZ01qQXdMakkwTlVNeE16WXpMakF5SURZMU9DNDRNek1nT0RZM0xqa3dOaUF4TURReExqY3pJRFl3TWk0M01UWWdOak0yTGpVME5VTTBOek11TlRReUlEUXpPUzR4T0RJZ05qQXVOamcwTkNBek5EUXVNRGc1SURVeUxqWXhOVFFnTkRjdU1USXpNbG9pSUdacGJHdzlJblZ5YkNnamNHRnBiblF3WDJ4cGJtVmhjaWtpTHo0S1BHUmxabk0rQ2p4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaWNHRnBiblF3WDJ4cGJtVmhjaUlnZURFOUlqTXpMalU0TVRZaUlIa3hQU0l0TXpFeExqZzVJaUI0TWowaU1qVXlOeTQyTlNJZ2VUSTlJak00Tmk0d01qWWlJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWo0S1BITjBiM0FnYzNSdmNDMWpiMnh2Y2owaUl6TTFOVGczTlNJdlBnbzhjM1J2Y0NCdlptWnpaWFE5SWpBdU5UZ3dORGswSWlCemRHOXdMV052Ykc5eVBTSWpNVVl6TmpVeklpOCtDanh6ZEc5d0lHOW1abk5sZEQwaU1TSWdjM1J2Y0MxamIyeHZjajBpSXpNMU5UZzNOU0l2UGdvOEwyeHBibVZoY2tkeVlXUnBaVzUwUGdvOEwyUmxabk0rQ2p3dmMzWm5QZ289XCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/Rectangle 21.svg\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });