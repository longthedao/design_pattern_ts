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
/* harmony import */ var _js_NumberModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/NumberModel */ "./src/observer/js/NumberModel.ts");

var model = new _js_NumberModel__WEBPACK_IMPORTED_MODULE_0__["default"]();
model.increment();
var button = document.querySelector('.btn');
button.addEventListener('click', function (event) {
    model.increment();
});
var Observer = function () {
    console.log('Observer mounted');
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1715028ac54967f48feb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.679b4949a628a0136fdf.hot-update.js.map