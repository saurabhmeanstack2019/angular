(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  Welcome to Angular 8.X Todo App\n</div>\n\n<div class=\"main\">\n  <div class=\"left\">\n    <h2>New Todo</h2>\n    <p>Title </p>\n    <input placeholder=\"File Uploads\" #x1>\n    <p>Description </p>\n    <input placeholder=\"Upload data to server\" #x2>\n    <button (click)=\"createNewTodo(x1,x2)\">Create New Todo</button>\n  </div>\n  <div class=\"right\">\n    <div class=\"search\">\n      <input placeholder=\"Search By Task or Description\"  (keyup.enter)=\"s=$event.target.value\">\n    </div>\n    <div class=\"filters\">\n      <button (click)=\"sort1()\">Sort By Date</button>\n      <button (click)=\"sort2()\">Sort By Order</button>\n    </div>\n    <div class=\"todos\">\n      <div class=\"item\" *ngFor=\"let todo of todos|filter:s;let i=index;\">\n        <h3>{{todo.title}}</h3>\n        <p>{{todo.desc}}</p>\n        <button (click)=\"edit(i,todo)\" class=\"edit-btn\">Edit</button>\n        <button (click)=\"del(i)\" class=\"delete-btn\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"footer\">\n  copy rights all rights reserved with Angular @designer Saurabh Kataria\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .header\r\n  {\r\n    padding: 5%;\r\n    font-size: 200%;\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n    background: black;\r\n    color:white;\r\n  }\r\n  .footer\r\n  {\r\n    background: #222;\r\n    color:white;\r\n    line-height: 40px;\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n  }\r\n  .main\r\n  {\r\n    display: flex;\r\n  }\r\n  .main>div\r\n  {\r\n    padding: 2%;\r\n  }\r\n  .main>.left\r\n  {\r\n    width: 15%;\r\n  }\r\n  .main>.left>input\r\n  {\r\n    padding: 10px;\r\n    width: 100%;\r\n    border:2px solid black;\r\n  }\r\n  .main>.left>button\r\n  {\r\n    padding: 10px;\r\n    width: 100%;\r\n    margin-top: 12%;\r\n    background: black;\r\n    color:white;\r\n    border:2px solid black;\r\n  }\r\n  .main>.right\r\n  {\r\n    width: 85%;\r\n  }\r\n  .main>.right>.search\r\n  {\r\n\r\n  }\r\n  .main>.right>.search>input\r\n  {\r\n    padding: 10px;\r\n    width: 100%;\r\n    border:0;\r\n    border-bottom: 2px solid black;\r\n  }\r\n  .main>.right>.filters\r\n  {\r\n    padding-top: 5%;\r\n  }\r\n  .main>.right>.filters>button\r\n  {\r\n    padding: 5px;\r\n    border:0;\r\n    background: teal;\r\n    color:white;\r\n    font-weight: bold;\r\n  }\r\n  .main>.right>.todos\r\n  {\r\n    padding: 1%;\r\n    display: flex;\r\n  }\r\n  .main>.right>.todos>.item\r\n  {\r\n    margin: 2%;\r\n    border-top: 5px solid black;\r\n    box-shadow:0 10px 10px black;\r\n    padding: 1%;\r\n    width: 20%;\r\n  }\r\n  .main>.right>.todos>.item>button\r\n  {\r\n    display: block;\r\n    width: 100%;\r\n    border:0;\r\n    padding: 10px;\r\n    font-weight: bold;\r\n  }\r\n  .main>.right>.todos>.item>.edit-btn\r\n  {\r\n    background: orange;\r\n  }\r\n  .main>.right>.todos>.item>.delete-btn\r\n  {   \r\n    background: tomato;\r\n    color:white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFOztJQUVFLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsV0FBVztFQUNiO0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtFQUM1QjtFQUVBOztJQUVFLGFBQWE7RUFDZjtFQUNBOztJQUVFLFdBQVc7RUFDYjtFQUNBOztJQUVFLFVBQVU7RUFDWjtFQUNBOztJQUVFLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCO0VBQ0E7O0lBRUUsYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7RUFFQTs7SUFFRSxVQUFVO0VBQ1o7RUFDQTs7O0VBR0E7RUFDQTs7SUFFRSxhQUFhO0lBQ2IsV0FBVztJQUNYLFFBQVE7SUFDUiw4QkFBOEI7RUFDaEM7RUFDQTs7SUFFRSxlQUFlO0VBQ2pCO0VBQ0E7O0lBRUUsWUFBWTtJQUNaLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7RUFDQTs7SUFFRSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsVUFBVTtFQUNaO0VBQ0E7O0lBRUUsY0FBYztJQUNkLFdBQVc7SUFDWCxRQUFRO0lBQ1IsYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLGtCQUFrQjtFQUNwQjtFQUNBOztJQUVFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5oZWFkZXJcclxuICB7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogMjAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgLmZvb3RlclxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG5cclxuICAubWFpblxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5tYWluPmRpdlxyXG4gIHtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gIH1cclxuICAubWFpbj4ubGVmdFxyXG4gIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgfVxyXG4gIC5tYWluPi5sZWZ0PmlucHV0XHJcbiAge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgLm1haW4+LmxlZnQ+YnV0dG9uXHJcbiAge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTIlO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG5cclxuICAubWFpbj4ucmlnaHRcclxuICB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gIH1cclxuICAubWFpbj4ucmlnaHQ+LnNlYXJjaFxyXG4gIHtcclxuXHJcbiAgfVxyXG4gIC5tYWluPi5yaWdodD4uc2VhcmNoPmlucHV0XHJcbiAge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG4gIC5tYWluPi5yaWdodD4uZmlsdGVyc1xyXG4gIHtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICB9XHJcbiAgLm1haW4+LnJpZ2h0Pi5maWx0ZXJzPmJ1dHRvblxyXG4gIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjowO1xyXG4gICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5tYWluPi5yaWdodD4udG9kb3NcclxuICB7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5tYWluPi5yaWdodD4udG9kb3M+Lml0ZW1cclxuICB7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzowIDEwcHggMTBweCBibGFjaztcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcbiAgLm1haW4+LnJpZ2h0Pi50b2Rvcz4uaXRlbT5idXR0b25cclxuICB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5tYWluPi5yaWdodD4udG9kb3M+Lml0ZW0+LmVkaXQtYnRuXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xyXG4gIH1cclxuICAubWFpbj4ucmlnaHQ+LnRvZG9zPi5pdGVtPi5kZWxldGUtYnRuXHJcbiAgeyAgIFxyXG4gICAgYmFja2dyb3VuZDogdG9tYXRvO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.todos = [];
        this.s = "";
        this.toggle = false;
        if (localStorage.savedTodos) {
            this.todos = JSON.parse(localStorage.savedTodos);
        }
    }
    createNewTodo(x1, x2) {
        let id = 1;
        let title = x1.value;
        let desc = x2.value;
        let date = Date.now();
        if (this.todos.length > 0) {
            id = this.todos[this.todos.length - 1].id + 1;
        }
        if (this.todos.filter(item => { return item.title == title; }).length > 0) {
            alert("This Todos Already Registered");
        }
        else {
            this.todos.push({ id: id, title: title, desc: desc, date: date });
            x1.value = "";
            x2.value = "";
            alert("new todo added");
            this.save();
        }
    }
    edit(index, todo) {
        let title = prompt("new title", todo.title);
        let desc = prompt("new desc", todo.desc);
        this.todos[index].title = title;
        this.todos[index].desc = desc;
        this.save();
    }
    del(index) {
        this.todos.splice(index, 1);
        this.save();
    }
    save() {
        localStorage.savedTodos = JSON.stringify(this.todos);
    }
    sort1() {
        let t = this.toggle;
        this.todos.sort((y, x) => {
            return t ? (x["date"] - y["date"]) : (y["date"] - x["date"]);
        });
        this.toggle = !this.toggle;
    }
    sort2() {
        let t = this.toggle;
        this.todos.sort((y, x) => {
            return t ? (x["id"] - y["id"]) : (y["id"] - x["id"]);
        });
        this.toggle = !this.toggle;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(a, s) {
        let b = a;
        if (s.trim()) {
            b = b.filter(item => {
                return Object.values(item).join("").includes(s) == true;
            });
        }
        return b;
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lenovo\Desktop\class\angular\p1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map