(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./WebAppUI/src/$$_lazy_route_resource lazy recursive":
/*!*******************************************************************!*\
  !*** ./WebAppUI/src/$$_lazy_route_resource lazy namespace object ***!
  \*******************************************************************/
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
webpackEmptyAsyncContext.id = "./WebAppUI/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./WebAppUI/src/app/app.component.css":
/*!********************************************!*\
  !*** ./WebAppUI/src/app/app.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./WebAppUI/src/app/app.component.html":
/*!*********************************************!*\
  !*** ./WebAppUI/src/app/app.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header class=\"headerFixed\"></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./WebAppUI/src/app/app.component.ts":
/*!*******************************************!*\
  !*** ./WebAppUI/src/app/app.component.ts ***!
  \*******************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./WebAppUI/src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./WebAppUI/src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./WebAppUI/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./WebAppUI/src/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./WebAppUI/src/app/app.component.ts");
/* harmony import */ var _patient_profile_patient_profile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient-profile/patient-profile.module */ "./WebAppUI/src/app/patient-profile/patient-profile.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./WebAppUI/src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./WebAppUI/src/app/footer/footer.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./WebAppUI/src/environments/environment.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patient_profile_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patient-profile/patient-list/patient-list.component */ "./WebAppUI/src/app/patient-profile/patient-list/patient-list.component.ts");
/* harmony import */ var _patient_profile_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patient-profile/add-patient/add-patient.component */ "./WebAppUI/src/app/patient-profile/add-patient/add-patient.component.ts");
/* harmony import */ var _patient_profile_patientServices_patient_add_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patient-profile/patientServices/patient-add.service */ "./WebAppUI/src/app/patient-profile/patientServices/patient-add.service.ts");
/* harmony import */ var _patient_profile_view_patient_view_patient_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./patient-profile/view-patient/view-patient.component */ "./WebAppUI/src/app/patient-profile/view-patient/view-patient.component.ts");
/* harmony import */ var _patient_profile_update_patient_update_patient_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./patient-profile/update-patient/update-patient.component */ "./WebAppUI/src/app/patient-profile/update-patient/update-patient.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./WebAppUI/src/app/login/login.component.ts");
/* harmony import */ var _userServices_user_information_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./userServices/user-information.service */ "./WebAppUI/src/app/userServices/user-information.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../config/config */ "./WebAppUI/src/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    {
        path: 'update',
        component: _patient_profile_update_patient_update_patient_component__WEBPACK_IMPORTED_MODULE_15__["UpdatePatientComponent"]
    },
    {
        path: 'add',
        component: _patient_profile_add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_12__["AddPatientComponent"]
    },
    {
        path: 'view',
        component: _patient_profile_view_patient_view_patient_component__WEBPACK_IMPORTED_MODULE_14__["ViewPatientComponent"]
    },
    {
        path: 'patientList',
        component: _patient_profile_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_11__["PatientListComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
    },
    { path: '',
        redirectTo: 'patientList',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _patient_profile_patient_profile_module__WEBPACK_IMPORTED_MODULE_4__["PatientProfileModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_patient_profile_patientServices_patient_add_service__WEBPACK_IMPORTED_MODULE_13__["PatientAddService"], _userServices_user_information_service__WEBPACK_IMPORTED_MODULE_17__["UserInformationService"], { provide: _config_config__WEBPACK_IMPORTED_MODULE_18__["BASE_URL"], useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./WebAppUI/src/app/constant/endpoint.ts":
/*!***********************************************!*\
  !*** ./WebAppUI/src/app/constant/endpoint.ts ***!
  \***********************************************/
/*! exports provided: endpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
var endpoint = {
    patients: "patients",
    search: "search"
};


/***/ }),

/***/ "./WebAppUI/src/app/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./WebAppUI/src/app/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./WebAppUI/src/app/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./WebAppUI/src/app/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span class=\"mat-small\">© 2018 RMD, Developed By Ford Motor Company</span>\n</mat-toolbar>\n"

/***/ }),

