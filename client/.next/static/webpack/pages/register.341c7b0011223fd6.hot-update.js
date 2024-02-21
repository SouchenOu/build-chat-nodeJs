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

/***/ "./src/pages/register.jsx":
/*!********************************!*\
  !*** ./src/pages/register.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_usedFiles_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/usedFiles/Avatar */ \"./src/components/usedFiles/Avatar.jsx\");\n/* harmony import */ var _components_usedFiles_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/usedFiles/Input */ \"./src/components/usedFiles/Input.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction register() {\n    _s();\n    const [{ userInfo  }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const [fadeIn, setFadeIn] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(userInfo === null || userInfo === void 0 ? void 0 : userInfo.name, \"\");\n    const [about, setAbout] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"/default-avatar.jpg\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // Set an interval to toggle the fade-in effect every second\n        const intervalId = setInterval(()=>{\n            setFadeIn((prev)=>!prev);\n        }, 1000);\n        // Clear the interval when the component is unmounted\n        return ()=>clearInterval(intervalId);\n    }, []);\n    // console.log(\"user here-->\", userInfo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen w-screen flex-col gap-6 text-white\",\n        style: {\n            background: \"linear-gradient(to bottom, #2D132C,#EE4540, #C72C41, #801336)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        className: \"\".concat(fadeIn ? \"opacity-500 transition-opacity duration-1000 ease-in-out\" : \"opacity-0\"),\n                        src: \"/chat.png\",\n                        alt: \"chat\",\n                        height: 300,\n                        width: 300\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-4xl\",\n                        children: \"SgnU\"\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl\",\n                children: \"Create your profile\"\n            }, void 0, false, {\n                fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6 mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_usedFiles_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                name: \"display_name\",\n                                status: \"name\",\n                                setState: setName,\n                                label: true\n                            }, void 0, false, {\n                                fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_usedFiles_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                name: \"About\",\n                                status: \"about\",\n                                setState: setAbout,\n                                label: true\n                            }, void 0, false, {\n                                fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_usedFiles_Avatar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            type: \"xl\",\n                            image: image,\n                            setImage: setImage\n                        }, void 0, false, {\n                            fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n        lineNumber: 25,\n        columnNumber: 10\n    }, this);\n}\n_s(register, \"qqug/ck1mzU2ctNRuTBXfc8K+ww=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (register);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0ZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNGO0FBQ1M7QUFDM0I7QUFDb0I7QUFFbkQsU0FBU08sV0FBVzs7SUFDbEIsTUFBTSxDQUFDLEVBQUNDLFNBQVEsRUFBQyxDQUFDLEdBQUdOLHVFQUFnQkE7SUFFckMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUMsTUFBSyxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDRSxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVHLElBQUksRUFBRTtJQUNoRCxNQUFLLENBQUNFLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbEMsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUVWLCtDQUFRQSxDQUFDO0lBRWxDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsNERBQTREO1FBQzVELE1BQU1ZLGFBQWFDLFlBQVksSUFBTTtZQUNuQ1IsVUFBVSxDQUFDUyxPQUFTLENBQUNBO1FBQ3ZCLEdBQUc7UUFFSCxxREFBcUQ7UUFDckQsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFDTCx5Q0FBeUM7SUFDekMscUJBQU8sOERBQUNJO1FBQUlDLFdBQVU7UUFBZ0ZDLE9BQU87WUFBRUMsWUFBWTtRQUFnRTs7MEJBQ3pMLDhEQUFDSDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNuQixtREFBS0E7d0JBQUNtQixXQUFXLEdBQXFGLE9BQWxGYixTQUFTLDZEQUE2RCxXQUFXO3dCQUFJZ0IsS0FBSTt3QkFBWUMsS0FBSTt3QkFBT0MsUUFBUTt3QkFBS0MsT0FBTzs7Ozs7O2tDQUN6Siw4REFBQ0M7d0JBQUtQLFdBQVU7a0NBQVc7Ozs7Ozs7Ozs7OzswQkFJN0IsOERBQUNRO2dCQUFHUixXQUFVOzBCQUFXOzs7Ozs7MEJBQ3pCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ3JCLG1FQUFLQTtnQ0FBQ1UsTUFBSztnQ0FBZW9CLFFBQU87Z0NBQU9DLFVBQVVwQjtnQ0FBU3FCLEtBQUs7Ozs7OzswQ0FDakUsOERBQUNoQyxtRUFBS0E7Z0NBQUNVLE1BQUs7Z0NBQVFvQixRQUFPO2dDQUFRQyxVQUFVbEI7Z0NBQVVtQixLQUFLOzs7Ozs7Ozs7Ozs7a0NBRTVELDhEQUFDWjtrQ0FDQyw0RUFBQ3JCLG9FQUFNQTs0QkFBQ2tDLE1BQUs7NEJBQUtuQixPQUFPQTs0QkFBT0MsVUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXBEO0dBeENTVDs7UUFDY0wsbUVBQWdCQTs7O0FBeUN2QywrREFBZUssUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmVnaXN0ZXIuanN4P2M1N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF2YXRhciBmcm9tIFwiQC9jb21wb25lbnRzL3VzZWRGaWxlcy9BdmF0YXJcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiQC9jb21wb25lbnRzL3VzZWRGaWxlcy9JbnB1dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xuICBjb25zdCBbe3VzZXJJbmZvfV0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG5cbiAgY29uc3QgW2ZhZGVJbiwgc2V0RmFkZUluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3RbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSh1c2VySW5mbz8ubmFtZSwgXCJcIik7XG4gIGNvbnN0W2Fib3V0LCBzZXRBYm91dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV09IHVzZVN0YXRlKFwiL2RlZmF1bHQtYXZhdGFyLmpwZ1wiKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2V0IGFuIGludGVydmFsIHRvIHRvZ2dsZSB0aGUgZmFkZS1pbiBlZmZlY3QgZXZlcnkgc2Vjb25kXG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEZhZGVJbigocHJldikgPT4gIXByZXYpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgLy8gQ2xlYXIgdGhlIGludGVydmFsIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgfSwgW10pO1xuICAvLyBjb25zb2xlLmxvZyhcInVzZXIgaGVyZS0tPlwiLCB1c2VySW5mbyk7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuIGZsZXgtY29sIGdhcC02IHRleHQtd2hpdGVcIiAgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyRDEzMkMsI0VFNDU0MCwgI0M3MkM0MSwgIzgwMTMzNiknIH19PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxJbWFnZSBjbGFzc05hbWU9e2Ake2ZhZGVJbiA/ICdvcGFjaXR5LTUwMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMTAwMCBlYXNlLWluLW91dCcgOiAnb3BhY2l0eS0wJ31gfSBzcmM9XCIvY2hhdC5wbmdcIiBhbHQ9XCJjaGF0XCIgaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9Lz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNHhsXCI+U2duVTwvc3Bhbj5cblxuICAgIDwvZGl2PlxuICAgIFxuICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPkNyZWF0ZSB5b3VyIHByb2ZpbGU8L2gyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBtdC02XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwiZGlzcGxheV9uYW1lXCIgc3RhdHVzPVwibmFtZVwiIHNldFN0YXRlPXtzZXROYW1lfSBsYWJlbC8+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwiQWJvdXRcIiBzdGF0dXM9XCJhYm91dFwiIHNldFN0YXRlPXtzZXRBYm91dH0gbGFiZWwvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QXZhdGFyIHR5cGU9XCJ4bFwiIGltYWdlPXtpbWFnZX0gc2V0SW1hZ2U9e3NldEltYWdlfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICBcbiAgICA8L2Rpdj5cbiAgICBcbiAgICBcbiAgICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyO1xuIl0sIm5hbWVzIjpbIkF2YXRhciIsIklucHV0IiwidXNlU3RhdGVQcm92aWRlciIsIkltYWdlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInJlZ2lzdGVyIiwidXNlckluZm8iLCJmYWRlSW4iLCJzZXRGYWRlSW4iLCJuYW1lIiwic2V0TmFtZSIsImFib3V0Iiwic2V0QWJvdXQiLCJpbWFnZSIsInNldEltYWdlIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldiIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmQiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsInNwYW4iLCJoMiIsInN0YXR1cyIsInNldFN0YXRlIiwibGFiZWwiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/register.jsx\n"));

/***/ })

});