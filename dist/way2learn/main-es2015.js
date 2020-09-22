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
/* harmony import */ var _launch_launch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./launch/launch.component */ "./src/app/launch/launch.component.ts");
/* harmony import */ var _googleform_googleform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./googleform/googleform.component */ "./src/app/googleform/googleform.component.ts");
/* harmony import */ var _modules_dashboard_components_launch_main_launch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dashboard/components/launch/main-launch.component */ "./src/app/modules/dashboard/components/launch/main-launch.component.ts");







const routes = [
    {
        path: '',
        component: _launch_launch_component__WEBPACK_IMPORTED_MODULE_2__["LaunchComponent"]
    },
    {
        path: 'form',
        component: _googleform_googleform_component__WEBPACK_IMPORTED_MODULE_3__["GoogleformComponent"]
    }
];
const localRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _modules_dashboard_components_launch_main_launch_component__WEBPACK_IMPORTED_MODULE_4__["MainLaunchComponent"],
        children: [
            {
                path: '',
                component: _launch_launch_component__WEBPACK_IMPORTED_MODULE_2__["LaunchComponent"]
            }
        ]
    }
];
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
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
/* harmony import */ var _googleform_googleform_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./googleform/googleform.component */ "./src/app/googleform/googleform.component.ts");
/* harmony import */ var _launch_launch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./launch/launch.component */ "./src/app/launch/launch.component.ts");
/* harmony import */ var _modules_dashboard_components_launch_main_launch_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/dashboard/components/launch/main-launch.component */ "./src/app/modules/dashboard/components/launch/main-launch.component.ts");
/* harmony import */ var _modules_dashboard_components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/dashboard/components/header/header.component */ "./src/app/modules/dashboard/components/header/header.component.ts");
/* harmony import */ var _modules_dashboard_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/dashboard/components/footer/footer.component */ "./src/app/modules/dashboard/components/footer/footer.component.ts");
















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
        _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_7__["ChatboxComponent"],
        _googleform_googleform_component__WEBPACK_IMPORTED_MODULE_10__["GoogleformComponent"],
        _launch_launch_component__WEBPACK_IMPORTED_MODULE_11__["LaunchComponent"],
        _modules_dashboard_components_launch_main_launch_component__WEBPACK_IMPORTED_MODULE_12__["MainLaunchComponent"],
        _modules_dashboard_components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _modules_dashboard_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
                    _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_7__["ChatboxComponent"],
                    _googleform_googleform_component__WEBPACK_IMPORTED_MODULE_10__["GoogleformComponent"],
                    _launch_launch_component__WEBPACK_IMPORTED_MODULE_11__["LaunchComponent"],
                    _modules_dashboard_components_launch_main_launch_component__WEBPACK_IMPORTED_MODULE_12__["MainLaunchComponent"],
                    _modules_dashboard_components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                    _modules_dashboard_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]
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

/***/ "./src/app/googleform/googleform.component.ts":
/*!****************************************************!*\
  !*** ./src/app/googleform/googleform.component.ts ***!
  \****************************************************/