/***/ "./WebAppUI/src/app/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./WebAppUI/src/app/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./WebAppUI/src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./WebAppUI/src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./WebAppUI/src/app/header/header.component.css":
/*!******************************************************!*\
  !*** ./WebAppUI/src/app/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  display: flex;\r\n  justify-content: left;\r\n  width: 100%;\r\n}\r\n\r\n.rmd-title{\r\n  -ms-grid-row-align: center;\r\n      align-self: center;\r\n  padding-left: 10px;\r\n}\r\n"

/***/ }),

/***/ "./WebAppUI/src/app/header/header.component.html":
/*!*******************************************************!*\
  !*** ./WebAppUI/src/app/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar  color=\"primary\">\r\n  <div class=\"header\" (click)=\"home();\">\r\n   <div><img src=\"../../assets/rmd_Logo.png\" width=\"43\" height=\"40\"/></div>\r\n  <div class=\"rmd-title\">RMD</div>\r\n   <small class=\"rmd-title\">Complete Care</small>\r\n  </div>\r\n\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./WebAppUI/src/app/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./WebAppUI/src/app/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.home = function () {
        this.router.navigate(['/patientList']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./WebAppUI/src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./WebAppUI/src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./WebAppUI/src/app/login/login.component.css":
/*!****************************************************!*\
  !*** ./WebAppUI/src/app/login/login.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container{\r\n  padding: 20px;\r\n  height: 600px;\r\n  background-image: url('login_banner.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: 50% 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n.form-container  * {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./WebAppUI/src/app/login/login.component.html":
/*!*****************************************************!*\
  !*** ./WebAppUI/src/app/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\r\n  <mat-card>\r\n    <div class=\"form-container\">\r\n    <mat-list>\r\n      <mat-list-item>\r\n        <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"User Name\">\r\n        </mat-form-field>\r\n      </mat-list-item>\r\n    </mat-list>\r\n\r\n    <mat-list>\r\n      <mat-list-item>\r\n        <mat-form-field>\r\n            <input matInput type=\"password\" placeholder=\"Password\">\r\n        </mat-form-field>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <mat-list>\r\n      <mat-list-item>\r\n        <button mat-raised-button color=\"primary\" (click)=\"login();\">Login</button>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./WebAppUI/src/app/login/login.component.ts":
/*!***************************************************!*\
  !*** ./WebAppUI/src/app/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.router.navigate(['/patientList']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./WebAppUI/src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./WebAppUI/src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/add-patient/add-patient.component.css":
/*!********************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/add-patient/add-patient.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.add-container  * {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/add-patient/add-patient.component.html":
/*!*********************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/add-patient/add-patient.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form [formGroup]=\"addProfileForm\" class=\"add-container\">\r\n  <mat-list>\r\n    <mat-list-item>\r\n      <h2>Add Patient</h2>\r\n    </mat-list-item>\r\n  </mat-list>\r\n  <mat-list>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Patient Id\" formControlName=\"patientID\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Patient Name\" formControlName=\"patientName\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Age\" formControlName=\"age\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Sex\" formControlName=\"sex\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Pateint In Time\" formControlName=\"patientInTime\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker\"  placeholder=\"Patient Date of Birth\" formControlName=\"dob\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Blood Group\" formControlName=\"bloodGroup\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Mobile Number\" formControlName=\"contactNo\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"Patient Address\" formControlName=\"patientAddress\"></textarea>\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Email Address\" formControlName=\"emailAddress\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Doctors Name\" formControlName=\"doctorsName\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Speciality\" formControlName=\"speciality\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Patient Height\" formControlName=\"patientHeight\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Patient Weight\" formControlName=\"patientWeight\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Patient B.P\" formControlName=\"patientBP\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Patient Pulse\" formControlName=\"patientPulse\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Patient Temperature\" formControlName=\"patientTemperature\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Patient SPO\" formControlName=\"patientSPO\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Patient R.P\" formControlName=\"patientRP\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"Patient Clinical History\" formControlName=\"patientClinicalHistory\"></textarea>\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"Treatments/Procedures\" formControlName=\"treatmentsProcedures\"></textarea>\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"Diagnosis Provisional\" formControlName=\"diagnosisProvisional\"></textarea>\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"Notes:\" formControlName=\"notes\"></textarea>\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"Treatment\" formControlName=\"treatment\"></textarea>\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"Investigation\" formControlName=\"investigation\"></textarea>\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"Review/Advise\" formControlName=\"review\"></textarea>\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n    <mat-list-item>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Amount\" formControlName=\"amount\">\r\n      </mat-form-field>\r\n    </mat-list-item>\r\n  </mat-list>\r\n   <mat-list>\r\n    <mat-list-item>\r\n      <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"addPatient()\">Add</button>\r\n    </mat-list-item>\r\n  </mat-list>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/add-patient/add-patient.component.ts":
/*!*******************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/add-patient/add-patient.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientComponent", function() { return AddPatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _patientServices_patient_add_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patientServices/patient-add.service */ "./WebAppUI/src/app/patient-profile/patientServices/patient-add.service.ts");
/* harmony import */ var _form_Controls_patient_from_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-Controls/patient-from-factory */ "./WebAppUI/src/app/patient-profile/form-Controls/patient-from-factory.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPatientComponent = /** @class */ (function () {
    function AddPatientComponent(patientAddService) {
        this.patientAddService = patientAddService;
        this.addToList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.patientFromFactory = new _form_Controls_patient_from_factory__WEBPACK_IMPORTED_MODULE_2__["PatientFromFactory"];
        this.addProfileForm = this.patientFromFactory.getPatientFormModel("add").getPatientFormModel(this.patient);
    }
    AddPatientComponent.prototype.addPatient = function () {
        this.patientAddService.addPatient(this.addProfileForm.value).subscribe(function (successMsg) { return console.log(successMsg); });
    };
    AddPatientComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddPatientComponent.prototype, "addToList", void 0);
    AddPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-patient',
            template: __webpack_require__(/*! ./add-patient.component.html */ "./WebAppUI/src/app/patient-profile/add-patient/add-patient.component.html"),
            styles: [__webpack_require__(/*! ./add-patient.component.css */ "./WebAppUI/src/app/patient-profile/add-patient/add-patient.component.css")]
        }),
        __metadata("design:paramtypes", [_patientServices_patient_add_service__WEBPACK_IMPORTED_MODULE_1__["PatientAddService"]])
    ], AddPatientComponent);
    return AddPatientComponent;
}());



