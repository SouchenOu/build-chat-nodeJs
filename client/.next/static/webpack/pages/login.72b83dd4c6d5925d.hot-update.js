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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction login() {\n    _s();\n    const [fadeIn, setFadeIn] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // Set an interval to toggle the fade-in effect every second\n        const intervalId = setInterval(()=>{\n            setFadeIn((prev)=>!prev);\n        }, 1000);\n        // Clear the interval when the component is unmounted\n        return ()=>clearInterval(intervalId);\n    }, []);\n    const handleLogin = async ()=>{\n        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n        const { user: { displayName: name , email , photoUrl: profileImage  }  } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_2__.firebaseAuth, provider);\n        console.log(\"email here-->\", email);\n        console.log(\"path\", _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_1__.check_user_Route);\n        if (email) {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_1__.check_user_Route, {\n                email\n            });\n            if (data.status) {}\n        }\n    // alert(\"login\");\n    // console.log(\"user here-->\", user);\n    // console.log(\"data here-->\", data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex justify-center items-center h-screen w-screen flex-col gap-6 bg-panel-header-background\",\n        style: {\n            background: \"linear-gradient(to bottom, #2D132C,#EE4540, #C72C41, #801336)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center text-white gap-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        className: \"\".concat(fadeIn ? \"opacity-500 transition-opacity duration-1000 ease-in-out\" : \"opacity-0\"),\n                        src: \"/chat.png\",\n                        alt: \"chat\",\n                        height: 300,\n                        width: 300\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-7xl\",\n                        children: \"soukeyChat\"\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex items-center justify-center gap-7 bg-search-input-container-background p-4 rounded-lg\",\n                onClick: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_7__.FcGoogle, {\n                        className: \"text-4xl\"\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white text-2xl\",\n                        children: \"SignIn\"\n                    }, void 0, false, {\n                        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/souchen/Desktop/chat/client/src/pages/login.jsx\",\n        lineNumber: 39,\n        columnNumber: 10\n    }, this);\n}\n_s(login, \"s7n23fSfhID5pVyFr0/DM12lDnA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ0M7QUFDNUI7QUFDMEM7QUFDckM7QUFDb0I7QUFDWDtBQUV4QyxTQUFTVSxRQUFROztJQUNmLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTFDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsNERBQTREO1FBQzVELE1BQU1NLGFBQWFDLFlBQVksSUFBTTtZQUNuQ0YsVUFBVSxDQUFDRyxPQUFTLENBQUNBO1FBQ3ZCLEdBQUc7UUFFSCxxREFBcUQ7UUFDckQsT0FBTyxJQUFNQyxjQUFjSDtJQUM3QixHQUFHLEVBQUU7SUFDTCxNQUFNSSxjQUFjLFVBQVc7UUFDN0IsTUFBTUMsV0FBWSxJQUFJZiw2REFBa0JBO1FBQ3hDLE1BQU0sRUFBQ2dCLE1BQU8sRUFBQ0MsYUFBYUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFVBQVVDLGFBQVksRUFBQyxHQUFDLEdBQUcsTUFBTXBCLDhEQUFlQSxDQUFDSCwrREFBWUEsRUFBRWlCO1FBQ3hHTyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCSjtRQUM3QkcsUUFBUUMsR0FBRyxDQUFDLFFBQVExQiw4REFBZ0JBO1FBQ3BDLElBQUdzQixPQUFNO1lBQ1AsTUFBTSxFQUFDSyxLQUFJLEVBQUMsR0FBRyxNQUFNekIsa0RBQVUsQ0FBQ0YsOERBQWdCQSxFQUFFO2dCQUFFc0I7WUFBTTtZQUMxRCxJQUFHSyxLQUFLRSxNQUFNLEVBQUMsQ0FFZixDQUFDO1FBQ0gsQ0FBQztJQUdELGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMscUNBQXFDO0lBRXZDO0lBQ0EscUJBQU8sOERBQUNDO1FBQUlDLFdBQVU7UUFBZ0dDLE9BQU87WUFBRUMsWUFBWTtRQUFnRTs7MEJBQ3ZNLDhEQUFDSDtnQkFBSUMsV0FBWTs7a0NBQ2pCLDhEQUFDMUIsbURBQUtBO3dCQUFDMEIsV0FBVyxHQUFxRixPQUFsRnBCLFNBQVMsNkRBQTZELFdBQVc7d0JBQUl1QixLQUFJO3dCQUFZQyxLQUFJO3dCQUFPQyxRQUFRO3dCQUFLQyxPQUFPOzs7Ozs7a0NBQ3pKLDhEQUFDQzt3QkFBS1AsV0FBVTtrQ0FBVzs7Ozs7Ozs7Ozs7OzBCQUczQiw4REFBQ1E7Z0JBQU9SLFdBQVU7Z0JBQTZGUyxTQUFTdkI7O2tDQUN0SCw4REFBQ1Isb0RBQVFBO3dCQUFDc0IsV0FBVTs7Ozs7O2tDQUNwQiw4REFBQ087d0JBQUtQLFdBQVU7a0NBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUM7R0EzQ1NyQjtBQTZDVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9naW4uanN4P2M5M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hlY2tfdXNlcl9Sb3V0ZSB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSBcIkAvdXRpbHMvRmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEdvb2dsZUF1dGhQcm92aWRlciwgc2lnbkluV2l0aFBvcHVwIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZjR29vZ2xlfSBmcm9tIFwicmVhY3QtaWNvbnMvZmNcIlxuXG5mdW5jdGlvbiBsb2dpbigpIHtcbiAgY29uc3QgW2ZhZGVJbiwgc2V0RmFkZUluXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNldCBhbiBpbnRlcnZhbCB0byB0b2dnbGUgdGhlIGZhZGUtaW4gZWZmZWN0IGV2ZXJ5IHNlY29uZFxuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRGYWRlSW4oKHByZXYpID0+ICFwcmV2KTtcbiAgICB9LCAxMDAwKTtcblxuICAgIC8vIENsZWFyIHRoZSBpbnRlcnZhbCB3aGVuIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKSA9PntcbiAgICBjb25zdCBwcm92aWRlciAgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gICAgY29uc3Qge3VzZXIgOiB7ZGlzcGxheU5hbWU6IG5hbWUsIGVtYWlsLCBwaG90b1VybDogcHJvZmlsZUltYWdlfX0gPSBhd2FpdCBzaWduSW5XaXRoUG9wdXAoZmlyZWJhc2VBdXRoLCBwcm92aWRlcik7XG4gICAgY29uc29sZS5sb2coXCJlbWFpbCBoZXJlLS0+XCIsIGVtYWlsKTtcbiAgICBjb25zb2xlLmxvZyhcInBhdGhcIiwgY2hlY2tfdXNlcl9Sb3V0ZSk7XG4gICAgaWYoZW1haWwpe1xuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChjaGVja191c2VyX1JvdXRlLCB7IGVtYWlsIH0pO1xuICAgICAgaWYoZGF0YS5zdGF0dXMpe1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICAvLyBhbGVydChcImxvZ2luXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwidXNlciBoZXJlLS0+XCIsIHVzZXIpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YSBoZXJlLS0+XCIsIGRhdGEpO1xuXG4gIH1cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctc2NyZWVuIGZsZXgtY29sIGdhcC02IGJnLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyRDEzMkMsI0VFNDU0MCwgI0M3MkM0MSwgIzgwMTMzNiknIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIGdhcC0yIGB9PlxuICAgICAgPEltYWdlIGNsYXNzTmFtZT17YCR7ZmFkZUluID8gJ29wYWNpdHktNTAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0xMDAwIGVhc2UtaW4tb3V0JyA6ICdvcGFjaXR5LTAnfWB9IHNyYz1cIi9jaGF0LnBuZ1wiIGFsdD1cImNoYXRcIiBoZWlnaHQ9ezMwMH0gd2lkdGg9ezMwMH0vPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC03eGxcIj5zb3VrZXlDaGF0PC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTcgYmctc2VhcmNoLWlucHV0LWNvbnRhaW5lci1iYWNrZ3JvdW5kIHAtNCByb3VuZGVkLWxnXCIgb25DbGljaz17aGFuZGxlTG9naW59PlxuICAgICAgICA8RmNHb29nbGUgY2xhc3NOYW1lPVwidGV4dC00eGxcIi8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGxcIj5TaWduSW48L3NwYW4+XG5cbiAgICAgIDwvYnV0dG9uPlxuICAgIFxuICAgIDwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW47XG4iXSwibmFtZXMiOlsiY2hlY2tfdXNlcl9Sb3V0ZSIsImZpcmViYXNlQXV0aCIsImF4aW9zIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmNHb29nbGUiLCJsb2dpbiIsImZhZGVJbiIsInNldEZhZGVJbiIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwiaGFuZGxlTG9naW4iLCJwcm92aWRlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJlbWFpbCIsInBob3RvVXJsIiwicHJvZmlsZUltYWdlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJwb3N0Iiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.jsx\n"));

/***/ })

});