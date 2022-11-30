webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/NicknameEditForm.js":
/*!****************************************!*\
  !*** ./components/NicknameEditForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\nvar _this = undefined,\n  _jsxFileName = \"/Users/kimsungkwang/WORKSPACE/Nodejs/Grape/prepare/front/components/NicknameEditForm.js\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar NicknameEditForm = function NicknameEditForm() {\n  _s();\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n      return state.user;\n    }),\n    me = _useSelector.me;\n  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((me === null || me === void 0 ? void 0 : me.nickname) || ''),\n    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 2),\n    nickname = _useInput2[0],\n    onChangeNickname = _useInput2[1];\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__[\"CHANGE_NICKNAME_REQUEST\"],\n      data: nickname\n    });\n  }, [nickname]);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    style: {\n      marginBottom: '20px',\n      border: '1px solid #d9d9d9',\n      padding: '20px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"].Search, {\n    value: nickname,\n    onChange: onChangeNickname,\n    addonBefore: \"\\uB2C9\\uB124\\uC784\",\n    enterButton: \"\\uC218\\uC815\",\n    onSearch: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }));\n};\n_s(NicknameEditForm, \"N7qq+s3xxzry3hENaoydffT6TQU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"]];\n});\n_c = NicknameEditForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NicknameEditForm);\nvar _c;\n$RefreshReg$(_c, \"NicknameEditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtLmpzPzE3YTkiXSwibmFtZXMiOlsiTmlja25hbWVFZGl0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VJbnB1dCIsIm5pY2tuYW1lIiwib25DaGFuZ2VOaWNrbmFtZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvblN1Ym1pdCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiZGF0YSIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNtQjtBQUNDO0FBQ3RCO0FBRVE7QUFDa0I7QUFFM0QsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixHQUFTO0VBQUE7RUFDN0IsbUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztNQUFBLE9BQUtBLEtBQUssQ0FBQ0MsSUFBSTtJQUFBLEVBQUM7SUFBekNDLEVBQUUsZ0JBQUZBLEVBQUU7RUFDVixnQkFBcUNDLCtEQUFRLENBQUMsQ0FBQUQsRUFBRSxhQUFGQSxFQUFFLHVCQUFGQSxFQUFFLENBQUVFLFFBQVEsS0FBSSxFQUFFLENBQUM7SUFBQTtJQUExREEsUUFBUTtJQUFFQyxnQkFBZ0I7RUFDakMsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBRTlCLElBQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0lBQ2pDSCxRQUFRLENBQUM7TUFDUEksSUFBSSxFQUFFQyxzRUFBdUI7TUFDN0JDLElBQUksRUFBRVI7SUFDUixDQUFDLENBQUM7RUFDSixDQUFDLEVBQUUsQ0FBQ0EsUUFBUSxDQUFDLENBQUM7RUFFZCxPQUNFLE1BQUMseUNBQUk7SUFBQyxLQUFLLEVBQUU7TUFBRVMsWUFBWSxFQUFFLE1BQU07TUFBRUMsTUFBTSxFQUFFLG1CQUFtQjtNQUFFQyxPQUFPLEVBQUU7SUFBTyxDQUFFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDbEYsTUFBQywwQ0FBSyxDQUFDLE1BQU07SUFDWCxLQUFLLEVBQUVYLFFBQVM7SUFDaEIsUUFBUSxFQUFFQyxnQkFBaUI7SUFDM0IsV0FBVyxFQUFDLG9CQUFLO0lBQ2pCLFdBQVcsRUFBQyxjQUFJO0lBQ2hCLFFBQVEsRUFBRUcsUUFBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQ25CLENBQ0c7QUFFWCxDQUFDO0FBQUMsR0F2QklWLGdCQUFnQjtFQUFBLFFBQ0xDLHVEQUFXLEVBQ1dJLHVEQUFRLEVBQzVCSSx1REFBVztBQUFBO0FBQUEsS0FIeEJULGdCQUFnQjtBQXlCUEEsK0VBQWdCLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcbmltcG9ydCB7IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XG5cbmNvbnN0IE5pY2tuYW1lRWRpdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZV0gPSB1c2VJbnB1dChtZT8ubmlja25hbWUgfHwgJycpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXG4gICAgICBkYXRhOiBuaWNrbmFtZSxcbiAgICB9KTtcbiAgfSwgW25pY2tuYW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNkOWQ5ZDknLCBwYWRkaW5nOiAnMjBweCcgfX0+XG4gICAgICA8SW5wdXQuU2VhcmNoXG4gICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XG4gICAgICAgIGFkZG9uQmVmb3JlPVwi64uJ64Sk7J6EXCJcbiAgICAgICAgZW50ZXJCdXR0b249XCLsiJjsoJVcIlxuICAgICAgICBvblNlYXJjaD17b25TdWJtaXR9XG4gICAgICAvPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5pY2tuYW1lRWRpdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NicknameEditForm.js\n");

/***/ })

})