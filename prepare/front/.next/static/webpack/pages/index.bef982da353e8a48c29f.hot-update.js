webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ \"./hooks/useInput.js\");\n\nvar _this = undefined,\n  _jsxFileName = \"/Users/kimsungkwang/WORKSPACE/Nodejs/Grape/prepare/front/components/PostForm.js\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar PostForm = function PostForm() {\n  _s();\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n      return state.post;\n    }),\n    imagePaths = _useSelector.imagePaths,\n    addPostDone = _useSelector.addPostDone;\n  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"\"),\n    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 3),\n    text = _useInput2[0],\n    onChangeText = _useInput2[1],\n    setText = _useInput2[2];\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    imageInput.current.click();\n  }, [imageInput.current]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (addPostDone) {\n      setText(\"\");\n    }\n  }, [addPostDone]);\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    // if (!text || !text.trim()) {\n    //   return alert(\"게시글을 작성하세요\");\n    // }\n    var formData = new FormData();\n    imagePaths.forEach(function (p) {\n      formData.append(\"image\", p);\n    });\n    formData.append(\"content\", text);\n    return dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__[\"ADD_POST_REQUEST\"],\n      data: formData\n    });\n  }, [text, imagePaths]);\n  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    console.log(\"image\", e.target.files);\n    var imageFormData = new FormData();\n    [].forEach.call(e.target.files, function (f) {\n      imageFormData.append(\"image\", f);\n    });\n    dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__[\"UPLOAD_IMAGES_REQUEST\"],\n      data: imageFormData\n    });\n  });\n  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (index) {\n    return function () {\n      dispatch({\n        type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__[\"REMOVE_IMAGE\"],\n        data: index\n      });\n    };\n  }, []);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    style: {\n      margin: \"10px 0 20px\"\n    },\n    encType: \"multipart/form-data\",\n    onFinish: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"].TextArea, {\n    value: text,\n    onChange: onChangeText,\n    maxLength: 140,\n    placeholder: \"\\uBB50\\uB4E0\\uC9C0 \\uCD94\\uAC00\\uD574\\uBCF4\\uC138\\uC694 ! \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"file\",\n    name: \"image\",\n    multiple: true,\n    hidden: true,\n    ref: imageInput,\n    onChange: onChangeImages,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: onClickImageUpload,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, \"\\uC774\\uBBF8\\uC9C0 \\uC5C5\\uB85C\\uB4DC\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"primary\",\n    style: {\n      \"float\": \"right\"\n    },\n    htmlType: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, \"\\uC5C5\\uB85C\\uB4DC\")), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, imagePaths.map(function (v, i) {\n    return __jsx(\"div\", {\n      key: v,\n      style: {\n        display: \"inline-block\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 13\n      }\n    }, __jsx(\"img\", {\n      src: \"http://localhost:3065/\".concat(v),\n      style: {\n        width: \"200px\"\n      },\n      alt: v,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 15\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 15\n      }\n    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      onClick: onRemoveImage(i),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 17\n      }\n    }, \"\\uC81C\\uAC70\")));\n  })));\n};\n_s(PostForm, \"d+TRyDPv7UFo90UXkW1ir/uWT3w=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"]];\n});\n_c = PostForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostForm);\nvar _c;\n$RefreshReg$(_c, \"PostForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcz83OWM1Il0sIm5hbWVzIjpbIlBvc3RGb3JtIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJ1c2VJbnB1dCIsInRleHQiLCJvbkNoYW5nZVRleHQiLCJzZXRUZXh0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGljayIsInVzZUVmZmVjdCIsIm9uU3VibWl0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJwIiwiYXBwZW5kIiwidHlwZSIsIkFERF9QT1NUX1JFUVVFU1QiLCJkYXRhIiwib25DaGFuZ2VJbWFnZXMiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsImNhbGwiLCJmIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwibWFyZ2luIiwibWFwIiwidiIsImkiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDbkI7QUFDWTtBQUVrQztBQUNoRDtBQUV6QyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxHQUFTO0VBQUE7RUFDckIsbUJBQW9DQywrREFBVyxDQUFDLFVBQUNDLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUNDLElBQUk7SUFBQSxFQUFDO0lBQTlEQyxVQUFVLGdCQUFWQSxVQUFVO0lBQUVDLFdBQVcsZ0JBQVhBLFdBQVc7RUFDL0IsZ0JBQXNDQywrREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQTNDQyxJQUFJO0lBQUVDLFlBQVk7SUFBRUMsT0FBTztFQUNsQyxJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVB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QUFDLElBQUksRUFBQyxTQUFTO0lBQUMsS0FBSyxFQUFFO01BQUUsU0FBTztJQUFRLENBQUU7SUFBQyxRQUFRLEVBQUMsUUFBUTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHdCQUUxRCxDQUNMLEVBQ047SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNHVixVQUFVLENBQUNzQyxHQUFHLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUs7SUFDeEIsT0FDRTtNQUFLLEdBQUcsRUFBRUQsQ0FBRTtNQUFDLEtBQUssRUFBRTtRQUFFRSxPQUFPLEVBQUU7TUFBZSxDQUFFO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDOUM7TUFBSyxHQUFHLGtDQUEyQkYsQ0FBQyxDQUFHO01BQUMsS0FBSyxFQUFFO1FBQUVHLEtBQUssRUFBRTtNQUFRLENBQUU7TUFBQyxHQUFHLEVBQUVILENBQUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFHLEVBQzdFO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDRSxNQUFDLDJDQUFNO01BQUMsT0FBTyxFQUFFTCxhQUFhLENBQUNNLENBQUMsQ0FBRTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLGtCQUFZLENBQzFDLENBQ0Y7RUFFVixDQUFDLENBQUMsQ0FDRSxDQUNEO0FBRVgsQ0FBQztBQUFDLEdBN0VJNUMsUUFBUTtFQUFBLFFBQ3dCQyx1REFBVyxFQUNUSyx1REFBUSxFQUM3QkssdURBQVc7QUFBQTtBQUFBLEtBSHhCWCxRQUFRO0FBK0VDQSx1RUFBUSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUG9zdEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgeyBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFJFTU9WRV9JTUFHRSwgQUREX1BPU1RfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XG5cbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xuICBjb25zdCBbdGV4dCwgb25DaGFuZ2VUZXh0LCBzZXRUZXh0XSA9IHVzZUlucHV0KFwiXCIpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhZGRQb3N0RG9uZSkge1xuICAgICAgc2V0VGV4dChcIlwiKTtcbiAgICB9XG4gIH0sIFthZGRQb3N0RG9uZV0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIC8vIGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcbiAgICAvLyAgIHJldHVybiBhbGVydChcIuqyjOyLnOq4gOydhCDsnpHshLHtlZjshLjsmpRcIik7XG4gICAgLy8gfVxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBwKTtcbiAgICB9KTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJjb250ZW50XCIsIHRleHQpO1xuICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxuICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgfSk7XG4gIH0sIFt0ZXh0LCBpbWFnZVBhdGhzXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaW1hZ2VcIiwgZS50YXJnZXQuZmlsZXMpO1xuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKSA9PiB7XG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGYpO1xuICAgIH0pO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcbiAgICAgIGRhdGE6IGltYWdlRm9ybURhdGEsXG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXgpID0+ICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogUkVNT1ZFX0lNQUdFLFxuICAgICAgICBkYXRhOiBpbmRleCxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4IDAgMjBweFwiIH19IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25GaW5pc2g9e29uU3VibWl0fT5cbiAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH0gbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi662Q65Og7KeAIOy2lOqwgO2VtOuztOyEuOyalCAhIFwiIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VcIiBtdWx0aXBsZSBoaWRkZW4gcmVmPXtpbWFnZUlucHV0fSBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9IC8+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65OcPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19IGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAg7JeF66Gc65OcXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1LyR7dn1gfSBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiIH19IGFsdD17dn0gLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlSW1hZ2UoaSl9PuygnOqxsDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostForm.js\n");

/***/ })

})