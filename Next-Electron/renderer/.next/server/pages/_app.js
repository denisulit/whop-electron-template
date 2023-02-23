/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./styles/Toaster.module.css":
/*!***********************************!*\
  !*** ./styles/Toaster.module.css ***!
  \***********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"toaster\": \"Toaster_toaster__PcO6j\",\n\t\"toasterProperties\": \"Toaster_toasterProperties__G1xti\",\n\t\"error\": \"Toaster_error__nG8hc\",\n\t\"success\": \"Toaster_success__yoT5Z\",\n\t\"open\": \"Toaster_open__uvmff\",\n\t\"close\": \"Toaster_close__PWwdy\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvVG9hc3Rlci5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0eWxlcy9Ub2FzdGVyLm1vZHVsZS5jc3M/MGVjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0b2FzdGVyXCI6IFwiVG9hc3Rlcl90b2FzdGVyX19QY082alwiLFxuXHRcInRvYXN0ZXJQcm9wZXJ0aWVzXCI6IFwiVG9hc3Rlcl90b2FzdGVyUHJvcGVydGllc19fRzF4dGlcIixcblx0XCJlcnJvclwiOiBcIlRvYXN0ZXJfZXJyb3JfX25HOGhjXCIsXG5cdFwic3VjY2Vzc1wiOiBcIlRvYXN0ZXJfc3VjY2Vzc19feW9UNVpcIixcblx0XCJvcGVuXCI6IFwiVG9hc3Rlcl9vcGVuX191dm1mZlwiLFxuXHRcImNsb3NlXCI6IFwiVG9hc3Rlcl9jbG9zZV9fUFd3ZHlcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Toaster.module.css\n");

/***/ }),

/***/ "./components/Toaster.tsx":
/*!********************************!*\
  !*** ./components/Toaster.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"clsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Toaster_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Toaster.module.css */ \"./styles/Toaster.module.css\");\n/* harmony import */ var _styles_Toaster_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Toaster_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Toaster = ({ variant , message , show  })=>{\n    if (!show) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__.clsx)((_styles_Toaster_module_css__WEBPACK_IMPORTED_MODULE_2___default().toaster), {\n                [(_styles_Toaster_module_css__WEBPACK_IMPORTED_MODULE_2___default().open)]: show\n            }),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `${(_styles_Toaster_module_css__WEBPACK_IMPORTED_MODULE_2___default().toasterProperties)} ${(_styles_Toaster_module_css__WEBPACK_IMPORTED_MODULE_2___default())[variant]}`,\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/denisulitskiy/Documents/GitHub/whop-electron-template/Next-Electron/renderer/components/Toaster.tsx\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/denisulitskiy/Documents/GitHub/whop-electron-template/Next-Electron/renderer/components/Toaster.tsx\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toaster);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvYXN0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNzQjtBQVFsRCxNQUFNRSxVQUFVLENBQUMsRUFBRUMsUUFBTyxFQUFFQyxRQUFPLEVBQUVDLEtBQUksRUFBZSxHQUFLO0lBQ3pELElBQUksQ0FBQ0EsTUFBTSxxQkFBTztJQUVsQixxQkFDSTtrQkFFSSw0RUFBQ0M7WUFBSUMsV0FBV1AsMENBQUlBLENBQUNDLDJFQUFjLEVBQUU7Z0JBQ2pDLENBQUNBLHdFQUFXLENBQUMsRUFBRUk7WUFDbkI7c0JBQ0ksNEVBQUNDO2dCQUFJQyxXQUFXLENBQUMsRUFBRU4scUZBQXdCLENBQUMsQ0FBQyxFQUFFQSxtRUFBTSxDQUFDRSxRQUFRLENBQUMsQ0FBQzswQkFDM0RDOzs7Ozs7Ozs7Ozs7QUFLckI7QUFFQSxpRUFBZUYsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9hc3Rlci50c3g/MjRlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ub2FzdGVyLm1vZHVsZS5jc3NcIjtcblxudHlwZSBUb2FzdGVyVHlwZSA9IHtcbiAgICB2YXJpYW50PzogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xuICAgIHNob3c6IGJvb2xlYW47XG59XG5cbmNvbnN0IFRvYXN0ZXIgPSAoeyB2YXJpYW50LCBtZXNzYWdlLCBzaG93IH06IFRvYXN0ZXJUeXBlKSA9PiB7XG4gICAgaWYgKCFzaG93KSByZXR1cm4gPD48Lz47XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgey8qIE5vdGU6IFdoZW4gb2ZmIG9mIHBsYW5lLCBkb3dubG9hZCBhbmQgY29udmVydCB0byBjbHN4ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnRvYXN0ZXIsIHtcbiAgICAgICAgICAgICAgICBbc3R5bGVzLm9wZW5dOiBzaG93XG4gICAgICAgICAgICB9KX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy50b2FzdGVyUHJvcGVydGllc30gJHtzdHlsZXNbdmFyaWFudF19YH0+XG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RlcjsiXSwibmFtZXMiOlsiY2xzeCIsInN0eWxlcyIsIlRvYXN0ZXIiLCJ2YXJpYW50IiwibWVzc2FnZSIsInNob3ciLCJkaXYiLCJjbGFzc05hbWUiLCJ0b2FzdGVyIiwib3BlbiIsInRvYXN0ZXJQcm9wZXJ0aWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Toaster.tsx\n");

