webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n  _jsxFileName = \"/Users/kimsungkwang/WORKSPACE/Nodejs/Grape/prepare/front/components/FollowList.js\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar FollowList = function FollowList(_ref) {\n  _s();\n  var header = _ref.header,\n    data = _ref.data;\n  var dispatch = useDispatch();\n  var onCancel = function onCancel(id) {\n    return function () {\n      if (header === '팔로잉') {\n        dispatch({\n          type: UNFOLLOW_REQUEST,\n          data: id\n        });\n      }\n      dispatch({\n        type: REMOVE_FOLLOWER_REQUEST,\n        data: id\n      });\n    };\n  };\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"List\"], {\n    style: {\n      marginBottom: \"20px\"\n    },\n    grid: {\n      gutter: 4,\n      xs: 2,\n      md: 3\n    },\n    size: \"small\",\n    header: __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 13\n      }\n    }, header),\n    loadMore: __jsx(\"div\", {\n      style: {\n        textAlign: \"center\",\n        margin: \"10px 0\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }\n    }, \"\\uB354 \\uBCF4\\uAE30\")),\n    bordered: true,\n    dataSource: data,\n    renderItem: function renderItem(item) {\n      return __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"List\"].Item, {\n        style: {\n          marginTop: \"20px\"\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 7\n        }\n      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Card\"], {\n        actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__[\"StopOutlined\"], {\n          key: \"stop\",\n          onClick: onClick,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 25\n          }\n        })],\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }\n      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_0__[\"Card\"].Meta, {\n        description: item.nickname,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }\n      })));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  });\n};\n_s(FollowList, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", true);\n_c = FollowList;\nFollowList.propTypes = {\n  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\nvar _c;\n$RefreshReg$(_c, \"FollowList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzP2ZhMDIiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DYW5jZWwiLCJpZCIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJtYXJnaW5Cb3R0b20iLCJndXR0ZXIiLCJ4cyIsIm1kIiwidGV4dEFsaWduIiwibWFyZ2luIiwiaXRlbSIsIm1hcmdpblRvcCIsIm9uQ2xpY2siLCJuaWNrbmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDTztBQUN2QjtBQUNTO0FBRW5DLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFVLE9BQXlCO0VBQUE7RUFBQSxJQUFuQkMsTUFBTSxRQUFOQSxNQUFNO0lBQUVDLElBQUksUUFBSkEsSUFBSTtFQUNoQyxJQUFNQyxRQUFRLEdBQUdDLFdBQVcsRUFBRTtFQUM5QixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxDQUFJQyxFQUFFO0lBQUEsT0FBSyxZQUFNO01BQzdCLElBQUlMLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDcEJFLFFBQVEsQ0FBQztVQUNQSSxJQUFJLEVBQUVDLGdCQUFnQjtVQUN0Qk4sSUFBSSxFQUFFSTtRQUNSLENBQUMsQ0FBQztNQUNKO01BQ0FILFFBQVEsQ0FBQztRQUNQSSxJQUFJLEVBQUVFLHVCQUF1QjtRQUM3QlAsSUFBSSxFQUFFSTtNQUNSLENBQUMsQ0FBQztJQUNKLENBQUM7RUFBQTtFQUNELE9BQ0UsTUFBQyx5Q0FBSTtJQUNMLEtBQUssRUFBRTtNQUFFSSxZQUFZLEVBQUU7SUFBTyxDQUFFO0lBQ2hDLElBQUksRUFBRTtNQUFFQyxNQUFNLEVBQUUsQ0FBQztNQUFFQyxFQUFFLEVBQUUsQ0FBQztNQUFFQyxFQUFFLEVBQUU7SUFBRSxDQUFFO0lBQ2xDLElBQUksRUFBQyxPQUFPO0lBQ1osTUFBTSxFQUFFO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FBTVosTUFBTSxDQUFRO0lBQzVCLFFBQVEsRUFDTjtNQUFLLEtBQUssRUFBRTtRQUFFYSxTQUFTLEVBQUUsUUFBUTtRQUFFQyxNQUFNLEVBQUU7TUFBUyxDQUFFO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDcEQsTUFBQywyQ0FBTTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLHlCQUFjLENBRXhCO0lBQ0QsUUFBUTtJQUNSLFVBQVUsRUFBRWIsSUFBSztJQUNqQixVQUFVLEVBQUUsb0JBQUNjLElBQUk7TUFBQSxPQUNmLE1BQUMseUNBQUksQ0FBQyxJQUFJO1FBQUMsS0FBSyxFQUFFO1VBQUVDLFNBQVMsRUFBRTtRQUFPLENBQUU7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUN0QyxNQUFDLHlDQUFJO1FBQUMsT0FBTyxFQUFFLENBQUMsTUFBQyw4REFBWTtVQUFDLEdBQUcsRUFBQyxNQUFNO1VBQUMsT0FBTyxFQUFFQyxPQUFRO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQUEsRUFBRyxDQUFFO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDN0QsTUFBQyx5Q0FBSSxDQUFDLElBQUk7UUFBQyxXQUFXLEVBQUVGLElBQUksQ0FBQ0csUUFBUztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEVBQUcsQ0FDcEMsQ0FDRztJQUFBLENBQ1o7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUNGO0FBRUosQ0FBQztBQUFBLEdBcENLbkIsVUFBVTtBQUFBLEtBQVZBLFVBQVU7QUFzQ2hCQSxVQUFVLENBQUNvQixTQUFTLEdBQUc7RUFDckJuQixNQUFNLEVBQUVvQixpREFBUyxDQUFDQyxNQUFNLENBQUNDLFVBQVU7RUFDbkNyQixJQUFJLEVBQUVtQixpREFBUyxDQUFDRyxLQUFLLENBQUNEO0FBQ3hCLENBQUM7QUFFY3ZCLHlFQUFVLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBMaXN0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IFN0b3BPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jb25zdCBGb2xsb3dMaXN0ID0gKHsgaGVhZGVyLCBkYXRhIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvbkNhbmNlbCA9IChpZCkgPT4gKCkgPT4ge1xuICAgIGlmIChoZWFkZXIgPT09ICftjJTroZzsnoknKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXG4gICAgICAgIGRhdGE6IGlkLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxuICAgICAgZGF0YTogaWQsXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPExpc3RcbiAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMjBweFwiIH19XG4gICAgZ3JpZD17eyBndXR0ZXI6IDQsIHhzOiAyLCBtZDogMyB9fVxuICAgIHNpemU9XCJzbWFsbFwiXG4gICAgaGVhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxuICAgIGxvYWRNb3JlPXtcbiAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW46IFwiMTBweCAwXCIgfX0+XG4gICAgICAgIDxCdXR0b24+642UIOuztOq4sDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIGJvcmRlcmVkXG4gICAgZGF0YVNvdXJjZT17ZGF0YX1cbiAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxuICAgICAgPExpc3QuSXRlbSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxuICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIgb25DbGljaz17b25DbGlja30gLz5dfT5cbiAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfSAvPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0xpc3QuSXRlbT5cbiAgICApfVxuICAvPlxuICApXG59XG5cbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge1xuICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FollowList.js\n");

/***/ })

})