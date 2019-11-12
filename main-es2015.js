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

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\n\t<h1>About Us</h1>\n\t<p>\n\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, nostrum a nihil molestiae, ut repudiandae sapiente iure eveniet eligendi rerum veniam voluptatem aspernatur velit nemo neque voluptatibus ipsa tenetur et.\n\t</p>\n\t<br>\n\t<br>\n\t<a routerLink=\"/clients\">\n\t\tRead More\n\t</a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clients/clients.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clients/clients.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clients\">\n\t<h1>What Our Client Says</h1>\n\t<div class=\"flex\">\n\t\t<div class=\"left\">\n\t\t\t<br>\n\t\t\t<br>\n\t\t\t<br>\n\t\t\t<br>\n\t\t\t<i class=\"fa fa-users fa-5x\"></i>\n\t\t</div>\n\t\t<div class=\"right\">\n\t\t\t<div class=\"row\" *ngFor=\"let x of a\">\n\t\t\t\t<p><i [className]=\"x.icon\"></i> {{x.name}}</p>\n\t\t\t\t<div class=\"white\">\n\t\t\t\t\t<div class=\"silver\" [style.width]=\"x.width\">{{x.width}}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n\t<p>Our Experts will resolve your quesry in a momemts</p>\n\t<input placeholder=\"Name\">\n\t<input placeholder=\"Email\">\n\t<input placeholder=\"Phone\">\n\t<input placeholder=\"Message\">\n\t<button>Send Message</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n\tCopy right All rights reserver with @angular 8\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery\">\n\t<h1>See Our Gallery</h1>\n\t<div class=\"flex\">\n\t\t<div class=\"item\" *ngFor=\"let x of a\">\n\t\t\t<img src=\"assets/img/a (1).jpg\">\n\t\t\t<p>\n\t\t\t\tname {{x}}\n\t\t\t</p>\n\t\t\t<button>Pin This</button>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n\t<h1>Welcome to Angular site</h1>\n\t<p>\n\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatum, dolore eligendi atque beatae nemo error aspernatur, officia in rem natus accusamus fugit. Esse quidem similique, consequatur incidunt ad ab?\n\t</p>\n\t<br>\n\t<button>Read More</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\t<div class=\"left\">\n\t\t<a routerLink=\"/\">Angular8</a>\n\t</div>\n\t<div class=\"right\">\n\t\t<a routerLink=\"/\">home</a>\n\t\t<a routerLink=\"/about\">about</a>\n\t\t<a routerLink=\"/services\">services</a>\n\t\t<a routerLink=\"/clients\">clients</a>\n\t\t<a routerLink=\"/team\">team</a>\n\t\t<a routerLink=\"/gallery\">gallery</a>\n\t\t<a routerLink=\"/newsletter\">newsletter</a>\n\t\t<a routerLink=\"/contact\">contact</a>\n\t\t<a routerLink=\"/price\">price</a>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/news/news.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/news/news.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"news\">\n\t<p>Subscibe to our monthly newsletter</p>\n\n\t<input placeholder=\"Enter Email Address\">\n\t<button>subscribe</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/price/price.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/price/price.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"price\">\n\t<h1>See Our Price Plans</h1>\n\n\t<div class=\"flex\">\n\t\t<div class=\"item\">\n\t\t\t<div class=\"h\">Basic</div>\n\t\t\t<div class=\"b\">\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<small>$200</small>\n\t\t\t</div>\n\t\t\t<div class=\"f\">\n\t\t\t\t<button>Signup Here</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"item\">\n\t\t\t<div class=\"h\">Basic</div>\n\t\t\t<div class=\"b\">\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<small>$200</small>\n\t\t\t</div>\n\t\t\t<div class=\"f\">\n\t\t\t\t<button>Signup Here</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"item\">\n\t\t\t<div class=\"h\">Basic</div>\n\t\t\t<div class=\"b\">\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<p>Unlimited Hosting</p>\n\t\t\t\t<small>$200</small>\n\t\t\t</div>\n\t\t\t<div class=\"f\">\n\t\t\t\t<button>Signup Here</button>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/services/services.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/services/services.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"services\">\n\t<h1>Our Services</h1>\n\n\t<div class=\"flex\">\n\t\t<div class=\"item\" *ngFor=\"let x of a\">\n\t\t\t<i [className]=\"x.icon\"></i>\n\t\t\t<p>Lorem ipsum dolor sit amet</p>\n\t\t\t<h4>{{x.name}}</h4>\n\t\t\t<button>Read More</button>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/team/team.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/team/team.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"team\">\n\t<h1>Meet the team</h1>\n\t<div class=\"flex\">\n\t\t<div class=\"item\" *ngFor=\"let  x of a\">\n\t\t\t<img [src]=\"x.photo\">\n\t\t\t<div class=\"pad\">\n\t\t\t\t<h3>{{x.profile}}</h3>\n\t\t\t\t<h4>{{x.name}}</h4>\n\t\t\t\t<p>{{x.price|currency}} / Hour</p>\n\t\t\t\t<button>Hire Now</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/work/work.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/work/work.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>work works!</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about\r\n{\r\n\tpadding: 2% 10%;\r\n\tbackground: #f1f1f1;\r\n}\r\n.about>a\r\n{\r\n\ttext-decoration: none;\r\n\tcolor:white;\r\n\tbackground: black;\r\n\tpadding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCO0FBQ0E7O0NBRUMscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsYUFBYTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dFxyXG57XHJcblx0cGFkZGluZzogMiUgMTAlO1xyXG5cdGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuLmFib3V0PmFcclxue1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHRiYWNrZ3JvdW5kOiBibGFjaztcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
        this.title = 'site';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./price/price.component */ "./src/app/price/price.component.ts");

















