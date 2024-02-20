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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction login() {\n    _s();\n    const [fadeIn, setFadeIn] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // Set an interval to toggle the fade-in effect every second\n        const intervalId = setInterval(()=>{\n            setFadeIn((prev)=>!prev);\n        }, 1000);\n        // Clear the interval when the component is unmounted\n        return ()=>clearInterval(intervalId);\n    }, []);\n    const handleLogin = async ()=>{\n        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n        const { user: { displayName: name , email , photoUrl: profileImage  }  } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, provider);\n        console.log(\"email here-->\", email);\n        console.log(\"path\", _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_1__.check_user_Route);\n        if (email) {\n            const result = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_1__.check_user_Route, {\n                email\n            });\n            console.log(\"data here-->\", {\n                data\n            });\n        }\n    // alert(\"login\");\n    // console.log(\"user here-->\", user);\n    // console.log(\"data here-->\", data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex justify-center items-center h-screen w-screen flex-col gap-6 bg-panel-header-background\",\n        style: {\n            background: \"linear-gradient(to bottom, #2D132C,#EE4540, #C72C41, #801336)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center text-white gap-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        className: \"\".concat(fadeIn ? \"opacity-500 transition-opacity duration-1000 ease-in-out\" : \"opacity-0\"),\n                        src: \"/chat.png\",\n                        alt: \"chat\",\n                        height: 300,\n                        width: 300\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-7xl\",\n                        children: \"soukeyChat\"\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex items-center justify-center gap-7 bg-search-input-container-background p-4 rounded-lg\",\n                onClick: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_7__.FcGoogle, {\n                        className: \"text-4xl\"\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white text-2xl\",\n                        children: \"SignIn\"\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n        lineNumber: 35,\n        columnNumber: 10\n    }, this);\n}\n_s(login, \"s7n23fSfhID5pVyFr0/DM12lDnA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ0M7QUFDNUI7QUFDMEM7QUFDckM7QUFDb0I7QUFDWDtBQUV4QyxTQUFTVSxRQUFROztJQUNmLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTFDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsNERBQTREO1FBQzVELE1BQU1NLGFBQWFDLFlBQVksSUFBTTtZQUNuQ0YsVUFBVSxDQUFDRyxPQUFTLENBQUNBO1FBQ3ZCLEdBQUc7UUFFSCxxREFBcUQ7UUFDckQsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFDTCxNQUFNSSxjQUFjLFVBQVc7UUFDN0IsTUFBTUMsV0FBWSxJQUFJZiw2REFBa0JBO1FBQ3hDLE1BQU0sRUFBQ2dCLE1BQU8sRUFBQ0MsYUFBYUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFVBQVVDLGFBQVksRUFBQyxHQUFDLEdBQUcsTUFBTXBCLDhEQUFlQSxDQUFDSCwrREFBWUEsRUFBRWlCO1FBQ3hHTyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCSjtRQUM3QkcsUUFBUUMsR0FBRyxDQUFDLFFBQVExQiw4REFBZ0JBO1FBQ3BDLElBQUdzQixPQUFNO1lBQ1AsTUFBTUssU0FBUyxNQUFNekIsa0RBQVUsQ0FBQ0YsOERBQWdCQSxFQUFFO2dCQUFFc0I7WUFBTTtZQUMxREcsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQjtnQkFBQ0c7WUFBSTtRQUNuQyxDQUFDO0lBQ0Qsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxxQ0FBcUM7SUFFdkM7SUFDQSxxQkFBTyw4REFBQ0M7UUFBSUMsV0FBVTtRQUFnR0MsT0FBTztZQUFFQyxZQUFZO1FBQWdFOzswQkFDdk0sOERBQUNIO2dCQUFJQyxXQUFZOztrQ0FDakIsOERBQUMxQixtREFBS0E7d0JBQUMwQixXQUFXLEdBQXFGLE9BQWxGcEIsU0FBUyw2REFBNkQsV0FBVzt3QkFBSXVCLEtBQUk7d0JBQVlDLEtBQUk7d0JBQU9DLFFBQVE7d0JBQUtDLE9BQU87Ozs7OztrQ0FDekosOERBQUNDO3dCQUFLUCxXQUFVO2tDQUFXOzs7Ozs7Ozs7Ozs7MEJBRzNCLDhEQUFDUTtnQkFBT1IsV0FBVTtnQkFBNkZTLFNBQVN2Qjs7a0NBQ3RILDhEQUFDUixvREFBUUE7d0JBQUNzQixXQUFVOzs7Ozs7a0NBQ3BCLDhEQUFDTzt3QkFBS1AsV0FBVTtrQ0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QztHQXZDU3JCO0FBeUNULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9sb2dpbi5qc3g/YzkzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGVja191c2VyX1JvdXRlIH0gZnJvbSBcIkAvdXRpbHMvQXBpUm91dGVzXCI7XG5pbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tIFwiQC91dGlscy9GaXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgR29vZ2xlQXV0aFByb3ZpZGVyLCBzaWduSW5XaXRoUG9wdXAgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmNHb29nbGV9IGZyb20gXCJyZWFjdC1pY29ucy9mY1wiXG5cbmZ1bmN0aW9uIGxvZ2luKCkge1xuICBjb25zdCBbZmFkZUluLCBzZXRGYWRlSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2V0IGFuIGludGVydmFsIHRvIHRvZ2dsZSB0aGUgZmFkZS1pbiBlZmZlY3QgZXZlcnkgc2Vjb25kXG4gICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEZhZGVJbigocHJldikgPT4gIXByZXYpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgLy8gQ2xlYXIgdGhlIGludGVydmFsIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgfSwgW10pO1xuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+e1xuICAgIGNvbnN0IHByb3ZpZGVyICA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgICBjb25zdCB7dXNlciA6IHtkaXNwbGF5TmFtZTogbmFtZSwgZW1haWwsIHBob3RvVXJsOiBwcm9maWxlSW1hZ2V9fSA9IGF3YWl0IHNpZ25JbldpdGhQb3B1cChmaXJlYmFzZUF1dGgsIHByb3ZpZGVyKTtcbiAgICBjb25zb2xlLmxvZyhcImVtYWlsIGhlcmUtLT5cIiwgZW1haWwpO1xuICAgIGNvbnNvbGUubG9nKFwicGF0aFwiLCBjaGVja191c2VyX1JvdXRlKTtcbiAgICBpZihlbWFpbCl7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGNoZWNrX3VzZXJfUm91dGUsIHsgZW1haWwgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcImRhdGEgaGVyZS0tPlwiLCB7ZGF0YX0pO1xuICAgIH1cbiAgICAvLyBhbGVydChcImxvZ2luXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwidXNlciBoZXJlLS0+XCIsIHVzZXIpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YSBoZXJlLS0+XCIsIGRhdGEpO1xuXG4gIH1cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuIGZsZXgtY29sIGdhcC02IGJnLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyRDEzMkMsI0VFNDU0MCwgI0M3MkM0MSwgIzgwMTMzNiknIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIGdhcC0yIGB9PlxuICAgICAgPEltYWdlIGNsYXNzTmFtZT17YCR7ZmFkZUluID8gJ29wYWNpdHktNTAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0xMDAwIGVhc2UtaW4tb3V0JyA6ICdvcGFjaXR5LTAnfWB9IHNyYz1cIi9jaGF0LnBuZ1wiIGFsdD1cImNoYXRcIiBoZWlnaHQ9ezMwMH0gd2lkdGg9ezMwMH0vPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC03eGxcIj5zb3VrZXlDaGF0PC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTcgYmctc2VhcmNoLWlucHV0LWNvbnRhaW5lci1iYWNrZ3JvdW5kIHAtNCByb3VuZGVkLWxnXCIgb25DbGljaz17aGFuZGxlTG9naW59PlxuICAgICAgICA8RmNHb29nbGUgY2xhc3NOYW1lPVwidGV4dC00eGxcIi8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGxcIj5TaWduSW48L3NwYW4+XG5cbiAgICAgIDwvYnV0dG9uPlxuICAgIFxuICAgIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW47XG4iXSwibmFtZXMiOlsiY2hlY2tfdXNlcl9Sb3V0ZSIsImZpcmViYXNlQXV0aCIsImF4aW9zIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmNHb29nbGUiLCJsb2dpbiIsImZhZGVJbiIsInNldEZhZGVJbiIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwiaGFuZGxlTG9naW4iLCJwcm92aWRlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJlbWFpbCIsInBob3RvVXJsIiwicHJvZmlsZUltYWdlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsInBvc3QiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.jsx\n"));

/***/ })

});