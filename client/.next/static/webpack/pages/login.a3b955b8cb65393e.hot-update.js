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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction login() {\n    _s();\n    const [fadeIn, setFadeIn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Set an interval to toggle the fade-in effect every second\n        const intervalId = setInterval(()=>{\n            setFadeIn((prev)=>!prev);\n        }, 1000);\n        // Clear the interval when the component is unmounted\n        return ()=>clearInterval(intervalId);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex justify-center items-center h-screen w-screen flex-col gap-6 bg-panel-header-background\",\n        style: {\n            background: \"linear-gradient(to bottom, #2D132C,#EE4540, #C72C41, #801336)\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center text-white gap-2 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"\".concat(fadeIn ? \"opacity-500 transition-opacity duration-1000 ease-in-out\" : \"opacity-0\"),\n                    src: \"/chat.png\",\n                    alt: \"chat\",\n                    height: 300,\n                    width: 300\n                }, void 0, false, {\n                    fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-7xl\",\n                    children: \"soukeyChat\"\n                }, void 0, false, {\n                    fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_3__.FcGoogle, {\n                            className: \"text-4xl\"\n                        }, void 0, false, {\n                            fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-white text-2xl\",\n                            children: \"SignIn\"\n                        }, void 0, false, {\n                            fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n        lineNumber: 18,\n        columnNumber: 10\n    }, this);\n}\n_s(login, \"s7n23fSfhID5pVyFr0/DM12lDnA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDb0I7QUFDWDtBQUV4QyxTQUFTSyxRQUFROztJQUNmLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTFDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsNERBQTREO1FBQzVELE1BQU1NLGFBQWFDLFlBQVksSUFBTTtZQUNuQ0YsVUFBVSxDQUFDRyxPQUFTLENBQUNBO1FBQ3ZCLEdBQUc7UUFFSCxxREFBcUQ7UUFDckQsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQ0k7UUFBSUMsV0FBVTtRQUFnR0MsT0FBTztZQUFFQyxZQUFZO1FBQWdFO2tCQUN2TSw0RUFBQ0g7WUFBSUMsV0FBWTs7OEJBQ2pCLDhEQUFDYixtREFBS0E7b0JBQUNhLFdBQVcsR0FBcUYsT0FBbEZQLFNBQVMsNkRBQTZELFdBQVc7b0JBQUlVLEtBQUk7b0JBQVlDLEtBQUk7b0JBQU9DLFFBQVE7b0JBQUtDLE9BQU87Ozs7Ozs4QkFDekosOERBQUNDO29CQUFLUCxXQUFVOzhCQUFXOzs7Ozs7OEJBQzNCLDhEQUFDUTtvQkFBT1IsV0FBVTs7c0NBQ2hCLDhEQUFDVCxvREFBUUE7NEJBQUNTLFdBQVU7Ozs7OztzQ0FDcEIsOERBQUNPOzRCQUFLUCxXQUFVO3NDQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUM7R0F6QlNSO0FBMkJULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9sb2dpbi5qc3g/YzkzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGY0dvb2dsZX0gZnJvbSBcInJlYWN0LWljb25zL2ZjXCJcblxuZnVuY3Rpb24gbG9naW4oKSB7XG4gIGNvbnN0IFtmYWRlSW4sIHNldEZhZGVJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTZXQgYW4gaW50ZXJ2YWwgdG8gdG9nZ2xlIHRoZSBmYWRlLWluIGVmZmVjdCBldmVyeSBzZWNvbmRcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0RmFkZUluKChwcmV2KSA9PiAhcHJldik7XG4gICAgfSwgMTAwMCk7XG5cbiAgICAvLyBDbGVhciB0aGUgaW50ZXJ2YWwgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZFxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuIGZsZXgtY29sIGdhcC02IGJnLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyRDEzMkMsI0VFNDU0MCwgI0M3MkM0MSwgIzgwMTMzNiknIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIGdhcC0yIGB9PlxuICAgICAgPEltYWdlIGNsYXNzTmFtZT17YCR7ZmFkZUluID8gJ29wYWNpdHktNTAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0xMDAwIGVhc2UtaW4tb3V0JyA6ICdvcGFjaXR5LTAnfWB9IHNyYz1cIi9jaGF0LnBuZ1wiIGFsdD1cImNoYXRcIiBoZWlnaHQ9ezMwMH0gd2lkdGg9ezMwMH0vPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC03eGxcIj5zb3VrZXlDaGF0PC9zcGFuPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IFwiPlxuICAgICAgICA8RmNHb29nbGUgY2xhc3NOYW1lPVwidGV4dC00eGxcIi8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGxcIj5TaWduSW48L3NwYW4+XG5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW47XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmNHb29nbGUiLCJsb2dpbiIsImZhZGVJbiIsInNldEZhZGVJbiIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/login.jsx\n"));

/***/ })

});