webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n\nvar _this = undefined,\n  _jsxFileName = \"/Users/kimsungkwang/WORKSPACE/Nodejs/Grape/prepare/front/components/PostForm.js\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar PostForm = function PostForm() {\n  _s();\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n      return state.post;\n    }),\n    imagePaths = _useSelector.imagePaths,\n    addPostDone = _useSelector.addPostDone;\n  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"\"),\n    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 3),\n    text = _useInput2[0],\n    onChangeText = _useInput2[1],\n    setText = _useInput2[2];\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    imageInput.current.click();\n  }, [imageInput.current]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (addPostDone) {\n      setText(\"\");\n    }\n  }, [addPostDone]);\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_4__[\"addPost\"])(text));\n  }, [text]);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    style: {\n      margin: \"10px 0 20px\"\n    },\n    encType: \"multipart/form-data\",\n    onFinish: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"].TextArea, {\n    value: text,\n    onChange: onChangeText,\n    maxLength: 140,\n    placeholder: \"\\uBB50\\uB4E0\\uC9C0 \\uCD94\\uAC00\\uD574\\uBCF4\\uC138\\uC694 ! \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    name: \"image\",\n    multiple: true,\n    hidden: true,\n    ref: imageInput,\n    onC: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: onClickImageUpload,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \"\\uC774\\uBBF8\\uC9C0 \\uC5C5\\uB85C\\uB4DC\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"primary\",\n    style: {\n      \"float\": \"right\"\n    },\n    htmlType: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"\\uC5C5\\uB85C\\uB4DC\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, imagePaths.map(function (v) {\n    return __jsx(\"div\", {\n      key: v,\n      style: {\n        display: \"inline-block\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 13\n      }\n    }, __jsx(\"img\", {\n      src: \"http://localhost:3065/\" + v,\n      style: {\n        width: \"200px\"\n      },\n      alt: v,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 15\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 15\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }\n    }, \"\\uC81C\\uAC70\")));\n  })));\n};\n_s(PostForm, \"4GfdMq2Rtpc/pFX9Dx511j7bKPY=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"]];\n});\n_c = PostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\nvar _c;\n$RefreshReg$(_c, \"PostForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcz83OWM1Il0sIm5hbWVzIjpbIlBvc3RGb3JtIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJ1c2VJbnB1dCIsInRleHQiLCJvbkNoYW5nZVRleHQiLCJzZXRUZXh0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGljayIsInVzZUVmZmVjdCIsIm9uU3VibWl0IiwiYWRkUG9zdCIsIm1hcmdpbiIsIm1hcCIsInYiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDbkI7QUFDWTtBQUVaO0FBQ0Y7QUFFekMsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVEsR0FBUztFQUFBO0VBQ3JCLG1CQUFvQ0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDQyxJQUFJO0lBQUEsRUFBQztJQUE5REMsVUFBVSxnQkFBVkEsVUFBVTtJQUFFQyxXQUFXLGdCQUFYQSxXQUFXO0VBQy9CLGdCQUFzQ0MsK0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUEzQ0MsSUFBSTtJQUFFQyxZQUFZO0lBQUVDLE9BQU87RUFDbEMsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBRTlCLElBQU1DLFVBQVUsR0FBR0Msb0RBQU0sRUFBRTtFQUMzQixJQUFNQyxrQkFBa0IsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0lBQzNDSCxVQUFVLENBQUNJLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO0VBQzVCLENBQUMsRUFBRSxDQUFDTCxVQUFVLENBQUNJLE9BQU8sQ0FBQyxDQUFDO0VBRXhCRSx1REFBUyxDQUFDLFlBQU07SUFDZCxJQUFJYixXQUFXLEVBQUU7TUFDZkksT0FBTyxDQUFDLEVBQUUsQ0FBQztJQUNiO0VBQ0YsQ0FBQyxFQUFFLENBQUNKLFdBQVcsQ0FBQyxDQUFDO0VBRWpCLElBQU1jLFFBQVEsR0FBR0oseURBQVcsQ0FBQyxZQUFNO0lBQ2pDTCxRQUFRLENBQUNVLDhEQUFPLENBQUNiLElBQUksQ0FBQyxDQUFDO0VBQ3pCLENBQUMsRUFBRSxDQUFDQSxJQUFJLENBQUMsQ0FBQztFQUVWLE9BQ0UsTUFBQyx5Q0FBSTtJQUFDLEtBQUssRUFBRTtNQUFFYyxNQUFNLEVBQUU7SUFBYyxDQUFFO0lBQUMsT0FBTyxFQUFDLHFCQUFxQjtJQUFDLFFBQVEsRUFBRUYsUUFBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3ZGLE1BQUMsMENBQUssQ0FBQyxRQUFRO0lBQUMsS0FBSyxFQUFFWixJQUFLO0lBQUMsUUFBUSxFQUFFQyxZQUFhO0lBQUMsU0FBUyxFQUFFLEdBQUk7SUFBQyxXQUFXLEVBQUMsNERBQWU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ25HO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFPLElBQUksRUFBQyxNQUFNO0lBQUMsSUFBSSxFQUFDLE9BQU87SUFBQyxRQUFRO0lBQUMsTUFBTTtJQUFDLEdBQUcsRUFBRUksVUFBVztJQUFDLEdBQUc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ3ZFLE1BQUMsMkNBQU07SUFBQyxPQUFPLEVBQUVFLGtCQUFtQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDJDQUFpQixFQUNyRCxNQUFDLDJDQUFNO0lBQUMsSUFBSSxFQUFDLFNBQVM7SUFBQyxLQUFLLEVBQUU7TUFBRSxTQUFPO0lBQVEsQ0FBRTtJQUFDLFFBQVEsRUFBQyxRQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsd0JBRTFELENBQ0wsRUFDTjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0dWLFVBQVUsQ0FBQ2tCLEdBQUcsQ0FBQyxVQUFDQyxDQUFDLEVBQUs7SUFDckIsT0FDRTtNQUFLLEdBQUcsRUFBRUEsQ0FBRTtNQUFDLEtBQUssRUFBRTtRQUFFQyxPQUFPLEVBQUU7TUFBZSxDQUFFO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDOUM7TUFBSyxHQUFHLEVBQUUsd0JBQXdCLEdBQUdELENBQUU7TUFBQyxLQUFLLEVBQUU7UUFBRUUsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDLEdBQUcsRUFBRUYsQ0FBRTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQUcsRUFDN0U7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNFLE1BQUMsMkNBQU07TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxrQkFBWSxDQUNmLENBQ0Y7RUFFVixDQUFDLENBQUMsQ0FDRSxDQUNEO0FBRVgsQ0FBQztBQUFDLEdBNUNJdkIsUUFBUTtFQUFBLFFBQ3dCQyx1REFBVyxFQUNUSyx1REFBUSxFQUM3QkssdURBQVc7QUFBQTtBQUFBLEtBSHhCWCxRQUFRO0FBOENDQSx1RUFBUSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBhZGRQb3N0IH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcblxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW1hZ2VQYXRocywgYWRkUG9zdERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XG4gIGNvbnN0IFt0ZXh0LCBvbkNoYW5nZVRleHQsIHNldFRleHRdID0gdXNlSW5wdXQoXCJcIik7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcbiAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFkZFBvc3REb25lKSB7XG4gICAgICBzZXRUZXh0KFwiXCIpO1xuICAgIH1cbiAgfSwgW2FkZFBvc3REb25lXSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goYWRkUG9zdCh0ZXh0KSk7XG4gIH0sIFt0ZXh0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBzdHlsZT17eyBtYXJnaW46IFwiMTBweCAwIDIwcHhcIiB9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdH0+XG4gICAgICA8SW5wdXQuVGV4dEFyZWEgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IG1heExlbmd0aD17MTQwfSBwbGFjZWhvbGRlcj1cIuutkOuToOyngCDstpTqsIDtlbTrs7TshLjsmpQgISBcIiAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gb25DIC8+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19IGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAg7JeF66Gc65OcXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9cIiArIHZ9IHN0eWxlPXt7IHdpZHRoOiBcIjIwMHB4XCIgfX0gYWx0PXt2fSAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24+7KCc6rGwPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostForm.js\n");

/***/ })

})