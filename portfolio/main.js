(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _portfolio3d_portfolio3d_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio3d/portfolio3d.component */ "./src/app/portfolio3d/portfolio3d.component.ts");
/* harmony import */ var _portfolio2d_portfolio2d_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio2d/portfolio2d.component */ "./src/app/portfolio2d/portfolio2d.component.ts");
/* harmony import */ var _portfolio_music_portfolio_music_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio-music/portfolio-music.component */ "./src/app/portfolio-music/portfolio-music.component.ts");
/* harmony import */ var _portfolio_digital_portfolio_digital_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio-digital/portfolio-digital.component */ "./src/app/portfolio-digital/portfolio-digital.component.ts");








var routes = [
    { path: 'digital', component: _portfolio_digital_portfolio_digital_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioDigitalComponent"] },
    { path: 'music', component: _portfolio_music_portfolio_music_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioMusicComponent"] },
    { path: '2d', component: _portfolio2d_portfolio2d_component__WEBPACK_IMPORTED_MODULE_5__["Portfolio2dComponent"] },
    { path: '3d', component: _portfolio3d_portfolio3d_component__WEBPACK_IMPORTED_MODULE_4__["Portfolio3dComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header routerLink='/'>\n  <div class='branding'>\n    <h1>mark joesting media</h1>\n    <h2>web development, music and art, in St Paul, MN</h2>\n  </div>\n  <div class='social'>\n    <a href='https://www.linkedin.com/in/mjoesting/' target='_blank'><img src='/assets/logo_linkedin.png'></a>\n  </div>\n  <div class='headerBg'>\n    <video autoplay muted='true' loop poster='/assets/glitterWaves.jpg'>    \n      <source src='/assets/glitterWaves.mp4'\n              type='video/mp4'>\n      <source src='/assets/glitterWaves.ogv'\n              type='video/ogv'>\n      <source src='/assets/glitterWaves.webm'\n              type='video/webm'>\n    </video>\n  </div>\n</header>\n\n<div class='wrapper'>\n  <div class='main'>\n    <div class='mainContent'>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, a, p, ul, li {\n  margin: 5px 0; }\n\na {\n  color: #c27e1f; }\n\n:host {\n  flex: 1 1 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch; }\n\n:host header {\n    flex: 0 0 auto;\n    display: flex;\n    flex-flow: row-reverse nowrap;\n    justify-content: space-between;\n    align-items: flex-end;\n    padding: 10px;\n    border-bottom: 10px solid #6b8783;\n    position: relative;\n    cursor: pointer; }\n\n@media (max-width: 667px) {\n      :host header {\n        flex-direction: column;\n        align-items: center; } }\n\n:host header .branding {\n      flex: 1 1 auto;\n      display: flex;\n      flex-flow: column nowrap;\n      justify-content: center;\n      align-items: flex-end; }\n\n@media (max-width: 667px) {\n        :host header .branding {\n          align-items: center; } }\n\n:host header .social {\n      width: 32px;\n      height: 27px; }\n\n:host header .social img {\n        width: 100%;\n        height: 100%; }\n\n:host header .headerBg {\n      mix-blend-mode: lighten;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: 1;\n      overflow: hidden; }\n\n:host header .headerBg video {\n        width: 100%; }\n\n:host .wrapper {\n    flex: 1 1 auto;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-start;\n    align-items: stretch;\n    box-sizing: border-box;\n    background: #d3ebe3; }\n\n:host .wrapper .main {\n      flex: 1 1 100%;\n      height: 100%;\n      display: flex;\n      flex-flow: column nowrap;\n      justify-content: flex-start;\n      align-items: stretch;\n      overflow: hidden; }\n\n:host .wrapper .main .mainContent {\n        flex: 1 1 100%;\n        height: 100%;\n        display: flex;\n        flex-flow: column nowrap;\n        justify-content: flex-start;\n        align-items: stretch;\n        padding: 25px;\n        box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJrLmpvZXN0aW5nL0dvb2dsZSBEcml2ZS9EZXYvcHJvamVjdHMvcG9ydGZvbGlvX3NvdXJjZS9wb3J0Zm9saW8vc3JjL2FwcC9fZ2xvYmFscy5zY3NzIiwiL1VzZXJzL21hcmsuam9lc3RpbmcvR29vZ2xlIERyaXZlL0Rldi9wcm9qZWN0cy9wb3J0Zm9saW9fc291cmNlL3BvcnRmb2xpby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxjQVRxQixFQUFBOztBQ0Z6QjtFQUNJLGNBQWM7RUFDZCxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixvQkFBb0IsRUFBQTs7QUFMeEI7SUFRUSxjQUFjO0lBQ2QsYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixpQ0RmaUI7SUNnQmpCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7O0FBRWY7TUFsQlI7UUFtQlksc0JBQXNCO1FBQ3RCLG1CQUFtQixFQUFBLEVBdUMxQjs7QUEzREw7TUF3QlksY0FBYztNQUNkLGFBQWE7TUFDYix3QkFBd0I7TUFDeEIsdUJBQXVCO01BQ3ZCLHFCQUFxQixFQUFBOztBQUVyQjtRQTlCWjtVQStCZ0IsbUJBQW1CLEVBQUEsRUFFMUI7O0FBakNUO01Bb0NZLFdBQVc7TUFDWCxZQUFZLEVBQUE7O0FBckN4QjtRQXdDZ0IsV0FBVztRQUNYLFlBQVksRUFBQTs7QUF6QzVCO01BOENZLHVCQUF1QjtNQUN2QixrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLE9BQU87TUFDUCxRQUFRO01BQ1IsU0FBUztNQUNULFVBQVU7TUFDVixnQkFBZ0IsRUFBQTs7QUFyRDVCO1FBd0RnQixXQUFXLEVBQUE7O0FBeEQzQjtJQThEUSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkR0RWtCLEVBQUE7O0FDRTFCO01BdUVZLGNBQWM7TUFDZCxZQUFZO01BQ1osYUFBYTtNQUNiLHdCQUF3QjtNQUN4QiwyQkFBMkI7TUFDM0Isb0JBQW9CO01BQ3BCLGdCQUFnQixFQUFBOztBQTdFNUI7UUFnRmdCLGNBQWM7UUFDZCxZQUFZO1FBQ1osYUFBYTtRQUNiLHdCQUF3QjtRQUN4QiwyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJGNvbG9yLW1haW4tbGlnaHQ6ICNkM2ViZTM7XG4kY29sb3ItbWFpbi1kYXJrOiAjNmI4NzgzO1xuJGNvbG9yLWdyZXktbGlnaHQ6ICM5MmE4YTY7XG4kY29sb3ItZ3JleS1kYXJrOiAjNTU1O1xuJGNvbG9yLWhpZ2hsaWdodDogI2MyN2UxZjtcbiRjb2xvci13aGl0ZTogI2ZmZjtcblxuLy8gZnVuZGFtZW50YWxzXG5oMSwgaDIsIGgzLCBhLCBwLCB1bCwgbGkge1xuICAgIG1hcmdpbjogNXB4IDA7XG59XG5cbmEge1xuICAgIGNvbG9yOiAkY29sb3ItaGlnaGxpZ2h0O1xufVxuIiwiXG5AaW1wb3J0ICcuL2dsb2JhbHMnO1xuXG46aG9zdCB7XG4gICAgZmxleDogMSAxIDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIFxuICAgIGhlYWRlciB7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlIG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgJGNvbG9yLW1haW4tZGFyaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5icmFuZGluZyB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zb2NpYWwge1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI3cHg7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlckJnIHtcbiAgICAgICAgICAgIG1peC1ibGVuZC1tb2RlOiBsaWdodGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAgIHZpZGVvIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC53cmFwcGVyIHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLW1haW4tbGlnaHQ7XG5cbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgZmxleDogMSAxIDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgICAubWFpbkNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _portfolio_digital_portfolio_digital_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio-digital/portfolio-digital.component */ "./src/app/portfolio-digital/portfolio-digital.component.ts");
/* harmony import */ var _portfolio_music_portfolio_music_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio-music/portfolio-music.component */ "./src/app/portfolio-music/portfolio-music.component.ts");
/* harmony import */ var _portfolio2d_portfolio2d_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio2d/portfolio2d.component */ "./src/app/portfolio2d/portfolio2d.component.ts");
/* harmony import */ var _portfolio3d_portfolio3d_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio3d/portfolio3d.component */ "./src/app/portfolio3d/portfolio3d.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal.service.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"],
                _portfolio_digital_portfolio_digital_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioDigitalComponent"],
                _portfolio_music_portfolio_music_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioMusicComponent"],
                _portfolio2d_portfolio2d_component__WEBPACK_IMPORTED_MODULE_9__["Portfolio2dComponent"],
                _portfolio3d_portfolio3d_component__WEBPACK_IMPORTED_MODULE_10__["Portfolio3dComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_11__["ModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_modal_service__WEBPACK_IMPORTED_MODULE_12__["ModalService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul>\n  <li *ngFor='let item of items'>\n      <strong *ngIf='!item.link'>{{item.label}}</strong>\n      <a *ngIf='item.link' href='{{item.link}}' target='_blank'><strong>{{item.label}}</strong></a>\n    <div class='thumb' *ngFor='let image of item.images' (click)='toggleModal(item.modalId)'>\n      <img src='{{image}}'>\n    </div>\n    <app-modal *ngIf='item.images' id='{{item.modalId}}' [modalId]='item.modalId'>\n      <div *ngFor='let modalImage of item.images'>\n        <img src='{{modalImage}}'>\n      </div>\n    </app-modal>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.scss":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, a, p, ul, li {\n  margin: 5px 0; }\n\na {\n  color: #c27e1f; }\n\n:host ul {\n  list-style: none;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 0;\n  padding: 0; }\n\n:host ul li {\n    flex: 0 0 auto;\n    width: 200px;\n    height: 200px;\n    overflow: hidden;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    background: #fff;\n    border: solid 2px #6b8783;\n    box-sizing: border-box;\n    padding: 5px;\n    margin: 10px;\n    cursor: pointer; }\n\n@media (max-width: 667px) {\n      :host ul li {\n        width: 100%; } }\n\n:host ul li .thumb {\n      flex: 1 1 auto;\n      display: flex;\n      flex-flow: column nowrap;\n      justify-content: center;\n      align-items: center; }\n\n:host ul li img {\n      max-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJrLmpvZXN0aW5nL0dvb2dsZSBEcml2ZS9EZXYvcHJvamVjdHMvcG9ydGZvbGlvX3NvdXJjZS9wb3J0Zm9saW8vc3JjL2FwcC9fZ2xvYmFscy5zY3NzIiwiL1VzZXJzL21hcmsuam9lc3RpbmcvR29vZ2xlIERyaXZlL0Rldi9wcm9qZWN0cy9wb3J0Zm9saW9fc291cmNlL3BvcnRmb2xpby9zcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxjQVRxQixFQUFBOztBQ0Z6QjtFQUdRLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFUbEI7SUFZWSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGdCRGpCTTtJQ2tCTix5QkR0QmE7SUN1QmIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZSxFQUFBOztBQUVmO01BM0JaO1FBNEJnQixXQUFXLEVBQUEsRUFjbEI7O0FBMUNUO01BZ0NnQixjQUFjO01BQ2QsYUFBYTtNQUNiLHdCQUF3QjtNQUN4Qix1QkFBdUI7TUFDdkIsbUJBQW1CLEVBQUE7O0FBcENuQztNQXdDZ0IsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kY29sb3ItbWFpbi1saWdodDogI2QzZWJlMztcbiRjb2xvci1tYWluLWRhcms6ICM2Yjg3ODM7XG4kY29sb3ItZ3JleS1saWdodDogIzkyYThhNjtcbiRjb2xvci1ncmV5LWRhcms6ICM1NTU7XG4kY29sb3ItaGlnaGxpZ2h0OiAjYzI3ZTFmO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuXG4vLyBmdW5kYW1lbnRhbHNcbmgxLCBoMiwgaDMsIGEsIHAsIHVsLCBsaSB7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuYSB7XG4gICAgY29sb3I6ICRjb2xvci1oaWdobGlnaHQ7XG59XG4iLCJcbkBpbXBvcnQgJy4uL2dsb2JhbHMnO1xuXG46aG9zdCB7XG5cbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAkY29sb3ItbWFpbi1kYXJrO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aHVtYiB7XG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent($modalService) {
        this.$modalService = $modalService;
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent.prototype.toggleModal = function (modalId) {
        this.$modalService.toggleModal(modalId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GalleryComponent.prototype, "items", void 0);
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/gallery/gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class='tile' routerLink='/digital'>\n      <h3>digital design</h3>\n      <img class='bg' src='/assets/bg_digital.png'>\n    </div>\n    <div class='tile' routerLink='/music'>\n      <h3>music performance and production</h3>\n      <img class='bg' src='/assets/bg_music.jpg'>\n    </div>\n    <div class='tile' routerLink='/2d'>\n      <h3>2d traditional media</h3>\n      <img class='bg' src='/assets/bg_2d.jpg'>\n    </div>\n    <div class='tile' routerLink='/3d'>\n      <h3>3d traditional media</h3>\n      <img class='bg' src='/assets/bg_3d.jpg'>\n    </div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, a, p, ul, li {\n  margin: 5px 0; }\n\na {\n  color: #c27e1f; }\n\n:host {\n  flex: 1 1 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch; }\n\n@media (max-width: 667px) {\n    :host {\n      flex-direction: column;\n      align-items: stretch; } }\n\n.tile {\n  flex: 1 1 100%;\n  margin: 10px;\n  background: #6b8783;\n  border: solid 2px #6b8783;\n  padding: 5px;\n  color: #6b8783;\n  position: relative;\n  cursor: pointer;\n  overflow: hidden; }\n\n.tile h3 {\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    color: #fff;\n    z-index: 2; }\n\n.tile .bg {\n    position: absolute;\n    top: -50px;\n    left: -50px;\n    height: 150%;\n    mix-blend-mode: luminosity;\n    z-index: 1; }\n\n@media (max-width: 667px) {\n      .tile .bg {\n        height: unset;\n        top: unset;\n        width: 150%;\n        bottom: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJrLmpvZXN0aW5nL0dvb2dsZSBEcml2ZS9EZXYvcHJvamVjdHMvcG9ydGZvbGlvX3NvdXJjZS9wb3J0Zm9saW8vc3JjL2FwcC9fZ2xvYmFscy5zY3NzIiwiL1VzZXJzL21hcmsuam9lc3RpbmcvR29vZ2xlIERyaXZlL0Rldi9wcm9qZWN0cy9wb3J0Zm9saW9fc291cmNlL3BvcnRmb2xpby9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxjQVRxQixFQUFBOztBQ0Z6QjtFQUNJLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0Isb0JBQW9CLEVBQUE7O0FBRXBCO0lBUko7TUFTUSxzQkFBc0I7TUFDdEIsb0JBQW9CLEVBQUEsRUFFM0I7O0FBRUQ7RUFDSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CRGxCcUI7RUNtQnJCLHlCRG5CcUI7RUNvQnJCLFlBQVk7RUFDWixjRHJCcUI7RUNzQnJCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBVHBCO0lBWVEsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0QxQlU7SUMyQlYsVUFBVSxFQUFBOztBQWhCbEI7SUFvQlEsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixVQUFVLEVBQUE7O0FBRVY7TUEzQlI7UUE0QlksYUFBYTtRQUNiLFVBQVU7UUFDVixXQUFXO1FBQ1gsU0FBUyxFQUFBLEVBRWhCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kY29sb3ItbWFpbi1saWdodDogI2QzZWJlMztcbiRjb2xvci1tYWluLWRhcms6ICM2Yjg3ODM7XG4kY29sb3ItZ3JleS1saWdodDogIzkyYThhNjtcbiRjb2xvci1ncmV5LWRhcms6ICM1NTU7XG4kY29sb3ItaGlnaGxpZ2h0OiAjYzI3ZTFmO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuXG4vLyBmdW5kYW1lbnRhbHNcbmgxLCBoMiwgaDMsIGEsIHAsIHVsLCBsaSB7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuYSB7XG4gICAgY29sb3I6ICRjb2xvci1oaWdobGlnaHQ7XG59XG4iLCJcbkBpbXBvcnQgJy4uL2dsb2JhbHMnO1xuXG46aG9zdCB7XG4gICAgZmxleDogMSAxIDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjdweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB9XG59XG5cbi50aWxlIHtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yLW1haW4tZGFyaztcbiAgICBib3JkZXI6IHNvbGlkIDJweCAkY29sb3ItbWFpbi1kYXJrO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogJGNvbG9yLW1haW4tZGFyaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBoMyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG5cbiAgICAuYmcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTUwcHg7XG4gICAgICAgIGxlZnQ6IC01MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MCU7XG4gICAgICAgIG1peC1ibGVuZC1tb2RlOiBsdW1pbm9zaXR5O1xuICAgICAgICB6LWluZGV4OiAxO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjdweCkge1xuICAgICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgIHRvcDogdW5zZXQ7XG4gICAgICAgICAgICB3aWR0aDogMTUwJTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modal.service.ts":
/*!**********************************!*\
  !*** ./src/app/modal.service.ts ***!
  \**********************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalService = /** @class */ (function () {
    function ModalService() {
    }
    ModalService.prototype.toggleModal = function (modalId) {
        var modal = document.querySelector("#" + modalId + " .modalWrapper");
        if (modal.classList.contains('open')) {
            modal.classList.remove('open');
        }
        else {
            modal.classList.add('open');
        }
    };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.html":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class='modalWrapper' [ngClass]='{\"open\": open}'>\n  <div class='closeButton' (click)='toggleModal(modalId)'>X</div>\n  <div class='modalContent'>\n    <ng-content></ng-content>\n  </div>\n  <div class='modalOverlay' (click)='toggleModal(modalId)'></div>\n</div>\n"

/***/ }),

/***/ "./src/app/modal/modal.component.scss":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, a, p, ul, li {\n  margin: 5px 0; }\n\na {\n  color: #c27e1f; }\n\n.modalWrapper {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: none;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  overflow: auto;\n  z-index: 2; }\n\n.modalWrapper.open {\n    display: flex; }\n\n.modalWrapper .closeButton {\n    position: absolute;\n    top: 40px;\n    right: 40px;\n    background: #fff;\n    border: solid 2px #6b8783;\n    border-radius: 20px;\n    width: 20px;\n    height: 20px;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    z-index: 4; }\n\n.modalWrapper .modalContent {\n    position: absolute;\n    top: 25px;\n    right: 25px;\n    bottom: 25px;\n    left: 25px;\n    flex: 1 1 100%;\n    display: flex;\n    justify-content: center;\n    margin: 25px;\n    padding: 25px;\n    background: #d3ebe3;\n    border: solid 2px #6b8783;\n    z-index: 3;\n    cursor: auto;\n    overflow: auto; }\n\n.modalWrapper .modalContent img {\n      max-width: 50%; }\n\n.modalWrapper .modalOverlay {\n    background: #555;\n    opacity: .5;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJrLmpvZXN0aW5nL0dvb2dsZSBEcml2ZS9EZXYvcHJvamVjdHMvcG9ydGZvbGlvX3NvdXJjZS9wb3J0Zm9saW8vc3JjL2FwcC9fZ2xvYmFscy5zY3NzIiwiL1VzZXJzL21hcmsuam9lc3RpbmcvR29vZ2xlIERyaXZlL0Rldi9wcm9qZWN0cy9wb3J0Zm9saW9fc291cmNlL3BvcnRmb2xpby9zcmMvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBVHFCLEVBQUE7O0FDRnpCO0VBQ0ksZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFVBQVUsRUFBQTs7QUFYZDtJQWNRLGFBQWEsRUFBQTs7QUFkckI7SUFrQlEsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0JEbEJVO0lDbUJWLHlCRHZCaUI7SUN3QmpCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsVUFBVSxFQUFBOztBQS9CbEI7SUFtQ1Esa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CRC9Da0I7SUNnRGxCLHlCRC9DaUI7SUNnRGpCLFVBQVU7SUFDVixZQUFZO0lBQ1osY0FBYyxFQUFBOztBQWpEdEI7TUFvRFksY0FBYyxFQUFBOztBQXBEMUI7SUF5RFEsZ0JEeERjO0lDeURkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kY29sb3ItbWFpbi1saWdodDogI2QzZWJlMztcbiRjb2xvci1tYWluLWRhcms6ICM2Yjg3ODM7XG4kY29sb3ItZ3JleS1saWdodDogIzkyYThhNjtcbiRjb2xvci1ncmV5LWRhcms6ICM1NTU7XG4kY29sb3ItaGlnaGxpZ2h0OiAjYzI3ZTFmO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuXG4vLyBmdW5kYW1lbnRhbHNcbmgxLCBoMiwgaDMsIGEsIHAsIHVsLCBsaSB7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuYSB7XG4gICAgY29sb3I6ICRjb2xvci1oaWdobGlnaHQ7XG59XG4iLCJcbkBpbXBvcnQgJy4uL2dsb2JhbHMnO1xuXG4ubW9kYWxXcmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgei1pbmRleDogMjtcblxuICAgICYub3BlbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLmNsb3NlQnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4ICRjb2xvci1tYWluLWRhcms7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgei1pbmRleDogNDtcbiAgICB9XG5cbiAgICAubW9kYWxDb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgIHJpZ2h0OiAyNXB4O1xuICAgICAgICBib3R0b206IDI1cHg7XG4gICAgICAgIGxlZnQ6IDI1cHg7XG4gICAgICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAyNXB4O1xuICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItbWFpbi1saWdodDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggJGNvbG9yLW1haW4tZGFyaztcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubW9kYWxPdmVybGF5IHtcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWdyZXktZGFyaztcbiAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent($modalService) {
        this.$modalService = $modalService;
        this.open = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.toggleModal = function (modalId) {
        this.$modalService.toggleModal(modalId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "modalId", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/portfolio-digital/portfolio-digital.component.html":
/*!********************************************************************!*\
  !*** ./src/app/portfolio-digital/portfolio-digital.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>digital design</h2>\n<app-gallery [items]='digitalItems'></app-gallery>\n"

/***/ }),

/***/ "./src/app/portfolio-digital/portfolio-digital.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/portfolio-digital/portfolio-digital.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby1kaWdpdGFsL3BvcnRmb2xpby1kaWdpdGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/portfolio-digital/portfolio-digital.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/portfolio-digital/portfolio-digital.component.ts ***!
  \******************************************************************/
/*! exports provided: PortfolioDigitalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioDigitalComponent", function() { return PortfolioDigitalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioDigitalComponent = /** @class */ (function () {
    function PortfolioDigitalComponent() {
    }
    PortfolioDigitalComponent.prototype.ngOnInit = function () {
        this.digitalItems = [
            { label: 'Design and Illustration', images: ['/assets/digital_nintendoJusticeLeague.png'], modalId: 'digital_nintendoJusticeLeague' },
            { label: 'Design and Illustration', images: ['/assets/digital_danceDanceMeg.gif'], modalId: 'digital_danceDanceMeg' },
            { label: 'Design and Illustration', images: ['/assets/digital_danceDanceKaeti.png'], modalId: 'digital_danceDanceKaeti' },
            { label: 'Design and Illustration', images: ['/assets/digital_LionsPause-4.jpg'], modalId: 'digital_LionsPause-4' },
            { label: 'Graphic Design', images: ['/assets/digital_LionsPause-1.jpg'], modalId: 'digital_LionsPause-1' },
            { label: 'Graphic Design', images: ['/assets/digital_LionsPause-3.jpg'], modalId: 'digital_LionsPause-3' },
            { label: 'Graphic Design', images: ['/assets/digital_LionsPause-5.jpg'], modalId: 'digital_LionsPause-5' },
            { label: 'Graphic Design', images: ['/assets/digital_LionsPause-8.jpg'], modalId: 'digital_LionsPause-8' },
            { label: 'Graphic Design', images: ['/assets/digital_LionsPause-10.jpg'], modalId: 'digital_LionsPause-10' },
            { label: 'Photo Manipulation', images: ['/assets/digital_photoManipulationFindlaw.jpg'], modalId: 'digital_photoManipulationFindlaw' }
        ];
    };
    PortfolioDigitalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio-digital',
            template: __webpack_require__(/*! ./portfolio-digital.component.html */ "./src/app/portfolio-digital/portfolio-digital.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-digital.component.scss */ "./src/app/portfolio-digital/portfolio-digital.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioDigitalComponent);
    return PortfolioDigitalComponent;
}());



/***/ }),

/***/ "./src/app/portfolio-music/portfolio-music.component.html":
/*!****************************************************************!*\
  !*** ./src/app/portfolio-music/portfolio-music.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>music performance and production</h2>\n<app-gallery [items]='musicItems'></app-gallery>\n"

/***/ }),

/***/ "./src/app/portfolio-music/portfolio-music.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/portfolio-music/portfolio-music.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby1tdXNpYy9wb3J0Zm9saW8tbXVzaWMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/portfolio-music/portfolio-music.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/portfolio-music/portfolio-music.component.ts ***!
  \**************************************************************/
/*! exports provided: PortfolioMusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioMusicComponent", function() { return PortfolioMusicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioMusicComponent = /** @class */ (function () {
    function PortfolioMusicComponent() {
    }
    PortfolioMusicComponent.prototype.ngOnInit = function () {
        this.musicItems = [
            { label: 'Guitar Performance Demo Reel', link: 'https://soundcloud.com/mark-joesting/guitarist-demo-reel' },
            { label: 'Music Composition and Production: Waves Podcast Theme 1', link: 'https://soundcloud.com/mark-joesting/waves-podcast-theme-1' },
            { label: 'Music Composition and Production: Waves Podcast Theme 2', link: 'https://soundcloud.com/mark-joesting/waves-podcast-theme-2' },
            { label: 'Music Composition and Production: Waves Podcast Theme 3', link: 'https://soundcloud.com/mark-joesting/waves-podcast-theme-3' },
            { label: 'Music Composition and Production: Waves Podcast Theme 4', link: 'https://soundcloud.com/mark-joesting/waves-podcast-theme-4' },
            { label: 'Bass Guitar Performance: "Painted Skin", by Broken Noise', link: 'http://www.joelhinck.com/Broken%20Noise_files/3.%20Painted%20Skin.mp3' },
            { label: 'Bass Guitar Performance: "Reaching For The Blade", by Broken Noise', link: 'http://www.joelhinck.com/Broken%20Noise_files/7.%20Reaching%20for%20the%20Blade.mp3' },
            { label: 'Bass Guitar Performance: "Eroded Offering", by Broken Noise', link: 'http://www.joelhinck.com/Broken%20Noise_files/8.%20Eroded%20Offering.mp3' },
        ];
    };
    PortfolioMusicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio-music',
            template: __webpack_require__(/*! ./portfolio-music.component.html */ "./src/app/portfolio-music/portfolio-music.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-music.component.scss */ "./src/app/portfolio-music/portfolio-music.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioMusicComponent);
    return PortfolioMusicComponent;
}());



/***/ }),

/***/ "./src/app/portfolio2d/portfolio2d.component.html":
/*!********************************************************!*\
  !*** ./src/app/portfolio2d/portfolio2d.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>2d traditional media</h2>\n<app-gallery [items]='twoDItems'></app-gallery>\n"

/***/ }),