/*! exports provided: GoogleformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleformComponent", function() { return GoogleformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GoogleformComponent {
    constructor() { }
    ngOnInit() {
    }
}
GoogleformComponent.ɵfac = function GoogleformComponent_Factory(t) { return new (t || GoogleformComponent)(); };
GoogleformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoogleformComponent, selectors: [["app-googleform"]], decls: 3, vars: 0, consts: [[1, "text-center"], ["src", "https://docs.google.com/forms/d/e/1FAIpQLSfviPJ-o2t1PQuwt2wOtyUARv4eS7cx725CC2lIu7rWn1qUXQ/viewform?embedded=true", "width", "640", "height", "2663", "frameborder", "0", "marginheight", "0", "marginwidth", "0"]], template: function GoogleformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dvb2dsZWZvcm0vZ29vZ2xlZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-googleform',
                templateUrl: './googleform.component.html',
                styleUrls: ['./googleform.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HomeComponent {
    constructor(chatService, route) {
        this.chatService = chatService;
        this.route = route;
        this.messages = [];
    }
    ngOnInit() {
    }
    routetogoogleForm() {
        this.route.navigate(['form']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 23, vars: 0, consts: [[1, "container-fluid"], ["src", "assets/orglogo1.jpg"], [1, "all-data-position"], [1, "way-to-lern"], [1, "full-address"], [1, "email-id"], [1, "our-present"], [1, "welcome-learning-plat", "mt-2"], [1, "display-5", "blink_me", "text-danger", 3, "click"], ["download", "Way to learn Bronchure.pdf", "target", "_blank", "href", "/assets/bron.pdf"], [1, "live-class", "mt-2"], [1, "wrapper"], [1, "frame-container"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/j6pn1bkGP7o?controls=0", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Way to Learn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " At-Haludhbani, Parsudih, Jamshedpur, Jharkhand ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_13_listener() { return ctx.routetogoogleForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "For Registration Click Here!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Download prospectus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Live Classes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "iframe", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%] {\n  width: 11%;\n  position: absolute;\n  margin-left: 3%;\n}\n\n.all-data-position[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.way-to-lern[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 5rem;\n}\n\n.our-present[_ngcontent-%COMP%] {\n  background-color: green;\n  font-size: 2rem;\n}\n\n.welcome-learning-plat[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  font-size: 2rem;\n}\n\n.live-class[_ngcontent-%COMP%] {\n  border: 1px solid;\n}\n\n@media only screen and (max-width: 450px) {\n  .way-to-lern[_ngcontent-%COMP%] {\n    font-size: 2.8em;\n    margin-left: 19%;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .our-present[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .welcome-learning-plat[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .full-address[_ngcontent-%COMP%] {\n    font-size: 0.6em;\n    margin-left: 20%;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .email-id[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n    margin-left: 22%;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  img[_ngcontent-%COMP%] {\n    margin-left: -1%;\n    margin-top: 3%;\n    width: 21%;\n  }\n}\n\n.frame-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  \n  padding-top: 25px;\n  width: 300%;\n  \n  left: -100%;\n  \n}\n\n.frame-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-width: 100%;\n}\n\n.blink_me[_ngcontent-%COMP%] {\n  -webkit-animation: blinker 2s linear infinite;\n          animation: blinker 2s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtBQUtKOztBQUhBO0VBRUk7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBS047QUFDRjs7QUFGQztFQUVHO0lBQ0csZ0JBQUE7RUFHTDtBQUNGOztBQUFDO0VBRUc7SUFDRyxjQUFBO0VBQ0w7QUFDRjs7QUFFQztFQUVHO0lBQ0csZ0JBQUE7SUFDQSxnQkFBQTtFQURMO0FBQ0Y7O0FBS0M7RUFFRztJQUNHLGdCQUFBO0lBQ0EsZ0JBQUE7RUFKTDtBQUNGOztBQVFDO0VBRUc7SUFDSSxnQkFBQTtJQUNKLGNBQUE7SUFDQSxVQUFBO0VBUEY7QUFDRjs7QUFhQztFQUNHLGtCQUFBO0VBQ0Esc0JBQUE7RUFBd0IsU0FBQTtFQUN4QixpQkFBQTtFQUNJLFdBQUE7RUFBYSxpQ0FBQTtFQUNqQixXQUFBO0VBQWEsVUFBQTtBQVJqQjs7QUFXQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVJKOztBQVlBO0VBQ0csZ0JBQUE7RUFDQSxlQUFBO0FBVEg7O0FBYUE7RUFDRyw2Q0FBQTtVQUFBLHFDQUFBO0FBVkg7O0FBYUM7RUFDRTtJQUNFLFVBQUE7RUFWSDtBQUNGOztBQU9DO0VBQ0U7SUFDRSxVQUFBO0VBVkg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgd2lkdGg6IDExJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xuXG4gIH1cbi5hbGwtZGF0YS1wb3NpdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2F5LXRvLWxlcm57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbn1cbi5vdXItcHJlc2VudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG4ud2VsY29tZS1sZWFybmluZy1wbGF0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG4ubGl2ZS1jbGFzc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcblxuICAgIC53YXktdG8tbGVybiB7IFxuICAgICAgICBmb250LXNpemU6IDIuOGVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTklO1xuICAgIH1cbiBcbiB9XG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuXG4gICAgLm91ci1wcmVzZW50IHsgXG4gICAgICAgZm9udC1zaXplOiAxLjNlbTsgXG4gICAgfVxuIFxuIH1cbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG5cbiAgICAud2VsY29tZS1sZWFybmluZy1wbGF0eyBcbiAgICAgICBmb250LXNpemU6IDFlbTsgXG4gICAgfVxuIFxuIH1cbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG5cbiAgICAuZnVsbC1hZGRyZXNzeyBcbiAgICAgICBmb250LXNpemU6IC42ZW07IFxuICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG5cbiAgICB9XG4gXG4gfVxuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcblxuICAgIC5lbWFpbC1pZHsgXG4gICAgICAgZm9udC1zaXplOiAuOGVtOyBcbiAgICAgICBtYXJnaW4tbGVmdDogMjIlO1xuXG4gICAgfVxuIFxuIH1cbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG5cbiAgICBpbWd7IFxuICAgICAgICBtYXJnaW4tbGVmdDogLTElO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIHdpZHRoOiAyMSU7XG5cbiAgICB9XG4gXG4gfVxuXG5cbiAuZnJhbWUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTsgLyogMTY6OSAqLyAgXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgICAgIHdpZHRoOiAzMDAlOyAvKiBlbmxhcmdlIGJleW9uZCBicm93c2VyIHdpZHRoICovXG4gICAgbGVmdDogLTEwMCU7IC8qIGNlbnRlICovXG59XG5cbi5mcmFtZS1jb250YWluZXIgaWZyYW1lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHRvcDogMDsgXG4gICAgbGVmdDogMDsgXG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGhlaWdodDogMTAwJTtcbn1cblxuXG4ud3JhcHBlciB7XG4gICBvdmVyZmxvdzogaGlkZGVuO1xuICAgbWF4LXdpZHRoOiAxMDAlO1xuLy9wb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJsaW5rX21lIHtcbiAgIGFuaW1hdGlvbjogYmxpbmtlciAycyBsaW5lYXIgaW5maW5pdGU7XG4gfVxuIFxuIEBrZXlmcmFtZXMgYmxpbmtlciB7XG4gICA1MCUge1xuICAgICBvcGFjaXR5OiAwO1xuICAgfVxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/launch/launch.component.ts":
/*!********************************************!*\
  !*** ./src/app/launch/launch.component.ts ***!
  \********************************************/
/*! exports provided: LaunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchComponent", function() { return LaunchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chatbox/chatbox.component */ "./src/app/chatbox/chatbox.component.ts");




