"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/components/usedFiles/Avatar.jsx":
/*!*********************************************!*\
  !*** ./src/components/usedFiles/Avatar.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    return;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center\",\n            children: [\n                type === \"sm\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-10 w-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: image,\n                        alt: \"avatar\",\n                        className: \"rounded-full\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/components/usedFiles/Avatar.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/souchen/Desktop/chat/client/src/components/usedFiles/Avatar.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 5\n                }, this),\n                type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative h-14 w-14\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: image,\n                        alt: \"avatar\",\n                        className: \"rounded-full\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/components/usedFiles/Avatar.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/souchen/Desktop/chat/client/src/components/usedFiles/Avatar.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/souchen/Desktop/chat/client/src/components/usedFiles/Avatar.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91c2VkRmlsZXMvQXZhdGFyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQjtBQUNMO0FBRTFCLFNBQVNFLE9BQU8sS0FBdUIsRUFBRTtRQUF6QixFQUFDQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFDLEdBQXZCO0lBQ2Q7a0JBQ0E7a0JBQ0ksNEVBQUNDO1lBQUlDLFdBQVU7O2dCQUVoQkosU0FBUyxzQkFDViw4REFBQ0c7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNQLG1EQUFLQTt3QkFBQ1EsS0FBS0o7d0JBQVFLLEtBQUk7d0JBQVNGLFdBQVU7d0JBQWVHLElBQUk7Ozs7Ozs7Ozs7O2dCQUc5RFAsU0FBUyxzQkFDUCw4REFBQ0c7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNQLG1EQUFLQTt3QkFBQ1EsS0FBS0o7d0JBQU9LLEtBQUk7d0JBQVNGLFdBQVU7d0JBQWVHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU92RTtLQW5CU1I7QUFxQlQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdXNlZEZpbGVzL0F2YXRhci5qc3g/ZDk5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQXZhdGFyKHt0eXBlLCBpbWFnZSwgc2V0SW1hZ2V9KSB7XG4gIHJldHVybiBcbiAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cblxuICAgIHt0eXBlID09PSBcInNtXCIgJiYgKCBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTAgdy0xMFwiPlxuICAgICAgPEltYWdlIHNyYz17aW1hZ2V9ICBhbHQ9XCJhdmF0YXJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiBmaWxsLz5cbiAgICA8L2Rpdj4pfVxuICAgIHtcbiAgICAgIHR5cGUgPT09IFwibGdcIiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xNCB3LTE0XCI+XG4gICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIGZpbGwvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gICAgPC9kaXY+XG4gIDwvPlxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJBdmF0YXIiLCJ0eXBlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/usedFiles/Avatar.jsx\n"));

/***/ })

});