/***/ "./src/app/portfolio2d/portfolio2d.component.scss":
/*!********************************************************!*\
  !*** ./src/app/portfolio2d/portfolio2d.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpbzJkL3BvcnRmb2xpbzJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/portfolio2d/portfolio2d.component.ts":
/*!******************************************************!*\
  !*** ./src/app/portfolio2d/portfolio2d.component.ts ***!
  \******************************************************/
/*! exports provided: Portfolio2dComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portfolio2dComponent", function() { return Portfolio2dComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Portfolio2dComponent = /** @class */ (function () {
    function Portfolio2dComponent() {
    }
    Portfolio2dComponent.prototype.ngOnInit = function () {
        this.twoDItems = [
            { label: 'Graphite Drawing', images: ['/assets/drawing_mollyTheCat.JPG'], modalId: 'drawing_mollyTheCat' },
            { label: 'Graphite Drawing', images: ['/assets/drawing_portraitMorgan.JPG'], modalId: 'drawing_portraitMorgan' },
            { label: 'Pastel Drawing', images: ['/assets/drawing_portraitEmily.jpg'], modalId: 'drawing_portraitEmily' },
            { label: 'Pastel Drawing', images: ['/assets/drawing_portraitNicole.jpg'], modalId: 'drawing_portraitNicole' },
            { label: 'Pastel Drawing', images: ['/assets/drawing_portraitPeter.jpg'], modalId: 'drawing_portraitPeter' },
            { label: 'Pastel Drawing', images: ['/assets/drawing_portraitRheanna.jpg'], modalId: 'drawing_portraitRheanna' },
            { label: 'Graphite Drawing', images: ['/assets/drawing_redPanda.JPG'], modalId: 'drawing_redPanda' },
            { label: 'Watercolor Painting', images: ['/assets/painting_apple.JPG'], modalId: 'painting_apple' },
            { label: 'Block Printing', images: ['/assets/painting_axolotlPrint.JPG'], modalId: 'painting_axolotlPrint' },
        ];
    };
    Portfolio2dComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio2d',
            template: __webpack_require__(/*! ./portfolio2d.component.html */ "./src/app/portfolio2d/portfolio2d.component.html"),
            styles: [__webpack_require__(/*! ./portfolio2d.component.scss */ "./src/app/portfolio2d/portfolio2d.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Portfolio2dComponent);
    return Portfolio2dComponent;
}());



/***/ }),

