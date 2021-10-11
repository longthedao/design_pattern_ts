"use strict";
self["webpackHotUpdatedesign_pattern_js"]("bundle",{

/***/ "./src/observer/index.ts":
/*!*******************************!*\
  !*** ./src/observer/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observer": () => (/* binding */ Observer)
/* harmony export */ });
/* harmony import */ var _js_ConsoleObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ConsoleObserver */ "./src/observer/js/ConsoleObserver.ts");
/* harmony import */ var _js_ElementObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ElementObserver */ "./src/observer/js/ElementObserver.ts");
/* harmony import */ var _js_HistoryObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/HistoryObserver */ "./src/observer/js/HistoryObserver.ts");
/* harmony import */ var _js_NumberModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/NumberModel */ "./src/observer/js/NumberModel.ts");




var model = new _js_NumberModel__WEBPACK_IMPORTED_MODULE_3__["default"]();
var selfObserver = new _js_ElementObserver__WEBPACK_IMPORTED_MODULE_1__["default"]('#elementObserver');
var consoleObserver = new _js_ConsoleObserver__WEBPACK_IMPORTED_MODULE_0__["default"]('.console');
var historyObserver = new _js_HistoryObserver__WEBPACK_IMPORTED_MODULE_2__["default"]('.history');
model.addObserver(selfObserver);
model.addObserver(consoleObserver);
model.addObserver(historyObserver);
var button = document.querySelector('.btn');
console.log(model);
button.addEventListener('click', function (event) {
    model.increment();
    console.log(model);
});
var Observer = function () {
    console.log('Observer mounted');
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ed518844a5c11f365fb7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.1b6310efd83e6bbc6bba.hot-update.js.map