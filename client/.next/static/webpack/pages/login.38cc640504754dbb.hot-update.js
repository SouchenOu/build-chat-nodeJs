"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.jsx":
/*!*****************************!*\
  !*** ./src/pages/login.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction login() {\n    _s();\n    const [fadeIn, setFadeIn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Set an interval to toggle the fade-in effect every second\n        const intervalId = setInterval(()=>{\n            setFadeIn((prev)=>!prev);\n        }, 1000);\n        // Clear the interval when the component is unmounted\n        return ()=>clearInterval(intervalId);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex justify-center items-center h-screen w-screen flex-col gap-6 bg-panel-header-background\",\n        style: {\n            background: \"linear-gradient(to bottom, #2D132C,#EE4540, #C72C41, #801336)\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center text-white gap-2 \".concat(fadeIn ? \"opacity-100 transition-opacity duration-1000 ease-in-out\" : \"opacity-0\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/chat.png\",\n                    alt: \"chat\",\n                    height: 300,\n                    width: 300\n                }, void 0, false, {\n                    fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-7xl\",\n                        children: \"soukeyChat\"\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n        lineNumber: 17,\n        columnNumber: 10\n    }, this);\n}\n_s(login, \"s7n23fSfhID5pVyFr0/DM12lDnA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQjtBQUNvQjtBQUVuRCxTQUFTSSxRQUFROztJQUNmLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTFDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsNERBQTREO1FBQzVELE1BQU1LLGFBQWFDLFlBQVksSUFBTTtZQUNuQ0YsVUFBVSxDQUFDRyxPQUFTLENBQUNBO1FBQ3ZCLEdBQUc7UUFFSCxxREFBcUQ7UUFDckQsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQ0k7UUFBSUMsV0FBVTtRQUFnR0MsT0FBTztZQUFFQyxZQUFZO1FBQWdFO2tCQUN2TSw0RUFBQ0g7WUFBSUMsV0FBVyxxREFBdUksT0FBbEZQLFNBQVMsNkRBQTZELFdBQVc7OzhCQUN0Siw4REFBQ0wsbURBQUtBO29CQUFDZSxLQUFJO29CQUFZQyxLQUFJO29CQUFPQyxRQUFRO29CQUFLQyxPQUFPOzs7Ozs7OEJBQ3RELDhEQUFDUDs4QkFDRCw0RUFBQ1E7d0JBQUtQLFdBQVU7a0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakM7R0F2QlNSO0FBeUJULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9sb2dpbi5qc3g/YzkzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIGxvZ2luKCkge1xuICBjb25zdCBbZmFkZUluLCBzZXRGYWRlSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2V0IGFuIGludGVydmFsIHRvIHRvZ2dsZSB0aGUgZmFkZS1pbiBlZmZlY3QgZXZlcnkgc2Vjb25kXG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEZhZGVJbigocHJldikgPT4gIXByZXYpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgLy8gQ2xlYXIgdGhlIGludGVydmFsIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4LWNvbCBnYXAtNiBiZy1wYW5lbC1oZWFkZXItYmFja2dyb3VuZFwiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMkQxMzJDLCNFRTQ1NDAsICNDNzJDNDEsICM4MDEzMzYpJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSBnYXAtMiAke2ZhZGVJbiA/ICdvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMTAwMCBlYXNlLWluLW91dCcgOiAnb3BhY2l0eS0wJ31gfT5cbiAgICAgIDxJbWFnZSBzcmM9XCIvY2hhdC5wbmdcIiBhbHQ9XCJjaGF0XCIgaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9Lz5cbiAgICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTd4bFwiPnNvdWtleUNoYXQ8L3NwYW4+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW47XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibG9naW4iLCJmYWRlSW4iLCJzZXRGYWRlSW4iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2IiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.jsx\n"));

/***/ })

});