/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmodules"] = self["webpackChunkmodules"] || []).push([["src_graph1_js"],{

/***/ "./src/graph1.js":
/*!***********************!*\
  !*** ./src/graph1.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"webpack/sharing/consume/default/@emotion/core/@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-minimal-pie-chart */ \"webpack/sharing/consume/default/react-minimal-pie-chart/react-minimal-pie-chart\");\n/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion-theming */ \"webpack/sharing/consume/default/emotion-theming/emotion-theming\");\n/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion_theming__WEBPACK_IMPORTED_MODULE_3__);\n/** @jsx jsx */\n\n\n\n\n\nconst Graph1 = () => {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  const counter = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.counter);\n  const graph = [1, 2, 3];\n  const theme = (0,emotion_theming__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n  return (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n    css: {\n      padding: 10,\n      border: `20px solid ${theme.colors.danger}`,\n      background: `${theme.colors.success}`,\n      fontSize: \"x-large\"\n    }\n  }, (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n    onClick: () => dispatch({\n      type: 'ADD_COUNTER',\n      payload: 1\n    }),\n    style: {\n      fontSize: \"x-large\"\n    }\n  }, \"Hi I'm the remote federated Child!\"), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", null, \"Data: \", JSON.stringify(counter)), (0,_emotion_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_1__.PieChart, {\n    data: [{\n      title: \"One\",\n      value: graph[0],\n      color: \"#E38627\"\n    }, {\n      title: \"Two\",\n      value: graph[1],\n      color: \"#C13C37\"\n    }, {\n      title: \"Three\",\n      value: graph[2],\n      color: \"#6A2135\"\n    }],\n    radius: react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_1__.PieChart.defaultProps.radius - 3,\n    lineWidth: 20,\n    animate: true\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph1);\n\n//# sourceURL=webpack://modules/./src/graph1.js?");

/***/ })

}]);