/***/ "./src/app/portfolio3d/portfolio3d.component.html":
/*!********************************************************!*\
  !*** ./src/app/portfolio3d/portfolio3d.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>2d traditional media</h2>\n<app-gallery [items]='threeDItems'></app-gallery>\n"

/***/ }),

/***/ "./src/app/portfolio3d/portfolio3d.component.scss":
/*!********************************************************!*\
  !*** ./src/app/portfolio3d/portfolio3d.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpbzNkL3BvcnRmb2xpbzNkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/portfolio3d/portfolio3d.component.ts":
/*!******************************************************!*\
  !*** ./src/app/portfolio3d/portfolio3d.component.ts ***!
  \******************************************************/
/*! exports provided: Portfolio3dComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portfolio3dComponent", function() { return Portfolio3dComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Portfolio3dComponent = /** @class */ (function () {
    function Portfolio3dComponent() {
    }
    Portfolio3dComponent.prototype.ngOnInit = function () {
        this.threeDItems = [
            { label: 'Stoneware Sculptural Vase', images: ['/assets/ceramics_hand1.jpg', '/assets/ceramics_hand2.jpg'], modalId: 'ceramics_hand' },
            { label: 'Stoneware Mug', images: ['/assets/ceramics_mug.jpg'], modalId: 'ceramics_mug' },
            { label: 'Earthenware Platter', images: ['/assets/ceramics_platter.JPG'], modalId: 'ceramics_platter' },
            { label: 'Raku Jar', images: ['/assets/ceramics_rakuJar.JPG'], modalId: 'ceramics_rakuJar' },
            { label: 'Raku Bowl', images: ['/assets/ceramics_twistBowl.jpg'], modalId: 'ceramics_twistBowl' },
            { label: 'Porcelain Vase', images: ['/assets/ceramics_vase.JPG'], modalId: 'ceramics_vase' },
            { label: 'Clay Sculpture', images: ['/assets/sculpture_bust1.jpg', '/assets/sculpture_bust2.jpg'], modalId: 'sculpture_bust1' },
        ];
    };
    Portfolio3dComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio3d',
            template: __webpack_require__(/*! ./portfolio3d.component.html */ "./src/app/portfolio3d/portfolio3d.component.html"),
            styles: [__webpack_require__(/*! ./portfolio3d.component.scss */ "./src/app/portfolio3d/portfolio3d.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Portfolio3dComponent);
    return Portfolio3dComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mark.joesting/Google Drive/Dev/projects/portfolio_source/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map