/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/form-Controls/patient-from-factory.ts":
/*!********************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/form-Controls/patient-from-factory.ts ***!
  \********************************************************************************/
/*! exports provided: PatientFromFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientFromFactory", function() { return PatientFromFactory; });
/* harmony import */ var _patient_form_model_patient_form_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../patient-form-model/patient-form-model */ "./WebAppUI/src/app/patient-profile/patient-form-model/patient-form-model.ts");

var PatientFromFactory = /** @class */ (function () {
    function PatientFromFactory() {
    }
    PatientFromFactory.prototype.getPatientFormModel = function (formType) {
        if (formType === 'updateForm') {
            var updatePatientForm = new _patient_form_model_patient_form_model__WEBPACK_IMPORTED_MODULE_0__["PatientFormModel"]();
            return updatePatientForm;
        }
        else if (formType === 'add') {
            var addPatientForm = new _patient_form_model_patient_form_model__WEBPACK_IMPORTED_MODULE_0__["PatientFormModel"]();
            return addPatientForm;
        }
    };
    ;
    return PatientFromFactory;
}());



/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/patient-constractor/patient-constractor.ts":
/*!*************************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/patient-constractor/patient-constractor.ts ***!
  \*************************************************************************************/
/*! exports provided: PatientConstractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientConstractor", function() { return PatientConstractor; });
var PatientConstractor = /** @class */ (function () {
    function PatientConstractor(patient) {
        this.value = patient || '';
    }
    return PatientConstractor;
}());