class LaunchComponent {
    constructor() { }
    ngOnInit() {
    }
}
LaunchComponent.ɵfac = function LaunchComponent_Factory(t) { return new (t || LaunchComponent)(); };
LaunchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LaunchComponent, selectors: [["app-launch"]], decls: 2, vars: 0, template: function LaunchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chatbox");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_2__["ChatboxComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhdW5jaC9sYXVuY2guY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LaunchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-launch',
                templateUrl: './launch.component.html',
                styleUrls: ['./launch.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/dashboard/components/footer/footer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/footer/footer.component.ts ***!
  \*************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 74, vars: 0, consts: [[1, "container-fluid", "py-3"], [1, "row"], [1, "col-lg-3", "col-md-4", "col-sm-6", "text-center", "py-4"], [1, "footer-logo"], ["src", "assets/images/logo/svg/logo2.svg", "alt", "Responsive image", 1, "img-fluid", "logo-edit", "w-50"], [1, "footer-icons"], ["href", "#"], [1, "fa", "fa-facebook-f", "icons-edit-1"], [1, "fab", "fa-twitter", "icons-edit"], [1, "fa", "fa-youtube", "icons-edit"], [1, "fab", "fa-linkedin-in", "icons-edit"], [1, "fab", "fa-instagram", "icons-edit"], [1, "foot-tag"], [1, "col-lg-2", "col-md-4", "col-sm-6", "py-4"], [1, "col-inner", "text-center", "pt-4"], [1, "text-uppercase", "font-weight-bold", "footer-li-head"], [1, "list-unstyled", "footer-ul", "text-start"], [1, "list-unstyled", "footer-ul"], [1, "col-lg-3", "col-md-4", "col-sm-6", "py-4"], [1, "footer-contact-inner", "text-center", "pt-1"], [1, "text-uppercase", "font-weight-bold", "footer-contact-head"], [1, "footer-contact-icon", "mb-3"], [1, "fas", "fa-phone-alt", "contact-icon-edit"], ["href", "mailto:Info@aikefi.com"], [1, "fas", "fa-envelope", "contact-icon-edit"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "One source.Many perspectives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "How to Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Get a Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "connect with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "contact information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "+91 7982577924");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "+91 7978002900");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Info@aikefi.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.page-footer[_ngcontent-%COMP%] {\n  color: #FBFCFB;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  min-height: 50vh;\n}\n\n.list-unstyled[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #48D1CC;\n}\n\n.list-unstyled[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #444444 !important;\n}\n\n.footer-logo[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: -40px;\n}\n\n.footer-icons[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding-top: 20px;\n}\n\n.foot-tag[_ngcontent-%COMP%] {\n  color: #20B2AA;\n}\n\n.icons-edit[_ngcontent-%COMP%] {\n  font-size: 24px;\n  border: 1px solid #48D1CC;\n  border-radius: 50px;\n  padding: 8px;\n  color: #48D1CC;\n  margin-left: 5px;\n}\n\n.icons-edit-1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  border: 1px solid #48D1CC;\n  border-radius: 50px;\n  padding: 8px 11px;\n  color: #48D1CC;\n  margin-left: 5px;\n}\n\n.foot-tag[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: -10px;\n}\n\n.footer-li-head[_ngcontent-%COMP%] {\n  color: #20B2AA;\n}\n\n.footer-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  color: red;\n}\n\n.footer-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.footer-contact-inner[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.contact-icon-edit[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-right: 10px;\n  font-size: 20px;\n}\n\n.footer-contact-head[_ngcontent-%COMP%] {\n  color: #20B2AA;\n}\n\n.footer-contact-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #48D1CC;\n}\n\n.footer-contact-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #444444 !important;\n}\n\n.footer-contact-icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (max-width: 980px) {\n  .footer-icons[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    padding-top: 5px;\n  }\n}\n\n@media (max-width: 590px) {\n  .icons-edit[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .icons-edit-1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .foot-tag[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-left: 0px;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9zdHlsZXMvc3R5bGUtY29uZmlnLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBREo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUdBO0VBQ0ksY0NiUTtBRGFaOztBQUdBO0VBQ0kseUJBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUNJLGNDL0JLO0FEZ0NUOztBQUNBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0NyQ1E7RURzQ1IsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQzdDUTtFRDhDUixnQkFBQTtBQUdKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksY0N2REs7QUQyRFQ7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFLSjs7QUFGQTtFQUNJLHFCQUFBO0FBS0o7O0FBSEE7RUFDSSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFPSjs7QUFMQTtFQUNJLGNDMUVLO0FEa0ZUOztBQU5BO0VBQ0kscUJBQUE7RUFDQSxjQzdFUTtBRHNGWjs7QUFQQTtFQUNJLHlCQUFBO0FBVUo7O0FBUkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFXSjs7QUFSQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxnQkFBQTtFQVdOO0FBQ0Y7O0FBUkE7RUFDSTtJQUNJLGVBQUE7RUFVTjs7RUFQRTtJQUNJLGVBQUE7RUFVTjs7RUFQRTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VBVU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL3N0eWxlcy9zdHlsZS1jb25maWcuc2Nzc1wiO1xuXG4qe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ucGFnZS1mb290ZXJ7XG4gICAgY29sb3I6ICNGQkZDRkI7XG59XG4uY29udGFpbmVyLWZsdWlke1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgXG59XG5cbi5saXN0LXVuc3R5bGVkID4gbGk+IGF7IFxuICAgIGNvbG9yOiAkc21hbGxUZXh0O1xuICAgIFxufVxuLmxpc3QtdW5zdHlsZWQgPiBsaT4gYTpob3ZlcntcbiAgICBjb2xvcjogICM0NDQ0NDQgIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlci1sb2dve1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC00MHB4O1xufVxuXG4uZm9vdGVyLWljb25ze1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uZm9vdC10YWd7XG4gICAgY29sb3I6ICRiaWdUZXh0OyAgXG59XG4uaWNvbnMtZWRpdHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNtYWxsVGV4dDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjb2xvcjogJHNtYWxsVGV4dDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmljb25zLWVkaXQtMXtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHNtYWxsVGV4dDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBhZGRpbmc6IDhweCAxMXB4O1xuICAgIGNvbG9yOiAkc21hbGxUZXh0O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7IFxufVxuXG4uZm9vdC10YWd7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG4uZm9vdGVyLWxpLWhlYWR7XG4gICAgY29sb3I6ICRiaWdUZXh0O1xufVxuLmZvb3Rlci11bCBsaXtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBjb2xvcjogcmVkO1xuICAgXG59XG4uZm9vdGVyLXVsIGxpIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZvb3Rlci1jb250YWN0LWlubmVye1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY29udGFjdC1pY29uLWVkaXR7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmZvb3Rlci1jb250YWN0LWhlYWR7XG4gICAgY29sb3I6ICRiaWdUZXh0O1xufVxuLmZvb3Rlci1jb250YWN0LWljb24gYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICRzbWFsbFRleHQ7XG59XG4uZm9vdGVyLWNvbnRhY3QtaWNvbiBhOmhvdmVye1xuICAgIGNvbG9yOiAkZm9vdGVyLWNvbnRhY3QtaG92ZXIgIWltcG9ydGFudDtcbn1cbi5mb290ZXItY29udGFjdC1pY29ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6OTgwcHgpe1xuICAgIC5mb290ZXItaWNvbnN7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgfVxuICAgIFxufVxuQG1lZGlhIChtYXgtd2lkdGg6NTkwcHgpe1xuICAgIC5pY29ucy1lZGl0e1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIFxuICAgIH1cbiAgICAuaWNvbnMtZWRpdC0xe1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIFxuICAgIH1cbiAgICAuZm9vdC10YWd7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59IiwiLy8gIGhlYWRlciBjb2xvclxuXG4kYmlnVGV4dDojMjBCMkFBO1xuJHNtYWxsVGV4dDogIzQ4RDFDQztcblxuXG4vLyBmb290ZXIgY29sb3JcbiRmb290ZXItY29udGFjdC1ob3ZlcjojNDQ0NDQ0O1xuXG5cblxuLy8gZ3JpZHMgY29sb3JcblxuXG4vL2Nhcm91c2VsIGNvbG9yXG5cblxuLy9jb250YWN0IHVzIGNvbG9yXG4kaWNvbjojMDE1Qjg1O1xuJGJhY2tncm91bmQtaG92ZXI6I0VGRjRGODtcbiRwbGFjZWhvbGRlcjojQTlBOUE5O1xuJGJ1dHRvbi1iYWNrZ3JvdW5kOiMyMEIyQUE7XG4kYnV0dG9uLWNvbG9yOndoaXRlO1xuJGFnaWxlLXRleHQ6IzAwNTI3RjtcbiRhZ2lsZS10ZXh0LTE6I0ZENkNBRTtcbiRjYXJkLXByaWNlOiNmMThjNzA7XG4kY2FyZC1wcmljZS1ob3ZlcjojZTQ0NjFiIDtcbiRidXR0b24tdGV4dDpibGFjaztcbiRidXR0b24tYmFja2dyb3VuZDojM2VhZGE4O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/dashboard/components/header/header.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/header/header.component.ts ***!
  \*************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class HeaderComponent {
    // @ViewChild('navbar') navbar: ElementRef;
    // @ViewChild('navheader') navheader: ElementRef;
    // @ViewChild('sideBarMenu') sideBarMenu: ElementRef;
    // @ViewChild('sidebarLogin') sidebarLogin: ElementRef;
    // @ViewChild('services') services: ElementRef;
    // @ViewChild('usecases') usecases: ElementRef;
    // @ViewChild('aboutus') aboutus: ElementRef;
    // @ViewChild('contactus') contactus: ElementRef;
    constructor() { }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__(window).on("scroll", function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_1__(window).scrollTop() > 50) {
                jquery__WEBPACK_IMPORTED_MODULE_1__(".header").addClass("active");
            }
            else {
                //remove the background property so it comes transparent again (defined in your css)
                jquery__WEBPACK_IMPORTED_MODULE_1__(".header").removeClass("active");
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 82, vars: 0, consts: [[1, "header"], [1, "container"], ["type", "checkbox", "name", "", "id", "check"], [1, "logo-container"], [1, "header-logo"], [1, "nav-btn"], [1, "nav-links"], [1, "nav-link", 2, "--i", ".85s"], ["href", "#"], [1, "fa", "fa-angle-down", "fa-lg"], [1, "dropdown"], [1, "dropdown-link"], [1, "arrow"], [1, "nav-link", 2, "--i", "1.1s"], [1, "fa", "fa-angle-down", "fa-3x"], [1, "nav-link", 2, "--i", "1.35s"], [1, "fas", "fa-caret-down"], [1, "hamburger-menu-container"], [1, "hamburger-menu"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Intelligent Data Processing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "USE CASES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "RESOURCES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Use Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "eBooks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "White Papers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Media Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Life at AIKefi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "leadership team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "CAREERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Life at AIKefi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Careers blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "open positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.nav-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.dropdown-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  text-transform: capitalize;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0;\n  padding: 0;\n  width: 100%;\n  z-index: 1000;\n  transition: all 0.2s ease-in-out;\n  height: auto;\n  background-color: transparent;\n}\n\n.header.active[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 100rem;\n  padding: 14px 2rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  align-items: center;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n\n.nav-link[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  transform: rotate(0deg);\n  transition: 0.6s;\n}\n\n.nav-link[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin-left: 0.5rem !important;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], .dropdown-link[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.nav-links[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.nav-link[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  top: 60%;\n  color: #444444;\n  padding-bottom: 3px;\n  letter-spacing: 1px;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: 0.5s;\n  position: relative;\n  font-weight: 600;\n}\n\n.nav-link[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  bottom: 0;\n  height: 2.5px;\n  width: 100%;\n  background: #444444;\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.9s linear;\n}\n\n.nav-link[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover:before {\n  transform: scaleX(1);\n  transform-origin: left;\n}\n\n.nav-link[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #20B2AA !important;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 42px;\n  left: 0;\n  width: 12rem;\n  transform: translateY(10px);\n  opacity: 0;\n  pointer-events: none;\n  transition: 0.5s;\n  z-index: 10000;\n}\n\n.dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.dropdown-link[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #444444;\n  color: #fff;\n  padding: 0.8rem 1rem;\n  font-size: 13px;\n  align-items: center;\n  justify-content: space-between;\n  transition: 0.3s;\n  border-radius: 6px;\n}\n\n.dropdown-link[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  background-color: #20B2AA;\n  color: #444444 !important;\n}\n\n.dropdown-link[_ngcontent-%COMP%]:not(:nth-last-child(2)) {\n  border-bottom: 0.2px solid #efefef;\n}\n\n.dropdown-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n\n.arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 11px;\n  height: 11px;\n  top: -6px;\n  left: 30px;\n  background-color: #444444;\n  transform: rotate(45deg);\n  cursor: pointer;\n  transition: 0.3s;\n  z-index: -1;\n}\n\n.arrow[_ngcontent-%COMP%]:hover {\n  background-color: #20B2AA;\n}\n\n.dropdown-link[_ngcontent-%COMP%]:first-child:hover    ~ .arrow[_ngcontent-%COMP%] {\n  background-color: #20B2AA;\n}\n\n.dropdown-link[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover    > .dropdown[_ngcontent-%COMP%], .dropdown-link[_ngcontent-%COMP%]:hover    > .dropdown[_ngcontent-%COMP%] {\n  transform: translate(0, 0);\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.hamburger-menu-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: none;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.hamburger-menu[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.hamburger-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 1.6rem;\n  height: 3px;\n  border-radius: 3px;\n  background-color: #444444;\n  position: relative;\n  z-index: 1001;\n  transition: 0.5s;\n}\n\n.hamburger-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before, .hamburger-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: inherit;\n  height: inherit;\n  background-color: #444444;\n  border-radius: 3px;\n  transition: 0.5s;\n}\n\n.hamburger-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\n  transform: translateY(-7px);\n}\n\n.hamburger-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  transform: translateY(7px);\n}\n\n#check[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 1.5rem;\n  transform: translateY(-50%);\n  width: 2.5rem;\n  height: 2.5rem;\n  z-index: 90000;\n  cursor: pointer;\n  opacity: 0;\n  display: none;\n}\n\n#check[_ngcontent-%COMP%]:checked    ~ .hamburger-menu-container[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n#check[_ngcontent-%COMP%]:checked    ~ .hamburger-menu-container[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:before {\n  transform: translateY(0) rotate(-45deg);\n}\n\n#check[_ngcontent-%COMP%]:checked    ~ .hamburger-menu-container[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  transform: translateY(0) rotate(45deg);\n}\n\n@-webkit-keyframes animation {\n  from {\n    opacity: 0;\n    transform: translateY(15px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes animation {\n  from {\n    opacity: 0;\n    transform: translateY(15px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@media (max-width: 1175px) {\n  .logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    margin-right: 25px;\n  }\n\n  .nav-link[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    top: 65%;\n    font-size: 12px;\n  }\n}\n\n@media (max-width: 1032px) {\n  .logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    margin-right: 23px;\n  }\n\n  .nav-link[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    top: 58%;\n  }\n}\n\n@media (max-width: 920px) {\n  .logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 3px;\n  }\n\n  .hamburger-menu-container[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  #check[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .nav-btn[_ngcontent-%COMP%] {\n    position: fixed;\n    height: calc(100vh - 3rem);\n    top: 69px;\n    left: 0;\n    width: 100%;\n    background-color: white;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    overflow-x: hidden;\n    overflow-y: auto;\n    transform: translateX(100%);\n    transition: 0.65s;\n    padding-top: 40px;\n    padding-bottom: 40px;\n  }\n\n  #check[_ngcontent-%COMP%]:checked    ~ .nav-btn[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n\n  #check[_ngcontent-%COMP%]:checked    ~ .nav-btn[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], #check[_ngcontent-%COMP%]:checked    ~ .nav-btn[_ngcontent-%COMP%]   .log-sign[_ngcontent-%COMP%] {\n    -webkit-animation: animation 0.15s ease forwards var(--i);\n            animation: animation 0.15s ease forwards var(--i);\n  }\n\n  .nav-links[_ngcontent-%COMP%] {\n    flex: initial;\n    width: 100%;\n  }\n\n  .nav-links[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    width: 100%;\n    opacity: 0;\n    transform: translateY(15px);\n  }\n\n  .nav-link[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    line-height: 1;\n    padding: 1.3rem 2rem;\n  }\n\n  .nav-link[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n    transform: scale(1);\n    background-color: white;\n  }\n\n  .dropdown[_ngcontent-%COMP%] {\n    position: initial;\n    top: initial;\n    left: initial;\n    transform: initial;\n    opacity: 1;\n    pointer-events: auto;\n    width: 100%;\n    padding: 0;\n    display: none;\n  }\n\n  .nav-link[_ngcontent-%COMP%]:hover    > .dropdown[_ngcontent-%COMP%], .dropdown-link[_ngcontent-%COMP%]:hover    > .dropdown[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .nav-link[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], .dropdown-link[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n    transform: rotate(360deg);\n  }\n\n  .dropdown-link[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    background-color: #444444;\n    color: #fff;\n    padding: 1.2rem 2rem;\n    line-height: 1;\n    border-radius: 0px;\n  }\n\n  .dropdown-link[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n    background-color: #20B2AA;\n  }\n\n  .dropdown.second[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding: 1.2rem 2rem 1.2rem 3rem;\n  }\n\n  .dropdown.second[_ngcontent-%COMP%]   .dropdown.second[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding: 1.2rem 2rem 1.2rem 4rem;\n  }\n\n  .dropdown-link[_ngcontent-%COMP%]:not(:nth-last-child(2)) {\n    border-bottom: none;\n  }\n\n  .arrow[_ngcontent-%COMP%] {\n    z-index: 1;\n    background-color: white;\n    left: 10%;\n    transform: scale(1.1) rotate(45deg);\n    transition: 0.5s;\n  }\n\n  .nav-link[_ngcontent-%COMP%]:hover   .arrow[_ngcontent-%COMP%] {\n    background-color: white;\n  }\n\n  .dropdown[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .dropdown-link[_ngcontent-%COMP%]:first-child:hover    ~ .arrow[_ngcontent-%COMP%] {\n    background-color: #20B2AA;\n  }\n\n  .nav-link[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    transform: rotate(-90deg);\n    transition: 0.7s;\n  }\n\n  .dropdown[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    transition: 0.7s;\n  }\n}\n\n.aikefi-logo[_ngcontent-%COMP%] {\n  display: block;\n  transform: scale(0.1);\n}\n\n.header-logo[_ngcontent-%COMP%] {\n  background: url(\"/assets/images/logo/svg/logo2.svg\") no-repeat;\n  display: block;\n  max-width: 100%;\n  height: 60px;\n  transform: scale3d(1.2, 2.5, 3.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9zdHlsZXMvc3R5bGUtY29uZmlnLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQ0FBQTtBQUFKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0EsMEJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFFQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBRko7O0FBTUE7RUFDSSxnQkFBQTtFQUdBLDBDQUFBO0FBSEo7O0FBUUE7RUFDSSxpQkFBQTtFQUVBLGtCQUFBO0VBRUEsYUFBQTtFQUVBLDhCQUFBO0FBUko7O0FBYUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFWSjs7QUFhQTtFQUNJLGtCQUFBO0FBVko7O0FBYUE7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFWSjs7QUFhQTtFQUNJLDhCQUFBO0FBVko7O0FBY0E7O0VBRVEseUJBQUE7QUFYUjs7QUFjQTtFQUNJLGFBQUE7QUFYSjs7QUFlQTtFQUNJLGtCQUFBO0FBWko7O0FBZUE7RUFFSSxRQUFBO0VBQ0EsY0MzRmtCO0VENEZsQixtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQzlHa0I7RUQrR2xCLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtBQWJKOztBQWVBO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtBQVpKOztBQWVBO0VBRUkseUJBQUE7QUFiSjs7QUFtQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFFQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBakJKOztBQXFCQTtFQUNJLGtCQUFBO0FBbEJKOztBQXFCQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWxCSjs7QUFxQkE7RUFDSSx5QkNwS0s7RURxS0wseUJBQUE7QUFsQko7O0FBcUJBO0VBQ0ksa0NBQUE7QUFsQko7O0FBcUJBO0VBQ0kseUJBQUE7QUFsQko7O0FBcUJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFsQko7O0FBb0JBO0VBRUkseUJDOUxLO0FENEtUOztBQXNCQTtFQUNJLHlCQ25NSztBRGdMVDs7QUFzQkE7RUFDSSxrQkFBQTtBQW5CSjs7QUF3QkE7O0VBRUksMEJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFyQko7O0FBd0JBO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBckJKOztBQXdCQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFyQko7O0FBd0JBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ2pPa0I7RURrT2xCLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBckJKOztBQXlCQTs7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQzlPa0I7RUQrT2xCLGtCQUFBO0VBQ0EsZ0JBQUE7QUF0Qko7O0FBeUJBO0VBQ0ksMkJBQUE7QUF0Qko7O0FBeUJBO0VBQ0ksMEJBQUE7QUF0Qko7O0FBeUJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBdEJKOztBQXlCQTtFQUNJLDZCQUFBO0FBdEJKOztBQXlCQTtFQUNJLHVDQUFBO0FBdEJKOztBQXlCQTtFQUNJLHNDQUFBO0FBdEJKOztBQXlCQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VBdEJOO0VBd0JFO0lBQ0ksVUFBQTtJQUNBLDBCQUFBO0VBdEJOO0FBQ0Y7O0FBY0E7RUFDSTtJQUNJLFVBQUE7SUFDQSwyQkFBQTtFQXRCTjtFQXdCRTtJQUNJLFVBQUE7SUFDQSwwQkFBQTtFQXRCTjtBQUNGOztBQTZCQTtFQUNJO0lBQ0ksVUFBQTtFQTNCTjs7RUE2QkU7SUFDSSxrQkFBQTtFQTFCTjs7RUE0QkU7SUFDSSxRQUFBO0lBQ0EsZUFBQTtFQXpCTjtBQUNGOztBQTZCQTtFQUNJO0lBQ0ksVUFBQTtFQTNCTjs7RUE2QkU7SUFDSSxrQkFBQTtFQTFCTjs7RUE0QkU7SUFDSSxRQUFBO0VBekJOO0FBQ0Y7O0FBcUNBO0VBQ0k7SUFDSSxlQUFBO0VBbkNOOztFQXFDRTtJQUNJLGFBQUE7RUFsQ047O0VBcUNFO0lBQ0ksY0FBQTtFQWxDTjs7RUFxQ0U7SUFDSSxlQUFBO0lBQ0EsMEJBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFdBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSwyQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQWxDTjs7RUFxQ0U7SUFDSSx3QkFBQTtFQWxDTjs7RUFxQ0U7O0lBRUkseURBQUE7WUFBQSxpREFBQTtFQWxDTjs7RUFxQ0U7SUFDSSxhQUFBO0lBQ0EsV0FBQTtFQWxDTjs7RUFxQ0U7SUFDSSxzQkFBQTtFQWxDTjs7RUFxQ0U7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLDJCQUFBO0VBbENOOztFQXFDRTtJQUNJLGNBQUE7SUFDQSxvQkFBQTtFQWxDTjs7RUFxQ0U7SUFDSSxtQkFBQTtJQUNBLHVCQUFBO0VBbENOOztFQXFDRTtJQUNJLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxvQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtFQWxDTjs7RUFzQ0U7O0lBRUksY0FBQTtFQW5DTjs7RUF1Q0U7O0lBRUkseUJBQUE7RUFwQ047O0VBdUNFO0lBRUkseUJBQUE7SUFDQSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7RUFyQ047O0VBdUNFO0lBQ0kseUJDNWFDO0VEd1lQOztFQXVDRTtJQUNJLGdDQUFBO0VBcENOOztFQXVDRTtJQUNJLGdDQUFBO0VBcENOOztFQXVDRTtJQUNJLG1CQUFBO0VBcENOOztFQXVDRTtJQUNJLFVBQUE7SUFDQSx1QkFBQTtJQUNBLFNBQUE7SUFDQSxtQ0FBQTtJQUNBLGdCQUFBO0VBcENOOztFQXVDRTtJQUNJLHVCQUFBO0VBcENOOztFQXVDRTtJQUNJLGFBQUE7RUFwQ047O0VBeUNFO0lBQ0kseUJDOWNDO0VEd2FQOztFQXlDRTtJQUNJLGlCQUFBO0lBQ0EseUJBQUE7SUFDQSxnQkFBQTtFQXRDTjs7RUF5Q0U7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUF0Q047QUFDRjs7QUF5Q0E7RUFDSSxjQUFBO0VBRUEscUJBQUE7QUF2Q0o7O0FBMENFO0VBQ0UsOERBQUE7RUFPQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQTdDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL3N0eWxlcy9zdHlsZS1jb25maWcuc2Nzc1wiO1xuKntcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5e1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxudWx7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLm5hdi1saW5rIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5kcm9wZG93bi1saW5rIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uaGVhZGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzhiYmNkNDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xufVxuXG5cbi5oZWFkZXIuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuXG5cbi5jb250YWluZXJ7XG4gICAgbWF4LXdpZHRoOiAxMDByZW07XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTRweCAycmVtO1xuICAgIC8vIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuXG5cbi5sb2dvLWNvbnRhaW5lciBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdi1saW5re1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLm5hdi1saW5rID4gYSA+IGl7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNpdGlvbjogLjZzO1xufVxuXG4ubmF2LWxpbmsgPiBhID4gaXtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cblxuLm5hdi1saW5rOmhvdmVyID4gYSA+IGksXG4gICAgLmRyb3Bkb3duLWxpbms6aG92ZXIgPiBhID4gaXtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG5cbi5uYXYtbGlua3MgPiB1bHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5cbi5uYXYtbGlua3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXYtbGluayA+IGF7XG4gICBcbiAgICB0b3A6IDYwJTtcbiAgICBjb2xvcjogJGZvb3Rlci1jb250YWN0LWhvdmVyIDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIFxufVxuLm5hdi1saW5rID4gYTpiZWZvcmV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMi41cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogJGZvb3Rlci1jb250YWN0LWhvdmVyO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjlzIGxpbmVhciA7XG59XG4ubmF2LWxpbmsgPiBhOmhvdmVyOmJlZm9yZXtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xufVxuXG4ubmF2LWxpbmsgPiBhOmhvdmVye1xuICAgIFxuICAgIGNvbG9yOiAkYmlnVGV4dCAhaW1wb3J0YW50O1xufVxuXG5cblxuXG4uZHJvcGRvd257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDJweDtcbiAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTJyZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIHotaW5kZXg6IDEwMDAwO1xuICAgIC8vIHBhZGRpbmc6IDVweCAwcHg7XG59XG5cbi5kcm9wZG93biB1bHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcm9wZG93bi1saW5rID4gYXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMC44cmVtIDFyZW07XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5kcm9wZG93bi1saW5rOmhvdmVyID4gYXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmlnVGV4dDtcbiAgICBjb2xvcjogJGZvb3Rlci1jb250YWN0LWhvdmVyICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1saW5rOm5vdCg6bnRoLWxhc3QtY2hpbGQoMikpe1xuICAgIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNlZmVmZWY7XG59XG5cbi5kcm9wZG93bi1saW5rIGl7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cblxuLmFycm93e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTFweDtcbiAgICBoZWlnaHQ6IDExcHg7XG4gICAgdG9wOiAtNnB4O1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB6LWluZGV4OiAtMTtcbn1cbi5hcnJvdzpob3ZlcntcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmlnVGV4dDtcbiAgICBcbn1cblxuLmRyb3Bkb3duLWxpbms6Zmlyc3QtY2hpbGQ6aG92ZXIgfiAuYXJyb3d7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJpZ1RleHQ7XG59XG5cbi5kcm9wZG93bi1saW5re1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG5cbi5uYXYtbGluazpob3ZlciA+IC5kcm9wZG93bixcbi5kcm9wZG93bi1saW5rOmhvdmVyID4gLmRyb3Bkb3due1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5oYW1idXJnZXItbWVudS1jb250YWluZXJ7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmhhbWJ1cmdlci1tZW51e1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5oYW1idXJnZXItbWVudSBkaXZ7XG4gICAgd2lkdGg6IDEuNnJlbTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZvb3Rlci1jb250YWN0LWhvdmVyIDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTAwMTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cblxuLmhhbWJ1cmdlci1tZW51IGRpdjpiZWZvcmUsXG4uaGFtYnVyZ2VyLW1lbnUgZGl2OmFmdGVye1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZvb3Rlci1jb250YWN0LWhvdmVyIDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uaGFtYnVyZ2VyLW1lbnUgZGl2OmJlZm9yZXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTdweCk7XG59XG5cbi5oYW1idXJnZXItbWVudSBkaXY6YWZ0ZXJ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDdweCk7XG59XG5cbiNjaGVja3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDEuNXJlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB6LWluZGV4OiA5MDAwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jY2hlY2s6Y2hlY2tlZCB+IC5oYW1idXJnZXItbWVudS1jb250YWluZXIgLmhhbWJ1cmdlci1tZW51IGRpdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI2NoZWNrOmNoZWNrZWQgfiAuaGFtYnVyZ2VyLW1lbnUtY29udGFpbmVyIC5oYW1idXJnZXItbWVudSBkaXY6YmVmb3Jle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuI2NoZWNrOmNoZWNrZWQgfiAuaGFtYnVyZ2VyLW1lbnUtY29udGFpbmVyIC5oYW1idXJnZXItbWVudSBkaXY6YWZ0ZXJ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg0NWRlZyk7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0aW9ue1xuICAgIGZyb217XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcbiAgICB9XG4gICAgdG97XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgIH1cbn1cblxuXG5cblxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE3NXB4KXtcbiAgICAubG9nby1jb250YWluZXIgaW1ne1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgICAubmF2LWxpbmt7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICB9XG4gICAgLm5hdi1saW5rID4gYXtcbiAgICAgICAgdG9wOiA2NSU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzJweCl7XG4gICAgLmxvZ28tY29udGFpbmVyIGltZ3tcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICB9XG4gICAgLm5hdi1saW5re1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG4gICAgfVxuICAgIC5uYXYtbGluayA+IGF7XG4gICAgICAgIHRvcDogNTglO1xuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KXtcbiAgICAubG9nby1jb250YWluZXIgaW1ne1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgfVxuICAgIC5oYW1idXJnZXItbWVudS1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgI2NoZWNre1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAubmF2LWJ0bntcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzcmVtKTtcbiAgICAgICAgdG9wOiA2OXB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IC42NXM7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTo0MHB4IDtcbiAgICB9XG5cbiAgICAjY2hlY2s6Y2hlY2tlZCB+IC5uYXYtYnRue1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuXG4gICAgI2NoZWNrOmNoZWNrZWQgfiAubmF2LWJ0biAubmF2LWxpbmssXG4gICAgI2NoZWNrOmNoZWNrZWQgfiAubmF2LWJ0biAubG9nLXNpZ257XG4gICAgICAgIGFuaW1hdGlvbjogYW5pbWF0aW9uIC4xNXMgZWFzZSBmb3J3YXJkcyB2YXIoLS1pKTtcbiAgICB9XG5cbiAgICAubmF2LWxpbmtze1xuICAgICAgICBmbGV4OiBpbml0aWFsO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubmF2LWxpbmtzID4gdWx7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLm5hdi1saW5re1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xuICAgIH1cblxuICAgIC5uYXYtbGluayA+IGF7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBwYWRkaW5nOiAxLjNyZW0gMnJlbTtcbiAgICB9XG5cbiAgICAubmF2LWxpbms6aG92ZXIgPiBhe1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZHJvcGRvd257XG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICB0b3A6IGluaXRpYWw7XG4gICAgICAgIGxlZnQ6IGluaXRpYWw7XG4gICAgICAgIHRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAubmF2LWxpbms6aG92ZXIgPiAuZHJvcGRvd24sXG4gICAgLmRyb3Bkb3duLWxpbms6aG92ZXIgPiAuZHJvcGRvd257XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgfVxuXG4gICAgLm5hdi1saW5rOmhvdmVyID4gYSA+IGksXG4gICAgLmRyb3Bkb3duLWxpbms6aG92ZXIgPiBhID4gaXtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG5cbiAgICAuZHJvcGRvd24tbGluayA+IGF7XG4gICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMS4ycmVtIDJyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgfVxuICAgIC5kcm9wZG93bi1saW5rOmhvdmVyID4gYXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJpZ1RleHQ7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLnNlY29uZCAuZHJvcGRvd24tbGluayA+IGF7XG4gICAgICAgIHBhZGRpbmc6IDEuMnJlbSAycmVtIDEuMnJlbSAzcmVtO1xuICAgIH1cblxuICAgIC5kcm9wZG93bi5zZWNvbmQgLmRyb3Bkb3duLnNlY29uZCAuZHJvcGRvd24tbGluayA+IGF7XG4gICAgICAgIHBhZGRpbmc6IDEuMnJlbSAycmVtIDEuMnJlbSA0cmVtO1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1saW5rOm5vdCg6bnRoLWxhc3QtY2hpbGQoMikpe1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cblxuICAgIC5hcnJvd3tcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICB9XG5cbiAgICAubmF2LWxpbms6aG92ZXIgLmFycm93e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZHJvcGRvd24gLmRyb3Bkb3duIC5hcnJvd3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBcblxuICAgIC5kcm9wZG93bi1saW5rOmZpcnN0LWNoaWxkOmhvdmVyIH4gLmFycm93e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmlnVGV4dDtcbiAgICB9XG5cbiAgICAubmF2LWxpbmsgPiBhID4gaXtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgIHRyYW5zaXRpb246IC43cztcbiAgICB9XG5cbiAgICAuZHJvcGRvd24gaXtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiAuN3M7XG4gICAgfVxufVxuXG4uYWlrZWZpLWxvZ297XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xuICB9XG5cbiAgLmhlYWRlci1sb2dve1xuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xvZ28vc3ZnL2xvZ28yLnN2Z1wiKSBuby1yZXBlYXQ7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvbG9nby9haWtlZmlzdmcvTG9nb25ldy5zdmdcIik7XG4gICAgLy8gZGlzcGxheTogYmxvY2s7XG4gICAgLy8gdGV4dC1pbmRlbnQ6IC05OTk5cHg7XG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiAxMDBweCBzODJweDtcbiAgICAvLyB3aWR0aDogNjN2aDtcbiAgICAvLyBoZWlnaHQ6IDE0dmg7ICBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjIsIDIuNSwgMy41KTtcbn1cblxuIiwiLy8gIGhlYWRlciBjb2xvclxuXG4kYmlnVGV4dDojMjBCMkFBO1xuJHNtYWxsVGV4dDogIzQ4RDFDQztcblxuXG4vLyBmb290ZXIgY29sb3JcbiRmb290ZXItY29udGFjdC1ob3ZlcjojNDQ0NDQ0O1xuXG5cblxuLy8gZ3JpZHMgY29sb3JcblxuXG4vL2Nhcm91c2VsIGNvbG9yXG5cblxuLy9jb250YWN0IHVzIGNvbG9yXG4kaWNvbjojMDE1Qjg1O1xuJGJhY2tncm91bmQtaG92ZXI6I0VGRjRGODtcbiRwbGFjZWhvbGRlcjojQTlBOUE5O1xuJGJ1dHRvbi1iYWNrZ3JvdW5kOiMyMEIyQUE7XG4kYnV0dG9uLWNvbG9yOndoaXRlO1xuJGFnaWxlLXRleHQ6IzAwNTI3RjtcbiRhZ2lsZS10ZXh0LTE6I0ZENkNBRTtcbiRjYXJkLXByaWNlOiNmMThjNzA7XG4kY2FyZC1wcmljZS1ob3ZlcjojZTQ0NjFiIDtcbiRidXR0b24tdGV4dDpibGFjaztcbiRidXR0b24tYmFja2dyb3VuZDojM2VhZGE4O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/dashboard/components/launch/main-launch.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/launch/main-launch.component.ts ***!
  \******************************************************************************/
/*! exports provided: MainLaunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLaunchComponent", function() { return MainLaunchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/modules/dashboard/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/modules/dashboard/components/footer/footer.component.ts");





class MainLaunchComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainLaunchComponent.ɵfac = function MainLaunchComponent_Factory(t) { return new (t || MainLaunchComponent)(); };
MainLaunchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLaunchComponent, selectors: [["app-main-launch"]], decls: 4, vars: 0, consts: [[1, "container-fluid", "p-0"]], template: function MainLaunchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvbGF1bmNoL21haW4tbGF1bmNoLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLaunchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-launch',
                templateUrl: './main-launch.component.html',
                styleUrls: ['./main-launch.component.scss']
            }]
    }], function () { return []; }, null); })();


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