const app = [
    { path: "", component: _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"] },
    { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
    { path: "services", component: _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"] },
    { path: "clients", component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_11__["ClientsComponent"] },
    { path: "team", component: _team_team_component__WEBPACK_IMPORTED_MODULE_15__["TeamComponent"] },
    { path: "gallery", component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__["GalleryComponent"] },
    { path: "newsletter", component: _news_news_component__WEBPACK_IMPORTED_MODULE_14__["NewsComponent"] },
    { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
    { path: "price", component: _price_price_component__WEBPACK_IMPORTED_MODULE_16__["PriceComponent"] },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
            _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
            _clients_clients_component__WEBPACK_IMPORTED_MODULE_11__["ClientsComponent"],
            _work_work_component__WEBPACK_IMPORTED_MODULE_12__["WorkComponent"],
            _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__["GalleryComponent"],
            _news_news_component__WEBPACK_IMPORTED_MODULE_14__["NewsComponent"],
            _team_team_component__WEBPACK_IMPORTED_MODULE_15__["TeamComponent"],
            _price_price_component__WEBPACK_IMPORTED_MODULE_16__["PriceComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(app)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/clients/clients.component.css":
/*!***********************************************!*\
  !*** ./src/app/clients/clients.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clients\r\n{\r\n\tpadding: 2% 20%;\r\n\tbackground: white;\r\n\ttext-align: center;\r\n}\r\n.clients>.flex\r\n{\r\n\tdisplay: flex;\r\n}\r\n.clients>.flex>.left\r\n{\r\n\twidth: 40%;\r\n}\r\n.clients>.flex>.right\r\n{\r\n\twidth: 60%;\r\n\ttext-align: left;\r\n}\r\n.clients>.flex>.right>.row\r\n{\r\n\tmargin-top: 2%;\r\n\tmargin-bottom: 2%;\r\n}\r\n.clients>.flex>.right>.row>p\r\n{\r\n\tletter-spacing: 10px;\r\n}\r\n.clients>.flex>.right>.row>.white\r\n{\r\n\tbackground: grey;\r\n\tline-height: 40px;\r\n}\r\n.clients>.flex>.right>.row>.white>.silver\r\n{\r\n\tbackground: black;\r\n\tcolor:white;\r\n\ttext-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7QUFDQTs7Q0FFQyxhQUFhO0FBQ2Q7QUFDQTs7Q0FFQyxVQUFVO0FBQ1g7QUFDQTs7Q0FFQyxVQUFVO0NBQ1YsZ0JBQWdCO0FBQ2pCO0FBQ0E7O0NBRUMsY0FBYztDQUNkLGlCQUFpQjtBQUNsQjtBQUNBOztDQUVDLG9CQUFvQjtBQUNyQjtBQUNBOztDQUVDLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudHNcclxue1xyXG5cdHBhZGRpbmc6IDIlIDIwJTtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNsaWVudHM+LmZsZXhcclxue1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNsaWVudHM+LmZsZXg+LmxlZnRcclxue1xyXG5cdHdpZHRoOiA0MCU7XHJcbn1cclxuLmNsaWVudHM+LmZsZXg+LnJpZ2h0XHJcbntcclxuXHR3aWR0aDogNjAlO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmNsaWVudHM+LmZsZXg+LnJpZ2h0Pi5yb3dcclxue1xyXG5cdG1hcmdpbi10b3A6IDIlO1xyXG5cdG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi5jbGllbnRzPi5mbGV4Pi5yaWdodD4ucm93PnBcclxue1xyXG5cdGxldHRlci1zcGFjaW5nOiAxMHB4O1xyXG59XHJcbi5jbGllbnRzPi5mbGV4Pi5yaWdodD4ucm93Pi53aGl0ZVxyXG57XHJcblx0YmFja2dyb3VuZDogZ3JleTtcclxuXHRsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG4uY2xpZW50cz4uZmxleD4ucmlnaHQ+LnJvdz4ud2hpdGU+LnNpbHZlclxyXG57XHJcblx0YmFja2dyb3VuZDogYmxhY2s7XHJcblx0Y29sb3I6d2hpdGU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClientsComponent = class ClientsComponent {
    constructor() {
        this.a = [
            { icon: "fa fa-html5", width: "90%", name: "html5" },
            { icon: "fa fa-css3", width: "50%", name: "responsive " },
            { icon: "fa fa-camera", width: "70%", name: "photography" },
        ];
    }
    ngOnInit() {
    }
};
ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clients',
        template: __webpack_require__(/*! raw-loader!./clients.component.html */ "./node_modules/raw-loader/index.js!./src/app/clients/clients.component.html"),
        styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/clients/clients.component.css")]
    })
], ClientsComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact\r\n{\r\n\tpadding:2%;\r\n\tbackground: black;\r\n\tcolor:white;\r\n}\r\n.contact>input\r\n{\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n\tmargin-top: 2%;\r\n\tmargin-bottom: 2%;\r\n}\r\n.contact>button\r\n{\r\n\tpadding: 10px;\r\n\tborder:0;\r\n\toutline:0;\r\n\tbackground: tomato;\r\n\tcolor:white;\r\n\tfont-weight: bold;\r\n\ttext-transform: capitalize;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixXQUFXO0FBQ1o7QUFDQTs7Q0FFQyxhQUFhO0NBQ2IsV0FBVztDQUNYLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7QUFDQTs7Q0FFQyxhQUFhO0NBQ2IsUUFBUTtDQUNSLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGlCQUFpQjtDQUNqQiwwQkFBMEI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0XHJcbntcclxuXHRwYWRkaW5nOjIlO1xyXG5cdGJhY2tncm91bmQ6IGJsYWNrO1xyXG5cdGNvbG9yOndoaXRlO1xyXG59XHJcbi5jb250YWN0PmlucHV0XHJcbntcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi10b3A6IDIlO1xyXG5cdG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi5jb250YWN0PmJ1dHRvblxyXG57XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRib3JkZXI6MDtcclxuXHRvdXRsaW5lOjA7XHJcblx0YmFja2dyb3VuZDogdG9tYXRvO1xyXG5cdGNvbG9yOndoaXRlO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer\r\n{\r\n\tline-height: 100px;\r\n\tbackground: grey;\r\n\tcolor:white;\r\n\ttext-align: center;\r\n\t\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLGtCQUFrQjs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyXHJcbntcclxuXHRsaW5lLWhlaWdodDogMTAwcHg7XHJcblx0YmFja2dyb3VuZDogZ3JleTtcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery\r\n{\r\n\tpadding: 2%;\r\n\tbackground: white;\r\n\ttext-align: center;\r\n}\r\n.gallery>.flex\r\n{\r\n\tdisplay: flex;\r\n\tflex-flow: wrap;\r\n\tjustify-content: center;\r\n}\r\n.gallery>.flex>.item\r\n{\r\n\twidth: 15%;\t\r\n\tbox-shadow:0 0 10px black;\r\n\tmargin: 2%;\r\n\tpadding: 1%;\r\n}\r\n.gallery>.flex>.item>img\r\n{\r\n\twidth: 100%;\r\n}\r\n.gallery>.flex>.item>button\r\n{\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n\tborder:0;\r\n\toutline:0;\r\n\tbackground:tomato;\r\n\tcolor:white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7QUFDQTs7Q0FFQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLHVCQUF1QjtBQUN4QjtBQUNBOztDQUVDLFVBQVU7Q0FDVix5QkFBeUI7Q0FDekIsVUFBVTtDQUNWLFdBQVc7QUFDWjtBQUNBOztDQUVDLFdBQVc7QUFDWjtBQUNBOztDQUVDLGFBQWE7Q0FDYixXQUFXO0NBQ1gsUUFBUTtDQUNSLFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakIsV0FBVztBQUNaIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeVxyXG57XHJcblx0cGFkZGluZzogMiU7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5nYWxsZXJ5Pi5mbGV4XHJcbntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZ2FsbGVyeT4uZmxleD4uaXRlbVxyXG57XHJcblx0d2lkdGg6IDE1JTtcdFxyXG5cdGJveC1zaGFkb3c6MCAwIDEwcHggYmxhY2s7XHJcblx0bWFyZ2luOiAyJTtcclxuXHRwYWRkaW5nOiAxJTtcclxufVxyXG4uZ2FsbGVyeT4uZmxleD4uaXRlbT5pbWdcclxue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5nYWxsZXJ5Pi5mbGV4Pi5pdGVtPmJ1dHRvblxyXG57XHJcblx0cGFkZGluZzogMTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXI6MDtcclxuXHRvdXRsaW5lOjA7XHJcblx0YmFja2dyb3VuZDp0b21hdG87XHJcblx0Y29sb3I6d2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GalleryComponent = class GalleryComponent {
    constructor() {
        this.a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }
    ngOnInit() {
    }
};
GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: __webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html"),
        styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
    })
], GalleryComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner\r\n{\r\n\tbackground: #222;\r\n\tcolor:white;\r\n\tpadding: 2% 20%;\r\n}\r\n.banner>button\r\n{\r\n\tpadding: 10px;\r\n\tborder:0;\r\n\toutline:0;\r\n\tbackground: white;\r\n\tcolor:black;\r\n\tfont-size: 120%;\r\n\t\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsZUFBZTtBQUNoQjtBQUNBOztDQUVDLGFBQWE7Q0FDYixRQUFRO0NBQ1IsU0FBUztDQUNULGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsZUFBZTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyXHJcbntcclxuXHRiYWNrZ3JvdW5kOiAjMjIyO1xyXG5cdGNvbG9yOndoaXRlO1xyXG5cdHBhZGRpbmc6IDIlIDIwJTtcclxufVxyXG4uYmFubmVyPmJ1dHRvblxyXG57XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRib3JkZXI6MDtcclxuXHRvdXRsaW5lOjA7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0Y29sb3I6YmxhY2s7XHJcblx0Zm9udC1zaXplOiAxMjAlO1xyXG5cdFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header\r\n{\r\n\twidth: 100%;\r\n\tbackground: black;\r\n\tcolor:white;\r\n\tline-height: 40px;\r\n\tdisplay: flex;\r\n}\r\n\r\n.header>.left>a\r\n{\r\n\tpadding: 2%;\r\n\ttext-decoration: none;\r\n\tpadding: 1%;\r\n\tcolor:white;\r\n}\r\n\r\n.header>.left\r\n{\r\n\twidth: 20%;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 120%;\r\n}\r\n\r\n.header>.right\r\n{\r\n\twidth: 80%;\r\n\ttext-align: right;\r\n}\r\n\r\n.header>.right>a:hover\r\n{\r\n\tbackground: white;\r\n\tcolor:black;\r\n}\r\n\r\n.header>.right>a\r\n{\r\n\ttransition: 0.4s;\r\n\ttext-decoration: none;\r\n\tpadding: 1%;\r\n\ttext-transform: capitalize;\r\n\tcolor:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLGFBQWE7QUFDZDs7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCxXQUFXO0FBQ1o7O0FBQ0E7O0NBRUMsVUFBVTtDQUNWLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUNBOztDQUVDLFVBQVU7Q0FDVixpQkFBaUI7QUFDbEI7O0FBQ0E7O0NBRUMsaUJBQWlCO0NBQ2pCLFdBQVc7QUFDWjs7QUFDQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCwwQkFBMEI7Q0FDMUIsV0FBVztBQUNaIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyXHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kOiBibGFjaztcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHRsaW5lLWhlaWdodDogNDBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaGVhZGVyPi5sZWZ0PmFcclxue1xyXG5cdHBhZGRpbmc6IDIlO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRwYWRkaW5nOiAxJTtcclxuXHRjb2xvcjp3aGl0ZTtcclxufVxyXG4uaGVhZGVyPi5sZWZ0XHJcbntcclxuXHR3aWR0aDogMjAlO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC1zaXplOiAxMjAlO1xyXG59XHJcbi5oZWFkZXI+LnJpZ2h0XHJcbntcclxuXHR3aWR0aDogODAlO1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5oZWFkZXI+LnJpZ2h0PmE6aG92ZXJcclxue1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdGNvbG9yOmJsYWNrO1xyXG59XHJcbi5oZWFkZXI+LnJpZ2h0PmFcclxue1xyXG5cdHRyYW5zaXRpb246IDAuNHM7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHBhZGRpbmc6IDElO1xyXG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdGNvbG9yOndoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news\r\n{\r\n\tpadding: 2% 10%;\r\n\tbackground: black;\r\n\tcolor:white;\r\n}\r\n.news>input\r\n{\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n}\r\n.news>button\r\n{\r\n\tpadding: 10px;\r\n\tborder:0;\r\n\toutline:0;\r\n\tmargin-top: 2%;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixXQUFXO0FBQ1o7QUFDQTs7Q0FFQyxhQUFhO0NBQ2IsV0FBVztBQUNaO0FBQ0E7O0NBRUMsYUFBYTtDQUNiLFFBQVE7Q0FDUixTQUFTO0NBQ1QsY0FBYzs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3Ncclxue1xyXG5cdHBhZGRpbmc6IDIlIDEwJTtcclxuXHRiYWNrZ3JvdW5kOiBibGFjaztcclxuXHRjb2xvcjp3aGl0ZTtcclxufVxyXG4ubmV3cz5pbnB1dFxyXG57XHJcblx0cGFkZGluZzogMTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4ubmV3cz5idXR0b25cclxue1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Ym9yZGVyOjA7XHJcblx0b3V0bGluZTowO1xyXG5cdG1hcmdpbi10b3A6IDIlO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewsComponent = class NewsComponent {
    constructor() { }
    ngOnInit() {
    }
};
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: __webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/index.js!./src/app/news/news.component.html"),
        styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
    })
], NewsComponent);