/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/patient-form-model/patient-form-model.ts":
/*!***********************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/patient-form-model/patient-form-model.ts ***!
  \***********************************************************************************/
/*! exports provided: PatientFormModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientFormModel", function() { return PatientFormModel; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _patient_constractor_patient_constractor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patient-constractor/patient-constractor */ "./WebAppUI/src/app/patient-profile/patient-constractor/patient-constractor.ts");


var PatientFormModel = /** @class */ (function () {
    function PatientFormModel() {
    }
    PatientFormModel.prototype.getPatientFormModel = function (patient) {
        var patientConstractor = new _patient_constractor_patient_constractor__WEBPACK_IMPORTED_MODULE_1__["PatientConstractor"](patient);
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            patientID: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.patientID),
            patientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.patientName),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.age),
            sex: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.sex),
            patientInTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.patientInTime),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.dob),
            bloodGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.bloodGroup),
            contactNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.contactNo),
            patientAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.patientAddress),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.emailAddress),
            doctorsName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.doctorsName),
            speciality: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.speciality),
            patientHeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.patientHeight),
            patientWeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.patientWeight),
            patientBP: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.patientBP),
            patientPulse: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.patientPulse),
            patientTemperature: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.patientTemperature),
            patientSPO: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.patientSPO),
            patientRP: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.patientRP),
            patientClinicalHistory: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.patientClinicalHistorys),
            diagnosisProvisional: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.diagnosisProvisional),
            treatmentsProcedures: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.treatmentsProcedures),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.notes),
            treatment: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.treatment),
            investigation: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.investigation),
            review: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.review),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](patientConstractor.value.amount)
        });
    };
    return PatientFormModel;
}());



/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/patient-list/patient-list.component.css":
/*!**********************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/patient-list/patient-list.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.list-container  * {\r\n  width: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/patient-list/patient-list.component.html":
/*!***********************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/patient-list/patient-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\r\n  <mat-list-item class=\"list-container\">\r\n      <mat-form-field class=\"search\">\r\n        <input matInput placeholder=\"Search Patient\" type=\"search\" [formControl]=\"searchValue\">\r\n      </mat-form-field>\r\n  </mat-list-item>\r\n  <mat-list-item (click)=\"viewPatient(p)\" matRipple *ngFor=\"let p of patients\">\r\n    {{p.patientID}}, {{p.patientName}}, {{p.contactNo}}\r\n    <mat-divider></mat-divider>\r\n  </mat-list-item>\r\n</mat-list>\r\n\r\n\r\n<mat-list>\r\n  <mat-list-item class=\"list-container\">\r\n    <button mat-raised-button color=\"accent\" (click)=\"addPatient();\" mat-button>Add Patient</button>\r\n  </mat-list-item>\r\n</mat-list>\r\n"

/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/patient-list/patient-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/patient-list/patient-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PatientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientListComponent", function() { return PatientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patientServices_patient_add_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../patientServices/patient-add.service */ "./WebAppUI/src/app/patient-profile/patientServices/patient-add.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sharedServices_update_patient_shared_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sharedServices/update-patient-shared-service.service */ "./WebAppUI/src/app/patient-profile/sharedServices/update-patient-shared-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PatientListComponent = /** @class */ (function () {
    function PatientListComponent(route, router, patientAddService, updatePatientSharedServiceService) {
        this.route = route;
        this.router = router;
        this.patientAddService = patientAddService;
        this.updatePatientSharedServiceService = updatePatientSharedServiceService;
    }
    PatientListComponent.prototype.showPatientList = function () {
        var _this = this;
        this.patientAddService.getPatient().subscribe(function (patients) {
            _this.patients = patients;
        });
    };
    PatientListComponent.prototype.viewPatient = function (patient) {
        this.patients.map(function (patients) {
            if (patients.patientID === patient) {
                patient['_id'] = patients['_id'];
            }
            ;
        });
        this.updatePatientSharedServiceService.selectedPatient = patient;
        this.router.navigate(['/view']);
    };
    PatientListComponent.prototype.addPatient = function () {
        this.router.navigate(['/add']);
    };
    PatientListComponent.prototype.search = function () {
        var _this = this;
        this.searchValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.searchValue.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(600), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (value) {
            _this.patientAddService.searchPatient(value).subscribe(function (patients) {
                _this.patients = patients;
            });
        });
    };
    PatientListComponent.prototype.ngOnInit = function () {
        this.showPatientList();
        this.search();
    };
    PatientListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-list',
            template: __webpack_require__(/*! ./patient-list.component.html */ "./WebAppUI/src/app/patient-profile/patient-list/patient-list.component.html"),
            styles: [__webpack_require__(/*! ./patient-list.component.css */ "./WebAppUI/src/app/patient-profile/patient-list/patient-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _patientServices_patient_add_service__WEBPACK_IMPORTED_MODULE_2__["PatientAddService"],
            _sharedServices_update_patient_shared_service_service__WEBPACK_IMPORTED_MODULE_5__["UpdatePatientSharedServiceService"]])
    ], PatientListComponent);
    return PatientListComponent;
}());



