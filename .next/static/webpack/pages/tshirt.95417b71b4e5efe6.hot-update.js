"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tshirt",{

/***/ "./pages/tshirt.js":
/*!*************************!*\
  !*** ./pages/tshirt.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _middleware_mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/mongoose */ \"./middleware/mongoose.js\");\nvar _this = undefined;\n\n\n\n\nvar tshirt = function(param) {\n    var product = param.product;\n    var _this1 = _this;\n    console.log(\"This is my product\", product);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"text-gray-600 body-font\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container px-0 py-24 mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap -m-4\",\n                    children: Object.keys(product).map(function(item) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:w-1/4 md:w-1/2 p-4 w-full shadow-sm cursor-pointer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    passHref: true,\n                                    href: \"/product/\".concat(product[item].slug),\n                                    className: \"block relative rounded cursor-pointer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        alt: \"ecommerce\",\n                                        className: \"h-[36vh] block justify-center\",\n                                        src: \"\".concat(product[item].img)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sumit\\\\Desktop\\\\Apna-collage\\\\Coad-with-harry\\\\ecommerce-website\\\\ecommerce\\\\pages\\\\tshirt.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 11\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Sumit\\\\Desktop\\\\Apna-collage\\\\Coad-with-harry\\\\ecommerce-website\\\\ecommerce\\\\pages\\\\tshirt.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 9\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-gray-500 text-xs tracking-widest title-font mb-1\",\n                                            children: product[item].category\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Sumit\\\\Desktop\\\\Apna-collage\\\\Coad-with-harry\\\\ecommerce-website\\\\ecommerce\\\\pages\\\\tshirt.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 11\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-gray-900 title-font text-lg font-medium\",\n                                            children: product[item].title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Sumit\\\\Desktop\\\\Apna-collage\\\\Coad-with-harry\\\\ecommerce-website\\\\ecommerce\\\\pages\\\\tshirt.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 11\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mt-1\",\n                                            children: product[item].price\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Sumit\\\\Desktop\\\\Apna-collage\\\\Coad-with-harry\\\\ecommerce-website\\\\ecommerce\\\\pages\\\\tshirt.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 11\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Sumit\\\\Desktop\\\\Apna-collage\\\\Coad-with-harry\\\\ecommerce-website\\\\ecommerce\\\\pages\\\\tshirt.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 9\n                                }, _this1)\n                            ]\n                        }, product[item]._id, true, {\n                            fileName: \"C:\\\\Users\\\\Sumit\\\\Desktop\\\\Apna-collage\\\\Coad-with-harry\\\\ecommerce-website\\\\ecommerce\\\\pages\\\\tshirt.js\",\n                            lineNumber: 18,\n                            columnNumber: 14\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sumit\\\\Desktop\\\\Apna-collage\\\\Coad-with-harry\\\\ecommerce-website\\\\ecommerce\\\\pages\\\\tshirt.js\",\n                    lineNumber: 13,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sumit\\\\Desktop\\\\Apna-collage\\\\Coad-with-harry\\\\ecommerce-website\\\\ecommerce\\\\pages\\\\tshirt.js\",\n                lineNumber: 12,\n                columnNumber: 3\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sumit\\\\Desktop\\\\Apna-collage\\\\Coad-with-harry\\\\ecommerce-website\\\\ecommerce\\\\pages\\\\tshirt.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (tshirt);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90c2hpcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFDRztBQUVrQjtBQUc5QyxJQUFNRyxNQUFNLEdBQUcsZ0JBQWU7UUFBYkMsT0FBTyxTQUFQQSxPQUFPOztJQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEVBQUNGLE9BQU8sQ0FBQztJQUN6QyxxQkFDRTtrQkFDRSw0RUFBQ0csU0FBTztZQUFDQyxTQUFTLEVBQUMseUJBQXlCO3NCQUNoRCw0RUFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLDhCQUE4QjswQkFDM0MsNEVBQUNDLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxxQkFBcUI7OEJBRWpDRSxNQUFNLENBQUNDLElBQUksQ0FBQ1AsT0FBTyxDQUFDLENBQUNRLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUc7d0JBR2xDLHFCQUFPLDhEQUFDSixLQUFHOzRCQUEwQkQsU0FBUyxFQUFDLHVEQUF1RDs7OENBSXBHLDhEQUFDUCxrREFBSTtvQ0FBQ2EsUUFBUSxFQUFFLElBQUk7b0NBQUdDLElBQUksRUFBRSxXQUFVLENBQXFCLE9BQW5CWCxPQUFPLENBQUNTLElBQUksQ0FBQyxDQUFDRyxJQUFJLENBQUU7b0NBQUVSLFNBQVMsRUFBQyx1Q0FBeUM7OENBQ2hILDRFQUFDUyxLQUFHO3dDQUNGQyxHQUFHLEVBQUMsV0FBVzt3Q0FDZlYsU0FBUyxFQUFDLCtCQUErQjt3Q0FDekNXLEdBQUcsRUFBRSxFQUFDLENBQW9CLE9BQWxCZixPQUFPLENBQUNTLElBQUksQ0FBQyxDQUFDSSxHQUFHLENBQUU7Ozs7OzhDQUMzQjs7Ozs7MENBQ0c7OENBQ1AsOERBQUNSLEtBQUc7b0NBQUNELFNBQVMsRUFBQyxNQUFNOztzREFDbkIsOERBQUNZLElBQUU7NENBQUNaLFNBQVMsRUFBQyx1REFBdUQ7c0RBQ25FSixPQUFPLENBQUNTLElBQUksQ0FBQyxDQUFDUSxRQUFROzs7OztrREFDbkI7c0RBQ0wsOERBQUNDLElBQUU7NENBQUNkLFNBQVMsRUFBQyw4Q0FBOEM7c0RBQ3pESixPQUFPLENBQUNTLElBQUksQ0FBQyxDQUFDVSxLQUFLOzs7OztrREFDakI7c0RBQ0wsOERBQUNDLEdBQUM7NENBQUNoQixTQUFTLEVBQUMsTUFBTTtzREFBRUosT0FBTyxDQUFDUyxJQUFJLENBQUMsQ0FBQ1ksS0FBSzs7Ozs7a0RBQUs7Ozs7OzswQ0FDekM7OzJCQW5CU3JCLE9BQU8sQ0FBQ1MsSUFBSSxDQUFDLENBQUNhLEdBQUc7Ozs7a0NBb0I1QjtxQkFDUixDQUFDOzs7Ozt5QkFFSzs7Ozs7cUJBQ0Y7Ozs7O2lCQUNFO3FCQUVILENBQ0o7Q0FDRjs7QUErQkQsK0RBQWV2QixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHNoaXJ0LmpzPzVlMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdCdcclxuaW1wb3J0IENvbm5lY3REYiBmcm9tICcuLi9taWRkbGV3YXJlL21vbmdvb3NlJ1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCJcclxuXHJcbmNvbnN0IHRzaGlydCA9ICh7cHJvZHVjdH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhcIlRoaXMgaXMgbXkgcHJvZHVjdFwiLHByb2R1Y3QpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgYm9keS1mb250XCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtMCBweS0yNCBteC1hdXRvXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1tLTRcIj5cclxuICAgIFxyXG4gICAgICB7T2JqZWN0LmtleXMocHJvZHVjdCkubWFwKChpdGVtKT0+e1xyXG5cclxuICAgICBcclxuICAgICAgcmV0dXJuIDxkaXYga2V5PXtwcm9kdWN0W2l0ZW1dLl9pZH0gIGNsYXNzTmFtZT1cImxnOnctMS80IG1kOnctMS8yIHAtNCB3LWZ1bGwgc2hhZG93LXNtIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgPExpbmsgcGFzc0hyZWY9e3RydWV9ICBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0W2l0ZW1dLnNsdWd9YH0gY2xhc3NOYW1lPVwiYmxvY2sgcmVsYXRpdmUgIHJvdW5kZWQgIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGFsdD1cImVjb21tZXJjZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzM2dmhdIGJsb2NrIGp1c3RpZnktY2VudGVyXCJcclxuICAgICAgICAgICAgc3JjPXtgJHtwcm9kdWN0W2l0ZW1dLmltZ31gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXhzIHRyYWNraW5nLXdpZGVzdCB0aXRsZS1mb250IG1iLTFcIj5cclxuICAgICAgICAgICB7cHJvZHVjdFtpdGVtXS5jYXRlZ29yeX1cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCB0aXRsZS1mb250IHRleHQtbGcgZm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgICAge3Byb2R1Y3RbaXRlbV0udGl0bGV9XHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMVwiPntwcm9kdWN0W2l0ZW1dLnByaWNlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIH0pfVxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcblxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBpZighbW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSl7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTClcclxufVxyXG4gIGxldCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdHMuZmluZCh7Y2F0ZWdvcnk6XCJ0c2hpcnRcIn0pXHJcbiAgbGV0IHRzaGlydHMgPSB7fVxyXG4gIGZvciAobGV0IGl0ZW0gb2YgcHJvZHVjdCl7XHJcbiAgICAgIGlmKGl0ZW0udGl0bGUgaW4gdHNoaXJ0cyl7XHJcbiAgICAgICAgICBpZighdHNoaXJ0c1tpdGVtLnRpdGxlXS5jb2xvci5pbmNsdWRlcyhpdGVtLmNvbG9yKSAmJiBpdGVtLmF2YWlsYWJsZVF0eSA+IDApe1xyXG4gICAgICAgICAgICAgIHRzaGlydHNbaXRlbS50aXRsZV0uY29sb3IucHVzaChpdGVtLmNvbG9yKVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKCF0c2hpcnRzW2l0ZW0udGl0bGVdLnNpemUuaW5jbHVkZXMoaXRlbS5zaXplKSAmJiBpdGVtLmF2YWlsYWJsZVF0eSA+IDApe1xyXG4gICAgICAgICAgICAgIHRzaGlydHNbaXRlbS50aXRsZV0uc2l6ZS5wdXNoKGl0ZW0uc2l6ZSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdHNoaXJ0c1tpdGVtLnRpdGxlXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpXHJcbiAgICAgICAgICBpZihpdGVtLmF2YWlsYWJsZVF0eSA+IDApe1xyXG4gICAgICAgICAgICAgIHRzaGlydHNbaXRlbS50aXRsZV0uY29sb3IgPSBbaXRlbS5jb2xvcl1cclxuICAgICAgICAgICAgICB0c2hpcnRzW2l0ZW0udGl0bGVdLnNpemUgPSBbaXRlbS5zaXplXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge3Byb2R1Y3Q6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHNoaXJ0cykpfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0c2hpcnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkNvbm5lY3REYiIsInRzaGlydCIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpdGVtIiwicGFzc0hyZWYiLCJocmVmIiwic2x1ZyIsImltZyIsImFsdCIsInNyYyIsImgzIiwiY2F0ZWdvcnkiLCJoMiIsInRpdGxlIiwicCIsInByaWNlIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tshirt.js\n");

/***/ })

});