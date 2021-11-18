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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "webpack/sharing/consume/default/recoil/recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "webpack/sharing/consume/default/@emotion/react/@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-minimal-pie-chart */ "webpack/sharing/consume/default/react-minimal-pie-chart/react-minimal-pie-chart");
/* harmony import */ var react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_2__);
/** @jsx jsx */




const Graph1 = ({
  state
}) => {
  console.log('state :>> ', state);
  const [graph, setGraph] = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(state);
  console.log('graph :>> ', graph);
  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    css: {
      padding: 10,
      border: `5px solid ${theme.colors.primary}`,
      background: "#eee",
      fontSize: "x-large"
    }
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    onClick: () => setGraph(graph.map(item => item * 2)),
    style: {
      fontSize: "x-large"
    }
  }, "Hi I'm the remote federated Child!"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", null, "Data: ", JSON.stringify(graph)), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_2__.PieChart, {
    data: [{
      title: "One",
      value: graph[0],
      color: "#E38627"
    }, {
      title: "Two",
      value: graph[1],
      color: "#C13C37"
    }, {
      title: "Three",
      value: graph[2],
      color: "#6A2135"
    }],
    radius: react_minimal_pie_chart__WEBPACK_IMPORTED_MODULE_2__.PieChart.defaultProps.radius - 3,
    lineWidth: 20,
    animate: true
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph1);

/***/ })

}]);
//# sourceMappingURL=src_graph1_js.js.map