/***/ }),

/***/ "./src/app/price/price.component.css":
/*!*******************************************!*\
  !*** ./src/app/price/price.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".price\r\n{\r\n\tpadding: 2%;\r\n\ttext-align: center;\r\n}\r\n.price>.flex\r\n{\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\r\n}\r\n.price>.flex>.item\r\n{\r\n\twidth: 100%;\r\n\tmargin: 2%;\r\n\tbox-shadow:0 0 10px black;\r\n}\r\n.price>.flex>.item>.h\r\n{\r\n\tpadding: 2%;\r\n\tbackground: black;\r\n\tcolor:white;\r\n\tfont-size: 250%;\r\n}\r\n.price>.flex>.item>.b\r\n{\r\n\tline-height: 40px;\r\n\tbackground: silver;\r\n\tpadding: 2%;\r\n}\r\n.price>.flex>.item>.b>small\r\n{\r\n\tfont-size: 400%;\r\n}\r\n.price>.flex>.item>.f\r\n{\r\n\tbackground: grey;\r\n\tpadding: 4%;\r\n}\r\n.price>.flex>.item>.f>button\r\n{\r\n\tpadding: 10px;\r\n\twidth: 100%;\r\n\tborder:0;\r\n\toutline:0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2UvcHJpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxXQUFXO0NBQ1gsa0JBQWtCO0FBQ25CO0FBQ0E7O0NBRUMsYUFBYTtDQUNiLHVCQUF1Qjs7QUFFeEI7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLHlCQUF5QjtBQUMxQjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLGVBQWU7QUFDaEI7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjtBQUNBOztDQUVDLGVBQWU7QUFDaEI7QUFDQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaO0FBQ0E7O0NBRUMsYUFBYTtDQUNiLFdBQVc7Q0FDWCxRQUFRO0NBQ1IsU0FBUztBQUNWIiwiZmlsZSI6InNyYy9hcHAvcHJpY2UvcHJpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmljZVxyXG57XHJcblx0cGFkZGluZzogMiU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wcmljZT4uZmxleFxyXG57XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuLnByaWNlPi5mbGV4Pi5pdGVtXHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW46IDIlO1xyXG5cdGJveC1zaGFkb3c6MCAwIDEwcHggYmxhY2s7XHJcbn1cclxuLnByaWNlPi5mbGV4Pi5pdGVtPi5oXHJcbntcclxuXHRwYWRkaW5nOiAyJTtcclxuXHRiYWNrZ3JvdW5kOiBibGFjaztcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHRmb250LXNpemU6IDI1MCU7XHJcbn1cclxuLnByaWNlPi5mbGV4Pi5pdGVtPi5iXHJcbntcclxuXHRsaW5lLWhlaWdodDogNDBweDtcclxuXHRiYWNrZ3JvdW5kOiBzaWx2ZXI7XHJcblx0cGFkZGluZzogMiU7XHJcbn1cclxuLnByaWNlPi5mbGV4Pi5pdGVtPi5iPnNtYWxsXHJcbntcclxuXHRmb250LXNpemU6IDQwMCU7XHJcbn1cclxuLnByaWNlPi5mbGV4Pi5pdGVtPi5mXHJcbntcclxuXHRiYWNrZ3JvdW5kOiBncmV5O1xyXG5cdHBhZGRpbmc6IDQlO1xyXG59XHJcbi5wcmljZT4uZmxleD4uaXRlbT4uZj5idXR0b25cclxue1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyOjA7XHJcblx0b3V0bGluZTowO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/price/price.component.ts":
/*!******************************************!*\
  !*** ./src/app/price/price.component.ts ***!
  \******************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PriceComponent = class PriceComponent {
    constructor() { }
    ngOnInit() {
    }
};
PriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-price',
        template: __webpack_require__(/*! raw-loader!./price.component.html */ "./node_modules/raw-loader/index.js!./src/app/price/price.component.html"),
        styles: [__webpack_require__(/*! ./price.component.css */ "./src/app/price/price.component.css")]
    })
], PriceComponent);



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".services\r\n{\r\n\tpadding: 2% 10%;\r\n\tbackground:#222;\r\n\tcolor:white;\r\n\ttext-align: center;\r\n}\r\n.services>.flex\r\n{\r\n\tdisplay: flex;\r\n\tflex-flow: wrap;\r\n\tjustify-content: center;\r\n}\r\n.services>.flex>.item:hover\r\n{\r\n\ttransform: scale(1.1);\r\n\tcursor: pointer;\r\n\tbackground: tomato;\r\n\tcolor:white;\r\n\tbox-shadow: 0 10px 10px black;\r\n\tborder-color: white;\r\n}\r\n.services>.flex>.item\r\n{\r\n\ttransition: 0.4s;\r\n\twidth: 15%;\r\n\tpadding: 1%;\r\n\tmargin: 1%;\r\n\tbackground: white;\r\n\tcolor:black;\r\n\tborder:10px solid black;\r\n}\r\n.services>.flex>.item>button\r\n{\r\n\tpadding: 10px;\r\n\tborder:0;\r\n\toutline:0;\r\n\tbackground: white;\r\n\tcolor:black;\r\n\tfont-weight: bold;\r\n\ttransition: 0.4s;\r\n}\r\n.services>.flex>.item:hover>button\r\n{\r\n\tbackground: black;\r\n\tcolor:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxlQUFlO0NBQ2YsZUFBZTtDQUNmLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7QUFDQTs7Q0FFQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLHVCQUF1QjtBQUN4QjtBQUNBOztDQUVDLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCw2QkFBNkI7Q0FDN0IsbUJBQW1CO0FBQ3BCO0FBQ0E7O0NBRUMsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsdUJBQXVCO0FBQ3hCO0FBQ0E7O0NBRUMsYUFBYTtDQUNiLFFBQVE7Q0FDUixTQUFTO0NBQ1QsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCO0FBQ0E7O0NBRUMsaUJBQWlCO0NBQ2pCLFdBQVc7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZXNcclxue1xyXG5cdHBhZGRpbmc6IDIlIDEwJTtcclxuXHRiYWNrZ3JvdW5kOiMyMjI7XHJcblx0Y29sb3I6d2hpdGU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zZXJ2aWNlcz4uZmxleFxyXG57XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNlcnZpY2VzPi5mbGV4Pi5pdGVtOmhvdmVyXHJcbntcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJhY2tncm91bmQ6IHRvbWF0bztcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHRib3gtc2hhZG93OiAwIDEwcHggMTBweCBibGFjaztcclxuXHRib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHRcclxuLnNlcnZpY2VzPi5mbGV4Pi5pdGVtXHJcbntcclxuXHR0cmFuc2l0aW9uOiAwLjRzO1xyXG5cdHdpZHRoOiAxNSU7XHJcblx0cGFkZGluZzogMSU7XHJcblx0bWFyZ2luOiAxJTtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRjb2xvcjpibGFjaztcclxuXHRib3JkZXI6MTBweCBzb2xpZCBibGFjaztcclxufVxyXG4uc2VydmljZXM+LmZsZXg+Lml0ZW0+YnV0dG9uXHJcbntcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGJvcmRlcjowO1xyXG5cdG91dGxpbmU6MDtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRjb2xvcjpibGFjaztcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHR0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcbi5zZXJ2aWNlcz4uZmxleD4uaXRlbTpob3Zlcj5idXR0b25cclxue1xyXG5cdGJhY2tncm91bmQ6IGJsYWNrO1xyXG5cdGNvbG9yOndoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServicesComponent = class ServicesComponent {
    constructor() {
        this.a = [
            { icon: "fa fa-5x fa-globe", name: "service1" },
            { icon: "fa fa-5x fa-bolt", name: "service2" },
            { icon: "fa fa-5x fa-html5", name: "service3" },
            { icon: "fa fa-5x fa-css3", name: "service4" },
            { icon: "fa fa-5x fa-user", name: "service5" },
            { icon: "fa fa-5x fa-car", name: "service6" },
            { icon: "fa fa-5x fa-home", name: "service7" },
            { icon: "fa fa-5x fa-cog", name: "service8" },
            { icon: "fa fa-5x fa-trash-o", name: "service9" },
            { icon: "fa fa-5x fa-pencil", name: "service10" },
            { icon: "fa fa-5x fa-cloud-download", name: "service11" },
            { icon: "fa fa-5x fa-cloud-upload", name: "service12" },
        ];
    }
    ngOnInit() {
    }
};
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-services',
        template: __webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/index.js!./src/app/services/services.component.html"),
        styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
    })
], ServicesComponent);



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team\r\n{\r\n\tpadding: 2% 20%;\r\n\tbackground: white;\r\n\ttext-align: center;\r\n}\r\n.team>.flex\r\n{\r\n\tdisplay: flex;\r\n}\r\n.team>.flex>.item:hover>.pad>button\r\n{\r\n\tbackground: white;\r\n\tcolor:black;\r\n\tbox-shadow: 200px 0px 0px red inset;\r\n}\r\n.team>.flex>.item:hover\r\n{\r\n\tcursor: pointer;\r\n\tbackground: black;\r\n\tcolor:white;\r\n\tbox-shadow:0 10px 10px black;\r\n\ttransform: scale(1.1);\r\n}\r\n.team>.flex>.item\r\n{\r\n\twidth: 100%;\r\n\tborder-top: 10px solid black;\r\n\tbox-shadow:0 10px 10px black;\r\n\tmargin: 2%;\r\n\tpadding: 1%;\r\n\tline-height: 10px;\r\n\ttransition: 0.4s;\r\n}\r\n.team>.flex>.item>img\r\n{\r\n\twidth: 100%;\r\n}\r\n.team>.flex>.item>.pad\r\n{\r\n\tpadding: 5%;\r\n}\r\n.team>.flex>.item>.pad>h3\r\n{\r\n\ttext-transform: uppercase;\r\n}\r\n.team>.flex>.item>.pad>h4\r\n{\r\n\ttext-transform: capitalize;\r\n}\r\n.team>.flex>.item>.pad>p\r\n{\r\n\r\n}\r\n.team>.flex>.item>.pad>button\r\n{\r\n\twidth: 100%;\r\n\tpadding: 10px;\r\n\tborder:0;\r\n\tbackground: black;\r\n\tcolor:white;\r\n\tfont-weight: bold;\r\n\ttext-transform: capitalize;\r\n\ttransition:2s;\r\n\tbox-shadow: 0px 0px 0px yellow inset;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7QUFDQTs7Q0FFQyxhQUFhO0FBQ2Q7QUFDQTs7Q0FFQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLG1DQUFtQztBQUNwQztBQUNBOztDQUVDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLDRCQUE0QjtDQUM1QixxQkFBcUI7QUFDdEI7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gsNEJBQTRCO0NBQzVCLDRCQUE0QjtDQUM1QixVQUFVO0NBQ1YsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFDQTs7Q0FFQyxXQUFXO0FBQ1o7QUFDQTs7Q0FFQyxXQUFXO0FBQ1o7QUFDQTs7Q0FFQyx5QkFBeUI7QUFDMUI7QUFDQTs7Q0FFQywwQkFBMEI7QUFDM0I7QUFDQTs7O0FBR0E7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLFFBQVE7Q0FDUixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLGlCQUFpQjtDQUNqQiwwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLG9DQUFvQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW1cclxue1xyXG5cdHBhZGRpbmc6IDIlIDIwJTtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRlYW0+LmZsZXhcclxue1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnRlYW0+LmZsZXg+Lml0ZW06aG92ZXI+LnBhZD5idXR0b25cclxue1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdGNvbG9yOmJsYWNrO1xyXG5cdGJveC1zaGFkb3c6IDIwMHB4IDBweCAwcHggcmVkIGluc2V0O1xyXG59XHJcbi50ZWFtPi5mbGV4Pi5pdGVtOmhvdmVyXHJcbntcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0YmFja2dyb3VuZDogYmxhY2s7XHJcblx0Y29sb3I6d2hpdGU7XHJcblx0Ym94LXNoYWRvdzowIDEwcHggMTBweCBibGFjaztcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi50ZWFtPi5mbGV4Pi5pdGVtXHJcbntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXItdG9wOiAxMHB4IHNvbGlkIGJsYWNrO1xyXG5cdGJveC1zaGFkb3c6MCAxMHB4IDEwcHggYmxhY2s7XHJcblx0bWFyZ2luOiAyJTtcclxuXHRwYWRkaW5nOiAxJTtcclxuXHRsaW5lLWhlaWdodDogMTBweDtcclxuXHR0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcbi50ZWFtPi5mbGV4Pi5pdGVtPmltZ1xyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLnRlYW0+LmZsZXg+Lml0ZW0+LnBhZFxyXG57XHJcblx0cGFkZGluZzogNSU7XHJcbn1cclxuLnRlYW0+LmZsZXg+Lml0ZW0+LnBhZD5oM1xyXG57XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4udGVhbT4uZmxleD4uaXRlbT4ucGFkPmg0XHJcbntcclxuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4udGVhbT4uZmxleD4uaXRlbT4ucGFkPnBcclxue1xyXG5cclxufVxyXG4udGVhbT4uZmxleD4uaXRlbT4ucGFkPmJ1dHRvblxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRib3JkZXI6MDtcclxuXHRiYWNrZ3JvdW5kOiBibGFjaztcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHR0cmFuc2l0aW9uOjJzO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHllbGxvdyBpbnNldDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TeamComponent = class TeamComponent {
    constructor() {
        this.a = [
            { price: 60, name: "john", profile: "designer", photo: "assets/img/a (1).jpg" },
            { price: 20, name: "abc", profile: "developer", photo: "assets/img/a (2).jpg" },
            { price: 60, name: "amit", profile: "designer", photo: "assets/img/a (1).png" },
            { price: 80, name: "sumit", profile: "designer", photo: "assets/img/a (2).png" },
        ];
    }
    ngOnInit() {
    }
};
TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team',
        template: __webpack_require__(/*! raw-loader!./team.component.html */ "./node_modules/raw-loader/index.js!./src/app/team/team.component.html"),
        styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
    })
], TeamComponent);



/***/ }),

/***/ "./src/app/work/work.component.css":
/*!*****************************************!*\
  !*** ./src/app/work/work.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkComponent = class WorkComponent {
    constructor() { }
    ngOnInit() {
    }
};
WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work',
        template: __webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/index.js!./src/app/work/work.component.html"),
        styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/work/work.component.css")]
    })
], WorkComponent);



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

module.exports = __webpack_require__(/*! D:\class\angular\site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map