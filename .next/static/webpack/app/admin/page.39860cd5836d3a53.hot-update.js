"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/page",{

/***/ "(app-pages-browser)/./app/admin/page.jsx":
/*!****************************!*\
  !*** ./app/admin/page.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Admin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/amp */ \"(app-pages-browser)/./node_modules/next/amp.js\");\n/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Admin() {\n    _s();\n    const api = \"https://json-wlj8.onrender.com/tasks\";\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const postData = async ()=>{\n        const res = await fetch(api, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                name: name,\n                lineThrough: false\n            })\n        });\n        const data = await res.json();\n        console.log(data);\n        setTimeout(()=>{\n            alert(\"\".concat(name, \" added successfully..\"));\n        }, 1000);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        postData();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Admin Dashboard\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/Todo/app/admin/page.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspaces/Todo/app/admin/page.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"inputs\",\n                        type: \"text\",\n                        placeholder: \"Task\",\n                        onChange: (e)=>{\n                            setName(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Todo/app/admin/page.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        onClick: handleSubmit,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/Todo/app/admin/page.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/Todo/app/admin/page.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"back\",\n                    href: \"/\",\n                    children: \"<--\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/Todo/app/admin/page.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspaces/Todo/app/admin/page.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Admin, \"gFPpQ6rgfiGkmgRsh4q2nIO1W+Q=\");\n_c = Admin;\nvar _c;\n$RefreshReg$(_c, \"Admin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDa0M7QUFDTDtBQUNJO0FBRWxCLFNBQVNHOztJQUN0QixNQUFNQyxNQUFNO0lBQ1osTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1LLFdBQVc7UUFDZixNQUFNQyxNQUFNLE1BQU1DLE1BQU1MLEtBQUs7WUFDM0JNLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQlQsTUFBTUE7Z0JBQ05VLGFBQWE7WUFDZjtRQUNGO1FBQ0EsTUFBTUMsT0FBTyxNQUFNUixJQUFJUyxJQUFJO1FBQzNCQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1pJLFdBQVc7WUFDVEMsTUFBTSxHQUFRLE9BQUxoQixNQUFLO1FBQ2hCLEdBQUc7SUFDTDtJQUVBLE1BQU1pQixlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCakI7SUFFRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ2tCOzBCQUNDLDRFQUFDQzs4QkFBRzs7Ozs7Ozs7Ozs7MEJBRU4sOERBQUNDO2dCQUFLQyxXQUFVOztrQ0FDZCw4REFBQ0M7d0JBQ0NELFdBQVU7d0JBQ1ZFLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLFVBQVUsQ0FBQ1Q7NEJBQ1RqQixRQUFRaUIsRUFBRVUsTUFBTSxDQUFDQyxLQUFLO3dCQUN4Qjs7Ozs7O2tDQUVGLDhEQUFDQzt3QkFBT0wsTUFBSzt3QkFBU00sU0FBU2Q7a0NBQWM7Ozs7Ozs7Ozs7OzswQkFJL0MsOERBQUNHOzBCQUNDLDRFQUFDeEIsaURBQUlBO29CQUFDMkIsV0FBVTtvQkFBT1MsTUFBTTs4QkFBTzs7Ozs7Ozs7Ozs7OztBQUk1QztHQW5Ed0JsQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWRtaW4vcGFnZS5qc3g/MzBlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUFtcCB9IGZyb20gXCJuZXh0L2FtcFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW4oKSB7XG4gIGNvbnN0IGFwaSA9IFwiaHR0cHM6Ly9qc29uLXdsajgub25yZW5kZXIuY29tL3Rhc2tzXCI7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHBvc3REYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaSwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBsaW5lVGhyb3VnaDogZmFsc2UsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFsZXJ0KGAke25hbWV9IGFkZGVkIHN1Y2Nlc3NmdWxseS4uYCk7XG4gICAgfSwgMTAwMCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcG9zdERhdGEoKTtcbiAgICBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+QWRtaW4gRGFzaGJvYXJkPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dHNcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRhc2tcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICBBZGRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJiYWNrXCIgaHJlZj17XCIvXCJ9PntgPC0tYH08L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VBbXAiLCJMaW5rIiwidXNlU3RhdGUiLCJBZG1pbiIsImFwaSIsIm5hbWUiLCJzZXROYW1lIiwicG9zdERhdGEiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxpbmVUaHJvdWdoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImFsZXJ0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiaDMiLCJmb3JtIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/page.jsx\n"));

/***/ })

});