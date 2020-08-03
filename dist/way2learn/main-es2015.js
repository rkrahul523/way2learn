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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatbox/chatbox.component */ "./src/app/chatbox/chatbox.component.ts");





class AppComponent {
    constructor(calendar) {
        this.calendar = calendar;
        this.title = 'way2learn';
        this.firstName = "rahul";
        this.birthday = new Date(1988, 3, 15);
        this.name = 'rahul';
    }
    ngOnInit() {
        this.model = this.calendar.getToday();
        console.log(this.calendar.getNext(this.calendar.getToday(), 'y'));
    }
    setValue() {
        this.name = 'Nancy';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chatbox");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_3__["ChatboxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chatbox/chatbox.component */ "./src/app/chatbox/chatbox.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_7__["ChatboxComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_7__["ChatboxComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ChatService {
    constructor(http) {
        this.http = http;
        this.url = !window.location.origin.includes('localhost') ?
            'https://bbtraker.herokuapp.com'
            :
                'http://localhost:5000';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'authkey',
                'userid': '1'
            })
        };
        this.getMessages = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
                this.socket.on('waychat', (message) => {
                    observer.next(message);
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url);
        setTimeout(() => {
            this.socket.on('waychat', (message) => {
                console.log(message);
                // io.emit(message);
            });
        }, 5000);
    }
    sendMessage(message) {
        this.socket.emit('waychat', message);
    }
    getIP() {
        return this.http.get('https://api.ipify.org/?format=json');
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/chatbox/chatbox.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chatbox/chatbox.component.ts ***!
  \**********************************************/
/*! exports provided: ChatboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatboxComponent", function() { return ChatboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function ChatboxComponent_ul_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", message_r1 == null ? null : message_r1.user, " ", message_r1 == null ? null : message_r1.ip, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r1 == null ? null : message_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", message_r1 == null ? null : message_r1.time, " ");
} }
class ChatboxComponent {
    constructor(chatService, date) {
        this.chatService = chatService;
        this.date = date;
        this.messages = [];
    }
    ask() {
        this.chatService.sendMessage(this.message);
        this.message = '';
    }
    ngOnInit() {
        this.chatService.getIP().subscribe((res) => {
            this.ip = res.ip;
            console.log(res);
        });
        this.chatService
            .getMessages()
            .subscribe((message) => {
            // console.log(message)
            let data = {
                time: this.date.transform(new Date(), 'shortTime'),
                user: 'student',
                ip: this.ip,
                message: message
            };
            this.messages.push(data);
        });
    }
}
ChatboxComponent.ɵfac = function ChatboxComponent_Factory(t) { return new (t || ChatboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"])); };
ChatboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatboxComponent, selectors: [["app-chatbox"]], decls: 38, vars: 2, consts: [[1, "container"], [1, "col-md-12", "col-sm-6"], [1, "panel"], [1, "panel-heading"], [1, "panel-control"], [1, "btn-group"], [1, "dropdown-menu", "dropdown-menu-right"], ["href", "#"], [1, "divider"], ["id", "demo-connect-chat", "href", "#", "data-target", "#demo-chat-body", 1, "disabled-link"], ["id", "demo-disconnect-chat", "href", "#", "data-target", "#demo-chat-body"], [1, "panel-title"], [1, "nano", "has-scrollbar", 2, "height", "380px"], ["tabindex", "0", 1, "nano-content", "pad-all", 2, "right", "-17px"], ["class", "list-unstyled media-block", 4, "ngFor", "ngForOf"], [1, "nano-pane"], [1, "nano-slider", 2, "height", "141px", "transform", "translate(0px, 0px)"], [1, "panel-footer"], [1, "row"], [1, "col-sm-9", "box-size"], ["type", "text", "placeholder", "Ask your doubt", 1, "ask-question", "form-control", "chat-input", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-sm-3"], ["type", "submit", 1, "ask-question", "button-size", "btn", "btn-primary", "btn-block", 3, "click"], [1, "list-unstyled", "media-block"], [1, "mar-btm"], [1, "media-left"], ["src", "https://bootdey.com/img/Content/avatar/avatar1.png", "alt", "Profile Picture", 1, "img-circle", "img-sm"], [1, "media-body", "pad-hor"], [1, "speech"], ["href", "#", 1, "media-heading"], [1, "speech-time"], [1, "fa", "fa-clock-o", "fa-fw"]], template: function ChatboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Away");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Disconect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ChatboxComponent_ul_28_Template, 13, 4, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatboxComponent_Template_input_ngModelChange_34_listener($event) { return ctx.message = $event; })("keyup", function ChatboxComponent_Template_input_keyup_34_listener($event) { return $event.keyCode == 13 && ctx.ask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatboxComponent_Template_button_click_36_listener() { return ctx.ask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "ASK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: #ebeef0;\n}\n\n.panel[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.075);\n  border-radius: 0;\n  border: 0;\n  margin-bottom: 24px;\n}\n\n.panel[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.panel-heading[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  padding: 0;\n  border-bottom: 1px solid #eee;\n}\n\n.panel-control[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n  float: right;\n  padding: 0 15px;\n}\n\n.panel-title[_ngcontent-%COMP%] {\n  font-weight: normal;\n  padding: 0 20px 0 20px;\n  font-size: 1.416em;\n  line-height: 50px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.panel-control[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:last-child, .panel-control[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]:last-child    > .btn[_ngcontent-%COMP%]:first-child {\n  border-bottom-right-radius: 0;\n}\n\n.panel-control[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .panel-control[_ngcontent-%COMP%]   .dropdown-toggle.btn[_ngcontent-%COMP%] {\n  border: 0;\n}\n\n.nano[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.nano[_ngcontent-%COMP%]    > .nano-content[_ngcontent-%COMP%] {\n  position: absolute;\n  overflow: scroll;\n  overflow-x: hidden;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.pad-all[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.mar-btm[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.media-block[_ngcontent-%COMP%]   .media-left[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n}\n\n.img-sm[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n}\n\n.media-block[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  width: auto;\n}\n\n.pad-hor[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.speech[_ngcontent-%COMP%] {\n  position: relative;\n  background: #b7dcfe;\n  color: #317787;\n  display: inline-block;\n  border-radius: 0;\n  padding: 12px 20px;\n}\n\n.speech[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 0;\n  top: 0;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-right: 7px solid #b7dcfe;\n  margin: 15px 0 0 -6px;\n}\n\n.speech-right[_ngcontent-%COMP%]    > .speech[_ngcontent-%COMP%]:before {\n  left: auto;\n  right: 0;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n  border-left: 7px solid #ffdc91;\n  border-right: 0;\n  margin: 15px -6px 0 0;\n}\n\n.speech[_ngcontent-%COMP%]   .media-heading[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: #317787;\n  display: block;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n  font-weight: 300;\n}\n\n.speech-time[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 0;\n  font-size: 0.8em;\n  font-weight: 300;\n}\n\n.media-block[_ngcontent-%COMP%]   .media-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.speech-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.pad-hor[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.speech-right[_ngcontent-%COMP%]    > .speech[_ngcontent-%COMP%] {\n  background: #ffda87;\n  color: #a07617;\n  text-align: right;\n}\n\n.speech-right[_ngcontent-%COMP%]    > .speech[_ngcontent-%COMP%]   .media-heading[_ngcontent-%COMP%] {\n  color: #a07617;\n}\n\n.btn-primary[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:focus, .btn-hover-primary[_ngcontent-%COMP%]:hover, .btn-hover-primary[_ngcontent-%COMP%]:active, .btn-hover-primary.active[_ngcontent-%COMP%], .btn.btn-active-primary[_ngcontent-%COMP%]:active, .btn.btn-active-primary.active[_ngcontent-%COMP%], .dropdown.open[_ngcontent-%COMP%]    > .btn.btn-active-primary[_ngcontent-%COMP%], .btn-group.open[_ngcontent-%COMP%]   .dropdown-toggle.btn.btn-active-primary[_ngcontent-%COMP%] {\n  background-color: #579ddb;\n  border-color: #5fa2dd;\n  color: #fff !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  \n  color: inherit;\n  padding: 6px 12px;\n  border-radius: 0;\n  border: 1px solid 0;\n  font-size: 11px;\n  line-height: 1.42857;\n  vertical-align: middle;\n  transition: all 0.25s;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  font-size: 11px;\n  height: 100%;\n  border-radius: 0;\n  box-shadow: none;\n  border: 1px solid #e9e9e9;\n  transition-duration: 0.5s;\n}\n\n.nano[_ngcontent-%COMP%]    > .nano-pane[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n  position: absolute;\n  width: 5px;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  opacity: 0;\n  transition: all 0.7s;\n}\n\n.box-size[_ngcontent-%COMP%] {\n  height: 10vh;\n}\n\n.button-size[_ngcontent-%COMP%] {\n  height: 10vh !important;\n}\n\n.ask-question[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJveC9jaGF0Ym94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQVZKOztBQVlBO0VBQ0ksd0NBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQVRKOztBQVdBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQVJKOztBQVVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBUEo7O0FBU0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVFBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFMSjs7QUFPQTtFQUNJLDZCQUFBO0FBSko7O0FBTUE7RUFDSSxTQUFBO0FBSEo7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0FBT0o7O0FBTEE7RUFDSSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVFKOztBQU5BO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBU0o7O0FBUEE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVJBO0VBQ0ksWUFBQTtBQVdKOztBQVRBO0VBQ0ksaUJBQUE7QUFZSjs7QUFWQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFhSjs7QUFYQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBY0o7O0FBWkE7RUFDSSxjQUFBO0FBZUo7O0FBYkE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFnQko7O0FBZEE7RUFDSSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFFQSxxQkFBQTtBQWlCSjs7QUFmQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFrQko7O0FBaEJBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksWUFBQTtBQW9CSjs7QUFsQkE7RUFDSSx1QkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxpQkFBQTtBQXNCSiIsImZpbGUiOiJzcmMvYXBwL2NoYXRib3gvY2hhdGJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5ib3gtYm9yZGVye1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuLy8gICAgIGZvbnQtc2l6ZTogM3JlbTtcbi8vIH1cbi8vIC5jaGF0LXN0cnVjdHVyZXtcbi8vIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4vLyBoZWlnaHQ6IDg2dmg7XG5cbi8vIGZvbnQtc2l6ZTogM3JlbTtcbi8vIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cbmJvZHl7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIGJhY2tncm91bmQ6I2ViZWVmMDtcbn1cbi5wYW5lbCB7XG4gICAgYm94LXNoYWRvdzogMCAycHggMCByZ2JhKDAsMCwwLDAuMDc1KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLnBhbmVsIC5wYW5lbC1oZWFkaW5nLCAucGFuZWw+OmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xufVxuLnBhbmVsLWhlYWRpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlO1xufVxuLnBhbmVsLWNvbnRyb2wge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cbi5wYW5lbC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS40MTZlbTtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ucGFuZWwtY29udHJvbD4uYnRuOmxhc3QtY2hpbGQsIC5wYW5lbC1jb250cm9sPi5idG4tZ3JvdXA6bGFzdC1jaGlsZD4uYnRuOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cbi5wYW5lbC1jb250cm9sIC5idG4sIC5wYW5lbC1jb250cm9sIC5kcm9wZG93bi10b2dnbGUuYnRuIHtcbiAgICBib3JkZXI6IDA7XG59XG4ubmFubyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm5hbm8+Lm5hbm8tY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbn1cbi5wYWQtYWxsIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLm1hci1idG0ge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubWVkaWEtYmxvY2sgLm1lZGlhLWxlZnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuLmltZy1zbSB7XG4gICAgd2lkdGg6IDQ2cHg7XG4gICAgaGVpZ2h0OiA0NnB4O1xufVxuLm1lZGlhLWJsb2NrIC5tZWRpYS1ib2R5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiBhdXRvO1xufVxuLnBhZC1ob3Ige1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLnNwZWVjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNiN2RjZmU7XG4gICAgY29sb3I6ICMzMTc3ODc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xufVxuLnNwZWVjaDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICNiN2RjZmU7XG4gICAgbWFyZ2luOiAxNXB4IDAgMCAtNnB4O1xufVxuLnNwZWVjaC1yaWdodD4uc3BlZWNoOmJlZm9yZSB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMDtcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgI2ZmZGM5MTtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAxNXB4IC02cHggMCAwO1xufVxuLnNwZWVjaCAubWVkaWEtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjogIzMxNzc4NztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjEpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuLnNwZWVjaC10aW1lIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ubWVkaWEtYmxvY2sgLm1lZGlhLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uc3BlZWNoLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5wYWQtaG9yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi5zcGVlY2gtcmlnaHQ+LnNwZWVjaCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZGE4NztcbiAgICBjb2xvcjogI2EwNzYxNztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5zcGVlY2gtcmlnaHQ+LnNwZWVjaCAubWVkaWEtaGVhZGluZyB7XG4gICAgY29sb3I6ICNhMDc2MTc7XG59XG4uYnRuLXByaW1hcnksIC5idG4tcHJpbWFyeTpmb2N1cywgLmJ0bi1ob3Zlci1wcmltYXJ5OmhvdmVyLCAuYnRuLWhvdmVyLXByaW1hcnk6YWN0aXZlLCAuYnRuLWhvdmVyLXByaW1hcnkuYWN0aXZlLCAuYnRuLmJ0bi1hY3RpdmUtcHJpbWFyeTphY3RpdmUsIC5idG4uYnRuLWFjdGl2ZS1wcmltYXJ5LmFjdGl2ZSwgLmRyb3Bkb3duLm9wZW4+LmJ0bi5idG4tYWN0aXZlLXByaW1hcnksIC5idG4tZ3JvdXAub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmJ0bi5idG4tYWN0aXZlLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NzlkZGI7XG4gICAgYm9yZGVyLWNvbG9yOiAjNWZhMmRkO1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7ICovXG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXM7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXM7XG59XG4uZm9ybS1jb250cm9sIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcbn1cbi5uYW5vPi5uYW5vLXBhbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDVweDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjdzO1xuICAgIHRyYW5zaXRpb246IGFsbCAuN3M7XG59XG4uYm94LXNpemV7XG4gICAgaGVpZ2h0OiAxMHZoO1xufVxuLmJ1dHRvbi1zaXple1xuICAgIGhlaWdodDogMTB2aCAhaW1wb3J0YW50O1xufVxuLmFzay1xdWVzdGlvbntcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatbox',
                templateUrl: './chatbox.component.html',
                styleUrls: ['./chatbox.component.scss']
            }]
    }], function () { return [{ type: _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");



class HomeComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.messages = [];
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 0, consts: [[1, "container-fluid"], ["src", "assets/orglogo1.jpg"], [1, "all-data-position"], [1, "way-to-lern"], [1, "full-address"], [1, "email-id"], [1, "our-present"], [1, "welcome-learning-plat", "mt-2"], [1, "live-class", "mt-2"], [1, "wrapper"], [1, "frame-container"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/j6pn1bkGP7o?controls=0", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Way to Learn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " At-Haludhbani, Parsudib, Jamshedpur, Jharkhand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "E-mail id: waytolearnofficial@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Our present step decide our future");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Welcome to our online learning platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Live Classes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "iframe", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%] {\n  width: 11%;\n  position: absolute;\n  margin-left: 3%;\n}\n\n.all-data-position[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.way-to-lern[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 5rem;\n}\n\n.our-present[_ngcontent-%COMP%] {\n  background-color: green;\n  font-size: 2rem;\n}\n\n.welcome-learning-plat[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  font-size: 2rem;\n}\n\n.live-class[_ngcontent-%COMP%] {\n  border: 1px solid;\n}\n\n@media only screen and (max-width: 450px) {\n  .way-to-lern[_ngcontent-%COMP%] {\n    font-size: 2.8em;\n    margin-left: 19%;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .our-present[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .welcome-learning-plat[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .full-address[_ngcontent-%COMP%] {\n    font-size: 0.6em;\n    margin-left: 20%;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .email-id[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n    margin-left: 22%;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  img[_ngcontent-%COMP%] {\n    margin-left: -1%;\n    margin-top: 3%;\n    width: 21%;\n  }\n}\n\n.frame-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  \n  padding-top: 25px;\n  width: 300%;\n  \n  left: -100%;\n  \n}\n\n.frame-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtBQUtKOztBQUhBO0VBRUk7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBS047QUFDRjs7QUFGQztFQUVHO0lBQ0csZ0JBQUE7RUFHTDtBQUNGOztBQUFDO0VBRUc7SUFDRyxjQUFBO0VBQ0w7QUFDRjs7QUFFQztFQUVHO0lBQ0csZ0JBQUE7SUFDQSxnQkFBQTtFQURMO0FBQ0Y7O0FBS0M7RUFFRztJQUNHLGdCQUFBO0lBQ0EsZ0JBQUE7RUFKTDtBQUNGOztBQVFDO0VBRUc7SUFDSSxnQkFBQTtJQUNKLGNBQUE7SUFDQSxVQUFBO0VBUEY7QUFDRjs7QUFhQztFQUNHLGtCQUFBO0VBQ0Esc0JBQUE7RUFBd0IsU0FBQTtFQUN4QixpQkFBQTtFQUNJLFdBQUE7RUFBYSxpQ0FBQTtFQUNqQixXQUFBO0VBQWEsVUFBQTtBQVJqQjs7QUFXQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVJKOztBQVlBO0VBQ0csZ0JBQUE7RUFDQSxlQUFBO0FBVEgiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIHdpZHRoOiAxMSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcblxuICB9XG4uYWxsLWRhdGEtcG9zaXRpb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndheS10by1sZXJue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDVyZW07XG59XG4ub3VyLXByZXNlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuLndlbGNvbWUtbGVhcm5pbmctcGxhdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuLmxpdmUtY2xhc3N7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG5cbiAgICAud2F5LXRvLWxlcm4geyBcbiAgICAgICAgZm9udC1zaXplOiAyLjhlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE5JTtcbiAgICB9XG4gXG4gfVxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcblxuICAgIC5vdXItcHJlc2VudCB7IFxuICAgICAgIGZvbnQtc2l6ZTogMS4zZW07IFxuICAgIH1cbiBcbiB9XG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuXG4gICAgLndlbGNvbWUtbGVhcm5pbmctcGxhdHsgXG4gICAgICAgZm9udC1zaXplOiAxZW07IFxuICAgIH1cbiBcbiB9XG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuXG4gICAgLmZ1bGwtYWRkcmVzc3sgXG4gICAgICAgZm9udC1zaXplOiAuNmVtOyBcbiAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xuXG4gICAgfVxuIFxuIH1cbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG5cbiAgICAuZW1haWwtaWR7IFxuICAgICAgIGZvbnQtc2l6ZTogLjhlbTsgXG4gICAgICAgbWFyZ2luLWxlZnQ6IDIyJTtcblxuICAgIH1cbiBcbiB9XG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuXG4gICAgaW1neyBcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xJTtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICB3aWR0aDogMjElO1xuXG4gICAgfVxuIFxuIH1cblxuXG4gLmZyYW1lLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7IC8qIDE2OjkgKi8gIFxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgICAgICB3aWR0aDogMzAwJTsgLyogZW5sYXJnZSBiZXlvbmQgYnJvd3NlciB3aWR0aCAqL1xuICAgIGxlZnQ6IC0xMDAlOyAvKiBjZW50ZSAqL1xufVxuXG4uZnJhbWUtY29udGFpbmVyIGlmcmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICB0b3A6IDA7IFxuICAgIGxlZnQ6IDA7IFxuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLndyYXBwZXIge1xuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIG1heC13aWR0aDogMTAwJTtcbi8vcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rahul/Documents/workspace/AngularProjects/July/way2learn/angular/connectedgit/way2learn/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map