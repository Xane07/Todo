"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/tasks/task.jsx":
/*!***********************************!*\
  !*** ./components/tasks/task.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_components_tasks_task_jsx_import_Poiret_One_arguments_weight_400_subsets_latin_display_swap_variableName_poiretOne___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"components/tasks/task.jsx\",\"import\":\"Poiret_One\",\"arguments\":[{\"weight\":[\"400\"],\"subsets\":[\"latin\"],\"display\":\"swap\"}],\"variableName\":\"poiretOne\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"components/tasks/task.jsx\\\",\\\"import\\\":\\\"Poiret_One\\\",\\\"arguments\\\":[{\\\"weight\\\":[\\\"400\\\"],\\\"subsets\\\":[\\\"latin\\\"],\\\"display\\\":\\\"swap\\\"}],\\\"variableName\\\":\\\"poiretOne\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_components_tasks_task_jsx_import_Poiret_One_arguments_weight_400_subsets_latin_display_swap_variableName_poiretOne___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_components_tasks_task_jsx_import_Poiret_One_arguments_weight_400_subsets_latin_display_swap_variableName_poiretOne___WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Task = (param)=>{\n    let { tasks, onDelete, onToggle } = param;\n    // Adding Line-through when a task in done.\n    const handleDone = (e)=>{\n        if (e.target.style.textDecoration === \"line-through\") {\n            e.target.style.textDecoration = \"none\";\n        } else {\n            e.target.style.textDecoration = \"line-through\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (next_font_google_target_css_path_components_tasks_task_jsx_import_Poiret_One_arguments_weight_400_subsets_latin_display_swap_variableName_poiretOne___WEBPACK_IMPORTED_MODULE_2___default().className),\n                onClick: handleDone,\n                onDoubleClick: onToggle,\n                children: [\n                    task.name,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"x\",\n                        onClick: ()=>{\n                            onDelete(task.id);\n                        },\n                        children: \"X\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pratham./Documents/Todo/components/tasks/task.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, task.id, true, {\n                fileName: \"/Users/pratham./Documents/Todo/components/tasks/task.jsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/pratham./Documents/Todo/components/tasks/task.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Task;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGFza3MvdGFzay5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdNQTtBQUhvQjtBQVMxQixNQUFNRSxPQUFPO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRTtJQUN6QywyQ0FBMkM7SUFFM0MsTUFBTUMsYUFBYSxDQUFDQztRQUNsQixJQUFJQSxFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsY0FBYyxLQUFLLGdCQUFnQjtZQUNwREgsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLENBQUNDLGNBQWMsR0FBRztRQUNsQyxPQUFPO1lBQ0xILEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxjQUFjLEdBQUc7UUFDbEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztrQkFDRVIsTUFBTVMsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDQztnQkFDQ0MsV0FBV2YsdU1BQW1CO2dCQUU5QmdCLFNBQVNWO2dCQUNUVyxlQUFlWjs7b0JBRWRRLEtBQUtLLElBQUk7a0NBRVYsOERBQUNDO3dCQUNDSixXQUFVO3dCQUNWQyxTQUFTOzRCQUNQWixTQUFTUyxLQUFLTyxFQUFFO3dCQUNsQjtrQ0FDRDs7Ozs7OztlQVhJUCxLQUFLTyxFQUFFOzs7Ozs7Ozs7O0FBa0J0QjtLQWxDTWxCO0FBb0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFza3MvdGFzay5qc3g/OGU4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb2lyZXRfT25lIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcblxuY29uc3QgcG9pcmV0T25lID0gUG9pcmV0X09uZSh7XG4gIHdlaWdodDogW1wiNDAwXCJdLFxuICBzdWJzZXRzOiBbXCJsYXRpblwiXSxcbiAgZGlzcGxheTogXCJzd2FwXCIsXG59KTtcblxuY29uc3QgVGFzayA9ICh7IHRhc2tzLCBvbkRlbGV0ZSwgb25Ub2dnbGUgfSkgPT4ge1xuICAvLyBBZGRpbmcgTGluZS10aHJvdWdoIHdoZW4gYSB0YXNrIGluIGRvbmUuXG5cbiAgY29uc3QgaGFuZGxlRG9uZSA9IChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnN0eWxlLnRleHREZWNvcmF0aW9uID09PSBcImxpbmUtdGhyb3VnaFwiKSB7XG4gICAgICBlLnRhcmdldC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnRhcmdldC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHt0YXNrcy5tYXAoKHRhc2spID0+IChcbiAgICAgICAgPGgzXG4gICAgICAgICAgY2xhc3NOYW1lPXtwb2lyZXRPbmUuY2xhc3NOYW1lfVxuICAgICAgICAgIGtleT17dGFzay5pZH1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEb25lfVxuICAgICAgICAgIG9uRG91YmxlQ2xpY2s9e29uVG9nZ2xlfVxuICAgICAgICA+XG4gICAgICAgICAge3Rhc2submFtZX1cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInhcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkRlbGV0ZSh0YXNrLmlkKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgWFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2gzPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIl0sIm5hbWVzIjpbInBvaXJldE9uZSIsIlJlYWN0IiwiVGFzayIsInRhc2tzIiwib25EZWxldGUiLCJvblRvZ2dsZSIsImhhbmRsZURvbmUiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsImRpdiIsIm1hcCIsInRhc2siLCJoMyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJvbkRvdWJsZUNsaWNrIiwibmFtZSIsImJ1dHRvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/tasks/task.jsx\n"));

/***/ })

});