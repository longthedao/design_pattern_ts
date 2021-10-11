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
var Observer = function () {
    console.log('Observer mounted');
};


/***/ }),

/***/ "./src/observer/js/NumberModel.ts":
/*!****************************************!*\
  !*** ./src/observer/js/NumberModel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var NumberModel = /** @class */ (function () {
    function NumberModel() {
        this.number = 0;
        this.color = 'red';
        this.observers = [];
    }
    NumberModel.prototype.increment = function () {
        var colors = ['orange', 'red', 'green', 'purple', 'grey', 'blue'];
        this.number++;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.notifyObserver(); // update when relize change
    };
    NumberModel.prototype.addObserver = function (o) {
        this.observers.push(o);
    };
    NumberModel.prototype.notifyObserver = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.update(this);
        }
    };
    return NumberModel;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberModel);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("edc2b55d006fc050dc2b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.bcddcfbc9337791b966a.hot-update.js.map