/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/patient-profile.module.ts":
/*!********************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/patient-profile.module.ts ***!
  \********************************************************************/
/*! exports provided: PatientProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientProfileModule", function() { return PatientProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patient-list/patient-list.component */ "./WebAppUI/src/app/patient-profile/patient-list/patient-list.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-patient/add-patient.component */ "./WebAppUI/src/app/patient-profile/add-patient/add-patient.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_patient_view_patient_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-patient/view-patient.component */ "./WebAppUI/src/app/patient-profile/view-patient/view-patient.component.ts");
/* harmony import */ var _update_patient_update_patient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-patient/update-patient.component */ "./WebAppUI/src/app/patient-profile/update-patient/update-patient.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PatientProfileModule = /** @class */ (function () {
    function PatientProfileModule() {
    }
    PatientProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"]
            ],
            exports: [
                _patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_2__["PatientListComponent"]
            ],
            declarations: [_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_2__["PatientListComponent"], _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_5__["AddPatientComponent"], _view_patient_view_patient_component__WEBPACK_IMPORTED_MODULE_7__["ViewPatientComponent"], _update_patient_update_patient_component__WEBPACK_IMPORTED_MODULE_8__["UpdatePatientComponent"]]
        })
    ], PatientProfileModule);
    return PatientProfileModule;
}());



/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/patientServices/patient-add.service.ts":
/*!*********************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/patientServices/patient-add.service.ts ***!
  \*********************************************************************************/
/*! exports provided: PatientAddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientAddService", function() { return PatientAddService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/config */ "./WebAppUI/src/config/config.ts");
/* harmony import */ var _constant_endpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constant/endpoint */ "./WebAppUI/src/app/constant/endpoint.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var PatientAddService = /** @class */ (function () {
    function PatientAddService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    PatientAddService.prototype.getPatient = function () {
        return this.http.get("" + this.baseUrl + _constant_endpoint__WEBPACK_IMPORTED_MODULE_3__["endpoint"].patients);
    };
    PatientAddService.prototype.addPatient = function (patientObj) {
        return this.http.post("" + this.baseUrl + _constant_endpoint__WEBPACK_IMPORTED_MODULE_3__["endpoint"].patients, patientObj, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    PatientAddService.prototype.searchPatient = function (patientId) {
        return this.http.get("" + this.baseUrl + _constant_endpoint__WEBPACK_IMPORTED_MODULE_3__["endpoint"].search + ('?patientID=' + patientId));
    };
    PatientAddService.prototype.updatePatient = function (updatepatientObj) {
        return this.http.put("" + this.baseUrl + _constant_endpoint__WEBPACK_IMPORTED_MODULE_3__["endpoint"].patients, updatepatientObj, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    PatientAddService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_config_config__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], Object])
    ], PatientAddService);
    return PatientAddService;
}());



