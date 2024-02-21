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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_usedFiles_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/usedFiles/Avatar */ \"./src/components/usedFiles/Avatar.jsx\");\n/* harmony import */ var _components_usedFiles_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/usedFiles/Input */ \"./src/components/usedFiles/Input.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction register() {\n    _s();\n    const [{ userInfo  }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const [fadeIn, setFadeIn] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(userInfo === null || userInfo === void 0 ? void 0 : userInfo.name, \"\");\n    const [about, setAbout] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"/default-avatar.jpg\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // Set an interval to toggle the fade-in effect every second\n        const intervalId = setInterval(()=>{\n            setFadeIn((prev)=>!prev);\n        }, 1000);\n        // Clear the interval when the component is unmounted\n        return ()=>clearInterval(intervalId);\n    }, []);\n    // console.log(\"user here-->\", userInfo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen w-screen flex-col gap-6 text-white\",\n        style: {\n            background: \"linear-gradient(to bottom, #2D132C,#EE4540, #C72C41, #801336)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        className: \"\".concat(fadeIn ? \"opacity-500 transition-opacity duration-1000 ease-in-out\" : \"opacity-0\"),\n                        src: \"/chat.png\",\n                        alt: \"chat\",\n                        height: 300,\n                        width: 300\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-4xl\",\n                        children: \"register\"\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl\",\n                    children: \"Create your profile\"\n                }, void 0, false, {\n                    fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6 mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_usedFiles_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            name: \"display_name\",\n                            status: \"name\",\n                            setState: setName,\n                            label: true\n                        }, void 0, false, {\n                            fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_usedFiles_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            name: \"About\",\n                            status: \"about\",\n                            setState: setAbout,\n                            label: true\n                        }, void 0, false, {\n                            fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/souchen/Desktop/chat/client/src/pages/register.jsx\",\n        lineNumber: 25,\n        columnNumber: 10\n    }, this);\n}\n_s(register, \"qqug/ck1mzU2ctNRuTBXfc8K+ww=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (register);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0ZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNGO0FBQ1M7QUFDM0I7QUFDb0I7QUFFbkQsU0FBU08sV0FBVzs7SUFDbEIsTUFBTSxDQUFDLEVBQUNDLFNBQVEsRUFBQyxDQUFDLEdBQUdOLHVFQUFnQkE7SUFFckMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUMsTUFBSyxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDRSxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVHLElBQUksRUFBRTtJQUNoRCxNQUFLLENBQUNFLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbEMsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUVWLCtDQUFRQSxDQUFDO0lBRWxDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsNERBQTREO1FBQzVELE1BQU1ZLGFBQWFDLFlBQVksSUFBTTtZQUNuQ1IsVUFBVSxDQUFDUyxPQUFTLENBQUNBO1FBQ3ZCLEdBQUc7UUFFSCxxREFBcUQ7UUFDckQsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFDTCx5Q0FBeUM7SUFDekMscUJBQU8sOERBQUNJO1FBQUlDLFdBQVU7UUFBZ0ZDLE9BQU87WUFBRUMsWUFBWTtRQUFnRTs7MEJBQ3pMLDhEQUFDSDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNuQixtREFBS0E7d0JBQUNtQixXQUFXLEdBQXFGLE9BQWxGYixTQUFTLDZEQUE2RCxXQUFXO3dCQUFJZ0IsS0FBSTt3QkFBWUMsS0FBSTt3QkFBT0MsUUFBUTt3QkFBS0MsT0FBTzs7Ozs7O2tDQUN6Siw4REFBQ0M7d0JBQUtQLFdBQVU7a0NBQVc7Ozs7Ozs7Ozs7OzswQkFHN0IsOERBQUNEOzBCQUNDLDRFQUFDUztvQkFBR1IsV0FBVTs4QkFBVzs7Ozs7Ozs7Ozs7MEJBRzNCLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDckIsbUVBQUtBOzRCQUFDVSxNQUFLOzRCQUFlb0IsUUFBTzs0QkFBT0MsVUFBVXBCOzRCQUFTcUIsS0FBSzs7Ozs7O3NDQUNqRSw4REFBQ2hDLG1FQUFLQTs0QkFBQ1UsTUFBSzs0QkFBUW9CLFFBQU87NEJBQVFDLFVBQVVsQjs0QkFBVW1CLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3BFO0dBeENTMUI7O1FBQ2NMLG1FQUFnQkE7OztBQXlDdkMsK0RBQWVLLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLmpzeD9jNTdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdmF0YXIgZnJvbSBcIkAvY29tcG9uZW50cy91c2VkRmlsZXMvQXZhdGFyXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIkAvY29tcG9uZW50cy91c2VkRmlsZXMvSW5wdXRcIjtcbmltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgY29uc3QgW3t1c2VySW5mb31dID0gdXNlU3RhdGVQcm92aWRlcigpO1xuXG4gIGNvbnN0IFtmYWRlSW4sIHNldEZhZGVJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0W25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUodXNlckluZm8/Lm5hbWUsIFwiXCIpO1xuICBjb25zdFthYm91dCwgc2V0QWJvdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdPSB1c2VTdGF0ZShcIi9kZWZhdWx0LWF2YXRhci5qcGdcIilcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNldCBhbiBpbnRlcnZhbCB0byB0b2dnbGUgdGhlIGZhZGUtaW4gZWZmZWN0IGV2ZXJ5IHNlY29uZFxuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRGYWRlSW4oKHByZXYpID0+ICFwcmV2KTtcbiAgICB9LCAxMDAwKTtcblxuICAgIC8vIENsZWFyIHRoZSBpbnRlcnZhbCB3aGVuIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gIH0sIFtdKTtcbiAgLy8gY29uc29sZS5sb2coXCJ1c2VyIGhlcmUtLT5cIiwgdXNlckluZm8pO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4LWNvbCBnYXAtNiB0ZXh0LXdoaXRlXCIgIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMkQxMzJDLCNFRTQ1NDAsICNDNzJDNDEsICM4MDEzMzYpJyB9fT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtgJHtmYWRlSW4gPyAnb3BhY2l0eS01MDAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTEwMDAgZWFzZS1pbi1vdXQnIDogJ29wYWNpdHktMCd9YH0gc3JjPVwiL2NoYXQucG5nXCIgYWx0PVwiY2hhdFwiIGhlaWdodD17MzAwfSB3aWR0aD17MzAwfS8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiPnJlZ2lzdGVyPC9zcGFuPlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPkNyZWF0ZSB5b3VyIHByb2ZpbGU8L2gyPlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02IG10LTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPElucHV0IG5hbWU9XCJkaXNwbGF5X25hbWVcIiBzdGF0dXM9XCJuYW1lXCIgc2V0U3RhdGU9e3NldE5hbWV9IGxhYmVsLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJBYm91dFwiIHN0YXR1cz1cImFib3V0XCIgc2V0U3RhdGU9e3NldEFib3V0fSBsYWJlbC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcblxuICAgICAgXG4gICAgPC9kaXY+XG4gICAgXG4gICAgXG4gICAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlcjtcbiJdLCJuYW1lcyI6WyJBdmF0YXIiLCJJbnB1dCIsInVzZVN0YXRlUHJvdmlkZXIiLCJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJyZWdpc3RlciIsInVzZXJJbmZvIiwiZmFkZUluIiwic2V0RmFkZUluIiwibmFtZSIsInNldE5hbWUiLCJhYm91dCIsInNldEFib3V0IiwiaW1hZ2UiLCJzZXRJbWFnZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJzcGFuIiwiaDIiLCJzdGF0dXMiLCJzZXRTdGF0ZSIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/register.jsx\n"));

/***/ })

});