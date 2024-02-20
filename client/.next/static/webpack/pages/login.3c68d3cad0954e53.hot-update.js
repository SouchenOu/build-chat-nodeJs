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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction login() {\n    _s();\n    const [fadeIn, setFadeIn] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // Set an interval to toggle the fade-in effect every second\n        const intervalId = setInterval(()=>{\n            setFadeIn((prev)=>!prev);\n        }, 1000);\n        // Clear the interval when the component is unmounted\n        return ()=>clearInterval(intervalId);\n    }, []);\n    const handleLogin = async ()=>{\n        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n        const { user: { displayName: name , email , photoUrl: profileImage  }  } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__.firebaseAuth, provider);\n        if (email) {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(check_user_Route, {\n                email\n            });\n        }\n        alert(\"login\");\n        console.log(\"user here-->\", user);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex justify-center items-center h-screen w-screen flex-col gap-6 bg-panel-header-background\",\n        style: {\n            background: \"linear-gradient(to bottom, #2D132C,#EE4540, #C72C41, #801336)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center text-white gap-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        className: \"\".concat(fadeIn ? \"opacity-500 transition-opacity duration-1000 ease-in-out\" : \"opacity-0\"),\n                        src: \"/chat.png\",\n                        alt: \"chat\",\n                        height: 300,\n                        width: 300\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-7xl\",\n                        children: \"soukeyChat\"\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex items-center justify-center gap-7 bg-search-input-container-background p-4 rounded-lg\",\n                onClick: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_6__.FcGoogle, {\n                        className: \"text-4xl\"\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white text-2xl\",\n                        children: \"SignIn\"\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n        lineNumber: 30,\n        columnNumber: 10\n    }, this);\n}\n_s(login, \"s7n23fSfhID5pVyFr0/DM12lDnA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDNUI7QUFDMEM7QUFDckM7QUFDb0I7QUFDWDtBQUV4QyxTQUFTUyxRQUFROztJQUNmLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTFDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsNERBQTREO1FBQzVELE1BQU1NLGFBQWFDLFlBQVksSUFBTTtZQUNuQ0YsVUFBVSxDQUFDRyxPQUFTLENBQUNBO1FBQ3ZCLEdBQUc7UUFFSCxxREFBcUQ7UUFDckQsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFDTCxNQUFNSSxjQUFjLFVBQVc7UUFDN0IsTUFBTUMsV0FBWSxJQUFJZiw2REFBa0JBO1FBQ3hDLE1BQU0sRUFBQ2dCLE1BQU8sRUFBQ0MsYUFBYUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFVBQVVDLGFBQVksRUFBQyxHQUFDLEdBQUcsTUFBTXBCLDhEQUFlQSxDQUFDSCwrREFBWUEsRUFBRWlCO1FBQ3hHLElBQUdJLE9BQU07WUFDUCxNQUFNLEVBQUNHLEtBQUksRUFBQyxHQUFHLE1BQU12QixrREFBVSxDQUFDeUIsa0JBQWtCO2dCQUFFTDtZQUFNO1FBQzVELENBQUM7UUFDRE0sTUFBTTtRQUNOQyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCWDtJQUU5QjtJQUNBLHFCQUFPLDhEQUFDWTtRQUFJQyxXQUFVO1FBQWdHQyxPQUFPO1lBQUVDLFlBQVk7UUFBZ0U7OzBCQUN2TSw4REFBQ0g7Z0JBQUlDLFdBQVk7O2tDQUNqQiw4REFBQzNCLG1EQUFLQTt3QkFBQzJCLFdBQVcsR0FBcUYsT0FBbEZyQixTQUFTLDZEQUE2RCxXQUFXO3dCQUFJd0IsS0FBSTt3QkFBWUMsS0FBSTt3QkFBT0MsUUFBUTt3QkFBS0MsT0FBTzs7Ozs7O2tDQUN6Siw4REFBQ0M7d0JBQUtQLFdBQVU7a0NBQVc7Ozs7Ozs7Ozs7OzswQkFHM0IsOERBQUNRO2dCQUFPUixXQUFVO2dCQUE2RlMsU0FBU3hCOztrQ0FDdEgsOERBQUNSLG9EQUFRQTt3QkFBQ3VCLFdBQVU7Ozs7OztrQ0FDcEIsOERBQUNPO3dCQUFLUCxXQUFVO2tDQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlDO0dBbkNTdEI7QUFxQ1QsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luLmpzeD9jOTNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpcmViYXNlQXV0aCB9IGZyb20gXCJAL3V0aWxzL0ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBHb29nbGVBdXRoUHJvdmlkZXIsIHNpZ25JbldpdGhQb3B1cCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGY0dvb2dsZX0gZnJvbSBcInJlYWN0LWljb25zL2ZjXCJcblxuZnVuY3Rpb24gbG9naW4oKSB7XG4gIGNvbnN0IFtmYWRlSW4sIHNldEZhZGVJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTZXQgYW4gaW50ZXJ2YWwgdG8gdG9nZ2xlIHRoZSBmYWRlLWluIGVmZmVjdCBldmVyeSBzZWNvbmRcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0RmFkZUluKChwcmV2KSA9PiAhcHJldik7XG4gICAgfSwgMTAwMCk7XG5cbiAgICAvLyBDbGVhciB0aGUgaW50ZXJ2YWwgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZFxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT57XG4gICAgY29uc3QgcHJvdmlkZXIgID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuICAgIGNvbnN0IHt1c2VyIDoge2Rpc3BsYXlOYW1lOiBuYW1lLCBlbWFpbCwgcGhvdG9Vcmw6IHByb2ZpbGVJbWFnZX19ID0gYXdhaXQgc2lnbkluV2l0aFBvcHVwKGZpcmViYXNlQXV0aCwgcHJvdmlkZXIpO1xuICAgIGlmKGVtYWlsKXtcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoY2hlY2tfdXNlcl9Sb3V0ZSwgeyBlbWFpbCB9KTtcbiAgICB9XG4gICAgYWxlcnQoXCJsb2dpblwiKTtcbiAgICBjb25zb2xlLmxvZyhcInVzZXIgaGVyZS0tPlwiLCB1c2VyKTtcblxuICB9XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4LWNvbCBnYXAtNiBiZy1wYW5lbC1oZWFkZXItYmFja2dyb3VuZFwiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMkQxMzJDLCNFRTQ1NDAsICNDNzJDNDEsICM4MDEzMzYpJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSBnYXAtMiBgfT5cbiAgICAgIDxJbWFnZSBjbGFzc05hbWU9e2Ake2ZhZGVJbiA/ICdvcGFjaXR5LTUwMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMTAwMCBlYXNlLWluLW91dCcgOiAnb3BhY2l0eS0wJ31gfSBzcmM9XCIvY2hhdC5wbmdcIiBhbHQ9XCJjaGF0XCIgaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9Lz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtN3hsXCI+c291a2V5Q2hhdDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC03IGJnLXNlYXJjaC1pbnB1dC1jb250YWluZXItYmFja2dyb3VuZCBwLTQgcm91bmRlZC1sZ1wiIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5cbiAgICAgICAgPEZjR29vZ2xlIGNsYXNzTmFtZT1cInRleHQtNHhsXCIvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtMnhsXCI+U2lnbkluPC9zcGFuPlxuXG4gICAgICA8L2J1dHRvbj5cbiAgICBcbiAgICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xuIl0sIm5hbWVzIjpbImZpcmViYXNlQXV0aCIsImF4aW9zIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmNHb29nbGUiLCJsb2dpbiIsImZhZGVJbiIsInNldEZhZGVJbiIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwiaGFuZGxlTG9naW4iLCJwcm92aWRlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJlbWFpbCIsInBob3RvVXJsIiwicHJvZmlsZUltYWdlIiwiZGF0YSIsInBvc3QiLCJjaGVja191c2VyX1JvdXRlIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.jsx\n"));

/***/ })

});