/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/sharedServices/update-patient-shared-service.service.ts":
/*!**************************************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/sharedServices/update-patient-shared-service.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: UpdatePatientSharedServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePatientSharedServiceService", function() { return UpdatePatientSharedServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpdatePatientSharedServiceService = /** @class */ (function () {
    function UpdatePatientSharedServiceService() {
    }
    UpdatePatientSharedServiceService.prototype.getPatient = function () {
        var _this = this;
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            observer.next(_this.selectedPatient);
        });
    };
    UpdatePatientSharedServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UpdatePatientSharedServiceService);
    return UpdatePatientSharedServiceService;
}());



/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/update-patient/update-patient.component.css":
/*!**************************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/update-patient/update-patient.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.add-container  * {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/update-patient/update-patient.component.html":
/*!***************************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/update-patient/update-patient.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"updatePatientForm\" class=\"add-container\">\n  <mat-list>\n    <mat-list-item>\n      <h2>Edit Patient</h2>\n    </mat-list-item>\n  </mat-list>\n  <mat-list>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Patient Id\" formControlName=\"patientID\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Patient Name\" formControlName=\"patientName\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Age\" formControlName=\"age\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Sex\" formControlName=\"sex\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Pateint In Time\" formControlName=\"patientInTime\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\"  placeholder=\"Patient Date of Birth\" formControlName=\"dob\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Blood Group\" formControlName=\"bloodGroup\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Mobile Number\" formControlName=\"contactNo\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Patient Address\" formControlName=\"patientAddress\"></textarea>\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Email Address\" formControlName=\"emailAddress\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Doctors Name\" formControlName=\"doctorsName\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Speciality\" formControlName=\"speciality\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Patient Height\" formControlName=\"patientHeight\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Patient Weight\" formControlName=\"patientWeight\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Patient B.P\" formControlName=\"patientBP\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Patient Pulse\" formControlName=\"patientPulse\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Patient Temperature\" formControlName=\"patientTemperature\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Patient SPO\" formControlName=\"patientSPO\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Patient R.P\" formControlName=\"patientRP\">\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Patient Clinical History\" formControlName=\"patientClinicalHistory\"></textarea>\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Treatments/Procedures\" formControlName=\"treatmentsProcedures\"></textarea>\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Diagnosis Provisional\" formControlName=\"diagnosisProvisional\"></textarea>\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Notes:\" formControlName=\"notes\"></textarea>\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Treatment\" formControlName=\"treatment\"></textarea>\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Investigation\" formControlName=\"investigation\"></textarea>\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Review/Advise\" formControlName=\"review\"></textarea>\n      </mat-form-field>\n    </mat-list-item>\n    <mat-list-item>\n      <mat-form-field>\n        <input matInput placeholder=\"Amount\" formControlName=\"amount\">\n      </mat-form-field>\n    </mat-list-item>\n  </mat-list>\n  <mat-list>\n    <mat-list-item>\n      <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"save()\">Save</button>\n    </mat-list-item>\n  </mat-list>\n\n</form>\n"

/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/update-patient/update-patient.component.ts":
/*!*************************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/update-patient/update-patient.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UpdatePatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePatientComponent", function() { return UpdatePatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_Controls_patient_from_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-Controls/patient-from-factory */ "./WebAppUI/src/app/patient-profile/form-Controls/patient-from-factory.ts");
/* harmony import */ var _sharedServices_update_patient_shared_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedServices/update-patient-shared-service.service */ "./WebAppUI/src/app/patient-profile/sharedServices/update-patient-shared-service.service.ts");
/* harmony import */ var _patientServices_patient_add_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patientServices/patient-add.service */ "./WebAppUI/src/app/patient-profile/patientServices/patient-add.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdatePatientComponent = /** @class */ (function () {
    function UpdatePatientComponent(updatePatientSharedServiceService, patientAddService, router) {
        this.updatePatientSharedServiceService = updatePatientSharedServiceService;
        this.patientAddService = patientAddService;
        this.router = router;
        this.patientFromFactory = new _form_Controls_patient_from_factory__WEBPACK_IMPORTED_MODULE_1__["PatientFromFactory"];
    }
    UpdatePatientComponent.prototype.displayPatientDetails = function () {
        var _this = this;
        this.updatePatientSharedServiceService.getPatient().subscribe(function (patient) {
            _this.patientNodeId = patient['_id'];
            _this.updatePatientForm = _this.patientFromFactory.getPatientFormModel("updateForm").getPatientFormModel(patient);
        });
    };
    UpdatePatientComponent.prototype.save = function () {
        var _this = this;
        this.updatePatientForm.value['_id'] = this.patientNodeId;
        this.patientAddService.updatePatient(this.updatePatientForm.value).subscribe(function (successMsg) {
            successMsg;
            _this.router.navigate(['/patientList']);
        });
    };
    UpdatePatientComponent.prototype.ngOnInit = function () {
        this.displayPatientDetails();
    };
    UpdatePatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-patient',
            template: __webpack_require__(/*! ./update-patient.component.html */ "./WebAppUI/src/app/patient-profile/update-patient/update-patient.component.html"),
            styles: [__webpack_require__(/*! ./update-patient.component.css */ "./WebAppUI/src/app/patient-profile/update-patient/update-patient.component.css")]
        }),
        __metadata("design:paramtypes", [_sharedServices_update_patient_shared_service_service__WEBPACK_IMPORTED_MODULE_2__["UpdatePatientSharedServiceService"],
            _patientServices_patient_add_service__WEBPACK_IMPORTED_MODULE_3__["PatientAddService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UpdatePatientComponent);
    return UpdatePatientComponent;
}());



/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/view-patient/view-patient.component.css":
/*!**********************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/view-patient/view-patient.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.view-container  * {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/view-patient/view-patient.component.html":
/*!***********************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/view-patient/view-patient.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-update-patient [patient]=\"patient\"></app-update-patient>-->\n<div class=\"view-container\">\n<mat-list>\n  <mat-list-item>\n    <h2>Details</h2>\n  </mat-list-item>\n</mat-list>\n  <mat-divider></mat-divider>\n<mat-list>\n  <mat-list-item > {{patient.patientID}} </mat-list-item>\n</mat-list>\n\n<mat-list>\n  <mat-list-item > {{patient.patientName}} </mat-list-item>\n</mat-list>\n\n<mat-list>\n  <mat-list-item > {{patient.age}} </mat-list-item>\n</mat-list>\n\n<mat-list>\n  <mat-list-item > {{patient.address}} </mat-list-item>\n</mat-list>\n\n<mat-list>\n  <mat-list-item > {{patient.emailAddress}} </mat-list-item>\n</mat-list>\n\n<mat-list>\n  <mat-list-item > {{patient.doctorName}} </mat-list-item>\n</mat-list>\n\n<mat-list>\n  <mat-list-item > {{patient.speciality}} </mat-list-item>\n</mat-list>\n\n<mat-list>\n  <mat-list-item > {{patient.paitentClinicalHistory}} </mat-list-item>\n</mat-list>\n\n<mat-list>\n  <mat-list-item > {{patient.diagnosisProvisional}} </mat-list-item>\n</mat-list>\n\n\n<mat-list>\n  <mat-list-item > {{patient.notes}} </mat-list-item>\n</mat-list>\n\n<mat-list>\n  <mat-list-item > {{patient.treatment}} </mat-list-item>\n</mat-list>\n\n<mat-list>\n  <mat-list-item > {{patient.investigation}} </mat-list-item>\n</mat-list>\n\n<mat-list>\n  <mat-list-item > {{patient.reviewAdvise}} </mat-list-item>\n</mat-list>\n\n<mat-list>\n  <mat-list-item > {{patient.amount}} </mat-list-item>\n</mat-list>\n\n<mat-list>\n  <mat-list-item > {{patient.consent}} </mat-list-item>\n</mat-list>\n\n<mat-list>\n  <mat-list-item>\n    <button mat-raised-button color=\"primary\" (click)=\"edit(patient)\">Edit</button>\n  </mat-list-item>\n</mat-list>\n</div>\n"

/***/ }),

