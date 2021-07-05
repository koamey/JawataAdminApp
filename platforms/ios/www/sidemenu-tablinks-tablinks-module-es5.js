function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidemenu-tablinks-tablinks-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/tablinks/tablinks.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/tablinks/tablinks.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidemenuTablinksTablinksPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-header *ngIf=\"header\" [heading]=\"heading\"></app-header> -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button> <b style=\"font-size:1rem;color: #fff;\" class=\"heading-white\">{{heading}}</b>\n    </ion-buttons>    \n    <ion-list slot=\"end\">\n      <b style=\"color: #fff !important;\">\n        <ion-icon slot=\"end\" (click)=\"showPopUp($event)\" style=\"vertical-align:middle;font-size:2.5rem; color: #fff !important;\" name=\"more\">\n        </ion-icon>\n      </b>\n    </ion-list>\n  \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-tabs  #tabs (ionTabsDidChange)=\"tabChange(tabs)\">\n  <!-- <ion-tabs> -->\n   <ion-tab-bar slot=\"bottom\">\n   <ion-tab-button tab=\"scanpage\" (ionSelect)=\"ionSelected()\" layout=\"icon-top\">\n      <ion-icon name=\"qr-scanner\"></ion-icon>\n      <ion-label>{{'Scan' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"history\" (ionSelect)=\"ionSelected()\" layout=\"icon-top\">\n      <ion-icon name=\"list-box\"></ion-icon>\n      <ion-label>{{'History'| translate}}</ion-label>\n    </ion-tab-button> \n\n    <ion-tab-button tab=\"settings\" layout=\"icon-top\">\n      <ion-icon name=\"md-settings\"></ion-icon>\n      <ion-label>{{'Settings'| translate}}</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>";
    /***/
  },

  /***/
  "./src/app/sidemenu/tablinks/tablinks-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/sidemenu/tablinks/tablinks-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: TablinksPageRoutingModule */

  /***/
  function srcAppSidemenuTablinksTablinksRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablinksPageRoutingModule", function () {
      return TablinksPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tablinks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tablinks.page */
    "./src/app/sidemenu/tablinks/tablinks.page.ts"); // tablinks-routing.module.ts


    var routes = [{
      path: 'tablinks',
      component: _tablinks_page__WEBPACK_IMPORTED_MODULE_3__["TablinksPage"],
      children: [{
        path: 'scanpage',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | scanpage-scanpage-module */
          "scanpage-scanpage-module").then(__webpack_require__.bind(null,
          /*! ../scanpage/scanpage.module */
          "./src/app/sidemenu/scanpage/scanpage.module.ts")).then(function (m) {
            return m.ScanpagePageModule;
          });
        }
      }, {
        path: 'history',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | history-history-module */
          "history-history-module").then(__webpack_require__.bind(null,
          /*! ../history/history.module */
          "./src/app/sidemenu/history/history.module.ts")).then(function (m) {
            return m.HistoryPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | settings-settings-module */
          "settings-settings-module").then(__webpack_require__.bind(null,
          /*! ../settings/settings.module */
          "./src/app/sidemenu/settings/settings.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: '',
        redirectTo: '/tablinks/scanpage',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/tablinks/scanpage',
      pathMatch: 'full'
    }];

    var TablinksPageRoutingModule = function TablinksPageRoutingModule() {
      _classCallCheck(this, TablinksPageRoutingModule);
    };

    TablinksPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TablinksPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sidemenu/tablinks/tablinks.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/sidemenu/tablinks/tablinks.module.ts ***!
    \******************************************************/

  /*! exports provided: LanguageLoader, TablinksPageModule */

  /***/
  function srcAppSidemenuTablinksTablinksModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageLoader", function () {
      return LanguageLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablinksPageModule", function () {
      return TablinksPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _tablinks_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tablinks.page */
    "./src/app/sidemenu/tablinks/tablinks.page.ts");
    /* harmony import */


    var _tablinks_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tablinks-routing.module */
    "./src/app/sidemenu/tablinks/tablinks-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/translate-config.service */
    "./src/app/translate-config.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js"); // import { Routes, RouterModule } from '@angular/router';
    // import { HeaderComponent } from '../../components/header/header.component';
    // import { AppComponent } from '../../app.component';


    function LanguageLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
    }

    var TablinksPageModule = function TablinksPageModule() {
      _classCallCheck(this, TablinksPageModule);
    };

    TablinksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], //IonicModule,
      _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], // AppComponent,
      // HeaderComponent,
      _tablinks_routing_module__WEBPACK_IMPORTED_MODULE_6__["TablinksPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
          useFactory: LanguageLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
        }
      })],
      providers: [src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_9__["TranslateConfigService"]],
      declarations: [_tablinks_page__WEBPACK_IMPORTED_MODULE_5__["TablinksPage"]]
    })], TablinksPageModule);
    /***/
  },

  /***/
  "./src/app/sidemenu/tablinks/tablinks.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/sidemenu/tablinks/tablinks.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidemenuTablinksTablinksPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --ion-background-color:#343a40 !important;\n  color: #fff !important; }\n\nion-toolbar {\n  background-color: #343a40 !important; }\n\nion-header ion-menu-button {\n  color: #fff !important;\n  font-size: 2rem; }\n\n.toolbar-background {\n  background: #343a40 !important;\n  position: relative; }\n\n.toolbar-background, ::slotted(ion-progress-bar) {\n  position: relative; }\n\nion-list ion-label {\n  font-size: 1.16rem !important;\n  color: #000 !important; }\n\nion-list {\n  margin: 0rem !important; }\n\n:host {\n  --background: var(--ion-toolbar-background,var(--ion-color-step-50,#343a40 !important)) !important; }\n\n.ion-color-primary {\n  --ion-color-base: #343a40!important; }\n\n.hydrated {\n  visibility: inherit !important;\n  color: #343a40 !important; }\n\n.radio-inner {\n  width: calc(50% + var(--border-width));\n  height: calc(50% + var(--border-width));\n  transform: scale3d(0, 0, 0);\n  border-radius: 50%;\n  transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  --color-checked: black !important; }\n\nion-tab-bar {\n  bottom: 20px;\n  position: relative;\n  border-radius: 16px;\n  width: 92%;\n  margin: 0 auto; }\n\nion-tab-button {\n  --color: var(--ion-color-dark);\n  --color-selected: var(--ion-color-dark); }\n\nion-tab-button::before {\n    background-color: transparent;\n    display: block;\n    content: \"\";\n    margin: 0 auto;\n    width: 60px;\n    height: 4px; }\n\nion-tab-button.tab-selected::before {\n    background-color: var(--ion-color-dark); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvQW1leS9KQVdBVEEvamF3YXRhLW1hbmFnZXIvSmF3YXRhTWFuYWdlckFwcC9zcmMvYXBwL3NpZGVtZW51L3RhYmxpbmtzL3RhYmxpbmtzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUF1QjtFQUN2QixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxvQ0FBbUMsRUFBQTs7QUFFdkM7RUFDSSxzQkFBc0I7RUFDdEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLDhCQUE4QjtFQUM5QixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSw2QkFBNkI7RUFDN0Isc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksa0dBQWEsRUFBQTs7QUFFakI7RUFDSSxtQ0FBaUIsRUFBQTs7QUFFckI7RUFDSSw4QkFBOEI7RUFDOUIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksc0NBQXNDO0VBQ3RDLHVDQUF1QztFQUN2QywyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLDJEQUFvSDtFQUNwSCxpQ0FBZ0IsRUFBQTs7QUFFcEI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsY0FBYyxFQUFBOztBQUdoQjtFQUNFLDhCQUFRO0VBQ1IsdUNBQWlCLEVBQUE7O0FBRm5CO0lBS0ksNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXLEVBQUE7O0FBVmY7SUFjSSx1Q0FBdUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51L3RhYmxpbmtzL3RhYmxpbmtzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzM0M2E0MCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNDNhNDAgIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi50b29sYmFyLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQ6ICMzNDNhNDAgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9vbGJhci1iYWNrZ3JvdW5kLCA6OnNsb3R0ZWQoaW9uLXByb2dyZXNzLWJhcikge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1saXN0IGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjE2cmVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cbmlvbi1saXN0IHtcbiAgICBtYXJnaW46IDByZW0gIWltcG9ydGFudDtcbn1cbjpob3N0IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsIzM0M2E0MCAhaW1wb3J0YW50KSkgIWltcG9ydGFudDtcbn1cbi5pb24tY29sb3ItcHJpbWFyeXtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMzQzYTQwIWltcG9ydGFudDtcbn1cbi5oeWRyYXRlZCB7XG4gICAgdmlzaWJpbGl0eTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMzQzYTQwICFpbXBvcnRhbnQ7XG59XG5cbi5yYWRpby1pbm5lcntcbiAgICB3aWR0aDogY2FsYyg1MCUgKyB2YXIoLS1ib3JkZXItd2lkdGgpKTtcbiAgICBoZWlnaHQ6IGNhbGMoNTAlICsgdmFyKC0tYm9yZGVyLXdpZHRoKSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsIDAsIDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcywgLXdlYmtpdC10cmFuc2Zvcm0gMC4yOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAwcztcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5pb24tdGFiLWJhciB7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHdpZHRoOiA5MiU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIGlvbi10YWItYnV0dG9uIHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBcbiAgICAmOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgfVxuICBcbiAgICAmLnRhYi1zZWxlY3RlZDo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICB9XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sidemenu/tablinks/tablinks.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/sidemenu/tablinks/tablinks.page.ts ***!
    \****************************************************/

  /*! exports provided: TablinksPage */

  /***/
  function srcAppSidemenuTablinksTablinksPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablinksPage", function () {
      return TablinksPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/translate-config.service */
    "./src/app/translate-config.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _components_modal_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/modal/modal.page */
    "./src/app/components/modal/modal.page.ts");
    /* harmony import */


    var src_app_components_entitymodal_entitymodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/entitymodal/entitymodal.page */
    "./src/app/components/entitymodal/entitymodal.page.ts"); // import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


    var TablinksPage = /*#__PURE__*/function () {
      function TablinksPage(translateConfigService, popoverCtrl, changeRef, navCtrl, translate) {
        _classCallCheck(this, TablinksPage);

        // this.changeRef.detectChanges();
        this.translateConfigService = translateConfigService;
        this.popoverCtrl = popoverCtrl;
        this.changeRef = changeRef;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.header = true;
        this.selectedLanguage = localStorage.getItem('selectedL');
      }

      _createClass(TablinksPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.translate.use(this.selectedLanguage);
          this.translate.get('Check-In').subscribe(function (res) {
            _this.heading = "";
            _this.heading = res;
          });

          if (localStorage.getItem('nav') == 'true') {
            this.navCtrl.navigateForward(['tablinks/history']);
          }

          if (localStorage.getItem('entityName') == null) {
            this.showEntityModalPopup();
          }
        }
        /** For Header pop-up (three dots) */

      }, {
        key: "showPopUp",
        value: function showPopUp(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverCtrl.create({
                      component: _components_modal_modal_page__WEBPACK_IMPORTED_MODULE_5__["ModalPage"],
                      event: value,
                      translucent: true,
                      cssClass: 'popovercustom',
                      showBackdrop: true //,backdropDismiss: false

                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showEntityModalPopup",
        value: function showEntityModalPopup() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var popover;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.popoverCtrl.create({
                      component: src_app_components_entitymodal_entitymodal_page__WEBPACK_IMPORTED_MODULE_6__["EntitymodalPage"],
                      translucent: true,
                      backdropDismiss: false
                    });

                  case 2:
                    popover = _context2.sent;
                    _context2.next = 5;
                    return popover.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "tabChange",
        value: function tabChange(tabs) {
          console.log('tabChange tablinks/history'); //  if(localStorage.getItem('nav')=='true')
          //  {
          //   this.navCtrl.navigateForward(['tablinks/history']);
          //  }else{

          this.navCtrl.navigateForward(['tablinks/' + tabs.getSelected()]); // }
          // this.navCtrl.navigateBack(['tablinks/'+tabs.getSelected()]);

          console.log('after change:-', ['tablinks/' + tabs.getSelected()]);
        } // ionViewWillEnter()
        // {
        //   alert('ionViewWillEnter history');
        //   this.navCtrl.navigateForward(['tablinks/'+this.selectedtabs]);
        // }
        // ionViewDidEnter()
        // {
        //   alert('ionViewDidEnter history');
        //   this.navCtrl.navigateForward(['tablinks/'+this.selectedtabs]);
        // }

      }, {
        key: "ionSelected",
        value: function ionSelected() {
          console.log('ionSelected method invoked');
        }
      }]);

      return TablinksPage;
    }();

    TablinksPage.ctorParameters = function () {
      return [{
        type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], TablinksPage.prototype, "heading", void 0);
    TablinksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tablinks',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tablinks.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/tablinks/tablinks.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tablinks.page.scss */
      "./src/app/sidemenu/tablinks/tablinks.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])], TablinksPage);
    /***/
  }
}]);
//# sourceMappingURL=sidemenu-tablinks-tablinks-module-es5.js.map