/***/ }),

/***/ "./contexts/ToasterContext.tsx":
/*!*************************************!*\
  !*** ./contexts/ToasterContext.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToasterContext\": () => (/* binding */ ToasterContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useToasterContext\": () => (/* binding */ useToasterContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Toaster */ \"./components/Toaster.tsx\");\n\n\n\nconst ToasterContextProvider = ({ children  })=>{\n    const [toaster, setToaster] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    function toast({ variant , message  }) {\n        if (!toaster) {\n            setToaster({\n                variant,\n                message\n            });\n            setTimeout(()=>{\n                setToaster(null);\n            }, 2000);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToasterContext.Provider, {\n        value: {\n            toaster: toaster,\n            toast: toast\n        },\n        children: [\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Toaster__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                show: toaster !== null,\n                variant: toaster === null || toaster === void 0 ? void 0 : toaster.variant,\n                message: toaster === null || toaster === void 0 ? void 0 : toaster.message\n            }, void 0, false, {\n                fileName: \"/Users/denisulitskiy/Documents/GitHub/whop-electron-template/Next-Electron/renderer/contexts/ToasterContext.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denisulitskiy/Documents/GitHub/whop-electron-template/Next-Electron/renderer/contexts/ToasterContext.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToasterContextProvider);\nconst ToasterContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);\nfunction useToasterContext() {\n    const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ToasterContext);\n    if (!context) throw Error(\"Toaster Context must be provided\");\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9Ub2FzdGVyQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE4RDtBQUNsQjtBQVc1QyxNQUFNRyx5QkFBeUIsQ0FBQyxFQUFFQyxTQUFRLEVBQVMsR0FBSztJQUNwRCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQXNCLElBQUk7SUFFaEUsU0FBU00sTUFBTSxFQUFFQyxRQUFPLEVBQUVDLFFBQU8sRUFBZ0IsRUFBRTtRQUMvQyxJQUFJLENBQUNKLFNBQVM7WUFDVkMsV0FBVztnQkFDUEU7Z0JBQ0FDO1lBQ0o7WUFDQUMsV0FBVyxJQUFNO2dCQUNiSixXQUFXLElBQUk7WUFDbkIsR0FBRztRQUNQLENBQUM7SUFDTDtJQUVBLHFCQUNJLDhEQUFDSyxlQUFlQyxRQUFRO1FBQ3BCQyxPQUFPO1lBQ0hSLFNBQVNBO1lBQ1RFLE9BQU9BO1FBQ1g7O1lBRUNIOzBCQUNELDhEQUFDRiwyREFBT0E7Z0JBQUNZLE1BQU1ULFlBQVksSUFBSTtnQkFBRUcsU0FBU0gsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTRyxPQUFPO2dCQUFFQyxTQUFTSixvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNJLE9BQU87Ozs7Ozs7Ozs7OztBQUdqRztBQUVBLGlFQUFlTixzQkFBc0JBLEVBQUM7QUFVL0IsTUFBTVEsK0JBQ1RYLDBEQUFtQixDQUF3QixJQUFJLEVBQUU7QUFFOUMsU0FBU2dCLG9CQUFvQjtJQUNoQyxNQUFNQyxVQUFVakIsdURBQWdCLENBQUNXO0lBQ2pDLElBQUksQ0FBQ00sU0FBUyxNQUFNRSxNQUFNLG9DQUFvQztJQUM5RCxPQUFPRjtBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0cy9Ub2FzdGVyQ29udGV4dC50c3g/YWU2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvYXN0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ub2FzdGVyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG50eXBlIFRvYXN0ZXJQcm9wcyA9IHtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgdmFyaWFudDogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcbn1cblxuY29uc3QgVG9hc3RlckNvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW3RvYXN0ZXIsIHNldFRvYXN0ZXJdID0gdXNlU3RhdGU8VG9hc3RlclByb3BzIHwgbnVsbD4obnVsbCk7XG5cbiAgICBmdW5jdGlvbiB0b2FzdCh7IHZhcmlhbnQsIG1lc3NhZ2UgfTogVG9hc3RlclByb3BzKSB7XG4gICAgICAgIGlmICghdG9hc3Rlcikge1xuICAgICAgICAgICAgc2V0VG9hc3Rlcih7XG4gICAgICAgICAgICAgICAgdmFyaWFudCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRvYXN0ZXIobnVsbCk7XG4gICAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRvYXN0ZXJDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgIHRvYXN0ZXI6IHRvYXN0ZXIsXG4gICAgICAgICAgICAgICAgdG9hc3Q6IHRvYXN0XG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8VG9hc3RlciBzaG93PXt0b2FzdGVyICE9PSBudWxsfSB2YXJpYW50PXt0b2FzdGVyPy52YXJpYW50fSBtZXNzYWdlPXt0b2FzdGVyPy5tZXNzYWdlfSAvPlxuICAgICAgICA8L1RvYXN0ZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RlckNvbnRleHRQcm92aWRlcjtcblxuaW50ZXJmYWNlIFRvYXN0ZXJDb250ZXh0IHtcbiAgICB0b2FzdGVyOiBUb2FzdGVyUHJvcHMgfCBudWxsO1xuICAgIHRvYXN0OiAoe1xuICAgICAgICB2YXJpYW50LFxuICAgICAgICBtZXNzYWdlXG4gICAgfTogVG9hc3RlclByb3BzKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgVG9hc3RlckNvbnRleHQgPVxuICAgIFJlYWN0LmNyZWF0ZUNvbnRleHQ8VG9hc3RlckNvbnRleHQgfCBudWxsPihudWxsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRvYXN0ZXJDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFRvYXN0ZXJDb250ZXh0KTtcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IEVycm9yKCdUb2FzdGVyIENvbnRleHQgbXVzdCBiZSBwcm92aWRlZCcpO1xuICAgIHJldHVybiBjb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUb2FzdGVyIiwiVG9hc3RlckNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidG9hc3RlciIsInNldFRvYXN0ZXIiLCJ0b2FzdCIsInZhcmlhbnQiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsIlRvYXN0ZXJDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInNob3ciLCJjcmVhdGVDb250ZXh0IiwidXNlVG9hc3RlckNvbnRleHQiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/ToasterContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ToasterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ToasterContext */ \"./contexts/ToasterContext.tsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_ToasterContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/denisulitskiy/Documents/GitHub/whop-electron-template/Next-Electron/renderer/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/denisulitskiy/Documents/GitHub/whop-electron-template/Next-Electron/renderer/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQjtBQUdpQztBQUVoRSxTQUFTQyxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDL0MscUJBQ0ksOERBQUNILGdFQUFzQkE7a0JBQ25CLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBR3BDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgVG9hc3RlckNvbnRleHRQcm92aWRlciBmcm9tIFwiLi4vY29udGV4dHMvVG9hc3RlckNvbnRleHRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUb2FzdGVyQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1RvYXN0ZXJDb250ZXh0UHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiVG9hc3RlckNvbnRleHRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();