/***/ "./WebAppUI/src/app/patient-profile/view-patient/view-patient.component.ts":
/*!*********************************************************************************!*\
  !*** ./WebAppUI/src/app/patient-profile/view-patient/view-patient.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPatientComponent", function() { return ViewPatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sharedServices_update_patient_shared_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sharedServices/update-patient-shared-service.service */ "./WebAppUI/src/app/patient-profile/sharedServices/update-patient-shared-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewPatientComponent = /** @class */ (function () {
    function ViewPatientComponent(updatePatientSharedServiceService, route, router) {
        this.updatePatientSharedServiceService = updatePatientSharedServiceService;
        this.route = route;
        this.router = router;
    }
    ViewPatientComponent.prototype.showPatient = function () {
        var _this = this;
        this.updatePatientSharedServiceService.getPatient().subscribe(function (response) {
            _this.patient = response;
        });
    };
    ;
    ViewPatientComponent.prototype.edit = function (patient) {
        this.updatePatientSharedServiceService.selectedPatient = patient;
        this.router.navigate(['/update']);
    };
    ;
    ViewPatientComponent.prototype.ngOnInit = function () {
        this.showPatient();
    };
    ViewPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-patient',
            template: __webpack_require__(/*! ./view-patient.component.html */ "./WebAppUI/src/app/patient-profile/view-patient/view-patient.component.html"),
            styles: [__webpack_require__(/*! ./view-patient.component.css */ "./WebAppUI/src/app/patient-profile/view-patient/view-patient.component.css")]
        }),
        __metadata("design:paramtypes", [_sharedServices_update_patient_shared_service_service__WEBPACK_IMPORTED_MODULE_1__["UpdatePatientSharedServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewPatientComponent);
    return ViewPatientComponent;
}());



/***/ }),

/***/ "./WebAppUI/src/app/userServices/user-information.service.ts":
/*!*******************************************************************!*\
  !*** ./WebAppUI/src/app/userServices/user-information.service.ts ***!
  \*******************************************************************/
/*! exports provided: UserInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInformationService", function() { return UserInformationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInformationService = /** @class */ (function () {
    function UserInformationService() {
    }
    UserInformationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserInformationService);
    return UserInformationService;
}());



/***/ }),

/***/ "./WebAppUI/src/config/config.ts":
/*!***************************************!*\
  !*** ./WebAppUI/src/config/config.ts ***!
  \***************************************/
/*! exports provided: BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('BaseUrl');


/***/ }),

/***/ "./WebAppUI/src/environments/environment.ts":
/*!**************************************************!*\
  !*** ./WebAppUI/src/environments/environment.ts ***!
  \**************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: "http://localhost:3000/api/"
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

/***/ "./WebAppUI/src/main.ts":
/*!******************************!*\
  !*** ./WebAppUI/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./WebAppUI/src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./WebAppUI/src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./WebAppUI/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\dev\git\fordHealthCare\src\WebAppUI\src\main.ts */"./WebAppUI/src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map