function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./sidemenu/history/history.module": ["./src/app/sidemenu/history/history.module.ts", "history-history-module"],
      "./sidemenu/scanpage/scanpage.module": ["./src/app/sidemenu/scanpage/scanpage.module.ts", "scanpage-scanpage-module"],
      "./sidemenu/settings/settings.module": ["./src/app/sidemenu/settings/settings.module.ts", "settings-settings-module"],
      "./sidemenu/tablinks/tablinks.module": ["./src/app/sidemenu/tablinks/tablinks.module.ts", "sidemenu-tablinks-tablinks-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app *ngIf=\"sideMenuNames\">\n  <ion-split-pane contentId=\"main\">\n    <ion-menu contentId=\"main\">\n      <ion-content>\n        <ion-list class=\"col\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of userDetails\">\n            <div [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\" (click)=\"CameraActionSheet()\">\n              <div style=\"height: 180px;width: 180px;margin: 0 auto;position: relative;\">\n                <ion-thumbnail style=\"height: 180px;width: 180px;\">\n                  <img [src]=\"profilepic\" onerror=\"this.onerror=null;this.src='assets/default.png';\" (click)=\"CameraActionSheet()\"\n                    style=\"height: 100%; width: 100%; border-radius: 50%; display: block;\">\n                </ion-thumbnail>\n                <ion-icon [name]=\"p.icon\"\n                  style=\"position: absolute; bottom: 0; left: 72%;  color: aliceblue; zoom: 2.5;\">\n                </ion-icon>\n              </div>\n              <!-- <ion-icon  style=\"font-size: 5rem; color: white !important;\" class=\"text-center sidebar-name\" slot=\"start\"\n                [name]=\"p.icon\">\n              </ion-icon> -->\n\n              <ion-row>\n                <ion-col style=\"font-size:0.975rem; color: white !important; text-align: center;\" class=\"sidebar-name\">\n                  {{p.title}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col style=\"font-size: 0.875rem; color: white !important; padding-top: 0; text-align: center;\"\n                  class=\"sidebar-name\">\n                  {{p.emailid}}\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-menu-toggle>\n        </ion-list>\n        <ion-list class=\"sidemenucol\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of sideMenuPages\">\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\" style=\"color: white;\">\n              <ion-icon slot=\"start\" [name]=\"p.icon\" class=\"sidemnu-label\"\n                style=\"color: #424242 !important;font-size: 1.3rem;margin-right: 1rem;\"></ion-icon>\n              <ion-label style=\"font-size: 1rem !important;color: #424242 !important;\">\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n\n<ion-content *ngIf=\"showLoginForm\">\n\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onClickLogin()\" style=\"margin: 2rem 1.25rem 0rem 1.25rem !important;\"\n    novalidate>\n\n    <ion-img class=\"image-logo\" src=\"assets/Jawata-logo.png\"></ion-img>\n\n    <ion-toolbar style=\"height: 3.58rem;\">\n      <ion-title id=\"t1\">\n        <b style=\"color: #000 !important;\"> {{'Select Language' |translate}}</b>\n      </ion-title>\n    </ion-toolbar>\n    <div>\n      <ion-select\n        style=\"margin: 0rem !important;width: 100% !important;background: transparent !important;border-color: #c5c5c5 !important; font-size: 0.875rem;border: 0.08rem solid;border-radius:0.41rem;padding: 0.80rem 1.66rem;\"\n        [(ngModel)]=\"selectedLanguage\" (ionChange)=\"languageChanged($event.target.value)\"\n        [ngModelOptions]=\"{standalone: true}\">\n        <ion-select-option value=\"en\">English</ion-select-option>\n        <ion-select-option value=\"fr\">French</ion-select-option>\n        <ion-select-option value=\"de\">German</ion-select-option>\n        <ion-select-option value=\"es\">Spanish</ion-select-option>\n        <ion-select-option value=\"hi\">Hindi</ion-select-option>\n      </ion-select>\n    </div>\n    <ion-toolbar style=\"height: 3.58rem;\">\n      <ion-title id=\"t1\" style=\"color: black;\">\n        <b style=\"color: #000 !important;\"> {{ 'Email/Citizen ID' | translate }}</b>\n      </ion-title>\n    </ion-toolbar>\n    <div>\n      <ion-input type=\"text\" maxlength=\"50\" class=\"ion-padding-horizontal\"\n        placeholder=\" {{ 'Enter email/Citizen ID' | translate }}\" name=\"text\" clas=\"form-control\"\n        formControlName=\"userID\" [(ngModel)]=\"userIdVar\" style=\"background-color: #DEE2E6;\">\n      </ion-input>\n    </div>\n    <ion-label *ngIf=\"isSubmitted && errorControl.userID.errors?.required\" class=\"text-danger\" id=\"valid1\"\n      style=\"margin-left: 0rem; font-size: 0.800rem;\">\n      {{'Enter email/Citizen ID'|translate}}\n    </ion-label>\n    <ion-label *ngIf=\"isSubmitted && errorControl.userID.errors?.pattern\" class=\"text-danger\" id=\"valid1\"\n      style=\"margin-left: 0rem; font-size: 0.800rem;\">\n      {{'Enter valid email/Citizen ID'|translate}}\n    </ion-label>\n\n    <ion-toolbar style=\"height: 3.58rem;\">\n      <ion-title id=\"t1\" style=\"color: black;\">\n        <b style=\"color: #000 !important;\">{{'Password'|translate}}</b>\n      </ion-title>\n    </ion-toolbar>\n    <div>\n      <ion-input type=\"password\" class=\"ion-padding-horizontal\" placeholder=\"{{'Password'|translate}}\" name=\"password\"\n        clas=\"form-control\" [(ngModel)]=\"passwordVar\" formControlName=\"password\" maxlength=\"50\"\n        style=\"background-color: #DEE2E6;\">\n      </ion-input>\n    </div>\n    <ion-label *ngIf=\"isSubmitted && errorControl.password.errors?.required\" class=\"text-danger\" id=\"valid1\"\n      style=\"margin-left:0rem;   font-size: 0.800rem;\">{{'Password is required'|translate}} </ion-label>\n\n    <div class=\"mt-4\" style=\"margin-top: 0.5rem !important;\">\n      <ion-checkbox style=\"vertical-align: middle;height: 1rem;\" (ionChange)=\"onClickRememberMe($event.target.checked)\"\n        [checked]=\"checked\" id=\"chk\" color=\"dark\" style=\"color: black !important;\"></ion-checkbox>\n      <b style=\"font-size: 0.800rem; color: #000 !important; \"> {{'Remember Me'|translate}} &nbsp;\n\n        <a style=\"float: right; font-size: 0.800rem;padding-top: 0.33rem; font-weight: bold; color: #000 !important;\"\n          (click)=\"onClickForgotPasword()\">\n          {{'Forgot Password ?'|translate}} </a></b>\n    </div>\n\n    <div style=\"width: 100%;\">\n      <div class=\"col-md-12 mt-4\" style=\"padding: 0;\">\n        <div class=\"m-form__group form-group text-center\">\n          <button class=\"btn btn-dark btn-lg\"\n            style=\"background: #343a40 !important;color: #fff !important;\">{{'Submit'|translate}}</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</ion-content>\n\n<ion-content *ngIf=\"forgotPassForm\">\n\n  <form [formGroup]=\"forgotPassword\" (ngSubmit)=\"SubmitForgotPassDetails()\" style=\"margin:0;\" novalidate>\n\n    <ion-header>\n      <ion-toolbar color=\"dark\" color=\"primary\">\n        <ion-buttons slot=\"start\"\n          style=\"width: 100%;text-align: center;    padding: 1.16rem 0.83rem;font-size: 1rem; color: #fff !important;\">\n          {{'Forgot Password ?' | translate}}\n        </ion-buttons>\n        <ion-list slot=\"end\" style=\"background-color: transparent;    margin-right:0.41rem !important;\">\n          <b style=\"color: #fff !important;\">\n            <ion-icon slot=\"end\" (click)=\"cancelForgotPassword()\"\n              style=\"vertical-align:middle;font-size:1.7rem !important; color: #fff !important;\" name=\"close\">\n            </ion-icon>\n          </b>\n        </ion-list>\n      </ion-toolbar>\n    </ion-header>\n\n    <div class=\"form-input\">\n      <ion-item\n        style=\"font-size: 0.875rem;    margin-top: 0.83rem;--highlight-background: #343a40;  --highlight-height: 1px;\">\n        <ion-label><b style=\"color: #000 !important;\">{{ 'Email' | translate }} </b> </ion-label>\n        <ion-input type=\"text\" class=\"ion-padding-horizontal forgot-input\" placeholder=\"{{ 'Email' | translate }}\"\n          name=\"text\" clas=\"form-control\" formControlName=\"email\" [(ngModel)]=\"emailID\" maxlength=\"50\"\n          style=\"font-size: 0.875rem;border: 0rem;padding-right: 0rem !important;text-align: right; color:#000 !important;background-color: #f1f1f1 !important;\">\n        </ion-input>\n      </ion-item>\n    </div>\n\n    <div style=\"font-size: 0.875rem;margin-top: 0.3rem;padding-left: 1.25rem;\" class=\"invalid-text\">\n      <ion-label *ngIf=\"isSubmitted && errorControl2.email.errors?.required\" class=\"text-danger\" id=\"valid1\"\n        style=\"margin-left:-0.3rem; font-size: 0.800rem;\">\n        {{'Enter'|translate}}\n      </ion-label>\n\n      <ion-label *ngIf=\"isSubmitted && errorControl2.email.errors?.pattern\" class=\"text-danger\" id=\"valid1\"\n        style=\"margin-left:-0.3rem; font-size: 0.800rem;\">\n        {{'Enter'|translate}}\n      </ion-label>\n    </div>\n\n    <div style=\"font-size: 0.875rem;\">\n      <ion-item style=\"font-size:0.875rem;    margin-top: 0.83rem;\">\n        <ion-label style=\"font-size: 0.875rem;\"><b style=\"color: #000 !important;\">{{ 'Date of Birth' | translate }}\n          </b> </ion-label>\n        <ion-datetime class=\"forgot-input\" style=\"font-size: 0.875rem;padding-right: 1.25rem; color: #000 !important;\"\n          value={{todaysDate}} (ionChange)=\"onChangeDate($event.target.value)\">\n        </ion-datetime>\n      </ion-item>\n    </div>\n\n    <button\n      style=\"margin: 5.83rem 1.25rem 0rem 1.25rem; width: calc(100% - 2.5rem);background: #343a40 !important;color: #fff !important;\"\n      class=\"btn btn-dark btn-lg\">{{'Submit'|translate}}\n    </button>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entitymodal/entitymodal.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/entitymodal/entitymodal.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEntitymodalEntitymodalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-item *ngIf=\"hideActorDropdown\">\n  <ion-label style=\"font-size: 1rem !important;\">{{'Select Actor' | translate }}</ion-label>\n  <ion-select (ionCancel)=\"onCancel()\" okText=\"{{'OK'|translate}}\" cancelText=\"{{'CANCEL'|translate}}\"\n    [(ngModel)]=\"defaultActor\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"changeActor($event.target.value)\"\n    style=\"font-size: 1rem !important;\">\n    <ion-select-option *ngFor=\"let item of actorList\" [value]=\"item.name\">{{item.name}} </ion-select-option>\n  </ion-select>\n</ion-item>\n\n<ion-item>\n  <ion-label style=\"font-size: 1rem !important;\">{{'Select Entity' | translate }}</ion-label>\n  <ion-select (ionCancel)=\"onCancel()\" okText=\"{{'OK'|translate}}\" cancelText=\"{{'CANCEL'|translate}}\"\n    [(ngModel)]=\"defaultEntity\" [placeholder]=\"defaultEntity\" (ionChange)=\"changeEntity($event.target.value)\"\n    [ngModelOptions]=\"{standalone: true}\" style=\"font-size: 1rem !important;\">\n    <ion-select-option *ngFor=\"let item of entityArr\"  [value]=\"item.name_town\" >{{item.name_town}} </ion-select-option>\n  </ion-select>\n</ion-item>\n\n\n\n<!-- <ion-item>\n  <ion-label style=\"font-size: 1rem !important;\">{{'Select Class' | translate }}</ion-label>\n  <ion-select (ionCancel)=\"onCancel()\" okText=\"{{'OK'|translate}}\" cancelText=\"{{'CANCEL'|translate}}\"\n    [(ngModel)]=\"defaultClass\" [placeholder]=\"defaultClass\" (ionChange)=\"changeClass($event.target.value)\"\n    [ngModelOptions]=\"{standalone: true}\" style=\"font-size: 1rem !important;\">\n    <ion-select-option *ngFor=\"let item of classListArr\" [value]=\"item.ref_grade\">{{item.ref_grade}} </ion-select-option>\n  </ion-select>\n</ion-item> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button> <b style=\"font-size:1rem;color: #fff;\" class=\"heading-white\">{{heading}}</b>\n    </ion-buttons>\n\n    <ion-list slot=\"end\">\n      <b style=\"color: #fff !important;\">\n        <ion-icon slot=\"end\" (click)=\"showPopUp($event)\" style=\"vertical-align:middle;font-size:2.5rem; color: #fff !important;\" name=\"more\">\n        </ion-icon>\n      </b>\n    </ion-list>\n  \n  </ion-toolbar>\n</ion-header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-item>\n  <ion-label style=\"font-size: 1rem !important;\">{{'Select Entity'| translate}}</ion-label>\n  <ion-select (ionCancel)=\"onCancel()\" okText=\"{{'OK'|translate}}\" cancelText=\"{{'CANCEL'|translate}}\"\n    class=\"text-input\" style=\"font-size: 1rem !important;\" [(ngModel)]=\"defaultEntity\" [placeholder]=\"defaultEntity\"\n    (ionChange)=\"changeEntity($event.target.value)\" [ngModelOptions]=\"{standalone: true}\">\n    <ion-select-option *ngFor=\"let item of entityArr\" [value]=\"item.name_town\">{{item.name_town}}</ion-select-option>\n  </ion-select>\n</ion-item>\n<!-- \n<ion-item>\n  <ion-label style=\"font-size: 1rem !important;\">{{'Select Class' | translate }}</ion-label>\n  <ion-select (ionCancel)=\"onCancel()\" okText=\"{{'OK'|translate}}\" cancelText=\"{{'CANCEL'|translate}}\"\n    [(ngModel)]=\"defaultClass\" [placeholder]=\"defaultClass\" (ionChange)=\"changeClass($event.target.value)\"\n    [ngModelOptions]=\"{standalone: true}\" style=\"font-size: 1rem !important;\">\n    <ion-select-option *ngFor=\"let item of classListArr\" [value]=\"item.ref_grade\">{{item.ref_grade}} </ion-select-option>\n  </ion-select>\n</ion-item> -->\n\n<!-- <ion-item>\n  <ion-label style=\"font-size: 1rem !important;\">{{'select subject'| translate}}</ion-label>\n  <ion-select (ionCancel)=\"onCancel()\" okText=\"{{'OK'|translate}}\" cancelText=\"{{'CANCEL'|translate}}\"\n    class=\"text-input\" style=\"font-size: 1rem !important;\" [(ngModel)]=\"defaultSubject\" [placeholder]=\"defaultSubject\"\n    (ionChange)=\"changeSubject($event.target.value)\" [ngModelOptions]=\"{standalone: true}\">\n    <ion-select-option *ngFor=\"let item of subjectListArr\" [value]=\"item.subject_name\">{{item.subject_name}}</ion-select-option>\n  </ion-select>\n</ion-item> -->\n\n\n<ion-item>\n  <ion-label style=\"font-size: 1rem !important;\">{{'Continuous Scanning'|translate}}</ion-label>\n  <ion-select (ionCancel)=\"onCancel()\" okText=\"{{'SAVE' |translate}}\" cancelText=\"{{'CANCEL'|translate}}\"\n    [(ngModel)]=\"defaultAction\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"changeScanAction($event.target.value)\"\n    style=\"font-size: 1rem !important;\">\n    <ion-select-option *ngFor=\"let item of actionList\" [value]=\"item.name\">{{item.name}} </ion-select-option>\n  </ion-select>\n</ion-item>\n\n\n<ion-item>\n  <ion-label style=\"font-size: 1rem !important;\">{{'Select Language'|translate}}</ion-label>\n  <ion-select (ionCancel)=\"onCancel()\" okText=\"{{'OK'|translate}}\" cancelText=\"{{'CANCEL'|translate}}\"\n    [(ngModel)]=\"selectedLanguage\" [placeholder]=\"selectedLanguage\" (ionChange)=\"languageChanged($event.target.value)\"\n    [ngModelOptions]=\"{standalone: true}\" style=\"font-size: 1rem !important;\">\n    <ion-select-option value=\"en\">English</ion-select-option>\n    <ion-select-option value=\"fr\">French</ion-select-option>\n    <ion-select-option value=\"de\">German</ion-select-option>\n    <ion-select-option value=\"hi\">Hindi</ion-select-option>\n    <ion-select-option value=\"es\">Spanish</ion-select-option>\n  </ion-select>\n</ion-item>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/audit-trail/audit-trail.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/audit-trail/audit-trail.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidemenuAuditTrailAuditTrailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [heading]=\"heading\"></app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-row>\n    <ion-col style=\"padding: 0.83rem;\">\n      <div class=\"card bg-default\"\n        style=\"background-color: #e2e2e2 !important;box-shadow: 0rem 0rem 0.33rem #0000002e;border: 0.08rem solid #d4d4d4 !important;\">\n        <div class=\"card-body text-center\">\n          <ion-text color=\"dark\" style=\"font-size: 1rem;font-weight: 600; color: #000 !important;\">\n            {{'Activity Log' | translate}}</ion-text>\n          <ion-text color=\"dark\" style=\"font-size: 0.875rem;width: 100%;float: left; color: #000 !important;\">\n            {{'You can see Your activity log' |translate}}</ion-text>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-grid>\n    <ion-row style=\"padding: 0rem 0.41rem;margin-top: -0.20rem;\">\n      <ion-col color=\"light\"\n        style=\"background: #e2e2e2 !important;border-top-left-radius: 0.66rem;border-top-right-radius: 0.66rem;padding: 0.83rem;font-size:0.875rem;\">\n        <b style=\"color: #000 !important;\"> {{'Today' |translate}}</b>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let item of todaysRecord\"\n      style=\"background-color:#e2e2e2 !important;margin: 0rem 0.41rem;border-top: 0.08rem solid #ccc;\">\n      <ion-col style=\"font-size: 0.71rem;padding: 0.66rem 0.83rem;\"><b style=\"color:#000 !important;\">\n          {{item.moduleName |translate}} </b> &nbsp;\n        <span style=\"float: right; font-size: 0.875rem;color: #000 !important;\" class=\"audit-time\">{{item.datetime |\n          slice:10:19 }}</span>\n        <span class=\"audit-down\"\n          style=\"color: black !important;font-size: 0.800rem;float: right;margin-right: 0;width: 100%;text-align: right;\">\n\n          <span [innerHTML]=\"item.des | htmlToPlaintext\"></span>\n\n        </span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"padding: 0rem 0.41rem; margin-top: 0.83rem;\">\n      <ion-col\n        style=\"background: #e2e2e2 !important;border-top-left-radius: 0.66rem;border-top-right-radius: 0.66rem;padding: 0.83rem;font-size: 0.875rem;\">\n        <b style=\"color: #000 !important;\"> {{'Yesterday' |translate}}</b>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let item of yesterdayRecord\"\n      style=\"background-color:#e2e2e2 !important;margin: 0rem 0.41rem;border-top: 0.08rem solid #ccc;\">\n\n      <ion-col style=\"font-size: 0.71rem;padding: 0.66rem 0.83rem;\"><b style=\"color:#000 !important;\">\n          {{item.moduleName |translate}} </b> &nbsp;\n\n        <span style=\"float: right; font-size: 0.875rem;color: #000 !important;\" class=\"audit-time\">{{item.datetime |\n          slice:10:19 }}</span>\n        <span class=\"audit-down\"\n          style=\"color:black !important;font-size: 0.800rem;float: right;margin-right: 0;width: 100%;text-align: right;\">\n\n          <!-- <b> {{item.username}} </b> {{item.des|translate}} <b>{{item.fileName}}</b> {{item.des2 |translate}} <b>{{item.sessionid}}</b>\n          {{item.subjectDes|translate}}   <b>{{item.subjectName}}</b> {{item.des3 |translate}} <b> {{item.className}} </b> {{item.des4 |translate}}\n        <b> {{item.entityName}} </b> {{item.des5|translate}} -->\n          <!-- {{item.des}} -->\n\n          <span [innerHTML]=\"item.des | htmlToPlaintext\"></span>\n\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngFor=\"let date of uniqueDateArr\">\n    <ion-row\n      style=\"background-color:#e2e2e2 !important; margin:0.25rem 0.41rem 0rem 0.41rem;border-top-left-radius: 0.66rem; border-top-right-radius: 0.66rem;\">\n      <ion-col\n        style=\"font-size: 0.875rem;color: #000 !important;border-top-left-radius: 0.66rem;border-top-right-radius: 0.66rem;padding: 0.83rem;\">\n        <b style=\"color: #000 !important;\"> {{date | date:'LLLL' | translate}} - {{date | date:'yyyy'}} </b>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let item of monthWiseRecord\" style=\"background-color:#e2e2e2 !important;margin: 0rem 0.41rem;\">\n      <ion-col *ngIf=\"date == (item.date | date:'yyyy-MM')\"\n        style=\"font-size: 0.71rem;padding: 0.66rem 0.83rem;border-top: 0.08rem solid #ccc; color: #000 !important;\">\n        {{item.moduleName | translate}} &nbsp;\n        <span style=\"float: right; font-size: 0.875rem;color: #000 !important;\" class=\"audit-time\">{{item.datetime |\n          slice:10:19 }}</span>\n        <span class=\"audit-down\"\n          style=\"color: black !important;font-size: 0.800rem;float: right;margin-right: 0;width: 100%;text-align: right;\">\n\n          <span [innerHTML]=\"item.des | htmlToPlaintext\"></span>\n\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/dashboard/dashboard.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/dashboard/dashboard.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidemenuDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [heading]=\"heading\"></app-header>\n\n<!-- <ion-content> -->\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n  <!-- <ion-title>\n    {{'Storage'| translate}}\n  </ion-title>\n\n  <ion-row>\n    <ion-col style=\"margin: 0rem 1.25rem; padding:0rem;\">\n      <div class=\"progress\" style=\"margin-top:1.25rem;\">\n        <div class=\"progress-bar progress-bar-warning\" color=\"dark\" role=\"progressbar\" aria-valuenow=\"60\"\n          aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:60%\">\n          60%\n        </div>\n      </div>\n      <ion-text color=\"white\" style=\"margin-bottom: 0.83rem; width: 100%; float: left;\">450 MB Used</ion-text>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col style=\"margin: 0rem 1.25rem; padding:0rem;\">\n      <div class=\"progress\" color=\"dark\">\n        <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"2\" aria-valuemin=\"0\"\n          aria-valuemax=\"100\" style=\"width:10%\">\n          2%\n        </div>\n      </div>\n      <ion-text color=\"white\" style=\"margin-bottom: 0.83rem; width: 100%; float: left;\">10 MB Used</ion-text>\n    </ion-col>\n  </ion-row>\n  <ion-title>\n    {{'Flat Files' | translate}}\n  </ion-title>\n\n  <ion-row style=\"margin: 0rem 1.25rem; padding: 0rem;\">\n    <ion-col>\n      <div class=\"card bg-default\" style=\"background-color:#343a40\">\n        <div>\n          <div class=\"progress blue\">\n            <span class=\"progress-left\">\n              <span class=\"progress-bar\"></span>\n            </span>\n            <span class=\"progress-right\">\n              <span class=\"progress-bar\"></span>\n            </span>\n            <div class=\"progress-value\">95%</div>\n          </div>\n        </div>\n        <div class=\"card-body text-center\">\n          <ion-text color=\"dark\">{{'Total Size' | translate}}</ion-text>\n        </div>\n      </div>\n    </ion-col>\n    <ion-col>\n      <div class=\"card bg-default\" style=\"background-color:#343a40\">\n        <div>\n          <div class=\"progress blue\">\n            <span class=\"progress-left\">\n              <span class=\"progress-bar\"></span>\n            </span>\n            <span class=\"progress-right\">\n              <span class=\"progress-bar\"></span>\n            </span>\n            <div class=\"progress-value\">95%</div>\n          </div>\n        </div>\n        <div class=\"card-body text-center\">\n          <ion-text color=\"dark\">{{'Apps' | translate}}</ion-text>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin: 0rem 1.25rem; padding: 0rem;\">\n    <ion-col class=\"ion-wrap\">\n      <div class=\"card bg-default\">\n        <div class=\"card-body text-center\" style=\"background-color:#343a40\">\n          <ion-text color=\"dark\">{{'Last Connection'| translate}} &nbsp;&nbsp; {{'Day' | translate}}</ion-text>\n          <br>\n          <ion-text color=\"dark\">{{'Time'}}:20:30:12</ion-text>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n  <br> -->\n\n  <!-- <ion-text>\n    <b style=\"font-size: 0.875rem;padding: 0rem 0.41rem;margin-left: 0.28rem;\">\n      {{'QR/ Barcode Scanner' | translate}} </b>\n  </ion-text> -->\n\n  <!-- <ion-grid>\n    <ion-row> -->\n      <div style=\"width: 100%;margin: 0 0.41rem 0.41rem 0.41rem;\" >\n        <div class=\"bg-default\" style=\"width: 100%;\">\n          <div class=\"text-center\">\n            <ngx-qrcode [elementType]=\"elementType\" [value]=\"value\" cssClass=\"aclass\" errorCorrectionLevel=\"L\">\n            </ngx-qrcode>\n          </div>\n        </div>\n      </div>\n    <!-- </ion-row>\n  </ion-grid> -->\n\n  <!-- <ion-grid>\n    <ion-row>\n      <div style=\"width: 100%;margin: 0 0.41rem 0.41rem 0.41rem;\" (click)=\"encodedText()\">\n        <div class=\"card bg-default\" style=\"background-color: #343a40 !important;width: 100%;\">\n          <div class=\"card-body text-center\"\n            style=\"padding:1rem; border: 0rem;border-radius: 0.66rem;box-shadow: 0rem 0rem 0.41rem #00000024;\">\n\n            <ion-text color=\"light\" style=\"float: center;\"><b style=\"color: #fff !important;\">\n                {{'Display QR Code' | translate}} </b>\n            </ion-text>\n          </div>\n        </div>\n      </div>\n    </ion-row>\n  </ion-grid> -->\n\n  <button class=\"btn btn-dark\" (click)=\"scanQRcode()\"\n  style=\"font-size: 0.875rem; width: 49%; margin-right: 2%; background: #000 !important; color: #fff !important;\">{{'Send' |translate}}</button>\n\n  <ion-text>\n    <b style=\"font-size: 0.875rem;padding: 0rem 0.41rem;margin-left: 0.28rem;\">\n      {{'Actor What files are downloaded report' | translate}} </b>\n  </ion-text>\n\n  <ion-grid *ngFor=\"let item of entityWithSign; let i=index\">\n\n  </ion-grid>\n  \n  \n  <ion-grid *ngFor=\"let ITEM of entityWithSign; let i=index\">\n    <ion-row>\n      <div style=\"width: 100%;margin: 0 0.41rem 0.41rem 0.41rem;\">\n        <div class=\"card bg-default\" (click)=\"entityWiseData(ITEM.entityName, i)\"\n          style=\"background-color: #343a40 !important;width: 100%;\">\n          <div class=\"card-body text-center\"\n            style=\"padding:1rem; border: 0rem;border-radius: 0.66rem;box-shadow: 0rem 0rem 0.41rem #00000024;\">\n\n            <ion-text color=\"light\" style=\"float: left;\"><b style=\"color: #fff !important;\"> {{ITEM.entityName}}</b>\n            </ion-text>\n            <ion-text color=\"light\" style=\"float: right;\"> <b style=\"color: #fff !important;\"> {{ITEM.sign}} </b>\n            </ion-text>\n          </div>\n        </div>\n      </div>\n    </ion-row>\n\n    <ion-row *ngFor=\"let item of perEntityData\">\n\n      <div class=\"mobile-table\" *ngIf=\"item.entity_name == ITEM.entityName\"\n        style=\"padding:1rem; border: 0rem;border-radius: 0.66rem;box-shadow: 0rem 0rem 0.41rem #00000024;\"\n        style=\"margin: 0 0.41rem 0 0.41rem;\">\n        <div class=\"mobile-table-inner\">\n\n          <div class=\"mobile-border\">\n            <h5>\n              <div class=\"mobile-file\" style=\"color: #000 !important;\"><b\n                  style=\"color: #000 !important;\">{{'Class:' | translate}}</b> <span style=\"color: #000 !important;\">\n                  {{item.class_ref}} {{item.class_grade}} </span></div>\n              <div class=\"mobile-file\" style=\"color: #000 !important;\"><b\n                  style=\"color: #000 !important;\">{{'Subject:' | translate }}</b> <span style=\"color: #000 !important;\">\n                  {{item.subject_name}} </span></div>\n            </h5>\n            <div class=\"mobile-file\" style=\"color: #000 !important;\"><b style=\"color: #000 !important;\">\n                {{ 'File Name:' | translate }}</b> <span style=\"color: #000 !important;\"> {{item.file_name}} </span>\n            </div>\n            <div class=\"mobile-file\" style=\"color: #000 !important;\"><b style=\"color: #000 !important;\">\n                {{'Downloads:' | translate }}</b><span style=\"color: #000 !important;\">{{item.is_download}} </span>\n            </div>\n            <div class=\"mobile-file mobile-file-priority\" style=\"color: #000 !important;\"><b\n                style=\"color: #000 !important;\">\n                {{'File priority:' | translate }}</b><span style=\"color: #000 !important;\">{{item.file_priority}}\n              </span>\n            </div>\n            <div class=\"mobile-file mobile-file-priority mt-1\" style=\"color: #000 !important;\">\n              <b style=\"color: #000 !important;\"> {{'File Size:' | translate}}</b><span\n                style=\"color: #000 !important;\">{{item.file_size}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/feedback/feedback.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/feedback/feedback.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidemenuFeedbackFeedbackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [heading]=\"heading\"></app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <form [formGroup]=\"feedbackForm\" (ngSubmit)=\"submitFeedback()\" novalidate>\n\n    <ion-grid>\n      <ion-row>\n        <p style=\"margin: 0rem;padding: 0rem 0.41rem;font-size: 0.875rem;margin-top: 0.41rem;color: #000 !important;\">\n          <b style=\"color: #000 !important;\">{{'Contact customer support' |translate}}</b>\n        </p>\n      </ion-row>\n      <ion-row>\n        <p\n          style=\"text-align: left; width: 100%;float: left;font-size: 0.875rem;padding: 0rem 0.41rem; margin-bottom: 0.41rem;color: #000 !important;font-weight: normal;\">\n          {{'Send us Contact customer support. Our support team will get in touch with you soon.' | translate}}</p>\n        <ion-textarea\n          style=\"padding: 0;border:0.08rem solid lavender; width: 100%;float: left;font-size: 0.875rem;color: #000 !important;font-weight: normal;\"\n          type=\"text\" rows=\"6\" [(ngModel)]=\"feedbackText\" formControlName=\"feedbackText\" maxlength=\"1000\"\n          name=\"message\">\n        </ion-textarea>\n      </ion-row>\n\n      <ion-label *ngIf=\"isSubmitted && errorControl.feedbackText.errors?.required\" class=\"text-danger\"\n        style=\"margin-left:0.4rem; font-size: 0.800rem; font-weight: normal;\">\n        {{'Contact customer support is required'|translate}}\n      </ion-label>\n\n      <ion-label *ngIf=\"isSubmitted && errorControl.feedbackText.errors?.pattern\" class=\"text-danger\"\n        style=\"margin-left:0.4rem; font-size: 0.800rem;font-weight: normal;\">\n        {{'Enter valid contact customer support'|translate}}\n      </ion-label>\n\n      <ion-row>\n        <ion-col size=\"10\" style=\"padding:0rem;color: #000 !important;font-weight: normal;\"></ion-col>\n        <ion-col class=\"char-input\" size=\"2\" style=\"padding:0rem;color: #000 !important;\">\n          <ion-input aria-disabled=\"true\" maxlength=\"0\" size=\"0\" name=\"counter\" text=\"Characters\"\n            style=\"color: #000 !important;font-weight: normal;\">\n            {{ 1000 - feedbackText.length }}\n          </ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <button\n          style=\"margin: 5.83rem 1.25rem 0rem 1.25rem; width: calc(100% - 2.5rem);background: #343a40 !important;color: #fff !important;font-weight: normal;\"\n          class=\"btn btn-dark btn-lg\">{{'Send'|translate}}\n        </button>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-label style=\"font-size: 0.875rem;color: #000 !important;margin-left:1rem\">\n            <b style=\"color: #000 !important;\">{{'Contact customer support history' | translate}} -</b>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngFor=\"let item of feedbackArr\">\n        <ion-col>\n          <div class=\"card bg-default\">\n            <div class=\"card-body text-left\"\n              style=\"background-color: white !important;padding: 0.99rem;box-shadow: 0rem 0rem 0.41rem #82828226;border-radius: 0.66rem;color: #000 !important;\">\n              <ion-text color=\"dark\" style=\"font-size: 0.875rem;color: #000 !important;font-weight: normal;\">\n                \n                <!-- <b style=\"color: #000 !important;\">{{ item.feedbackDate | date:'dd/MM/yyyy HH:mm:ss':'GMT+0530'}}</b> &nbsp; -->\n                <b style=\"color: #000 !important;font-weight: normal;\">{{ item.feedbackDate }}</b> &nbsp;\n                <b style=\"color: #000 !important; font-weight: normal;\" [innerHTML]=\"item.feedbackText | htmlToPlaintext\"></b>\n              </ion-text>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/logout/logout.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/logout/logout.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidemenuLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [heading]=\"heading\"></app-header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/profile/profile.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/profile/profile.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidemenuProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [heading]=\"heading\"></app-header>\n\n<ion-content *ngIf=\"profileList\">\n  <ion-title class=\"text-center mt-3\" style=\"font-size: 1.33rem; color: #000 !important;\">\n    <b style=\"font-size: 0.875rem;color: #000 !important;\"> {{'My profile' |translate}} </b>\n    <a style=\"vertical-align:middle;float: right;color: #000 !important;\">\n      <ion-icon (click)=\"editProfile()\" name=\"create\"\n        style=\"font-size: 1.1rem; margin-top: 0.5rem;color: #000 !important;\"></ion-icon>\n    </a>\n  </ion-title>\n\n  <form>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n        refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n    <ion-item lines=\"none\" class=\"colFontSize\" *ngFor=\"let item of profileDetailArr\">\n      <ion-label style=\" font-size: 0.875rem;margin: 0;\"><b>{{ item.title | translate}}</b></ion-label>\n      <ion-text style=\" font-size: 0.875rem;width: calc(100% - 8.33rem);\"> {{item.detail=='null'?'':item.detail | translate}}\n      </ion-text>\n    </ion-item>\n  </form>\n</ion-content>\n\n<ion-content *ngIf=\"editProfileForm\">\n\n  <form [formGroup]=\"profileForm\" (ngSubmit)=\"onClickSubmit()\" style=\"margin: 0rem 0.83rem 0.83rem 0.83rem;\" novalidate>\n\n    <ion-grid>\n\n      <ion-list style=\"padding-bottom: 0 !important;color: #000 !important;\">\n        <ion-label style=\"font-size: 0.875rem;color: #000 !important;\"><b\n            style=\"color: #000 !important;\">{{'Title' | translate}}<sup>*</sup></b></ion-label>\n        <ion-select\n          style=\"margin: 0rem !important;width: 100% !important;background: transparent !important;border-color: #c5c5c5 !important;color: #000 !important; font-size:0.875rem;border: 0.08rem solid;border-radius: 0.41rem;padding: 0.60rem 1.66rem;\"\n          [(ngModel)]=\"profile_title\" [ngModelOptions]=\"{standalone: true}\">\n          <ion-select-option value=\"Mr\">{{'Mr' | translate}}</ion-select-option>\n          <ion-select-option value=\"Miss\">{{'Ms' | translate}} </ion-select-option>\n        </ion-select>\n      </ion-list>\n\n      <ion-list style=\"padding-bottom: 0 !important;color: #000 !important;\">\n        <ion-label style=\"font-size: 0.875rem;color: #000 !important;\"><b\n            style=\"color: #000 !important;\">{{'First Name'|translate}}<sup>*</sup></b></ion-label>\n        <ion-input\n          style=\"height: 2.6rem;margin-bottom:0rem;padding-left: 0.83rem !important;font-size: 0.875rem;color: #000 !important;\"\n          type=\"text\" placeholder=\"{{'First Name'|translate}}\" formControlName=\"profileFirstName\" maxlength=\"50\"\n          [(ngModel)]=\"profile_fName\">\n        </ion-input>\n      </ion-list>\n      <ion-label class=\"text-danger\" *ngIf=\"isSubmitted && errorControl.profileFirstName.errors?.required\"\n        style=\"font-size:0.800rem;\">\n        {{'Enter first name' | translate}}\n      </ion-label>\n\n      <ion-list style=\"padding-bottom: 0 !important;color: #000 !important;\">\n        <ion-label style=\"font-size: 0.875rem;color: #000 !important;\"><b\n            style=\"color: #000 !important;\">{{'Last Name' | translate}}<sup>*</sup></b></ion-label>\n        <ion-input\n          style=\"height: 2.6rem;margin-bottom:0rem;padding-left: 0.83rem !important;font-size:0.875rem;color: #000 !important;\"\n          type=\"text\" placeholder=\"{{'Last Name' | translate}}\" formControlName=\"profileLastName\" maxlength=\"50\"\n          [(ngModel)]=\"profile_lname\">\n        </ion-input>\n      </ion-list>\n      <ion-label *ngIf=\"isSubmitted && errorControl.profileLastName.errors?.required\" class=\"text-danger\"\n        style=\"font-size:0.800rem;\">\n        {{'Enter last name' | translate}}\n      </ion-label>\n\n      <ion-list style=\"padding-bottom: 0 !important;color: #000 !important;\">\n        <ion-label style=\"font-size: 0.875rem;color: #000 !important;\"><b\n            style=\"color: #000 !important;\">{{'Email' | translate}}<sup>*</sup></b></ion-label>\n        <ion-input\n          style=\"height: 2.6rem;margin-bottom: 0rem;padding-left: 0.83rem !important;font-size: 0.875rem;color: #000 !important;\"\n          type=\"text\" placeholder=\"{{'Email' | translate}}\" formControlName=\"profileEmail\" maxlength=\"50\"\n          [(ngModel)]=\"profile_email\"></ion-input>\n      </ion-list>\n      <ion-label *ngIf=\"isSubmitted && errorControl.profileEmail.errors?.required\" class=\"text-danger\"\n        style=\"font-size:0.800rem;\">\n        {{'Enter email' | translate}}\n      </ion-label>\n      <ion-label *ngIf=\"isSubmitted && errorControl.profileEmail.errors?.pattern\" class=\"text-danger\"\n        style=\"font-size:0.800rem;\">\n        {{'Enter valid email' | translate}}\n      </ion-label>\n\n      <ion-list style=\"padding-bottom: 0 !important;color: #000 !important;\">\n        <ion-label style=\"font-size:0.875rem;color: #000 !important;\"><b\n            style=\"color: #000 !important;\">{{'DOB' | translate}}<sup>*</sup></b></ion-label>\n        <ion-datetime style=\"font-size: 0.875rem;padding-right: 1.25rem;color: #000 !important;\"\n          formControlName=\"profileDOB\" [(ngModel)]=\"profile_dob\">\n        </ion-datetime>\n      </ion-list>\n      <ion-label *ngIf=\"isSubmitted && errorControl.profileDOB.errors?.required\" class=\"text-danger\"\n        style=\"font-size:0.800rem;\">\n        {{'DOB is required' | translate}}\n      </ion-label>\n\n      <ion-list style=\"padding-bottom: 0 !important;color: #000 !important;\">\n        <ion-label style=\"font-size:0.875rem;color: #000 !important;\"><b\n            style=\"color: #000 !important;\">{{'User Name' | translate}}<sup>*</sup></b></ion-label>\n        <ion-input\n          style=\"height: 2.6rem;margin-bottom: 0;padding-left: 0.83rem !important;font-size:0.875rem;color: #000 !important;\"\n          type=\"text\" placeholder=\"{{'User Name' | translate}}\" maxlength=\"50\" [(ngModel)]=\"profile_userName\"\n          formControlName=\"profileUsername\" required>\n        </ion-input>\n      </ion-list>\n      <ion-label *ngIf=\"isSubmitted && errorControl.profileUsername.errors?.required\" class=\"text-danger\"\n        style=\"font-size:0.800rem;\">\n        {{'User name is required' | translate}}\n      </ion-label>\n\n      <ion-list style=\"padding-bottom: 0 !important;color: #000 !important;\">\n        <ion-label style=\"font-size: 0.875rem;color: #000 !important;\"><b\n            style=\"color: #000 !important;\">{{'Address Line 1' | translate}}</b></ion-label>\n        <ion-input\n          style=\"height: 2.6rem;margin-bottom: 0rem;padding-left: 0.83rem !important;font-size:0.875rem;color: #000 !important;\"\n          type=\"text\" placeholder=\"{{'Address line 1' | translate}}\" [ngModelOptions]=\"{standalone: true}\"\n          maxlength=\"50\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"profile_address_line1\">\n        </ion-input>\n      </ion-list>\n\n      <ion-list style=\"padding-bottom: 0 !important;color: #000 !important;\">\n        <ion-label style=\"font-size: 0.875rem;color: #000 !important;\"><b\n            style=\"color: #000 !important;\">{{'Address Line 2' | translate}}</b></ion-label>\n        <ion-input\n          style=\"height: 2.6rem;margin-bottom: 0rem;padding-left: 0.83rem !important;font-size: 0.875rem;color: #000 !important;\"\n          type=\"text\" placeholder=\"{{'Address line 2' | translate}}\" [ngModelOptions]=\"{standalone: true}\"\n          maxlength=\"50\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"profile_address_line2\">\n        </ion-input>\n      </ion-list>\n\n      <ion-list style=\"padding-bottom: 0 !important;color: #000 !important;\">\n        <ion-label style=\"font-size: 0.875rem;color: #000 !important;\"><b\n            style=\"color: #000 !important;\">{{'Town' | translate}}</b></ion-label>\n        <ion-input\n          style=\"height: 2.6rem;margin-bottom: 0rem;padding-left: 0.83rem !important;font-size: 0.875rem;color: #000 !important;\"\n          type=\"text\" placeholder=\"{{'Town' | translate}}\" [ngModelOptions]=\"{standalone: true}\" maxlength=\"50\"\n          [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"profile_town\"></ion-input>\n      </ion-list>\n\n      <ion-list style=\"padding-bottom: 0 !important;color: #000 !important;\">\n        <ion-label style=\"font-size:0.875rem;color: #000 !important;\"><b\n            style=\"color: #000 !important;\">{{'Post Code' | translate}}</b></ion-label>\n            <ion-input\n            style=\"height: 2.6rem;margin-bottom: 0rem;padding-left: 0.83rem !important;font-size: 0.875rem;color: #000 !important;\"\n            type=\"text\" placeholder=\"{{'Post code' | translate}}\" maxlength=\"20\"  [ngModelOptions]=\"{standalone: true}\"\n            [(ngModel)]=\"profile_postCode\">\n          </ion-input>\n  \n            <!-- <ion-input\n          style=\"height: 2.6rem;margin-bottom: 0rem;padding-left: 0.83rem !important;font-size: 0.875rem;color: #000 !important;\"\n          type=\"tel\" placeholder=\"{{'Post code' | translate}}\" maxlength=\"6\"\n          onkeypress=\"return event.charCode >= 48 && event.charCode <= 57\" [ngModelOptions]=\"{standalone: true}\"\n          [(ngModel)]=\"profile_postCode\">\n        </ion-input> -->\n      </ion-list>\n\n      <ion-list style=\"padding-bottom: 0 !important;color: #000 !important;\">\n        <ion-label style=\"font-size: 0.875rem;color: #000 !important;\"><b\n            style=\"color: #000 !important;\">{{'Select Language' | translate}}<sup>*</sup></b></ion-label>\n        <ion-select\n          style=\"margin: 0rem !important;width: 100% !important;background: transparent !important;border-color: #c5c5c5 !important; font-size:0.875rem;border: 0.08rem solid;border-radius: 0.41rem;padding: 0.60rem 1.66rem;color: #000 !important;\"\n          [(ngModel)]=\"selectedLanguage\" [ngModelOptions]=\"{standalone: true}\">\n          <ion-select-option value=\"en\">English</ion-select-option>\n          <ion-select-option value=\"fr\">French</ion-select-option>\n          <ion-select-option value=\"de\">German</ion-select-option>\n          <ion-select-option value=\"hi\">Hindi</ion-select-option>\n          <ion-select-option value=\"es\">Spanish</ion-select-option>  \n        </ion-select>\n      </ion-list>\n\n      <div class=\"row\">\n        <div class=\"col-md-12 mt-4\">\n          <div class=\"m-form__group form-group text-center\">\n            <button class=\"btn btn-dark\"\n              style=\"font-size: 0.875rem; width:49%; margin-right: 2%; background: #000 !important; color: #fff !important;\">{{'Save' |translate}}</button>\n            <button class=\"btn btn-dark\" (click)=\"onClickCancel()\"\n              style=\"font-size: 0.875rem; width:49%;background: #000 !important;color: #fff !important;opacity: 1;\">{{'Cancel' | translate}}</button>\n          </div>\n        </div>\n      </div>\n    </ion-grid>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/qr-code/qr-code.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/qr-code/qr-code.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidemenuQrCodeQrCodeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [heading]=\"heading\"></app-header>\n​\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n    <ion-text>\n      <b style=\"font-size: 0.875rem;padding: 0rem 0.41rem;margin-left: 0.28rem;\">\n        {{'Ionic QR/ Barcode Scanner' | translate}} </b>\n    </ion-text>\n  <ion-grid>\n    <ion-row>\n      <div style=\"width: 100%;margin: 0 0.41rem 0.41rem 0.41rem;\" (click)=\"encodedText()\">\n        <div class=\"card bg-default\" \n          style=\"background-color: #343a40 !important;width: 100%;\">\n          <div class=\"card-body text-center\"\n            style=\"padding:1rem; border: 0rem;border-radius: 0.66rem;box-shadow: 0rem 0rem 0.41rem #00000024;\">\n            <ion-text color=\"light\" style=\"float: center;\"><b style=\"color: #fff !important;\" > Display QR Code </b>\n            </ion-text>\n          </div>\n        </div>\n      </div>\n    </ion-row>\n  </ion-grid>\n  </ion-content>\n\n<!-- <ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n    <ion-button class=\"btn btn-dark\" (click)=\"encodedText()\"\n        style=\"background: #000 !important; color: #fff !important;\">\n        Tap To Create QR\n    </ion-button>\n</ion-content> -->\n\n<!-- <ion-toolbar>\n    <ion-title>\n      Ionic QR/ Barcode Scanner\n    </ion-title>\n  </ion-toolbar>\n  \n  <ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n    <h1>Click Button To Scan</h1>\n  \n    <ion-button color=\"primary\" (click)=\"scanCode()\">\n      Scan Code\n    </ion-button>\n  \n    <div *ngIf=\"scannedData\">\n      <p>\n        Scanned Code Text : <b>{{ scannedData[\"text\"] }}</b>\n      </p>\n      <p>\n        Scanned Code Format : <b>{{ scannedData[\"format\"] }}</b>\n      </p>\n    </div>\n  \n    <h1>Enter Value to Create QR code</h1>\n    <ion-input placeholder=\"Enter Input\" [(ngModel)]=\"encodeData\"></ion-input>\n  \n    <ion-button color=\"success\" (click)=\"encodedText()\">\n      Create QR\n    </ion-button>\n  </ion-content>\n   -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/resource-link/resource-link.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/resource-link/resource-link.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidemenuResourceLinkResourceLinkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [heading]=\"heading\"></app-header>\n<ion-searchbar (ngModelChange)=\"trimSearchValues($event)\" [(ngModel)]=\"filter\" placeholder=\"{{'Search'|translate}}\">\n</ion-searchbar>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-row>\n    <ion-col style=\"padding:0.83rem 0.83rem 0rem 0.83rem;\">\n      <div>\n        <ion-text color=\"dark\">\n          <p style=\"margin: 0rem; padding: 0rem; color: #000 !important;\">{{'Resources with Open Access' | translate}}</p>\n        </ion-text>\n      </div>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row *ngFor=\"let item of thirdPartyDetails | deepFilter:filter:keysToExclude\">\n    <ion-col style=\"padding: 0.41rem 0.83rem 0.83rem 0.83rem;\">\n      <div class=\"card bg-default\" style=\"border-radius: 0.66rem;\">\n        <div class=\"card-body text-left\"\n          style=\"padding: 0.5rem 1rem; border: 0rem;border-radius: 0.66rem;box-shadow: 0rem 0rem 0.41rem #00000024;\">\n\n          <ion-list>\n            <div style=\"width: 100%; float: left;\">\n              <ion-text style=\"font-size: 1rem; color: #000 !important;\" color=\"dark\">{{ item.tps_name }}</ion-text>&nbsp;\n            </div>\n\n            <ion-button size=\"small\" (click)=\"onClickOpenURL(item.tps_id ,item.tps_url)\"\n              style=\"vertical-align: middle; float: right; width: 100%; background: #000 !important; color: #fff !important;\" color=\"dark\">\n              {{'Access' |translate}}</ion-button>\n          </ion-list>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/sso/sso.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/sso/sso.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidemenuSsoSsoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header *ngIf=\"ssoHeader\" [heading]=\"heading\"></app-header>\n\n<ion-header *ngIf=\"ssoAddHeader\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"sso\" (click)=\"onClickBackButton()\" style=\"color: #fff !important;\">\n      </ion-back-button>\n      <b style=\"color: #fff !important;\">{{'Add Resources with ID access' | translate}}</b>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"ssoDetails\">\n  <ion-searchbar (ngModelChange)=\"trimSearchValues($event)\" [(ngModel)]=\"filter\" placeholder=\"{{'Search'|translate}}\">\n  </ion-searchbar>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list class=\"sso-title\" style=\"padding:0.83rem 0.83rem 0rem 0.83rem;\">\n    <ion-text slot=\"start\" style=\"float: left;color: #000 !important;\">\n      <b style=\"color: #000 !important;\"> {{'Resources with ID access' | translate}}</b>\n    </ion-text>\n    <a slot=\"end\" style=\"vertical-align:middle; float: right; color: #000 !important;\">\n      <ion-icon *ngIf=\"hideAddButton\" (click)=\"onClickAddSSO()\" name=\"add-circle\"\n        style=\"font-size: 1.3rem; color: #000 !important;\"></ion-icon>\n      &nbsp; <ion-icon name=\"trash\" (click)=\"showConfirmAlert()\" style=\"font-size: 1.3rem; color: #000 !important;\">\n      </ion-icon>\n    </a>\n  </ion-list>\n\n  <ion-row>\n    <ion-col style=\"padding: 0rem 0.83rem 0rem 0.83rem;\">\n      <div>\n        <ion-text style=\"font-size: 0.875rem; color: #000 !important;\" color=\"dark\">\n          {{'Resource with ID Name' | translate}} | {{'Activity' | translate}}\n        </ion-text>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngFor=\"let item of ssoListing | deepFilter:filter:keysToExclude; let i=index\">\n    <ion-col style=\"padding: 0.41rem 0.83rem 0.83rem 0.83rem;\">\n      <div class=\"card bg-default\" style=\"border-radius: 0.66rem;\">\n        <div class=\"card-body text-left\"\n          style=\"padding: 0.5rem 1rem; border: 0rem;border-radius: 0.66rem;box-shadow: 0rem 0rem 0.41rem #00000024;\">\n\n          <ion-list>\n            <div style=\"width: 100%; float: left;\">\n              <ion-checkbox style=\"vertical-align: middle;height: 1rem;width: 1rem; color: #000 !important;\"\n                (click)=\"onClickChechbox($event.target.checked,item)\" color=\"dark\"></ion-checkbox>&nbsp;\n              <ion-text style=\"font-size: 1rem; color: #000 !important;\" color=\"dark\">{{ item.ssoName }}</ion-text>\n              &nbsp;\n              <a slot=\"end\" style=\"vertical-align:bottom;font-size:1.50rem;float: right; color: #000 !important;\">\n                <ion-icon name=\"create\" color=\"white\" (click)=\"editSSOData(item.ssoId)\" style=\"color: #000 !important;\">\n                </ion-icon>\n              </a>\n            </div>\n\n            <ion-button size=\"small\"\n              (click)=\"onClickGetURL(item.ssoId,item.ssoName,item.ssoDesc, item.ssoUrl, item.user_id, item.password)\"\n              style=\"vertical-align: middle; float: right; width: 100%; background: #000 !important; color: #fff !important;\"\n              color=\"dark\">\n              {{'Access' |translate}}</ion-button>\n          </ion-list>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-content *ngIf=\"AddSSO\" class=\"contentSSO\">\n\n  <form [formGroup]=\"ssoForm\" (ngSubmit)=\"onSubmitSSO()\" style=\"margin: 0rem 0.83rem 0.83rem 0.83rem;\" novalidate>\n\n    <ion-grid>\n\n      <ion-list style=\"padding-bottom: 0; color: #000 !important;\">\n        <ion-label style=\"font-size: 0.875rem; color: #000 !important;\"><b\n            style=\"color: #000 !important;\">{{'Resource with ID Name' | translate}}<sup>*</sup></b></ion-label>\n        <ion-input type=\"text\" maxlength=\"50\"\n          style=\"height: 2.6rem;margin-bottom: 0;padding-left: 0.83rem !important;font-size: 0.875rem; color: #000 !important;\"\n          placeholder=\"{{'Resource with ID Name' | translate}}\" formControlName=\"ssoName\" [(ngModel)]=\"SSOVar\">\n        </ion-input>\n      </ion-list>\n      <ion-label class=\"text-danger\" *ngIf=\"isSubmitted && errorControl.ssoName.errors?.required\"\n        style=\"font-size: 0.800rem\">\n        {{'Resource with ID name is required' |translate}}\n      </ion-label>\n\n      <ion-list style=\"padding-bottom: 0;color: #000 !important;\">\n        <ion-label style=\"font-size: 0.875rem;color: #000 !important;\"><b\n            style=\"color: #000 !important;\">{{'Description'|translate}}<sup>*</sup></b></ion-label>\n        <ion-input\n          style=\"height: 2.6rem;margin-bottom:0;padding-left: 0.83rem !important;font-size:0.875rem;color: #000 !important;\"\n          type=\"text\" placeholder=\"{{'Description'|translate}}\" formControlName=\"ssoDescription\" maxlength=\"150\"\n          [(ngModel)]=\"descriptionVar\">\n        </ion-input>\n      </ion-list>\n      <ion-label *ngIf=\"isSubmitted && errorControl.ssoDescription.errors?.required\" class=\"text-danger\"\n        style=\"font-size: 0.800rem;\">\n        {{'Description is required' | translate}}\n      </ion-label>\n\n      <ion-list style=\"padding-bottom: 0;color: #000 !important;\">\n        <ion-label style=\"font-size: 0.875rem;color: #000 !important;\"><b\n            style=\"color: #000 !important;\">{{'URL' | translate}}<sup>*</sup></b></ion-label>\n        <ion-input\n          style=\"height: 2.6rem;margin-bottom:0;padding-left: 0.83rem !important;font-size: 0.875rem;color: #000 !important;\"\n          type=\"text\" placeholder=\"{{'URL' | translate}}\" formControlName=\"ssoURL\" maxlength=\"50\" [(ngModel)]=\"textURL\">\n        </ion-input>\n      </ion-list>\n\n      <ion-label *ngIf=\"isSubmitted && errorControl.ssoURL.errors?.required\" class=\"text-danger\"\n        style=\"font-size:0.800rem;\">\n        {{'URL is required' | translate}}\n      </ion-label>\n\n      <ion-label *ngIf=\"isSubmitted && errorControl.ssoURL.errors?.pattern\" class=\"text-danger\"\n        style=\"font-size:0.800rem;\">\n        {{'Enter valid URL' | translate}}\n      </ion-label>\n\n      <ion-list style=\"padding-bottom: 0;\">\n        <ion-label style=\"font-size:0.875rem;\"><b>{{'User ID' | translate}}<sup>*</sup></b></ion-label>\n        <ion-input style=\"height: 2.6rem;margin-bottom: 0rem;padding-left: 0.83rem !important;font-size: 0.875rem;\"\n          type=\"text\" placeholder=\"{{'User ID' | translate}}\" formControlName=\"ssoUserId\" maxlength=\"50\"\n          [(ngModel)]=\"userIdvar\">\n        </ion-input>\n      </ion-list>\n      <ion-label *ngIf=\"isSubmitted && errorControl.ssoUserId.errors?.required\" class=\"text-danger\"\n        style=\"font-size:0.800rem;\">\n        {{'User ID is required' | translate}}\n      </ion-label>\n\n      <ion-list style=\"padding-bottom: 0;\">\n        <ion-label style=\"font-size: 0.875rem;\"><b>{{'Password' | translate}}<sup>*</sup></b></ion-label>\n        <ion-input style=\"height: 2.6rem;margin-bottom: 0rem;padding-left: 0.83rem !important;font-size: 0.875rem;\"\n          type=\"password\" placeholder=\"{{'Password' | translate}}\" [(ngModel)]=\"passwordVar\" maxlength=\"50\"\n          formControlName=\"ssoPassword\">\n        </ion-input>\n      </ion-list>\n      <ion-label *ngIf=\"isSubmitted && errorControl.ssoPassword.errors?.required\" class=\"text-danger\"\n        style=\"font-size:0.800rem;\">\n        {{'Password is required' | translate}} </ion-label>\n      <br>\n\n      <div class=\"row\">\n        <div class=\"col-md-12 mt-3\">\n          <div class=\"m-form__group form-group text-center\">\n\n            <button class=\"btn btn-dark\"\n              style=\"font-size: 0.875rem; width: 49%; margin-right: 2%; background: #000 !important; color: #fff !important;\">{{'Save' |translate}}</button>\n            <button class=\"btn btn-dark\" (click)=\"onClickCancel()\"\n              style=\"font-size: 0.875rem; width: 49%;background: #fff !important;color: #000 !important;opacity: 1;\">{{'Cancel' | translate}}</button>\n          </div>\n        </div>\n      </div>\n\n    </ion-grid>\n  </form>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/subjects/subjects.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/subjects/subjects.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidemenuSubjectsSubjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header *ngIf=\"header\" heading=\"{{'Attendance Sheet'| translate }}\"></app-header>\n\n<!--1st Attendance Sheet Screens starts-->\n<ion-list *ngIf=\"attendancesheet\" class=\"attendanceheader\">\n  <ion-grid>\n    <ion-row>\n      <ion-col style=\"padding-top: 0;padding-bottom: 0;\">\n        <ion-item>\n          <ion-label class=\"select-Label\" style=\"margin: 0;\">{{'Select date' | translate }}</ion-label>\n          <ion-datetime [placeholder]=\"todaysDate\" display-timezone=\"utc\" cancelText=\"{{'CANCEL'|translate}}\"\n            [doneText]=\"doneButtonString\" style=\"padding: 0;\" [ngModelOptions]=\"{standalone: true}\"\n            displayFormat=\"DD-MM-YYYY\" [(ngModel)]=\"selecteddate\" (ngModelChange)=\"selectdate($event)\"\n            value={{todaysDate}}>\n          </ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style=\"padding-top: 0;padding-bottom: 0;\">\n        <ion-item>\n          <ion-label class=\"select-Label\" style=\"margin: 0;\">{{'Select class' | translate }}</ion-label>\n          <ion-select (ionCancel)=\"onCancel()\" okText=\"{{'OK'|translate}}\" cancelText=\"{{'CANCEL'|translate}}\"\n            [(ngModel)]=\"defaultClass\" [placeholder]=\"defaultClass\" (ionChange)=\"changeClass($event.target.value)\"\n            [ngModelOptions]=\"{standalone: true}\" class=\"select-text\" style=\"font-size: 1rem !important;padding: 0;\">\n            <ion-select-option *ngFor=\"let item of classListArr\" [value]=\"item.ref_grade\">{{item.ref_grade}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style=\"padding-top: 0;padding-bottom: 0;\">\n        <ion-item>\n          <ion-label class=\"select-Label\" style=\"margin: 0;\">{{'Select subject'| translate}}</ion-label>\n          <ion-select (ionCancel)=\"onCancel()\" okText=\"{{'OK'|translate}}\" cancelText=\"{{'CANCEL'|translate}}\"\n            class=\"text-input\" style=\"font-size: 1rem !important;padding:0;\" [(ngModel)]=\"defaultSubject\"\n            [placeholder]=\"defaultSubject\" (ionChange)=\"changeSubject($event.target.value)\"\n            [ngModelOptions]=\"{standalone: true}\">\n            <ion-select-option *ngFor=\"let item of subjectListArr\" [value]=\"item.subject_name\">{{item.subject_name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"attendancesheet\" class=\"attendance-Btn\">\n    <ion-row style=\"margin-top: 5px;\">\n      <ion-col style=\"padding: 0; margin-left: 16px;\">\n        <ion-button color=\"dark\" (click)=\"onClickCreate()\" style=\" padding: 0;height: 35px;\n        margin-right: 10px;\n        min-width: 80px;\n     \">\n          {{'Create'| translate}}\n        </ion-button>\n      </ion-col>\n      <ion-col style=\"padding: 0;\">\n        <ion-button color=\"dark\" [disabled]=\"emptyDataA==true\" (click)=\"onClickopen()\"\n          style=\"padding: 0;height: 35px;margin-right: 10px;min-width: 80px;\">\n          {{'Open'| translate}}\n        </ion-button>\n      </ion-col>\n      <!-- <ion-col>\n        <ion-button color=\"dark\" class=\"attendance-Button\" (click)=\"onClickBack()\">\n          Close\n        </ion-button>\n      </ion-col> -->\n\n    </ion-row>\n  </ion-grid>\n  <hr style=\"margin-top: 0.8rem;\">\n  <!--1st Attendance Sheet Screens Ends-->\n\n  <ion-row class=\"attendancemain\">\n    <ion-col class=\"attendance-on\" size=\"1.8\" offset=\"0\"></ion-col>\n    <ion-col class=\"attendance-on\" size=\"2.9\" offset=\"0\">{{'Date'| translate}}</ion-col>\n    <ion-col class=\"attendance-on\" size=\"2.9\" offset=\"0\">{{'Class'| translate}}</ion-col>\n    <ion-col class=\"attendance-on\" size=\"3.9\" offset=\"0\">{{'Subject'| translate}}</ion-col>\n  </ion-row>\n  <hr class=\"hr-class\" />\n</ion-list>\n<!--  -->\n<!-- check Empty Arr -->\n<div style=\"height: 100%;overflow: scroll;\" *ngIf=\"emptyDataA==true\">\n  <ion-grid class=\"emptyArr\">\n    <ion-row style=\"margin-top: 107px;\">{{EmptyArr}}</ion-row>\n  </ion-grid>\n</div>\n<!--  -->\n<!-- display content -->\n<ion-content id=\"divattendancelist\" *ngIf=\"attendancesheet && emptyDataA==false\" class=\"attendancediv\">\n  <!-- <ion-content *ngIf=\"attendancesheet\" style=\"padding:180px\"> -->\n  <ion-grid>\n    <!-- <ion-row class=\"attendancemain\">\n      <ion-col class=\"attendance-on\" size=\"1.7\" offset=\"0\">Select</ion-col>\n      <ion-col class=\"attendance-on\" size=\"2.9\" offset=\"0\">Date</ion-col>\n      <ion-col class=\"attendance-on\" size=\"2.9\" offset=\"0\">Class</ion-col>\n      <ion-col class=\"attendance-on\" size=\"2.9\" offset=\"0\">Subject</ion-col>\n    </ion-row>\n    <hr class=\"hr-class\" /> -->\n\n    <ion-row *ngFor=\"let list of AttendanceListArr let i=index\" scrollX=\"true\">\n\n      <ion-col class=\"attendance-date\" size=\"1.8\" offset=\"0\">\n        <!-- <ion-item> -->\n        <ion-checkbox [(ngModel)]=\"list.selected\" [disabled]=\"list.send_attendance=='yes'\" color=\"dark\"\n          style=\"margin-left: 10px; margin-top: 7px;\"\n          (ionChange)=\"addCheckbox($event,list.attendance_id,list.send_attendance,list.attendance_status_disabled)\">\n        </ion-checkbox>\n        <!-- </ion-item> -->\n      </ion-col>\n\n      <ion-col size=\"2.9\" offset=\"0\" class=\"attendance-date\">{{list.attendance_sheet_date | date: 'yyyy-MM-dd'}}\n      </ion-col>\n      <ion-col size=\"2.9\" offset=\"0\" class=\"attendance-date\">{{list.ref_grade}}</ion-col>\n      <ion-col size=\"3.9\" offset=\"0\" style=\"word-break: break-all;\" class=\"attendance-date\">{{list.subject_name}}\n      </ion-col>\n      <hr class=\"hr-class\" />\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event,'A')\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'Loading more data...'|translate}}\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<!-- </ion-content> -->\n\n\n\n<!-- 2nd Attendance Sheet Screens starts-->\n<ion-list *ngIf=\"attendancesheetCreate\">\n  <ion-grid style=\"padding-bottom: 0;\">\n\n    <ion-row class=\"attendancemain\">\n      <ion-col size=\"4\" offset=\"0\">{{'Date'| translate}}</ion-col>\n      <ion-col size=\"4\" offset=\"0\">{{'Class'| translate}}</ion-col>\n      <ion-col size=\"4\" offset=\"0\">{{'Subject'| translate}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" offset=\"0\">{{selecteddate | date :\"yyyy-MM-dd\"}} {{CreatedTime}}</ion-col>\n      <ion-col size=\"4\" offset=\"0\">{{defaultClass}}</ion-col>\n      <ion-col size=\"4\" offset=\"0\">{{defaultSubject}}</ion-col>\n    </ion-row>\n\n\n\n    <hr class=\"hr-class\" />\n  </ion-grid>\n  <ion-row class=\"attendancemain\">\n    <ion-col size=\"5.8\" offset=\"0\" class=\"Attednace-Header1\">{{'Name'| translate}}</ion-col>\n    <ion-col size=\"6\" offset=\"0\" class=\"Attednace-Header2\">{{'Attendance'| translate}}</ion-col>\n  </ion-row>\n  <hr class=\"hr-class\" />\n</ion-list>\n<!--check Empty Arr-->\n<div style=\"height: 100%;overflow: scroll;\" *ngIf=\"emptyData==true\">\n  <ion-grid class=\"emptyArr\">\n    <ion-row>{{EmptyArr}}</ion-row>\n  </ion-grid>\n</div>\n<!--  -->\n<!-- display content data -->\n<ion-content *ngIf=\"attendancesheetCreate && emptyData==false\" id=\"divattendancelist\"\n  style=\"height: 100%;overflow: scroll;\">\n  <ion-grid>\n    <ion-row scrollX=\"true\" *ngFor=\"let list of AttendanceListArr2 let i=index\"\n      style=\"margin-top:-47px;font-size: 28px;display: grid;grid-template-columns: 60% 40%;\">\n\n      <ion-col size=\"5.8\" offset=\"0\" class=\"innerDiv\">{{list.fullName}}</ion-col>\n\n      <div *ngIf=\"list.attendance_status==null\" style=\"height: 57px;\">\n        <ion-col size=\"5\" offset=\"0\">\n          <ion-item>\n            <ion-label style=\"font-size: 1rem !important;display:none;\">{{'Select Attendance Status' | translate }}\n            </ion-label>\n            <ion-select [disabled]=\"sendbutton==false\" (ionCancel)=\"onCancel()\" okText=\"{{'OK'|translate}}\"\n              cancelText=\"{{'CANCEL'|translate}}\" placeholder=\"{{'Select' | translate}} \" style=\"opacity: 1px;\"\n              (ionChange)=\"changeStatus($event.target.value,list.citizen_id)\" [ngModelOptions]=\"{standalone: true}\"\n              class=\"attendance-status\">\n              <ion-select-option *ngFor=\"let item of categories\" [value]=\"item.id\">{{item.title}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n      </div>\n      <div *ngIf=\"list.attendance_status!=null\" style=\"height: 57px;\">\n        <ion-col size=\"5\" offset=\"0\">\n          <ion-item>\n            <ion-label style=\"font-size: 1rem !important;display:none;\">{{'Select Attendance Status' | translate }}\n            </ion-label>\n            <ion-select [disabled]=\"sendbutton==false\" (ionCancel)=\"onCancel()\" okText=\"{{'OK'|translate}}\"\n              cancelText=\"{{'CANCEL'|translate}}\" [placeholder]=\"list.attendance_status|translate\"\n              style=\"text-transform: capitalize;\" (ionChange)=\"changeStatus($event.target.value,list.citizen_id)\"\n              class=\"attendance-status\" [ngModelOptions]=\"{standalone: true}\">\n              <ion-select-option *ngFor=\"let item of categories\" style=\"text-transform: capitalize;\"\n                [selected]=\"list.statusId == item.id\" [value]=\"item.id\">{{item.title}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </div>\n\n    </ion-row>\n    <!-- <hr class=\"hr-class\" /> -->\n  </ion-grid>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event,'B')\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"{{'Loading more data...'|translate}}\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<!--  -->\n<!-- bottom butttons -->\n<ion-grid *ngIf=\"attendancesheetCreate\" style=\"margin-left: 2px;margin: 0 10px;margin-bottom: -450px;\">\n  <ion-row style=\"display: grid;\n  grid-template-columns: auto auto auto auto;\n  gap: 0 29px;\">\n    <ion-col style=\"padding: 0;\">\n      <ion-button color=\"dark\" class=\"attendance-Button\" [disabled]=\"emptyData==true || sendbutton==false\"\n        (click)=\"onClickScan()\" style=\"padding: 0;height: 35px;margin-left: 0;min-width: 100px;\">\n        {{'Scan'| translate}}\n      </ion-button>\n    </ion-col>\n    <ion-col style=\"padding: 0;\">\n      <ion-button color=\"dark\" class=\"attendance-Button\"\n        [disabled]=\"emptyData==true || sendbutton==false || disablebuttons==false\"\n        (click)=\"onChangeSaveAttendance('done')\" style=\"padding: 0;height: 35px;min-width: 100px;margin-left: 0;\">\n        {{'Done' | translate}}\n      </ion-button>\n    </ion-col>\n    <ion-col style=\"padding: 0;\">\n      <ion-button [disabled]=\"emptyData==true || disablebuttons==false\" class=\"attendance-Button\" color=\"dark\"\n        (click)=\"onChangeSaveAttendance('send')\" style=\"padding: 0;height: 35px;margin-left: 0;min-width: 100px;\">\n        {{'Send'| translate}}\n      </ion-button>\n    </ion-col>\n    <!-- <ion-col style=\"padding: 0;\">\n      <ion-button color=\"dark\" class=\"attendance-Button\" (click)=\"onClickClose()\"\n        style=\"padding: 0;height: 35px;margin-left: 0;\">\n        {{'Close'| translate}}\n      </ion-button>\n    </ion-col> -->\n\n  </ion-row>\n</ion-grid>\n<!-- 2nd Attendance Sheet Screens Ends-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/test-sessions/test-sessions.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/test-sessions/test-sessions.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSidemenuTestSessionsTestSessionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header *ngIf=\"testSessionHeader\" [heading]=\"heading\"></app-header>\n\n<ion-header *ngIf=\"testSessionSubHeader\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"test-sessions\" (click)=\"onClickBackButton()\" style=\"color: #fff !important;\">\n      </ion-back-button>\n      <b style=\"color: #fff !important;\">{{'Submit Answers' | translate}}</b>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header *ngIf=\"testSessionFileSubHeader\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"test-sessions\" (click)=\"onClickBackButton()\" style=\"color: #fff !important;\">\n      </ion-back-button>\n      <b style=\"color: #fff !important;\">{{'File Listing' | translate}}</b>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header *ngIf=\"viewGradeSubHeader\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"test-sessions\" (click)=\"onClickBackButton()\" style=\"color: #fff !important;\">\n      </ion-back-button>\n      <b style=\"color: #fff !important;\">{{'List of graded files' | translate}}</b>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content *ngIf=\"testSessionData\">\n  <div\n    style=\"width: 100%; float: left; background: #fff;position: fixed;left: 0;z-index: 11;height:calc(42px + 15.933vw)\">\n    <ion-searchbar (ngModelChange)=\"trimSearchValues($event)\" [(ngModel)]=\"filter\" placeholder=\"{{'Search'|translate}}\">\n    </ion-searchbar>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n        refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list class=\"sso-title\" style=\"text-align: center;  padding: 0 5.2vw 1vw 5.2vw !important;\">\n\n      <ion-button color=\"dark\" (click)=\"onClickOpenFile()\">{{'Open File' | translate}} </ion-button>\n      <ion-button color=\"dark\" [disabled]=\"disabled\" *ngIf=\"isActor\" (click)=\"onClickSubmitAnswer()\">\n        {{'Submit Answer' | translate}}\n      </ion-button>\n      <ion-button color=\"dark\" (click)=\"onClickViewGrade()\"> {{'View Grade' | translate}}</ion-button>\n    </ion-list>\n  </div>\n  <div style=\"width: 100%; float: left;    top: calc(42px + 20.933vw); position: relative;\">\n    <ion-row *ngFor=\"let item of testSessionArr ; let i=index\">\n\n      <ion-checkbox (click)=\"onClickChechbox($event.target.checked, item)\"\n        style=\"vertical-align: middle;height: 4.266666666666667vw; width: 4.266666666666667vw;color: #000 !important; margin-left: 5.2vw;margin-right: 3.2vw; float: left;margin-top: 5.2vw;\"\n        color=\"dark\">\n      </ion-checkbox>\n\n      <div class=\"mobile-table\"\n        style=\"padding:1rem; border: 0rem;border-radius: 0.66rem;box-shadow: 0rem 0rem 0.41rem #00000024;\"\n        style=\"width: calc(100% - 17.466vw);float: right; margin: 0 !important;\">\n        <div class=\"mobile-table-inner\" style=\"margin-top: 0;\">\n\n          <div class=\"mobile-border\">\n\n            <div class=\"mobile-file\" style=\"color: #000 !important;\">\n              <b>{{'Session' | translate}}</b><br>\n              <span style=\"color: #000 !important; font-weight: normal;\">{{item.test_session_count_for_that_entity}}\n              </span>\n            </div>\n\n            <div class=\"mobile-file\" style=\"color: #000 !important;\"><b>{{'Class' | translate }}</b> <span\n                style=\"color: #000 !important;font-weight: normal;\">\n                {{item.ref_grade}} </span>\n            </div>\n\n            <div class=\"mobile-file\" style=\"color: #000 !important;\"><b>{{'Subject' | translate }}</b> <span\n                style=\"color: #000 !important;font-weight: normal;\">\n                {{item.subject_name}} </span>\n            </div>\n\n            <div class=\"mobile-file\" style=\"color: #000 !important;\"><b>{{'Deadline' | translate }}</b> <span\n                style=\"color: #000 !important;font-weight: normal;\">\n                {{item.deadline_date}} </span>\n            </div>\n\n            <div class=\"mobile-file\" style=\"color: #000 !important;\"><b>{{'Answered Date' | translate }}</b> <span\n                style=\"color: #000 !important; font-weight: normal;\">\n                {{item.answer_date ==''?'N/A': item.answer_date}} </span>\n            </div>\n\n            <div class=\"mobile-file\" style=\"color: #000 !important;\"><b>{{'Graded Date' | translate }}</b> <span\n                style=\"color: #000 !important;font-weight: normal;\">\n                {{item.graded_date ==''?'N/A':item.graded_date}} </span>\n            </div>\n            <div class=\"mobile-file\" style=\"color: #000 !important;\"><b>{{'Avg Grade' | translate }}</b> <span\n                style=\"color: #000 !important;font-weight: normal;\">\n                {{item.grade =='null'?'-':(item.graded_date ==''?'-':item.grade)}} </span>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </ion-row>\n  </div>\n</ion-content>\n\n<ion-content *ngIf=\"fileUploadPage\">\n  <ion-grid style=\"padding: 0 4vw; position: relative; height: 92%; overflow: scroll; max-height: 100%;\">\n\n    <br>\n    <!-- removed test file dropdown 24-12-2020 as new CR  -->\n\n    <!-- <ion-item style=\"--padding-start: 0;\">\n      <ion-label style=\"font-size: 1rem !important;\">{{'Select File' | translate }}</ion-label>\n      <ion-select  okText=\"{{'OK'|translate}}\" cancelText=\"{{'CANCEL'|translate}}\" [(ngModel)]=\"defaultFile\"\n        (ionChange)=\"onChangeSelectFile($event.target.value)\" [ngModelOptions]=\"{standalone: true}\"\n        style=\"font-size: 1rem !important;\">\n        <ion-select-option *ngFor=\"let item of fileListArr\" [value]=\"item.test_file\">{{item.test_file}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item> -->\n\n    <br>\n    <ion-row>\n      <div class=\"form-group\" style=\"width: 100%;position: relative;\">\n        <!-- <input type=\"file\"  multiple ng2FileSelect [uploader]=\"fileUploader\" (change)=\"onClickFile($event)\"/> -->\n        <!-- <label for=\"file\">Choose Files</label>-->\n        <ion-label class=\"filediv\">{{'Choose Files' | translate }} </ion-label>\n        <span class=\"inputfilespan\"> {{'No files'| translate}}</span>\n        <input type=\"file\" id=\"file\" class=\"inputfile\" (change)=\"onFileChangearrayinsert($event)\" multiple />\n\n      </div>\n    </ion-row>\n\n    <h5> {{'Uploaded Files :'| translate}} {{images.length}}</h5>\n    <!-- <div style=\"width: 100%; height: 99%; border: 1px solid #212529; padding: 5px;  margin: 5px;\"> -->\n    <div style=\"width: 100%;\">\n      <ion-row *ngFor=\"let item of images; let i=index\"\n        style=\"padding: 0.41rem 0rem;background: #fff;border-bottom: 0.08rem solid rgba(0, 0, 0, 0.125);margin-bottom: 0.08rem;\">\n        <hr>\n        <ion-col size=\"12\" style=\"background-color: white;padding: 0rem 0.83rem;\" color=\"light\">\n          <ion-icon\n            style=\"font-size: 1.5rem;vertical-align: middle;float: left;margin-right: 0.83rem;color: #000 !important;\"\n            name=\"document\">\n          </ion-icon>\n          <p style=\"width: calc(100% - 2.5rem); float: left;font-size: 1rem;margin: 0rem; color: #000 !important;\">\n            {{item.filename}}\n            <ion-icon\n              style=\"float: right;font-size: 1.3rem; color:#f8f9fa !important;background-color: #00000066;border-radius: 50%;\"\n              (click)=\"onClickremove(i)\" [name]=\"item.icon\">\n            </ion-icon>\n          </p>\n        </ion-col>\n        <!-- <ion-col size=\"12\" style=\"background-color: white;padding: 0rem 0.83rem;\">\n      <ion-icon style=\"float: right;font-size: 1.3rem; color:#f8f9fa !important;background-color: #00000066;border-radius: 50%;\"\n        (click)=\"onClickremove(i)\" [name]=\"item.icon\">\n      </ion-icon>\n    </ion-col> -->\n      </ion-row>\n    </div>\n  </ion-grid>\n\n  <div class=\"row\" style=\"text-align: center; margin: 0;position: absolute;width: 100%;padding: 0;left: 0;bottom: 0;\">\n    <div class=\"col-md-12 mt-3\">\n      <div class=\"m-form__group form-group text-center\">\n\n        <button class=\"btn btn-dark\" (click)=\"confirmSubmitTestAnswer()\"\n          style=\"font-size: 0.875rem; width: 49%; margin-right: 2%; background: #000 !important; color: #fff !important;\">{{'Send' |translate}}</button>\n        <!-- <button class=\"btn btn-dark\" (click)=\"uploadFiles()\"\n            style=\"font-size: 0.875rem; width: 49%; margin-right: 2%; background: #000 !important; color: #fff !important;\">{{'Save' |translate}}</button> -->\n        <button class=\"btn btn-dark\" (click)=\"onClickCancel()\"\n          style=\"font-size: 0.875rem; width: 49%;background: #fff !important;color: #000 !important;opacity: 1;\">{{'Cancel' | translate}}</button>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-content *ngIf=\"openFileSubForm\">\n  <ion-searchbar (ngModelChange)=\"trimSearchFiles($event)\" [(ngModel)]=\"fileFilter\"\n    placeholder=\"{{'Search'|translate}}\">\n  </ion-searchbar>\n  <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher> -->\n\n  <ion-row *ngFor=\"let item of testSessionFiles | deepFilter:fileFilter:keysToExcludeField\"\n    style=\"padding: 0.41rem 0rem;background: #fff;border-bottom: 0.08rem solid rgba(0, 0, 0, 0.125);margin-bottom: 0.08rem;\">\n    <hr>\n    <ion-col size=\"12\" style=\"background-color: white;padding: 0rem 0.83rem;\" color=\"light\">\n      <ion-icon\n        style=\"font-size: 1.5rem;vertical-align: middle;float: left;margin-right: 0.83rem;color: #000 !important;\"\n        name=\"document\">\n      </ion-icon>\n      <p style=\"width: calc(100% - 2.5rem); float: left;font-size: 1rem;margin: 0rem; color: #000 !important;\">\n        {{item.test_file}}</p>\n    </ion-col>\n    <ion-col size=\"12\" style=\"background-color: white;padding: 0rem 0.83rem;\">\n      <!-- <p style=\"float: left;font-size: 0.875rem;margin: 0; color: #000 !important;\"><b style=\"color: #000 !important;\"> {{'Size' | translate}}</b>:{{item.size}}\n      </p> -->\n      <ion-icon style=\"float: right;font-size: 1.5rem; color: #000 !important;\"\n        (click)=\"onClickDownload(item.test_file, item.test_session_id, item.entity_id, item.class_id, item.icon)\"\n        [name]=\"item.icon\">\n      </ion-icon>\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n<ion-content *ngIf=\"viewGradeSubForm\">\n  <ion-searchbar (ngModelChange)=\"trimSearchGrade($event)\" [(ngModel)]=\"filterGrade\"\n    placeholder=\"{{'Search'|translate}}\">\n  </ion-searchbar>\n\n  <ion-row *ngFor=\"let item of gradeListArr | deepFilter:filterGrade:keysToExcludeGrade\"\n    style=\"padding: 0.41rem 0rem;background: #fff;border-bottom: 0.08rem solid rgba(0, 0, 0, 0.125);margin-bottom: 0.08rem;\">\n    <hr>\n    <ion-col size=\"12\" style=\"background-color: white;padding: 0rem 0.83rem;\" color=\"light\">\n      <ion-icon\n        style=\"font-size: 1.5rem;vertical-align: middle;float: left;margin-right: 0.83rem;color: #000 !important;\"\n        name=\"document\">\n      </ion-icon>\n      <p style=\"width: calc(100% - 2.5rem); float: left;font-size: 1rem;margin: 0rem; color: #000 !important;\">\n        {{item.graded_file}}</p>\n    </ion-col>\n    <ion-col size=\"12\" style=\"background-color: white;padding: 0rem 0.83rem;\">\n      <p style=\"float: left;font-size: 0.875rem;margin: 0; color: #000 !important;\"><b style=\"color: #000 !important;\">\n          {{'Grade' | translate}}</b>:{{item.file_grade}}\n      </p>\n      <ion-icon style=\"float: right;font-size: 1.5rem; color: #000 !important;\"\n        (click)=\"downLoadGradefile(item.graded_file, item.test_session_id, item.entity_id, item.class_id, item.icon)\"\n        [name]=\"item.icon\">\n      </ion-icon>\n    </ion-col>\n  </ion-row>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _sidemenu_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sidemenu/dashboard/dashboard.component */
    "./src/app/sidemenu/dashboard/dashboard.component.ts");
    /* harmony import */


    var _sidemenu_audit_trail_audit_trail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sidemenu/audit-trail/audit-trail.component */
    "./src/app/sidemenu/audit-trail/audit-trail.component.ts");
    /* harmony import */


    var _sidemenu_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sidemenu/feedback/feedback.component */
    "./src/app/sidemenu/feedback/feedback.component.ts");
    /* harmony import */


    var _sidemenu_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sidemenu/profile/profile.component */
    "./src/app/sidemenu/profile/profile.component.ts");
    /* harmony import */


    var _sidemenu_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sidemenu/subjects/subjects.component */
    "./src/app/sidemenu/subjects/subjects.component.ts");
    /* harmony import */


    var _sidemenu_sso_sso_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./sidemenu/sso/sso.component */
    "./src/app/sidemenu/sso/sso.component.ts");
    /* harmony import */


    var _sidemenu_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./sidemenu/logout/logout.component */
    "./src/app/sidemenu/logout/logout.component.ts");
    /* harmony import */


    var _sidemenu_resource_link_resource_link_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sidemenu/resource-link/resource-link.component */
    "./src/app/sidemenu/resource-link/resource-link.component.ts");
    /* harmony import */


    var _sidemenu_test_sessions_test_sessions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sidemenu/test-sessions/test-sessions.component */
    "./src/app/sidemenu/test-sessions/test-sessions.component.ts");
    /* harmony import */


    var _sidemenu_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./sidemenu/qr-code/qr-code.component */
    "./src/app/sidemenu/qr-code/qr-code.component.ts"); // import { TablinksPageModule } from './sidemenu/tablinks/tablinks.module';


    var routes = [// {
    //   path: '',
    //   redirectTo: 'dashboard',
    //   pathMatch: 'full'
    // },
    {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sidemenu-tablinks-tablinks-module */
        "sidemenu-tablinks-tablinks-module").then(__webpack_require__.bind(null,
        /*! ./sidemenu/tablinks/tablinks.module */
        "./src/app/sidemenu/tablinks/tablinks.module.ts")).then(function (m) {
          return m.TablinksPageModule;
        });
      }
    }, {
      path: 'app-home',
      component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    }, {
      path: 'app-homereload',
      component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    }, {
      path: 'dashboard',
      component: _sidemenu_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }, {
      path: 'dashboardreload',
      component: _sidemenu_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }, {
      path: 'logout',
      component: _sidemenu_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"]
    }, {
      path: 'subjects',
      component: _sidemenu_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_8__["SubjectsComponent"]
    }, {
      path: 'subjectsreload',
      component: _sidemenu_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_8__["SubjectsComponent"]
    }, {
      path: 'resource-link',
      component: _sidemenu_resource_link_resource_link_component__WEBPACK_IMPORTED_MODULE_11__["ResourceLinkComponent"]
    }, {
      path: 'resource-linkreload',
      component: _sidemenu_resource_link_resource_link_component__WEBPACK_IMPORTED_MODULE_11__["ResourceLinkComponent"]
    }, {
      path: 'audit-trail',
      component: _sidemenu_audit_trail_audit_trail_component__WEBPACK_IMPORTED_MODULE_5__["AuditTrailComponent"]
    }, {
      path: 'audit-trailreload',
      component: _sidemenu_audit_trail_audit_trail_component__WEBPACK_IMPORTED_MODULE_5__["AuditTrailComponent"]
    }, {
      path: 'sso',
      component: _sidemenu_sso_sso_component__WEBPACK_IMPORTED_MODULE_9__["SsoComponent"]
    }, {
      path: 'ssoreload',
      component: _sidemenu_sso_sso_component__WEBPACK_IMPORTED_MODULE_9__["SsoComponent"]
    }, {
      path: 'feedback',
      component: _sidemenu_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackComponent"]
    }, {
      path: 'feedbackreload',
      component: _sidemenu_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackComponent"]
    }, {
      path: 'profile',
      component: _sidemenu_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
    }, {
      path: 'test-sessions',
      component: _sidemenu_test_sessions_test_sessions_component__WEBPACK_IMPORTED_MODULE_12__["TestSessionsComponent"]
    }, {
      path: 'test-sessionsreload',
      component: _sidemenu_test_sessions_test_sessions_component__WEBPACK_IMPORTED_MODULE_12__["TestSessionsComponent"]
    }, {
      path: 'QR-code',
      component: _sidemenu_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_13__["QRCodeComponent"]
    }, {
      path: 'QR-codeReload',
      component: _sidemenu_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_13__["QRCodeComponent"]
    }, {
      path: 'tablinks',
      loadChildren: './sidemenu/tablinks/tablinks.module#TablinksPageModule'
    }, {
      path: 'scanpage',
      loadChildren: './sidemenu/scanpage/scanpage.module#ScanpagePageModule'
    }, {
      path: 'history',
      loadChildren: './sidemenu/history/history.module#HistoryPageModule'
    }, {
      path: 'settings',
      loadChildren: './sidemenu/settings/settings.module#SettingsPageModule'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        onSameUrlNavigation: 'reload'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col {\n  --ion-background-color:rgb(66, 66, 66); }\n\nion-menu {\n  --ion-background-color:gray; }\n\nion-content {\n  --ion-background-color:#f1f1f1; }\n\n.one {\n  --ion-background-color:#CCFF99; }\n\nion-grid {\n  width: 100%;\n  height: 100%; }\n\nion-row {\n  height: 100%; }\n\nion-button {\n  font-weight: 300; }\n\n@media (min-width: 20rem) and (max-width: 64rem) {\n  ion-grid {\n    background: #fff; }\n  ion-col {\n    border: none; } }\n\n#t1 {\n  font-size: 0.875rem;\n  margin-left: 1.58rem;\n  margin-bottom: -2.91rem; }\n\nion-input {\n  border: 0.08rem solid black;\n  border-radius: 0.41rem;\n  border-color: darkgrey;\n  width: 23.33rem;\n  margin-left: 3.33rem;\n  margin-right: 2.5rem;\n  /*other attributes*/ }\n\n.image-logo {\n  height: 6.66rem;\n  margin-left: 0.83rem;\n  margin-right: 1.66rem;\n  margin-top: 0rem;\n  margin-bottom: 3.33rem; }\n\n#valid1 {\n  margin-left: 2.33rem; }\n\n#chk {\n  margin-left: 3.33rem; }\n\nform ion-toolbar ion-title#t1 {\n  text-align: left;\n  padding: 0rem;\n  margin: 0rem !important; }\n\nform ion-input {\n  margin: 0rem !important;\n  width: 100% !important;\n  background: transparent !important;\n  border-color: #c5c5c5 !important;\n  font-size: 0.875rem; }\n\nion-content form ion-img {\n  max-width: 8.89rem;\n  margin: 0rem auto 0rem auto !important; }\n\nion-content form ion-toolbar ion-title#t1 {\n  background: #f1f1f1 !important; }\n\nion-content form ion-checkbox {\n  margin: 0rem !important;\n  height: 1rem;\n  width: 1rem;\n  vertical-align: middle; }\n\nion-content form .btn-dark {\n  width: 100%;\n  padding: 0.66rem;\n  font-size: 0.875rem;\n  text-transform: uppercase; }\n\n.forgot-input, .forgot-input input {\n  padding-right: 0 !important; }\n\n.form-input input {\n  padding-right: 0.661 0.19 !important; }\n\n.ion-color-primary {\n  --ion-color-base: #343a40!important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvQW1leS9KQVdBVEEvamF3YXRhLW1hbmFnZXIvSmF3YXRhTWFuYWdlckFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNDQUF1QixFQUFBOztBQUszQjtFQUNJLDJCQUF1QixFQUFBOztBQUczQjtFQUNJLDhCQUF1QixFQUFBOztBQUUzQjtFQUNRLDhCQUF1QixFQUFBOztBQU0vQjtFQUNJLFdBQVU7RUFDVixZQUpZLEVBQUE7O0FBUWhCO0VBQ0ksWUFUWSxFQUFBOztBQWlCaEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSTtJQUNJLGdCQXhCVSxFQUFBO0VBMEJkO0lBQ0ksWUFBWSxFQUFBLEVBQ2Y7O0FBTUw7RUFHSSxtQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHVCQUF1QixFQUFBOztBQUkzQjtFQUNJLDJCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3hCLG1CQUFBLEVBQW9COztBQUdwQjtFQUNJLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0IsRUFBQTs7QUFHMUI7RUFHSSxvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLGdDQUFnQztFQUNoQyxtQkFBa0IsRUFBQTs7QUFLdEI7RUFDSSxrQkFBa0I7RUFDbEIsc0NBQXNDLEVBQUE7O0FBRTFDO0VBQ0ksOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksb0NBQWtDLEVBQUE7O0FBRXRDO0VBQ0ksbUNBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNvbHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYig2NiwgNjYsIDY2KTtcbiAgICAvLyBwYWRkaW5nOjIuMjQ7IFxufVxuXG5cbmlvbi1tZW51e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6Z3JheTtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO1xufVxuLm9uZXtcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojQ0NGRjk5O1xufVxuXG4kd2hpdGUtY29sb3I6ICNmZmY7XG4kaGVpZ2h0MTAwOiAxMDAlO1xuXG5pb24tZ3JpZCB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6ICRoZWlnaHQxMDA7XG4gICAgLy8gYmFja2dyb3VuZDogI2RmZGZkZjtcbn1cblxuaW9uLXJvdyB7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xufVxuXG4vLyBpb24tY29sIHtcbi8vICAgICBib3JkZXI6IDAuMDhyZW0gc29saWQgIzQ4OGFmZjtcbi8vICAgICAvLyBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XG4vLyB9XG5cbmlvbi1idXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyMHJlbSkgYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gICAgaW9uLWdyaWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XG4gICAgfVxuICAgIGlvbi1jb2wge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxufVxuXG4gICAgLy8gZm9udC1zaXplOiAyLjE2cmVtO1xuXG5cbiN0MVxue1xuXG4gICAgZm9udC1zaXplOjAuODc1cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxLjU4cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC0yLjkxcmVtO1xuICAgIFxufVxuXG5pb24taW5wdXQge1xuICAgIGJvcmRlcjowLjA4cmVtIHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNDFyZW07XG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrZ3JleTtcbiAgICB3aWR0aDogMjMuMzNyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDMuMzNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVyZW07XG4vKm90aGVyIGF0dHJpYnV0ZXMqL1xufVxuXG4uaW1hZ2UtbG9nb3tcbiAgICBoZWlnaHQ6IDYuNjZyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuODNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjY2cmVtO1xuICAgIG1hcmdpbi10b3A6IDByZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMy4zM3JlbTtcbn1cblxuI3ZhbGlkMVxuXG57XG4gICAgbWFyZ2luLWxlZnQ6IDIuMzNyZW07XG59XG4jY2hre1xuICAgIG1hcmdpbi1sZWZ0OiAzLjMzcmVtO1xufVxuZm9ybSBpb24tdG9vbGJhciBpb24tdGl0bGUjdDEge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMHJlbTtcbiAgICBtYXJnaW46IDByZW0gIWltcG9ydGFudDtcbn1cbmZvcm0gaW9uLWlucHV0IHtcbiAgICBtYXJnaW46IDByZW0gIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjYzVjNWM1ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOjAuODc1cmVtO1xufVxuLy8gaW9uLWNvbnRlbnQgZm9ybSB7XG4vLyAgICAgbWFyZ2luOiAycmVtIDEuMjVyZW0gMHJlbSAxLjI1cmVtICFpbXBvcnRhbnQ7XG4vLyB9XG5pb24tY29udGVudCBmb3JtIGlvbi1pbWcge1xuICAgIG1heC13aWR0aDogOC44OXJlbTtcbiAgICBtYXJnaW46IDByZW0gYXV0byAwcmVtIGF1dG8gIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGZvcm0gaW9uLXRvb2xiYXIgaW9uLXRpdGxlI3QxIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1jaGVja2JveCB7XG4gICAgbWFyZ2luOiAwcmVtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5pb24tY29udGVudCBmb3JtIC5idG4tZGFyayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC42NnJlbTtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uZm9yZ290LWlucHV0LCAuZm9yZ290LWlucHV0IGlucHV0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1pbnB1dCBpbnB1dCB7XG4gICAgcGFkZGluZy1yaWdodDogMC42NjEuMTkgIWltcG9ydGFudDtcbn1cbi5pb24tY29sb3ItcHJpbWFyeXtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMzQzYTQwIWltcG9ydGFudDtcbn1cblxuJGNvbG9yczogKFxuICAgIHByaW1hcnk6IzM0M2E0MCxcbiAgICBpb24tY29sb3ItYmFzZTogIzM0M2E0MCAhaW1wb3J0YW50LFxuKVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _translate_config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./translate-config.service */
    "./src/app/translate-config.service.ts");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _services_menu_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/menu.service */
    "./src/app/services/menu.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/unique-device-id/ngx */
    "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/uid/ngx */
    "./node_modules/@ionic-native/uid/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/ngx/index.js"); //import { TranslateHttpLoader } from '@ngx-translate/http-loader';


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, router, http, loginService, network, translateConfigService, sqlite, datePipe, loadingController, translate, uniqueDeviceID, formBuilder, androidPermissions, file, uid, camera, alertCtrl, actionSheetCtrl, menuService, webview //,public dashboardComponent:DashboardComponent
      ) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.http = http;
        this.loginService = loginService;
        this.network = network;
        this.translateConfigService = translateConfigService;
        this.sqlite = sqlite;
        this.datePipe = datePipe;
        this.loadingController = loadingController;
        this.translate = translate;
        this.uniqueDeviceID = uniqueDeviceID;
        this.formBuilder = formBuilder;
        this.androidPermissions = androidPermissions;
        this.file = file;
        this.uid = uid;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.menuService = menuService;
        this.webview = webview;
        this.userType = "";
        this.showLoginForm = true;
        this.sideMenuNames = false;
        this.loading = false;
        this.submitted = false;
        this.haspermission = false;
        this.permissiongranted = false;
        this.userIdVar = "";
        this.passwordVar = "";
        this.applicationDirectory = '';
        this.applicationStorageDirectory = '';
        this.dataDirectory = '';
        this.cacheDirectory = '';
        this.externalApplicationStorageDirectory = '';
        this.externalDataDirectory = '';
        this.externalCacheDirectory = '';
        this.externalRootDirectory = '';
        this.tempDirectory = '';
        this.getFreeDiskSpace = '';
        this.sideMenuPages = [];
        this.Dashb1 = '';
        this.checked = false;
        this.setData = false;
        this.forgotPassForm = false;
        this.emailID = "";
        this.birthDate = "";
        this.todaysDate = "";
        this.flag = false;
        this.validCrdendtialFlag = false;
        this.isSubmitted = false;
        this.row_data = [];
        this.permissonArray = [];
        this.profilepic = "";
        this.database_name = "Jawata_App.db"; //DB name

        this.table_name = "tbluserlogin"; // Table 

        this.locale = "en";
        this.Flag = true;
        this.loaderLanguage = "";

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        }; // set default language if languange is blank 


        if (localStorage.getItem('selectedL') == '' || localStorage.getItem('selectedL') == null) this.selectedLanguage = this.translateConfigService.getDefaultLanguage();else {
          // set language from local storage
          this.selectedLanguage = localStorage.getItem('selectedL');
          this.locale = localStorage.getItem('selectedL');
          this.translateConfigService.setLanguage(this.selectedLanguage);
        } //last visited url

        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["filter"])(function (evt) {
          return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["RoutesRecognized"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["pairwise"])()).subscribe(function (events) {
          localStorage.setItem('bckbtnpage', events[0].urlAfterRedirects);
          localStorage.setItem('currenturl', events[1].urlAfterRedirects); // if(localStorage.getItem('currenturl')=='/subjects')
          // {
          //   localStorage.setItem('currenturl','')
          // }
          // if(localStorage.getItem('nav')=='true'){
          //   localStorage.setItem('currenturl','/tablinks/history')
          // }
          //alert('previous url dashboard' + events[0].urlAfterRedirects + '/current url'+ events[1].urlAfterRedirects);
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.initializeApp();
          this.loginForm = this.formBuilder.group({
            //userID: ['', [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
            userID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
          });
          this.forgotPassword = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]]
          });
          this.translateConfigService.setLanguage(this.selectedLanguage);
          localStorage.setItem('selectedL', this.selectedLanguage);
          this.translate.setDefaultLang(this.selectedLanguage);
          this.translate.use(this.selectedLanguage);
          this.initializeBackButtonCustomHandler();
          /**Set value to Remember me */

          this.userIdVar = "";
          this.passwordVar = ""; //if (localStorage.getItem('USERNAME') != null && localStorage.getItem('PASSWORD') != null) {

          console.log('loggedinflag :-' + localStorage.getItem('loggedinflag') + 'this.selectedLanguage :- ' + this.selectedLanguage + 'localStorage.getItem(remembermechecked) :- ' + localStorage.getItem('remembermechecked'));

          if (localStorage.getItem('remembermechecked') == 'true') {
            this.setData = true;
            this.checked = true;
            this.userIdVar = localStorage.getItem('USERNAME');
            this.passwordVar = localStorage.getItem('PASSWORD');
          } else {
            this.checked = false;
            this.setData = false;
          } // if loggedinflag = true then naviagte to dashboard page	


          if (localStorage.getItem('loggedinflag') == 'true') {
            this.showLoginForm = false;
            this.sideMenuNames = true;
            this.translate.use(this.selectedLanguage);
            this.translate.get(localStorage.getItem('userType')).subscribe(function (res) {
              _this.userType = "";
              _this.userType = res;
              _this.userDetails = [];
              _this.userDetails = [{
                title: localStorage.getItem('userName'),
                emailid: _this.userType,
                icon: 'camera' //localStorage.getItem('profile_image_path')//'contact'

              }];
            }); // set profile image path if user is already logged in

            this.profilepic = localStorage.getItem('profile_image_path');
            localStorage.getItem('selectedL');
            this.sidemenufn();

            if (localStorage.getItem('currenturl').toString().split('/')[1] == null || localStorage.getItem('currenturl').toString().split('/')[1] == '') {
              this.router.navigateByUrl('tablinks');
            } else {
              this.router.navigateByUrl(localStorage.getItem('currenturl').toString().split('/')[1], {
                replaceUrl: true
              });
            }
          } else {
            this.router.navigateByUrl('tablinks');
            this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
            this.todaysDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
            this.sideMenuNames = false;
            this.translateConfigService.setLanguage(this.selectedLanguage);
            localStorage.setItem('selectedL', this.selectedLanguage);
            this.translate.setDefaultLang(this.selectedLanguage);
            this.translate.use(this.selectedLanguage);
          }
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.createDB();

            _this2.getuniqueDeviceID(); // this.getID_UID('UUID');


            if (_this2.platform.is('android')) {
              _this2.statusBar.backgroundColorByHexString('#f1f1f1'); // this.statusBar.backgroundColorByHexString('#ffffff');

            }

            setTimeout(function () {
              _this2.splashScreen.hide();
            }, 100);
          });
        }
      }, {
        key: "initializeBackButtonCustomHandler",
        value: function initializeBackButtonCustomHandler() {
          var _this3 = this;

          //alert('currenturl :-'+localStorage.getItem('currenturl') +'--backedurl' +localStorage.getItem('currenturl'));
          this.platform.backButton.subscribeWithPriority(999990, function () {
            if (localStorage.getItem('currenturl') == '/') {
              navigator['app'].exitApp();
            }

            if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
              navigator['app'].exitApp();
            }

            if (localStorage.getItem('bckbtnpage').toString().split('/')[1] == 'app-home') {
              navigator['app'].exitApp();
            } else {
              _this3.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);
            }
          });
        }
      }, {
        key: "getuniqueDeviceID",
        value: function getuniqueDeviceID() {
          var _this4 = this;

          this.uniqueDeviceID.get().then(function (uuid) {
            _this4.deviceid = uuid;
            _this4.permissiongranted = true;
            console.log('uuid of getuniqueDeviceID', uuid);
          })["catch"](function (error) {
            _this4.permissionFun(error);

            _this4.permissiongranted = false;
          });
          console.log('this.deviceid getuniqueDeviceID::-' + this.deviceid);
        }
      }, {
        key: "getID_UID",
        value: function getID_UID(type) {
          // if(type == "IMEI"){
          //   return this.uid.IMEI;
          // }else if(type == "ICCID"){
          //   return this.uid.ICCID;
          // }else if(type == "IMSI"){
          //         return this.uid.IMSI;
          // }else if(type == "MAC"){
          //   console.log('this.uid.MAC :-' + this.uid.MAC);
          //   return this.uid.MAC;
          // }else 
          if (type == "UUID") {
            console.log('this.uid.UUID :-' + this.uid.UUID);
            this.uuiddeviceid = this.uid.UUID;
            return this.uid.UUID;
          }
        }
      }, {
        key: "permissionFun",
        value: function permissionFun(error) {
          var _this5 = this;

          this.permissonArray.push(error);

          if (this.permissonArray.length > 1) {
            this.translate.use(this.selectedLanguage);
            this.translate.get('Jawata needs permission to your Phone storage. To allow permission go to the  app permissions in your device setting').subscribe(function (res) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var temp, temp1, alert;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        // alert(res);
                        temp = this.langTransalate(res);
                        temp1 = this.langTransalate("OK");
                        _context.next = 4;
                        return this.alertCtrl.create({
                          message: temp,
                          buttons: [{
                            text: temp1
                          }]
                        });

                      case 4:
                        alert = _context.sent;
                        alert.present();

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }
      }, {
        key: "languageChanged",
        value: function languageChanged(value) {
          this.locale = "";
          this.locale = value;
          localStorage.setItem('language', this.locale); // set user selected language as default

          localStorage.setItem('selectedL', this.selectedLanguage);
          this.translateConfigService.setLanguage(this.selectedLanguage);
        }
      }, {
        key: "CameraActionSheet",
        value: function CameraActionSheet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var profilephoto, varcam, vargall, varcancel, actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    profilephoto = '';
                    varcam = '';
                    vargall = '';
                    varcancel = '';
                    this.translate.get('Profile photo').subscribe(function (res) {
                      profilephoto = res;
                    });
                    this.translate.get('Camera').subscribe(function (res) {
                      varcam = res;
                    });
                    this.translate.get('Gallery').subscribe(function (res) {
                      vargall = res;
                    });
                    this.translate.get('Cancel').subscribe(function (res) {
                      varcancel = res;
                    });
                    console.log('CameraActionSheet() Choose an image from:' + profilephoto);
                    _context2.next = 11;
                    return this.actionSheetCtrl.create({
                      header: profilephoto + "",
                      // backdropDismiss:true,
                      //enableBackdropDismiss:true,
                      buttons: [{
                        text: vargall + "",
                        icon: 'image',
                        handler: function handler() {
                          _this6.pickprofilepic(_this6.camera.PictureSourceType.PHOTOLIBRARY);

                          actionSheet.onDidDismiss();
                        }
                      }, {
                        text: varcam.toString(),
                        icon: 'camera',
                        handler: function handler() {
                          _this6.pickprofilepic(_this6.camera.PictureSourceType.CAMERA); // actionSheet.dismiss();
                          //return false;

                        }
                      }, {
                        text: varcancel.toString(),
                        role: 'cancel',
                        icon: 'close-circle',
                        handler: function handler() {
                          console.log('Clicked on Cancel ');
                        }
                      }]
                    });

                  case 11:
                    actionSheet = _context2.sent;
                    _context2.next = 14;
                    return actionSheet.present();

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "pickprofilepic",
        value: function pickprofilepic(sourcetype) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this7 = this;

            var options;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    options = {
                      quality: 100,
                      sourceType: sourcetype,
                      destinationType: this.camera.DestinationType.DATA_URL,
                      encodingType: this.camera.EncodingType.JPEG,
                      mediaType: this.camera.MediaType.PICTURE,
                      correctOrientation: true
                    };
                    this.camera.getPicture(options).then(function (imageData) {
                      // imageData is either a base64 encoded string or a file URI
                      // If it's base64 (DATA_URL):
                      var base64Image = 'data:image/jpeg;base64,' + imageData; // console.log('base64Image' + base64Image);

                      /** image save on server call API and set image */

                      var forrmdata = {
                        'image': base64Image,
                        'userId': localStorage.getItem('userId')
                      };
                      var headers = {
                        'Content-Type': 'application/json'
                      };
                      console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/api/upload_image"), forrmdata);

                      _this7.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/api/upload_image"), forrmdata, headers).then(function (data) {
                        console.log('Image save API response :-' + JSON.stringify(data));
                        _this7.profilepic = base64Image; //localStorage.setItem('actionctrl', 'true');
                      })["catch"](function (error) {
                        console.log(" Error Here to save image API :-!" + JSON.stringify(error));
                      });
                    }, function (err) {// Handle error
                    }); //return false;

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "sidemenufn",
        value: function sidemenufn() {
          var _this8 = this;

          this.sideMenuPages = [];
          this.translate.use(this.selectedLanguage); // this.translate.get('Dashboard').subscribe((res: string) => {
          //   this.sideMenuPages.push({ title: res, url: '/dashboard', icon: 'card', page: 'dashboard' });
          // });
          // this.translate.get('Check-In').subscribe((res1: string) => {
          //   this.sideMenuPages.push({ title: res1, url: '/subjects', icon: 'book', page: 'subjects' });
          // });

          this.translate.get('Check-In').subscribe(function (res2) {
            _this8.sideMenuPages.push({
              title: res2,
              url: '/tablinks',
              icon: 'contacts',
              page: 'tablinks'
            });
          });
          this.translate.get('Attendance Sheet').subscribe(function (res1) {
            _this8.sideMenuPages.push({
              title: res1,
              url: '/subjects',
              icon: 'book',
              page: 'subjects'
            });
          });
          this.translate.get('My profile').subscribe(function (res6) {
            _this8.sideMenuPages.push({
              title: res6,
              url: '/profile',
              icon: 'contact',
              page: 'profile'
            });
          }); // this.translate.get('Resources with ID access').subscribe((res3: string) => {
          //   this.sideMenuPages.push({ title: res3, url: '/sso', icon: 'contacts', page: 'contacts' });
          // });
          // this.translate.get('Test Submission').subscribe((res5: string) => {
          //   this.sideMenuPages.push({ title: res5, url: '/test-sessions', icon: 'book', page: 'testSession' });
          // });
          // this.translate.get('Contact customer support').subscribe((res6: string) => {
          //   this.sideMenuPages.push({ title: res6, url: '/feedback', icon: 'create', page: 'feedback' });
          // });
          // this.translate.get('Activity Log').subscribe((res4: string) => {
          //   this.sideMenuPages.push({ title: res4, url: '/audit-trail', icon: 'pulse', page: 'audit-trail' });
          // });
          // this.translate.get('QR-Code').subscribe((res7: string) => {
          //   this.sideMenuPages.push({ title: res7, url: '/QR-code', icon: 'barcode', page: 'QR-Code' });
          // });

          this.translate.get('Logout').subscribe(function (res8) {
            _this8.sideMenuPages.push({
              title: res8,
              url: '/logout',
              icon: 'log-out',
              page: 'logout'
            });
          });
        }
      }, {
        key: "sidemenufn1",
        value: function sidemenufn1(profilelang1) {
          var _this9 = this;

          this.sideMenuPages = [];
          this.translate.use(profilelang1); // this.translate.get('Dashboard').subscribe((res: string) => {
          //   this.sideMenuPages.push({ title: res, url: '/dashboard', icon: 'card', page: 'dashboard' });
          // });

          this.translate.get('Check-In').subscribe(function (res2) {
            _this9.sideMenuPages.push({
              title: res2,
              url: '/tablinks',
              icon: 'contacts',
              page: 'tablinks'
            });
          });
          this.translate.get('Attendance Sheet').subscribe(function (res1) {
            _this9.sideMenuPages.push({
              title: res1,
              url: '/subjects',
              icon: 'book',
              page: 'subjects'
            });
          });
          this.translate.get('My profile').subscribe(function (res6) {
            _this9.sideMenuPages.push({
              title: res6,
              url: '/profile',
              icon: 'contact',
              page: 'profile'
            });
          }); // this.translate.get('Attendance').subscribe((res2: string) => {
          //   this.sideMenuPages.push({ title: res2, url: '/resource-link', icon: 'contacts', page: 'resource-link' });
          // });
          // this.translate.get('Resources with ID access').subscribe((res3: string) => {
          //   this.sideMenuPages.push({ title: res3, url: '/sso', icon: 'contacts', page: 'contacts' });
          // });
          // this.translate.get('Test Submission').subscribe((res5: string) => {
          //   this.sideMenuPages.push({ title: res5, url: '/test-sessions', icon: 'book', page: 'testSession' });
          // });
          // this.translate.get('Contact customer support').subscribe((res6: string) => {
          //   this.sideMenuPages.push({ title: res6, url: '/feedback', icon: 'create', page: 'feedback' });
          // });
          // this.translate.get('Activity Log').subscribe((res4: string) => {
          //   this.sideMenuPages.push({ title: res4, url: '/audit-trail', icon: 'pulse', page: 'audit-trail' });
          // });
          // this.translate.get('My profile').subscribe((res6: string) => {
          //   this.sideMenuPages.push({ title: res6, url: '/profile', icon: 'contact', page: 'profile' });
          // });
          // this.translate.get('QR-Code').subscribe((res7: string) => {
          //   this.sideMenuPages.push({ title: res7, url: '/QR-code', icon: 'barcode', page: 'QR-Code' });
          // });

          this.translate.get('Logout').subscribe(function (res8) {
            _this9.sideMenuPages.push({
              title: res8,
              url: '/logout',
              icon: 'log-out',
              page: 'logout'
            });
          });
        }
      }, {
        key: "onClickLogin",
        value: function onClickLogin() {
          var _this10 = this;

          this.isSubmitted = true;

          if (!this.loginForm.valid) {
            return false;
          } else {
            /*Web API Code start Here**/
            // this.sidemenufn();
            // this.loginService.login(this.userIdVar, this.passwordVar, '100').subscribe(data => {
            //   this.dataList = data;
            //   console.log("this.dataList  is ==", this.dataList);
            //   if (!this.dataList.length && this.userIdVar != "" && this.passwordVar != "") {
            //     alert('Username Or Password Is Incorrect !')
            //   }
            //   //  Set Temporary data for localStorage 
            //   localStorage.setItem('userType', this.dataList[0]['userType'])
            //   localStorage.setItem('token', this.dataList[0]['token'])
            //   localStorage.setItem('userName', this.dataList[0]['firstname'] + ' ' + this.dataList[0]['lastname'])
            //   localStorage.setItem('email', this.dataList[0]['email'])
            //   localStorage.setItem('class_id', this.dataList[0]['class_id'])
            //   localStorage.setItem('userId', this.dataList[0]['userId'])
            //   for (var i = 0; i < this.dataList.length; i++) {
            //     if (this.dataList[i]['username'] = this.userIdVar) {
            //       if (this.setData == true) {
            //         console.log("Set Data !");
            //         this.checked = true;
            //         localStorage.setItem('USERNAME', this.userIdVar);
            //         localStorage.setItem('PASSWORD', this.passwordVar);
            //       } else if (this.setData == false) {
            //         console.log("Remove Data !");
            //         localStorage.removeItem('USERNAME');
            //         localStorage.removeItem('PASSWORD');
            //       }
            //       this.submitted = false
            //       this.showLoginForm = false;
            //       this.sideMenuNames = true;
            //       this.userDetails = [
            //         {
            //           title: localStorage.getItem('userName'),
            //           emailid: localStorage.getItem('email'),
            //           icon: 'contact'
            //         },
            //       ]
            //       //Router navigate to dashboard
            //       this.router.navigateByUrl('dashboard');
            //     }
            //   }
            // },
            //   error => {
            //     console.log('error');
            //   });

            /**For Web API Code End Here ! */
            // Check Network Type Here
            if (this.network.type != 'none') {
              if (this.deviceid == null || this.deviceid == undefined) {
                this.platform.ready().then(function () {
                  _this10.getuniqueDeviceID();
                });
              } //     this.getID_UID('UUID');
              //     localStorage.setItem('USERNAME', this.userIdVar);
              //     localStorage.setItem('PASSWORD', this.passwordVar);
              //     if (this.permissiongranted) {
              //       // alert('Permission Granted Please Restart App!');
              //       this.translate.use(this.selectedLanguage);
              //       this.translate.get('Permission Granted Please Restart App!').subscribe(async (res: string) => {
              //         var temp=this.langTransalate(res)
              //         var temp1=this.langTransalate("OK")
              //         let alert = await this.alertCtrl.create({
              //           message: temp,
              //           buttons: [{
              //             text: temp1,
              //           }]
              //         });
              //         alert.present();
              //       });
              //       window.location.reload(true);
              //     }
              //   });
              // }
              else {
                  var data = {
                    'email': this.userIdVar,
                    'password': this.passwordVar,
                    'deviceid': this.deviceid //this.uuiddeviceid

                  };
                  var headers = {
                    'Content-Type': 'application/json'
                  };
                  console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/api/applogin"), JSON.stringify(data)); //alert('UUID' + JSON.stringify(data));

                  this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/api/applogin"), data, headers).then(function (res) {
                    // alert('in api call' + res.data);
                    _this10.dataList = [];
                    _this10.dataList = JSON.parse(res.data);
                    console.log('this.dataList :-' + JSON.stringify(_this10.dataList));
                    console.log('this.dataList.message :-' + _this10.dataList.message); // if(this.dataList.message != 'undefined') {
                    //   this.translate.use(this.selectedLanguage);
                    //   this.translate.get('Please enter the correct Email/Citizen ID or Password').subscribe((res: string) => {
                    //     alert(res);
                    //   });
                    // }

                    if (_this10.dataList.message == 'please enter correct user name/password') {
                      _this10.translate.use(_this10.selectedLanguage);

                      _this10.translate.get('Please enter the correct Email/Citizen ID or Password').subscribe(function (res) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var temp, temp1, alert;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  temp = this.langTransalate(res);
                                  temp1 = this.langTransalate("OK");
                                  _context4.next = 4;
                                  return this.alertCtrl.create({
                                    message: temp,
                                    buttons: [{
                                      text: temp1
                                    }]
                                  });

                                case 4:
                                  alert = _context4.sent;
                                  alert.present();

                                case 6:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });
                    } else if (_this10.dataList.message == 'please enter correct password') {
                      _this10.translate.use(_this10.selectedLanguage);

                      _this10.translate.get('Please enter the correct Email/Citizen ID or Password').subscribe(function (res) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var temp, temp1, alert;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  //  alert(res);
                                  temp = this.langTransalate(res);
                                  temp1 = this.langTransalate("OK");
                                  _context5.next = 4;
                                  return this.alertCtrl.create({
                                    message: temp,
                                    buttons: [{
                                      text: temp1
                                    }]
                                  });

                                case 4:
                                  alert = _context5.sent;
                                  alert.present();

                                case 6:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      });
                    } else {
                      _this10.permissonArray = []; // alert('this.dataList[0][userType] :- ' + this.dataList[0]['userType']);
                      // alert('this.dataList.length' + this.dataList.length);
                      //&& this.dataList[0]['userType'].trim() == 'Entity Director'

                      if (_this10.userIdVar != "" && _this10.passwordVar != "" && _this10.dataList.length != undefined && _this10.dataList[0]['userType'] != 'Administrator' && (_this10.dataList[0]['userType'] == 'Manager' || _this10.dataList[0]['userType'] == 'Entity Director')) {
                        //Account deactivated then display message 
                        if (_this10.dataList[0]['message'] == 'account_deactivate') {
                          _this10.translate.use(_this10.selectedLanguage);

                          _this10.translate.get('Your account has been deactivated please contact to the Jawata Team').subscribe(function (res) {
                            alert(res);

                            _this10.databaseObj.executeSql("SELECT * FROM " + _this10.table_name, []).then(function (res) {
                              // alert("res is :-" + JSON.stringify(res));
                              _this10.row_data = [];

                              for (var i = 0; i < res.rows.length; i++) {
                                _this10.row_data.push(res.rows.item(i));
                              }
                              /**Rows Delete Here */


                              for (var i = 0; i < _this10.row_data.length; i++) {
                                // alert("this.userIdVar :-" + this.userIdVar);
                                if (_this10.row_data[i]['email'] == _this10.userIdVar) {
                                  _this10.databaseObj.executeSql("DELETE FROM ".concat(_this10.table_name, " WHERE email = ").concat(_this10.row_data[i]['email']), []).then(function (res) {// alert("Row Deleted :-" + JSON.stringify(res));
                                  })["catch"](function (e) {// alert("error to delete rows " + JSON.stringify(e))
                                  });
                                }
                              }
                            })["catch"](function (e) {// alert("Error Is to get Rows:- " + JSON.stringify(e))
                            });
                          });
                        } else {
                          // check profile lang and set , if null then user selected/default lang will set
                          if (_this10.dataList[0]['language'] != null) {
                            _this10.lang = _this10.dataList[0]['language']; //'english';

                            _this10.profilelang = 'en';

                            if (_this10.lang.toString() == 'hindi') {
                              _this10.profilelang = 'hi';
                              _this10.selectedLanguage = _this10.profilelang;

                              _this10.translate.use(_this10.profilelang);

                              _this10.languageChanged(_this10.profilelang);

                              _this10.selectedLanguage = _this10.profilelang;

                              _this10.translateConfigService.setLanguage(_this10.profilelang);

                              localStorage.setItem('selectedL', _this10.profilelang);

                              _this10.translate.setDefaultLang(_this10.profilelang);

                              _this10.sidemenufn1(_this10.profilelang);
                            } else if (_this10.lang == 'french') {
                              _this10.profilelang = 'fr';
                              _this10.selectedLanguage = _this10.profilelang;

                              _this10.translate.use(_this10.profilelang);

                              _this10.languageChanged(_this10.profilelang);

                              _this10.selectedLanguage = _this10.profilelang;

                              _this10.translateConfigService.setLanguage(_this10.profilelang);

                              localStorage.setItem('selectedL', _this10.profilelang);

                              _this10.translate.setDefaultLang(_this10.profilelang);

                              _this10.sidemenufn1(_this10.profilelang);
                            } else if (_this10.lang == 'spanish') {
                              _this10.profilelang = 'es';
                              _this10.selectedLanguage = _this10.profilelang;

                              _this10.translate.use(_this10.profilelang);

                              _this10.languageChanged(_this10.profilelang);

                              _this10.selectedLanguage = _this10.profilelang;

                              _this10.translateConfigService.setLanguage(_this10.profilelang);

                              localStorage.setItem('selectedL', _this10.profilelang);

                              _this10.translate.setDefaultLang(_this10.profilelang);

                              _this10.sidemenufn1(_this10.profilelang);
                            } else if (_this10.lang == 'german') {
                              _this10.profilelang = 'de';
                              _this10.selectedLanguage = _this10.profilelang;

                              _this10.translate.use(_this10.profilelang);

                              _this10.languageChanged(_this10.profilelang);

                              _this10.selectedLanguage = _this10.profilelang;

                              _this10.translateConfigService.setLanguage(_this10.profilelang);

                              localStorage.setItem('selectedL', _this10.profilelang);

                              _this10.translate.setDefaultLang(_this10.profilelang);

                              _this10.sidemenufn1(_this10.profilelang);
                            } else {
                              _this10.profilelang = 'en';
                              _this10.selectedLanguage = _this10.profilelang;

                              _this10.translate.use(_this10.profilelang);

                              _this10.languageChanged(_this10.profilelang);

                              _this10.selectedLanguage = _this10.profilelang;

                              _this10.translateConfigService.setLanguage(_this10.profilelang);

                              localStorage.setItem('selectedL', _this10.profilelang);

                              _this10.translate.setDefaultLang(_this10.profilelang);

                              _this10.sidemenufn1(_this10.profilelang);
                            }
                          } else {
                            localStorage.setItem('selectedL', _this10.selectedLanguage);

                            _this10.sidemenufn();
                          }
                          /**Set Data to localStorage for Remember Me functionality */


                          if (_this10.setData == true) {
                            _this10.checked = true;
                            localStorage.setItem('remembermechecked', 'true');
                            localStorage.setItem('USERNAME', _this10.userIdVar);
                            localStorage.setItem('PASSWORD', _this10.passwordVar);
                            localStorage.setItem('profile_image_path', _this10.dataList[0]['profile_image_path']);
                            _this10.profilepic = _this10.dataList[0]['profile_image_path'];
                          } else if (_this10.setData == false) {
                            localStorage.setItem('remembermechecked', 'false');
                            localStorage.removeItem('USERNAME');
                            localStorage.removeItem('PASSWORD');
                            localStorage.removeItem('profile_image_path');
                          }

                          console.log('after language select..');
                          /** Check classid is not null/0/blank  for actor */

                          if (_this10.dataList[0]['userType'] == 'Manager' || _this10.dataList[0]['userType'] == 'Entity Director') {
                            localStorage.setItem('citizen_id', _this10.dataList[0]['citizen_id']);
                            /** Set localStorage data in storeData function */

                            _this10.storeData(_this10.dataList);
                          } //  else if (this.dataList[0]['userType'] == "Actor's Parent") {
                          //   /** Set localStorage data in storeData function */
                          //   this.storeData(this.dataList);
                          // }

                        }
                      } else {
                        // logged in as admin/manager show alert message and Clear username and password
                        if (_this10.userIdVar != "" && _this10.passwordVar != "") {
                          _this10.translate.use(_this10.selectedLanguage);

                          _this10.translate.get('Invalid Username for Manager /Entity Director').subscribe(function (res) {
                            alert(res);
                          });
                        }
                      }
                    } // please enter correct pwd

                  })["catch"](function (error) {// alert("Login Error !" + JSON.stringify(error));
                  });
                }
            } else if (this.network.type == 'none' && this.userIdVar != "" && this.passwordVar != "") {
              this.databaseObj.executeSql("SELECT * FROM " + this.table_name, []).then(function (res) {
                console.log('offline' + JSON.stringify(res) + 'length' + res.rows.length);

                if (res.rows.length == 0) {
                  _this10.translate.use(_this10.selectedLanguage);

                  _this10.translate.get('This user not exist in offline database, Please connect internet connection').subscribe(function (res) {
                    alert(res);
                    _this10.Flag = false;
                  });
                }

                _this10.row_data = [];

                if (res.rows.length > 0) {
                  for (var i = 0; i < res.rows.length; i++) {
                    _this10.row_data.push(res.rows.item(i));
                  } // alert("this.row_data.length :-" + this.row_data.length);


                  for (var i = 0; i < _this10.row_data.length; i++) {
                    if (_this10.row_data[i]['userIdVar'] == _this10.userIdVar && _this10.row_data[i]['passwordVar'] == _this10.passwordVar) {
                      _this10.validCrdendtialFlag = false;
                      _this10.Flag = false;
                      localStorage.setItem('userType', _this10.row_data[i]['usertype']);
                      localStorage.setItem('token', _this10.row_data[i]['token']);
                      localStorage.setItem('userName', _this10.row_data[i]['userFLName']);
                      localStorage.setItem('email', _this10.row_data[i]['email']); //localStorage.setItem('class_id', this.row_data[i]['class_id']);

                      localStorage.setItem('userId', _this10.row_data[i]['userid']);
                      localStorage.setItem('username', _this10.row_data[i]['username']);
                      localStorage.setItem('selectedL', _this10.row_data[i]['language']);
                      localStorage.setItem('citizen_id', _this10.row_data[i]['citizen_id']);
                      localStorage.setItem('filename', _this10.row_data[i]['filename']);
                      var newBaseFilesystemPath = _this10.file.externalRootDirectory + 'Documents/Jawata/' + localStorage.getItem('userName') + '/';
                      var storedPhoto = newBaseFilesystemPath + _this10.row_data[i]['filename'];

                      var displayImage = _this10.webview.convertFileSrc(storedPhoto);

                      console.log('displayImage' + displayImage);
                      localStorage.setItem('profile_image_path', displayImage);
                      _this10.profilepic = displayImage;
                      console.log('this.profilepic offline 1 :-' + _this10.profilepic);
                      localStorage.setItem('loggedinflag', 'true');
                      localStorage.setItem('notificationFlag', 'true');
                      _this10.showLoginForm = false;
                      _this10.sideMenuNames = true;

                      _this10.sidemenufn();

                      _this10.translate.use(_this10.selectedLanguage);

                      _this10.translate.get(localStorage.getItem('userType')).subscribe(function (res) {
                        _this10.userType = "";
                        _this10.userType = res;
                        /**Set Data to localStorage for Remember Me functionality */

                        if (_this10.setData == true) {
                          _this10.checked = true;
                          localStorage.setItem('remembermechecked', 'true');
                          localStorage.setItem('USERNAME', _this10.userIdVar);
                          localStorage.setItem('PASSWORD', _this10.passwordVar);
                        } else if (_this10.setData == false) {
                          localStorage.setItem('remembermechecked', 'false');
                          localStorage.removeItem('USERNAME');
                          localStorage.removeItem('PASSWORD');
                        }

                        _this10.userDetails = [];
                        _this10.userDetails = [{
                          title: localStorage.getItem('userName'),
                          emailid: _this10.userType,
                          icon: 'camera' //localStorage.getItem('profile_image_path') //'contact'

                        }];
                      }); //this.router.navigateByUrl('dashboard');


                      _this10.router.navigateByUrl('tablinks');
                    } else if (_this10.Flag != false) {
                      _this10.validCrdendtialFlag = true;
                    }
                  }

                  if (_this10.validCrdendtialFlag == true) {
                    _this10.translate.use(_this10.selectedLanguage);

                    _this10.translate.get('Invalid Username for Actor/Actor parent OR This user not exist in offline database').subscribe(function (res) {
                      _this10.Flag = true;
                      alert(res);
                      _this10.validCrdendtialFlag = false;
                    });
                  }
                }
              })["catch"](function (e) {// alert("Error Is to get Rows:- " + JSON.stringify(e))
              });
            }
          }
        }
      }, {
        key: "storeData",
        value: function storeData(dataList) {
          var _this11 = this;

          // alert("dataList :-" + JSON.stringify(dataList));
          localStorage.setItem('userType', dataList[0]['userType']);
          localStorage.setItem('token', dataList[0]['token']);
          localStorage.setItem('userName', dataList[0]['firstname'] + ' ' + dataList[0]['lastname']);
          localStorage.setItem('email', dataList[0]['email']); //localStorage.setItem('class_id', dataList[0]['class_id'])

          localStorage.setItem('userId', dataList[0]['userId']);
          localStorage.setItem('username', dataList[0]['username']);
          localStorage.setItem('citizen_id', dataList[0]['citizen_id']);
          localStorage.setItem('filename', dataList[0]['profile_image']);
          localStorage.setItem('userIdVar', this.userIdVar);
          localStorage.setItem('passwordVar', this.passwordVar);
          localStorage.setItem('loggedinflag', 'true');
          localStorage.setItem('notificationFlag', 'true');
          this.showLoginForm = false;
          this.sideMenuNames = true;
          this.translate.use(this.selectedLanguage);
          this.translate.get(localStorage.getItem('userType')).subscribe(function (res) {
            _this11.userType = "";
            _this11.userType = res;
            _this11.userDetails = [];
            _this11.userDetails = [{
              title: localStorage.getItem('userName'),
              emailid: _this11.userType,
              icon: 'camera' //'contact'

            }];
          }); //this.Imagepathcallfromserver();

          /**Row Inserted Here for Offline App */

          this.insertRow();
          /**Router Nevigate to Dashboard */
          // this.router.navigateByUrl('dashboard');

          this.router.navigateByUrl('tablinks');
        }
      }, {
        key: "onClickRememberMe",
        value: function onClickRememberMe(value) {
          this.setData = false;

          if (value == true) {
            this.setData = true;
            localStorage.setItem('remembermechecked', 'true');
          } else {
            this.setData = false;
            localStorage.setItem('remembermechecked', 'false');
          } //console.log('onClickRememberMe'+ this.setData);

        }
      }, {
        key: "onChangeDate",
        value: function onChangeDate(value) {
          this.birthDate = "";
          this.birthDate = this.datePipe.transform(value, 'yyyy-MM-dd');
        }
      }, {
        key: "onClickForgotPasword",
        value: function onClickForgotPasword() {
          this.forgotPassForm = true;
          this.showLoginForm = false;
          this.sideMenuNames = false;
          this.isSubmitted = false;
        }
      }, {
        key: "cancelForgotPassword",
        value: function cancelForgotPassword() {
          this.isSubmitted = false;
          this.forgotPassForm = false;
          this.showLoginForm = true;
          this.emailID = "";
        }
      }, {
        key: "SubmitForgotPassDetails",
        value: function SubmitForgotPassDetails() {
          var _this12 = this;

          if (this.network.type == 'none') {
            this.translate.use(this.selectedLanguage);
            this.translate.get('Before click to submit,please connect internet connection').subscribe(function (res) {
              alert(res);
            });
          } else {
            this.isSubmitted = true;

            if (!this.forgotPassword.valid) {
              return false;
            } else {
              if (this.emailID != "") {
                this.showLoader();
                var data = {
                  'email': this.emailID,
                  'dob': this.datePipe.transform(this.birthDate, 'yyyy-MM-dd'),
                  'locale': this.selectedLanguage,
                  'tmpurl': "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl)
                };
                var headers = {
                  'Content-Type': 'application/json'
                };
                console.log('this.selectedLanguage' + this.selectedLanguage + "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/api/forgot_password"), JSON.stringify(data));
                this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl, "/api/forgot_password"), data, headers).then(function (res) {
                  _this12.forgotPassArr = [];
                  _this12.forgotPassArr = JSON.parse(res.data);

                  _this12.dismissLodader();

                  if (_this12.forgotPassArr.message == 'An email has been sent to the entered Email ID') {
                    _this12.translate.use(_this12.selectedLanguage);

                    _this12.translate.get('An email has been sent to the entered Email ID').subscribe(function (res) {
                      alert(res);
                    });
                  } else if (_this12.forgotPassArr.message == 'This email or date of birth is incorrect') {
                    _this12.translate.use(_this12.selectedLanguage);

                    _this12.translate.get('This email or date of birth is incorrect').subscribe(function (res) {
                      alert(res);
                    });
                  }

                  _this12.forgotPassForm = true;
                  _this12.showLoginForm = false;
                  _this12.sideMenuNames = false;

                  if (_this12.forgotPassArr.message == 'An email has been sent to the entered Email ID') {
                    window.location.reload(true);
                    _this12.forgotPassForm = false;
                    _this12.showLoginForm = true;
                    _this12.sideMenuNames = true;
                    _this12.emailID = "";
                    _this12.birthDate = "";
                  } else {
                    window.location.reload(true);
                    _this12.forgotPassForm = true;
                    _this12.showLoginForm = false;
                    _this12.sideMenuNames = false;
                  }
                })["catch"](function (error) {
                  // alert("Error In Forgot Password !");
                  _this12.dismissLodader();
                });
              } else if (this.network.type == "none" && this.emailID != "") {
                this.translate.use(this.selectedLanguage);
                this.translate.get('Before to forgot password, Please connect internet connection').subscribe(function (res) {
                  alert(res);
                });
              }
            }
          }
        }
      }, {
        key: "showLoader",
        value: function showLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.translate.use(this.selectedLanguage);
                    this.translate.get('Loading').subscribe(function (res) {
                      _this13.loaderLanguage = "";
                      _this13.loaderLanguage = res;
                    });
                    _context6.next = 4;
                    return this.loadingController.create({
                      message: this.loaderLanguage + ' ....',
                      duration: 10000
                    }).then(function (a) {
                      a.present().then(function () {
                        console.log('presented');
                      });
                    });

                  case 4:
                    return _context6.abrupt("return", _context6.sent);

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "dismissLodader",
        value: function dismissLodader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.loadingController.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 2:
                    return _context7.abrupt("return", _context7.sent);

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "devicefiledir",
        value: function devicefiledir() {
          var _this14 = this;

          this.applicationStorageDirectory = cordova.file.applicationStorageDirectory;
          cordova.file.getFreeDiskSpace().then(function (data) {
            _this14.getFreeDiskSpace = data;
          });
        }
      }, {
        key: "deviceconnecttype",
        value: function deviceconnecttype() {
          var _this15 = this;

          var connectSubscription = this.network.onConnect().subscribe(function () {
            //alert('network connected! : -' + this.network.type);
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(function () {
              if (_this15.network.type === 'wifi') {
                console.log('we got a wifi connection, woohoo!: -' + _this15.network.type);
              }
            }, 3000);
          });
        }
      }, {
        key: "createDB",
        value: function createDB() {
          var _this16 = this;

          this.platform.ready().then(function () {
            _this16.sqlite.create({
              name: _this16.database_name,
              location: 'default'
            }).then(function (db) {
              _this16.databaseObj = db;

              _this16.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this16.table_name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT,userid INTEGER, username VARCHAR(255),token VARCHAR(255),userFLName VARCHAR(200), email VARCHAR(100),class_id INTEGER, usertype VARCHAR(200),language VARCHAR(100), userIdVar varchar(2), passwordVar varchar(2), filename varchar(2), citizen_id varchar(2))', []).then(function () {// alert('Database Created :-' + this.database_name);
                // alert('Table Created :-' + this.table_name);
              })["catch"](function (e) {// alert("Error SubjectDocs Table Created ! " + JSON.stringify(e))
              });
            })["catch"](function (e) {// alert("Error to Database Create ! " + JSON.stringify(e))
            });
          });
        }
      }, {
        key: "insertRow",
        value: function insertRow() {
          var _this17 = this;

          this.databaseObj.executeSql("SELECT * FROM " + this.table_name, []).then(function (res) {
            // alert("res is :-" + JSON.stringify(res));
            _this17.row_data = [];

            for (var i = 0; i < res.rows.length; i++) {
              _this17.row_data.push(res.rows.item(i));
            }

            if (_this17.network.type != 'none') {
              if (res.rows.length >= 0) {
                /**Rows Delete Here */
                for (var i = 0; i < _this17.row_data.length; i++) {
                  if (_this17.row_data[i]['userId'] == localStorage.getItem('userId')) {
                    _this17.databaseObj.executeSql("DELETE FROM ".concat(_this17.table_name, " WHERE userId = ").concat(_this17.row_data[i]['userId']), []).then(function (res) {// alert("Row Deleted :-" + JSON.stringify(res));
                    })["catch"](function (e) {// alert("error to delete rows " + JSON.stringify(e))
                    });
                  }
                }
                /**Inserting Rows Here */


                _this17.databaseObj.executeSql('INSERT INTO ' + _this17.table_name + '(userid , username ,token ,userFLName , email ,class_id, usertype,language, userIdVar, passwordVar,filename,citizen_id) VALUES ("' + localStorage.getItem('userId') + '","' + localStorage.getItem('username') + '","' + localStorage.getItem('token') + '","' + localStorage.getItem('userName') + '","' + localStorage.getItem('email') + '","' + localStorage.getItem('class_id') + '","' + localStorage.getItem('userType') + '","' + localStorage.getItem('selectedL') + '","' + localStorage.getItem('userIdVar') + '","' + localStorage.getItem('passwordVar') + '","' + localStorage.getItem('filename') + '","' + localStorage.getItem('citizen_id') + '")', []).then(function () {// alert('Row Inserted ....!' + this.table_name);
                })["catch"](function (e) {// alert("Error Is insert Rows:- " + JSON.stringify(e))
                });
              }
            }
          })["catch"](function (e) {// alert("Error Is to get Rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "langTransalate",
        value: function langTransalate(changeText) {
          var localChnageText = changeText;
          this.translate.use(this.selectedLanguage);
          this.translate.get(changeText).subscribe(function (res) {
            // this.heading = "";
            // this.heading = res;
            localChnageText = res;
          });
          console.log('localChnageText', localChnageText);
          return localChnageText;
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.loginForm.controls;
        }
      }, {
        key: "errorControl2",
        get: function get() {
          return this.forgotPassword.controls;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"]
      }, {
        type: _translate_config_service__WEBPACK_IMPORTED_MODULE_13__["TranslateConfigService"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_14__["SQLite"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"]
      }, {
        type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_18__["UniqueDeviceID"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_19__["AndroidPermissions"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"]
      }, {
        type: _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_20__["Uid"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_21__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _services_menu_service__WEBPACK_IMPORTED_MODULE_15__["MenuService"]
      }, {
        type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_22__["WebView"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"], _services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"], _translate_config_service__WEBPACK_IMPORTED_MODULE_13__["TranslateConfigService"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_14__["SQLite"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_18__["UniqueDeviceID"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_19__["AndroidPermissions"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"], _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_20__["Uid"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_21__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _services_menu_service__WEBPACK_IMPORTED_MODULE_15__["MenuService"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_22__["WebView"] //,public dashboardComponent:DashboardComponent
    ])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: LanguageLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageLoader", function () {
      return LanguageLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/network-interface/ngx */
    "./node_modules/@ionic-native/network-interface/ngx/index.js");
    /* harmony import */


    var _components_modal_modal_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/modal/modal.page */
    "./src/app/components/modal/modal.page.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _sidemenu_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./sidemenu/dashboard/dashboard.component */
    "./src/app/sidemenu/dashboard/dashboard.component.ts");
    /* harmony import */


    var _sidemenu_resource_link_resource_link_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./sidemenu/resource-link/resource-link.component */
    "./src/app/sidemenu/resource-link/resource-link.component.ts");
    /* harmony import */


    var _sidemenu_audit_trail_audit_trail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./sidemenu/audit-trail/audit-trail.component */
    "./src/app/sidemenu/audit-trail/audit-trail.component.ts");
    /* harmony import */


    var _sidemenu_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./sidemenu/feedback/feedback.component */
    "./src/app/sidemenu/feedback/feedback.component.ts");
    /* harmony import */


    var _sidemenu_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./sidemenu/profile/profile.component */
    "./src/app/sidemenu/profile/profile.component.ts");
    /* harmony import */


    var _sidemenu_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./sidemenu/subjects/subjects.component */
    "./src/app/sidemenu/subjects/subjects.component.ts");
    /* harmony import */


    var _sidemenu_sso_sso_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./sidemenu/sso/sso.component */
    "./src/app/sidemenu/sso/sso.component.ts");
    /* harmony import */


    var _sidemenu_logout_logout_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./sidemenu/logout/logout.component */
    "./src/app/sidemenu/logout/logout.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _translate_config_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./translate-config.service */
    "./src/app/translate-config.service.ts");
    /* harmony import */


    var _pipes_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./pipes/pipe */
    "./src/app/pipes/pipe.ts");
    /* harmony import */


    var _components_entitymodal_entitymodal_page__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/entitymodal/entitymodal.page */
    "./src/app/components/entitymodal/entitymodal.page.ts");
    /* harmony import */


    var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @ionic-native/unique-device-id/ngx */
    "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
    /* harmony import */


    var _pipes_htmlToPlaintext__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./pipes/htmlToPlaintext */
    "./src/app/pipes/htmlToPlaintext.ts");
    /* harmony import */


    var _sidemenu_test_sessions_test_sessions_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./sidemenu/test-sessions/test-sessions.component */
    "./src/app/sidemenu/test-sessions/test-sessions.component.ts");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _sidemenu_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./sidemenu/qr-code/qr-code.component */
    "./src/app/sidemenu/qr-code/qr-code.component.ts");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
    /* harmony import */


    var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @ionic-native/downloader/ngx */
    "./node_modules/@ionic-native/downloader/ngx/index.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/ngx/index.js");
    /* harmony import */


    var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @ionic-native/uid/ngx */
    "./node_modules/@ionic-native/uid/ngx/index.js");
    /* harmony import */


    var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ngx-qrcode2 */
    "./node_modules/ngx-qrcode2/fesm2015/ngx-qrcode2.js");
    /* harmony import */


    var _ionic_native_extended_device_information_ngx__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @ionic-native/extended-device-information/ngx */
    "./node_modules/@ionic-native/extended-device-information/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
    /* harmony import */


    var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @ionic-native/vibration/ngx */
    "./node_modules/@ionic-native/vibration/ngx/index.js");

    ; // import { ZXingScannerModule } from '@zxing/ngx-scanner';

    function LanguageLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_33__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_modal_modal_page__WEBPACK_IMPORTED_MODULE_21__["ModalPage"], _components_entitymodal_entitymodal_page__WEBPACK_IMPORTED_MODULE_36__["EntitymodalPage"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"], _sidemenu_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["DashboardComponent"], _sidemenu_audit_trail_audit_trail_component__WEBPACK_IMPORTED_MODULE_25__["AuditTrailComponent"], _sidemenu_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_26__["FeedbackComponent"], _sidemenu_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__["ProfileComponent"], _sidemenu_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_28__["SubjectsComponent"], _sidemenu_sso_sso_component__WEBPACK_IMPORTED_MODULE_29__["SsoComponent"], _sidemenu_resource_link_resource_link_component__WEBPACK_IMPORTED_MODULE_24__["ResourceLinkComponent"], _sidemenu_logout_logout_component__WEBPACK_IMPORTED_MODULE_30__["LogoutComponent"], _sidemenu_test_sessions_test_sessions_component__WEBPACK_IMPORTED_MODULE_39__["TestSessionsComponent"], _sidemenu_qr_code_qr_code_component__WEBPACK_IMPORTED_MODULE_41__["QRCodeComponent"], _pipes_pipe__WEBPACK_IMPORTED_MODULE_35__["Ng2DeepSearchPipe"], _pipes_htmlToPlaintext__WEBPACK_IMPORTED_MODULE_38__["HtmlToPlaintextPipe"]],
      entryComponents: [_components_modal_modal_page__WEBPACK_IMPORTED_MODULE_21__["ModalPage"], _components_entitymodal_entitymodal_page__WEBPACK_IMPORTED_MODULE_36__["EntitymodalPage"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_44__["FileUploadModule"], ngx_qrcode2__WEBPACK_IMPORTED_MODULE_47__["NgxQRCodeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__["TranslateLoader"],
          useFactory: LanguageLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClient"]]
        }
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeStorage"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_10__["SQLite"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__["LocalNotifications"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__["Network"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_16__["HTTP"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_18__["FileTransfer"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_19__["FileOpener"], _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_20__["NetworkInterface"], _translate_config_service__WEBPACK_IMPORTED_MODULE_34__["TranslateConfigService"], _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _sidemenu_audit_trail_audit_trail_component__WEBPACK_IMPORTED_MODULE_25__["AuditTrailComponent"], _sidemenu_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_26__["FeedbackComponent"], _sidemenu_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__["ProfileComponent"], _sidemenu_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_28__["SubjectsComponent"], _sidemenu_sso_sso_component__WEBPACK_IMPORTED_MODULE_29__["SsoComponent"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_37__["UniqueDeviceID"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_40__["AndroidPermissions"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_42__["BarcodeScanner"], _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_43__["Downloader"], // FileUploader,
      ng2_file_upload__WEBPACK_IMPORTED_MODULE_44__["FileUploadModule"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_45__["FilePath"], _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_46__["Uid"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_49__["Camera"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_50__["WebView"], _ionic_native_extended_device_information_ngx__WEBPACK_IMPORTED_MODULE_48__["ExtendedDeviceInformation"], _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_51__["Vibration"], // TablinksPageModule,
      {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/entitymodal/entitymodal.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/components/entitymodal/entitymodal.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEntitymodalEntitymodalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5bW9kYWwvZW50aXR5bW9kYWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/entitymodal/entitymodal.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/entitymodal/entitymodal.page.ts ***!
    \************************************************************/

  /*! exports provided: EntitymodalPage */

  /***/
  function srcAppComponentsEntitymodalEntitymodalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntitymodalPage", function () {
      return EntitymodalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/menu.service */
    "./src/app/services/menu.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/translate-config.service */
    "./src/app/translate-config.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");

    var EntitymodalPage = /*#__PURE__*/function () {
      function EntitymodalPage(popoverCtrl, modalCtrl, menuService, http, translateConfigService, sqlite, router, localNotifications, translate, network, platform) {
        _classCallCheck(this, EntitymodalPage);

        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.menuService = menuService;
        this.http = http;
        this.translateConfigService = translateConfigService;
        this.sqlite = sqlite;
        this.router = router;
        this.localNotifications = localNotifications;
        this.translate = translate;
        this.network = network;
        this.platform = platform;
        this.selectedLanguage = localStorage.getItem('selectedL');
        this.defaultEntity = '';
        this.row_data = [];
        this.actorList = [];
        this.notificationDetails = [];
        this.defaultActor = "";
        this.hideActorDropdown = false;
        this.name = '';
        this.defaultClass = "";
        this.isclassload = ""; // declare database name

        this.database_name = "Jawata_App.db";
        this.table_name = "tbluserentity";
        this.table_nameactor = "actorListTable";
        this.table_name_EntityList = "actorsParentEntity";
        this.table_classListActor = "classListActor";
        this.table_classListActorsParent = "classListActorsParent";
      }

      _createClass(EntitymodalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.platform.ready().then(function () {
            _this18.createDB();

            _this18.createDBClassList();

            _this18.isclassload = "false";
            _this18.defaultEntity = "";
            _this18.defaultEntity = localStorage.getItem('entityName');

            if (localStorage.getItem('userType') == "Actor's Parent") {
              _this18.createDBActorList();

              _this18.getActorName();

              _this18.hideActorDropdown = true;
            } else if (localStorage.getItem('userType') == "Manager") {
              _this18.getEntityName();
            }

            _this18.getEntityName();
          });
        }
      }, {
        key: "getActorName",
        value: function getActorName() {
          var _this19 = this;

          if (this.network.type != 'none') {
            var data = {
              'userId': localStorage.getItem('userId')
            };
            var headers = {
              'Content-Type': 'application/json'
            };
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/load_actor"), JSON.stringify(data));
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/load_actor"), data, headers).then(function (res) {
              _this19.actorList = [];
              _this19.actorList = JSON.parse(res.data);
              console.log('this.actorList', JSON.stringify(_this19.actorList));

              if (_this19.actorList.length == 0) {
                _this19.translate.use(_this19.selectedLanguage);

                _this19.translate.get('The Child is not assigned to this Account,Please contact to your Entity Manager').subscribe(function (res) {
                  alert(res);

                  _this19.popoverCtrl.dismiss();

                  localStorage.removeItem('loggedinflag');
                  window.location.reload(true);
                });
              } else {
                if (_this19.actorList.length > 0) {
                  if (_this19.actorList.length == 1) _this19.defaultActor = _this19.actorList[0]['name'];

                  if (_this19.defaultActor != '') {
                    _this19.getEntityName();
                  } //check for dupliate records and if not then insert the new user details in sqllite table


                  _this19.platform.ready().then(function () {
                    _this19.sqlite.create({
                      name: _this19.database_name,
                      location: 'default'
                    }).then(function (db) {
                      _this19.databaseObj = db;

                      _this19.databaseObj.executeSql("SELECT * FROM " + _this19.table_nameactor + " WHERE userid=?", [localStorage.getItem('userId')]).then(function (result) {
                        // alert('Actor Result result +' + result.rows.length + '-- userIdVar' + localStorage.getItem('userId'));
                        if (result.rows.length == 0) {
                          _this19.insertactor();
                        } else {
                          _this19.databaseObj.executeSql("DELETE FROM " + _this19.table_nameactor + " WHERE userid=?", [localStorage.getItem('userId')]).then(function (res) {
                            // alert('attorlist deleted...');
                            _this19.insertactor();
                          });
                        }
                      });
                    })["catch"](function (e) {//alert("Error to Database Create ! " + JSON.stringify(e))
                    });
                  });
                }
              }
            })["catch"](function (error) {// alert("getActorName Error Here !");
            });
          }
        }
      }, {
        key: "changeActor",
        value: function changeActor(value) {
          this.defaultActor = "";
          this.defaultActor = value.trim();

          for (var i = 0; i < this.actorList.length; i++) {
            if (value.trim() == this.actorList[i]['name']) {
              localStorage.setItem('actorId', this.actorList[i]['id']);
              localStorage.setItem('class_id', this.actorList[i]['class_id']);
              localStorage.setItem('actorName', this.actorList[i]['firstname']);
              this.getEntityName();
            }
          }
        }
      }, {
        key: "getEntityName",
        value: function getEntityName() {
          var _this20 = this;

          /**For Web API called Here */
          // this.menuService.getEntityData(localStorage.getItem('token'), localStorage.getItem('userId')).subscribe(data => {
          //   this.entityArr = [];
          //   this.entityArr = data; // data received by server
          //   console.log("this.entityArr is==", this.entityArr);
          //   // set default entity value here
          //   //this.defaultEntity = this.entityArr[0]['entity_name'];
          // });
          if (this.network.type != 'none') {
            if (localStorage.getItem('userType') == 'Manager' || localStorage.getItem('userType') == 'Entity Director') {
              var data = {
                'APuserId': 'null',
                'token': localStorage.getItem('token'),
                'userId': localStorage.getItem('userId')
              };
            } else if (localStorage.getItem('userType') == "Actor's Parent") {
              var data = {
                'APuserId': localStorage.getItem('userId'),
                'token': localStorage.getItem('token'),
                'userId': localStorage.getItem('actorId')
              };
            }

            var headers = {
              'Content-Type': 'application/json'
            };
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/entityPopup"), JSON.stringify(data));
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/entityPopup"), data, headers).then(function (res) {
              _this20.entityArr = [];
              _this20.entityArr = JSON.parse(res.data); // data received by server

              console.log('api/entityPopup :-' + JSON.stringify(_this20.entityArr));

              if (_this20.entityArr.length == 0) {
                _this20.translate.use(_this20.selectedLanguage);

                _this20.translate.get('Entity is not assigned to this account,please contact your Entity Manager').subscribe(function (res) {
                  alert(res);

                  _this20.popoverCtrl.dismiss();

                  window.location.reload(true);
                });
              } else {
                if (_this20.entityArr.length == 1) _this20.defaultEntity = _this20.entityArr[0]['name_town'];

                _this20.insertEntityList(); // if (this.defaultEntity != null) {
                //   this.getClass();
                // }

              }
              /**last loin actor automatic select entity */
              // alert('entityName' + localStorage.getItem('entityName')+'-'+ localStorage.getItem('entityId') +'==' + localStorage.getItem('lastloggedinentityId')+'-'+ localStorage.getItem('lastloggedinentityName'));
              //   if (localStorage.getItem('userType') == 'Actor') {
              //     if (localStorage.getItem('userId') == localStorage.getItem('lastloggedinuserid')) {
              //     this.defaultEntity = localStorage.getItem('lastloggedinentityName');
              //   }
              // }

            })["catch"](function (error) {
              console.log("getEntityName Error Here !" + JSON.stringify(error));
            });
          } else if (this.network.type == 'none') {
            this.getEntityActorsParent();
          }
        }
      }, {
        key: "getClass",
        value: function getClass() {
          var _this21 = this;

          console.log('getClass()' + localStorage.getItem('userType') + '/' + this.network.type);

          if (this.network.type != 'none') {
            this.platform.ready().then(function () {
              if (localStorage.getItem('userType') == 'Actor') {
                var data = {
                  'userid': localStorage.getItem('userId'),
                  'entityid': localStorage.getItem('entityId')
                };
              } else if (localStorage.getItem('userType') == "Actor's Parent") {
                var data = {
                  'userid': localStorage.getItem('actorId'),
                  'entityid': localStorage.getItem('entityId')
                };
              }

              var headers = {
                'Content-Type': 'application/json'
              };
              _this21.isclassload = 'true';
              console.log('this.isclassload:-' + _this21.isclassload + "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/loadClass"), JSON.stringify(data));

              _this21.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/loadClass"), data, headers).then(function (res) {
                _this21.classListArr = [];
                _this21.classListArr = JSON.parse(res.data);
                console.log("classListArr :-", JSON.stringify(_this21.classListArr));

                if (_this21.classListArr.length == 0) {
                  _this21.translate.use(_this21.selectedLanguage);

                  _this21.translate.get('Class is not assigned to this account,please contact your Entity Manager').subscribe(function (res) {
                    alert(res);

                    _this21.popoverCtrl.dismiss();

                    localStorage.removeItem('actorName');
                    localStorage.removeItem('entityName');
                    localStorage.removeItem('loggedinflag');
                    window.location.reload(true);
                  });
                }

                console.log('this.classListArr.length getClass():-' + _this21.classListArr.length);

                _this21.insertClass();

                if (_this21.classListArr.length == 1) _this21.defaultClass = _this21.classListArr[0]['ref_grade'];
              })["catch"](function (error) {// alert("getClassName Error Here !" + error);
              });
            });
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          console.log('oncancel actor :- ' + this.defaultActor + 'entity :-' + this.defaultEntity + ' class :- ' + this.defaultClass + ' --localStorage.getItem(userType)' + localStorage.getItem('userType'));

          if (localStorage.getItem('userType') == "Actor's Parent") {
            if (this.defaultActor != '' && this.defaultEntity != null && this.defaultClass != '') {
              this.popoverCtrl.dismiss();
            }
          } else {
            if (this.defaultEntity != null && this.defaultClass != '') {
              this.popoverCtrl.dismiss();
            }
          }
        }
      }, {
        key: "changeClass",
        value: function changeClass(value) {
          this.defaultClass = "";
          this.defaultClass = value.trim();

          for (var i = 0; i < this.classListArr.length; i++) {
            if (this.defaultClass == this.classListArr[i]['ref_grade']) {
              /**set classId to localStorage */
              localStorage.setItem('class_id', this.classListArr[i]['class_id']);
              localStorage.setItem('className', this.classListArr[i]['ref_grade']);
              /**Modal Popup Close Here */

              this.popoverCtrl.dismiss();
              /**App refreshing here */

              window.location.reload(true);
            }
          }
        }
      }, {
        key: "changeEntity",
        value: function changeEntity(value) {
          localStorage.removeItem('className');
          localStorage.removeItem('class_id'); //class_id    

          localStorage.removeItem('subject_id');
          localStorage.removeItem('subject_name'); //class_id   

          if (this.defaultEntity != value) {
            this.isclassload = 'false';
          }

          console.log('localStorage.getItem(class_id)' + localStorage.getItem('class_id'));
          this.defaultEntity = "";
          this.defaultEntity = value.trim();

          for (var i = 0; i < this.entityArr.length; i++) {
            if (this.defaultEntity == this.entityArr[i]['name_town']) {
              /**set entityId, entityName & entity_no to localStorage */
              localStorage.setItem('entityId', this.entityArr[i]['id']);
              localStorage.setItem('entityName', this.entityArr[i]['name_town']);
              localStorage.setItem('entity_no', this.entityArr[i]['entity_no']);
              /**Modal Popup Close Here */

              this.popoverCtrl.dismiss();

              if (this.network.type != "none") {
                /**Get API response class list here */
                //this.getClass();
              } else if (this.network.type == 'none') {
                /**Get offline stored class list here */
                this.getClassOffline();
              }
            }
          }
        }
      }, {
        key: "getActor",
        value: function getActor() {
          var _this22 = this;

          if (this.network.type != 'none') {
            if (localStorage.getItem('userType') == 'Actor') {
              var data = {
                'token': localStorage.getItem('token'),
                'userId': localStorage.getItem('userId')
              };
            } else if (localStorage.getItem('userType') == "Actor's Parent") {
              var data = {
                'token': localStorage.getItem('token'),
                'userId': localStorage.getItem('actorId')
              };
            }

            var headers = {
              'Content-Type': 'application/json'
            };
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/entityPopup"), JSON.stringify(data));
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/entityPopup"), data, headers).then(function (res) {
              _this22.entityArr = [];
              _this22.entityArr = JSON.parse(res.data); // data received by server

              if (_this22.entityArr.length == 0) {
                _this22.translate.use(_this22.selectedLanguage);

                _this22.translate.get('Entity is not assigned to this account,please contact your Entity Manager').subscribe(function (res) {
                  alert(res); // localStorage.clear();

                  _this22.popoverCtrl.dismiss();

                  window.location.reload(true);
                });
              }

              console.log('this.entityArr.length getActor() :-' + _this22.entityArr.length);
              if (_this22.entityArr.length == 0) _this22.defaultClass = _this22.entityArr[0]['ref_grade'];
            })["catch"](function (error) {// alert("getEntityName Error Here !" + error);
            });
          }
        }
        /**Offline App code start here */

      }, {
        key: "createDB",
        value: function createDB() {
          var _this23 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this23.databaseObj = db;

            _this23.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this23.table_name + ' (uniqueID INTEGER PRIMARY KEY AUTOINCREMENT, userid INTEGER, id INTEGER ,entity_name VARCHAR(200), name_town varchar(2),entity_no varchar(2))', []).then(function () {
              if (_this23.network.type == 'none' && localStorage.getItem('userType') == 'Actor') {
                _this23.getActorEntity();
              }
            })["catch"](function (e) {// alert("Error to table_name table Created" + JSON.stringify(e))
            });
          })["catch"](function (e) {// alert("Error to Database Create" + JSON.stringify(e))
          });
        }
      }, {
        key: "createDBActorList",
        value: function createDBActorList() {
          var _this24 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this24.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this24.table_nameactor + '(uniqueActorID INTEGER PRIMARY KEY AUTOINCREMENT, userid INTEGER, id INTEGER, firstname varchar(2), name varchar(2), type varchar(2), class_id varchar(2))', []).then(function () {
              if (_this24.network.type == 'none' && localStorage.getItem('userType') == "Actor's Parent") {
                _this24.getactor();
              }
            })["catch"](function (e) {// alert("Error to create table_nameactor Table" + JSON.stringify(e))
            });

            _this24.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this24.table_name_EntityList + ' (uniqueID INTEGER PRIMARY KEY AUTOINCREMENT, userid INTEGER, id INTEGER ,entity_name VARCHAR(200), name_town varchar(2), actorId varchar(2))', []).then(function () {})["catch"](function (e) {// alert("Error to create table_name_EntityList Table" + JSON.stringify(e))
            });
          })["catch"](function (e) {// alert("Error to Create ActorList database" + JSON.stringify(e))
          });
        }
      }, {
        key: "createDBClassList",
        value: function createDBClassList() {
          var _this25 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this25.databaseObj = db;

            _this25.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this25.table_classListActor + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, entityId vachar(2), class_id INTEGER ,class_reference VARCHAR(200), class_grade varchar(2), ref_grade varchar(2))', []).then(function () {})["catch"](function (e) {// alert("Error to create table_classListActor Table" + JSON.stringify(e))
            });

            _this25.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this25.table_classListActorsParent + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, actorId INTEGER, entityId vachar(2), class_id INTEGER ,class_reference VARCHAR(200), class_grade varchar(2), ref_grade varchar(2))', []).then(function () {})["catch"](function (e) {// alert("Error to create table_classListActorsParent table" + JSON.stringify(e))
            });
          })["catch"](function (e) {// alert("Error to create classList Database" + JSON.stringify(e))
          });
        }
      }, {
        key: "insertactor",
        value: function insertactor() {
          var _this26 = this;

          this.platform.ready().then(function () {
            for (var i = 0; i < _this26.actorList.length; i++) {
              _this26.databaseObj.executeSql('INSERT INTO ' + _this26.table_nameactor + ' (userid , id , firstname , name, type, class_id) VALUES("' + localStorage.getItem('userId') + '", "' + _this26.actorList[i]['id'] + '", "' + _this26.actorList[i]['firstname'] + '", "' + _this26.actorList[i]['name'] + '", "' + _this26.actorList[i]['type'] + '", "' + _this26.actorList[i]['class_id'] + '")', []).then(function () {// alert('Row inserted :-' + this.table_nameactor);
              })["catch"](function (e) {// alert("Error to insert rows inside of 'table_nameactor' Table:- " + JSON.stringify(e))
              });
            }
          });
        }
      }, {
        key: "insertClass",
        value: function insertClass() {
          var _this27 = this;

          if (localStorage.getItem('userType') == "Actor") {
            this.databaseObj.executeSql("SELECT * FROM " + this.table_classListActor, []).then(function (res) {
              // alert("class list insert time length is:-" + res.rows.length);
              _this27.row_data = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this27.row_data.push(res.rows.item(i));
              } // alert("this.row_data.length :-" + this.row_data.length);


              for (var i = 0; i < _this27.row_data.length; i++) {
                if (_this27.row_data[i]['userId'] == localStorage.getItem('userId') && _this27.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
                  _this27.databaseObj.executeSql("DELETE FROM ".concat(_this27.table_classListActor, " WHERE userId = ").concat(_this27.row_data[i]['userId']), []).then(function (res) {// alert("Row deleted from 'table_classListActor' Table:-" + JSON.stringify(res));
                  })["catch"](function (e) {// alert("Error to Delete rows from 'table_classListActor' table" + JSON.stringify(e))
                  });
                }
              }

              for (var i = 0; i < _this27.classListArr.length; i++) {
                _this27.databaseObj.executeSql('INSERT INTO ' + _this27.table_classListActor + ' (userId, entityId, class_id, class_reference, class_grade, ref_grade ) VALUES ("' + localStorage.getItem('userId') + '","' + localStorage.getItem('entityId') + '","' + _this27.classListArr[i]['class_id'] + '","' + _this27.classListArr[i]['class_reference'] + '","' + _this27.classListArr[i]['class_grade'] + '","' + _this27.classListArr[i]['ref_grade'] + '")', []).then(function () {// alert("Row inseted inside of 'table_classListActor' Table :-" + this.table_name);
                })["catch"](function (e) {// alert("Error to insert rows inside of 'table_classListActor' Table:- " + JSON.stringify(e));
                });
              }
            })["catch"](function (e) {// alert("Error to Get classList Actor Rows:- " + JSON.stringify(e))
            });
          } else if (localStorage.getItem('userType') == "Actor's Parent") {
            this.databaseObj.executeSql("SELECT * FROM " + this.table_classListActorsParent, []).then(function (res) {
              // alert("class list insert time length is:-" + res.rows.length);
              _this27.row_data = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this27.row_data.push(res.rows.item(i));
              } // alert("this.row_data.length :-" + this.row_data.length);


              for (var i = 0; i < _this27.row_data.length; i++) {
                if (_this27.row_data[i]['entityId'] == localStorage.getItem('entityId') && _this27.row_data[i]['actorId'] == localStorage.getItem('actorId')) {
                  _this27.databaseObj.executeSql("DELETE FROM ".concat(_this27.table_classListActorsParent, " WHERE actorId = ").concat(_this27.row_data[i]['actorId']), []).then(function (res) {// alert("Row deleted from 'table_classListActorsParent' Table:-" + JSON.stringify(res));
                  })["catch"](function (e) {// alert("Error to Delete rows from 'table_classListActorsParent' table" + JSON.stringify(e))
                  });
                }
              }

              for (var i = 0; i < _this27.classListArr.length; i++) {
                _this27.databaseObj.executeSql('INSERT INTO ' + _this27.table_classListActorsParent + ' (actorId, entityId, class_id, class_reference, class_grade, ref_grade ) VALUES ("' + localStorage.getItem('actorId') + '","' + localStorage.getItem('entityId') + '","' + _this27.classListArr[i]['class_id'] + '","' + _this27.classListArr[i]['class_reference'] + '","' + _this27.classListArr[i]['class_grade'] + '","' + _this27.classListArr[i]['ref_grade'] + '")', []).then(function () {// alert("Row inseted inside of 'table_classListActorsParent' Table :-" + this.table_name);
                })["catch"](function (e) {// alert("Error to insert rows inside of 'table_classListActorsParent' Table:-" + JSON.stringify(e));
                });
              }
            })["catch"](function (e) {// alert("Error to Get classList Actor's parent rows:-" + JSON.stringify(e))
            });
          }
        }
      }, {
        key: "getClassOffline",
        value: function getClassOffline() {
          var _this28 = this;

          if (localStorage.getItem('userType') == "Actor") {
            this.databaseObj.executeSql("SELECT DISTINCT userId, entityId, class_id, class_reference, class_grade, ref_grade FROM " + this.table_classListActor, []).then(function (res) {
              // alert("offline class list Actor :-" + res.rows.length);
              _this28.row_data = [];
              _this28.classListArr = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this28.row_data.push(res.rows.item(i));
              } // alert("this.row_data:-" + JSON.stringify(this.row_data));


              for (var i = 0; i < _this28.row_data.length; i++) {
                if (_this28.row_data[i]['userId'] == localStorage.getItem('userId') && _this28.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
                  _this28.classListArr.push(_this28.row_data[i]);
                }
              } // alert("this.classListArr.length Actor:-" + this.classListArr.length);


              if (_this28.classListArr.length == 0) {
                _this28.translate.use(_this28.selectedLanguage);

                _this28.translate.get('Class is not assigned to this account,please contact your Entity Manager').subscribe(function (res) {
                  alert(res);

                  _this28.popoverCtrl.dismiss();

                  localStorage.removeItem('actorName');
                  localStorage.removeItem('entityName');
                  localStorage.removeItem('loggedinflag');
                  window.location.reload(true);
                });
              }
            })["catch"](function (e) {// alert("Error to Get classList Actor Rows:- " + JSON.stringify(e))
            });
          } else if (localStorage.getItem('userType') == "Actor's Parent") {
            this.databaseObj.executeSql("SELECT DISTINCT actorId, entityId, class_id, class_reference, class_grade, ref_grade FROM " + this.table_classListActorsParent, []).then(function (res) {
              // alert("offline class list Actor's Parent :-" + res.rows.length);
              _this28.row_data = [];
              _this28.classListArr = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this28.row_data.push(res.rows.item(i));
              } // alert("this.row_data:-" + JSON.stringify(this.row_data));


              for (var i = 0; i < _this28.row_data.length; i++) {
                if (_this28.row_data[i]['actorId'] == localStorage.getItem('actorId') && _this28.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
                  _this28.classListArr.push(_this28.row_data[i]);
                }
              } // alert("this.classListArr.length Actor's Parent:-" + this.classListArr.length);


              if (_this28.classListArr.length == 0) {
                _this28.translate.use(_this28.selectedLanguage);

                _this28.translate.get('Class is not assigned to this account,please contact your Entity Manager').subscribe(function (res) {
                  alert(res);

                  _this28.popoverCtrl.dismiss();

                  localStorage.removeItem('actorName');
                  localStorage.removeItem('entityName');
                  localStorage.removeItem('loggedinflag');
                  window.location.reload(true);
                });
              }
            })["catch"](function (e) {// alert("Error to Get classList Actor's Parent Rows :-" + JSON.stringify(e))
            });
          }
        }
      }, {
        key: "insertEntityList",
        value: function insertEntityList() {
          var _this29 = this;

          if (localStorage.getItem('userType') == "Actor") {
            this.databaseObj.executeSql("SELECT * FROM " + this.table_name, []).then(function (res) {
              // alert("Actor list insert time length is:-" + res.rows.length);
              _this29.row_data = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this29.row_data.push(res.rows.item(i));
              } // alert("this.row_data.length :-" + this.row_data.length);


              for (var i = 0; i < _this29.row_data.length; i++) {
                if (_this29.row_data[i]['userid'] == localStorage.getItem('userId')) {
                  _this29.databaseObj.executeSql("DELETE FROM ".concat(_this29.table_name, " WHERE userid = ").concat(_this29.row_data[i]['userid']), []).then(function (res) {// alert("Row deleted from 'table_name' Table:-" + JSON.stringify(res));
                  })["catch"](function (e) {// alert("Error to Delete rows from 'table_name' table" + JSON.stringify(e))
                  });
                }
              }

              for (var i = 0; i < _this29.entityArr.length; i++) {
                _this29.databaseObj.executeSql('INSERT INTO ' + _this29.table_name + ' (userid , id, entity_name, name_town,entity_no) VALUES ("' + localStorage.getItem('userId') + '","' + _this29.entityArr[i]['id'] + '","' + _this29.entityArr[i]['entity_name'] + '","' + _this29.entityArr[i]['name_town'] + '","' + _this29.entityArr[i]['entity_no'] + '")', []).then(function () {// alert("Row inseted inside of 'table_name' Table :-" + this.table_name);
                })["catch"](function (e) {// alert("Error to insert rows inside of 'table_name' Table:- " + JSON.stringify(e));
                });
              }
            })["catch"](function (e) {// alert("Error to Get entityList Actor's parent Rows:- " + JSON.stringify(e))
            });
          }

          if (localStorage.getItem('userType') == "Actor's Parent") {
            this.databaseObj.executeSql("SELECT * FROM " + this.table_name_EntityList, []).then(function (res) {
              // alert("Entity list insert time length is:-" + res.rows.length);
              _this29.row_data = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this29.row_data.push(res.rows.item(i));
              } // alert("this.row_data.length :-" + this.row_data.length);


              for (var i = 0; i < _this29.row_data.length; i++) {
                if (_this29.row_data[i]['actorId'] == localStorage.getItem('actorId')) {
                  _this29.databaseObj.executeSql("DELETE FROM ".concat(_this29.table_name_EntityList, " WHERE actorId = ").concat(_this29.row_data[i]['actorId']), []).then(function (res) {// alert("Row deleted from 'table_name_EntityList' Table:-" + JSON.stringify(res));
                  })["catch"](function (e) {// alert("Error to Delete rows from 'table_name_EntityList' table" + JSON.stringify(e))
                  });
                }
              }

              for (var i = 0; i < _this29.entityArr.length; i++) {
                _this29.databaseObj.executeSql('INSERT INTO ' + _this29.table_name_EntityList + ' (userid , id, entity_name, name_town, actorId) VALUES ("' + localStorage.getItem('userId') + '","' + _this29.entityArr[i]['id'] + '","' + _this29.entityArr[i]['entity_name'] + '","' + _this29.entityArr[i]['name_town'] + '","' + localStorage.getItem('actorId') + '")', []).then(function () {// alert("Row inseted inside of 'table_name_EntityList' Table :-" + this.table_name_EntityList);
                })["catch"](function (e) {// alert("Error to insert rows inside of 'table_name_EntityList' Table:- " + JSON.stringify(e));
                });
              }
            })["catch"](function (e) {// alert("Error to Get Actor Entity Rows:- " + JSON.stringify(e))
            });
          }
        }
      }, {
        key: "getActorEntity",
        value: function getActorEntity() {
          var _this30 = this;

          if (localStorage.getItem('userType') == 'Actor') {
            this.databaseObj.executeSql("SELECT DISTINCT userid , id, entity_name, name_town,entity_no FROM " + this.table_name, []).then(function (res) {
              // alert("Actor Entity list length is:-" + res.rows.length);
              _this30.row_data = [];
              _this30.entityArr = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this30.row_data.push(res.rows.item(i));
              } // alert("this.row_data:-" + JSON.stringify(this.row_data));
              // console.log("this.row_data Actor :-" + JSON.stringify(this.row_data));


              for (var i = 0; i < _this30.row_data.length; i++) {
                if (_this30.row_data[i]['userid'] == localStorage.getItem('userId')) {
                  _this30.entityArr.push(_this30.row_data[i]);
                }
              } // alert("this.entityArr.length Actor:-" + JSON.stringify(this.entityArr));

            })["catch"](function (e) {// alert("Error to Get Entity Actor Rows:- " + JSON.stringify(e))
            });
          }
        }
      }, {
        key: "getEntityActorsParent",
        value: function getEntityActorsParent() {
          var _this31 = this;

          if (localStorage.getItem('userType') == "Actor's Parent") {
            this.databaseObj.executeSql("SELECT DISTINCT userid , id, entity_name, name_town, actorId FROM " + this.table_name_EntityList, []).then(function (res) {
              // alert("Actor's Parent Entity list length is:-" + res.rows.length);
              _this31.row_data = [];
              _this31.entityArr = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this31.row_data.push(res.rows.item(i));
              } // alert("this.row_data:-" + JSON.stringify(this.row_data));


              for (var i = 0; i < _this31.row_data.length; i++) {
                if (_this31.row_data[i]['actorId'] == localStorage.getItem('actorId')) {
                  _this31.entityArr.push(_this31.row_data[i]);
                }
              } // alert("this.entityArr.length Actor's Parent :-" + this.entityArr.length);

            })["catch"](function (e) {// alert("Error to Get Entity Actor's Parent Rows:- " + JSON.stringify(e))
            });
          }
        }
      }, {
        key: "getactor",
        value: function getactor() {
          var _this32 = this;

          this.databaseObj.executeSql("SELECT  DISTINCT userid , id , firstname , name, type, class_id FROM " + this.table_nameactor, []).then(function (res) {
            // alert("Actor's Parent Entity list length is:-" + res.rows.length);
            _this32.row_data = [];
            _this32.actorList = [];

            for (var i = 0; i < res.rows.length; i++) {
              _this32.row_data.push(res.rows.item(i));
            } // alert("this.row_data:-" + JSON.stringify(this.row_data));


            for (var i = 0; i < _this32.row_data.length; i++) {
              if (_this32.row_data[i]['userid'] == localStorage.getItem('userId')) {
                _this32.actorList.push(_this32.row_data[i]);
              }
            } // alert("this.actorList.length is :-" + this.actorList.length);

          })["catch"](function (e) {// alert("Error to get actor List:- " + JSON.stringify(e))
          });
        }
      }]);

      return EntitymodalPage;
    }();

    EntitymodalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
      }, {
        type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__["TranslateConfigService"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_6__["SQLite"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    EntitymodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-entitymodal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./entitymodal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/entitymodal/entitymodal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./entitymodal.page.scss */
      "./src/app/components/entitymodal/entitymodal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"], src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__["TranslateConfigService"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_6__["SQLite"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], EntitymodalPage);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/header/header.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --ion-background-color:#343a40 !important;\n  color: #fff !important; }\n\nion-toolbar {\n  background-color: #343a40 !important; }\n\nion-header ion-menu-button {\n  color: #fff !important;\n  font-size: 2rem; }\n\n.toolbar-background {\n  background: #343a40 !important;\n  position: relative; }\n\n.toolbar-background, ::slotted(ion-progress-bar) {\n  position: relative; }\n\nion-list ion-label {\n  font-size: 1.16rem !important;\n  color: #000 !important; }\n\nion-list {\n  margin: 0rem !important; }\n\n:host {\n  --background: var(--ion-toolbar-background,var(--ion-color-step-50,#343a40 !important)) !important; }\n\n.ion-color-primary {\n  --ion-color-base: #343a40!important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvQW1leS9KQVdBVEEvamF3YXRhLW1hbmFnZXIvSmF3YXRhTWFuYWdlckFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUF1QjtFQUN2QixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxvQ0FBbUMsRUFBQTs7QUFFdkM7RUFDSSxzQkFBc0I7RUFDdEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLDhCQUE4QjtFQUM5QixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSw2QkFBNkI7RUFDN0Isc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksa0dBQWEsRUFBQTs7QUFFakI7RUFDSSxtQ0FBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzM0M2E0MCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNDNhNDAgIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi50b29sYmFyLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQ6ICMzNDNhNDAgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9vbGJhci1iYWNrZ3JvdW5kLCA6OnNsb3R0ZWQoaW9uLXByb2dyZXNzLWJhcikge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1saXN0IGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjE2cmVtICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cbmlvbi1saXN0IHtcbiAgICBtYXJnaW46IDByZW0gIWltcG9ydGFudDtcbn1cbjpob3N0IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsIzM0M2E0MCAhaW1wb3J0YW50KSkgIWltcG9ydGFudDtcbn1cbi5pb24tY29sb3ItcHJpbWFyeXtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMzQzYTQwIWltcG9ydGFudDtcbn1cbiRjb2xvcnM6IChcbiAgICBwcmltYXJ5OiMzNDNhNDAsXG4gICAgaW9uLWNvbG9yLWJhc2U6ICMzNDNhNDAgIWltcG9ydGFudCxcbikiXX0= */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../modal/modal.page */
    "./src/app/components/modal/modal.page.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(popoverCtrl) {
        _classCallCheck(this, HeaderComponent);

        this.popoverCtrl = popoverCtrl;
        this.heading = "";
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showPopUp",
        value: function showPopUp(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var popover;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.popoverCtrl.create({
                      component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__["ModalPage"],
                      event: value,
                      translucent: true,
                      cssClass: 'popovercustom',
                      showBackdrop: true //,backdropDismiss: false

                    });

                  case 2:
                    popover = _context8.sent;
                    _context8.next = 5;
                    return popover.present();

                  case 5:
                    return _context8.abrupt("return", _context8.sent);

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HeaderComponent.prototype, "heading", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/header/header.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/modal/modal.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/components/modal/modal.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/modal/modal.page.ts":
  /*!************************************************!*\
    !*** ./src/app/components/modal/modal.page.ts ***!
    \************************************************/

  /*! exports provided: ModalPage */

  /***/
  function srcAppComponentsModalModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPage", function () {
      return ModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/menu.service */
    "./src/app/services/menu.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/translate-config.service */
    "./src/app/translate-config.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var ModalPage = /*#__PURE__*/function () {
      function ModalPage(popoverCtrl, loadingController, modalCtrl, menuService, http, translateConfigService, sqlite, router, platform, zone, appcomp, network, translate) {
        _classCallCheck(this, ModalPage);

        this.popoverCtrl = popoverCtrl;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.menuService = menuService;
        this.http = http;
        this.translateConfigService = translateConfigService;
        this.sqlite = sqlite;
        this.router = router;
        this.platform = platform;
        this.zone = zone;
        this.appcomp = appcomp;
        this.network = network;
        this.translate = translate;
        this.defaultEntity = '';
        this.defaultClass = "";
        this.defaultSubject = "";
        this.actionList = [];
        this.defaultAction = "";
        this.classListArr = [];
        this.row_data = [];
        this.notificationDetails = [];
        this.selectedLanguage = localStorage.getItem('selectedL');
        this.updatelangauge = 'english'; // declare database name

        this.database_name = "Jawata_App.db";
        this.table_actor_entity = "actorEntity1";
        this.table_actorsParentEntity = "actorsParentEntity";
        this.table_ActorClassList = "classListActorLogin1";
        this.table_ActorsParentClassList = "classListActorsParentLogin1";

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };
      }

      _createClass(ModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.selectedLanguage = localStorage.getItem('selectedL');
          this.defaultEntity = "";
          this.defaultEntity = localStorage.getItem('entityName');
          this.defaultClass = "";
          this.defaultClass = localStorage.getItem('className');
          this.defaultSubject = "";
          this.defaultSubject = localStorage.getItem('subject_name'); // this.defaultAction = "";
          // this.defaultAction = this.langTransalate(localStorage.getItem('scanAction'));

          this.translate.use(this.selectedLanguage);
          this.translate.get(localStorage.getItem('scanAction').toString()).subscribe(function (res) {
            _this33.defaultAction = res;
            console.log('this.defaultAction', _this33.defaultAction);
          });
          localStorage.setItem('ChangedLang', 'ChangedLang');
          this.getEntityName();
          this.platform.ready().then(function () {
            _this33.setLanguages();

            _this33.getScanAction();

            _this33.getEntityName();

            _this33.createDB();

            _this33.createDBActorParent();

            _this33.createDBClassList();
          });
        }
      }, {
        key: "languageChanged",
        value: function languageChanged(value) {
          // set user selected language as default
          if (value != '' && localStorage.getItem('selectedL').toString() != value.toString()) {
            this.translateConfigService.setLanguage(this.selectedLanguage);
            this.updatelangauge = value == 'en' ? 'english' : value == 'fr' ? 'french' : value == 'es' ? 'spanish' : value == 'de' ? 'german' : 'hindi';
            console.log('this.updatelangauge' + this.updatelangauge);
            localStorage.setItem('selectedL', this.selectedLanguage);

            if (this.network.type != 'none') {
              var data = {
                "user_id": localStorage.getItem('userId'),
                "locale": this.updatelangauge
              };
              var headers = {
                'Content-Type': 'application/json'
              };
              console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/update_profile_language"), JSON.stringify(data));
              this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/update_profile_language"), data, headers).then(function (res) {
                console.log('res :-' + JSON.stringify(res.data));
              })["catch"](function (error) {
                console.log("Error Get language change !" + JSON.stringify(error));
              });
            } // Router navigate to dashboard


            this.popoverCtrl.dismiss();
            window.location.reload();
          }
        }
      }, {
        key: "setLanguages",
        value: function setLanguages() {
          if (localStorage.getItem('scanActionID') != "") {
            var scanid = localStorage.getItem('scanActionID');
            this.defaultAction = "";
            this.defaultAction = scanid == "0" ? this.langTransalate('Activated') : this.langTransalate('Deactivated');
          }
        }
        /** start Scan Action */

      }, {
        key: "getScanAction",
        value: function getScanAction() {
          /**Bind static json data */
          var activeName = this.langTransalate("Activated");
          var deactiveName = this.langTransalate("Deactivated");
          this.actionList.push({
            "id": 0,
            "name": activeName
          }, {
            "id": 1,
            "name": deactiveName
          });

          if (localStorage.getItem('scanAction') == null) {
            for (var i = 0; i < this.actionList.length; i++) {
              this.defaultAction = this.actionList[0]['name'];
              localStorage.setItem('scanActionID', this.actionList[1]['id']);
              localStorage.setItem('scanAction', this.actionList[0]['name']);
            }
          }
        }
      }, {
        key: "langTransalate",
        value: function langTransalate(changeText) {
          var localChnageText = changeText;
          this.translate.use(this.selectedLanguage);
          this.translate.get(changeText).subscribe(function (res) {
            // this.heading = "";
            // this.heading = res;
            localChnageText = res;
          });
          return localChnageText;
        }
      }, {
        key: "changeScanAction",
        value: function changeScanAction(value) {
          this.defaultAction = "";
          this.defaultAction = value.trim();
          console.log('this.defaultAction' + this.defaultAction);

          for (var i = 0; i < this.actionList.length; i++) {
            if (value.trim() == this.actionList[i]['name']) {
              localStorage.setItem('scanActionID', this.actionList[i]['id']);
              localStorage.setItem('scanAction', this.actionList[i]['name']);
            }
          }

          window.location.reload(true);
        }
        /** end Scan Action */

      }, {
        key: "getEntityName",
        value: function getEntityName() {
          var _this34 = this;

          /**Web API code start here */
          // this.menuService.getEntityData(localStorage.getItem('token'), localStorage.getItem('userId')).subscribe(data => {
          //   this.entityArr = [];
          //   this.entityArr = data; // data received by server
          //   console.log("this.entityArr is==", this.entityArr);
          //   // set default entity value here
          //   //this.defaultEntity = this.entityArr[0]['entity_name'];
          // });

          /**Web API code end here */
          if (this.network.type != 'none') {
            if (localStorage.getItem('userType') == 'Manager' || localStorage.getItem('userType') == 'Entity Director') {
              var data = {
                'APuserId': 'null',
                'token': localStorage.getItem('token'),
                'userId': localStorage.getItem('userId')
              };
            } else if (localStorage.getItem('userType') == "Actor's Parent") {
              var data = {
                'APuserId': localStorage.getItem('userId'),
                'token': localStorage.getItem('token'),
                'userId': localStorage.getItem('actorId')
              };
            }

            var headers = {
              'Content-Type': 'application/json'
            };
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/entityPopup"), JSON.stringify(data));
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/entityPopup"), data, headers).then(function (res) {
              _this34.entityArr = [];
              _this34.entityArr = JSON.parse(res.data); // data received by server

              console.log('this.entityArr' + JSON.stringify(_this34.entityArr));

              if (_this34.entityArr.length == 0) {
                _this34.translate.use(_this34.selectedLanguage);

                _this34.translate.get('Entity is not assigned to this account,please contact your Entity Manager').subscribe(function (res) {
                  alert(res);

                  _this34.popoverCtrl.dismiss();

                  window.location.reload(true);
                });
              } else {
                _this34.insertActorEntity();

                _this34.getClass();
              }
            })["catch"](function (error) {
              console.log("getEntityName Error Here !" + JSON.stringify(error));
            });
          }
        }
      }, {
        key: "getClass",
        value: function getClass() {
          var _this35 = this;

          //  set class_id =0 to load class......
          var data = {
            'userid': localStorage.getItem('userId'),
            'entityid': localStorage.getItem('entityId'),
            'classid': 0
          };
          var headers = {
            'Content-Type': 'application/json'
          };
          console.log('class_subject_load Get class =' + "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/class_subject_load"), JSON.stringify(data));
          this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/class_subject_load"), data, headers).then(function (res) {
            console.log('API response:-' + JSON.stringify(res.data));
            _this35.classListArr = [];
            var temp;
            temp = [];
            temp = JSON.parse(res.data);
            _this35.classListArr = [];
            _this35.classListArr = temp.classArray;
            console.log('classListArr :-' + JSON.stringify(_this35.classListArr)); // this.classListArr = JSON.parse(res.data);
            // console.log('checking686868686', this.classListArr[0]['ref_grade'])
            // console.log('seconde checking', JSON.parse(this.classListArr[0]['ref_grade']))
            // localStorage.setItem('class_id', this.classListArr[0]['class_id']);

            _this35.getSubject();
          })["catch"](function (error) {// alert("getClassName Error Here !" + error);
          }); // if (this.network.type != 'none') {
          //   if (localStorage.getItem('userType') == 'Actor') {
          //     var data = {
          //       'userid': localStorage.getItem('userId'),
          //       'entityid': localStorage.getItem('entityId')
          //     }
          //   } else if (localStorage.getItem('userType') == "Actor's Parent") {
          //     var data = {
          //       'userid': localStorage.getItem('actorId'),
          //       'entityid': localStorage.getItem('entityId')
          //     }
          //   }
          //   var headers = {
          //     'Content-Type': 'application/json'
          //   }
          //   this.http.post(`${environment.apiUrl}/api/loadClass`, data, headers).then(res => {
          //     this.classListArr = [];
          //     // this.classListArr = JSON.parse(res.data);
          //     if (this.classListArr.length == 0) {
          //       this.translate.use(this.selectedLanguage);
          //       this.translate.get('Please select class or if class is not yet assigned to this account, then contact your entity manager.').subscribe((res: string) => {
          //         alert(res);
          //         //this.popoverCtrl.dismiss();
          //         this.defaultClass = "";
          //         localStorage.removeItem('className');
          //         localStorage.removeItem('class_id');
          //         // localStorage.removeItem('actorName');
          //         // localStorage.removeItem('entityName');
          //         // localStorage.removeItem('loggedinflag');
          //         // window.location.reload(true);
          //       });
          //     }
          //     else {
          //       if (this.defaultClass == '') {
          //         //bydefault set one class
          //         localStorage.setItem('class_id', this.classListArr[0]['class_id']);
          //         // localStorage.setItem('ref_grade', this.classListArr[i]['ref_grade']);
          //         localStorage.setItem('className', this.classListArr[0]['ref_grade']);
          //         this.defaultClass = this.classListArr[0]['ref_grade'];
          //         console.log("classListArr :-", JSON.stringify(this.classListArr));
          //       }
          //       else {
          //         this.defaultClass = localStorage.getItem('className');
          //       }
          //       this.insertClass();
          //     }
          //   }).catch(error => {
          //     // alert("getClassName Error Here !" + error);
          //   });
          // }
        }
      }, {
        key: "getSubject",
        value: function getSubject() {
          var _this36 = this;

          var data = {
            'userid': localStorage.getItem('userId'),
            'entityid': localStorage.getItem('entityId'),
            'classid': localStorage.getItem('class_id')
          }; // console.log('class_id',data)

          var headers = {
            'Content-Type': 'application/json'
          };
          console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/class_subject_load"), JSON.stringify(data));
          this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/api/class_subject_load"), data, headers).then(function (res) {
            console.log(JSON.stringify(res.data));
            _this36.subjectListArr = [];
            var temp;
            temp = [];
            temp = JSON.parse(res.data);
            _this36.subjectListArr = [];
            _this36.subjectListArr = temp.subjectArray;
            console.log('subjectListArr :-' + JSON.stringify(_this36.subjectListArr));
          })["catch"](function (error) {
            //alert('checdkchchjchcch')
            console.log('API failed', _this36.subjectListArr); // alert("getClassName Error Here !" + error);
          });
        }
      }, {
        key: "changeEntity",
        value: function changeEntity(value) {
          this.defaultEntity = "";
          this.defaultClass = "";
          this.defaultSubject = "";
          localStorage.removeItem('className');
          localStorage.removeItem('class_id'); //class_id    

          localStorage.removeItem('subject_id');
          localStorage.removeItem('subject_name'); //class_id   

          this.defaultEntity = value.trim();

          for (var i = 0; i < this.entityArr.length; i++) {
            if (this.defaultEntity == this.entityArr[i]['name_town']) {
              /**set entityId & entityName to localStorage */
              localStorage.setItem('entityId', this.entityArr[i]['id']);
              localStorage.setItem('entityName', this.entityArr[i]['name_town']);
              localStorage.setItem('entity_no', this.entityArr[i]['entity_no']);
              localStorage.setItem('nav', 'true'); //set storage for update history records

              /**Modal Popup Close Here */
              //this.popoverCtrl.dismiss();
              //this.getClass();

              if (this.network.type == 'none') {
                this.getClassOffline();
              }

              window.location.reload(true); // navigate to same path
              //this.router.navigated =false;
              //this.OnEntityChangeLoadData();
            }
          }

          ;
        }
      }, {
        key: "changeClass",
        value: function changeClass(value) {
          this.defaultClass = "";
          this.defaultClass = value.trim();
          localStorage.removeItem('subject_name');

          for (var i = 0; i < this.classListArr.length; i++) {
            if (this.defaultClass == this.classListArr[i]['ref_grade']) {
              /**set classId to localStorage */
              localStorage.setItem('class_id', this.classListArr[i]['class_id']);
              localStorage.setItem('className', this.classListArr[i]['ref_grade']); // localStorage.setItem('defaultClass', this.classListArr[i]['ref_grade']);
              // console.log('defaultclass',this.defaultClass)
              // console.log('className',localStorage.getItem('className'))

              /**Modal Popup Close Here */
              // this.popoverCtrl.dismiss();

              this.router.navigated = false;
              this.getSubject(); // window.location.reload(true);
            }
          }
        }
      }, {
        key: "changeSubject",
        value: function changeSubject(value) {
          this.defaultSubject = "";
          this.defaultSubject = value.trim();

          for (var i = 0; i < this.subjectListArr.length; i++) {
            if (this.defaultSubject == this.subjectListArr[i]['subject_name']) {
              /**set classId to localStorage */
              localStorage.setItem('subject_id', this.subjectListArr[i]['subject_id']);
              localStorage.setItem('subject_name', this.subjectListArr[i]['subject_name']); // localStorage.setItem('ref_grade', this.classListArr[i]['ref_grade']);
              // console.log('defaultSubject',this.defaultSubject)
              // console.log('subject_Name',localStorage.getItem('subject_name'))

              /**Modal Popup Close Here */
              // this.popoverCtrl.dismiss();

              this.router.navigated = false; // window.location.reload(true);
            }
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          console.log('entity :-' + this.defaultEntity + ' class :- ' + this.defaultClass + ' --localStorage.getItem(userType)' + localStorage.getItem('userType')); //this.popoverCtrl.dismiss();

          if (this.defaultEntity != null && this.defaultClass != '') {
            this.popoverCtrl.dismiss();
          }
        }
      }, {
        key: "OnEntityChangeLoadData",
        value: function OnEntityChangeLoadData() {
          // subjects
          if (localStorage.getItem('routeurl') == 'subjects') {
            window.location.reload(true);
          } //sso


          if (localStorage.getItem('routeurlsso') == 'sso') {
            window.location.reload(true);
          } //audit-trail


          if (localStorage.getItem('routeurlaudit-trail') == 'audit-trail') {
            window.location.reload(true);
          } // resource-link


          if (localStorage.getItem('routeurlresource-link') == 'resource-link') {
            window.location.reload(true);
          } // feedback


          if (localStorage.getItem('routeurlfeedback') == 'feedback') {
            window.location.reload(true);
          }
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage() {
          this.popoverCtrl.dismiss();
        }
        /** Offline App code start here */

      }, {
        key: "createDB",
        value: function createDB() {
          var _this37 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this37.databaseObj = db;

            _this37.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this37.table_actor_entity + ' (uniqueID INTEGER PRIMARY KEY AUTOINCREMENT, userid INTEGER, id INTEGER ,entity_name VARCHAR(200), name_town varchar(2),entity_no varchar(2))', []).then(function () {
              if (_this37.network.type == 'none' && localStorage.getItem('userType') == 'Actor') {
                _this37.getActorEntity();
              }
            })["catch"](function (e) {// alert("Error to create 'table_actor_entity' table " + JSON.stringify(e))
            });
          })["catch"](function (e) {// alert("Error to Database Create:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "createDBActorParent",
        value: function createDBActorParent() {
          var _this38 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this38.databaseObj = db;

            _this38.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this38.table_actorsParentEntity + ' (uniqueID INTEGER PRIMARY KEY AUTOINCREMENT, userid INTEGER, id INTEGER ,entity_name VARCHAR(200), name_town varchar(2), actorId varchar(2),entity_no varchar(2))', []).then(function () {
              if (_this38.network.type == 'none' && localStorage.getItem('userType') == "Actor's Parent") {
                _this38.getEntityActorsParent();
              }
            })["catch"](function (e) {// alert("Error to create 'table_actorsParentEntity' Table" + JSON.stringify(e))
            });
          })["catch"](function (e) {// alert("Error to create 'table_actorsParentEntity' database" + JSON.stringify(e))
          });
        }
      }, {
        key: "createDBClassList",
        value: function createDBClassList() {
          var _this39 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this39.databaseObj = db;

            _this39.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this39.table_ActorClassList + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, entityId vachar(2), class_id INTEGER ,class_reference VARCHAR(200), class_grade varchar(2), ref_grade varchar(2))', []).then(function () {
              if (_this39.network.type == 'none') {
                _this39.getClassOffline();
              }
            })["catch"](function (e) {// alert("Error to create 'table_ActorClassList' Table :-" + JSON.stringify(e))
            });

            _this39.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this39.table_ActorsParentClassList + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, actorId INTEGER, entityId vachar(2), class_id INTEGER ,class_reference VARCHAR(200), class_grade varchar(2), ref_grade varchar(2))', []).then(function () {})["catch"](function (e) {// alert("Error to create 'table_ActorsParentClassList' Table" + JSON.stringify(e))
            });
          })["catch"](function (e) {// alert("Error to create 'ActorClassList ' database :-" + JSON.stringify(e))
          });
        }
      }, {
        key: "insertActorEntity",
        value: function insertActorEntity() {
          var _this40 = this;

          if (localStorage.getItem('userType') == "Actor") {
            this.databaseObj.executeSql("SELECT * FROM " + this.table_actor_entity, []).then(function (res) {
              // alert("Actor Entity insert time length is:-" + res.rows.length);
              _this40.row_data = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this40.row_data.push(res.rows.item(i));
              } // alert("this.row_data.length :-" + this.row_data.length);


              for (var i = 0; i < _this40.row_data.length; i++) {
                if (_this40.row_data[i]['userid'] == localStorage.getItem('userId')) {
                  _this40.databaseObj.executeSql("DELETE FROM ".concat(_this40.table_actor_entity, " WHERE userid = ").concat(_this40.row_data[i]['userid']), []).then(function (res) {// alert("Row deleted from 'table_actor_entity' Table :-" + JSON.stringify(res));
                  })["catch"](function (e) {// alert("Error to Delete rows from 'table_actor_entity' table" + JSON.stringify(e))
                  });
                }
              }

              for (var i = 0; i < _this40.entityArr.length; i++) {
                _this40.databaseObj.executeSql('INSERT INTO ' + _this40.table_actor_entity + ' (userid , id, entity_name, name_town,entity_no) VALUES ("' + localStorage.getItem('userId') + '","' + _this40.entityArr[i]['id'] + '","' + _this40.entityArr[i]['entity_name'] + '","' + _this40.entityArr[i]['name_town'] + '","' + _this40.entityArr[i]['entity_no'] + '")', []).then(function () {// alert("Row inserted inside of 'table_actor_entity' table :-" + this.table_actor_entity);
                })["catch"](function (e) {// alert("Error to insert rows inside of 'table_actor_entity' Table:- " + JSON.stringify(e));
                });
              }
            })["catch"](function (e) {// alert("Error to Get EntityList Actor Rows:- " + JSON.stringify(e))
            });
          }

          if (localStorage.getItem('userType') == "Actor's Parent") {
            this.databaseObj.executeSql("SELECT * FROM " + this.table_actorsParentEntity, []).then(function (res) {
              // alert("Actor's Parent Entity insert time length is:-" + res.rows.length);
              _this40.row_data = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this40.row_data.push(res.rows.item(i));
              } // alert("this.row_data.length :-" + this.row_data.length);


              for (var i = 0; i < _this40.row_data.length; i++) {
                if (_this40.row_data[i]['actorId'] == localStorage.getItem('actorId')) {
                  _this40.databaseObj.executeSql("DELETE FROM ".concat(_this40.table_actorsParentEntity, " WHERE actorId = ").concat(_this40.row_data[i]['actorId']), []).then(function (res) {// alert("Row deleted from 'table_actorsParentEntity' Table:-" + JSON.stringify(res));
                  })["catch"](function (e) {// alert("Error to Delete rows from 'table_actorsParentEntity' table" + JSON.stringify(e))
                  });
                }
              }

              for (var i = 0; i < _this40.entityArr.length; i++) {
                _this40.databaseObj.executeSql('INSERT INTO ' + _this40.table_actorsParentEntity + ' (userid , id, entity_name, name_town, actorId,entity_no) VALUES ("' + localStorage.getItem('userId') + '","' + _this40.entityArr[i]['id'] + '","' + _this40.entityArr[i]['entity_name'] + '","' + _this40.entityArr[i]['name_town'] + '","' + localStorage.getItem('actorId') + '","' + _this40.entityArr[i]['entity_no'] + '" )', []).then(function () {// alert("Row inseted inside of 'table_actorsParentEntity' Table :-" + this.table_actorsParentEntity);
                })["catch"](function (e) {// alert("Error to insert rows inside of 'table_actorsParentEntity' Table:- " + JSON.stringify(e));
                });
              }
            })["catch"](function (e) {// alert("Error to Get Entity Actor Rows:- " + JSON.stringify(e))
            });
          }
        }
      }, {
        key: "insertClass",
        value: function insertClass() {
          var _this41 = this;

          if (localStorage.getItem('userType') == "Actor") {
            this.databaseObj.executeSql("SELECT * FROM " + this.table_ActorClassList, []).then(function (res) {
              // alert("class list insert time length is:-" + res.rows.length);
              _this41.row_data = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this41.row_data.push(res.rows.item(i));
              } // alert("this.row_data.length :-" + this.row_data.length);


              for (var i = 0; i < _this41.row_data.length; i++) {
                if (_this41.row_data[i]['userId'] == localStorage.getItem('userId') && _this41.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
                  _this41.databaseObj.executeSql("DELETE FROM ".concat(_this41.table_ActorClassList, " WHERE userId = ").concat(_this41.row_data[i]['userId']), []).then(function (res) {// alert("Row deleted from 'table_ActorClassList' Table:-" + JSON.stringify(res));
                  })["catch"](function (e) {// alert("Error to Delete rows from 'table_ActorClassList' table" + JSON.stringify(e))
                  });
                }
              }

              for (var i = 0; i < _this41.classListArr.length; i++) {
                _this41.databaseObj.executeSql('INSERT INTO ' + _this41.table_ActorClassList + ' (userId, entityId, class_id, class_reference, class_grade, ref_grade ) VALUES ("' + localStorage.getItem('userId') + '","' + localStorage.getItem('entityId') + '","' + _this41.classListArr[i]['class_id'] + '","' + _this41.classListArr[i]['class_reference'] + '","' + _this41.classListArr[i]['class_grade'] + '","' + _this41.classListArr[i]['ref_grade'] + '")', []).then(function () {// alert("Row inseted inside of 'table_ActorClassList' Table :-" + this.table_ActorClassList);
                })["catch"](function (e) {// alert("Error to insert rows inside of 'table_ActorClassList' Table:- " + JSON.stringify(e));
                });
              }
            })["catch"](function (e) {// alert("Error to Get classList Actor Rows:- " + JSON.stringify(e))
            });
          } else if (localStorage.getItem('userType') == "Actor's Parent") {
            this.databaseObj.executeSql("SELECT * FROM " + this.table_ActorsParentClassList, []).then(function (res) {
              // alert("class list insert time length is:-" + res.rows.length);
              _this41.row_data = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this41.row_data.push(res.rows.item(i));
              } // alert("this.row_data.length :-" + this.row_data.length);


              for (var i = 0; i < _this41.row_data.length; i++) {
                if (_this41.row_data[i]['entityId'] == localStorage.getItem('entityId') && _this41.row_data[i]['actorId'] == localStorage.getItem('actorId')) {
                  _this41.databaseObj.executeSql("DELETE FROM ".concat(_this41.table_ActorsParentClassList, " WHERE actorId = ").concat(_this41.row_data[i]['actorId']), []).then(function (res) {// alert("Row deleted from 'table_ActorsParentClassList' Table:-" + JSON.stringify(res));
                  })["catch"](function (e) {// alert("Error to Delete rows from 'table_ActorsParentClassList' table" + JSON.stringify(e))
                  });
                }
              }

              for (var i = 0; i < _this41.classListArr.length; i++) {
                _this41.databaseObj.executeSql('INSERT INTO ' + _this41.table_ActorsParentClassList + ' (actorId, entityId, class_id, class_reference, class_grade, ref_grade ) VALUES ("' + localStorage.getItem('actorId') + '","' + localStorage.getItem('entityId') + '","' + _this41.classListArr[i]['class_id'] + '","' + _this41.classListArr[i]['class_reference'] + '","' + _this41.classListArr[i]['class_grade'] + '","' + _this41.classListArr[i]['ref_grade'] + '")', []).then(function () {})["catch"](function (e) {});
              }
            })["catch"](function (e) {// alert("Error to Get classList Actor Rows:- " + JSON.stringify(e))
            });
          }
        }
      }, {
        key: "getEntityActorsParent",
        value: function getEntityActorsParent() {
          var _this42 = this;

          this.databaseObj.executeSql("SELECT DISTINCT userid , id, entity_name, name_town, actorId,entity_no  FROM " + this.table_actorsParentEntity, []).then(function (res) {
            // alert("Actor's Parent Entity list length is:-" + res.rows.length);
            _this42.entityArr = [];
            _this42.row_data = [];

            for (var i = 0; i < res.rows.length; i++) {
              _this42.row_data.push(res.rows.item(i));
            } // alert("this.row_data:-" + JSON.stringify(this.row_data));


            console.log("actorId before to get rows :-" + localStorage.getItem('actorId'));
            console.log(" this.row_data Actor's Parent Modal :-" + JSON.stringify(_this42.row_data));

            for (var i = 0; i < _this42.row_data.length; i++) {
              if (_this42.row_data[i]['actorId'] == localStorage.getItem('actorId')) {
                _this42.entityArr.push(_this42.row_data[i]);
              }
            } // alert("this.entityArr.length Actor's Parent :-" + this.entityArr.length);

          })["catch"](function (e) {// alert("Error to Get Entity Actor's Parent Rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "getClassOffline",
        value: function getClassOffline() {
          var _this43 = this;

          if (localStorage.getItem('userType') == "Actor") {
            this.databaseObj.executeSql("SELECT DISTINCT userId, entityId, class_id, class_reference, class_grade, ref_grade FROM " + this.table_ActorClassList, []).then(function (res) {
              // alert("offline class list Actor :-" + res.rows.length);
              console.log("res is :-" + JSON.stringify(res.rows));

              if (res.rows.length == 0) {
                _this43.defaultClass = "";
                localStorage.removeItem('className');
                localStorage.removeItem('class_id');
              }

              _this43.row_data = [];
              _this43.classListArr = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this43.row_data.push(res.rows.item(i));
              } // alert("this.row_data.length :-" + this.row_data.length);


              for (var i = 0; i < _this43.row_data.length; i++) {
                if (_this43.row_data[i]['userId'] == localStorage.getItem('userId') && _this43.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
                  _this43.classListArr.push(_this43.row_data[i]);
                }
              }

              if (_this43.classListArr.length == 0) {
                _this43.translate.use(_this43.selectedLanguage);

                _this43.translate.get('Class is not assigned to this account,please contact your Entity Manager').subscribe(function (res) {
                  alert(res);

                  _this43.popoverCtrl.dismiss();

                  _this43.defaultClass = "";
                  localStorage.removeItem('className');
                  localStorage.removeItem('class_id');
                  localStorage.removeItem('actorName');
                  localStorage.removeItem('entityName');
                  localStorage.removeItem('loggedinflag');
                  window.location.reload(true);
                });
              } // alert("this.classListArr.length :-" + this.classListArr.length);

            })["catch"](function (e) {// alert("Error to Get classList Actor Rows:- " + JSON.stringify(e))
            });
          } else if (localStorage.getItem('userType') == "Actor's Parent") {
            this.databaseObj.executeSql("SELECT DISTINCT  actorId, entityId, class_id, class_reference, class_grade, ref_grade FROM " + this.table_ActorsParentClassList, []).then(function (res) {
              // alert("offline class list Actor's Parent :-" + res.rows.length);
              if (res.rows.length == 0) {
                _this43.defaultClass = "";
                localStorage.removeItem('className');
              }

              _this43.row_data = [];
              _this43.classListArr = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this43.row_data.push(res.rows.item(i));
              } // alert("this.row_data:-" + JSON.stringify(this.row_data));


              for (var i = 0; i < _this43.row_data.length; i++) {
                if (_this43.row_data[i]['actorId'] == localStorage.getItem('actorId') && _this43.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
                  _this43.classListArr.push(_this43.row_data[i]);
                }
              } // alert("this.classListArr.length Actor's Parent:-" + this.classListArr.length);


              if (_this43.classListArr.length == 0) {
                _this43.translate.use(_this43.selectedLanguage);

                _this43.translate.get('Class is not assigned to this account,please contact your Entity Manager').subscribe(function (res) {
                  alert(res);

                  _this43.popoverCtrl.dismiss();

                  _this43.defaultClass = "";
                  localStorage.removeItem('className');
                  localStorage.removeItem('class_id');
                  localStorage.removeItem('actorName');
                  localStorage.removeItem('entityName');
                  localStorage.removeItem('loggedinflag');
                  window.location.reload(true);
                });
              }
            })["catch"](function (e) {// alert("Error to Get classList Actor's Parent Rows :-" + JSON.stringify(e))
            });
          }
        }
      }, {
        key: "getActorEntity",
        value: function getActorEntity() {
          var _this44 = this;

          this.databaseObj.executeSql("SELECT DISTINCT userid , id, entity_name, name_town,entity_no  FROM " + this.table_actor_entity, []).then(function (res) {
            // alert("Actor Entity list length is:-" + res.rows.length);
            _this44.row_data = [];
            _this44.entityArr = [];

            for (var i = 0; i < res.rows.length; i++) {
              _this44.row_data.push(res.rows.item(i));
            } // alert("this.row_data:-" + JSON.stringify(this.row_data));


            console.log(" this.row_data Actor Modal :-" + JSON.stringify(_this44.row_data));

            for (var i = 0; i < _this44.row_data.length; i++) {
              console.log("this.row_data.length :-" + _this44.row_data.length + '//this.row_data[i][userid] :-' + _this44.row_data[i]['userid']);

              if (_this44.row_data[i]['userid'] == localStorage.getItem('userId')) {
                // console.log('this.row_data[i] ' , JSON.stringify(this.row_data[i]));
                _this44.entityArr.push(_this44.row_data[i]);
              }
            }

            console.log('this.entityArr' + JSON.stringify(_this44.entityArr)); // alert("EntityArr.length is :-" + this.entityArr.length);
          })["catch"](function (e) {// alert("Error Is to get Rows:- " + JSON.stringify(e))
          });
        }
      }]);

      return ModalPage;
    }();

    ModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
      }, {
        type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__["TranslateConfigService"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_6__["SQLite"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: src_app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
      }];
    };

    ModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal.page.scss */
      "./src/app/components/modal/modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"], src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__["TranslateConfigService"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_6__["SQLite"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], src_app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]])], ModalPage);
    /***/
  },

  /***/
  "./src/app/pipes/htmlToPlaintext.ts":
  /*!******************************************!*\
    !*** ./src/app/pipes/htmlToPlaintext.ts ***!
    \******************************************/

  /*! exports provided: HtmlToPlaintextPipe */

  /***/
  function srcAppPipesHtmlToPlaintextTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HtmlToPlaintextPipe", function () {
      return HtmlToPlaintextPipe;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var HtmlToPlaintextPipe = /*#__PURE__*/function () {
      // transform(text: string): string {
      //     console.log("text is:-" + text);
      //     return text ? String(text).replace(/<[^>]+>/gm, '') : '';
      // }
      function HtmlToPlaintextPipe(sanitizer) {
        _classCallCheck(this, HtmlToPlaintextPipe);

        this.sanitizer = sanitizer;
      }

      _createClass(HtmlToPlaintextPipe, [{
        key: "transform",
        value: function transform(value) {
          return this.sanitizer.bypassSecurityTrustHtml(value);
        }
      }]);

      return HtmlToPlaintextPipe;
    }();

    HtmlToPlaintextPipe.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }];
    };

    HtmlToPlaintextPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'htmlToPlaintext'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])], HtmlToPlaintextPipe);
    /***/
  },

  /***/
  "./src/app/pipes/pipe.ts":
  /*!*******************************!*\
    !*** ./src/app/pipes/pipe.ts ***!
    \*******************************/

  /*! exports provided: Ng2DeepSearchPipe */

  /***/
  function srcAppPipesPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2DeepSearchPipe", function () {
      return Ng2DeepSearchPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Ng2DeepSearchPipe_1;

    var Ng2DeepSearchPipe = Ng2DeepSearchPipe_1 = /*#__PURE__*/function () {
      function Ng2DeepSearchPipe() {
        _classCallCheck(this, Ng2DeepSearchPipe);
      }

      _createClass(Ng2DeepSearchPipe, [{
        key: "transform",

        /**
         * @param items object from array
         * @param term term's search
         */
        value: function transform(items, term, props) {
          if (!term || !items) return items;
          return Ng2DeepSearchPipe_1.filter(items, term, props);
        }
        /**
         *
         * @param items List of items to filter
         * @param term  a string term to compare with every property of the list
         *
         */

      }], [{
        key: "filter",
        value: function filter(items, term, columnsToExclude) {
          var toCompare = term.toLowerCase();

          function checkInside(item, term) {
            var _loop = function _loop(property) {
              if (columnsToExclude.some(function (x) {
                return x === property;
              })) {
                return "continue";
              } else {
                if (item[property] === null || item[property] == undefined) {
                  return "continue";
                }

                if (typeof item[property] === 'object') {
                  if (checkInside(item[property], term)) {
                    return {
                      v: false
                    };
                  }
                }

                if (item[property].toString().toLowerCase().includes(toCompare)) {
                  return {
                    v: true
                  };
                }
              }
            };

            for (var property in item) {
              var _ret = _loop(property);

              if (_ret === "continue") continue;
              if (typeof _ret === "object") return _ret.v;
            }

            return false;
          }

          return items.filter(function (item) {
            return checkInside(item, term);
          });
        }
      }]);

      return Ng2DeepSearchPipe;
    }();

    Ng2DeepSearchPipe = Ng2DeepSearchPipe_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'deepFilter',
      pure: false
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Ng2DeepSearchPipe);
    /***/
  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(username, password, deviceId) {
          var data = {
            'email': username,
            'password': password,
            'deviceid': deviceId
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/applogin?"), data);
        }
      }, {
        key: "getEntityData",
        value: function getEntityData(token, userid) {
          var data = {
            'token': token,
            'userId': userid
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/entityPopup"), data);
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], LoginService);
    /***/
  },

  /***/
  "./src/app/services/menu.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/menu.service.ts ***!
    \******************************************/

  /*! exports provided: MenuService */

  /***/
  function srcAppServicesMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuService", function () {
      return MenuService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var MenuService = /*#__PURE__*/function () {
      // "https://6f8c2dcef3f5.ngrok.io";
      function MenuService(http) {
        _classCallCheck(this, MenuService);

        this.http = http;
        this.DJANGO_API_SERVER = "http://103.79.100.31:9001/jawata_dev/public/upload.php";
      }

      _createClass(MenuService, [{
        key: "uploadFormData",
        value: function uploadFormData(formData) {
          // return this.http.post<any>(`${this.DJANGO_API_SERVER}/fileupload/upload.php`, formData);
          console.log('uploadFormData method called...');
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/upload.php"), formData);
        }
      }, {
        key: "uploadMultipleFormData",
        value: function uploadMultipleFormData(formData) {
          // return this.http.post<any>(`${this.DJANGO_API_SERVER}/fileupload/upload.php`, formData);
          console.log('uploadFormData method called...');
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/uploadmultiple.php"), formData);
        }
        /* Entity Name API called Here*/

      }, {
        key: "getEntityData",
        value: function getEntityData(token, userid) {
          var data = {
            'token': token,
            'userId': userid
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/entityPopup"), data);
        }
        /**Class list API called here */

      }, {
        key: "getClassList",
        value: function getClassList(userId, entityId) {
          var data = {
            'userid': userId,
            'entityid': entityId
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/loadClass"), data);
        }
        /* Subject Name API called Here*/

      }, {
        key: "getSubjectName",
        value: function getSubjectName(entityId, entityName, userId, userType, class_id) {
          var data = {
            'entityId': entityId,
            'entityName': entityName,
            'userId': userId,
            'userType': userType,
            'class_id': class_id
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/subject"), data);
        } // http://103.79.100.31:9001/api/file_operation

      }, {
        key: "downloadedFile",
        value: function downloadedFile(description, ip_address, file_name, datetime, subjectId, userId, usertype) {
          var data = {
            'description': description,
            'ip_address': ip_address,
            'file_name': file_name,
            'datetime': datetime,
            'action_id': subjectId,
            'user_id': userId,
            'user_name': 'p',
            'user_type': 'Actor'
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/file_operation"), data);
        }
        /* Feedback API Called Here */

      }, {
        key: "getFeedback",
        value: function getFeedback(locale, userId, entityId, userType) {
          var data = {
            'locale': "en",
            'userId': userId,
            'entityId': 33240,
            'userType': userType
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/feedback"), data);
        }
      }, {
        key: "insertFeedback",
        value: function insertFeedback(locale, feedback_txt, entityId, userid, userType) {
          var data = {
            'locale': locale,
            'entityId': entityId,
            'userid': userid,
            'feedback_txt': feedback_txt,
            'userType': userType
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/insertFeedback"), data);
        }
        /* Audit trail API Called Here */

      }, {
        key: "getAuditTrail",
        value: function getAuditTrail(userType, userId) {
          var data = {
            "userType": userType,
            "userId": userId
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/audit-trails"), data);
        }
        /*Profile API Called Here */

      }, {
        key: "getProfile",
        value: function getProfile(userid) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/myProfile/").concat(userid));
        }
        /* Notification API Called Here  */

      }, {
        key: "getNotification",
        value: function getNotification(entityId, userid) {
          var data = {
            'entityId': entityId,
            'userId': userid
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/notification"), data);
        }
        /** Third partry API Called Here */

      }, {
        key: "getThirdParty",
        value: function getThirdParty(entityId, userId) {
          var data = {
            'entityId': entityId,
            'userId': userId
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/third-party"), data);
        }
        /** SSO  API Called Here */

      }, {
        key: "ssoInsert",
        value: function ssoInsert(SSOVar, descriptionVar, URLVar, userIdvar, passwordVar) {
          var data = {
            'userId': localStorage.getItem('userId'),
            'entityId': localStorage.getItem('entityId'),
            'userType': localStorage.getItem('userType'),
            'txtsso_name': SSOVar,
            'txtsso_description': descriptionVar,
            'txtsso_url': URLVar,
            'txtuser_id': userIdvar,
            'txtpassword': passwordVar
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/ssoInsert"), data);
        }
      }, {
        key: "getSSO",
        value: function getSSO(userId, entityId, userType) {
          var data = {
            'userId': userId,
            'entityId': entityId,
            'userType': userType
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/ssoListing"), data);
        }
      }, {
        key: "deleteSSO",
        value: function deleteSSO(ssoId, userType, userId) {
          var data = {
            'ssoId': ssoId,
            'userType': userType,
            'userId': userId
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/ssoDelete"), data);
        }
      }, {
        key: "editSSO",
        value: function editSSO(ssoId) {
          var data = {
            'userId': ssoId
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/ssoEdit"), data);
        }
      }, {
        key: "modifySSO",
        value: function modifySSO(ssoId, SSOVar, descriptionVar, URLVar, userIdvar, passwordVar) {
          var data = {
            'userId': ssoId,
            'txtsso_name': SSOVar,
            'txtsso_description': descriptionVar,
            'txtsso_url': URLVar,
            'txtuser_id': userIdvar,
            'txtpassword': passwordVar
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/ssoUpdate"), data);
        }
        /**Forgot Password API Called Here */

      }, {
        key: "forgotpasword",
        value: function forgotpasword(emailID, birthDate, locale) {
          console.log("emailID is:-", emailID);
          console.log("birthDate is:-", birthDate);
          console.log("locale is 111==", locale);
          var data = {
            'email': emailID,
            'dob': birthDate,
            'locale': locale
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/forgot_password"), data);
        }
      }, {
        key: "getDashboardData",
        value: function getDashboardData(userId) {
          var data = {
            'userId': userId
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/actor_dashboard"), data);
        }
        /*Test session API's Called Here */

      }, {
        key: "getTestSessionData",
        value: function getTestSessionData(userId, entityId) {
          var data = {
            "user_id": userId,
            // "user_id": 1722,
            "entity_id": entityId
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/actor_test_listing"), data);
        }
      }, {
        key: "getData",
        value: function getData(id, status) {
          var data = {
            "test_session_id": id,
            "operation": status
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/list_test_session_files/open"), data);
        }
      }, {
        key: "getGrade",
        value: function getGrade(testSessionId, actorId) {
          var data = {
            // "testSessionId": 1,
            // "actorId": 1722,
            "testSessionId": testSessionId,
            "actorId": actorId
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/list_graded_files"), data);
        }
      }]);

      return MenuService;
    }();

    MenuService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], MenuService);
    /***/
  },

  /***/
  "./src/app/sidemenu/audit-trail/audit-trail.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/sidemenu/audit-trail/audit-trail.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidemenuAuditTrailAuditTrailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51L2F1ZGl0LXRyYWlsL2F1ZGl0LXRyYWlsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/sidemenu/audit-trail/audit-trail.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/sidemenu/audit-trail/audit-trail.component.ts ***!
    \***************************************************************/

  /*! exports provided: AuditTrailComponent */

  /***/
  function srcAppSidemenuAuditTrailAuditTrailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuditTrailComponent", function () {
      return AuditTrailComponent;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/menu.service */
    "./src/app/services/menu.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/translate-config.service */
    "./src/app/translate-config.service.ts");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var AuditTrailComponent = /*#__PURE__*/function () {
      function AuditTrailComponent(loadingController, datepipe, http, menuService, platform, translateConfigService, network, sqlite, router, translate, _location) {
        var _this45 = this;

        _classCallCheck(this, AuditTrailComponent);

        this.loadingController = loadingController;
        this.datepipe = datepipe;
        this.http = http;
        this.menuService = menuService;
        this.platform = platform;
        this.translateConfigService = translateConfigService;
        this.network = network;
        this.sqlite = sqlite;
        this.router = router;
        this.translate = translate;
        this._location = _location;
        this.row_data = [];
        this.database_name = "Jawata_App.db"; // declare database name

        this.table_name = "auditTrailDetails"; // declare table name

        this.tempArr = [];
        this.todaysRecord = [];
        this.yesterdayRecord = [];
        this.monthWiseRecord = [];
        this.loaderLanguage = "";
        this.heading = this.translateConfigService.get('Audit Trail');
        this.selectedLanguage = localStorage.getItem('selectedL');
        this.platform.ready().then(function () {
          _this45.createDB();

          _this45.todaysDate = _this45.datepipe.transform(new Date(), 'yyyy-MM-dd');
          var dte = new Date();
          _this45.yesterdayDate = _this45.datepipe.transform(dte.setDate(dte.getDate() - 1), 'yyyy-MM-dd'); //this.showLoader();

          _this45.getAuditTrailData();

          _this45.initializeBackButtonCustomHandler();
        })["catch"](function (error) {
          console.log('audit-trail' + error);
        });
      }

      _createClass(AuditTrailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this46 = this;

          if (localStorage.getItem('routeurlaudit-trail') === null || localStorage.getItem('routeurlaudit-trail') === 'null') {
            localStorage.setItem('routeurlaudit-trail', 'audit-trail');
            localStorage.setItem('routeurl', 'null');
            localStorage.setItem('routeurlsso', 'null');
            localStorage.setItem('routeurlresource-link', 'null');
          }
          /** heading name change after select language */


          this.translate.use(this.selectedLanguage);
          this.translate.get('Activity Log').subscribe(function (res) {
            _this46.heading = "";
            _this46.heading = res;
          });
        }
      }, {
        key: "initializeBackButtonCustomHandler",
        value: function initializeBackButtonCustomHandler() {
          var _this47 = this;

          this.platform.backButton.subscribeWithPriority(999990, function () {
            if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
              navigator['app'].exitApp();
            } else {
              _this47._location.back(); //this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);

            }
          });
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.getAuditTrailData();
          event.target.complete();
        }
      }, {
        key: "getAuditTrailData",
        value: function getAuditTrailData() {
          var _this48 = this;

          //this.showLoader();

          /**For Web API Called Here Here */
          // this.menuService.getAuditTrail(localStorage.getItem('userType'), localStorage.getItem('userId')).subscribe(data => {
          //   this.auditTrailArr = []
          //   this.auditTrailArr = data;
          //   console.log("this.auditTrailArr =", this.auditTrailArr);
          //   this.dismissLodader()
          //   this.todaysRecord = [];
          //   this.yesterdayRecord = [];
          //   this.monthWiseRecord = [];
          //   for (var i = 0; i < this.auditTrailArr.length; i++) {
          //     this.tempArr.push(this.auditTrailArr[i]['activitydate']);
          //     if (this.todaysDate == this.auditTrailArr[i]['activitydate']) {
          //       this.todaysRecord.push(this.auditTrailArr[i]);
          //     } else if (this.yesterdayDate == this.auditTrailArr[i]['activitydate']) {
          //       this.yesterdayRecord.push(this.auditTrailArr[i]);
          //     } else if (this.todaysDate != this.auditTrailArr[i]['activitydate'] && this.yesterdayDate != this.auditTrailArr[i]['activitydate']) {
          //       this.monthWiseRecord.push(this.auditTrailArr[i])
          //     }
          //   }
          //   console.log("this.todaysRecord =", this.todaysRecord);
          //   console.log("yesterdayRecord =", this.yesterdayRecord);
          //   console.log("this.monthWiseRecord =", this.monthWiseRecord);
          //   // get Unique Date Here
          //   this.tempArr = [];
          //   for (var i = 0; i < this.auditTrailArr.length; i++) {
          //     this.tempArr.push(this.datepipe.transform(this.auditTrailArr[i]['activitydate'], 'yyyy-MM'))
          //   }
          //   this.uniqueDateArr = []
          //   this.uniqueDateArr = Array.from(new Set(this.tempArr))
          // })
          var data = {
            'entity_id': localStorage.getItem('entityId'),
            "userType": localStorage.getItem('userType'),
            "userId": localStorage.getItem('userId'),
            "locale": localStorage.getItem('selectedL')
          }; // alert("Data is :-" + JSON.stringify(data));

          var headers = {
            'Content-Type': 'application/json'
          };
          console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/audit-trails"), JSON.stringify(data));
          this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/audit-trails"), data, headers).then(function (res) {
            // alert("res.data data in audit trail :-" + res.data);
            _this48.auditTrailArr = [];
            var traildatafortiemzone = [];
            traildatafortiemzone = JSON.parse(res.data); // data received by server

            console.log('Audit trails result traildatafortiemzone :-' + JSON.stringify(traildatafortiemzone));

            if (traildatafortiemzone.length > 0) {
              for (var i = 0; i < traildatafortiemzone.length; i++) {
                var utcDate = new Date(traildatafortiemzone[i]['datetime']);
                var tzOffset = new Date().getTimezoneOffset() * 60 * 1000;
                var newTime = utcDate.getTime() - tzOffset;
                var localDate = new Date(newTime);

                var auditDate = _this48.datepipe.transform(localDate, 'yyyy-MM-dd HH:mm:ss');

                var sessiontime = _this48.datepipe.transform(localDate, 'HH:mm:ss'); // let splitstr=traildatafortiemzone[i]['des'].toString();
                // let n=splitstr.split(" ");
                //     console.log('Last word :' +n[n.length - 1]);
                // let sessionstring: string = "";
                // if (traildatafortiemzone[i]['moduleName'] == "Test Session Management") {
                //   sessionstring = traildatafortiemzone[i]['des'].toString() + "<b>" + auditDate + "</b>";
                // }
                // else {
                //   sessionstring = traildatafortiemzone[i]['des'].toString();
                // }


                if (traildatafortiemzone[i]['des'].toString() != "") {
                  _this48.auditTrailArr.push({
                    'moduleName': traildatafortiemzone[i]['moduleName'],
                    'datetime': auditDate,
                    'activitydate': traildatafortiemzone[i]['activitydate'],
                    'date': traildatafortiemzone[i]['date'],
                    'des': traildatafortiemzone[i]['des'] //sessionstring.toString()

                  });
                }
              }

              _this48.insertRow();
            }
          })["catch"](function (error) {// alert("Error Get Audit Trail !" + JSON.stringify(error));
            // Loader Dimiss Here
            // this.dismissLodader();
          });
        }
      }, {
        key: "showLoader",
        value: function showLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this49 = this;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.translate.use(this.selectedLanguage);
                    this.translate.get('Loading').subscribe(function (res) {
                      _this49.loaderLanguage = "";
                      _this49.loaderLanguage = res;
                    });
                    _context9.next = 4;
                    return this.loadingController.create({
                      message: this.loaderLanguage + ' ....',
                      duration: 10000
                    }).then(function (a) {
                      a.present().then(function () {
                        console.log('presented');
                      });
                    });

                  case 4:
                    return _context9.abrupt("return", _context9.sent);

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "dismissLodader",
        value: function dismissLodader() {
          this.loadingController.dismiss().then(function () {
            return console.log('dismissed');
          });
        }
        /**Offline App Code Start Here */

      }, {
        key: "createDB",
        value: function createDB() {
          var _this50 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this50.databaseObj = db;

            _this50.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this50.table_name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, userId varchar(2), entityId varchar(2), moduleName varchar(2), datetime varchar(2), activitydate varchar(2), date varchar(2), des varchar(2))', []).then(function () {
              // alert('Database Created :-' + this.database_name);
              // alert('Table Created :-' + this.table_name);
              if (_this50.network.type == 'none') {
                _this50.getRows();
              }
            })["catch"](function (e) {// alert("Error to Create Profile Table !" + JSON.stringify(e))
            });
          })["catch"](function (e) {// alert("Error to Database Create ! " + JSON.stringify(e))
          });
        }
      }, {
        key: "insertRow",
        value: function insertRow() {
          var _this51 = this;

          this.databaseObj.executeSql("SELECT * FROM " + this.table_name, []).then(function (res) {
            // alert("res is:-" + JSON.stringify(res));
            _this51.row_data = [];

            for (var i = 0; i < res.rows.length; i++) {
              _this51.row_data.push(res.rows.item(i));
            }

            if (_this51.network.type != 'none') {
              if (res.rows.length >= 0) {
                // delete rows here
                for (var i = 0; i < _this51.row_data.length; i++) {
                  if (_this51.row_data[i]['userId'] == localStorage.getItem('userId') && _this51.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
                    _this51.databaseObj.executeSql("DELETE FROM ".concat(_this51.table_name, " WHERE userId = ").concat(_this51.row_data[i]['userId']), []).then(function (res) {// alert("Row Deleted :-" + JSON.stringify(res));
                      // this.getRows();
                    })["catch"](function (e) {// alert("error to delete rows " + JSON.stringify(e))
                    });
                  }
                } // Inserting rows here


                for (var i = 0; i < _this51.auditTrailArr.length; i++) {
                  _this51.databaseObj.executeSql('INSERT INTO ' + _this51.table_name + ' (userId, entityId, moduleName, datetime, activitydate, date, des) VALUES ("' + localStorage.getItem('userId') + '","' + localStorage.getItem('entityId') + '","' + _this51.auditTrailArr[i]['moduleName'] + '","' + _this51.auditTrailArr[i]['datetime'] + '","' + _this51.auditTrailArr[i]['activitydate'] + '","' + _this51.auditTrailArr[i]['date'] + '","' + _this51.auditTrailArr[i]['des'] + '")', []).then(function () {
                    // alert('Row Inserted!' + this.table_name);
                    _this51.getRows();
                  })["catch"](function (e) {// alert("Error Is insert Rows:- " + JSON.stringify(e))
                  });
                }
              }
            }
          })["catch"](function (e) {// alert("Error Is to get Rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "getRows",
        value: function getRows() {
          var _this52 = this;

          this.databaseObj.executeSql("SELECT * FROM " + this.table_name, []).then(function (res) {
            _this52.row_data = [];

            if (res.rows.length > 0) {
              _this52.auditTrailArr = [];
              _this52.todaysRecord = [];
              _this52.yesterdayRecord = [];
              _this52.monthWiseRecord = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this52.row_data.push(res.rows.item(i));
              }

              for (var i = 0; i < _this52.row_data.length; i++) {
                _this52.auditTrailArr.push(_this52.row_data[i]);
              }

              _this52.tempArr = []; // this.auditTrailArr.splice(0, 10);

              for (var i = 0; i < _this52.auditTrailArr.length; i++) {
                if (_this52.auditTrailArr[i]['userId'] == localStorage.getItem('userId') && _this52.auditTrailArr[i]['entityId'] == localStorage.getItem('entityId')) {
                  /**For showing today's record */
                  if (_this52.todaysDate == _this52.auditTrailArr[i]['activitydate']) {
                    _this52.todaysRecord.push(_this52.auditTrailArr[i]);
                  }
                  /**For showing yesterday's record */


                  if (_this52.yesterdayDate == _this52.auditTrailArr[i]['activitydate']) {
                    _this52.yesterdayRecord.push(_this52.auditTrailArr[i]);
                  }
                  /**For showing monthwise record */


                  if (_this52.todaysDate != _this52.auditTrailArr[i]['activitydate'] && _this52.yesterdayDate != _this52.auditTrailArr[i]['activitydate']) {
                    _this52.monthWiseRecord.push(_this52.auditTrailArr[i]);
                  }

                  _this52.tempArr.push(_this52.datepipe.transform(_this52.auditTrailArr[i]['activitydate'], 'yyyy-MM'));
                }
              } //this.tempArr = [];
              // get Unique Date Here
              // for (var i = 0; i < this.auditTrailArr.length; i++) {
              //   this.tempArr.push(this.datepipe.transform(this.auditTrailArr[i]['activitydate'], 'yyyy-MM'))
              // }


              _this52.uniqueDateArr = [];
              _this52.uniqueDateArr = Array.from(new Set(_this52.tempArr)); // console.log('this.uniqueDateArr :-' + JSON.stringify(this.uniqueDateArr));
              // this.dismissLodader();
            }
          })["catch"](function (e) {
            console.log("Error Is to get Rows:- " + JSON.stringify(e)); // this.dismissLodader();
          }); // this.dismissLodader();
        }
      }, {
        key: "doInfinite",
        value: function doInfinite(event) {
          console.log('event' + event); // this.Infinitecall(event,true);
        }
      }, {
        key: "Infinitecall",
        value: function Infinitecall(event, isLoading) {
          var _this53 = this;

          var firstcount = 11;
          var secondcount = 20;
          this.databaseObj.executeSql("SELECT * FROM " + this.table_name, []).then(function (res) {
            _this53.row_data = [];

            if (res.rows.length > 0) {
              _this53.auditTrailArr = [];
              _this53.todaysRecord = [];
              _this53.yesterdayRecord = [];
              _this53.monthWiseRecord = [];
              _this53.uniqueDateArr = [];
              _this53.tempArr = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this53.row_data.push(res.rows.item(i));
              }

              for (var i = 0; i < _this53.row_data.length; i++) {
                _this53.auditTrailArr.push(_this53.row_data[i]);
              }

              _this53.auditTrailArr.splice(firstcount, secondcount);

              console.log('this.auditTrailArr.length :' + _this53.auditTrailArr.length);

              for (var i = 0; i < _this53.auditTrailArr.length; i++) {
                if (_this53.auditTrailArr[i]['userId'] == localStorage.getItem('userId') && _this53.auditTrailArr[i]['entityId'] == localStorage.getItem('entityId')) {
                  /**For showing today's record */
                  if (_this53.todaysDate == _this53.auditTrailArr[i]['activitydate']) {
                    _this53.todaysRecord.push(_this53.auditTrailArr[i]);
                  }
                  /**For showing yesterday's record */


                  if (_this53.yesterdayDate == _this53.auditTrailArr[i]['activitydate']) {
                    _this53.yesterdayRecord.push(_this53.auditTrailArr[i]);
                  }
                  /**For showing monthwise record */


                  if (_this53.todaysDate != _this53.auditTrailArr[i]['activitydate'] && _this53.yesterdayDate != _this53.auditTrailArr[i]['activitydate']) {
                    _this53.monthWiseRecord.push(_this53.auditTrailArr[i]);
                  }

                  _this53.tempArr.push(_this53.datepipe.transform(_this53.auditTrailArr[i]['activitydate'], 'yyyy-MM'));
                }
              }

              _this53.uniqueDateArr = Array.from(new Set(_this53.tempArr));
              firstcount = firstcount + 30;
              secondcount = secondcount + 30;
              console.log('firstcount :-' + firstcount + '---secondcount :-' + secondcount); //console.log('this.uniqueDateArr :-'+ JSON.stringify(this.uniqueDateArr)); 
              // this.dismissLodader();
            }

            event.target.complete();
          })["catch"](function (e) {
            console.log("Error Is to get Rows:- " + JSON.stringify(e));
          });
        }
      }]);

      return AuditTrailComponent;
    }();

    AuditTrailComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }, {
        type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__["TranslateConfigService"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_8__["SQLite"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    AuditTrailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-audit-trail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./audit-trail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/audit-trail/audit-trail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./audit-trail.component.scss */
      "./src/app/sidemenu/audit-trail/audit-trail.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_7__["TranslateConfigService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_8__["SQLite"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])], AuditTrailComponent);
    /***/
  },

  /***/
  "./src/app/sidemenu/dashboard/dashboard.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/sidemenu/dashboard/dashboard.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidemenuDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col {\n  --ion-background-color:rgb(66, 66, 66);\n  padding: 1.25rem; }\n\nion-toolbar {\n  --ion-background-color:gray !important; }\n\n.progress-bar {\n  background-color: black !important; }\n\nion-content .progress {\n  height: 1.16rem;\n  border-radius: 4.16rem; }\n\nion-content .progress .progress-bar {\n  height: 100%; }\n\nion-content ion-text {\n  font-size: 0.875rem; }\n\nion-content .card .progress-value {\n  width: 100%;\n  text-align: center;\n  line-height: 0.99rem; }\n\nion-content .card ion-text {\n  color: #fff !important; }\n\n.mobile-table {\n  width: 100%;\n  float: left; }\n\n.mobile-table .mobile-table-inner {\n  width: 100%;\n  float: left;\n  margin: 0.50rem 0;\n  box-shadow: 0 0 0.83rem #0003;\n  padding: 1.25rem;\n  border-radius: 0.33rem;\n  border: 0.08rem solid black; }\n\n.mobile-table .mobile-table-inner .mobile-border {\n  width: 100%;\n  float: left;\n  border-bottom: 0.08rem solid #D6D6D6;\n  margin-bottom: 1.25rem; }\n\n.mobile-table .mobile-table-inner .mobile-border h5 {\n  margin-top: 0rem;\n  color: #000 !important;\n  font-family: 'arimoregular';\n  font-size: 1.20rem;\n  margin-bottom: 0.66rem; }\n\n.mobile-table .mobile-table-inner .mobile-border h5 span {\n  margin-left: 0.41rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file {\n  width: 100%;\n  float: left;\n  margin-bottom: 0.30rem;\n  font-size: 1rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file b, .mobile-table .mobile-table-inner .mobile-border .mobile-file span {\n  font-size: 0.9rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file span {\n  margin-left: 0.41rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file.mobile-file-priority {\n  margin-bottom: 1.25rem; }\n\n.mobile-table .mobile-table-inner .mobile-border:last-child {\n  border: 0;\n  margin: 0; }\n\n.mobile-table .mobile-table-inner .mobile-border:last-child .mobile-file.mobile-file-priority {\n  margin-bottom: 0; }\n\n.card-body {\n  padding: 0.80rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvQW1leS9KQVdBVEEvamF3YXRhLW1hbmFnZXIvSmF3YXRhTWFuYWdlckFwcC9zcmMvYXBwL3NpZGVtZW51L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBdUI7RUFDdkIsZ0JBQWUsRUFBQTs7QUFJbkI7RUFDSSxzQ0FBdUIsRUFBQTs7QUFHM0I7RUFDSSxrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSxlQUFlO0VBQ2Ysc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7O0FBRXhCO0VBQ0ksc0JBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFJZjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDJCQUNKLEVBQUE7O0FBR0E7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0Msb0JBQW9CLEVBQUE7O0FBRXJCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLG9CQUFvQixFQUFBOztBQUV4QjtFQUNDLHNCQUNELEVBQUE7O0FBQ0E7RUFDSSxTQUFTO0VBQ1QsU0FBUyxFQUFBOztBQUdiO0VBQ0EsZ0JBQWUsRUFBQTs7QUFHZjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lkZW1lbnUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoNjYsIDY2LCA2Nik7XG4gICAgcGFkZGluZzoxLjI1cmVtO1xuICAgIFxufVxuXG5pb24tdG9vbGJhcntcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmdyYXkgIWltcG9ydGFudDtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQgLnByb2dyZXNzIHtcbiAgICBoZWlnaHQ6IDEuMTZyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNC4xNnJlbTtcbn1cbmlvbi1jb250ZW50IC5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tY29udGVudCBpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbmlvbi1jb250ZW50IC5jYXJkIC5wcm9ncmVzcy12YWx1ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjk5cmVtO1xufVxuaW9uLWNvbnRlbnQgLmNhcmQgaW9uLXRleHR7XG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xufVxuLm1vYmlsZS10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cblxuLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDAuNTByZW0gMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMC44M3JlbSAjMDAwMztcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzNyZW07XG4gICAgYm9yZGVyOjAuMDhyZW0gc29saWQgYmxhY2tcbn1cblxuLy8gbmV3IHN0eWxlIGZvciBuZXcgZGVzaWduXG4ubW9iaWxlLXRhYmxlIC5tb2JpbGUtdGFibGUtaW5uZXIgLm1vYmlsZS1ib3JkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlci1ib3R0b206IDAuMDhyZW0gc29saWQgI0Q2RDZENjtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIGg1IHtcbiAgICBtYXJnaW4tdG9wOiAwcmVtO1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdhcmltb3JlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogMS4yMHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjY2cmVtO1xufVxuLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIGg1IHNwYW57XG5cdG1hcmdpbi1sZWZ0OiAwLjQxcmVtO1xufVxuLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIC5tb2JpbGUtZmlsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zMHJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG4ubW9iaWxlLXRhYmxlIC5tb2JpbGUtdGFibGUtaW5uZXIgLm1vYmlsZS1ib3JkZXIgLm1vYmlsZS1maWxlIGIsIC5tb2JpbGUtdGFibGUgLm1vYmlsZS10YWJsZS1pbm5lciAubW9iaWxlLWJvcmRlciAubW9iaWxlLWZpbGUgc3BhbntcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5tb2JpbGUtdGFibGUgLm1vYmlsZS10YWJsZS1pbm5lciAubW9iaWxlLWJvcmRlciAubW9iaWxlLWZpbGUgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNDFyZW07XG59XG4ubW9iaWxlLXRhYmxlIC5tb2JpbGUtdGFibGUtaW5uZXIgLm1vYmlsZS1ib3JkZXIgLm1vYmlsZS1maWxlLm1vYmlsZS1maWxlLXByaW9yaXR5e1xuXHRtYXJnaW4tYm90dG9tOjEuMjVyZW1cbn1cbi5tb2JpbGUtdGFibGUgLm1vYmlsZS10YWJsZS1pbm5lciAubW9iaWxlLWJvcmRlcjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubW9iaWxlLXRhYmxlIC5tb2JpbGUtdGFibGUtaW5uZXIgLm1vYmlsZS1ib3JkZXI6bGFzdC1jaGlsZCAubW9iaWxlLWZpbGUubW9iaWxlLWZpbGUtcHJpb3JpdHl7XG5tYXJnaW4tYm90dG9tOjA7XG59XG5cbi5jYXJkLWJvZHl7XG4gICAgcGFkZGluZzogMC44MHJlbTtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIC5tb2JpbGUtdGFibGUgLm1vYmlsZS10YWJsZS1pbm5lciB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgZmxvYXQ6IGxlZnQ7XG4vLyAgICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggIzAwMDM7XG4vLyAgICAgcGFkZGluZzogMTVweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFja1xuLy8gfVxuXG5cbi8vIC8vIG5ldyBzdHlsZSBmb3IgbmV3IGRlc2lnblxuLy8gLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBmbG9hdDogbGVmdDtcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q2RDZENjtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuLy8gfVxuLy8gLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIGg1IHtcbi8vICAgICBtYXJnaW4tdG9wOiAwO1xuLy8gICAgIGNvbG9yOiAjMENCMUUzO1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnYXJpbW9yZWd1bGFyJztcbi8vICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuLy8gfVxuLy8gLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIGg1IHNwYW57XG4vLyBcdG1hcmdpbi1sZWZ0OiA1cHg7XG4vLyB9XG4vLyAubW9iaWxlLXRhYmxlIC5tb2JpbGUtdGFibGUtaW5uZXIgLm1vYmlsZS1ib3JkZXIgLm1vYmlsZS1maWxlIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBmbG9hdDogbGVmdDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gfVxuLy8gLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIC5tb2JpbGUtZmlsZSBzcGFuIHtcbi8vICAgICBtYXJnaW4tbGVmdDogNXB4O1xuLy8gfVxuLy8gLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIC5tb2JpbGUtZmlsZS5tb2JpbGUtZmlsZS1wcmlvcml0eXtcbi8vIFx0bWFyZ2luLWJvdHRvbToxNXB4XG4vLyB9XG4vLyAubW9iaWxlLXRhYmxlIC5tb2JpbGUtdGFibGUtaW5uZXIgLm1vYmlsZS1ib3JkZXI6bGFzdC1jaGlsZCB7XG4vLyAgICAgYm9yZGVyOiAwO1xuLy8gICAgIG1hcmdpbjogMDtcbi8vIH1cblxuLy8gLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyOmxhc3QtY2hpbGQgLm1vYmlsZS1maWxlLm1vYmlsZS1maWxlLXByaW9yaXR5e1xuLy8gbWFyZ2luLWJvdHRvbTowO1xuLy8gfVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/sidemenu/dashboard/dashboard.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/sidemenu/dashboard/dashboard.component.ts ***!
    \***********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppSidemenuDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_components_entitymodal_entitymodal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/entitymodal/entitymodal.page */
    "./src/app/components/entitymodal/entitymodal.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");
    /* harmony import */


    var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/menu.service */
    "./src/app/services/menu.service.ts");
    /* harmony import */


    var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/translate-config.service */
    "./src/app/translate-config.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
    /* harmony import */


    var _ionic_native_extended_device_information_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/extended-device-information/ngx */
    "./node_modules/@ionic-native/extended-device-information/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/ionic-webview/ngx */
    "./node_modules/@ionic-native/ionic-webview/ngx/index.js"); // import * as Background from 'src/assets/js/Background';


    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(popoverCtrl, menuService, platform, datepipe, http, localNotifications, translateConfigService, router, barcodeScanner, translate, _location, splashScreen, statusBar, sqlite, file, network, extendedDeviceInformation, camera, transfer, webview) {
        _classCallCheck(this, DashboardComponent);

        this.popoverCtrl = popoverCtrl;
        this.menuService = menuService;
        this.platform = platform;
        this.datepipe = datepipe;
        this.http = http;
        this.localNotifications = localNotifications;
        this.translateConfigService = translateConfigService;
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.translate = translate;
        this._location = _location;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.sqlite = sqlite;
        this.file = file;
        this.network = network;
        this.extendedDeviceInformation = extendedDeviceInformation;
        this.camera = camera;
        this.transfer = transfer;
        this.webview = webview;
        this.selectedLanguage = localStorage.getItem('selectedL');
        this.heading = '';
        this.notificationDetails = []; // totalstorage: any;
        // freestorage: any;
        // storagepercentage: any;
        // usedstorage: any;
        // usedstoragepercentage: any;

        this.flag = false;
        this.uniqueEntity = [];
        this.perEntityData = [];
        this.entityWithSign = [];
        this.encodeData = [];
        this.showScannedData = false;
        this.title = 'QR CODE';
        this.elementType = 'url'; // value1; value2;
        // value3;

        this.scanneddata = [];
        this.table_name = "dashboard_data"; // Table name

        this.database_name = "jawata_datatable.db"; //DB name

        this.tempVar = ""; // this.networkInfo();
        // this.systemInfo();
        // console.log('localStorage.getItem(profile_image_path)' + localStorage.getItem('profile_image_path'));

        console.log('localStorage.getItem(entityName)' + localStorage.getItem('entityName') + '---actorName :- ' + localStorage.getItem('actorName') + '--ClassName---' + localStorage.getItem('className') + 'localStorage.getItem(remembermechecked) :- ' + localStorage.getItem('remembermechecked'));

        if (localStorage.getItem('userType') == "Actor") {
          // for QR code value set
          // this.value = localStorage.getItem('userId') + ',' + localStorage.getItem('email') + ',' + localStorage.getItem('citizen_id') + ',' + `${environment.apiUrl}`;
          this.value = localStorage.getItem('citizen_id').toString() + ' ';
          console.log('dashboard citizen_id' + localStorage.getItem('citizen_id'));

          if (localStorage.getItem('entityName') == null || localStorage.getItem('className') == null) {
            this.showEntityModalPopup();
          }
        } else {
          if (localStorage.getItem('entityName') == null || localStorage.getItem('actorName') == null || localStorage.getItem('className') == null) {
            this.showEntityModalPopup();
          }
        }

        this.encodeData = {
          'actorId': localStorage.getItem('userId'),
          'email': localStorage.getItem('email'),
          'citizen_id': localStorage.getItem('citizen_id'),
          'server': "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl)
        }; //Options

        this.barcodeScannerOptions = {
          showTorchButton: true,
          showFlipCameraButton: true
        };
        this.platform.ready().then(function () {// this.encodedText();
        });
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this54 = this;

          // sso if cond check for add form :- false for listing
          localStorage.setItem('AddSSO', 'false'); // after refresh it shows null for first time in subject screen

          localStorage.setItem('onClickSubjectName', 'false');
          this.platform.ready().then(function () {
            localStorage.setItem('loggedinflag', 'true');

            _this54.createDB(); // this.devicememory();
            // call device backbtn functionality


            _this54.initializeBackButtonCustomHandler(); // create directory for jawata and user to store profile images


            _this54.createdirjawata(); // Get Notification List


            _this54.getNotification(); // Get dashboard data


            _this54.getDashboardDetails(); // call this method to fetch image and filename


            _this54.Imagepathcallfromserver();

            _this54.statusBar.styleDefault();

            setTimeout(function () {
              _this54.splashScreen.hide();
            }, 10000);
          });
          this.translate.use(this.selectedLanguage);
          this.translate.get('Dashboard').subscribe(function (res) {
            _this54.heading = "";
            _this54.heading = res;
          });

          if (localStorage.getItem('notificationFlag') == 'true') {
            localStorage.removeItem('notificationFlag');
            localStorage.setItem('notificationFlag', 'false');
          }

          localStorage.setItem('routeurlsso', 'null');
          localStorage.setItem('routeurl', 'null');
          localStorage.setItem('routeurlaudit-trail', 'null');
          localStorage.setItem('routeurlresource-link', 'null');
          localStorage.setItem('routeurlfeedback', 'null');
        }
      }, {
        key: "Imagepathcallfromserver",
        value: function Imagepathcallfromserver() {
          var _this55 = this;

          if (this.network.type != 'none') {
            var forrmdata = {
              'userId': localStorage.getItem('userId')
            };
            var headers = {
              'Content-Type': 'application/json'
            };
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/image_info"), forrmdata);
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/image_info"), forrmdata, headers).then(function (res) {
              // console.log('dashboard API response  :-' + JSON.stringify(res));
              _this55.temp = [];
              _this55.temp = JSON.parse(res.data);
              console.log('dashboard this.temp :-' + JSON.stringify(_this55.temp));
              var fileName = _this55.temp.message;
              localStorage.setItem('filename', _this55.temp.message);
              var folderdir = 'Documents/Jawata/' + localStorage.getItem('userName') + '/';
              var storedpath = _this55.file.externalRootDirectory + folderdir + '/';
              var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/img/profile_images/") + fileName;

              _this55.file.checkDir(_this55.file.externalRootDirectory, folderdir.toString()).then(function (response) {
                var fileTransfer1 = _this55.transfer.create();

                fileTransfer1.download(encodeURI(url), storedpath + fileName, true).then(function (entry) {
                  //console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));
                  console.log("dashboard Downloaded File Path :-" + entry.toURL());
                  localStorage.setItem('entry_path', entry.toURL());
                });
              }, function (error) {
                _this55.createdirjawata();

                var fileTransfer1 = _this55.transfer.create();

                fileTransfer1.download(encodeURI(url), storedpath + fileName, true).then(function (entry) {
                  //console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));
                  console.log("dashboard Downloaded File Path :-" + entry.toURL());
                  localStorage.setItem('entry_path', entry.toURL());
                });
              });

              if (localStorage.getItem('profile_image_path') != _this55.temp.data) {
                localStorage.setItem('profile_image_path', _this55.temp.data);
                window.location.reload(true);
              }
            })["catch"](function (error) {
              console.log(" Error Here move file in API :-!" + JSON.stringify(error));
            });
          } else {
            var newBaseFilesystemPath = this.file.externalRootDirectory + 'Documents/Jawata/' + localStorage.getItem('userName') + '/';
            var storedPhoto = newBaseFilesystemPath + localStorage.getItem('filename');
            var displayImage = this.webview.convertFileSrc(storedPhoto);
            console.log('dashboard imagecall() displayImage :-' + displayImage);
            localStorage.setItem('profile_image_path', displayImage);
          }
        }
      }, {
        key: "createdirjawata",
        value: function createdirjawata() {
          var _this56 = this;

          this.platform.ready().then(function () {
            _this56.file.checkDir(_this56.file.externalRootDirectory, 'Documents').then(function (response) {
              console.log('Directory already present for this Jawata :- ' + response);

              _this56.file.checkDir(_this56.file.externalRootDirectory + 'Documents' + '/', 'Jawata').then(function (response) {
                console.log('Directory already present for this Jawata :- ' + response);

                _this56.file.checkDir(_this56.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('userName') + '/').then(function (response) {
                  console.log('Directory already present for this userName :- ' + response);
                }, function (error) {
                  _this56.file.createDir(_this56.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('userName').toString(), false).then(function (response) {
                    console.log('createDir for userName ', response);
                  });
                });
              }, function (error) {
                // create directory for jawata 
                _this56.file.createDir(_this56.file.externalRootDirectory + 'Documents' + '/', 'Jawata', false).then(function (response) {
                  console.log('createDir for jawata ', response); // create directory for username

                  _this56.file.createDir(_this56.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('userName').toString(), false).then(function (response) {
                    console.log('createDir for userid ', response);
                  });
                });
              });
            }, function (error) {
              _this56.file.createDir(_this56.file.externalRootDirectory, 'Documents', false).then(function (response) {
                console.log('createDir for jawata ', response);

                _this56.file.createDir(_this56.file.externalRootDirectory + 'Documents' + '/', 'Jawata', false).then(function (response) {
                  console.log('createDir for jawata ', response);

                  _this56.file.createDir(_this56.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('userName').toString(), false).then(function (response) {
                    console.log('createDir for userid ', response);
                  });
                });
              });

              _this56.file.createDir(_this56.file.externalRootDirectory + 'Documents' + '/', 'Jawata', false).then(function (response) {
                console.log('createDir for jawata ', response);
              });

              _this56.file.createDir(_this56.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('userName').toString(), false).then(function (response) {
                console.log('createDir for userid ', response);
              });
            });
          });
        }
      }, {
        key: "scanQRcode",
        value: function scanQRcode() {
          this.barcodeScanner.scan().then(function (barcodeData) {
            console.log('Barcode data', barcodeData); // this.scannedData.push(barcodeData.text)
            //({
            //"citizenid":barcodeData.text
            //})
          })["catch"](function (err) {
            console.log('Error', err);
          });
        }
      }, {
        key: "encodedText",
        value: function encodedText() {
          this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then(function (encodedData) {
            alert('encodedData' + encodedData);
            console.log('encodedData' + encodedData + '--Json encodedData :-' + JSON.stringify(encodedData)); //this.encodeData = encodedData;
          }, function (err) {
            console.log("Error occured : " + JSON.stringify(err));
          });
        } // devicememory() {
        // this.totalstorage = Math.round(cordova.plugins['extended-device-information'].totalstorage / 1024);
        // this.freestorage = Math.round(cordova.plugins['extended-device-information'].freestorage / 1024);
        // this.usedstorage = Math.round(this.totalstorage - this.freestorage);
        // this.usedstoragepercentage = Math.round((this.usedstorage / this.totalstorage) * 100);
        //     alert('this.totalstorage' + cordova.plugins['extended-device-information'].totalstorage + '--this.freestorage :-' + cordova.plugins['extended-device-information'].freestorage +  '-- memory ---' + cordova.plugins['extended-device-information'].memory);
        //     //alert('this.totalstorage' + cordova.plugins['extended-device-information'].totalstorage + '--this.freestorage :-' + cordova.plugins['extended-device-information'].freestorage + '--- this.storagepercentage:-' + this.storagepercentage + '--this.usedstorage:-' + this.usedstorage + '--memory---' + Math.round(cordova.plugins['extended-device-information'].memory / 1024));
        // alert('totalstorage'+ this.extendedDeviceInformation.totalstorage);
        //  alert('freestorage'+ this.extendedDeviceInformation.freestorage);
        //  alert('memory'+ this.extendedDeviceInformation.memory);
        // alert( 'this.extendedDeviceInformation[totalstorage] :-' + this.extendedDeviceInformation['totalstorage']);
        //   }

      }, {
        key: "initializeBackButtonCustomHandler",
        value: function initializeBackButtonCustomHandler() {
          var _this57 = this;

          this.platform.backButton.subscribeWithPriority(999990, function () {
            //alert('dashboard :'+localStorage.getItem('bckbtnpage'));
            if (localStorage.getItem('currenturl') == localStorage.getItem('currenturl')) {
              navigator['app'].exitApp();
            }

            if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
              navigator['app'].exitApp();
            } else {
              _this57._location.back(); //this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);

            }
          });
        }
      }, {
        key: "showEntityModalPopup",
        value: function showEntityModalPopup() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var popover;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.popoverCtrl.create({
                      component: src_app_components_entitymodal_entitymodal_page__WEBPACK_IMPORTED_MODULE_4__["EntitymodalPage"],
                      translucent: true,
                      backdropDismiss: false
                    });

                  case 2:
                    popover = _context10.sent;
                    _context10.next = 5;
                    return popover.present();

                  case 5:
                    return _context10.abrupt("return", _context10.sent);

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "getNotification",
        value: function getNotification() {
          var _this58 = this;

          /**For web API called Here  */
          // this.menuService.getNotification(localStorage.getItem('entityId'), localStorage.getItem('userId')).subscribe(data => {
          //   this.notification = data;
          //   console.log("notification is ==", this.notification)
          // })
          var data = {
            'userId': localStorage.getItem('userId')
          };
          var headers = {
            'Content-Type': 'application/json'
          };
          console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/notification"), JSON.stringify(data));
          this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/notification"), data, headers).then(function (res) {
            // alert("Notification res.data :-" + res.data);
            _this58.notification = [];
            _this58.notification = JSON.parse(res.data);
            console.log('this.notification' + JSON.stringify(_this58.notification));
            _this58.notificationDetails = [];

            for (var i = 0; i < _this58.notification.length; i++) {
              _this58.notificationDetails.push({
                id: i + 1,
                title: ' Subject ' + _this58.notification[i]['subject_name'] + ' has been created',
                text: ' In class ' + _this58.notification[i]['class_reference'] + ' ' + _this58.notification[i]['class_grade'] + ' Entity is ' + _this58.notification[i]['entity_name'],
                // color: 'FF0000',
                icon: 'res://drawable-hdpi/notification.png',
                smallIcon: 'res://drawable-hdpi/notification_small_icon'
              });
            } // alert("this.notificationDetails.length is =" + this.notificationDetails.length);


            _this58.localNotifications.schedule(_this58.notificationDetails);
          })["catch"](function (error) {// alert("Notification Error Here !");
          });
        }
      }, {
        key: "getDashboardDetails",
        value: function getDashboardDetails() {
          var _this59 = this;

          /**Web API Called Here */
          // this.menuService.getDashboardData(localStorage.getItem('userId')).subscribe(data => {
          //   var temp;
          //   temp = [];
          //   temp = data;
          //   this.dashboard = [];
          //   this.dashboard = temp.data;
          //   var tempArr = [];
          //   tempArr = [];
          //   for (var i = 0; i < this.dashboard.length; i++) {
          //     tempArr.push(this.dashboard[i]['entity_name'])
          //   }
          //   this.uniqueEntity = [];
          //   this.uniqueEntity = Array.from(new Set(tempArr))
          // })
          if (this.network.type != 'none') {
            if (localStorage.getItem('userType') == 'Actor') {
              var data = {
                'userId': localStorage.getItem('userId')
              };
            } else if (localStorage.getItem('userType') == "Actor's Parent") {
              var data = {
                'userId': localStorage.getItem('actorId')
              };
            }

            var headers = {
              'Content-Type': 'application/json'
            };
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/actor_dashboard"), JSON.stringify(data));
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/actor_dashboard"), data, headers).then(function (res) {
              // console.log('temp'+ JSON.stringify(res.data));
              var temp;
              temp = [];
              temp = JSON.parse(res.data);
              _this59.dashboard = [];
              _this59.dashboard = temp.data;
              var tempArr = [];
              tempArr = [];

              for (var i = 0; i < _this59.dashboard.length; i++) {
                tempArr.push(_this59.dashboard[i]['entity_name']);
              } // get unique entity here


              _this59.uniqueEntity = [];
              _this59.uniqueEntity = Array.from(new Set(tempArr));
              _this59.entityWithSign = [];

              for (var i = 0; i < _this59.uniqueEntity.length; i++) {
                _this59.entityWithSign.push({
                  'entityName': _this59.uniqueEntity[i],
                  'sign': '+'
                });
              }
              /** check data is present in table and store data  */


              _this59.platform.ready().then(function () {
                _this59.sqlite.create({
                  name: _this59.database_name,
                  location: 'default'
                }).then(function (db) {
                  _this59.databaseObj = db;

                  _this59.databaseObj.executeSql("SELECT * FROM " + _this59.table_name + " WHERE userId=?", [localStorage.getItem('userId')]).then(function (result) {
                    // alert('result is :-' + result.rows.length);
                    if (result.rows.length == 0) {
                      _this59.insertRow();
                    } else {
                      _this59.databaseObj.executeSql("DELETE FROM " + _this59.table_name + " WHERE userId=?", [localStorage.getItem('userId')]).then(function (res) {
                        // alert('row deleted successfully...');
                        _this59.insertRow();
                      });
                    }
                  });
                })["catch"](function (e) {
                  console.log("Error to Database Create ! " + JSON.stringify(e));
                });
              });
            })["catch"](function (error) {
              console.log("actor_dashboard Error :-" + JSON.stringify(error));
            });
          } else {
            this.platform.ready().then(function () {
              _this59.sqlite.create({
                name: _this59.database_name,
                location: 'default'
              }).then(function (db) {
                _this59.databaseObj = db;

                _this59.getRows();
              })["catch"](function (e) {
                console.log("Error to Database Create ! " + JSON.stringify(e));
              });
            });
          }
        }
      }, {
        key: "entityWiseData",
        value: function entityWiseData(entity, index) {
          this.perEntityData = [];
          this.tempVar = "";

          for (var i = 0; i < this.dashboard.length; i++) {
            if (entity == this.dashboard[i]['entity_name']) {
              this.perEntityData.push(this.dashboard[i]);
              this.tempVar = "";
            }
          }

          this.tempArr = [];
          this.tempArr = this.entityWithSign;
          this.entityWithSign = [];

          for (var i = 0; i < this.tempArr.length; i++) {
            if (this.tempArr[i]['sign'] == '-' && this.tempArr[i]['entityName'] == entity) {
              this.perEntityData = [];
              this.tempVar = "";
              this.tempVar = "-";
            }

            if (this.tempArr[i]['sign'] == '+' && this.tempArr[i]['entityName'] == entity) {
              this.entityWithSign.push({
                'entityName': this.tempArr[i]['entityName'],
                'sign': '-'
              });
            } else {
              this.entityWithSign.push({
                'entityName': this.tempArr[i]['entityName'],
                'sign': '+'
              });
            }
          } // for (var i = 0; i < this.tempArr.length; i++) {
          //   if (this.tempArr[i]['sign'] == '-' && this.tempArr[i]['entityName'] == entity) {
          //     this.perEntityData = []
          //     this.tempVar = "";
          //     this.tempVar = "-";
          //   }
          // }


          if (this.tempVar != "-" && entity != "" && this.perEntityData.length == 0) {
            this.translate.get('There is no class under this entity').subscribe(function (res) {
              alert(res);
            });
          }
        }
      }, {
        key: "createDB",
        value: function createDB() {
          var _this60 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this60.databaseObj = db;

            _this60.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this60.table_name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, userId varchar(2), file_name varchar(2), file_priority varchar(2), file_size varchar(2), file_type varchar(2), is_download varchar(2), class_ref varchar(2), subject_name varchar(2), entity_name varchar(2))', []).then(function () {// if (this.network.type == 'none') {
              //   this.getRows();
              // }
            })["catch"](function (e) {
              console.log("Error to Create Profile Table !" + JSON.stringify(e));
            });
          })["catch"](function (e) {
            console.log("Error to Database Create ! " + JSON.stringify(e));
          });
        }
      }, {
        key: "insertRow",
        value: function insertRow() {
          var _this61 = this;

          this.platform.ready().then(function () {
            for (var i = 0; i < _this61.dashboard.length; i++) {
              _this61.databaseObj.executeSql('INSERT INTO ' + _this61.table_name + ' (userId, file_name, file_priority, file_size, file_type, is_download, class_ref, subject_name, entity_name) VALUES ("' + localStorage.getItem('userId') + '","' + _this61.dashboard[i]['file_name'] + '","' + _this61.dashboard[i]['file_priority'] + '","' + _this61.dashboard[i]['file_size'] + '","' + _this61.dashboard[i]['file_type'] + '","' + _this61.dashboard[i]['is_download'] + '","' + _this61.dashboard[i]['class_ref'] + '","' + _this61.dashboard[i]['subject_name'] + '","' + _this61.dashboard[i]['entity_name'] + '")', []).then(function () {// alert('Row Inserted!' + this.table_name);
                //this.getRows();
              })["catch"](function (e) {
                console.log("Error Is insert Rows:- " + JSON.stringify(e));
              });
            }
          });
        }
      }, {
        key: "getRows",
        value: function getRows() {
          var _this62 = this;

          this.platform.ready().then(function () {
            _this62.databaseObj.executeSql("SELECT * FROM " + _this62.table_name + " WHERE userId=?", [localStorage.getItem('userId')]).then(function (res) {
              // alert('result' + res.rows.length);
              if (res.rows.length > 0) {
                _this62.dashboard = [];

                for (var i = 0; i < res.rows.length; i++) {
                  _this62.dashboard.push(res.rows.item(i));
                }
              }

              var tempArr = [];
              tempArr = [];

              for (var i = 0; i < _this62.dashboard.length; i++) {
                tempArr.push(_this62.dashboard[i]['entity_name']);
              } // get unique entity here


              _this62.uniqueEntity = [];
              _this62.uniqueEntity = Array.from(new Set(tempArr));
              _this62.entityWithSign = [];

              for (var i = 0; i < _this62.uniqueEntity.length; i++) {
                _this62.entityWithSign.push({
                  'entityName': _this62.uniqueEntity[i],
                  'sign': '+'
                });
              }
            });
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
      }, {
        type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_8__["MenuService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"]
      }, {
        type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_9__["TranslateConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_17__["BarcodeScanner"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_12__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__["StatusBar"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_15__["SQLite"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__["File"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__["Network"]
      }, {
        type: _ionic_native_extended_device_information_ngx__WEBPACK_IMPORTED_MODULE_18__["ExtendedDeviceInformation"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_19__["Camera"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_20__["FileTransfer"]
      }, {
        type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_21__["WebView"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/sidemenu/dashboard/dashboard.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_8__["MenuService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"], src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_9__["TranslateConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_17__["BarcodeScanner"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_12__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__["StatusBar"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_15__["SQLite"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__["File"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__["Network"], _ionic_native_extended_device_information_ngx__WEBPACK_IMPORTED_MODULE_18__["ExtendedDeviceInformation"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_19__["Camera"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_20__["FileTransfer"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_21__["WebView"]])], DashboardComponent); //   systemInfo() {
    //     Background.runtime.sendMessage("chrome extension id",
    //             {type: 'systemInfo', id: 1}, null,
    //             function (data) {
    //                 console.log(data);
    //             }
    //     );
    // }
    // networkInfo() {
    //   Background.runtime.sendMessage("chrome extension id",
    //           {type: 'memory', id: 1}, null,
    //           function (data) {
    //               console.log(data);
    //           }
    //   );
    // }

    /***/
  },

  /***/
  "./src/app/sidemenu/feedback/feedback.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/sidemenu/feedback/feedback.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidemenuFeedbackFeedbackComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#btn {\n  color: white;\n  border-radius: 0.41rem;\n  width: 6.66rem;\n  height: 3.33rem;\n  background-color: darkgray;\n  color: black;\n  background-color: white;\n  margin: auto; }\n\n#datedisplay {\n  display: none; }\n\nion-textarea {\n  width: 100% !important;\n  margin: 2% !important; }\n\nion-input, input {\n  padding: 0rem !important;\n  font-size: 1rem !important; }\n\ninput {\n  padding: 0rem !important; }\n\n.submit button {\n  width: 100% !important;\n  background: #343a40 !important; }\n\n.submit.cancel button {\n  background: transparent !important;\n  color: #343a40 !important;\n  border: 0.08rem solid #343a40; }\n\ninput.native-input {\n  padding: 0rem !important;\n  opacity: 0.44rem !important; }\n\n.submit ion-icon, .cancel ion-icon {\n  width: 2rem !important;\n  height: 2rem !important;\n  background: #000 !important;\n  color: #fff !important;\n  border-radius: 50% !important;\n  padding: 0.83rem; }\n\n.char-input .native-input {\n  padding: 0rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvQW1leS9KQVdBVEEvamF3YXRhLW1hbmFnZXIvSmF3YXRhTWFuYWdlckFwcC9zcmMvYXBwL3NpZGVtZW51L2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUFFLHNCQUFzQjtFQUFFLGNBQWM7RUFBRSxlQUFlO0VBQ3JFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFFaEI7RUFFQSxhQUFhLEVBQUE7O0FBS2I7RUFDSSxzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksd0JBQXdCO0VBQ3hCLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLHdCQUF3QixFQUFBOztBQUU1QjtFQUNJLHNCQUFzQjtFQUN0Qiw4QkFBOEIsRUFBQTs7QUFFbEM7RUFDSSxrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLHdCQUF3QjtFQUN4QiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51L2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2J0bntcbiAgICBjb2xvcjogd2hpdGU7IGJvcmRlci1yYWRpdXM6IDAuNDFyZW07IHdpZHRoOiA2LjY2cmVtOyBoZWlnaHQ6IDMuMzNyZW07IFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5OyAgXG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgXG4gICAgbWFyZ2luOiBhdXRvO1xufVxuI2RhdGVkaXNwbGF5XG57XG5kaXNwbGF5OiBub25lO1xufVxuLy8gaW9uLXRvb2xiYXJ7XG4vLyAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpncmF5O1xuLy8gfVxuaW9uLXRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMiUgIWltcG9ydGFudDtcbn1cbmlvbi1pbnB1dCwgaW5wdXQge1xuICAgIHBhZGRpbmc6IDByZW0gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn1cbmlucHV0e1xuICAgIHBhZGRpbmc6IDByZW0gIWltcG9ydGFudDtcbn1cbi5zdWJtaXQgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICMzNDNhNDAgIWltcG9ydGFudDtcbn1cbi5zdWJtaXQuY2FuY2VsIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzM0M2E0MCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC4wOHJlbSBzb2xpZCAjMzQzYTQwO1xufVxuaW5wdXQubmF0aXZlLWlucHV0IHtcbiAgICBwYWRkaW5nOiAwcmVtICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMC40NHJlbSAhaW1wb3J0YW50O1xufVxuLnN1Ym1pdCBpb24taWNvbiwgLmNhbmNlbCBpb24taWNvbntcbiAgICB3aWR0aDogMnJlbSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMnJlbSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAuODNyZW07XG59XG4uY2hhci1pbnB1dCAubmF0aXZlLWlucHV0e1xuICAgIHBhZGRpbmc6IDByZW07XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/sidemenu/feedback/feedback.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/sidemenu/feedback/feedback.component.ts ***!
    \*********************************************************/

  /*! exports provided: FeedbackComponent */

  /***/
  function srcAppSidemenuFeedbackFeedbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function () {
      return FeedbackComponent;
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


    var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/menu.service */
    "./src/app/services/menu.service.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/translate-config.service */
    "./src/app/translate-config.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var FeedbackComponent = /*#__PURE__*/function () {
      function FeedbackComponent(router, menuService, nativestorage, sqlite, platform, http, translateConfigService, loadingController, _location, popoverCtrl, translate, datepipe, network, formBuilder) {
        var _this63 = this;

        _classCallCheck(this, FeedbackComponent);

        this.router = router;
        this.menuService = menuService;
        this.nativestorage = nativestorage;
        this.sqlite = sqlite;
        this.platform = platform;
        this.http = http;
        this.translateConfigService = translateConfigService;
        this.loadingController = loadingController;
        this._location = _location;
        this.popoverCtrl = popoverCtrl;
        this.translate = translate;
        this.datepipe = datepipe;
        this.network = network;
        this.formBuilder = formBuilder;
        this.feedbackArr = [];
        this.feedbackText = ""; //input field

        this.today = new Date();
        this.heading = this.translateConfigService.get('Feedback');
        this.row_data = [];
        this.database_name = "jawata_datatable.db"; //DB name

        this.feedbackTable_Name = "feedbackListStored"; // Declare table name here

        this.selectedLanguage = localStorage.getItem('selectedL');
        this.loaderLanguage = "";
        this.isSubmitted = false;
        this.platform.ready().then(function () {
          _this63.createDB();

          _this63.getFeedbackData();

          _this63.initializeBackButtonCustomHandler();
        })["catch"](function (error) {
          console.log('getfeedback' + error);
        });
      }

      _createClass(FeedbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this64 = this;

          this.feedbackForm = this.formBuilder.group({
            // feedbackText: ['', [Validators.required, Validators.pattern('[A-Za-z\d!$%@#£€*?&]')]]
            feedbackText: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]]
          });
          /** heading name change after select language */

          this.translate.use(this.selectedLanguage);
          this.translate.get('Contact customer support').subscribe(function (res) {
            _this64.heading = "";
            _this64.heading = res;
          });

          if (localStorage.getItem('routeurlfeedback') === null || localStorage.getItem('routeurlfeedback') === 'null') {
            localStorage.setItem('routeurlfeedback', 'feedback');
            localStorage.setItem('routeurl', 'null');
            localStorage.setItem('routeurlaudit-trail', 'null');
            localStorage.setItem('routeurlthird-party', 'null');
            localStorage.setItem('routeurlsso', 'null');
            localStorage.setItem('routeurlfeedback', 'null');
          }
        }
      }, {
        key: "initializeBackButtonCustomHandler",
        value: function initializeBackButtonCustomHandler() {
          var _this65 = this;

          this.platform.backButton.subscribeWithPriority(999990, function () {
            if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
              navigator['app'].exitApp();
            } else {
              _this65._location.back();

              _this65.dismissLodader(); //this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);

            }
          });
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.getFeedbackData();
          event.target.complete();
        }
      }, {
        key: "getFeedbackData",
        value: function getFeedbackData() {
          var _this66 = this;

          /**Web API Called Here */
          // this.menuService.getFeedback(localStorage.getItem('language'), localStorage.getItem('userId'), localStorage.getItem('entityId'), localStorage.getItem('userType')).subscribe(data => {
          //   var temp
          //   temp = [];
          //   temp = data;
          //   for (var i = 0; i < temp.length; i++) {
          //     this.feedbackArr.push({
          //       "id": temp[i]['id'],
          //       "feedbackDate": temp[i]['feedbackDate'] + '   ' + 'UTC',
          //       "feedbackText": temp[i]['feedbackText'],
          //       "Message": temp[i]['Message']
          //     })
          //   }
          // })
          var data = {
            'locale': localStorage.getItem('selectedL'),
            'userId': localStorage.getItem('userId'),
            'entityId': localStorage.getItem('entityId'),
            'userType': localStorage.getItem('userType')
          }; // alert("data :-" + JSON.stringify(data));

          var headers = {
            'Content-Type': 'application/json'
          };
          console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/feedback"), JSON.stringify(data));
          this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/feedback"), data, headers).then(function (res) {
            // alert("res.data Get feedback :-" + JSON.parse(res.data.length))
            _this66.tempArr = [];
            _this66.tempArr = JSON.parse(res.data);
            console.log('api response api/feedback :' + JSON.stringify(_this66.tempArr));
            _this66.feedbackArr = [];

            for (var i = 0; i < _this66.tempArr.length; i++) {
              var utcDate = new Date(_this66.tempArr[i]['feedbackDate']);
              var tzOffset = new Date().getTimezoneOffset() * 60 * 1000;
              var newTime = utcDate.getTime() - tzOffset;
              var localDate = new Date(newTime);

              var grademyDate = _this66.datepipe.transform(localDate, 'yyyy-MM-dd HH:mm:ss');

              _this66.feedbackArr.push({
                "id": _this66.tempArr[i]['id'],
                "feedbackDate": grademyDate,
                "feedbackText": _this66.tempArr[i]['feedbackText'],
                "Message": _this66.tempArr[i]['Message']
              });
            }

            _this66.insertRow(); // Dismiss Loader Here


            _this66.dismissLodader();
          })["catch"](function (error) {
            //alert("Error In Get Feedback Data !");
            // Dismiss Loader Here
            _this66.dismissLodader();
          });
        }
      }, {
        key: "submitFeedback",
        value: function submitFeedback() {
          var _this67 = this;

          this.isSubmitted = true;

          if (!this.feedbackForm.valid) {
            return false;
          } else {
            // this.menuService.insertFeedback(localStorage.getItem('selectedL'), localStorage.getItem('entityId'), localStorage.getItem('userId'), this.feedbackText, localStorage.getItem('userType')).subscribe(data => {
            //   this.getFeedbackData();
            // });
            if (this.network.type != "none") {
              var data = {
                'locale': localStorage.getItem('selectedL'),
                'entityId': localStorage.getItem('entityId'),
                'userid': localStorage.getItem('userId'),
                'feedback_txt': this.feedbackText,
                'userType': localStorage.getItem('userType')
              }; // alert("Submit time data is :-" + JSON.stringify(data));

              var headers = {
                'Content-Type': 'application/json'
              }; // Loader true Here

              this.showLoader();
              console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/insertFeedback"), JSON.stringify(data));
              this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/insertFeedback"), data, headers).then(function (res) {
                // alert("res.data Submit feedback :-" + res.data);
                var temp = JSON.parse(res.data);

                _this67.dismissLodader();

                alert(temp.message);
                _this67.isSubmitted = false;

                _this67.getFeedbackData();

                _this67.feedbackText = "";

                _this67.dismissLodader();
              })["catch"](function (error) {
                //alert("Feedback Submit Error !");
                // Dismiss Loader Here
                _this67.dismissLodader();
              });
            } else {
              this.translate.use(this.selectedLanguage);
              this.translate.get('Before you submit Contact customer support, Please connect to internet connection').subscribe(function (res) {
                alert(res);
              });
            }
          }
        }
      }, {
        key: "showLoader",
        value: function showLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this68 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.translate.use(this.selectedLanguage);
                    this.translate.get('Sending').subscribe(function (res) {
                      _this68.loaderLanguage = "";
                      _this68.loaderLanguage = res;
                    });
                    _context11.next = 4;
                    return this.loadingController.create({
                      message: this.loaderLanguage + ' ....',
                      duration: 20000
                    }).then(function (a) {
                      a.present().then(function () {
                        console.log('presented');
                      });
                    });

                  case 4:
                    return _context11.abrupt("return", _context11.sent);

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "dismissLodader",
        value: function dismissLodader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.loadingController.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 2:
                    return _context12.abrupt("return", _context12.sent);

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
        /**Offline App Code Start Here */

      }, {
        key: "createDB",
        value: function createDB() {
          var _this69 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this69.databaseObj = db;

            _this69.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this69.feedbackTable_Name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, userId varchar(2), entityId varchar(2), feedbackDate varchar(2), feedbackText varchar(2))', []).then(function () {
              // alert('Database Created :-' + this.database_name);
              // alert('Table Created :-' + this.feedbackTable_Name);
              if (_this69.network.type == 'none') {
                _this69.getRows();
              }
            })["catch"](function (e) {// alert("Error to Create feedback Table !" + JSON.stringify(e))
            });
          })["catch"](function (e) {// alert("Error to Database Create ! " + JSON.stringify(e))
          });
        }
      }, {
        key: "insertRow",
        value: function insertRow() {
          var _this70 = this;

          this.databaseObj.executeSql("SELECT * FROM " + this.feedbackTable_Name, []).then(function (res) {
            // alert("res is:-" + JSON.stringify(res));
            _this70.row_data = [];

            for (var i = 0; i < res.rows.length; i++) {
              _this70.row_data.push(res.rows.item(i));
            } // delete rows here


            for (var i = 0; i < _this70.row_data.length; i++) {
              if (_this70.row_data[i]['userId'] == localStorage.getItem('userId') && _this70.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
                _this70.databaseObj.executeSql("DELETE FROM ".concat(_this70.feedbackTable_Name, " WHERE userId = ").concat(_this70.row_data[i]['userId']), []).then(function (res) {// alert("Row Deleted :-" + JSON.stringify(res));
                })["catch"](function (e) {// alert("error to delete rows " + JSON.stringify(e))
                });
              }
            } // alert("this.feedbackArr :-" + JSON.stringify(this.feedbackArr));
            // Inserting rows here


            for (var i = 0; i < _this70.feedbackArr.length; i++) {
              _this70.databaseObj.executeSql('INSERT INTO ' + _this70.feedbackTable_Name + '(userId, entityId, feedbackDate, feedbackText) VALUES ("' + localStorage.getItem('userId') + '","' + localStorage.getItem('entityId') + '","' + _this70.feedbackArr[i]['feedbackDate'] + '","' + _this70.feedbackArr[i]['feedbackText'] + '")', []).then(function () {// alert('Row Inserted!' + this.feedbackTable_Name);
              })["catch"](function (e) {// alert("Error Is insert Rows:- " + JSON.stringify(e))
              });
            }
          })["catch"](function (e) {// alert("Error Is to get Rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "getRows",
        value: function getRows() {
          var _this71 = this;

          this.databaseObj.executeSql("SELECT * FROM " + this.feedbackTable_Name, []).then(function (res) {
            // alert("res is :-" + JSON.stringify(res));
            _this71.row_data = [];

            if (res.rows.length > 0) {
              _this71.feedbackArr = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this71.row_data.push(res.rows.item(i));
              }

              for (var i = 0; i < _this71.row_data.length; i++) {
                if (_this71.row_data[i]['userId'] == localStorage.getItem('userId') && _this71.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
                  _this71.feedbackArr.push(_this71.row_data[i]);
                }
              }
            }
          })["catch"](function (e) {// alert("Error Is to get Rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.feedbackForm.controls;
        }
      }]);

      return FeedbackComponent;
    }();

    FeedbackComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__["SQLite"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]
      }, {
        type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_9__["TranslateConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"]
      }];
    };

    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feedback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feedback.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/feedback/feedback.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feedback.component.scss */
      "./src/app/sidemenu/feedback/feedback.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_4__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"], src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_9__["TranslateConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"]])], FeedbackComponent);
    /***/
  },

  /***/
  "./src/app/sidemenu/logout/logout.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/sidemenu/logout/logout.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidemenuLogoutLogoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51L2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/sidemenu/logout/logout.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/sidemenu/logout/logout.component.ts ***!
    \*****************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppSidemenuLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var LogoutComponent = /*#__PURE__*/function () {
      function LogoutComponent(router, network, translateConfigService, platform, _location) {
        _classCallCheck(this, LogoutComponent);

        this.router = router;
        this.network = network;
        this.translateConfigService = translateConfigService;
        this.platform = platform;
        this._location = _location;
        this.heading = this.translateConfigService.get('Logout');
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this72 = this;

          this.platform.ready().then(function () {
            // call device backbtn functionality
            _this72.initializeBackButtonCustomHandler();
          });

          if (localStorage.getItem('remembermechecked') != 'true') {
            localStorage.removeItem('USERNAME');
            localStorage.removeItem('PASSWORD');
            localStorage.removeItem('remembermechecked');
          }

          localStorage.setItem('lastloggedinuserid', localStorage.getItem('userId'));
          localStorage.setItem('lastloggedinentityId', localStorage.getItem('entityId'));
          localStorage.setItem('lastloggedinentityName', localStorage.getItem('entityName'));
          localStorage.setItem('lastloggedinentityName', localStorage.getItem('entityName'));
          localStorage.removeItem('loggedinflag');
          localStorage.removeItem('selectedL');
          localStorage.removeItem('ischecked');
          localStorage.removeItem("token");
          localStorage.removeItem("actorName");
          localStorage.removeItem("notificationFlag");
          localStorage.removeItem("bckbtnpage");
          localStorage.removeItem("currenturl");
          localStorage.removeItem('userName'), localStorage.removeItem('email'), localStorage.removeItem("selectedL");
          localStorage.removeItem("entityName");
          localStorage.removeItem("entityId");
          localStorage.removeItem('className');
          localStorage.removeItem('class_id'); //class_id    

          localStorage.removeItem('subject_id');
          localStorage.removeItem('subject_name'); //class_id   

          localStorage.removeItem("entity_no");
          localStorage.removeItem("actorId");
          localStorage.removeItem("userId");
          localStorage.removeItem('classId');
          localStorage.removeItem('className');
          localStorage.removeItem('class_id');
          localStorage.removeItem('citizen_id');
          localStorage.removeItem('cameraAction');
          localStorage.removeItem('scanAction');
          localStorage.removeItem('scanAlarm');
          window.location.reload(true);
          /** 04-05-2020 :- route shows white blank space before navigate to login page*/
          //this.router.navigateByUrl('app-home', { replaceUrl: true });
        }
      }, {
        key: "initializeBackButtonCustomHandler",
        value: function initializeBackButtonCustomHandler() {
          this.platform.backButton.subscribeWithPriority(999990, function () {
            navigator['app'].exitApp();
          });
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"]
      }, {
        type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }];
    };

    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/logout/logout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.component.scss */
      "./src/app/sidemenu/logout/logout.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"], src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/sidemenu/profile/profile.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/sidemenu/profile/profile.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidemenuProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".colFontSize {\n  font-size: 0.99rem; }\n\n.loading-content {\n  display: none; }\n\nion-input {\n  border: 0.08rem solid black;\n  border-radius: 0.41rem;\n  border-color: darkgrey; }\n\nion-datetime {\n  border: 0.08rem solid black;\n  border-radius: 0.41rem;\n  border-color: darkgrey; }\n\nion-item {\n  border-bottom: transparent; }\n\n.icons {\n  vertical-align: middle;\n  font-size: 11.53rem;\n  margin-left: 3.33rem; }\n\n.sso-title ion-title {\n  padding: 0rem 10.41rem;\n  text-align: left; }\n\n.ion-color-primary {\n  --ion-color-base: #343a40!important; }\n\n.alert-2-hdr {\n  font-size: 5.97rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvQW1leS9KQVdBVEEvamF3YXRhLW1hbmFnZXIvSmF3YXRhTWFuYWdlckFwcC9zcmMvYXBwL3NpZGVtZW51L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSwyQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLDJCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksbUNBQWlCLEVBQUE7O0FBT3JCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWRlbWVudS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sRm9udFNpemV7XG4gICAgZm9udC1zaXplOiAwLjk5cmVtO1xufVxuLmxvYWRpbmctY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuaW9uLWlucHV0IHtcbiAgICBib3JkZXI6MC4wOHJlbSBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAwLjQxcmVtO1xuICAgIGJvcmRlci1jb2xvcjogZGFya2dyZXk7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gICAgYm9yZGVyOjAuMDhyZW0gc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMC40MXJlbTtcbiAgICBib3JkZXItY29sb3I6IGRhcmtncmV5O1xufVxuXG5pb24taXRlbXtcbiAgICBib3JkZXItYm90dG9tOiB0cmFuc3BhcmVudDtcbn1cbi5pY29uc3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGZvbnQtc2l6ZTogMTEuNTNyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDMuMzNyZW07XG59XG4uc3NvLXRpdGxlIGlvbi10aXRsZXtcbiAgICBwYWRkaW5nOiAwcmVtIDEwLjQxcmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaW9uLWNvbG9yLXByaW1hcnl7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzM0M2E0MCFpbXBvcnRhbnQ7XG59XG4kY29sb3JzOiAoXG4gICAgcHJpbWFyeTojMzQzYTQwLFxuICAgIGlvbi1jb2xvci1iYXNlOiAjMzQzYTQwICFpbXBvcnRhbnQsXG4pO1xuXG4uYWxlcnQtMi1oZHJ7XG4gICAgZm9udC1zaXplOiA1Ljk3cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/sidemenu/profile/profile.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/sidemenu/profile/profile.component.ts ***!
    \*******************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppSidemenuProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
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


    var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/menu.service */
    "./src/app/services/menu.service.ts");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/translate-config.service */
    "./src/app/translate-config.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(menuService, http, network, platform, translateConfigService, datePipe, router, formBuilder, _location, translate, sqlite, statusBar) {
        var _this73 = this;

        _classCallCheck(this, ProfileComponent);

        this.menuService = menuService;
        this.http = http;
        this.network = network;
        this.platform = platform;
        this.translateConfigService = translateConfigService;
        this.datePipe = datePipe;
        this.router = router;
        this.formBuilder = formBuilder;
        this._location = _location;
        this.translate = translate;
        this.sqlite = sqlite;
        this.statusBar = statusBar;
        this.heading = this.translateConfigService.get('My profile');
        this.profileDetailArr = [];
        this.notificationDetails = [];
        this.profileList = true;
        this.editProfileForm = false;
        this.isSubmitted = false;
        this.profile_title = "";
        this.profile_fName = "";
        this.profile_lname = "";
        this.profile_email = "";
        this.profile_dob = "";
        this.profile_userName = "";
        this.profile_userId = "";
        this.profile_national_id = "";
        this.profile_address_line1 = "";
        this.profile_address_line2 = "";
        this.profile_town = "";
        this.profile_postCode = "";
        this.selectedLanguage = localStorage.getItem('selectedL');
        this.row_data = [];
        this.database_name = "Jawata_App.db"; //DB name

        this.table_name = "profileDetailsTable"; // Table 

        this.platform.ready().then(function () {
          if (_this73.platform.is('android')) {
            _this73.statusBar.backgroundColorByHexString('#f1f1f1');
          }

          _this73.createDB();

          _this73.getProfileData();

          _this73.initializeBackButtonCustomHandler();
        })["catch"](function (error) {
          console.log('subjects' + error);
        });
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this74 = this;

          console.log('this.selectedLanguage' + this.selectedLanguage);
          this.profileForm = this.formBuilder.group({
            profileFirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            profileLastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            profileEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
            profileDOB: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            profileUsername: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]]
          });
          /** heading name change after select language */

          this.translate.use(this.selectedLanguage);
          this.translate.get('My profile').subscribe(function (res) {
            _this74.heading = "";
            _this74.heading = res;
          });
        }
      }, {
        key: "initializeBackButtonCustomHandler",
        value: function initializeBackButtonCustomHandler() {
          var _this75 = this;

          this.platform.backButton.subscribeWithPriority(999990, function () {
            if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
              navigator['app'].exitApp();
            } else {
              _this75._location.back(); //this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);

            }
          });
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.getProfileData();
          event.target.complete();
        }
      }, {
        key: "getProfileData",
        value: function getProfileData() {
          var _this76 = this;

          /**For Web API called Here */
          // this.menuService.getProfile(localStorage.getItem('userId')).subscribe(data => {
          //   this.tempArr = data;
          //   this.profileDetailArr = [];
          //   this.profileDetailArr = [
          //     { title: 'Title', detail: this.tempArr[0]['title'] },
          //     { title: 'First Name', detail: this.tempArr[0]['firstName'] },
          //     { title: 'Last Name', detail: this.tempArr[0]['lastName'] },
          //     { title: 'Email', detail: this.tempArr[0]['email'] },
          //     { title: 'Birth Date', detail: this.tempArr[0]['dob'] },
          //     { title: 'User ID', detail: this.tempArr[0]['id'] },
          //     { title: 'Citizen ID', detail: this.tempArr[0]['citizen_id'] },
          //     { title: 'Address', detail: this.tempArr[0]['address_line1'] + '' + this.tempArr[0]['address_line2'] },
          //     { title: 'Town', detail: this.tempArr[0]['town'] },
          //     { title: 'Postcode', detail: this.tempArr[0]['post_code'] },
          //   ]
          // })
          var headers = {
            'Content-Type': 'application/json'
          };
          console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/myProfile/").concat(localStorage.getItem('userId')));
          this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/myProfile/").concat(localStorage.getItem('userId')), {}, headers).then(function (res) {
            _this76.tempArr = [];
            _this76.tempArr = JSON.parse(res.data); // data received by server

            console.log("this.tempArr get profile :-" + JSON.stringify(_this76.tempArr));

            _this76.translate.setDefaultLang(_this76.selectedLanguage);

            _this76.translate.use(_this76.selectedLanguage);

            _this76.translateConfigService.setLanguage(_this76.selectedLanguage);

            console.log('this.selectedLanguage myProfile :' + _this76.selectedLanguage);
            _this76.profileDetailArr = [];
            _this76.profileDetailArr = [{
              title: _this76.translateConfigService.get('Title'),
              detail: _this76.tempArr[0]['title'].toString() == 'Miss' ? 'Ms' : _this76.tempArr[0]['title'].toString() == 'miss' ? 'Ms' : _this76.tempArr[0]['title'].toString() == 'MIss' ? 'Ms' : _this76.tempArr[0]['title'].toString() == 'mr' ? 'Mr' : 'Mr'
            }, {
              title: _this76.translateConfigService.get('First Name'),
              detail: _this76.tempArr[0]['firstName']
            }, {
              title: _this76.translateConfigService.get('Last Name'),
              detail: _this76.tempArr[0]['lastName']
            }, {
              title: _this76.translateConfigService.get('Email'),
              detail: _this76.tempArr[0]['email']
            }, {
              title: _this76.translateConfigService.get('Date of Birth'),
              detail: _this76.tempArr[0]['dob']
            }, {
              title: _this76.translateConfigService.get('User Name'),
              detail: _this76.tempArr[0]['userName']
            }, {
              title: _this76.translateConfigService.get('Citizen ID'),
              detail: _this76.tempArr[0]['citizen_id']
            }, {
              title: _this76.translateConfigService.get('Address Line 1'),
              detail: _this76.tempArr[0]['address_line1']
            }, {
              title: _this76.translateConfigService.get('Address Line 2'),
              detail: _this76.tempArr[0]['address_line2']
            }, {
              title: _this76.translateConfigService.get('Town'),
              detail: _this76.tempArr[0]['town']
            }, {
              title: _this76.translateConfigService.get('Post Code'),
              detail: _this76.tempArr[0]['post_code']
            }, {
              title: _this76.translateConfigService.get('Language'),
              detail: _this76.tempArr[0]['locale']
            }];

            _this76.insertRow(); // alert("profileDetailArr :-" + this.profileDetailArr);

          })["catch"](function (error) {// alert("Error In Get Profile !");
          });
        }
      }, {
        key: "editProfile",
        value: function editProfile() {
          var _this77 = this;

          if (this.network.type != "none") {
            var headers = {
              'Content-Type': 'application/json'
            };
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/myProfile/").concat(localStorage.getItem('userId')));
            this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/myProfile/").concat(localStorage.getItem('userId')), {}, headers).then(function (res) {
              // alert("res.data is Prfile:-" + res.data);
              _this77.tempArr = [];
              _this77.tempArr = JSON.parse(res.data); // data received by server

              console.log(" edit this.tempArr :-" + JSON.stringify(_this77.tempArr));
              _this77.editProfileForm = true;
              _this77.profileList = false;
              _this77.isSubmitted = false;
              _this77.profile_title = "";
              _this77.profile_fName = "";
              _this77.profile_lname = "";
              _this77.profile_email = "";
              _this77.profile_dob = "";
              _this77.profile_userName = "";
              _this77.profile_national_id = "";
              _this77.profile_userId = "";
              _this77.selectedLanguage = "";

              if (_this77.tempArr[0]['title'].toString() == 'MR') {
                _this77.profile_title = "";
                _this77.profile_title = 'Mr';
              } else if (_this77.tempArr[0]['title'] == 'MISS') {
                _this77.profile_title = "";
                _this77.profile_title = 'Ms';
              } else if (_this77.tempArr[0]['title'] == 'mr') {
                _this77.profile_title = "";
                _this77.profile_title = "Mr";
              } else if (_this77.tempArr[0]['title'] == 'miss') {
                _this77.profile_title = "";
                _this77.profile_title = "Ms";
              } else {
                _this77.profile_title = _this77.tempArr[0]['title'];
              }

              _this77.profile_fName = _this77.tempArr[0]['firstName'];
              _this77.profile_lname = _this77.tempArr[0]['lastName'];
              _this77.profile_email = _this77.tempArr[0]['email'];
              _this77.profile_dob = _this77.tempArr[0]['dob'];
              _this77.profile_userName = _this77.tempArr[0]['userName'];
              _this77.profile_national_id = _this77.tempArr[0]['national_id'];
              _this77.profile_userId = _this77.tempArr[0]['id'];
              _this77.selectedLanguage = _this77.tempArr[0]['locale'];

              if (_this77.selectedLanguage.toString() == 'hindi') {
                _this77.profilelang = 'hi';
                _this77.selectedLanguage = _this77.profilelang;

                _this77.translateConfigService.setLanguage(_this77.selectedLanguage);

                localStorage.setItem('selectedL', _this77.selectedLanguage);
              } else if (_this77.selectedLanguage == 'french') {
                _this77.profilelang = 'fr';
                _this77.selectedLanguage = _this77.profilelang;

                _this77.translateConfigService.setLanguage(_this77.selectedLanguage);

                localStorage.setItem('selectedL', _this77.selectedLanguage);
              } else if (_this77.selectedLanguage == 'spanish') {
                _this77.profilelang = 'es';
                _this77.selectedLanguage = _this77.profilelang;

                _this77.translateConfigService.setLanguage(_this77.selectedLanguage);

                localStorage.setItem('selectedL', _this77.selectedLanguage);
              } else if (_this77.selectedLanguage == 'german') {
                _this77.profilelang = 'de';
                _this77.selectedLanguage = _this77.profilelang;

                _this77.translateConfigService.setLanguage(_this77.selectedLanguage);

                localStorage.setItem('selectedL', _this77.selectedLanguage);
              } else {
                _this77.profilelang = 'en';
                _this77.selectedLanguage = _this77.profilelang;

                _this77.translateConfigService.setLanguage(_this77.selectedLanguage);

                localStorage.setItem('selectedL', _this77.selectedLanguage);
              }

              if (_this77.tempArr[0]['title'] == 'mr') {
                _this77.profile_title = "";
                _this77.profile_title = "Mr";
              } else if (_this77.tempArr[0]['title'] == 'miss') {
                _this77.profile_title = "";
                _this77.profile_title = "Ms";
              }

              if (_this77.tempArr[0]['address_line1'] == null) {
                _this77.profile_address_line1;
              } else {
                _this77.profile_address_line1 = _this77.tempArr[0]['address_line1'];
              }

              if (_this77.tempArr[0]['address_line2'] == null) {
                _this77.profile_address_line2;
              } else {
                _this77.profile_address_line2 = _this77.tempArr[0]['address_line2'];
              }

              if (_this77.tempArr[0]['town'] == null) {
                _this77.profile_town;
              } else {
                _this77.profile_town = _this77.tempArr[0]['town'];
              }

              if (_this77.tempArr[0]['post_code'] == null) {
                _this77.profile_postCode;
              } else {
                _this77.profile_postCode = _this77.tempArr[0]['post_code'];
              }
            })["catch"](function (error) {
              console.log("Error In Get Profile !" + error);
            });
          } else {
            this.translate.use(this.selectedLanguage);
            this.translate.get('Before to edit profile form, Please connect internet connection').subscribe(function (res) {
              alert(res);
            });
          }
        }
      }, {
        key: "onClickSubmit",
        value: function onClickSubmit() {
          var _this78 = this;

          this.isSubmitted = true;

          if (!this.profileForm.valid) {
            return false;
          } else {
            /**Checking network type here before to submit data*/
            if (this.network.type != "none") {
              var data = {
                "title": this.profile_title,
                "firstname": this.profile_fName,
                "lastname": this.profile_lname,
                "email": this.profile_email,
                "dob": this.datePipe.transform(this.profile_dob, 'yyyy-MM-dd'),
                "userId": this.profile_userId,
                "national_id": this.profile_national_id,
                "address_line1": this.profile_address_line1,
                "address_line2": this.profile_address_line2,
                "town": this.profile_town,
                "post_code": this.profile_postCode,
                "username": this.profile_userName,
                "language": this.selectedLanguage,
                "userType": localStorage.getItem('userType')
              };
              var headers = {
                'Content-Type': 'application/json'
              };
              console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/update_myProfile") + JSON.stringify(data));
              this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/update_myProfile"), data, headers).then(function (res) {
                _this78.profile_address_line1 = "";
                _this78.profile_address_line2 = "";
                _this78.profile_town = "";
                _this78.profile_postCode = "";
                _this78.editProfileForm = false;
                _this78.profileList = true;

                if (_this78.selectedLanguage != '' || _this78.selectedLanguage != null) {
                  _this78.translateConfigService.setLanguage(_this78.selectedLanguage);

                  localStorage.setItem('selectedL', _this78.selectedLanguage);
                  window.location.reload(true);
                }
              })["catch"](function (error) {
                console.log("Error In Profile Updates !" + error);
              });
            } else {
              this.translate.use(this.selectedLanguage);
              this.translate.get('Before to submit profile data, Please connect internet connection').subscribe(function (res) {
                alert(res);
              });
            }
          }
        }
      }, {
        key: "onClickCancel",
        value: function onClickCancel() {
          this.profile_address_line1 = "";
          this.profile_address_line2 = "";
          this.profile_town = "";
          this.profile_postCode = "";
          this.selectedLanguage = "";
          this.editProfileForm = false;
          this.profileList = true;
          this.isSubmitted = false;
        }
        /**Offline App Code Start Here */

      }, {
        key: "createDB",
        value: function createDB() {
          var _this79 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this79.databaseObj = db;

            _this79.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this79.table_name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, userId varchar(2), entityId varchar(2), title varchar(2), detail varchar(2))', []).then(function () {
              // alert('Database Created :-' + this.database_name);
              // alert('Table Created :-' + this.table_name);
              if (_this79.network.type == 'none') {
                _this79.getRows();
              }
            })["catch"](function (e) {// alert("Error to Create Profile Table !" + JSON.stringify(e))
            });
          })["catch"](function (e) {// alert("Error to Database Create ! " + JSON.stringify(e))
          });
        }
      }, {
        key: "insertRow",
        value: function insertRow() {
          var _this80 = this;

          this.databaseObj.executeSql("SELECT * FROM " + this.table_name, []).then(function (res) {
            // alert("res is:-" + JSON.stringify(res));
            _this80.row_data = [];

            for (var i = 0; i < res.rows.length; i++) {
              _this80.row_data.push(res.rows.item(i));
            }

            if (_this80.network.type != 'none') {
              if (res.rows.length >= 0) {
                // delete record here
                for (var i = 0; i < _this80.row_data.length; i++) {
                  if (_this80.row_data[i]['userId'] == localStorage.getItem('userId')) {
                    _this80.databaseObj.executeSql("DELETE FROM ".concat(_this80.table_name, " WHERE userId = ").concat(_this80.row_data[i]['userId']), []).then(function (res) {// alert("Row Deleted :-" + JSON.stringify(res));
                    })["catch"](function (e) {// alert("error to delete rows " + JSON.stringify(e))
                    });
                  }
                } // Inserted rows here


                for (var i = 0; i < _this80.profileDetailArr.length; i++) {
                  _this80.databaseObj.executeSql('INSERT INTO ' + _this80.table_name + ' (userId, title, detail) VALUES ("' + localStorage.getItem('userId') + '","' + _this80.profileDetailArr[i]['title'] + '","' + _this80.profileDetailArr[i]['detail'] + '")', []).then(function () {
                    // alert('Row Inserted!' + this.table_name);
                    _this80.getRows();
                  })["catch"](function (e) {// alert("Error Is insert Rows:- " + JSON.stringify(e))
                  });
                }
              }
            }
          })["catch"](function (e) {// alert("Error Is to get Rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "getRows",
        value: function getRows() {
          var _this81 = this;

          this.translate.setDefaultLang(this.selectedLanguage);
          this.translate.use(this.selectedLanguage);
          this.translateConfigService.setLanguage(this.selectedLanguage);
          console.log('this.selectedLanguage offline :' + this.selectedLanguage);
          this.databaseObj.executeSql("SELECT * FROM " + this.table_name, []).then(function (res) {
            _this81.row_data = [];

            if (res.rows.length > 0) {
              _this81.profileDetailArr = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this81.row_data.push(res.rows.item(i));
              } // alert('this.row_data :-' + JSON.stringify(this.row_data));


              for (var i = 0; i < _this81.row_data.length; i++) {
                if (_this81.row_data[i]['userId'] == localStorage.getItem('userId')) {
                  _this81.profileDetailArr.push({
                    userId: _this81.row_data[i]['userId'],
                    title: _this81.row_data[i]['title'],
                    detail: _this81.row_data[i]['detail']
                  });
                }
              }
            }
          })["catch"](function (e) {// alert("Error Is to get Rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.profileForm.controls;
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
      }, {
        type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_6__["TranslateConfigService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_12__["SQLite"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__["StatusBar"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/sidemenu/profile/profile.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_6__["TranslateConfigService"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_12__["SQLite"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_13__["StatusBar"]])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/sidemenu/qr-code/qr-code.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/sidemenu/qr-code/qr-code.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidemenuQrCodeQrCodeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51L3FyLWNvZGUvcXItY29kZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/sidemenu/qr-code/qr-code.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/sidemenu/qr-code/qr-code.component.ts ***!
    \*******************************************************/

  /*! exports provided: QRCodeComponent */

  /***/
  function srcAppSidemenuQrCodeQrCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function () {
      return QRCodeComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");

    var QRCodeComponent = /*#__PURE__*/function () {
      function QRCodeComponent(platform, translate, barcodeScanner) {
        _classCallCheck(this, QRCodeComponent);

        this.platform = platform;
        this.translate = translate;
        this.barcodeScanner = barcodeScanner;
        this.heading = "QR-Code";
        this.selectedLanguage = localStorage.getItem('selectedL');
        this.encodeData = {
          //'entityId': localStorage.getItem('entityId'),
          'citizen_id': localStorage.getItem('citizen_id'),
          'userId': localStorage.getItem('userId'),
          'userName': localStorage.getItem('userName') //'class_id': localStorage.getItem('class_id')

        }; //Options

        this.barcodeScannerOptions = {
          showTorchButton: true,
          showFlipCameraButton: true
        };
        this.platform.ready().then(function () {// this.encodedText();
        });
      }

      _createClass(QRCodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this82 = this;

          this.translate.use(this.selectedLanguage);
          this.translate.get('QR-Code').subscribe(function (res) {
            _this82.heading = "";
            _this82.heading = res;
          });
        }
      }, {
        key: "scanCode",
        value: function scanCode() {
          var _this83 = this;

          this.barcodeScanner.scan().then(function (barcodeData) {
            console.log("Barcode data " + JSON.stringify(barcodeData));
            _this83.scannedData = barcodeData;
          })["catch"](function (err) {
            console.log("Error", err);
          });
        }
      }, {
        key: "encodedText",
        value: function encodedText() {
          this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then(function (encodedData) {
            alert('encodedData' + encodedData);
            console.log('encodedData' + encodedData + '--Json encodedData :-' + JSON.stringify(encodedData)); //this.encodeData = encodedData;
          }, function (err) {
            console.log("Error occured : " + JSON.stringify(err));
          });
        }
      }]);

      return QRCodeComponent;
    }();

    QRCodeComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"]
      }];
    };

    QRCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-qr-code',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./qr-code.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/qr-code/qr-code.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./qr-code.component.scss */
      "./src/app/sidemenu/qr-code/qr-code.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"]])], QRCodeComponent);
    /***/
  },

  /***/
  "./src/app/sidemenu/resource-link/resource-link.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/sidemenu/resource-link/resource-link.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidemenuResourceLinkResourceLinkComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51L3Jlc291cmNlLWxpbmsvcmVzb3VyY2UtbGluay5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/sidemenu/resource-link/resource-link.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/sidemenu/resource-link/resource-link.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ResourceLinkComponent */

  /***/
  function srcAppSidemenuResourceLinkResourceLinkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceLinkComponent", function () {
      return ResourceLinkComponent;
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


    var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/menu.service */
    "./src/app/services/menu.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/translate-config.service */
    "./src/app/translate-config.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/network-interface/ngx */
    "./node_modules/@ionic-native/network-interface/ngx/index.js");
    /* harmony import */


    var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/unique-device-id/ngx */
    "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");

    var ResourceLinkComponent = /*#__PURE__*/function () {
      function ResourceLinkComponent(platform, menuService, http, translateConfigService, router, networkInterface, network, _location, sqlite, translate, uniqueDeviceID) {
        var _this84 = this;

        _classCallCheck(this, ResourceLinkComponent);

        this.platform = platform;
        this.menuService = menuService;
        this.http = http;
        this.translateConfigService = translateConfigService;
        this.router = router;
        this.networkInterface = networkInterface;
        this.network = network;
        this._location = _location;
        this.sqlite = sqlite;
        this.translate = translate;
        this.uniqueDeviceID = uniqueDeviceID;
        this.heading = this.translateConfigService.get('Resources with Open Access');
        this.thirdPartyDetails = [];
        this.filter = "";
        this.keysToExclude = ['tps_id', 'entity_name', 'tps_description', 'tps_url'];
        this.notificationDetails = [];
        this.selectedLanguage = localStorage.getItem('selectedL');
        this.deviceid = "";
        this.IPAddress = "";
        this.row_data = [];
        this.database_name = "Jawata_App.db"; //DB name

        this.table_name = "ResourceData"; // Table 

        this.platform.ready().then(function () {
          _this84.createDB();

          _this84.initializeBackButtonCustomHandler();

          _this84.getData();

          _this84.getIPAddress();

          _this84.getuniqueDeviceID();
        })["catch"](function (error) {
          console.log('resource-link' + error);
        });
      }

      _createClass(ResourceLinkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this85 = this;

          if (localStorage.getItem('routeurlresource-link') === null || localStorage.getItem('routeurlresource-link') === 'null') {
            localStorage.setItem('routeurlresource-link', 'resource-link');
            localStorage.setItem('routeurl', 'null');
            localStorage.setItem('routeurlsso', 'null');
            localStorage.setItem('routeurlaudit-trail', 'null');
            localStorage.setItem('routeurlfeedback', 'null');
          }
          /** heading name change after select language */


          this.translate.use(this.selectedLanguage);
          this.translate.get('Resources with Open Access').subscribe(function (res) {
            _this85.heading = "";
            _this85.heading = res;
          });
        }
      }, {
        key: "initializeBackButtonCustomHandler",
        value: function initializeBackButtonCustomHandler() {
          var _this86 = this;

          this.platform.backButton.subscribeWithPriority(999990, function () {
            //alert('third party :'+ this.router.url+' --backurl--'+localStorage.getItem('bckbtnpage'));
            if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
              navigator['app'].exitApp();
            } else {
              _this86._location.back(); //this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);

            }
          });
        }
      }, {
        key: "getuniqueDeviceID",
        value: function getuniqueDeviceID() {
          var _this87 = this;

          this.uniqueDeviceID.get().then(function (uuid) {
            return _this87.deviceid = uuid;
          })["catch"](function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getIPAddress",
        value: function getIPAddress() {
          var _this88 = this;

          if (this.network.type != 'none') {
            this.networkInterface.getCarrierIPAddress().then(function (address) {
              return _this88.IPAddress = "".concat(address.ip);
            } // alert('Ip address is:-' + `${address.ip}`)
            )["catch"]();
          }

          if (this.network.type === 'wifi') {
            this.networkInterface.getWiFiIPAddress().then(function (address) {
              return _this88.IPAddress = "".concat(address.ip);
            })["catch"](function (error) {
              return console.error("Unable to get IP: ".concat(error));
            });
          }
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.getData();
          event.target.complete();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this89 = this;

          /**For Web API Called Here */
          // this.menuService.getThirdParty(localStorage.getItem('entityId'), localStorage.getItem('userId')).subscribe(data => {
          //   this.thirdPartyDetails = []
          //   this.thirdPartyDetails = data;
          // })
          var data = {
            'userId': localStorage.getItem('userId'),
            'entityId': localStorage.getItem('entityId')
          };
          var headers = {
            'Content-Type': 'application/json'
          }; // alert("JSON.stringify(data) :-" + JSON.stringify(data));

          this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/third-party"), data, headers).then(function (res) {
            var tempArr;
            tempArr = [];
            tempArr = JSON.parse(res.data);
            _this89.thirdPartyDetails = [];

            for (var i = 0; i < tempArr.length; i++) {
              _this89.thirdPartyDetails.push(tempArr[i]);
            }

            _this89.insertRow();
          })["catch"](function (error) {// alert("Error In Get Third Party !");
          });
        }
      }, {
        key: "onClickOpenURL",
        value: function onClickOpenURL(tps_id, resource_url) {
          var _this90 = this;

          if (this.deviceid == undefined) {
            this.platform.ready().then(function () {
              _this90.getuniqueDeviceID();
            })["catch"](function (error) {
              console.log('resource-link' + error);
            });
          } else {
            if (this.IPAddress != "") {
              localStorage.removeItem('IpAddress');
              localStorage.setItem('IpAddress', this.IPAddress);
            } else if (this.IPAddress == "") {
              localStorage.getItem('IpAddress');
            }

            var data = {
              "user_id": localStorage.getItem('userId'),
              "action_id": tps_id,
              "userType": localStorage.getItem('userType'),
              "entity_id": localStorage.getItem('entityId'),
              "deviceid": this.deviceid,
              "ip_address": localStorage.getItem('IpAddress')
            };
            var headers = {
              'Content-Type': 'application/json'
            };
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/resource_log"), data);

            if (this.network.type == 'none') {
              this.translate.use(this.selectedLanguage);
              this.translate.get('Before to accessing this Resources with Open Access, Please connect internet connection').subscribe(function (res) {
                alert(res);
              });
            } else {
              this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/resource_log"), data, headers).then(function (res) {
                // alert("resource_log res is :-" + res);
                window.open(resource_url);
              })["catch"](function (error) {// alert("error resource_log Access :- " + JSON.stringify(error));
              });
            }
          }
        }
      }, {
        key: "trimSearchValues",
        value: function trimSearchValues(value) {
          this.filter = value.trim();
        }
        /**Offline App Code Start Here */

      }, {
        key: "createDB",
        value: function createDB() {
          var _this91 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this91.databaseObj = db;

            _this91.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this91.table_name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT,userId varchar(2), entityId varchar(2), tps_id varchar(2), tps_name varchar(2), tps_url varchar(2))', []).then(function () {
              // alert('Database Created :-' + this.database_name);
              // alert('Table Created :-' + this.table_name);
              if (_this91.network.type == 'none') {
                _this91.getRows();
              }
            })["catch"](function (e) {
              alert("Error to Create Profile Table !" + JSON.stringify(e));
            });
          })["catch"](function (e) {
            alert("Error to Database Create ! " + JSON.stringify(e));
          });
        }
      }, {
        key: "insertRow",
        value: function insertRow() {
          var _this92 = this;

          this.databaseObj.executeSql("SELECT * FROM " + this.table_name, []).then(function (res) {
            // alert("res is:-" + JSON.stringify(res));
            _this92.row_data = [];

            for (var i = 0; i < res.rows.length; i++) {
              _this92.row_data.push(res.rows.item(i));
            }

            if (_this92.network.type != 'none') {
              if (res.rows.length >= 0) {
                // delete rows here
                for (var i = 0; i < _this92.row_data.length; i++) {
                  if (_this92.row_data[i]['userId'] == localStorage.getItem('userId') && _this92.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
                    _this92.databaseObj.executeSql("DELETE FROM ".concat(_this92.table_name, " WHERE userId = ").concat(_this92.row_data[i]['userId']), []).then(function (res) {// alert("Row Deleted :-" + JSON.stringify(res));
                    })["catch"](function (e) {
                      alert("error to delete rows " + JSON.stringify(e));
                    });
                  }
                } // Inserting rows here


                for (var i = 0; i < _this92.thirdPartyDetails.length; i++) {
                  _this92.databaseObj.executeSql('INSERT INTO ' + _this92.table_name + ' (userId, entityId, tps_id, tps_name, tps_url ) VALUES ("' + localStorage.getItem('userId') + '","' + localStorage.getItem('entityId') + '","' + _this92.thirdPartyDetails[i]['tps_id'] + '","' + _this92.thirdPartyDetails[i]['tps_name'] + '","' + _this92.thirdPartyDetails[i]['tps_url'] + '")', []).then(function () {
                    // alert('Row Inserted!' + this.table_name);
                    _this92.getRows();
                  })["catch"](function (e) {
                    alert("Error Is insert Rows:- " + JSON.stringify(e));
                  });
                }
              }
            }
          })["catch"](function (e) {
            alert("Error Is to get Rows:- " + JSON.stringify(e));
          });
        }
      }, {
        key: "getRows",
        value: function getRows() {
          var _this93 = this;

          this.databaseObj.executeSql("SELECT * FROM " + this.table_name, []).then(function (res) {
            // alert("res is :-" + JSON.stringify(res));
            _this93.row_data = [];

            if (res.rows.length > 0) {
              _this93.thirdPartyDetails = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this93.row_data.push(res.rows.item(i));
              }

              for (var i = 0; i < _this93.row_data.length; i++) {
                if (_this93.row_data[i]['userId'] == localStorage.getItem('userId') && _this93.row_data[i]['entityId'] == localStorage.getItem('entityId')) {
                  _this93.thirdPartyDetails.push(_this93.row_data[i]);
                }
              }
            }
          })["catch"](function (e) {
            alert("Error Is to get Rows:- " + JSON.stringify(e));
          });
        }
      }]);

      return ResourceLinkComponent;
    }();

    ResourceLinkComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }, {
        type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_5__["TranslateConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_11__["NetworkInterface"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_13__["SQLite"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
      }, {
        type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_12__["UniqueDeviceID"]
      }];
    };

    ResourceLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resource-link',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resource-link.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/resource-link/resource-link.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resource-link.component.scss */
      "./src/app/sidemenu/resource-link/resource-link.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"], src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_5__["TranslateConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_11__["NetworkInterface"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_13__["SQLite"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_12__["UniqueDeviceID"]])], ResourceLinkComponent);
    /***/
  },

  /***/
  "./src/app/sidemenu/sso/sso.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/sidemenu/sso/sso.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidemenuSsoSsoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input {\n  border: 0.08rem solid black;\n  border-radius: 0.41rem;\n  border-color: darkgrey; }\n\nion-back-button {\n  background: transparent !important;\n  color: #fff !important; }\n\nion-back-button button {\n  background: transparent !important;\n  color: #fff !important; }\n\nion-item {\n  border-bottom: transparent; }\n\n.icons {\n  vertical-align: middle;\n  font-size: 2.08rem;\n  margin-left: 3.33rem; }\n\n.sso-title ion-title {\n  padding: 0 1.25rem;\n  text-align: left; }\n\n.ion-color-primary {\n  --ion-color-base: #343a40!important; }\n\n.alert-2-hdr {\n  font-size: 1.25rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvQW1leS9KQVdBVEEvamF3YXRhLW1hbmFnZXIvSmF3YXRhTWFuYWdlckFwcC9zcmMvYXBwL3NpZGVtZW51L3Nzby9zc28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLGtDQUFrQztFQUNsQyxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxrQ0FBa0M7RUFDbEMsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksc0JBQXNCO0VBQ3RCLGtCQUFpQjtFQUNqQixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksbUNBQWlCLEVBQUE7O0FBT3JCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWRlbWVudS9zc28vc3NvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcbiAgICBib3JkZXI6MC4wOHJlbSBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAwLjQxcmVtO1xuICAgIGJvcmRlci1jb2xvcjogZGFya2dyZXk7XG59XG5pb24tYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuaW9uLWJhY2stYnV0dG9uIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5pb24taXRlbXtcbiAgICBib3JkZXItYm90dG9tOiB0cmFuc3BhcmVudDtcbn1cbi5pY29uc3tcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGZvbnQtc2l6ZToyLjA4cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAzLjMzcmVtO1xufVxuLnNzby10aXRsZSBpb24tdGl0bGV7XG4gICAgcGFkZGluZzogMCAxLjI1cmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaW9uLWNvbG9yLXByaW1hcnl7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzM0M2E0MCFpbXBvcnRhbnQ7XG59XG4kY29sb3JzOiAoXG4gICAgcHJpbWFyeTojMzQzYTQwLFxuICAgIGlvbi1jb2xvci1iYXNlOiAjMzQzYTQwICFpbXBvcnRhbnQsXG4pO1xuXG4uYWxlcnQtMi1oZHJ7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/sidemenu/sso/sso.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/sidemenu/sso/sso.component.ts ***!
    \***********************************************/

  /*! exports provided: SsoComponent */

  /***/
  function srcAppSidemenuSsoSsoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SsoComponent", function () {
      return SsoComponent;
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


    var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/menu.service */
    "./src/app/services/menu.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/translate-config.service */
    "./src/app/translate-config.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/unique-device-id/ngx */
    "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/network-interface/ngx */
    "./node_modules/@ionic-native/network-interface/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");

    var SsoComponent = /*#__PURE__*/function () {
      function SsoComponent(platform, menuService, formBuilder, http, alertCtrl, translateConfigService, router, translate, uniqueDeviceID, networkInterface, _location, network, sqlite) {
        var _this94 = this;

        _classCallCheck(this, SsoComponent);

        this.platform = platform;
        this.menuService = menuService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.translateConfigService = translateConfigService;
        this.router = router;
        this.translate = translate;
        this.uniqueDeviceID = uniqueDeviceID;
        this.networkInterface = networkInterface;
        this._location = _location;
        this.network = network;
        this.sqlite = sqlite;
        this.isSubmitted = false;
        this.SSOVar = "";
        this.descriptionVar = "";
        this.textURL = "";
        this.userIdvar = "";
        this.passwordVar = "";
        this.type = "";
        this.filter = "";
        this.heading = this.translateConfigService.get('Resources with ID access');
        this.keysToExclude = ['ssoId', 'ssoDesc', 'ssoUrl', 'checked'];
        this.ssoIDList = [];
        this.title = "";
        this.yesVar = "";
        this.noVar = "";
        this.selectedLanguage = localStorage.getItem('selectedL');
        this.IPAddress = "";
        this.row_data = [];
        this.hideDeletePopup = false;
        this.ssoHeader = true;
        this.ssoAddHeader = false;
        this.ssoDetails = true;
        this.AddSSO = false;
        this.hideAddButton = true;
        this.table_name = "ssoListingData"; // Table name

        this.database_name = "jawata_datatable.db"; //DB name

        this.platform.ready().then(function () {
          _this94.createDB();

          _this94.getIPAddress();

          _this94.initializeBackButtonCustomHandler();

          _this94.getuniqueDeviceID();

          _this94.getSSOListing();
        })["catch"](function (error) {
          console.log('SSO' + error);
        });
      }

      _createClass(SsoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this95 = this;

          this.ssoForm = this.formBuilder.group({
            ssoName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
            ssoDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
            ssoURL: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')]],
            ssoUserId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
            ssoPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]]
          });

          if (localStorage.getItem('routeurlsso') === null || localStorage.getItem('routeurlsso') === 'null') {
            localStorage.setItem('routeurlsso', 'sso');
            localStorage.setItem('routeurl', 'null');
            localStorage.setItem('routeurlaudit-trail', 'null');
            localStorage.setItem('routeurlresource-link', 'null');
            localStorage.setItem('routeurlfeedback', 'null');
          }
          /** heading name change after select language */


          this.translate.use(this.selectedLanguage);
          this.translate.get('Resources with ID access').subscribe(function (res) {
            _this95.heading = "";
            _this95.heading = res;
          });
          /**If userType is "Actor's Parent" then AddSSO disabled */

          /** Parent can create the add sso */
          // if (localStorage.getItem('userType') == "Actor's Parent") {
          //   this.hideAddButton = false;
          // }
        }
      }, {
        key: "initializeBackButtonCustomHandler",
        value: function initializeBackButtonCustomHandler() {
          var _this96 = this;

          this.platform.backButton.subscribeWithPriority(999999, function () {
            if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
              navigator['app'].exitApp();
            } else if (localStorage.getItem('AddSSO').toString() == "true") {
              _this96.ssoHeader = true;
              _this96.ssoAddHeader = false;
              _this96.ssoDetails = true;
              _this96.AddSSO = false;
              localStorage.setItem('AddSSO', 'false');
            } else {
              _this96._location.back(); //this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);

            }
          });
        }
      }, {
        key: "getuniqueDeviceID",
        value: function getuniqueDeviceID() {
          var _this97 = this;

          this.uniqueDeviceID.get().then(function (uuid) {
            return _this97.deviceid = uuid;
          })["catch"](function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getIPAddress",
        value: function getIPAddress() {
          var _this98 = this;

          if (this.network.type != 'none') {
            this.networkInterface.getCarrierIPAddress().then(function (address) {
              return _this98.IPAddress = "".concat(address.ip);
            })["catch"]();
          }

          if (this.network.type === 'wifi') {
            this.networkInterface.getWiFiIPAddress().then(function (address) {
              return _this98.IPAddress = "".concat(address.ip);
            })["catch"](function (error) {
              return console.error("Unable to get IP: ".concat(error));
            });
          }
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          this.getSSOListing();
          event.target.complete();
        }
      }, {
        key: "trimSearchValues",
        value: function trimSearchValues(value) {
          this.filter = value.trim();
        }
      }, {
        key: "onClickAddSSO",
        value: function onClickAddSSO() {
          if (this.network.type != "none") {
            this.isSubmitted = false;
            this.ssoHeader = false;
            this.ssoAddHeader = true;
            this.ssoDetails = false;
            this.AddSSO = true;
            this.ssoId = "";
            this.SSOVar = "";
            this.descriptionVar = "";
            this.textURL = "";
            this.userIdvar = "";
            this.passwordVar = "";
            this.type = "Insert";
            localStorage.setItem('AddSSO', "true");
          } else {
            this.translate.use(this.selectedLanguage);
            this.translate.get('Before to add Resource with ID Name, Please connect internet connection').subscribe(function (res) {
              alert(res);
            });
          }
        }
      }, {
        key: "onClickBackButton",
        value: function onClickBackButton() {
          this.ssoHeader = true;
          this.ssoAddHeader = false;
          this.ssoDetails = true;
          this.AddSSO = false;
          localStorage.setItem('AddSSO', "false");
        }
      }, {
        key: "onClickCancel",
        value: function onClickCancel() {
          this.ssoHeader = true;
          this.ssoDetails = true;
          this.ssoAddHeader = false;
          this.AddSSO = false;
          this.textURL = "";
          this.ssoId = "";
          this.SSOVar = "";
          this.descriptionVar = "";
          this.textURL = "";
          this.userIdvar = "";
          this.passwordVar = "";
          this.isSubmitted = false;

          for (var i = 0; i < this.ssoListing.length; i++) {
            this.ssoListing[i]['checked'] = false;
          }
        }
      }, {
        key: "onSubmitSSO",
        value: function onSubmitSSO() {
          var _this99 = this;

          this.isSubmitted = true;

          if (!this.ssoForm.valid) {
            return false;
          } else {
            if (this.network.type != "none") {
              if (this.type == 'Insert') {
                /**Web API Called Here */
                // this.menuService.ssoInsert(this.SSOVar, this.descriptionVar, this.textURL, this.userIdvar, this.passwordVar).subscribe(data => {
                //   this.ssoHeader = true;
                //   this.ssoDetails = true;
                //   this.ssoAddHeader = false;
                //   this.AddSSO = false;
                //   this.ssoId = "";
                //   this.SSOVar = "";
                //   this.descriptionVar = "";
                //   this.textURL = "";
                //   this.userIdvar = "";
                //   this.passwordVar = "";
                //   this.type = "";
                //   this.getSSOListing();
                // })
                var data = {
                  'userId': localStorage.getItem('userId'),
                  'entityId': localStorage.getItem('entityId'),
                  'userType': localStorage.getItem('userType'),
                  'txtsso_name': this.SSOVar,
                  'txtsso_description': this.descriptionVar,
                  'txtsso_url': this.textURL,
                  'txtuser_id': this.userIdvar,
                  'txtpassword': this.passwordVar
                };
                var headers = {
                  'Content-Type': 'application/json'
                };
                this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/ssoInsert"), data, headers).then(function (res) {
                  // alert("sso insert is :-" + res.data);
                  _this99.ssoHeader = true;
                  _this99.ssoDetails = true;
                  _this99.ssoAddHeader = false;
                  _this99.AddSSO = false;
                  localStorage.setItem('AddSSO', "false");
                  _this99.ssoId = "";
                  _this99.SSOVar = "";
                  _this99.descriptionVar = "";
                  _this99.textURL = "";
                  _this99.userIdvar = "";
                  _this99.passwordVar = "";
                  _this99.type = "";

                  _this99.getSSOListing();
                })["catch"](function (error) {// alert("SSO Insert Error !");
                });
              } else if (this.type = 'Modify') {
                /**Web API Called Here */
                // this.menuService.modifySSO(localStorage.getItem('userType'), this.ssoId, this.SSOVar, this.descriptionVar, this.textURL, this.userIdvar, this.passwordVar).subscribe(data => {
                //   this.ssoHeader = true;
                //   this.ssoDetails = true;
                //   this.ssoAddHeader = false;
                //   this.AddSSO = false;
                //   this.ssoId = "";
                //   this.SSOVar = "";
                //   this.descriptionVar = "";
                //   this.textURL = "";
                //   this.userIdvar = "";
                //   this.passwordVar = "";
                //   this.type = "";
                //   this.getSSOListing();
                // })
                if (localStorage.getItem('userType') == "Actor's Parent") {
                  this.data = {
                    "actor_id": localStorage.getItem('actorId'),
                    "userType": localStorage.getItem('userType'),
                    'entityId': localStorage.getItem('entityId'),
                    'entity_id': localStorage.getItem('entityId'),
                    "createdBy": this.ssoId,
                    'userId': this.ssoId,
                    'txtsso_name': this.SSOVar,
                    'txtsso_description': this.descriptionVar,
                    'txtsso_url': this.textURL,
                    'txtuser_id': this.userIdvar,
                    'txtpassword': this.passwordVar
                  };
                } else {
                  this.data = {
                    "userType": localStorage.getItem('userType'),
                    'entityId': localStorage.getItem('entityId'),
                    'entity_id': localStorage.getItem('entityId'),
                    "createdBy": this.ssoId,
                    'userId': this.ssoId,
                    'txtsso_name': this.SSOVar,
                    'txtsso_description': this.descriptionVar,
                    'txtsso_url': this.textURL,
                    'txtuser_id': this.userIdvar,
                    'txtpassword': this.passwordVar
                  };
                }

                var headers = {
                  'Content-Type': 'application/json'
                };
                this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/ssoUpdate"), this.data, headers).then(function (res) {
                  // alert("SSO Modify res.data :-" + res.data);
                  _this99.ssoHeader = true;
                  _this99.ssoDetails = true;
                  _this99.ssoAddHeader = false;
                  _this99.AddSSO = false;
                  _this99.ssoId = "";
                  _this99.SSOVar = "";
                  _this99.descriptionVar = "";
                  _this99.textURL = "";
                  _this99.userIdvar = "";
                  _this99.passwordVar = "";
                  _this99.type = "";

                  _this99.getSSOListing();
                })["catch"](function (error) {// alert("SSO Modify Error !");
                });
              }
            } else {
              this.translate.use(this.selectedLanguage);
              this.translate.get('Before to submit Resource with ID Name, Please connect internent connection').subscribe(function (res) {
                alert(res);
              });
            }
          }
        }
      }, {
        key: "getSSOListing",
        value: function getSSOListing() {
          var _this100 = this;

          /**For Web API Call */
          // this.menuService.getSSO(localStorage.getItem('userId'), localStorage.getItem('entityId'), localStorage.getItem('userType')).subscribe(data => {
          //   this.ssoListing = []
          //   this.ssoListing = data
          // })
          if (this.network.type != 'none') {
            if (localStorage.getItem('userType') == "Actor's Parent") {
              this.data = {
                "actor_id": localStorage.getItem('actorId'),
                'userId': localStorage.getItem('userId'),
                'entityId': localStorage.getItem('entityId'),
                'userType': localStorage.getItem('userType')
              };
            } else {
              this.data = {
                'userId': localStorage.getItem('userId'),
                'entityId': localStorage.getItem('entityId'),
                'userType': localStorage.getItem('userType')
              };
            }

            var headers = {
              'Content-Type': 'application/json'
            };
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/ssoListing"), JSON.stringify(this.data));
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/ssoListing"), this.data, headers).then(function (res) {
              _this100.ssoListing = [];
              _this100.ssoListing = JSON.parse(res.data);
              /** check data is present in table and store data  */

              _this100.platform.ready().then(function () {
                _this100.sqlite.create({
                  name: _this100.database_name,
                  location: 'default'
                }).then(function (db) {
                  _this100.databaseObj = db;

                  _this100.databaseObj.executeSql("SELECT * FROM " + _this100.table_name + " WHERE userId=? AND entityId=?", [localStorage.getItem('userId'), localStorage.getItem('entityId')]).then(function (result) {
                    //alert('result' + result.rows.length);
                    if (result.rows.length == 0) {
                      _this100.insertRow();
                    } else {
                      _this100.databaseObj.executeSql("DELETE FROM " + _this100.table_name + " WHERE userId=? AND entityId=?", [localStorage.getItem('userId'), localStorage.getItem('entityId')]).then(function (res) {
                        //alert('row deleted successfully...');
                        _this100.insertRow();
                      });
                    }
                  });
                })["catch"](function (e) {// alert("Error to Database Create ! " + JSON.stringify(e))
                });
              }); //this.insertRow();

            })["catch"](function (error) {// alert("SSO List Error !");
            });
          } else {
            this.platform.ready().then(function () {
              _this100.sqlite.create({
                name: _this100.database_name,
                location: 'default'
              }).then(function (db) {
                _this100.databaseObj = db;

                _this100.getRows();
              })["catch"](function (e) {//alert("Error to Database Create ! " + JSON.stringify(e))
              });
            });
          }
        }
      }, {
        key: "editSSOData",
        value: function editSSOData(ssoId) {
          var _this101 = this;

          /**For Web API Call */
          // this.menuService.editSSO(ssoId).subscribe(data => {
          //   this.AddSSO = true;
          //   this.ssoDetails = false;
          //   this.ssoId = "";
          //   this.SSOVar = "";
          //   this.descriptionVar = "";
          //   this.textURL = "";
          //   this.userIdvar = "";
          //   this.passwordVar = "";
          //   this.type = "Modify";
          //   this.ssoId = data[0]['sso_id']
          //   this.SSOVar = data[0]['sso_name']
          //   this.descriptionVar = data[0]['sso_description']
          //   this.textURL = data[0]['sso_url']
          //   this.userIdvar = data[0]['user_id']
          //   this.passwordVar = data[0]['password']
          // })
          if (this.network.type != "none") {
            var data = {
              'userId': ssoId
            };
            var headers = {
              'Content-Type': 'application/json'
            };
            localStorage.setItem('AddSSO', "true");
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/ssoEdit"), data, headers).then(function (res) {
              // alert("SSO Edit res.data :-" + res.data);
              var temp;
              temp = [];
              temp = JSON.parse(res.data);
              _this101.AddSSO = true;
              _this101.ssoDetails = false;
              _this101.ssoId = "";
              _this101.SSOVar = "";
              _this101.descriptionVar = "";
              _this101.textURL = "";
              _this101.userIdvar = "";
              _this101.passwordVar = "";
              _this101.type = "Modify";
              _this101.ssoId = temp[0]['sso_id'];
              _this101.SSOVar = temp[0]['sso_name'];
              _this101.descriptionVar = temp[0]['sso_description'];
              _this101.textURL = temp[0]['sso_url'];
              _this101.userIdvar = temp[0]['user_id'];
              _this101.passwordVar = temp[0]['password'];
            })["catch"](function (error) {// alert("SSO Edit Error !");
            });
          } else {
            this.translate.use(this.selectedLanguage);
            this.translate.get('Before to Edit Resource with ID Name, Please connect internet connection').subscribe(function (res) {
              alert(res);
            });
          }
        }
      }, {
        key: "onClickChechbox",
        value: function onClickChechbox(value, item) {
          for (var i = 0; i < this.ssoListing.length; i++) {
            if (value == false && item.ssoId == this.ssoListing[i]['ssoId']) {
              this.ssoListing[i]['checked'] = true;
            } else if (value == true && item.ssoId == this.ssoListing[i]['ssoId']) {
              this.ssoListing[i]['checked'] = false;
            }
          }

          this.ssoIDList = [];
          this.hideDeletePopup = false;

          for (var i = 0; i < this.ssoListing.length; i++) {
            if (this.ssoListing[i]['checked'] == true) {
              this.ssoIDList.push(this.ssoListing[i]['ssoId']);
              this.hideDeletePopup = true;
            }
          }
        }
      }, {
        key: "onClickGetURL",
        value: function onClickGetURL(ssoId, ssoName, ssoDesc, ssoUrl, user_id, password) {
          localStorage.setItem('AddSSO', "true");

          if (this.network.type != "none") {
            if (user_id == "" && password == "") {
              /**If "user_id" & "password" is null then show alert */
              this.translate.use(this.selectedLanguage);
              this.translate.get("Before accesing this service please set your User ID and Password for it").subscribe(function (res) {
                alert(res);
              });
              this.ssoHeader = false;
              this.ssoAddHeader = true;
              this.ssoDetails = false;
              this.AddSSO = true;
              this.ssoId = "";
              this.SSOVar = "";
              this.descriptionVar = "";
              this.textURL = "";
              this.userIdvar = "";
              this.passwordVar = "";
              this.type = "Modify";
              this.ssoId = ssoId;
              this.SSOVar = ssoName;
              this.descriptionVar = ssoDesc;
              this.textURL = ssoUrl;
              this.userIdvar = user_id;
              this.passwordVar = password;
            } else if (user_id != "" && password != "") {
              if (this.deviceid == undefined) {
                this.getuniqueDeviceID();
              } else {
                this.getIPAddress();
                var data = {
                  "user_id": localStorage.getItem('userId'),
                  "action_id": ssoId,
                  "userType": localStorage.getItem('userType'),
                  "entity_id": localStorage.getItem('entityId'),
                  "deviceid": this.deviceid,
                  "ip_address": this.IPAddress
                };
                var headers = {
                  'Content-Type': 'application/json'
                }; // alert("Data is :-" + JSON.stringify(data));

                this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/sso_log"), data, headers).then(function (res) {
                  //alert("SSO Access res is :-" + res + '--- ssourl --' + ssoUrl);
                  window.open(ssoUrl);
                })["catch"](function (error) {// alert("Error to SSO Access :- " + JSON.stringify(error));
                });
              }
            }
          } else {
            this.translate.use(this.selectedLanguage);
            this.translate.get('Before to Access Resource with ID Name, Please connect internet connection').subscribe(function (res) {
              alert(res);
            });
          }
        }
      }, {
        key: "showConfirmAlert",
        value: function showConfirmAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this102 = this;

            var alertConfirm;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    if (!(this.network.type != "none")) {
                      _context13.next = 16;
                      break;
                    }

                    if (!(this.hideDeletePopup == true)) {
                      _context13.next = 12;
                      break;
                    }

                    this.translate.use(this.selectedLanguage);
                    this.translate.get("Are you sure you want to delete ?").subscribe(function (res) {
                      _this102.title = "";
                      _this102.title = res;
                    });
                    this.translate.get("Yes").subscribe(function (res) {
                      _this102.yesVar = "";
                      _this102.yesVar = res;
                    });
                    this.translate.get("No").subscribe(function (res) {
                      _this102.noVar = "";
                      _this102.noVar = res;
                    });
                    alertConfirm = this.alertCtrl.create({
                      header: this.title,
                      buttons: [{
                        text: this.noVar,
                        role: 'cancel',
                        handler: function handler() {}
                      }, {
                        text: this.yesVar,
                        handler: function handler() {
                          var ssoIDListJSON = JSON.stringify(_this102.ssoIDList);
                          var data = {
                            'ssoId': ssoIDListJSON,
                            'entityId': localStorage.getItem('entityId'),
                            'entity_id': localStorage.getItem('entityId'),
                            'userType': localStorage.getItem('userType'),
                            'userId': localStorage.getItem('userId')
                          };
                          var headers = {
                            'Content-Type': 'application/json'
                          }; // alert("data SSO Delete :-" + JSON.stringify(data));

                          _this102.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "/api/ssoDelete"), data, headers).then(function (res) {
                            // alert("ssoDelete res is:-" + JSON.stringify(res));
                            ssoIDListJSON = "";
                            _this102.hideDeletePopup = false;
                            /** Get SSO List Here*/

                            _this102.getSSOListing();
                          })["catch"](function (error) {// alert("SSO Delete Error :- " + JSON.stringify(error));
                          });
                        }
                      }]
                    });
                    _context13.next = 9;
                    return alertConfirm;

                  case 9:
                    _context13.sent.present();

                    _context13.next = 14;
                    break;

                  case 12:
                    // alert("Please select SSO from list to Delete");
                    this.translate.use(this.selectedLanguage);
                    this.translate.get("Please select Resource with ID Name from list to Delete").subscribe(function (res) {
                      alert(res);
                    });

                  case 14:
                    _context13.next = 18;
                    break;

                  case 16:
                    this.translate.use(this.selectedLanguage);
                    this.translate.get('Before to Delete Resource with ID Name, Please connect internet connection').subscribe(function (res) {
                      alert(res);
                    });

                  case 18:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
        /**Offline App Code Start Here */

      }, {
        key: "createDB",
        value: function createDB() {
          var _this103 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this103.databaseObj = db;

            _this103.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this103.table_name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT,userId varchar(2), entityId varchar(2), ssoId varchar(2), ssoName varchar(2), ssoUrl varchar(2) )', []).then(function () {// if (this.network.type == 'none') {
              //   this.getRows();
              // }
            })["catch"](function (e) {// alert("Error to Create Profile Table !" + JSON.stringify(e))
            });
          })["catch"](function (e) {// alert("Error to Database Create ! " + JSON.stringify(e))
          });
        }
      }, {
        key: "insertRow",
        value: function insertRow() {
          var _this104 = this;

          this.platform.ready().then(function () {
            for (var i = 0; i < _this104.ssoListing.length; i++) {
              _this104.databaseObj.executeSql('INSERT INTO ' + _this104.table_name + ' (userId, entityId, ssoId, ssoName, ssoUrl) VALUES ("' + localStorage.getItem('userId') + '","' + localStorage.getItem('entityId') + '","' + _this104.ssoListing[i]['ssoId'] + '","' + _this104.ssoListing[i]['ssoName'] + '","' + _this104.ssoListing[i]['ssoUrl'] + '")', []).then(function () {//alert('Row Inserted!' + this.table_name);
                //this.getRows();
              })["catch"](function (e) {//alert("Error Is insert Rows:- " + JSON.stringify(e))
              });
            }
          });
        }
      }, {
        key: "getRows",
        value: function getRows() {
          var _this105 = this;

          this.platform.ready().then(function () {
            _this105.databaseObj.executeSql("SELECT * FROM " + _this105.table_name + " WHERE userId=? AND entityId=?", [localStorage.getItem('userId'), localStorage.getItem('entityId')]).then(function (res) {
              // alert('SSO offline result' + res.rows.length);
              if (res.rows.length > 0) {
                _this105.ssoListing = [];

                for (var i = 0; i < res.rows.length; i++) {
                  _this105.ssoListing.push(res.rows.item(i)); //alert('this.ssoListing' + JSON.stringify(this.ssoListing) + 'entityid' + localStorage.getItem('entityId'));

                }
              }
            });
          });
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.ssoForm.controls;
        }
      }]);

      return SsoComponent;
    }();

    SsoComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_5__["TranslateConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
      }, {
        type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_10__["UniqueDeviceID"]
      }, {
        type: _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_11__["NetworkInterface"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_14__["SQLite"]
      }];
    };

    SsoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sso',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sso.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/sso/sso.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sso.component.scss */
      "./src/app/sidemenu/sso/sso.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_5__["TranslateConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_10__["UniqueDeviceID"], _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_11__["NetworkInterface"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_14__["SQLite"]])], SsoComponent);
    /***/
  },

  /***/
  "./src/app/sidemenu/subjects/subjects.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/sidemenu/subjects/subjects.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidemenuSubjectsSubjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list.sso-title ion-button {\n  height: 8.533333333333333vw;\n  font-size: 2.4vw !important;\n  margin-top: 0;\n  text-transform: capitalize;\n  width: 32.59%;\n  margin-left: 0 !important;\n  float: left;\n  text-align: center;\n  margin-right: 1vw; }\n\n.emptyArr {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  width: 50%; }\n\n.attendance-status {\n  text-transform: capitalize;\n  width: 100%;\n  display: contents;\n  align-items: center;\n  text-align: center; }\n\n.attendanceItem {\n  border-radius: 0;\n  border-color: #dadadd !important;\n  font-size: 18px !important;\n  width: 204%;\n  margin-left: 49px;\n  height: 82%;\n  border-bottom: 0.5px solid gray !important;\n  border-top: 0 !important;\n  margin-top: 2px;\n  text-align: center; }\n\nion-list.sso-title ion-button:first-child {\n  margin-left: 0; }\n\nion-list.sso-title ion-button:last-child {\n  margin-right: 0; }\n\n.col {\n  margin-right: 4.16rem;\n  vertical-align: middle;\n  color: black; }\n\n.dropdown.subject {\n  float: right; }\n\n.dropdown.subject button, .dropdown.subject button:focus {\n  background: transparent;\n  color: #000 !important;\n  border: 0rem !important;\n  transform: rotate(90deg);\n  padding: 0rem;\n  box-shadow: none; }\n\nion-back-button {\n  background: transparent !important;\n  color: #fff !important; }\n\nion-back-button button {\n  background: transparent !important;\n  color: #fff !important; }\n\n.dropdown.subject button::after {\n  display: none; }\n\n.ion-color-primary {\n  --ion-color-base: #343a40!important; }\n\n.Attendance-number {\n  font-family: Montserrat-SemiBold;\n  font-size: 1.94vh;\n  text-align: left;\n  color: #f3a01c;\n  line-height: 5.025vh;\n  margin: 0vh; }\n\n.Attendance-mealtype {\n  font-family: Montserrat-SemiBold;\n  font-size: 2.09vh;\n  text-align: left;\n  line-height: 5.027vh;\n  margin: 0vh; }\n\n.attendance-on {\n  font-family: Montserrat-Bold;\n  font-size: 2.09vh;\n  text-align: left;\n  line-height: 0.027vh;\n  letter-spacing: 0.021vh;\n  margin-top: -2.35vh;\n  color: #000 !important;\n  margin-top: inherit; }\n\n.attendance-date {\n  font-family: Montserrat-SemiBold;\n  font-size: 1.67vh;\n  text-align: left;\n  line-height: 4.027vh;\n  color: #314a5d;\n  margin-top: -2vh;\n  margin-left: -1vh;\n  margin-bottom: 0vh; }\n\n.attendance-date1 {\n  font-family: Montserrat-SemiBold;\n  font-size: 2.09vh;\n  text-align: left;\n  line-height: 5.027vh;\n  color: #314a5d;\n  margin-top: -2vh;\n  margin-bottom: 0vh;\n  margin-left: 12px;\n  font-size: 14px; }\n\n.hr-class {\n  box-sizing: content-box;\n  height: 1px;\n  overflow: visible;\n  border: 0;\n  border-top: 2px solid rgba(0, 0, 0, 0.1);\n  margin: 10px 5px 10px 1px; }\n\n.attendance-create {\n  font-family: Montserrat-Bold;\n  font-size: 15.67px;\n  text-align: left;\n  line-height: 1.327vh;\n  letter-spacing: 0.021vh;\n  margin-top: -2.35vh;\n  color: #000 !important;\n  margin-left: -0.8vh;\n  margin-top: inherit; }\n\n.attendancemain {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n  font-weight: bold; }\n\n.attendanceheader {\n  padding-top: 0px;\n  padding-bottom: 2px; }\n\n.attendancediv {\n  height: 57%;\n  overflow: scroll; }\n\n.attendance-Button {\n  margin-left: 12px; }\n\n.select-Label {\n  font-size: 1rem !important; }\n\n.innerDiv {\n  height: 66px;\n  width: 220px;\n  margin-top: 35px;\n  font-size: 16px;\n  text-align: left;\n  display: flex;\n  align-items: center; }\n\n.attendance-Btn {\n  margin-bottom: -12px;\n  margin-top: -11px;\n  display: flex;\n  justify-content: flex-end; }\n\n.Attednace-Header1 {\n  text-align: left;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 10px;\n  font-size: 16px; }\n\n.Attednace-Header2 {\n  text-align: center;\n  padding-top: 0;\n  padding-bottom: 0;\n  font-size: 16px;\n  padding-left: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvQW1leS9KQVdBVEEvamF3YXRhLW1hbmFnZXIvSmF3YXRhTWFuYWdlckFwcC9zcmMvYXBwL3NpZGVtZW51L3N1YmplY3RzL3N1YmplY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSyxhQUFhO0VBQ2QsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQUVkO0VBRUksMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdCQUFnQjtFQUNoQixnQ0FBK0I7RUFDL0IsMEJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDBDQUF3QztFQUN4Qyx3QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0kscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksa0NBQWtDO0VBQ2xDLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLGtDQUFrQztFQUNsQyxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksbUNBQWlCLEVBQUE7O0FBYXJCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLFdBQVUsRUFBQTs7QUFFZDtFQUNJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFVLEVBQUE7O0FBRWQ7RUFDSSw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBcUI7RUFFckIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGNBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGNBQXNCO0VBQ3RCLGdCQUFnQjtFQUVoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsd0NBQW9DO0VBQ3BDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDRCQUE0QjtFQUU1QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFJckI7RUFDSSwwQkFBMEIsRUFBQTs7QUFFOUI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxnQkFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGVBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFjO0VBQ2Qsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWRlbWVudS9zdWJqZWN0cy9zdWJqZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWxpc3Quc3NvLXRpdGxlIGlvbi1idXR0b24ge1xuICAgIGhlaWdodDogOC41MzMzMzMzMzMzMzMzMzN2dztcbiAgICBmb250LXNpemU6IDIuNHZ3ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB3aWR0aDogMzIuNTklO1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMXZ3O1xufVxuXG4uZW1wdHlBcnJcbnsgICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xufVxuLmF0dGVuZGFuY2Utc3RhdHVzXG57XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogY29udGVudHM7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbi5hdHRlbmRhbmNlSXRlbXtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1jb2xvcjogI2RhZGFkZCFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4IWltcG9ydGFudDtcbiAgICB3aWR0aDogMjA0JTtcbiAgICBtYXJnaW4tbGVmdDogNDlweDtcbiAgICBoZWlnaHQ6IDgyJTtcbiAgICBib3JkZXItYm90dG9tOiAuNXB4IHNvbGlkIGdyYXkhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3A6IDAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbmlvbi1saXN0LnNzby10aXRsZSBpb24tYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbn1cbmlvbi1saXN0LnNzby10aXRsZSBpb24tYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNvbHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQuMTZyZW07XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5kcm9wZG93bi5zdWJqZWN0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uZHJvcGRvd24uc3ViamVjdCBidXR0b24sIC5kcm9wZG93bi5zdWJqZWN0IGJ1dHRvbjpmb2N1c3tcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMHJlbSAhaW1wb3J0YW50O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBwYWRkaW5nOiAwcmVtO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24tYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuaW9uLWJhY2stYnV0dG9uIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uZHJvcGRvd24uc3ViamVjdCBidXR0b246OmFmdGVye1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uaW9uLWNvbG9yLXByaW1hcnl7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzM0M2E0MCFpbXBvcnRhbnQ7XG59XG5cbiRjb2xvcnM6IChcbiAgICBwcmltYXJ5OiMzNDNhNDAsXG4gICAgaW9uLWNvbG9yLWJhc2U6ICMzNDNhNDAgIWltcG9ydGFudFxuKTtcblxuLy8gLmF0dGVuZGFuY2V7XG4vLyAgICAgbWFyZ2luLXRvcDogLTUuNDk3dmg7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiA0LjQ5N3ZoO1xuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDQuNDk3dmg7XG4vLyB9XG4uQXR0ZW5kYW5jZS1udW1iZXIgIHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1TZW1pQm9sZDtcbiAgICBmb250LXNpemU6IDEuOTR2aDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOnJnYigyNDMgLDE2MCwgMjgpO1xuICAgIGxpbmUtaGVpZ2h0OiA1LjAyNXZoO1xuICAgIG1hcmdpbjowdmg7XG59XG4uQXR0ZW5kYW5jZS1tZWFsdHlwZXtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1TZW1pQm9sZDtcbiAgICBmb250LXNpemU6IDIuMDl2aDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiA1LjAyN3ZoO1xuICAgIG1hcmdpbjowdmg7XG59XG4uYXR0ZW5kYW5jZS1vbntcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1Cb2xkO1xuICAgIGZvbnQtc2l6ZTogMi4wOXZoO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGluZS1oZWlnaHQ6IDAuMDI3dmg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDIxdmg7XG4gICAgbWFyZ2luLXRvcDogLTIuMzV2aDtcbiAgICBjb2xvcjojMDAwICFpbXBvcnRhbnQ7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IC0wLjh2aDtcbiAgICBtYXJnaW4tdG9wOiBpbmhlcml0O1xufVxuLmF0dGVuZGFuY2UtZGF0ZXtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1TZW1pQm9sZDtcbiAgICBmb250LXNpemU6IDEuNjd2aDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiA0LjAyN3ZoO1xuICAgIGNvbG9yOiByZ2IoNDkgLDc0LCA5Myk7XG4gICAgbWFyZ2luLXRvcDogLTJ2aDtcbiAgICBtYXJnaW4tbGVmdDogLTF2aDtcbiAgICBtYXJnaW4tYm90dG9tOiAwdmg7XG59XG4uYXR0ZW5kYW5jZS1kYXRlMXtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1TZW1pQm9sZDtcbiAgICBmb250LXNpemU6IDIuMDl2aDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiA1LjAyN3ZoO1xuICAgIGNvbG9yOiByZ2IoNDkgLDc0LCA5Myk7XG4gICAgbWFyZ2luLXRvcDogLTJ2aDtcbiAgIFxuICAgIG1hcmdpbi1ib3R0b206IDB2aDtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5oci1jbGFzc3tcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xuICAgIG1hcmdpbjogMTBweCA1cHggMTBweCAxcHg7XG59XG5cbi5hdHRlbmRhbmNlLWNyZWF0ZXtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1Cb2xkO1xuICAgIC8vIGZvbnQtc2l6ZTogMi4wOXZoO1xuICAgIGZvbnQtc2l6ZTogMTUuNjdweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjMyN3ZoO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyMXZoO1xuICAgIG1hcmdpbi10b3A6IC0yLjM1dmg7XG4gICAgY29sb3I6IzAwMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAtMC44dmg7XG4gICAgbWFyZ2luLXRvcDogaW5oZXJpdDtcbn1cbi5hdHRlbmRhbmNlbWFpbntcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwOyBcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5OTk5OyBcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hdHRlbmRhbmNlaGVhZGVye1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5hdHRlbmRhbmNlZGl2e1xuICAgIGhlaWdodDogNTclO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG4uYXR0ZW5kYW5jZS1CdXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgLy8gd2lkdGg6IDEwNnB4O1xuICAgIC8vIGhlaWdodDogNDdweDtcbn1cbi5zZWxlY3QtTGFiZWx7XG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG59XG4uaW5uZXJEaXZ7XG4gICAgaGVpZ2h0OiA2NnB4O1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hdHRlbmRhbmNlLUJ0bntcbiAgICBtYXJnaW4tYm90dG9tOiAtMTJweDtcbiAgICBtYXJnaW4tdG9wOiAtMTFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uQXR0ZWRuYWNlLUhlYWRlcjF7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgIGZvbnQtc2l6ZToxNnB4O1xufVxuLkF0dGVkbmFjZS1IZWFkZXIye1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sidemenu/subjects/subjects.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/sidemenu/subjects/subjects.component.ts ***!
    \*********************************************************/

  /*! exports provided: SubjectsComponent */

  /***/
  function srcAppSidemenuSubjectsSubjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectsComponent", function () {
      return SubjectsComponent;
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


    var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/menu.service */
    "./src/app/services/menu.service.ts");
    /* harmony import */


    var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/network-interface/ngx */
    "./node_modules/@ionic-native/network-interface/ngx/index.js");
    /* harmony import */


    var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/translate-config.service */
    "./src/app/translate-config.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/unique-device-id/ngx */
    "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/downloader/ngx */
    "./node_modules/@ionic-native/downloader/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/file-path/ngx */
    "./node_modules/@ionic-native/file-path/ngx/index.js");
    /* harmony import */


    var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ionic-native/uid/ngx */
    "./node_modules/@ionic-native/uid/ngx/index.js");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
    /* harmony import */


    var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ionic-native/vibration/ngx */
    "./node_modules/@ionic-native/vibration/ngx/index.js"); // import { BarcodeFormat } from '@zxing/library';


    var SubjectsComponent = /*#__PURE__*/function () {
      function SubjectsComponent(barcodeScanner, transfer, file, loginService, localNotifications, http, menuService, storage, nativeStorage, platform, sqlite, loadingController, fileOpener, alertCtrl, network, datepipe, translateConfigService, networkInterface, router, translate, _location, downloader, splashScreen, uniqueDeviceID, androidPermissions, filePath, uid, vibration) {
        var _this106 = this;

        _classCallCheck(this, SubjectsComponent);

        this.barcodeScanner = barcodeScanner;
        this.transfer = transfer;
        this.file = file;
        this.loginService = loginService;
        this.localNotifications = localNotifications;
        this.http = http;
        this.menuService = menuService;
        this.storage = storage;
        this.nativeStorage = nativeStorage;
        this.platform = platform;
        this.sqlite = sqlite;
        this.loadingController = loadingController;
        this.fileOpener = fileOpener;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.datepipe = datepipe;
        this.translateConfigService = translateConfigService;
        this.networkInterface = networkInterface;
        this.router = router;
        this.translate = translate;
        this._location = _location;
        this.downloader = downloader;
        this.splashScreen = splashScreen;
        this.uniqueDeviceID = uniqueDeviceID;
        this.androidPermissions = androidPermissions;
        this.filePath = filePath;
        this.uid = uid;
        this.vibration = vibration;
        this.descending = false;
        this.isExist = false;
        this.column = 'name';
        this.dircreatedforJawata = false;
        this.dircreatedforEntity = false;
        this.dircreatedforClass = false;
        this.dircreatedforSubject = false;
        this.disableAttendance = false;
        this.entryFlag = true;
        this.exitFlag = true;
        this.attendanceFlag = true;
        this.attendancesheetCreate = false;
        this.attendancesheet = false;
        this.fileTransfer = this.transfer.create();
        this.selectedLanguage = localStorage.getItem('selectedL');
        this.loaderLanguage = "";
        this.subjectName = [];
        this.isLoading = false;
        this.disable = false;
        this.header = true;
        this.subjectHeader = false;
        this.entityName = "";
        this.filepath = "";
        this.filter = "";
        this.temp = [];
        this.IPAddress = "";
        this.fileName = "";
        this.subjectID = "";
        this.subjectDetailId = "";
        this.notificationDetails = [];
        this.flag = true;
        this.notificationId = 0;
        this.notificationFlag = true;
        this.haspermission = false;
        this.todaysDate = "";
        this.heading = this.translateConfigService.get('Attendance Sheet');
        this.keysToExclude = ['subjectId', 'subject_name'];
        this.row_data = [];
        this.permissonArray = [];
        this.database_name = "Jawata_App.db";
        this.table_name = "subjectListData";
        this.options = {
          preferFrontCamera: false,
          showFlipCameraButton: true,
          showTorchButton: true,
          disableSuccessBeep: true,
          torchOn: false,
          prompt: 'Place a QR code inside the scan area',
          resultDisplayDuration: 500,
          formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
          orientation: 'portrait'
        };
        this.categories = [{
          title: this.langTransalate('Present'),
          id: 0
        }, {
          title: this.langTransalate('Absent'),
          id: 1
        }, {
          title: this.langTransalate('Late'),
          id: 2
        }, {
          title: this.langTransalate('Excused'),
          id: 3
        }];
        this.msgFlag = false;
        this.defaultStatus = 'Present';
        this.checked = [];
        this.emptyData = false;
        this.emptyDataA = false;
        this.MultiButtonDisable = true;
        this.sendbutton = true;
        this.doneButton = true;
        this.datePickerTime = new Date();
        this.scanArr = true;
        this.page = 20;
        this.page2 = 20;
        this.disablebuttons = false;
        this.fileTypeArr = [{
          fileType: 'aac',
          fileExtension: 'audio/aac'
        }, {
          fileType: 'abw',
          fileExtension: 'application/x-abiword'
        }, {
          fileType: 'arc',
          fileExtension: 'application/x-freearc'
        }, {
          fileType: 'avi',
          fileExtension: 'video/x-msvideo'
        }, {
          fileType: 'azw',
          fileExtension: 'application/vnd.amazon.ebook'
        }, {
          fileType: 'bin',
          fileExtension: 'application/octet-stream'
        }, {
          fileType: 'bmp',
          fileExtension: 'image/bmp'
        }, {
          fileType: 'bz',
          fileExtension: 'application/x-bzip'
        }, {
          fileType: 'bz2',
          fileExtension: 'application/x-bzip2'
        }, {
          fileType: 'csh',
          fileExtension: 'application/x-csh'
        }, {
          fileType: 'css',
          fileExtension: 'text/css'
        }, {
          fileType: 'csv',
          fileExtension: 'text/csv'
        }, {
          fileType: 'doc',
          fileExtension: 'application/msword'
        }, {
          fileType: 'docx',
          fileExtension: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        }, {
          fileType: 'eot',
          fileExtension: 'application/vnd.ms-fontobject'
        }, {
          fileType: 'epub',
          fileExtension: 'application/epub+zip'
        }, {
          fileType: 'gif',
          fileExtension: 'image/gif'
        }, {
          fileType: 'htm',
          fileExtension: 'text/html'
        }, {
          fileType: 'html',
          fileExtension: 'text/html'
        }, {
          fileType: 'ico',
          fileExtension: 'image/vnd.microsoft.icon'
        }, {
          fileType: 'ics',
          fileExtension: 'text/calendar'
        }, {
          fileType: 'jar',
          fileExtension: 'application/java-archive'
        }, {
          fileType: 'jpeg',
          fileExtension: 'image/jpeg'
        }, {
          fileType: 'jpg',
          fileExtension: 'image/jpeg'
        }, {
          fileType: 'js',
          fileExtension: 'text/javascript'
        }, {
          fileType: 'json',
          fileExtension: 'application/json'
        }, {
          fileType: 'jsonld',
          fileExtension: 'application/ld+json'
        }, {
          fileType: 'mid',
          fileExtension: 'audio/midi'
        }, {
          fileType: 'midi',
          fileExtension: 'audio/midi'
        }, {
          fileType: 'mjs',
          fileExtension: 'text/javascript'
        }, {
          fileType: 'mp3',
          fileExtension: 'audio/mpeg'
        }, {
          fileType: 'mpeg',
          fileExtension: 'video/mpeg'
        }, {
          fileType: 'mpkg',
          fileExtension: 'application/vnd.apple.installer+xml'
        }, {
          fileType: 'odp',
          fileExtension: 'application/vnd.oasis.opendocument.presentation'
        }, {
          fileType: 'ods',
          fileExtension: 'application/vnd.oasis.opendocument.spreadsheet'
        }, {
          fileType: 'odt',
          fileExtension: 'application/vnd.oasis.opendocument.text'
        }, {
          fileType: 'oga',
          fileExtension: 'audio/ogg'
        }, {
          fileType: 'ogv',
          fileExtension: 'video/ogg'
        }, {
          fileType: 'ogx',
          fileExtension: 'application/ogg'
        }, {
          fileType: 'otf',
          fileExtension: 'font/otf'
        }, {
          fileType: 'png',
          fileExtension: 'image/png'
        }, {
          fileType: 'pdf',
          fileExtension: 'application/pdf'
        }, {
          fileType: 'ppt',
          fileExtension: 'application/vnd.ms-powerpoint'
        }, {
          fileType: 'pptx',
          fileExtension: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        }, {
          fileType: 'rar',
          fileExtension: 'application/x-rar-compressed'
        }, {
          fileType: 'rtf',
          fileExtension: 'application/rtf'
        }, {
          fileType: 'sh',
          fileExtension: 'application/x-sh'
        }, {
          fileType: 'svg',
          fileExtension: 'image/svg+xml'
        }, {
          fileType: 'swf',
          fileExtension: 'application/x-shockwave-flash'
        }, {
          fileType: 'tar',
          fileExtension: 'application/x-tar'
        }, {
          fileType: 'tif',
          fileExtension: 'image/tiff'
        }, {
          fileType: 'tiff',
          fileExtension: 'image/tiff'
        }, {
          fileType: 'ttf',
          fileExtension: 'font/ttf'
        }, {
          fileType: 'txt',
          fileExtension: 'text/plain'
        }, {
          fileType: 'vsd',
          fileExtension: 'application/vnd.visio'
        }, {
          fileType: 'wav',
          fileExtension: 'audio/wav'
        }, {
          fileType: 'weba',
          fileExtension: 'audio/webm'
        }, {
          fileType: 'webm',
          fileExtension: 'video/webm'
        }, {
          fileType: 'webp',
          fileExtension: 'image/webp'
        }, {
          fileType: 'woff',
          fileExtension: 'font/woff'
        }, {
          fileType: 'woff2',
          fileExtension: 'font/woff2'
        }, {
          fileType: 'xhtml',
          fileExtension: 'application/xhtml+xml'
        }, {
          fileType: 'xls',
          fileExtension: 'application/vnd.ms-excel'
        }, {
          fileType: 'xlsx',
          fileExtension: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }, {
          fileType: 'xml',
          fileExtension: 'application/xml&nbsp;'
        }, {
          fileType: 'xul',
          fileExtension: 'application/vnd.mozilla.xul+xml'
        }, {
          fileType: 'zip',
          fileExtension: 'application/zip'
        }, {
          fileType: '3gp',
          fileExtension: 'video/3gpp'
        }, {
          fileType: '3g2',
          fileExtension: 'video/3gpp2'
        }, {
          fileType: '7z',
          fileExtension: 'application/x-7z-compressed'
        }];
        this.platform.ready().then(function () {
          //this.getuniqueDeviceID();
          //this.getID_UID('MAC');
          _this106.getID_UID('UUID'); //this.getstoragepermission();


          _this106.createDB(); //this.todaysDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
          // this.getSubjectName();


          _this106.getIPAddress();

          _this106.initializeBackButtonCustomHandler();

          _this106.createdirSubjects(); //this.createdirJawata();  // create Jawata folder if exist throws error
          //this.createdirEntity();  // create Entity folderin Jawata dir if exist throws error
          // this.createdirClass();  // create class folderin Jawata/Entity dir if exist throws error
          //this.createdirectory();

        })["catch"](function (error) {
          console.log('subjects' + error);
        });
      }

      _createClass(SubjectsComponent, [{
        key: "clearResult",
        value: function clearResult() {
          this.qrResultString = null;
        }
      }, {
        key: "onCodeResult",
        value: function onCodeResult(resultString) {
          this.qrResultString = resultString;
        }
      }, {
        key: "scanBarcode",
        value: function scanBarcode() {
          var _this107 = this;

          if (localStorage.getItem('cameraActionID') == '1') {
            this.options.preferFrontCamera = true;
          } else {
            this.options.preferFrontCamera = false;
          }

          localStorage.setItem('scan', 'true');
          this.manualAttendance == 'ScaNAttendance';
          if (localStorage.getItem('scanAlarmID') == '0' || localStorage.getItem('scanAlarmID') == '2') this.options.disableSuccessBeep = false;
          this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            console.log('Barcode data', barcodeData);
            _this107.scannedData = barcodeData;
            var data = {
              'attendanceSheetId': _this107.attendance_id,
              'selectedStatus': 'Present',
              'cureentUserId': localStorage.getItem('userId'),
              'actorId': localStorage.getItem('actorId'),
              'citizenId': barcodeData.text,
              "entityId": localStorage.getItem('entityId'),
              'locale': localStorage.getItem('selectedL')
            };
            console.log('scan API req', data);
            var headers = {
              'Content-Type': 'application/json'
            };

            if (barcodeData.text != "") {
              console.log('scan attendance API-- =' + "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/scan_qr_code"), JSON.stringify(data));

              _this107.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/scan_qr_code"), data, headers).then(function (res) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this107, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                  var _this108 = this;

                  var temp, temp1, _alert;

                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          // this.showLoader();
                          this.AttendanceScanArr = [];
                          this.AttendanceScanArr = JSON.parse(res.data);
                          console.log('AttendanceScanArr', this.AttendanceScanArr);
                          console.log('this.Attendance-ID', this.attendance_id);
                          this.loadAttendanceCreatedData(this.attendance_id);

                          if (localStorage.getItem('scanAlarmID') != '0') {
                            this.vibrate();
                          }

                          if (!(this.AttendanceScanArr['actor_not_belong'] == true)) {
                            _context14.next = 16;
                            break;
                          }

                          console.log('scan message', this.AttendanceScanArr['msg']);
                          temp = this.AttendanceScanArr['msg'];
                          temp1 = this.langTransalate('OK');
                          _context14.next = 12;
                          return this.alertCtrl.create({
                            message: temp,
                            buttons: [{
                              text: temp1,
                              handler: function handler() {
                                _this108.loadAttendanceCreatedData(_this108.attendance_id);

                                if (localStorage.getItem('scanActionID') == '0') {
                                  if (barcodeData.cancelled == true) return false;else _this108.scanBarcode();
                                }
                              }
                            }]
                          });

                        case 12:
                          _alert = _context14.sent;

                          _alert.present();

                          _context14.next = 22;
                          break;

                        case 16:
                          if (!(localStorage.getItem('scanActionID') == '0')) {
                            _context14.next = 22;
                            break;
                          }

                          if (!(barcodeData.cancelled == true)) {
                            _context14.next = 21;
                            break;
                          }

                          return _context14.abrupt("return", false);

                        case 21:
                          this.scanBarcode();

                        case 22:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _callee14, this);
                }));
              })["catch"](function (error) {
                console.log("attendance listing second screen Error Here !" + JSON.stringify(error));
              });
            }
          })["catch"](function (err) {
            console.log('Error in Barcode scanning', err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this109 = this;

          this.platform.ready().then(function () {
            //this.createdirectory();

            /** heading name change after select language */
            console.log('selecteddate ngOnInit', _this109.selecteddate);

            _this109.translate.use(_this109.selectedLanguage);

            _this109.translate.get('Attendance').subscribe(function (res) {
              _this109.heading = "";
              _this109.heading = res;
            }); // this.translate.get('Done').subscribe((res: string) => {
            //   this.heading = "";
            //   this.heading = res;
            // });
            // this.translate.get('Attendance').subscribe((res: string) => {
            //   this.heading = "";
            //   this.heading = res;
            // });


            _this109.translate.get('Done').subscribe(function (res) {
              _this109.doneButtonString = "";
              _this109.doneButtonString = res;
            });

            if (localStorage.getItem('routeurl') === null || localStorage.getItem('routeurl') === 'null') {
              localStorage.setItem('routeurl', 'subjects');
              localStorage.setItem('routeurlsso', 'null');
              localStorage.setItem('routeurlaudit-trail', 'null');
              localStorage.setItem('routeurlresource-link', 'null');
              localStorage.setItem('routeurlfeedback', 'null');
            }

            _this109.ChooseOption('Attendance');
          });
        }
      }, {
        key: "langTransalate",
        value: function langTransalate(changeText) {
          var localChnageText = changeText;
          this.translate.use(this.selectedLanguage);
          this.translate.get(changeText).subscribe(function (res) {
            // this.heading = "";
            // this.heading = res;
            localChnageText = res;
          });
          console.log('localChnageText', localChnageText);
          return localChnageText;
        }
      }, {
        key: "getuniqueDeviceID",
        value: function getuniqueDeviceID() {
          var _this110 = this;

          this.uniqueDeviceID.get().then(function (uuid) {
            return _this110.deviceid = uuid;
          })["catch"](function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getID_UID",
        value: function getID_UID(type) {
          // if(type == "IMEI"){
          //   return this.uid.IMEI;
          // }else if(type == "ICCID"){
          //   return this.uid.ICCID;
          // }else if(type == "IMSI"){
          //         return this.uid.IMSI;
          // }else if(type == "MAC"){
          //   console.log('this.uid.MAC :-' + this.uid.MAC);
          //   return this.uid.MAC;
          // }else 
          if (type == "UUID") {
            console.log('this.uid.UUID :-' + this.uid.UUID);
            this.deviceid = this.uid.UUID;
            return this.uid.UUID;
          }
        } // storage permission on adnroid device

      }, {
        key: "getstoragepermission",
        value: function getstoragepermission() {
          var _this111 = this;

          this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (result) {
            if (result.hasPermission) {
              console.log('Has permission?', result.hasPermission);
              _this111.haspermission = result.hasPermission;
            } else {
              console.log('Has permission?', result.hasPermission);
              _this111.haspermission = result.hasPermission;

              _this111.androidPermissions.requestPermission(_this111.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (res) {
                if (res.hasPermission) {
                  console.log('Has permission?', res.hasPermission);
                  _this111.haspermission = res.hasPermission;
                } else {
                  _this111.androidPermissions.requestPermission(_this111.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE);

                  _this111.permissonArray.push('No Permission');

                  if (_this111.permissonArray.length == 1) {
                    _this111.permissonArray = []; //alert("To allow permission, Please set 'Reset app preferences' manually to your device settting");

                    _this111.translate.use(_this111.selectedLanguage);

                    _this111.translate.get('Jawata needs permission to your Phone storage. To allow permission go to the  app permissions in your device setting').subscribe(function (res) {
                      alert(res);
                    });
                  }
                }
              });
            }
          }, function (err) {
            return _this111.androidPermissions.requestPermission(_this111.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE);
          });
        }
      }, {
        key: "initializeBackButtonCustomHandler",
        value: function initializeBackButtonCustomHandler() {
          var _this112 = this;

          this.platform.backButton.subscribeWithPriority(999999, function () {
            //alert('subject :'+ this.router.url+' --backurl--'+localStorage.getItem('bckbtnpage'));
            if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
              navigator['app'].exitApp();
            } else if (localStorage.getItem('subjectWiseData') == 'true') {
              _this112.header = true;
              _this112.subjectNameList = true;
              _this112.subjectHeader = false;
              _this112.subjectWiseData = false;
              localStorage.setItem('subjectWiseData', 'false');
            } else {
              if (localStorage.getItem('secondScreen') == 'true') {
                if (localStorage.getItem('scan') == 'true') {
                  _this112.attendancesheetCreate = true;
                  _this112.attendancesheet = false;
                  localStorage.setItem('scan', 'false');
                } else {
                  _this112.onClickClose();
                }
              } else {
                _this112.onClickBack();
              } //this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);

            }
          });
        }
      }, {
        key: "onClickBack",
        value: function onClickBack() {
          if (localStorage.getItem('currenturl') == '/subjects') {
            localStorage.setItem('currenturl', '/tablinks/scanpage');
            window.location.reload(true);
          } //this._location.back();

        }
      }, {
        key: "trimSearchValues",
        value: function trimSearchValues(value) {
          this.filter = "";
          this.filter = value.trim();
        }
      }, {
        key: "getIPAddress",
        value: function getIPAddress() {
          var _this113 = this;

          if (this.network.type != 'none') {
            this.networkInterface.getCarrierIPAddress().then(function (address) {
              return _this113.IPAddress = "".concat(address.ip);
            } // alert('Ip address is:-' + `${address.ip}`)
            )["catch"]();
          }

          if (this.network.type === 'wifi') {
            this.networkInterface.getWiFiIPAddress().then(function (address) {
              return _this113.IPAddress = "".concat(address.ip);
            })["catch"](function (error) {
              return console.error("Unable to get IP: ".concat(error));
            });
          }
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          // this.getSubjectName();
          event.target.complete(); // this.onClickSubjectName(this.subName);

          event.target.complete();
        }
      }, {
        key: "getSubjectName",
        value: function getSubjectName() {
          var _this114 = this;

          /**For Web API Called Here */
          // this.menuService.getSubjectName(localStorage.getItem('entityId'), localStorage.getItem('entityName'), localStorage.getItem('userId'), localStorage.getItem('userType'), localStorage.getItem('class_id')).subscribe(data => {
          //   this.subjectName = [];
          //   this.subjectName = data;
          //   console.log("subjectName is ==", this.subjectName);
          //   // get Unique subject Name
          //   var temp = []
          //   temp = []
          //   for (var i = 0; i < this.subjectName.length; i++) {
          //     temp.push(this.subjectName[i]['subject_name'])
          //   }
          //   this.uniqueSubjectName = []
          //   this.uniqueSubjectName = Array.from(new Set(temp))
          // })
          if (localStorage.getItem('userType') == "Actor's Parent") {
            this.data = {
              'actor_id': localStorage.getItem('actorId'),
              'entityId': localStorage.getItem('entityId'),
              'entityName': localStorage.getItem('entityName'),
              'userId': localStorage.getItem('userId'),
              'userType': localStorage.getItem('userType'),
              'class_id': localStorage.getItem('class_id')
            };
          } else {
            this.data = {
              'entityId': localStorage.getItem('entityId'),
              'entityName': localStorage.getItem('entityName'),
              'userId': localStorage.getItem('userId'),
              'userType': localStorage.getItem('userType'),
              'class_id': localStorage.getItem('class_id')
            };
          }

          var headers = {
            'Content-Type': 'application/json'
          };

          if (localStorage.getItem('class_id') == null) {
            this.translate.use(this.selectedLanguage);
            this.translate.get('Please select class or if class is not yet assigned to this account, then contact your entity manager.').subscribe(function (res) {
              alert(res);
            });
          } else {
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/subject"), JSON.stringify(this.data));
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/subject"), this.data, headers).then(function (res) {
              console.log("subject List:-", JSON.parse(res.data));
              var tempArr;
              tempArr = [];
              _this114.subjectName = [];
              tempArr = JSON.parse(res.data);

              for (var i = 0; i < tempArr.length; i++) {
                _this114.subjectName.push(tempArr[i]);
              }

              console.log('this.subjectName Get method' + JSON.stringify(_this114.subjectName)); //if subject length =0

              if (_this114.subjectName.length == 0) {
                _this114.translate.use(_this114.selectedLanguage);

                _this114.translate.get('The Subject is not yet assigned. Please contact to the Entity Manager.').subscribe(function (res) {
                  alert(res);
                });
              }

              _this114.insertRow();
            })["catch"](function (error) {//alert("Error In Get Subject !");
            });
          }
        }
        /**Offline App Code Start Here */

      }, {
        key: "createDB",
        value: function createDB() {
          var _this115 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this115.databaseObj = db;

            _this115.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this115.table_name + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, userId varchar(2), class_id varchar(2), subjectDetailId varchar(20),entityId varchar(2), subjectId varchar(2), subject_name varchar(2), subjectdetail_filename varchar(2), size varchar(2))', []).then(function () {
              // alert('Database Created :-' + this.database_name);
              // alert('Table Created :-' + this.table_name);
              if (_this115.network.type == 'none') {
                _this115.getRows();
              }
            })["catch"](function (e) {// alert("Error to Create Profile Table !" + JSON.stringify(e))
            });
          })["catch"](function (e) {// alert("Error to Database Create ! " + JSON.stringify(e))
          });
        }
      }, {
        key: "insertRow",
        value: function insertRow() {
          var _this116 = this;

          this.databaseObj.executeSql("SELECT DISTINCT userId, class_id, entityId, subjectDetailId,subjectId, subject_name, subjectdetail_filename, size  FROM " + this.table_name, []).then(function (res) {
            // alert("res is:-" + JSON.stringify(res));
            _this116.row_data = [];

            for (var i = 0; i < res.rows.length; i++) {
              _this116.row_data.push(res.rows.item(i));
            }

            if (_this116.network.type != 'none') {
              if (res.rows.length >= 0) {
                // delete rows here
                for (var i = 0; i < _this116.row_data.length; i++) {
                  if (_this116.row_data[i]['userId'] == localStorage.getItem('userId') && _this116.row_data[i]['entityId'] == localStorage.getItem('entityId') && _this116.row_data[i]['class_id'] == localStorage.getItem('class_id')) {
                    _this116.databaseObj.executeSql("DELETE FROM ".concat(_this116.table_name, " WHERE userId = ").concat(_this116.row_data[i]['userId']), []).then(function (res) {// alert("Row Deleted :-" + JSON.stringify(res));
                    })["catch"](function (e) {// alert("error to delete rows " + JSON.stringify(e))
                    });
                  }
                } // Inserting rows here


                for (var i = 0; i < _this116.subjectName.length; i++) {
                  _this116.databaseObj.executeSql('INSERT INTO ' + _this116.table_name + ' (userId, class_id, entityId, subjectDetailId,subjectId, subject_name, subjectdetail_filename, size ) VALUES ("' + localStorage.getItem('userId') + '","' + localStorage.getItem('class_id') + '","' + localStorage.getItem('entityId') + '","' + _this116.subjectName[i]['subjectDetailId'] + '","' + _this116.subjectName[i]['subjectId'] + '","' + _this116.subjectName[i]['subject_name'] + '","' + _this116.subjectName[i]['subjectdetail_filename'] + '","' + _this116.subjectName[i]['size'] + '")', []).then(function () {
                    // alert('Row Inserted!' + this.table_name);
                    _this116.getRows();
                  })["catch"](function (e) {// alert("Error Is insert Rows:- " + JSON.stringify(e))
                  });
                }
              }
            }
          })["catch"](function (e) {// alert("Error Is to get Rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "getRows",
        value: function getRows() {
          var _this117 = this;

          this.databaseObj.executeSql("SELECT  DISTINCT userId, class_id, entityId, subjectDetailId,subjectId, subject_name, subjectdetail_filename, size  FROM " + this.table_name, []).then(function (res) {
            // alert("res is :-" + JSON.stringify(res));
            _this117.row_data = [];

            if (res.rows.length > 0) {
              _this117.subjectName = [];

              for (var i = 0; i < res.rows.length; i++) {
                _this117.row_data.push(res.rows.item(i));
              }

              for (var i = 0; i < _this117.row_data.length; i++) {
                if (_this117.row_data[i]['userId'] == localStorage.getItem('userId') && _this117.row_data[i]['entityId'] == localStorage.getItem('entityId') && _this117.row_data[i]['class_id'] == localStorage.getItem('class_id')) {
                  _this117.subjectName.push(_this117.row_data[i]);
                }
              } // alert("this.subjectName :-" + JSON.stringify(this.subjectName));
              // alert("this.subjectName.length :-" + JSON.stringify(this.subjectName.length));


              var temp = [];
              temp = [];

              for (var i = 0; i < _this117.subjectName.length; i++) {
                temp.push(_this117.subjectName[i]['subject_name']);
              }

              _this117.uniqueSubjectName = [];
              _this117.uniqueSubjectName = Array.from(new Set(temp)); // alert("this.uniqueSubjectName  :-" + JSON.stringify(this.uniqueSubjectName));
            }
          })["catch"](function (e) {// alert("Error Is to get Rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "createdirSubjects",
        value: function createdirSubjects() {
          var _this118 = this;

          this.platform.ready().then(function () {
            _this118.file.checkDir(_this118.file.externalRootDirectory, 'Documents').then(function (response) {
              console.log('Directory already present for this Jawata :- ' + response);

              _this118.file.checkDir(_this118.file.externalRootDirectory + 'Documents' + '/', 'Jawata').then(function (response) {
                console.log('Directory already present for this Jawata :- ' + response);

                _this118.file.checkDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('citizen_id') + '/').then(function (response) {
                  console.log('Directory already present for this userName :- ' + response);

                  _this118.file.checkDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id') + '/', localStorage.getItem('entity_no').toString() + '/').then(function (response) {
                    console.log('Directory already present for this userName :- ' + response);

                    _this118.file.checkDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no').toString() + '/', 'Subjects' + '/').then(function (response) {
                      console.log('Directory already present for this userName :- ' + response);

                      _this118.file.checkDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no').toString() + '/' + 'Subjects' + '/', localStorage.getItem('className') + '/').then(function (response) {
                        console.log('Directory already present for this userName :- ' + response);
                      }, function (error) {
                        //Create class
                        _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString() + '/' + 'Subjects' + '/', localStorage.getItem('className') + '/', false).then(function (response) {
                          console.log('createDir for userid ', response);
                        });
                      });
                    }, function (error) {
                      // Create Subjects and remaining directory
                      _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Subjects' + '/', false).then(function (response) {
                        console.log('createDir for userid ', response);

                        _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString() + '/' + 'Subjects' + '/', localStorage.getItem('className') + '/', false).then(function (response) {
                          console.log('createDir for userid ', response);
                        });
                      });
                    });
                  }, function (error) {
                    // Create Entity No. and remaining directory
                    _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/', localStorage.getItem('entity_no').toString(), false).then(function (response) {
                      console.log('createDir for userid ', response);

                      _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Subjects' + '/', false).then(function (response) {
                        console.log('createDir for userid ', response);

                        _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString() + '/' + 'Subjects' + '/', localStorage.getItem('className') + '/', false).then(function (response) {
                          console.log('createDir for userid ', response);
                        });
                      });
                    });
                  });
                }, function (error) {
                  // citizen Id create and remaining directory
                  _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('citizen_id').toString(), false).then(function (response) {
                    console.log('createDir for userid ', response);

                    _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/', localStorage.getItem('entity_no').toString(), false).then(function (response) {
                      console.log('createDir for userid ', response);

                      _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Subjects' + '/', false).then(function (response) {
                        console.log('createDir for userid ', response);

                        _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString() + '/' + 'Subjects' + '/', localStorage.getItem('className') + '/', false).then(function (response) {
                          console.log('createDir for userid ', response);
                        });
                      });
                    });
                  });
                });
              }, function (error) {
                //  create Jawata and remaining directory
                _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/', 'Jawata', false).then(function (response) {
                  console.log('createDir for jawata ', response);

                  _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('citizen_id').toString(), false).then(function (response) {
                    console.log('createDir for userid ', response);

                    _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/', localStorage.getItem('entity_no').toString(), false).then(function (response) {
                      console.log('createDir for userid ', response);

                      _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Subjects' + '/', false).then(function (response) {
                        console.log('createDir for userid ', response);

                        _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString() + '/' + 'Subjects' + '/', localStorage.getItem('className') + '/', false).then(function (response) {
                          console.log('createDir for userid ', response);
                        });
                      });
                    });
                  });
                });
              });
            }, function (error) {
              //  create Documents and remaining directory
              _this118.file.createDir(_this118.file.externalRootDirectory, 'Documents', false).then(function (response) {
                console.log('createDir for jawata ', response); // create directory for jawata 

                _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/', 'Jawata', false).then(function (response) {
                  console.log('createDir for jawata ', response); // create directory for username

                  _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('citizen_id').toString(), false).then(function (response) {
                    console.log('createDir for userid ', response);

                    _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/', localStorage.getItem('entity_no').toString(), false).then(function (response) {
                      console.log('createDir for userid ', response);

                      _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Subjects' + '/', false).then(function (response) {
                        console.log('createDir for userid ', response);

                        _this118.file.createDir(_this118.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString() + '/' + 'Subjects' + '/', localStorage.getItem('className') + '/', false).then(function (response) {
                          console.log('createDir for userid ', response);
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        } //recent code

      }, {
        key: "ChooseOption",
        value: function ChooseOption(type) {
          var _this119 = this;

          // if (type == 'Entry') {
          //   this.entryFlag = true
          //   // this.exitFlag=false
          //   // this.attendanceFlag=false
          //   this.attendancesheet = false
          //   this.scanBarcode();
          // } else if (type == 'Exit') {
          //   console.log('exit click function.......')
          //   this.exitFlag = true
          //   this.entryFlag = false
          //   this.attendanceFlag = false
          //   this.attendancesheet = false
          //   //  this.scanBarcode();
          // } else
          this.platform.ready().then(function () {
            if (type == 'Attendance') {
              console.log('checked array', _this119.checked);
              console.log('this.checked.length', _this119.checked.length);
              _this119.attendanceFlag = false;
              _this119.attendancesheet = true;
              _this119.entryFlag = false;
              _this119.exitFlag = false;
              _this119.disableAttendance = true;
              _this119.disablebuttons = false; //  this.scanBarcode();

              _this119.showLoader();

              _this119.getClass();

              _this119.getSubject();

              _this119.EntityID = localStorage.getItem('entityId');
              _this119.entityName = localStorage.getItem('entityName');
              ;
              var data = {
                'entityid': localStorage.getItem('entityId'),
                'userid': localStorage.getItem('userId')
              };
              var headers = {
                'Content-Type': 'application/json'
              };
              console.log('Attendance List API-- =' + "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/list_attendance_sheet"), JSON.stringify(data));

              _this119.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/list_attendance_sheet"), data, headers).then(function (res) {
                _this119.AttendanceTempArr = [];
                _this119.AttendanceListArr = [];
                var date = "";
                _this119.AttendanceTempArr = JSON.parse(res.data); // data received by server

                _this119.AttendanceTempArr = _this119.AttendanceTempArr['getAttendanceSheetData'];
                _this119.checked = [];
                console.log('AttendanceTempArr', _this119.AttendanceTempArr);

                for (var i = 0; i < _this119.page; i++) //15<16 
                {
                  date = _this119.utcdateToLocal(_this119.AttendanceTempArr[i]["created_at"]);

                  _this119.AttendanceListArr.push({
                    "ref_grade": _this119.AttendanceTempArr[i]["ref_grade"],
                    "subject_name": _this119.AttendanceTempArr[i]["subject_name"],
                    // "Name":  this.AttendanceTempArr[i]["firstname"] + " " +  this.AttendanceTempArr[i]["lastname"],
                    "created_at": date,
                    "attendance_sheet_date": _this119.AttendanceTempArr[i]['attendance_sheet_date'],
                    "attendance_id": _this119.AttendanceTempArr[i]['attendance_id'],
                    "send_attendance": _this119.AttendanceTempArr[i]['send_attendance'],
                    "attendance_status_disabled": _this119.AttendanceTempArr[i]['attendance_status_disabled']
                  });

                  _this119.todaysDate = _this119.datepipe.transform(new Date(), 'yyyy-MM-dd');
                  _this119.defaultClass = localStorage.getItem('className');
                  _this119.defaultSubject = localStorage.getItem('subject_name');
                  _this119.selecteddate = new Date();
                  _this119.CreatedTime = _this119.datepipe.transform(_this119.selecteddate, 'HH:mm:ss');
                  _this119.MultiButtonDisable = true;
                  console.log('sleected Date', _this119.selecteddate + '' + _this119.CreatedTime);

                  _this119.dismissLodader();

                  _this119.emptyDataA = false;
                  _this119.emptyData = false;
                }

                console.log(' this.AttendanceListArr', _this119.AttendanceListArr);

                if (_this119.AttendanceTempArr.length == 0) {
                  _this119.selecteddate = new Date();
                  _this119.todaysDate = _this119.datepipe.transform(new Date(), 'yyyy-MM-dd');
                  _this119.emptyDataA = true;
                  _this119.EmptyArr = _this119.langTransalate("No records to display");
                } // getAttendanceSheetData

              })["catch"](function (error) {
                _this119.defaultClass = localStorage.getItem('className');
                _this119.defaultSubject = localStorage.getItem('subject_name');
                _this119.selecteddate = new Date();
                _this119.todaysDate = _this119.datepipe.transform(new Date(), 'yyyy-MM-dd');

                _this119.dismissLodader();

                console.log("attendance List display Error Here !" + JSON.stringify(error));
              });
            }
          });
        }
      }, {
        key: "utcdateToLocal",
        value: function utcdateToLocal(utcdate) {
          var utcDate = new Date(utcdate);
          var tzOffset = new Date().getTimezoneOffset() * 60 * 1000;
          var newTime = utcDate.getTime() - tzOffset;
          var localDate = new Date(newTime);
          return this.datepipe.transform(localDate, 'yyyy-MM-dd HH:mm:ss');
        }
      }, {
        key: "onClickopen",
        value: function onClickopen() {
          var _this120 = this;

          // if (this.defaultClass == null || this.defaultSubject == null) {
          //   this.translate.get('Please Select class and subject').subscribe((res: string) => {
          //     alert(res);
          //   });
          // }else
          if (this.checked.length == 0) {
            this.translate.get('Please Select Attendance').subscribe(function (res) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this120, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                var temp, temp1, alert;
                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        temp = this.langTransalate(res);
                        temp1 = this.langTransalate('OK');
                        console.log('translated lang', temp);
                        _context15.next = 5;
                        return this.alertCtrl.create({
                          message: temp,
                          buttons: [{
                            text: temp1
                          }]
                        });

                      case 5:
                        alert = _context15.sent;
                        alert.present(); // alert(temp);

                      case 7:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15, this);
              }));
            });
          } // if ( this.send_attendance == 'no') {
          //   this.translate.get('no mail id').subscribe((res: string) => {
          //     alert(res);
          //   });
          // }
          else {
              this.attendanceFlag = false;
              this.attendancesheet = false;
              this.entryFlag = false;
              this.exitFlag = false;
              this.attendancesheetCreate = true;

              for (var i = 0; i < this.AttendanceListArr.length; i++) {
                console.log('inside for ');

                if (this.AttendanceListArr[i].attendance_id == this.attendance_id) {
                  if (this.AttendanceListArr[i]['attendance_status_disabled'] == true) {
                    this.doneButton = true; // enable
                  } else {
                    this.doneButton = false; //disable
                  }

                  if (this.AttendanceListArr[i]['send_attendance'] == 'no') {
                    console.log('this.sendbutton111', this.sendbutton);
                    this.sendbutton = true; //enble
                  } else {
                    console.log('this.sendbutton222', this.sendbutton);
                    this.sendbutton = false; //disable
                  }

                  this.defaultClass = this.AttendanceListArr[i].ref_grade;
                  this.defaultSubject = this.AttendanceListArr[i].subject_name;
                  this.selecteddate = new Date();
                  this.CreatedTime = this.datepipe.transform(this.AttendanceListArr[i].created_at, 'HH:mm:ss');
                  console.log('checking  date', this.CreatedTime);
                  this.selecteddate = this.AttendanceListArr[i].attendance_sheet_date;
                  console.log('selecteddate on open', this.selecteddate);
                }
              }

              this.loadAttendanceCreatedData(this.attendance_id);
            }
        }
      }, {
        key: "presentConfirm",
        value: function presentConfirm() {}
      }, {
        key: "onClickCreate",
        value: function onClickCreate() {
          var _this121 = this;

          if (this.defaultClass == null || this.defaultClass == '' || this.defaultSubject == null || this.defaultSubject == '') {
            this.translate.get(this.langTransalate('Please Select class and subject')).subscribe(function (res) {
              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this121, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                var temp, temp1, alert;
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        this.langTransalate(res);
                        temp = this.langTransalate(res);
                        temp1 = this.langTransalate('OK');
                        console.log('translated lang', temp);
                        _context16.next = 6;
                        return this.alertCtrl.create({
                          message: temp,
                          buttons: [{
                            text: temp1
                          }]
                        });

                      case 6:
                        alert = _context16.sent;
                        alert.present(); // alert(res);

                      case 8:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16, this);
              }));
            });
          } else {
            this.attendanceFlag = false;
            this.attendancesheet = false;
            this.MultiButtonDisable = false;
            this.entryFlag = false;
            this.exitFlag = false;
            this.doneButton = true;
            this.sendbutton = true;
            this.selecteddate = this.selecteddate;
            console.log('this.datePickerTime', this.datePickerTime);
            var date = this.datePickerTime.split('T');
            console.log('slected Date b', date);
            var utctime = new Date().toISOString();
            var datetime1 = utctime.split('T');
            var datetieme2 = datetime1[1].split('.');
            console.log('date:-', date[0] + ' ' + datetieme2[0]); // var temp = this.datepipe.transform(this.selecteddate, 'yyyy-MM-dd');
            // console.log('temp date', temp)

            var data = {
              'class': localStorage.getItem('class_id'),
              'subject': localStorage.getItem('subject_id'),
              'attendance_date': date[0] + ' ' + datetieme2[0],
              'entityid': localStorage.getItem('entityId'),
              'ipAddress': this.deviceid,
              'userType': localStorage.getItem('userType'),
              'userid': localStorage.getItem('userId')
            };
            console.log('create API req', data);
            var headers = {
              'Content-Type': 'application/json'
            };
            console.log('create API-- =' + "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/create_attendance_sheet"), JSON.stringify(data));
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/create_attendance_sheet"), data, headers).then(function (res) {
              _this121.attendancesheetCreate = true;
              _this121.createdAttendanceArr = [];
              _this121.createdAttendanceArr = JSON.parse(res.data); // data received by server

              _this121.Attendance_Sheet_id = _this121.createdAttendanceArr['attendance_sheet_id'];
              _this121.attendance_id = _this121.createdAttendanceArr['attendance_sheet_id']; // localStorage.setItem('Attendance_Sheet_id', this.Attendance_Sheet_id)
              // console.log('Attendance_Sheet_id', this.Attendance_Sheet_id)

              _this121.CreatedTime = _this121.datepipe.transform(new Date(), 'HH:mm:ss');

              _this121.loadAttendanceCreatedData(_this121.Attendance_Sheet_id); //for disable send button if selected date is grater than todays date
              // var TodayDate: Date = new Date()
              // var year = this.datepipe.transform(TodayDate, 'yyyy')
              // var month = this.datepipe.transform(TodayDate, 'MM')
              // var day = this.datepipe.transform(TodayDate, 'dd')
              // console.log('API date-', year + month + day)
              // var yearselected = this.datepipe.transform(this.selecteddate, 'yyyy')
              // var monthselected = this.datepipe.transform(this.selecteddate, 'MM')
              // var dayselected = this.datepipe.transform(this.selecteddate, 'dd')
              // console.log('selected  date', yearselected + monthselected + dayselected)
              // this.CreatedTime = this.datepipe.transform(new Date(), 'HH:mm:ss')
              // console.log('CreatedTime for create', this.CreatedTime)
              // if (day < dayselected)//12>12
              // {
              //   console.log('disable send 1')
              //   this.MultiButtonDisable = false
              //   if (month < monthselected) {
              //     console.log('disable send 4')
              //     this.MultiButtonDisable = false
              //   } else {
              //     console.log('enable send 5')
              //   }
              // } else {
              //   if (month < monthselected)//07>05
              //   {
              //     console.log('disable send 2')
              //     this.MultiButtonDisable = false
              //   } else {
              //     console.log('enable send 3')
              //     this.MultiButtonDisable = true
              //   }
              //        }

            })["catch"](function (error) {
              console.log("attendance create Error Here !" + JSON.stringify(error));
            });
          }
        }
      }, {
        key: "loadAttendanceCreatedData",
        value: function loadAttendanceCreatedData(Attendance_Sheet_id) {
          var _this122 = this;

          //API for Attendance Second list data Display
          localStorage.setItem('secondScreen', 'true');
          var data1 = {
            'attendance_sheet_id': Attendance_Sheet_id,
            'entityid': localStorage.getItem('entityId'),
            'locale': localStorage.getItem('selectedL')
          };
          console.log('Take API req', data1);
          var headers = {
            'Content-Type': 'application/json'
          };
          this.showLoader();
          console.log('take attendance API-- =' + "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/take_attendance_sheet"), JSON.stringify(data1));
          this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/take_attendance_sheet"), data1, headers).then(function (res) {
            _this122.AttendanceListArr2 = [];
            temp = [];
            var temp = JSON.parse(res.data);
            _this122.temp1 = [];
            _this122.temp1 = temp['assignedUserDataOfClass'];
            console.log('temp1 data Array', _this122.temp1);

            for (var i = 0; i < _this122.page2; i++) {
              if (_this122.temp1[i]["attendance_status"] != null) {
                _this122.disablebuttons = true;
              }

              var statusId = 4;
              var status = null;

              if (_this122.temp1[i]["attendance_status"] == 'present') {
                statusId = 0;
                status = 'Present';
              } else if (_this122.temp1[i]["attendance_status"] == 'absent') {
                statusId = 1;
                status = 'Absent';
              } else if (_this122.temp1[i]["attendance_status"] == 'late') {
                statusId = 2;
                status = 'Late';
              } else if (_this122.temp1[i]["attendance_status"] == 'excused') {
                statusId = 3;
                status = 'Excused';
              }

              _this122.AttendanceListArr2.push({
                "attendance_status": status,
                "fullName": _this122.temp1[i]["fullName"],
                "citizen_id": _this122.temp1[i]["citizen_id"],
                "statusId": statusId
              });
            } // this.AttendanceListArr2 = this.AttendanceListArr2['assignedUserDataOfClass']


            _this122.defaultAttendance = 'Select';
            console.log('this.AttendanceListArr2', _this122.AttendanceListArr2);
            _this122.emptyData = false;
            _this122.emptyDataA = false;

            if (_this122.temp1.length == 0) {
              _this122.emptyData = true;
              _this122.EmptyArr = _this122.EmptyArr = _this122.langTransalate("No records to display");
            }

            _this122.dismissLodader();
          })["catch"](function (error) {
            _this122.dismissLodader();

            console.log('checking 2222');
            console.log("attendance listing second screen Error Here !" + JSON.stringify(error)); // this.translate.get('Something went wrong').subscribe((res: string) => {
            //   alert(res);
            // });
          });
        } //loaderLanguage = "";

      }, {
        key: "showLoader",
        value: function showLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var _this123 = this;

            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    this.translate.use(this.selectedLanguage);
                    this.translate.get('Loading').subscribe(function (res) {
                      _this123.loaderLanguage = "";
                      _this123.loaderLanguage = res;
                    });
                    _context17.next = 4;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: this.loaderLanguage + ' ....',
                      duration: 20000
                    }).then(function (a) {
                      a.present().then(function () {
                        console.log('presented');
                      });
                    });

                  case 4:
                    return _context17.abrupt("return", _context17.sent);

                  case 5:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "dismissLodader",
        value: function dismissLodader() {
          this.loadingController.dismiss().then(function () {
            return console.log('dismissed');
          });
        }
      }, {
        key: "onClickClose",
        value: function onClickClose() {
          this.MultiButtonDisable = true;
          this.ChooseOption('Attendance');
          this.checked = []; // this.selecteddate = new Date();

          this.attendancesheetCreate = false;
          this.attendancesheet = true;
          this.emptyData = false;
          this.emptyDataA = false;
          localStorage.setItem('secondScreen', 'false'); // this.translate.get('Please select only one record while performing operation').subscribe((res) => {
          //   alert(res);

          if (this.checked.length > 1) {
            this.ChooseOption('Attendance');
            this.checked = [];
          }

          localStorage.setItem('scan', 'false'); // });
          //window.location.reload(true)
        }
      }, {
        key: "onCancel",
        value: function onCancel() {}
      }, {
        key: "onClickScan",
        value: function onClickScan() {
          // if (this.manualAttendance == 'manualAttendance') {
          // var data = {
          //   'attendanceSheetId': localStorage.getItem('Attendance_Sheet_id'),
          //   'selectedStatus': this.defaultStatus,
          //   'cureentUserId': localStorage.getItem('userId'),
          //   'actorId': localStorage.getItem('actorId'),
          //   'citizenId': this.citizenID
          // }
          // var headers = {
          //   'Content-Type': 'application/json'
          // }
          // console.log('scan attendance API-- =' + `${environment.apiUrl}/api/scan_qr_code`, JSON.stringify(data));
          // this.http.post(`${environment.apiUrl}/api/scan_qr_code`, data, headers).then(res => {
          //   // this.showLoader();
          //   this.AttendanceScanArr = [];
          //   this.AttendanceScanArr = JSON.parse(res.data);
          //   console.log('AttendanceScanArr', JSON.stringify(this.AttendanceScanArr));
          //   this.translate.get('Attendandance Updated Successfully').subscribe((res: string) => {
          //     alert(res);
          //   });
          // });
          // } else {
          this.scanBarcode(); //}
          // this.manualAttendance = ''
          // this.defaultStatus = 'present';
          // console.log('event ', status);
          // this.citizenID = '';
          // console.log('citizenId', this.citizenID);
        }
      }, {
        key: "vibrate",
        value: function vibrate() {
          this.vibration.vibrate(500);
        }
      }, {
        key: "onClickSend",
        value: function onClickSend(type) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _this124 = this;

            var error, temp1, _alert2, temp, data, headers;

            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    this.showSendLoader();

                    if (!(this.scanArr == false)) {
                      _context20.next = 11;
                      break;
                    }

                    error = this.langTransalate('There was error sending attendance sheet.Please send it again');
                    temp1 = this.langTransalate('OK');
                    console.log('translated lang', temp);
                    _context20.next = 7;
                    return this.alertCtrl.create({
                      message: error,
                      buttons: [{
                        text: temp1,
                        handler: function handler() {
                          _this124.dismissLodader(); // this.onClickClose();

                        }
                      }]
                    });

                  case 7:
                    _alert2 = _context20.sent;

                    _alert2.present();

                    _context20.next = 17;
                    break;

                  case 11:
                    temp = this.datepipe.transform(this.selecteddate, 'yyyy-MM-dd');
                    console.log('temp date', temp);
                    data = {
                      'attendanceSheetID': this.attendance_id,
                      'locale': this.selectedLanguage,
                      'current_user_id': localStorage.getItem('userId'),
                      'entityid': localStorage.getItem('entityId'),
                      'dateTime': temp,
                      'userType': localStorage.getItem('userType'),
                      'ipAdress': this.deviceid
                    };
                    headers = {
                      'Content-Type': 'application/json'
                    }; // this.showSendLoader();
                    //  var interval1 = setInterval(async () => {

                    console.log('send attendance API-- =' + "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/send_attendance_sheet"), JSON.stringify(data));
                    this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/send_attendance_sheet"), data, headers).then(function (res) {
                      _this124.sendArr = JSON.parse(res.data);
                      _this124.sendAPIMsg = _this124.sendArr['msg'];
                      console.log('sendAPIMsg', _this124.sendAPIMsg);
                      console.log('sendAPIMsg2', res.data);
                      console.log('this.sendArr', _this124.sendArr);
                      var alert;

                      _this124.translate.get(_this124.sendAPIMsg).subscribe(function (res) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this124, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                          var _this125 = this;

                          var temp1;
                          return regeneratorRuntime.wrap(function _callee18$(_context18) {
                            while (1) {
                              switch (_context18.prev = _context18.next) {
                                case 0:
                                  temp1 = this.langTransalate('OK');
                                  console.log('translated lang', temp);
                                  _context18.next = 4;
                                  return this.alertCtrl.create({
                                    message: res,
                                    buttons: [{
                                      text: temp1,
                                      handler: function handler() {
                                        _this125.dismissLodader();

                                        _this125.onClickClose();
                                      }
                                    }],
                                    backdropDismiss: false
                                  });

                                case 4:
                                  alert = _context18.sent;
                                  alert.present();
                                  this.dismissLodader();

                                case 7:
                                case "end":
                                  return _context18.stop();
                              }
                            }
                          }, _callee18, this);
                        }));
                      });
                    })["catch"](function (error) {
                      var error;
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this124, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                        var _this126 = this;

                        var temp1, alert;
                        return regeneratorRuntime.wrap(function _callee19$(_context19) {
                          while (1) {
                            switch (_context19.prev = _context19.next) {
                              case 0:
                                this.dismissLodader();
                                error = this.langTransalate('There was error sending attendance sheet.Please send it again');
                                temp1 = this.langTransalate('OK');
                                console.log('translated lang', temp);
                                _context19.next = 6;
                                return this.alertCtrl.create({
                                  message: error,
                                  buttons: [{
                                    text: temp1,
                                    handler: function handler() {
                                      _this126.dismissLodader(); // this.onClickClose();

                                    }
                                  }]
                                });

                              case 6:
                                alert = _context19.sent;
                                alert.present();
                                console.log("attendance listing second screen Error Here !" + JSON.stringify(error));

                              case 9:
                              case "end":
                                return _context19.stop();
                            }
                          }
                        }, _callee19, this);
                      }));
                    }); //   clearInterval(interval1);
                    // }, 6000);

                  case 17:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "showSendLoader",
        value: function showSendLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var _this127 = this;

            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    this.translate.use(this.selectedLanguage);
                    this.translate.get('Sending').subscribe(function (res) {
                      _this127.loaderLanguage = "";
                      _this127.loaderLanguage = res;
                    });
                    _context21.next = 4;
                    return this.loadingController.create({
                      cssClass: 'my-custom-class',
                      message: this.loaderLanguage + ' ....',
                      duration: 100000
                    }).then(function (a) {
                      a.present().then(function () {
                        console.log('presented');
                      });
                    });

                  case 4:
                    return _context21.abrupt("return", _context21.sent);

                  case 5:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "getEntityName",
        value: function getEntityName() {
          var _this128 = this;

          if (this.network.type != 'none') {
            if (localStorage.getItem('userType') == 'Manager') {
              var data = {
                'APuserId': 'null',
                'token': localStorage.getItem('token'),
                'userId': localStorage.getItem('userId')
              };
            } else if (localStorage.getItem('userType') == "Actor's Parent") {
              var data = {
                'APuserId': localStorage.getItem('userId'),
                'token': localStorage.getItem('token'),
                'userId': localStorage.getItem('actorId')
              };
            }

            var headers = {
              'Content-Type': 'application/json'
            };
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/entityPopup"), JSON.stringify(data));
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/entityPopup"), data, headers).then(function (res) {
              _this128.entityArr = [];
              _this128.entityArr = JSON.parse(res.data); // data received by server

              console.log('this.entityArr' + JSON.stringify(_this128.entityArr));

              if (_this128.entityArr.length == 0) {
                _this128.translate.use(_this128.selectedLanguage);

                _this128.translate.get('Entity is not assigned to this account,please contact your Entity Manager').subscribe(function (res) {
                  alert(res); //  this.popoverCtrl.dismiss();

                  window.location.reload(true);
                });
              } else {
                // this.insertActorEntity();
                _this128.getClass();
              }
            })["catch"](function (error) {
              console.log("getEntityName Error Here !" + JSON.stringify(error));
            });
          }
        }
      }, {
        key: "getClass",
        value: function getClass() {
          var _this129 = this;

          //  set class_id =0 to load class......
          var data = {
            'userid': localStorage.getItem('userId'),
            'entityid': localStorage.getItem('entityId'),
            'classid': 0
          };
          var headers = {
            'Content-Type': 'application/json'
          };
          console.log('class_subject_load Get class =' + "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/class_subject_load"), JSON.stringify(data));
          this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/class_subject_load"), data, headers).then(function (res) {
            console.log('API response:-' + JSON.stringify(res.data));
            _this129.classListArr = [];
            var temp;
            temp = [];
            temp = JSON.parse(res.data);
            _this129.classListArr = [];
            _this129.classListArr = temp.classArray;
            console.log('classListArr :-' + JSON.stringify(_this129.classListArr));
          })["catch"](function (error) {// alert("getClassName Error Here !" + error);
          });
        }
      }, {
        key: "getSubject",
        value: function getSubject() {
          var _this130 = this;

          var data = {
            'userid': localStorage.getItem('userId'),
            'entityid': localStorage.getItem('entityId'),
            'classid': localStorage.getItem('class_id')
          };
          console.log('class_id req', data);
          var headers = {
            'Content-Type': 'application/json'
          };
          console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/class_subject_load"), JSON.stringify(data));
          this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/class_subject_load"), data, headers).then(function (res) {
            console.log(JSON.stringify(res.data));
            _this130.subjectListArr = [];
            var temp;
            temp = [];
            temp = JSON.parse(res.data);
            _this130.subjectListArr = [];
            _this130.subjectListArr = temp.subjectArray;
            console.log('subjectListArr :-' + JSON.stringify(_this130.subjectListArr));
          })["catch"](function (error) {
            //alert('checdkchchjchcch')
            console.log('API failed', _this130.subjectListArr); // alert("getClassName Error Here !" + error);
          });
        }
      }, {
        key: "changeEntity",
        value: function changeEntity(value) {
          this.defaultEntity = "";
          this.defaultClass = "";
          this.defaultSubject = "";
          localStorage.removeItem('className');
          localStorage.removeItem('class_id'); //class_id    

          localStorage.removeItem('subject_id');
          localStorage.removeItem('subject_name'); //class_id    

          this.defaultEntity = value.trim();

          for (var i = 0; i < this.entityArr.length; i++) {
            if (this.defaultEntity == this.entityArr[i]['name_town']) {
              /**set entityId & entityName to localStorage */
              localStorage.setItem('entityId', this.entityArr[i]['id']);
              localStorage.setItem('entityName', this.entityArr[i]['name_town']);
              localStorage.setItem('entity_no', this.entityArr[i]['entity_no']);
              /**Modal Popup Close Here */
              //this.popoverCtrl.dismiss();
              //this.getClass();
              // navigate to same path
              //  this.router.navigated = false;
              //this.OnEntityChangeLoadData();
            }
          }
        }
      }, {
        key: "changeClass",
        value: function changeClass(value) {
          this.defaultClass = "";
          this.defaultClass = value.trim();
          localStorage.removeItem('subject_name');

          for (var i = 0; i < this.classListArr.length; i++) {
            if (this.defaultClass == this.classListArr[i]['ref_grade']) {
              /**set classId to localStorage */
              localStorage.setItem('class_id', this.classListArr[i]['class_id']);
              localStorage.setItem('className', this.classListArr[i]['ref_grade']); // localStorage.setItem('defaultClass', this.classListArr[i]['ref_grade']);
              // console.log('defaultclass',this.defaultClass)
              // console.log('className',localStorage.getItem('className'))

              /**Modal Popup Close Here */
              // this.popoverCtrl.dismiss();
              //this.router.navigated = false;

              console.log('classId', localStorage.getItem('class_id'));
              this.getSubject();
            }
          }
        }
      }, {
        key: "changeSubject",
        value: function changeSubject(value) {
          this.defaultSubject = "";
          this.defaultSubject = value.trim();

          for (var i = 0; i < this.subjectListArr.length; i++) {
            if (this.defaultSubject == this.subjectListArr[i]['subject_name']) {
              /**set classId to localStorage */
              localStorage.setItem('subject_id', this.subjectListArr[i]['subject_id']);
              localStorage.setItem('subject_name', this.subjectListArr[i]['subject_name']);
            }
          }
        }
        /** Change status and store in separate array */

      }, {
        key: "changeStatus",
        value: function changeStatus(status, citizen_id) {
          var _this131 = this;

          console.log('changed status id', status + '--citizen_id--' + citizen_id);
          this.disablebuttons = true;
          this.platform.ready().then(function () {
            if (status == 0) {
              _this131.defaultStatus = 'Present';
              console.log('status inside..', status);
            }

            if (status == 1) {
              _this131.defaultStatus = 'Absent';
              console.log('status inside..', status);
            }

            if (status == 2) {
              _this131.defaultStatus = 'Late';
              console.log('status inside 2..', status);
            }

            if (status == 3) {
              _this131.defaultStatus = 'Excused';
              console.log('status inside 3..', status);
            }

            _this131.citizenID = citizen_id;
            console.log('selected status...', JSON.stringify(_this131.AttendanceListArr2));

            for (var i = 0; i < _this131.AttendanceListArr2.length; i++) {
              console.log('citizen_id :-' + _this131.AttendanceListArr2[i]["citizen_id"]);

              if (citizen_id == _this131.AttendanceListArr2[i]["citizen_id"]) {
                _this131.AttendanceListArr2[i]["attendance_status"] = _this131.defaultStatus;
                _this131.AttendanceListArr2[i]["statusId"] = status;
              }
            }

            console.log('AttendanceListArr2 After changestatus :-' + JSON.stringify(_this131.AttendanceListArr2));
          });
        }
      }, {
        key: "onChangeSaveAttendance",
        value: function onChangeSaveAttendance(type) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var _this132 = this;

            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.platform.ready().then(function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this132, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
                        var _this133 = this;

                        var i, data, headers;
                        return regeneratorRuntime.wrap(function _callee23$(_context23) {
                          while (1) {
                            switch (_context23.prev = _context23.next) {
                              case 0:
                                i = 0;

                              case 1:
                                if (!(i < this.AttendanceListArr2.length)) {
                                  _context23.next = 13;
                                  break;
                                }

                                this.showLoader();

                                if (!(this.AttendanceListArr2[i]["attendance_status"] != null)) {
                                  _context23.next = 9;
                                  break;
                                }

                                data = {
                                  'attendanceSheetId': this.attendance_id,
                                  'selectedStatus': this.AttendanceListArr2[i]["attendance_status"],
                                  'cureentUserId': localStorage.getItem('userId'),
                                  'actorId': localStorage.getItem('actorId'),
                                  'citizenId': this.AttendanceListArr2[i]["citizen_id"],
                                  'entityId': localStorage.getItem('entityId'),
                                  'locale': localStorage.getItem('selectedL')
                                };
                                headers = {
                                  'Content-Type': 'application/json'
                                };
                                console.log('onChange status scan:- ' + "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/scan_qr_code"), JSON.stringify(data));
                                _context23.next = 9;
                                return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/scan_qr_code"), data, headers).then(function (res) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this133, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
                                    return regeneratorRuntime.wrap(function _callee22$(_context22) {
                                      while (1) {
                                        switch (_context22.prev = _context22.next) {
                                          case 0:
                                            this.AttendanceScanArr = [];
                                            this.AttendanceScanArr = JSON.parse(res.data);
                                            console.log('On change status AttendanceScanArr :-' + JSON.stringify(this.AttendanceScanArr));
                                            this.scanArr = true;

                                          case 4:
                                          case "end":
                                            return _context22.stop();
                                        }
                                      }
                                    }, _callee22, this);
                                  }));
                                })["catch"](function (error) {
                                  _this133.scanArr = false;

                                  _this133.dismissLodader();

                                  console.log('api/scan_qr_code on Done btn :' + error);
                                });

                              case 9:
                                this.dismissLodader();

                              case 10:
                                i++;
                                _context23.next = 1;
                                break;

                              case 13:
                              case "end":
                                return _context23.stop();
                            }
                          }
                        }, _callee23, this);
                      }));
                    });

                  case 2:
                    if (this.scanArr == true) {
                      if (type == 'send') {
                        // this.dismissLodader();
                        this.onClickSend('send');
                        console.log('calling send function');
                      } else {
                        console.log('close screen if you clicked on Done button');
                        this.dismissLodader();
                        this.onClickClose();
                      }
                    }

                  case 3:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "selectdate",
        value: function selectdate(event) {
          console.log('event', event);
          this.selecteddate = event;
          this.datePickerTime = event; // localStorage.removeItem('date');
          // localStorage.setItem('date', this.date);
        }
      }, {
        key: "addCheckbox",
        value: function addCheckbox(event, attendance_id, send_attendance, attendance_status_disabled) {
          var _this134 = this;

          console.log('checkbox event', event);
          console.log('ischeck :', event.target.checked + 'attendance_id' + attendance_id);
          this.attendance_id = attendance_id;

          if (event.target.checked) {
            this.checked.push(attendance_id);
            console.log('checkbox', this.checked);
            console.log('send_attendance', send_attendance);
            this.send_attendance = send_attendance;
          } else {
            this.checked = [];
          }

          if (this.checked[0] != this.checked[1]) {
            if (this.checked.length > 1) {
              this.translate.get(this.langTransalate('Please select only one record while performing operation')).subscribe(function (res) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this134, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
                  var temp, temp1, alert;
                  return regeneratorRuntime.wrap(function _callee25$(_context25) {
                    while (1) {
                      switch (_context25.prev = _context25.next) {
                        case 0:
                          this.langTransalate(res);
                          temp = this.langTransalate(res);
                          temp1 = this.langTransalate('OK');
                          console.log('translated lang', temp);
                          _context25.next = 6;
                          return this.alertCtrl.create({
                            message: temp,
                            buttons: [{
                              text: temp1,
                              handler: function handler() {// this.ChooseOption('Attendance');
                                //  this.checked = [];
                              }
                            }]
                          });

                        case 6:
                          alert = _context25.sent;
                          alert.present(); // alert(res);
                          // alert(res);

                          this.ChooseOption('Attendance');
                          this.checked = [];

                        case 10:
                        case "end":
                          return _context25.stop();
                      }
                    }
                  }, _callee25, this);
                }));
              });
            }
          } else {
            this.ChooseOption('Attendance');
            this.checked = [];
          } // for (var i = 0; i < this.AttendanceListArr.length; i++) {
          //   console.log('inside for ')
          //   if (this.AttendanceListArr[i].attendance_id == this.attendance_id) {
          //     var year = this.datepipe.transform(this.AttendanceListArr[i].attendance_sheet_date, 'yyyy')
          //     var month = this.datepipe.transform(this.AttendanceListArr[i].attendance_sheet_date, 'MM')
          //     var day = this.datepipe.transform(this.AttendanceListArr[i].attendance_sheet_date, 'dd')
          //     console.log('API date-', year + month + day)
          //     var yearselected = this.datepipe.transform(this.selecteddate, 'yyyy')
          //     var monthselected = this.datepipe.transform(this.selecteddate, 'MM')
          //     var dayselected = this.datepipe.transform(this.selecteddate, 'dd')
          //     console.log('selected  date', yearselected + monthselected + dayselected)
          //     if (day > dayselected)//15>12
          //     {
          //       console.log('disable send 1')
          //       this.MultiButtonDisable = false
          //       if (month > monthselected)//05>05
          //       {
          //         console.log('disable send 4')
          //         this.MultiButtonDisable = false
          //       } else {
          //         if (month == monthselected && day > dayselected)//05==05 && 15>13
          //         {
          //           console.log('enable send 5')
          //           this.MultiButtonDisable = false
          //         }
          //         else {
          //           this.MultiButtonDisable = true
          //         }
          //       }
          //     } else {
          //       if (month > monthselected)//07>05
          //       {
          //         console.log('disable send 2')
          //         this.MultiButtonDisable = false
          //       } else {
          //         console.log('enable send 3')
          //         this.MultiButtonDisable = true
          //       }
          //     }
          //   }
          // }

        }
      }, {
        key: "loadData",
        value: function loadData(event, scroll) {
          var _this135 = this;

          if (scroll == 'A') {
            setTimeout(function () {
              console.log('Done');
              console.log('this.len', _this135.page); //23
              // App logic to determine if all data is loaded
              // and disable the infinite scroll

              console.log('this.AttendanceTempArr.length', _this135.AttendanceTempArr.length); //29

              if (_this135.page > _this135.AttendanceTempArr.length) //23>29
                {
                  console.log('this.page return', _this135.page);
                  event.target.disabled = true;
                  return false;
                } else {
                _this135.GetInfinityPageData1(event, _this135.page);

                event.target.complete();
              }
            }, 2000);
          } else {
            setTimeout(function () {
              console.log('Done2');
              console.log('this.temp1', _this135.temp1);
              console.log('this.temp1.length', _this135.temp1.length);
              console.log('this.len2', _this135.page2);

              if (_this135.page2 > _this135.temp1.length) //23>29
                {
                  console.log('this.page return', _this135.page2);
                  event.target.disabled = true;
                  return false;
                } else {
                console.log('second screen Data load');

                _this135.GetInfinityPageData2(event, _this135.page2);

                event.target.complete();
              }
            }, 2000);
          }
        }
      }, {
        key: "GetInfinityPageData1",
        value: function GetInfinityPageData1(event, page) {
          var date = "";
          console.log('----> page', page); //23

          this.page = this.page + 15; //23+7=30

          console.log('--> this.page', this.page);

          for (var i = page; i < this.page; i++) //29<30
          {
            if (i < this.AttendanceTempArr.length) //29<29
              {
                console.log('index', i);
                date = this.utcdateToLocal(this.AttendanceTempArr[i]["created_at"]);
                this.AttendanceListArr.push({
                  "ref_grade": this.AttendanceTempArr[i]["ref_grade"],
                  "subject_name": this.AttendanceTempArr[i]["subject_name"],
                  // "Name":  this.AttendanceTempArr[i]["firstname"] + " " +  this.AttendanceTempArr[i]["lastname"],
                  "created_at": date,
                  "attendance_sheet_date": this.AttendanceTempArr[i]['attendance_sheet_date'],
                  "attendance_id": this.AttendanceTempArr[i]['attendance_id'],
                  "send_attendance": this.AttendanceTempArr[i]['send_attendance'],
                  "attendance_status_disabled": this.AttendanceTempArr[i]['attendance_status_disabled']
                });
              } else {
              event.target.disabled = true;
              return false;
            }
          }

          console.log('AttendanceListArr.length', this.AttendanceListArr.length);
          console.log('AttendanceListArr', this.AttendanceListArr);
        }
      }, {
        key: "GetInfinityPageData2",
        value: function GetInfinityPageData2(event, page) {
          console.log('----> page', page); //23

          this.page2 = this.page2 + 15; //23+7=30

          console.log('--> this.page2', this.page2);

          for (var i = page; i < this.page2; i++) {
            if (i < this.temp1.length) //29<29
              {
                var statusId = 4;
                var status = null;

                if (this.temp1[i]["attendance_status"] == 'present') {
                  statusId = 0;
                  status = 'Present';
                } else if (this.temp1[i]["attendance_status"] == 'absent') {
                  statusId = 1;
                  status = 'Absent';
                } else if (this.temp1[i]["attendance_status"] == 'late') {
                  statusId = 2;
                  status = 'Late';
                } else if (this.temp1[i]["attendance_status"] == 'excused') {
                  statusId = 3;
                  status = 'Excused';
                }

                this.AttendanceListArr2.push({
                  "attendance_status": status,
                  "fullName": this.temp1[i]["fullName"],
                  "citizen_id": this.temp1[i]["citizen_id"],
                  "statusId": statusId
                });
              } else {
              event.target.disabled = true;
              return false;
            }
          }
        }
      }]);

      return SubjectsComponent;
    }();

    SubjectsComponent.ctorParameters = function () {
      return [{
        type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_26__["BarcodeScanner"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"]
      }, {
        type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_18__["LocalNotifications"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]
      }, {
        type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_9__["SQLite"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
      }, {
        type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_13__["Network"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]
      }, {
        type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_15__["TranslateConfigService"]
      }, {
        type: _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_14__["NetworkInterface"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"]
      }, {
        type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_23__["Downloader"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_20__["SplashScreen"]
      }, {
        type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_21__["UniqueDeviceID"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_22__["AndroidPermissions"]
      }, {
        type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_24__["FilePath"]
      }, {
        type: _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_25__["Uid"]
      }, {
        type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_27__["Vibration"]
      }];
    };

    SubjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subjects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subjects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/subjects/subjects.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subjects.component.scss */
      "./src/app/sidemenu/subjects/subjects.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_26__["BarcodeScanner"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_18__["LocalNotifications"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_9__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_13__["Network"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"], src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_15__["TranslateConfigService"], _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_14__["NetworkInterface"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateService"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"], _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_23__["Downloader"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_20__["SplashScreen"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_21__["UniqueDeviceID"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_22__["AndroidPermissions"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_24__["FilePath"], _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_25__["Uid"], _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_27__["Vibration"]])], SubjectsComponent);
    /***/
  },

  /***/
  "./src/app/sidemenu/test-sessions/test-sessions.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/sidemenu/test-sessions/test-sessions.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSidemenuTestSessionsTestSessionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-button.button-disabled {\n  opacity: 1 !important;\n  background-color: #8080801f !important; }\n\n.alert-wrapper.sc-ion-alert-md {\n  width: 95% !important;\n  max-width: 100% !important;\n  margin: 0 auto !important; }\n\n.col {\n  --ion-background-color:rgb(66, 66, 66);\n  padding: 1.25rem; }\n\nion-toolbar {\n  --ion-background-color:#343a40 !important;\n  color: #fff !important; }\n\nion-toolbar {\n  background-color: #343a40 !important; }\n\n.progress-bar {\n  background-color: black !important; }\n\nion-content .progress {\n  height: 1.16rem;\n  border-radius: 4.16rem; }\n\nion-content .progress .progress-bar {\n  height: 100%; }\n\nion-content ion-text {\n  font-size: 0.875rem; }\n\nion-content .card .progress-value {\n  width: 100%;\n  text-align: center;\n  line-height: 0.99rem; }\n\nion-content .card ion-text {\n  color: #fff !important; }\n\n.mobile-table {\n  width: 100%;\n  float: left; }\n\n.mobile-table .mobile-table-inner {\n  width: 100%;\n  float: left;\n  margin: 0.50rem 0;\n  box-shadow: 0 0 0.83rem #0003;\n  padding: 4vw;\n  border-radius: 0.33rem;\n  border: 0.08rem solid black; }\n\n.mobile-table .mobile-table-inner .mobile-border {\n  width: 100%;\n  float: left;\n  border-bottom: 0.08rem solid #D6D6D6;\n  margin-bottom: 1.25rem; }\n\n.mobile-table .mobile-table-inner .mobile-border h5 {\n  margin-top: 0rem;\n  color: #000 !important;\n  font-family: 'arimoregular';\n  font-size: 1.20rem;\n  margin-bottom: 0.66rem; }\n\n.mobile-table .mobile-table-inner .mobile-border h5 span {\n  margin-left: 0.41rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file {\n  width: 100%;\n  float: left;\n  margin-bottom: 0.30rem;\n  font-size: 1rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file b, .mobile-table .mobile-table-inner .mobile-border .mobile-file span {\n  font-size: 0.9rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file span {\n  margin-left: 0.41rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file.mobile-file-priority {\n  margin-bottom: 1.25rem; }\n\n.mobile-table .mobile-table-inner .mobile-border:last-child {\n  border: 0;\n  margin: 0; }\n\n.mobile-table .mobile-table-inner .mobile-border:last-child .mobile-file.mobile-file-priority {\n  margin-bottom: 0; }\n\n.card-body {\n  padding: 0.80rem; }\n\nion-list.sso-title ion-button {\n  height: 8.533333333333333vw;\n  font-size: 2.4vw !important;\n  margin-top: 0;\n  text-transform: capitalize;\n  width: 32.59%;\n  margin-left: 0 !important;\n  float: left;\n  text-align: center;\n  margin-right: 1vw; }\n\nion-list.sso-title ion-button:first-child {\n  margin-left: 0; }\n\nion-list.sso-title ion-button:last-child {\n  margin-right: 0; }\n\nion-back-button {\n  background: transparent !important;\n  color: #fff !important; }\n\nion-back-button button {\n  background: transparent !important;\n  color: #fff !important; }\n\nion-searchbar {\n  padding: 3.2vw 5.2vw !important; }\n\n.searchbar-input-container, .searchbar-input-container input {\n  height: 100% !important; }\n\n.mobile-file:nth-child(2) {\n  text-align: center; }\n\n.mobile-file {\n  width: 49% !important;\n  text-align: left;\n  font-size: 3.3vw !important;\n  margin-right: 2%; }\n\n.mobile-file b {\n  font-size: 3.3vw !important; }\n\n.mobile-file span {\n  display: block;\n  width: 100%;\n  margin: 0 !important;\n  font-size: 3.3vw !important;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.mobile-file:nth-child(2n) {\n  text-align: left !important;\n  margin-right: 0 !important; }\n\n.mobile-file:first-child {\n  text-align: left !important; }\n\n.searchbar-input-container, .searchbar-input {\n  height: 100% !important; }\n\n.mobile-file b {\n  color: #676767 !important; }\n\n.filediv {\n  width: 150px;\n  border-radius: 3px;\n  text-align: center;\n  border: 1px solid #000000;\n  line-height: 30px;\n  height: 30px;\n  font-size: 14px;\n  background: #000000;\n  color: #f8f9fa !important;\n  font-weight: 500;\n  float: left;\n  word-break: break-all; }\n\n.inputfile {\n  position: absolute;\n  top: 0;\n  right: 0px;\n  margin: 0px;\n  padding: 0;\n  opacity: 0;\n  width: 100% !important; }\n\n.inputfilespan {\n  margin-left: 5px;\n  line-height: 30px;\n  height: 30px;\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvQW1leS9KQVdBVEEvamF3YXRhLW1hbmFnZXIvSmF3YXRhTWFuYWdlckFwcC9zcmMvYXBwL3NpZGVtZW51L3Rlc3Qtc2Vzc2lvbnMvdGVzdC1zZXNzaW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQjtFQUNwQixzQ0FBcUMsRUFBQTs7QUFHMUM7RUFDSSxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHlCQUF3QixFQUFBOztBQVU1QjtFQUNJLHNDQUF1QjtFQUN2QixnQkFBZSxFQUFBOztBQUduQjtFQUNJLHlDQUF1QjtFQUN2QixzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxvQ0FBbUMsRUFBQTs7QUFHdkM7RUFDSSxrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSxlQUFlO0VBQ2Ysc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7O0FBRXhCO0VBQ0ksc0JBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFJZjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUNKLEVBQUE7O0FBR0E7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0Msb0JBQW9CLEVBQUE7O0FBRXJCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLG9CQUFvQixFQUFBOztBQUV4QjtFQUNDLHNCQUNELEVBQUE7O0FBQ0E7RUFDSSxTQUFTO0VBQ1QsU0FBUyxFQUFBOztBQUdiO0VBQ0EsZ0JBQWUsRUFBQTs7QUFHZjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxrQ0FBa0M7RUFDbEMsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksa0NBQWtDO0VBQ2xDLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLCtCQUErQixFQUFBOztBQUVuQztFQUNJLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLDJCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLDJCQUEyQjtFQUMzQiwwQkFBeUIsRUFBQTs7QUFFN0I7RUFDSSwyQkFBMkIsRUFBQTs7QUFRL0I7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSx5QkFBd0IsRUFBQTs7QUFJNUI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtFQUNWLFdBQVc7RUFDWCxVQUFVO0VBQ1YsVUFBVTtFQUNWLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51L3Rlc3Qtc2Vzc2lvbnMvdGVzdC1zZXNzaW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24uYnV0dG9uLWRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IzgwODA4MDFmICFpbXBvcnRhbnQ7XG4gfVxuXG4uYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWR7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjowIGF1dG8gIWltcG9ydGFudDtcbn1cblxuLy8gLmFsZXJ0LXdyYXBwZXIgLnNjLWlvbi1hbGVydC1tZFxuLy8ge1xuLy8gICAgIG1pbi13aWR0aDogOTUlO1xuLy8gICAgIHdpZHRoOiA5NSU7XG4vLyAgICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gfVxuXG4uY29se1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiKDY2LCA2NiwgNjYpO1xuICAgIHBhZGRpbmc6MS4yNXJlbTtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMzQzYTQwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbmlvbi10b29sYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IzM0M2E0MCAhaW1wb3J0YW50O1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCAucHJvZ3Jlc3Mge1xuICAgIGhlaWdodDogMS4xNnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0LjE2cmVtO1xufVxuaW9uLWNvbnRlbnQgLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIge1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmlvbi1jb250ZW50IGlvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuaW9uLWNvbnRlbnQgLmNhcmQgLnByb2dyZXNzLXZhbHVlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDAuOTlyZW07XG59XG5pb24tY29udGVudCAuY2FyZCBpb24tdGV4dHtcbiAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XG59XG4ubW9iaWxlLXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuXG4ubW9iaWxlLXRhYmxlIC5tb2JpbGUtdGFibGUtaW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMC41MHJlbSAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjgzcmVtICMwMDAzO1xuICAgIHBhZGRpbmc6IDR2dztcbiAgICBib3JkZXItcmFkaXVzOiAwLjMzcmVtO1xuICAgIGJvcmRlcjowLjA4cmVtIHNvbGlkIGJsYWNrXG59XG5cbi8vIG5ldyBzdHlsZSBmb3IgbmV3IGRlc2lnblxuLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAwLjA4cmVtIHNvbGlkICNENkQ2RDY7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cbi5tb2JpbGUtdGFibGUgLm1vYmlsZS10YWJsZS1pbm5lciAubW9iaWxlLWJvcmRlciBoNSB7XG4gICAgbWFyZ2luLXRvcDogMHJlbTtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnYXJpbW9yZWd1bGFyJztcbiAgICBmb250LXNpemU6IDEuMjByZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC42NnJlbTtcbn1cbi5tb2JpbGUtdGFibGUgLm1vYmlsZS10YWJsZS1pbm5lciAubW9iaWxlLWJvcmRlciBoNSBzcGFue1xuXHRtYXJnaW4tbGVmdDogMC40MXJlbTtcbn1cbi5tb2JpbGUtdGFibGUgLm1vYmlsZS10YWJsZS1pbm5lciAubW9iaWxlLWJvcmRlciAubW9iaWxlLWZpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDAuMzByZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIC5tb2JpbGUtZmlsZSBiLCAubW9iaWxlLXRhYmxlIC5tb2JpbGUtdGFibGUtaW5uZXIgLm1vYmlsZS1ib3JkZXIgLm1vYmlsZS1maWxlIHNwYW57XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG4ubW9iaWxlLXRhYmxlIC5tb2JpbGUtdGFibGUtaW5uZXIgLm1vYmlsZS1ib3JkZXIgLm1vYmlsZS1maWxlIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjQxcmVtO1xufVxuLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIC5tb2JpbGUtZmlsZS5tb2JpbGUtZmlsZS1wcmlvcml0eXtcblx0bWFyZ2luLWJvdHRvbToxLjI1cmVtXG59XG4ubW9iaWxlLXRhYmxlIC5tb2JpbGUtdGFibGUtaW5uZXIgLm1vYmlsZS1ib3JkZXI6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyOmxhc3QtY2hpbGQgLm1vYmlsZS1maWxlLm1vYmlsZS1maWxlLXByaW9yaXR5e1xubWFyZ2luLWJvdHRvbTowO1xufVxuXG4uY2FyZC1ib2R5e1xuICAgIHBhZGRpbmc6IDAuODByZW07XG59XG5pb24tbGlzdC5zc28tdGl0bGUgaW9uLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA4LjUzMzMzMzMzMzMzMzMzM3Z3O1xuICAgIGZvbnQtc2l6ZTogMi40dncgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIHdpZHRoOiAzMi41OSU7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxdnc7XG59XG5pb24tbGlzdC5zc28tdGl0bGUgaW9uLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG59XG5pb24tbGlzdC5zc28tdGl0bGUgaW9uLWJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5pb24tYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuaW9uLWJhY2stYnV0dG9uIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5pb24tc2VhcmNoYmFyIHtcbiAgICBwYWRkaW5nOiAzLjJ2dyA1LjJ2dyAhaW1wb3J0YW50O1xufVxuLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIsIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5tb2JpbGUtZmlsZTpudGgtY2hpbGQoMikge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tb2JpbGUtZmlsZSB7XG4gICAgd2lkdGg6IDQ5JSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAzLjN2dyAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG59XG4ubW9iaWxlLWZpbGUgYntcbiAgICBmb250LXNpemU6IDMuM3Z3ICFpbXBvcnRhbnQ7XG59XG4ubW9iaWxlLWZpbGUgc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOjMuM3Z3ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm1vYmlsZS1maWxlOm50aC1jaGlsZCgybikge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6MCAhaW1wb3J0YW50O1xufVxuLm1vYmlsZS1maWxlOmZpcnN0LWNoaWxkIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG4vLyBpb24tc2VhcmNoYmFyIGlucHV0LnNlYXJjaGJhci1pbnB1dCB7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybyAhaW1wb3J0YW50O1xuLy8gICAgIHBhZGRpbmctbGVmdDogMTQuMnZ3ICFpbXBvcnRhbnQ7XG4vLyB9XG4uc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lciwgLnNlYXJjaGJhci1pbnB1dCB7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tb2JpbGUtZmlsZSBiIHtcbiAgICBjb2xvcjojNjc2NzY3ICFpbXBvcnRhbnQ7XG59XG5cblxuLmZpbGVkaXZ7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLmlucHV0ZmlsZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwOyBcbiAgICByaWdodDogMHB4OyAgXG4gICAgbWFyZ2luOiAwcHg7IFxuICAgIHBhZGRpbmc6IDA7IFxuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgICAgXG59XG5cbi5pbnB1dGZpbGVzcGFue1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sidemenu/test-sessions/test-sessions.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/sidemenu/test-sessions/test-sessions.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TestSessionsComponent */

  /***/
  function srcAppSidemenuTestSessionsTestSessionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestSessionsComponent", function () {
      return TestSessionsComponent;
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


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/ngx/index.js");
    /* harmony import */


    var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/menu.service */
    "./src/app/services/menu.service.ts");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/file-opener/ngx */
    "./node_modules/@ionic-native/file-opener/ngx/index.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/local-notifications/ngx */
    "./node_modules/@ionic-native/local-notifications/ngx/index.js");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/downloader/ngx */
    "./node_modules/@ionic-native/downloader/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/network-interface/ngx */
    "./node_modules/@ionic-native/network-interface/ngx/index.js");
    /* harmony import */


    var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/uid/ngx */
    "./node_modules/@ionic-native/uid/ngx/index.js");

    var TestSessionsComponent = /*#__PURE__*/function () {
      function TestSessionsComponent(translateConfigService, datepipe, http, translate, menuService, platform, transfer, network, _location, loadingController, file, sqlite, alertCtrl, events, fileOpener, _zone, localNotifications, androidPermissions, downloader, networkInterface, uid) {
        var _this136 = this;

        _classCallCheck(this, TestSessionsComponent);

        this.translateConfigService = translateConfigService;
        this.datepipe = datepipe;
        this.http = http;
        this.translate = translate;
        this.menuService = menuService;
        this.platform = platform;
        this.transfer = transfer;
        this.network = network;
        this._location = _location;
        this.loadingController = loadingController;
        this.file = file;
        this.sqlite = sqlite;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.fileOpener = fileOpener;
        this._zone = _zone;
        this.localNotifications = localNotifications;
        this.androidPermissions = androidPermissions;
        this.downloader = downloader;
        this.networkInterface = networkInterface;
        this.uid = uid;
        this.fileUploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_16__["FileUploader"]({});
        this.fileUploadedcount = 0;
        this.IPAddress = "";
        this.checkgradfiles = '';
        this.isActor = true;
        this.disabled = false;
        this.gradedfilesent = 'no';
        this.deadlinedate = 'no';
        this.lengthCheckedArr = [];
        this.testIDFlag = false;
        this.deadlineDateonsubmit = '';
        this.heading = this.translateConfigService.get('Test Sessions');
        this.selectedLanguage = localStorage.getItem('selectedL');
        this.image = '';
        this.testSessionHeader = true;
        this.testSessionData = true;
        this.testSessionSubHeader = false;
        this.fileUploadPage = false;
        this.fileName = "";
        this.flag = true;
        this.openFileSubForm = false;
        this.testSessionFileSubHeader = false;
        this.isLoading = false;
        this.isExist = false;
        this.notificationFlag = true;
        this.haspermission = false;
        this.checkboxFlag = false;
        this.gradeFlag = false;
        this.viewGradeSubHeader = false;
        this.viewGradeSubForm = false;
        this.notificationDetails = [];
        this.notificationId = 0;
        this.row_data = [];
        this.testSessionFiles = [];
        this.filter = "";
        this.fileFilter = "";
        this.loaderLanguage = "";
        this.filepath = "";
        this.testSessionId = "";
        this.filterGrade = "";
        this.gradeListArr = [];
        this.permissonArray = [];
        this.fileTransfer = this.transfer.create();
        this.uploadedFile = "";
        this.images = []; // myForm = new FormGroup({
        //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        //   file: new FormControl('', [Validators.required]),
        //   fileSource: new FormControl('', [Validators.required])
        // });

        this.keysToExclude = ['class_id', 'class_reference', 'class_grade', 'start_date', 'id', 'actor_id', 'test_file', 'test_created_by', 'answer_file', 'is_received', 'grade', 'grade_decided_manager_id', 'created_at', 'updated_at', 'firstname', 'lastname', 'checked', 'disabled'];
        this.keysToExcludeField = ['id', 'entity_id', 'class_id', 'subject_id', 'start_date', 'deadline_date', 'is_delete', 'send_and_start', 'created_at', 'updated_at', 'detail_id', 'test_session_id', 'test_created_by', 'firstname', 'lastname'];
        this.keysToExcludeGrade = ["id", "test_session_id", "actor_id", "deadline_date", "test_file", "test_created_by", "answer_file", "answer_date", "is_received", "graded_date", "grade_decided_manager_id", "graded_file_sent", "avg_grade", "created_at", "updated_at", "entity_id", "class_id", "subject_id", "start_date", "is_delete", "send_and_start"];
        this.database_name = "Jawata_App.db";
        this.table_name = "testList"; // Table declared for test list

        this.testFile_table = "openTestFile"; // Table declared for open test file list

        this.grade_Table = "studentsGradeList"; // Table declared for Grade list

        this.fileTypeArr = [{
          fileType: 'aac',
          fileExtension: 'audio/aac'
        }, {
          fileType: 'abw',
          fileExtension: 'application/x-abiword'
        }, {
          fileType: 'arc',
          fileExtension: 'application/x-freearc'
        }, {
          fileType: 'avi',
          fileExtension: 'video/x-msvideo'
        }, {
          fileType: 'azw',
          fileExtension: 'application/vnd.amazon.ebook'
        }, {
          fileType: 'bin',
          fileExtension: 'application/octet-stream'
        }, {
          fileType: 'bmp',
          fileExtension: 'image/bmp'
        }, {
          fileType: 'bz',
          fileExtension: 'application/x-bzip'
        }, {
          fileType: 'bz2',
          fileExtension: 'application/x-bzip2'
        }, {
          fileType: 'csh',
          fileExtension: 'application/x-csh'
        }, {
          fileType: 'css',
          fileExtension: 'text/css'
        }, {
          fileType: 'csv',
          fileExtension: 'text/csv'
        }, {
          fileType: 'doc',
          fileExtension: 'application/msword'
        }, {
          fileType: 'docx',
          fileExtension: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        }, {
          fileType: 'eot',
          fileExtension: 'application/vnd.ms-fontobject'
        }, {
          fileType: 'epub',
          fileExtension: 'application/epub+zip'
        }, {
          fileType: 'gif',
          fileExtension: 'image/gif'
        }, {
          fileType: 'htm',
          fileExtension: 'text/html'
        }, {
          fileType: 'html',
          fileExtension: 'text/html'
        }, {
          fileType: 'ico',
          fileExtension: 'image/vnd.microsoft.icon'
        }, {
          fileType: 'ics',
          fileExtension: 'text/calendar'
        }, {
          fileType: 'jar',
          fileExtension: 'application/java-archive'
        }, {
          fileType: 'jpeg',
          fileExtension: 'image/jpeg'
        }, {
          fileType: 'jpg',
          fileExtension: 'image/jpeg'
        }, {
          fileType: 'js',
          fileExtension: 'text/javascript'
        }, {
          fileType: 'json',
          fileExtension: 'application/json'
        }, {
          fileType: 'jsonld',
          fileExtension: 'application/ld+json'
        }, {
          fileType: 'mid',
          fileExtension: 'audio/midi'
        }, {
          fileType: 'midi',
          fileExtension: 'audio/midi'
        }, {
          fileType: 'mjs',
          fileExtension: 'text/javascript'
        }, {
          fileType: 'mp3',
          fileExtension: 'audio/mpeg'
        }, {
          fileType: 'mpeg',
          fileExtension: 'video/mpeg'
        }, {
          fileType: 'mpkg',
          fileExtension: 'application/vnd.apple.installer+xml'
        }, {
          fileType: 'odp',
          fileExtension: 'application/vnd.oasis.opendocument.presentation'
        }, {
          fileType: 'ods',
          fileExtension: 'application/vnd.oasis.opendocument.spreadsheet'
        }, {
          fileType: 'odt',
          fileExtension: 'application/vnd.oasis.opendocument.text'
        }, {
          fileType: 'oga',
          fileExtension: 'audio/ogg'
        }, {
          fileType: 'ogv',
          fileExtension: 'video/ogg'
        }, {
          fileType: 'ogx',
          fileExtension: 'application/ogg'
        }, {
          fileType: 'otf',
          fileExtension: 'font/otf'
        }, {
          fileType: 'png',
          fileExtension: 'image/png'
        }, {
          fileType: 'pdf',
          fileExtension: 'application/pdf'
        }, {
          fileType: 'ppt',
          fileExtension: 'application/vnd.ms-powerpoint'
        }, {
          fileType: 'pptx',
          fileExtension: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        }, {
          fileType: 'rar',
          fileExtension: 'application/x-rar-compressed'
        }, {
          fileType: 'rtf',
          fileExtension: 'application/rtf'
        }, {
          fileType: 'sh',
          fileExtension: 'application/x-sh'
        }, {
          fileType: 'svg',
          fileExtension: 'image/svg+xml'
        }, {
          fileType: 'swf',
          fileExtension: 'application/x-shockwave-flash'
        }, {
          fileType: 'tar',
          fileExtension: 'application/x-tar'
        }, {
          fileType: 'tif',
          fileExtension: 'image/tiff'
        }, {
          fileType: 'tiff',
          fileExtension: 'image/tiff'
        }, {
          fileType: 'ttf',
          fileExtension: 'font/ttf'
        }, {
          fileType: 'txt',
          fileExtension: 'text/plain'
        }, {
          fileType: 'vsd',
          fileExtension: 'application/vnd.visio'
        }, {
          fileType: 'wav',
          fileExtension: 'audio/wav'
        }, {
          fileType: 'weba',
          fileExtension: 'audio/webm'
        }, {
          fileType: 'webm',
          fileExtension: 'video/webm'
        }, {
          fileType: 'webp',
          fileExtension: 'image/webp'
        }, {
          fileType: 'woff',
          fileExtension: 'font/woff'
        }, {
          fileType: 'woff2',
          fileExtension: 'font/woff2'
        }, {
          fileType: 'xhtml',
          fileExtension: 'application/xhtml+xml'
        }, {
          fileType: 'xls',
          fileExtension: 'application/vnd.ms-excel'
        }, {
          fileType: 'xlsx',
          fileExtension: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }, {
          fileType: 'xml',
          fileExtension: 'application/xml&nbsp;'
        }, {
          fileType: 'xul',
          fileExtension: 'application/vnd.mozilla.xul+xml'
        }, {
          fileType: 'zip',
          fileExtension: 'application/zip'
        }, {
          fileType: '3gp',
          fileExtension: 'video/3gpp'
        }, {
          fileType: '3g2',
          fileExtension: 'video/3gpp2'
        }, {
          fileType: '7z',
          fileExtension: 'application/x-7z-compressed'
        }];
        this.downloadVar = "";
        this.openFileVar = "";
        this.yesVar = "";
        this.noVar = "";
        this.platform.ready().then(function () {
          if (localStorage.getItem('userType') == 'Actor') {
            _this136.isActor = true;
          } else {
            _this136.isActor = false;
          }

          _this136.getID_UID('UUID');

          var dateTime = _this136.datepipe.transform(new Date(), 'yyyy-MM-dd HH-mm-ss'); // let date = new Date();
          // let myDate: String = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();


          console.log('myDate :-' + dateTime);

          _this136.createDB();

          _this136.createDBGrade();

          _this136.getIPAddress();

          _this136.getstoragepermission();

          localStorage.removeItem('testSessionId');

          _this136.initializeBackButtonCustomHandler();

          _this136.getTestSessionList(); //this.checkgradeforallfiles();

        })["catch"](function (error) {
          console.log('test session error' + error);
        });
      }

      _createClass(TestSessionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this137 = this;

          /** heading name change after select language */
          this.translate.setDefaultLang(this.selectedLanguage);
          this.translateConfigService.setLanguage(this.selectedLanguage);
          this.translate.use(this.selectedLanguage);
          this.translate.get('Test Sessions').subscribe(function (res) {
            _this137.heading = "";
            _this137.heading = res;
          });
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          if (this.network.type == "none") {
            this.getTestRows();
          }

          this.getTestSessionList(); //unhide the submit answer file

          this.disabled = false;
          event.target.complete();
        }
      }, {
        key: "getIPAddress",
        value: function getIPAddress() {
          var _this138 = this;

          if (this.network.type != 'none') {
            this.networkInterface.getCarrierIPAddress().then(function (address) {
              return _this138.IPAddress = "".concat(address.ip);
            } //alert('Ip address is:-' + `${address.ip}`)
            )["catch"](function (error) {
              return console.error("Unable to get IP: ".concat(error));
            });
          }

          if (this.network.type === 'wifi') {
            this.networkInterface.getWiFiIPAddress().then(function (address) {
              return _this138.IPAddress = "".concat(address.ip);
            })["catch"](function (error) {
              return console.error("Unable to get IP: ".concat(error));
            });
          }
        } // storage permission on adnroid device

      }, {
        key: "getstoragepermission",
        value: function getstoragepermission() {
          var _this139 = this;

          this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (result) {
            if (result.hasPermission) {
              console.log('Has permission?', result.hasPermission);
              _this139.haspermission = result.hasPermission;
            } else {
              console.log('Has permission?', result.hasPermission);
              _this139.haspermission = result.hasPermission;

              _this139.androidPermissions.requestPermission(_this139.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (res) {
                if (res.hasPermission) {
                  console.log('Has permission?', res.hasPermission);
                  _this139.haspermission = res.hasPermission;
                } else {
                  _this139.androidPermissions.requestPermission(_this139.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE);

                  _this139.permissonArray.push('No Permission');

                  if (_this139.permissonArray.length == 1) {
                    _this139.permissonArray = [];
                    alert("To allow permission, Please set 'Reset app preferences' manually to your device settting");
                  }
                }
              });
            }
          }, function (err) {
            return _this139.androidPermissions.requestPermission(_this139.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE);
          });
        }
      }, {
        key: "getFileList",
        value: function getFileList() {
          var _this140 = this;

          if (this.network.type != "none") {
            // var data = {
            //   "test_session_id": localStorage.getItem('testSessionId'),
            //   "operation": "open"
            // }
            var data = {
              'user_id': localStorage.getItem('userId'),
              'ip_address': this.deviceid,
              "test_session_id": localStorage.getItem('testSessionId'),
              "operation": "open",
              "entity_id": localStorage.getItem('entityId')
            };
            var headers = {
              'Content-Type': 'appllication/json'
            };
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/list_test_session_files/open"), JSON.stringify(data));
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/list_test_session_files/open"), data, headers).then(function (res) {
              // console.log("list_test_session_files/open res :-" + JSON.stringify(res));
              _this140.fileListArr = [];
              _this140.fileListArr = JSON.parse(res.data);

              if (_this140.fileListArr.length > 0) {
                //this.defaultFile = this.fileListArr[0]['test_file'];
                var utcDate = new Date(_this140.fileListArr[0]['server_time']);
                var tzOffset = new Date().getTimezoneOffset() * 60 * 1000;
                var newTime = utcDate.getTime() - tzOffset;
                var localDate = new Date(newTime);
                _this140.servercurrentdate = _this140.datepipe.transform(localDate, 'yyyy-MM-dd'); //this.servercurrentdate=this.fileListArr[0]['server_time'];
              } else {//this.defaultFile = '';
                } // console.log("this.fileListArr Online GET Res Is :-" + JSON.stringify(this.fileListArr));

            })["catch"](function (error) {// cosnole.log("this.fileListArr error  !" + JSON.stringify(error));
            });
          } else {// this.getTestRows();
          }
        }
      }, {
        key: "LogEntryForDownloadTestFile",
        value: function LogEntryForDownloadTestFile() {
          if (this.network.type != "none") {
            var data = {
              'user_id': localStorage.getItem('userId'),
              'ip_address': this.deviceid,
              "test_session_id": localStorage.getItem('testSessionId'),
              "operation": "open",
              "entity_id": localStorage.getItem('entityId')
            };
            var headers = {
              'Content-Type': 'appllication/json'
            };
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/download_test_session_files"), JSON.stringify(data));
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/download_test_session_files"), data, headers).then(function (res) {
              console.log("download_test_session_files res :-" + JSON.stringify(res));
            })["catch"](function (error) {// cosnole.log("this.fileListArr error  !" + JSON.stringify(error));
            });
          } else {// this.getTestRows();
          }
        }
        /** removed test file dropdown 24-12-2020 as new CR */
        // onChangeSelectFile(value) {
        //   this.defaultFile = "";
        //   this.defaultFile = value.trim();
        //   for (var i = 0; i < this.fileListArr.length; i++) {
        //     if (this.defaultFile == this.fileListArr[i]['ref_grade']) {
        //       /**set to localStorage */
        //       // localStorage.setItem('test_file', this.fileListArr[i]['test_file']);
        //       // localStorage.setItem('detail_id', this.fileListArr[i]['detail_id']);
        //       alert("this.fileListArr[i]['ref_grade'] :-" + this.fileListArr[i]['ref_grade']);
        //     }
        //   }
        // }

      }, {
        key: "trimSearchValues",
        value: function trimSearchValues(value) {
          this.filter = "";
          this.filter = value.trim();
        }
      }, {
        key: "trimSearchFiles",
        value: function trimSearchFiles(value) {
          this.fileFilter = "";
          this.fileFilter = value.trim();
        }
      }, {
        key: "trimSearchGrade",
        value: function trimSearchGrade(value) {
          this.filterGrade = "";
          this.filterGrade = value.trim();
        }
      }, {
        key: "initializeBackButtonCustomHandler",
        value: function initializeBackButtonCustomHandler() {
          var _this141 = this;

          this.platform.backButton.subscribeWithPriority(999999, function () {
            if (localStorage.getItem('currenturl').toString().split('/')[1] == 'dashboard') {
              navigator['app'].exitApp();
            } else if (localStorage.getItem('TestSession').toString() == "true") {
              _this141.testSessionHeader = true;
              _this141.testSessionData = true;
              _this141.testSessionSubHeader = false;
              _this141.fileUploadPage = false;
              _this141.testSessionFileSubHeader = false;
              _this141.openFileSubForm = false;
              _this141.viewGradeSubHeader = false;
              _this141.viewGradeSubForm = false;
              localStorage.setItem('TestSession', 'false');

              if (_this141.network.type != "none") {
                _this141.getTestSessionList();
              } else if (_this141.network.type == "none") {
                _this141.getTestRows();
              }
            } else {
              _this141._location.back(); //this.router.navigate([localStorage.getItem('bckbtnpage').toString().split('/')[1]]);

            }
          });
        }
      }, {
        key: "onClickSubmitAnswer",
        value: function onClickSubmitAnswer() {
          var _this142 = this;

          this.lengthCheckedArr = [];
          this.checkgradeforallfiles();
          this.getFileList();
          this.images = [];

          if (this.servercurrentdate > this.deadlineDateonsubmit) {
            this.deadlinedate = 'yes';
          } else {
            this.deadlinedate = 'no';
          } //if (localStorage.getItem('userType') == 'Actor') {


          console.log('this.checkgradfiles' + this.checkgradfiles + ' -- this.falg' + this.flag + '--this.gradedfilesent--' + this.gradedfilesent + '---this.deadlinedate' + this.deadlinedate + '--servercurrentdate---' + this.servercurrentdate + '--deadline date--' + this.deadlineDateonsubmit);

          if (this.network.type != "none") {
            // select one record
            if (this.flag) {
              this.translate.use(this.selectedLanguage);
              this.translate.get('Please select single Test session record.').subscribe(function (res) {
                alert(res);

                _this142.getTestSessionList();

                _this142.flag = true;
              });
            } else if (this.deadlinedate.toString() == 'yes') {
              //compare todays date with deadline and show alert 
              this.translate.use(this.selectedLanguage);
              this.translate.get('The time for submmitting an answer for this test is finished').subscribe(function (res) {
                alert(res);

                _this142.getTestSessionList();

                _this142.deadlinedate = 'yes';
              });
            } else if (this.gradedfilesent.toString() == 'yes') {
              // if grade sent then validate for submit answers
              console.log('onClickSubmitAnswer in this.gradedfilesent' + this.gradedfilesent);
              this.translate.use(this.selectedLanguage);
              this.translate.get('You are not allowed to submit answers as grade has been received for this test').subscribe(function (res) {
                alert(res);

                _this142.getTestSessionList();

                _this142.gradedfilesent = 'yes';
              });
            } else if (this.checkgradfiles == 'no') {
              console.log('onClickSubmitAnswer in this.checkgradfiles' + this.checkgradfiles);
              this.translate.use(this.selectedLanguage);
              this.translate.get('You are not allowed to submit answers as grade has been received for this test').subscribe(function (res) {
                alert(res);

                _this142.getTestSessionList();

                _this142.checkgradfiles = 'no'; //return;
              });
            } else {
              for (var i = 0; i < this.testSessionArr.length; i++) {
                if (this.testSessionArr[i]['checked'] == true) {
                  this.filter = "";
                  this.fileFilter = "";
                  this.filterGrade = "";
                  this.testSessionHeader = false;
                  this.testSessionData = false;
                  this.testSessionSubHeader = true;
                  this.fileUploadPage = true;
                  this.testSessionFileSubHeader = false;
                  this.viewGradeSubHeader = false;
                  this.viewGradeSubForm = false;
                  this.permissonArray = [];
                  this.getFileList();
                }
              }

              if (this.flag == true) {
                this.translate.use(this.selectedLanguage);
                this.translate.get('Please select single Test session record.').subscribe(function (res) {
                  alert(res);
                  _this142.flag = true;
                });
              }
            }
          } else if (this.network.type == "none") {
            if (this.flag == true) {
              this.translate.use(this.selectedLanguage);
              this.translate.get('Before click to submit,please connect internet connection').subscribe(function (res) {
                alert(res);
                _this142.flag = true;
              });
            }
          } // }
          // else
          // {
          // }

        }
      }, {
        key: "onClickBackButton",
        value: function onClickBackButton() {
          this.testSessionHeader = true;
          this.testSessionData = true;
          this.testSessionSubHeader = false;
          this.fileUploadPage = false;
          this.testSessionFileSubHeader = false;
          this.openFileSubForm = false;
          this.viewGradeSubHeader = false;
          this.viewGradeSubForm = false;
          this.lengthCheckedArr = [];

          if (this.network.type != "none") {
            this.getTestSessionList();
          } else if (this.network.type == "none") {
            this.getTestRows();
          }
        }
      }, {
        key: "onClickCancel",
        value: function onClickCancel() {
          var _this143 = this;

          this.platform.ready().then(function () {
            _this143.testSessionHeader = true;
            _this143.testSessionData = true;
            _this143.testSessionSubHeader = false;
            _this143.fileUploadPage = false;
            _this143.testSessionFileSubHeader = false;

            _this143.getTestSessionList();
          });
        }
      }, {
        key: "onClickChechbox",
        value: function onClickChechbox(value, item) {
          var _this144 = this;

          console.log("value :-" + value);

          for (var i = 0; i < this.testSessionArr.length; i++) {
            if (item.id == this.testSessionArr[i]['id']) {
              /** select record */
              if (value == false) {
                this.flag = false;
                this.lengthCheckedArr.push(item.id);
                console.log("this.lengthCheckedArr.length :-" + this.lengthCheckedArr.length);

                if (this.lengthCheckedArr.length > 1) {
                  //this.lengthCheckedArr = [];
                  this.disabled = false;
                  this.testIDFlag = true;
                  this.translate.use(this.selectedLanguage);
                  this.translate.get('Please select only one record while performing operation').subscribe(function (res) {
                    alert(res);

                    _this144.getTestSessionList();

                    _this144.lengthCheckedArr = [];
                    _this144.testIDFlag = false;
                    _this144.disabled = false;
                  });
                } else {
                  localStorage.setItem('testSessionId', this.testSessionArr[i]['test_session_id']);
                  localStorage.setItem('testSessionNo', this.testSessionArr[i]['test_session_count_for_that_entity']);
                  this.testSessionArr[i]['checked'] = true;
                  this.checkboxFlag = false;
                  this.checkgradeforallfiles();
                  this.getFileList();
                  this.gradedfilesent = this.testSessionArr[i]['graded_file_sent'];
                  this.deadlineDateonsubmit = this.testSessionArr[i]['deadline_date'];
                  var date = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
                  console.log('deadline date' + date + '----' + this.testSessionArr[i]['deadline_date']);

                  if (this.servercurrentdate > this.testSessionArr[i]['deadline_date']) {
                    this.deadlinedate = 'yes';
                  } else {
                    this.deadlinedate = 'no';
                  }
                  /** disable submit button */


                  if (this.testSessionArr[i]['is_received'] == '1' || this.deadlinedate.toString() == 'yes' || this.gradedfilesent.toString() == 'yes' || this.checkgradfiles == 'no') {
                    this.disabled = true;
                  }

                  console.log('graded_file_sent :-' + this.testSessionArr[i]['graded_file_sent'] + ' -this.deadlinedate :-' + this.deadlinedate + ' -this.disabled :- ' + this.disabled);
                }
              }
              /** select record */
              else if (value == true) {
                  this.lengthCheckedArr = [];
                  this.testSessionArr[i]['checked'] = false;
                  this.testSessionArr[i]['disabled'] = false;
                  this.checkboxFlag = true;
                  localStorage.removeItem('testSessionId');
                  this.gradedfilesent = 'no';
                  this.deadlinedate = 'no';
                  this.disabled = false;
                  this.flag = true;
                }
            }
          } // if (this.testIDFlag == true) {
          //   this.translate.use(this.selectedLanguage);
          //   this.translate.get('Please select only one record while performing operation').subscribe((res) => {
          //     alert(res);
          //     this.getTestSessionList();
          //     this.lengthCheckedArr = [];
          //     this.testIDFlag = false;
          //   });
          // }


          if (this.testIDFlag == true) {
            this.translate.use(this.selectedLanguage);
            this.translate.get('Please select only one record while performing operation').subscribe(function (res) {
              alert(res);

              if (_this144.network.type != "none") {
                _this144.getTestSessionList();

                _this144.lengthCheckedArr = [];
                _this144.testIDFlag = false;
                _this144.disabled = false;
              } else if (_this144.network.type == "none") {
                _this144.getTestRows();

                _this144.lengthCheckedArr = [];
                _this144.testIDFlag = false;
              }
            });
          }

          if (this.network.type != "none" && this.checkboxFlag == true) {
            this.getTestSessionList();
          } else if (this.network.type == "none" && this.checkboxFlag == true) {
            this.getTestRows();
          }

          for (var i = 0; i < this.testSessionArr.length; i++) {
            if (this.testSessionArr[i]['test_session_id'] != localStorage.getItem('testSessionId')) {
              this.testSessionArr[i]['disabled'] = true;
            }

            if (this.testSessionArr[i]['checked'] == true) {
              this.flag = false;
            }
          }

          for (var i = 0; i < this.testSessionArr.length; i++) {
            if (this.testSessionArr[i]['test_session_id'] != localStorage.getItem('testSessionId')) {
              this.testSessionArr[i]['disabled'] = true;
            }
          }
        }
      }, {
        key: "checkgradeforallfiles",
        value: function checkgradeforallfiles() {
          var _this145 = this;

          if (this.network.type != "none") {
            if (localStorage.getItem('userType') == 'Actor') {
              var data = {
                'testSessionId': localStorage.getItem('testSessionId'),
                'actorId': localStorage.getItem('userId')
              };
            } else {
              var data = {
                'testSessionId': localStorage.getItem('testSessionId'),
                'actorId': localStorage.getItem('actorId')
              };
            }

            var headers = {
              'Content-Type': 'appllication/json'
            };
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/can_submit_test_file"), JSON.stringify(data));
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/can_submit_test_file"), data, headers).then(function (res) {
              _this145.temp = [];
              _this145.temp = JSON.parse(res.data);
              console.log('this.temp ' + JSON.stringify(_this145.temp));
              _this145.checkgradfiles = _this145.temp.can_upload;
              console.log('this.checkgradfiles API' + _this145.checkgradfiles);
            })["catch"](function (error) {
              console.log("Error In  !" + JSON.stringify(error));
            });
          }
        }
      }, {
        key: "getTestSessionList",
        value: function getTestSessionList() {
          var _this146 = this;

          /**web API code start here */
          // this.menuService.getTestSessionData(localStorage.getItem('userId'), 264).subscribe(data => {
          //   this.temp = [];
          //   this.temp = data;
          //   this.testSessionArr = [];
          //   this.checkboxFlag == false;
          //   // for (var i = 0; i < this.temp.length; i++) {
          //   //   this.testSessionArr.push({
          //   //     'id': this.temp[i]['id'],
          //   //     'test_session_id': this.temp[i]['test_session_id'],
          //   //     'ref_grade': this.temp[i]['ref_grade'],
          //   //     'subject_name': this.temp[i]['subject_name'],
          //   //     'deadline_date': this.temp[i]['deadline_date'],
          //   //     'answer_date': this.temp[i]['answer_date'],
          //   //     'answer_file': this.temp[i]['answer_file'],
          //   //     'checked': false,
          //   //     'disabled': false
          //   //   })
          //   // }
          //   for (var i = 0; i < this.temp.length; i++) {
          //     if (this.temp[i]['answer_date'] == "0000-00-00 00:00:00") {
          //       this.testSessionArr.push({
          //         "class_id": this.temp[i]['class_id'],
          //         "class_reference": this.temp[i]['class_reference'],
          //         "class_grade": this.temp[i]['class_grade'],
          //         "ref_grade": this.temp[i]['ref_grade'],
          //         "subject_name": this.temp[i]['subject_name'],
          //         "start_date": this.temp[i]['start_date'],
          //         "test_session_id": this.temp[i]['test_session_id'],
          //         "id": this.temp[i]['id'],
          //         "actor_id": this.temp[i]['actor_id'],
          //         "deadline_date": this.temp[i]['deadline_date'],
          //         "test_file": this.temp[i]['test_file'],
          //         "test_created_by": this.temp[i]['test_created_by'],
          //         "answer_file": this.temp[i]['answer_file'],
          //         // "answer_date": this.temp[i]['answer_date'],
          //         "answer_date": "",
          //         "is_received": this.temp[i]['is_received'],
          //         "grade": this.temp[i]['grade'],
          //         "grade_decided_manager_id": this.temp[i]['grade_decided_manager_id'],
          //         "created_at": this.temp[i]['created_at'],
          //         "updated_at": this.temp[i]['updated_at'],
          //         "firstname": this.temp[i]['firstname'],
          //         "lastname": this.temp[i]['lastname'],
          //         'checked': false,
          //         'disabled': false
          //       })
          //     }
          //     if (this.temp[i]['answer_date'] != "0000-00-00 00:00:00") {
          //       this.testSessionArr.push({
          //         "class_id": this.temp[i]['class_id'],
          //         "class_reference": this.temp[i]['class_reference'],
          //         "class_grade": this.temp[i]['class_grade'],
          //         "ref_grade": this.temp[i]['ref_grade'],
          //         "subject_name": this.temp[i]['subject_name'],
          //         "start_date": this.temp[i]['start_date'],
          //         "test_session_id": this.temp[i]['test_session_id'],
          //         "id": this.temp[i]['id'],
          //         "actor_id": this.temp[i]['actor_id'],
          //         "deadline_date": this.temp[i]['deadline_date'],
          //         "test_file": this.temp[i]['test_file'],
          //         "test_created_by": this.temp[i]['test_created_by'],
          //         "answer_file": this.temp[i]['answer_file'],
          //         "answer_date": this.temp[i]['answer_date'],
          //         "is_received": this.temp[i]['is_received'],
          //         "grade": this.temp[i]['grade'],
          //         "grade_decided_manager_id": this.temp[i]['grade_decided_manager_id'],
          //         "created_at": this.temp[i]['created_at'],
          //         "updated_at": this.temp[i]['updated_at'],
          //         "firstname": this.temp[i]['firstname'],
          //         "lastname": this.temp[i]['lastname'],
          //         'checked': false,
          //         'disabled': false
          //       })
          //       // console.log("this.testSessionArr :-" + JSON.stringify(this.testSessionArr));
          //     }
          //   }
          //   //   console.log("this.testSessionArr  :-" + JSON.stringify(this.testSessionArr));
          // })

          /**Web API code end here */
          if (this.network.type != "none") {
            if (localStorage.getItem('userType') == "Actor's Parent") {
              var data = {
                "user_id": localStorage.getItem('actorId'),
                "entity_id": localStorage.getItem('entityId') // "user_id": "1722"

              };
            } else {
              var data = {
                "user_id": localStorage.getItem('userId'),
                "entity_id": localStorage.getItem('entityId') // "user_id": "1722"

              };
            }

            var headers = {
              'Content-Type': 'appllication/json'
            };
            console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/actor_test_listing"), JSON.stringify(data));
            this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/actor_test_listing"), data, headers).then(function (res) {
              _this146.temp = [];
              _this146.temp = JSON.parse(res.data);
              _this146.lengthCheckedArr = [];
              _this146.testIDFlag = false;
              console.log('actor_test_listing this.temp :-' + JSON.stringify(_this146.temp));
              _this146.testSessionArr = [];
              _this146.checkboxFlag = false;
              _this146.flag = true;
              localStorage.setItem('TestSession', "true"); // grade=avg_grade

              for (var i = 0; i < _this146.temp.length; i++) {
                try {
                  //let gradedate = new Date(this.temp[i]['graded_date']);
                  var grademyDate = ''; // console.log('this.temp[i][graded_date]' + this.temp[i]['graded_date']);

                  if (_this146.temp[i]['graded_date'] != "0000-00-00 00:00:00" && _this146.temp[i]['graded_file_sent'] == 'yes') {
                    var utcDate = new Date(_this146.temp[i]['graded_date']);
                    var tzOffset = new Date().getTimezoneOffset() * 60 * 1000;
                    var newTime = utcDate.getTime() - tzOffset;
                    var localDate = new Date(newTime);
                    grademyDate = _this146.datepipe.transform(localDate, 'yyyy-MM-dd HH:mm:ss'); // console.log('if graded_date date :' + grademyDate);
                  } else {
                    grademyDate = ""; // console.log('else graded_date date :' + grademyDate);
                  }

                  var date = new Date(_this146.temp[i]['answer_date']);
                  var myDate = ''; // console.log('this.temp[i][answer_date]' + this.temp[i]['answer_date']);

                  if (_this146.temp[i]['answer_date'] == "0000-00-00 00:00:00") {
                    myDate = ""; //console.log('else answer date 00 :' + myDate);
                  } else {
                    //let localDateString: string;
                    var _utcDate = new Date(date);

                    var _tzOffset = new Date().getTimezoneOffset() * 60 * 1000;

                    var _newTime = _utcDate.getTime() - _tzOffset;

                    var _localDate = new Date(_newTime);

                    myDate = _this146.datepipe.transform(_localDate, 'yyyy-MM-dd HH:mm:ss'); // console.log('if answer date localDate:' + myDate);
                  } // console.log('myDate :-' + this.temp[i]['test_session_count_for_that_entity'] + '--' + myDate.toString() + ' -grade -' + grademyDate.toString());


                  _this146.testSessionArr.push({
                    "class_id": _this146.temp[i]['class_id'],
                    "class_reference": _this146.temp[i]['class_reference'],
                    "class_grade": _this146.temp[i]['class_grade'],
                    "ref_grade": _this146.temp[i]['ref_grade'],
                    "subject_name": _this146.temp[i]['subject_name'],
                    "start_date": _this146.temp[i]['start_date'],
                    "test_session_id": _this146.temp[i]['test_session_id'],
                    "id": _this146.temp[i]['id'],
                    "actor_id": _this146.temp[i]['actor_id'],
                    "deadline_date": _this146.temp[i]['deadline_date'],
                    "test_file": _this146.temp[i]['test_file'],
                    "test_created_by": _this146.temp[i]['test_created_by'],
                    "answer_file": _this146.temp[i]['answer_file'],
                    "answer_date": myDate,
                    "is_received": _this146.temp[i]['is_received'],
                    "grade": _this146.temp[i]['avg_grade'],
                    "grade_decided_manager_id": _this146.temp[i]['grade_decided_manager_id'],
                    "created_at": _this146.temp[i]['created_at'],
                    "updated_at": _this146.temp[i]['updated_at'],
                    "firstname": _this146.temp[i]['firstname'],
                    "lastname": _this146.temp[i]['lastname'],
                    'checked': false,
                    'disabled': false,
                    'test_session_count_for_that_entity': _this146.temp[i]['test_session_count_for_that_entity'],
                    'graded_date': grademyDate,
                    'graded_file_sent': _this146.temp[i]['graded_file_sent']
                  });
                } catch (error) {
                  console.log('this.temp error' + error + '--json' + JSON.stringify(error));
                }
              }
              /** Enable submit button which was disabled while file uploading  */


              _this146.disabled = false; //console.log('this.testSessionArr' + JSON.stringify(this.testSessionArr));

              _this146.insertTestRow(); // alert("this.testSessionArr Online GET Res Is :-" + this.testSessionArr);

            })["catch"](function (error) {// alert("Test listing error  !" + JSON.stringify(error));
            });
          } else {// this.getTestRows();
          }
        }
      }, {
        key: "onClickOpenFile",
        value: function onClickOpenFile() {
          var _this147 = this;

          this.lengthCheckedArr = []; //console.log("this.testSessionArr :-" + JSON.stringify(this.testSessionArr));

          /**Web API code start here */
          // for (var i = 0; i < this.testSessionArr.length; i++) {
          //   if (this.testSessionArr[i]['checked'] == true) {
          //     this.menuService.getData(localStorage.getItem('testSessionId'), 'open').subscribe(data => {
          //       var temp;
          //       temp = [];
          //       temp = data;
          //       this.openFileSubForm = true;
          //       this.testSessionHeader = false;
          //       this.testSessionData = false;
          //       this.testSessionSubHeader = false;
          //       this.fileUploadPage = false;
          //       this.testSessionFileSubHeader = true;
          //       this.testSessionFiles = [];
          //       for (var i = 0; i < temp.length; i++) {
          //         this.testSessionFiles.push({
          //           "id": temp[i]['id'],
          //           "entity_id": temp[i]['entity_id'],
          //           "class_id": temp[i]['class_id'],
          //           "subject_id": temp[i]['subject_id'],
          //           "start_date": temp[i]['start_date'],
          //           "deadline_date": temp[i]['deadline_date'],
          //           "is_delete": temp[i]['is_delete'],
          //           "send_and_start": temp[i]['send_and_start'],
          //           "created_at": temp[i]['created_at'],
          //           "updated_at": temp[i]['updated_at'],
          //           "test_file": temp[i]['test_file'],
          //           "detail_id": temp[i]['detail_id'],
          //           "test_session_id": temp[i]['test_session_id'],
          //           "test_created_by": temp[i]['test_created_by'],
          //           "firstname": temp[i]['firstname'],
          //           "lastname": temp[i]['lastname'],
          //           'icon': 'download'
          //         })
          //       }
          //       console.log("this.testSessionFiles :-" + JSON.stringify(this.testSessionFiles));
          //     })
          //   } else {
          //     // this.translate.use(this.selectedLanguage);
          //     // this.translate.get('Before to open file, Please select test from list').subscribe((res) => {
          //     //   alert(res);
          //     // });
          //   }
          // }

          /**Web API code end here */

          this.filter = "";
          this.fileFilter = "";
          this.filterGrade = "";

          if (this.network.type != "none") {
            // var data = {
            //   "test_session_id": localStorage.getItem('testSessionId'),
            //   "operation": 'open'
            // }
            var data = {
              'user_id': localStorage.getItem('userId'),
              'ip_address': this.deviceid,
              "test_session_id": localStorage.getItem('testSessionId'),
              "operation": "open",
              "entity_id": localStorage.getItem('entityId')
            };
            var headers = {
              'Content-Type': 'appllication/json'
            };

            for (var i = 0; i < this.testSessionArr.length; i++) {
              if (this.testSessionArr[i]['checked'] == true) {
                console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/list_test_session_files/open"), JSON.stringify(data));
                this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/list_test_session_files/open"), data, headers).then(function (res) {
                  _this147.tempArr = [];
                  _this147.tempArr = JSON.parse(res.data);
                  console.log("this.tempArr open file :-" + JSON.stringify(_this147.tempArr));
                  _this147.openFileSubForm = true;
                  _this147.testSessionHeader = false;
                  _this147.testSessionData = false;
                  _this147.testSessionSubHeader = false;
                  _this147.fileUploadPage = false;
                  _this147.testSessionFileSubHeader = true;
                  _this147.viewGradeSubHeader = false;
                  _this147.viewGradeSubForm = false;
                  _this147.permissonArray = [];
                  _this147.testSessionFiles = [];

                  for (var i = 0; i < _this147.tempArr.length; i++) {
                    // this.testSessionFiles.push({
                    //   "id": this.tempArr[i]['id'],
                    //   "entity_id": this.tempArr[i]['entity_id'],
                    //   "class_id": this.tempArr[i]['class_id'],
                    //   "subject_id": this.tempArr[i]['subject_id'],
                    //   "start_date": this.tempArr[i]['start_date'],
                    //   "deadline_date": this.tempArr[i]['deadline_date'],
                    //   "is_delete": this.tempArr[i]['is_delete'],
                    //   "send_and_start": this.tempArr[i]['send_and_start'],
                    //   "created_at": this.tempArr[i]['created_at'],
                    //   "updated_at": this.tempArr[i]['updated_at'],
                    //   "test_file": this.tempArr[i]['test_file'],
                    //   "detail_id": this.tempArr[i]['detail_id'],
                    //   "test_session_id": this.tempArr[i]['test_session_id'],
                    //   "test_created_by": this.tempArr[i]['test_created_by'],
                    //   "firstname": this.tempArr[i]['firstname'],
                    //   "lastname": this.tempArr[i]['lastname'],
                    //   'icon': 'download'
                    // })
                    _this147.isExistfile(_this147.tempArr[i]['id'], _this147.tempArr[i]['entity_id'], _this147.tempArr[i]['class_id'], _this147.tempArr[i]['subject_id'], _this147.tempArr[i]['start_date'], _this147.tempArr[i]['deadline_date'], _this147.tempArr[i]['is_delete'], _this147.tempArr[i]['send_and_start'], _this147.tempArr[i]['created_at'], _this147.tempArr[i]['updated_at'], _this147.tempArr[i]['test_file'], _this147.tempArr[i]['detail_id'], _this147.tempArr[i]['test_session_id'], _this147.tempArr[i]['test_created_by'], _this147.tempArr[i]['firstname'], _this147.tempArr[i]['lastname']);
                  }

                  console.log('this.testSessionFiles' + JSON.stringify(_this147.testSessionFiles));

                  _this147.insertOpenTestFiles(); //unhide the submit answer file


                  _this147.disabled = false; // alert("this.testSessionArr  :-" + this.testSessionArr);
                })["catch"](function (error) {// alert("Test session/file open error !" + JSON.stringify(error));
                });
              }
            }

            if (this.flag == true) {
              this.translate.use(this.selectedLanguage);
              this.translate.get('Please select single Test session record.').subscribe(function (res) {
                alert(res);
                _this147.flag = true;
              });
            }
          } else if (this.network.type == "none") {
            if (this.flag == true) {
              this.translate.use(this.selectedLanguage);
              this.translate.get('Please select single Test session record.').subscribe(function (res) {
                alert(res);
                _this147.flag = true;
              });
            }

            this.getTestFileRows();
          }
        }
      }, {
        key: "isExistfile",
        value: function isExistfile(id, entity_id, class_id, subject_id, start_date, deadline_date, is_delete, send_and_start, created_at, updated_at, test_file, detail_id, test_session_id, test_created_by, firstname, lastname) {
          var _this148 = this;

          var folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
          var storedpath = this.file.externalRootDirectory + folderdir + '/'; //'my_downloads/';

          console.log('storedpath :-' + storedpath, test_file);
          this.file.checkFile(storedpath, test_file).then(function (files) {
            console.log('if exist' + JSON.stringify(files));
          }, function (error) {
            console.log('else exist' + JSON.stringify(error));
          }); //return this.file.checkFile(this.file.externalDataDirectory, test_file).then(

          return this.file.checkFile(storedpath, test_file).then(function (files) {
            _this148.isExist = true; // this.testSessionFiles = [];

            _this148.testSessionFiles.push({
              "id": id,
              "entity_id": entity_id,
              "class_id": class_id,
              "subject_id": subject_id,
              "start_date": start_date,
              "deadline_date": deadline_date,
              "is_delete": is_delete,
              "send_and_start": send_and_start,
              "created_at": created_at,
              "updated_at": updated_at,
              "test_file": test_file,
              "detail_id": detail_id,
              "test_session_id": test_session_id,
              "test_created_by": test_created_by,
              "firstname": firstname,
              "lastname": lastname,
              'icon': 'open'
            });
          })["catch"](function (err) {
            _this148.isExist = false;

            _this148.testSessionFiles.push({
              "id": id,
              "entity_id": entity_id,
              "class_id": class_id,
              "subject_id": subject_id,
              "start_date": start_date,
              "deadline_date": deadline_date,
              "is_delete": is_delete,
              "send_and_start": send_and_start,
              "created_at": created_at,
              "updated_at": updated_at,
              "test_file": test_file,
              "detail_id": detail_id,
              "test_session_id": test_session_id,
              "test_created_by": test_created_by,
              "firstname": firstname,
              "lastname": lastname,
              'icon': 'download'
            });
          });
        }
        /** get selected files... */

      }, {
        key: "getFiles",
        value: function getFiles() {
          return this.fileUploader.queue.map(function (fileItem) {
            return fileItem.file;
          });
        }
      }, {
        key: "uploadFiles",
        value: function uploadFiles() {
          var _this149 = this;

          console.log('this.fileUploadedcount uploadfiles :---' + this.fileUploadedcount);
          this.http.setServerTrustMode('nocheck');
          this.http.setHeader('*', 'Access-Control-Allow-Origin', '*');

          if (this.fileUploadedcount == 0) {
            this.translate.use(this.selectedLanguage);
            this.translate.get('Please select file to upload').subscribe(function (res) {
              alert(res);
            });
          } //if (this.defaultFile != '' && this.fileUploadedcount > 0) {
          else {
              var files = this.getFiles();
              var requests = [];
              console.log("files", files);
              files.forEach(function (file) {
                var formData = new FormData();
                console.log(file.rawFile);
                console.log(file.name);
                formData.append('files', file.rawFile, file.name);
                requests.push(_this149.menuService.uploadFormData(formData));
              });
              Object(rxjs__WEBPACK_IMPORTED_MODULE_17__["concat"]).apply(void 0, requests).subscribe(function (res) {
                var dateTime = _this149.datepipe.transform(new Date(), 'yyyy-MM-dd HH-mm-ss');

                console.log('res url:-' + res['url'] + '--JSON ' + JSON.stringify(res));

                if (localStorage.getItem('userType') == 'Actor') {
                  var forrmdata = {
                    'testSessionId': localStorage.getItem('testSessionId'),
                    'actorId': localStorage.getItem('userId'),
                    'ip_address': _this149.IPAddress,
                    'answerFileUpload': res['url'],
                    //testSessionFile: this.defaultFile,
                    'dateTime': dateTime
                  };
                } else {
                  var forrmdata = {
                    'testSessionId': localStorage.getItem('testSessionId'),
                    'actorId': localStorage.getItem('actorId'),
                    'ip_address': _this149.IPAddress,
                    'answerFileUpload': res['url'],
                    //testSessionFile: this.defaultFile,
                    'dateTime': dateTime
                  };
                }

                var headers = {
                  'Content-Type': 'application/json'
                };
                console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/upload_test_files"), forrmdata);

                _this149.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/upload_test_files"), forrmdata, headers).then(function (data) {
                  console.log('File move API response :-' + JSON.stringify(data));
                })["catch"](function (error) {
                  console.log(" Error Here move file in API :-!" + JSON.stringify(error));
                });

                _this149.testSessionHeader = true;
                _this149.fileUploadedcount = 0;
                _this149.fileUploadPage = false;
                _this149.testSessionData = true;

                _this149.onClickCancel(); //this.getTestSessionList();

                /** */


                for (var i = 0; i < _this149.fileUploader.queue.length; i++) {
                  _this149.fileUploader.queue[i].remove();

                  var _files = _this149.getFiles();

                  _files.forEach(function (file) {
                    console.log(' Remove file' + file.rawFile);
                    console.log(' Remove file name:-' + file.name);
                  });
                }
              }, function (err) {
                console.log(err);
              });
            }
        } // count how many times user click on file upload control and clear the existing entry before new file

      }, {
        key: "onClickFile",
        value: function onClickFile(str) {
          if (str.target.files.length > 0) {
            if (this.fileUploadedcount == 0) {
              this.fileUploadedcount++;
              console.log('this.fileUploadedcount++ :-' + this.fileUploadedcount);
            } else {
              if (this.fileUploadedcount > 0) {
                for (var i = 0; i < this.fileUploader.queue.length; i++) {
                  this.fileUploader.queue[i].remove();
                  var files = this.getFiles();
                  files.forEach(function (file) {
                    //let formData = new FormData();
                    console.log(' Remove file' + file.rawFile);
                    console.log(' Remove file name:-' + file.name); //formData.append('files', file.rawFile, file.name);
                  });
                }
              }
            }
          }
        }
      }, {
        key: "openDownloadedFile",
        value: function openDownloadedFile() {
          var fileExtn = this.filepath.split('.').reverse()[0];
          console.log('openDownloadedFile :- ' + this.filepath);

          for (var i = 0; i < this.fileTypeArr.length; i++) {
            if (fileExtn == this.fileTypeArr[i]['fileType']) {
              var fileType = this.fileTypeArr[i]['fileExtension'];
            }
          }

          this.fileOpener.open(this.filepath, fileType).then().then()["catch"](function (e) {
            return console.log("Error opening file :-" + JSON.stringify(e));
          });
        }
      }, {
        key: "onClickViewGrade",
        value: function onClickViewGrade() {
          var _this150 = this;

          this.lengthCheckedArr = [];
          console.log('this.gradedfilesent onClickViewGrade() : ' + this.gradedfilesent);

          if (this.gradedfilesent == 'yes') {
            this.filter = "";
            this.fileFilter = "";
            this.filterGrade = "";

            if (this.network.type != "none") {
              // alert("flag Inside of Grade :-" + this.flag);
              for (var i = 0; i < this.testSessionArr.length; i++) {
                if (this.testSessionArr[i]['checked'] == true) {
                  /**Web API Code Start here */
                  // this.menuService.getGrade(localStorage.getItem('testSessionId'), localStorage.getItem('userId')).subscribe(res => {
                  //   var temp;
                  //   temp = [];
                  //   temp = res
                  //     this.tempGradeList = [];
                  //   this.tempGradeList = temp.data;
                  //   // this.flag = true;
                  //   this.openFileSubForm = false;
                  //   this.testSessionHeader = false;
                  //   this.testSessionData = false;
                  //   this.testSessionSubHeader = false;
                  //   this.fileUploadPage = false;
                  //   this.testSessionFileSubHeader = false;
                  //   this.viewGradeSubHeader = true;
                  //   this.viewGradeSubForm = true;
                  //   this.gradeListArr = [];
                  //   for (var i = 0; i < this.tempGradeList.length; i++) {
                  //     this.gradeListArr.push({
                  //       "id": this.tempGradeList[i]['id'],
                  //       "test_session_id": this.tempGradeList[i]['test_session_id'],
                  //       "actor_id": this.tempGradeList[i]['actor_id'],
                  //       "deadline_date": this.tempGradeList[i]['deadline_date'],
                  //       "test_file": this.tempGradeList[i]['test_file'],
                  //       "test_created_by": this.tempGradeList[i]['test_created_by'],
                  //       "answer_file": this.tempGradeList[i]['answer_file'],
                  //       "answer_date": this.tempGradeList[i]['answer_date'],
                  //       "is_received": this.tempGradeList[i]['is_received'],
                  //       "graded_file": this.tempGradeList[i]['graded_file'],
                  //       "graded_date": this.tempGradeList[i]['graded_date'],
                  //       "grade_decided_manager_id": this.tempGradeList[i]['grade_decided_manager_id'],
                  //       "graded_file_sent": this.tempGradeList[i]['graded_file_sent'],
                  //       "file_grade": this.tempGradeList[i]['file_grade'],
                  //       "avg_grade": this.tempGradeList[i]['avg_grade'],
                  //       "created_at": this.tempGradeList[i]['created_at'],
                  //       "updated_at": this.tempGradeList[i]['updated_at'],
                  //       "entity_id": this.tempGradeList[i]['entity_id'],
                  //       "class_id": this.tempGradeList[i]['class_id'],
                  //       "subject_id": this.tempGradeList[i]['subject_id'],
                  //       "start_date": this.tempGradeList[i]['start_date'],
                  //       "is_delete": this.tempGradeList[i]['is_delete'],
                  //       "send_and_start": this.tempGradeList[i]['send_and_start'],
                  //       'icon': 'download'
                  //     })
                  //   }
                  // })

                  /** Web API code end here */
                  if (localStorage.getItem('userType') == 'Actor') {
                    var data = {
                      "actorId": localStorage.getItem('userId'),
                      "testSessionId": localStorage.getItem('testSessionId')
                    };
                  } else {
                    var data = {
                      "actorId": localStorage.getItem('actorId'),
                      "testSessionId": localStorage.getItem('testSessionId')
                    };
                  }

                  var headers = {
                    'Content-Type': 'appllication/json'
                  };
                  console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/list_graded_files"), JSON.stringify(data));
                  this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/list_graded_files"), data, headers).then(function (res) {
                    var temp;
                    temp = [];
                    temp = JSON.parse(res.data);
                    _this150.tempGradeList = [];
                    _this150.tempGradeList = temp.data;
                    console.log('this.tempGradeList' + JSON.stringify(_this150.tempGradeList)); // this.flag = true;

                    _this150.openFileSubForm = false;
                    _this150.testSessionHeader = false;
                    _this150.testSessionData = false;
                    _this150.testSessionSubHeader = false;
                    _this150.fileUploadPage = false;
                    _this150.testSessionFileSubHeader = false;
                    _this150.viewGradeSubHeader = true;
                    _this150.viewGradeSubForm = true;
                    _this150.gradeListArr = [];
                    _this150.permissonArray = [];

                    for (var i = 0; i < _this150.tempGradeList.length; i++) {
                      _this150.isExistGradeFile(_this150.tempGradeList[i]['id'], _this150.tempGradeList[i]['test_session_id'], _this150.tempGradeList[i]['actor_id'], _this150.tempGradeList[i]['deadline_date'], _this150.tempGradeList[i]['test_file'], _this150.tempGradeList[i]['test_created_by'], _this150.tempGradeList[i]['answer_file'], _this150.tempGradeList[i]['answer_date'], _this150.tempGradeList[i]['is_received'], _this150.tempGradeList[i]['graded_file'], _this150.tempGradeList[i]['graded_date'], _this150.tempGradeList[i]['grade_decided_manager_id'], _this150.tempGradeList[i]['graded_file_sent'], _this150.tempGradeList[i]['file_grade'], _this150.tempGradeList[i]['avg_grade'], _this150.tempGradeList[i]['created_at'], _this150.tempGradeList[i]['updated_at'], _this150.tempGradeList[i]['entity_id'], _this150.tempGradeList[i]['class_id'], _this150.tempGradeList[i]['subject_id'], _this150.tempGradeList[i]['start_date'], _this150.tempGradeList[i]['is_delete'], _this150.tempGradeList[i]['send_and_start']);
                    }

                    _this150.insertGradeList(); //unhide the submit answer file


                    _this150.disabled = false; // alert("this.testSessionArr  :-" + this.testSessionArr);
                  })["catch"](function (error) {
                    console.log("Grade list error !" + JSON.stringify(error));
                  });
                }
              }

              if (this.flag == true) {
                this.translate.use(this.selectedLanguage);
                this.translate.get('Please select single Test session record.').subscribe(function (res) {
                  alert(res);
                  _this150.flag = true;
                });
              }
            } else if (this.network.type == "none") {
              for (var i = 0; i < this.testSessionArr.length; i++) {
                if (this.testSessionArr[i]['checked'] == true) {
                  this.getGradeList();
                  this.openFileSubForm = false;
                  this.testSessionHeader = false;
                  this.testSessionData = false;
                  this.testSessionSubHeader = false;
                  this.fileUploadPage = false;
                  this.testSessionFileSubHeader = false;
                  this.viewGradeSubHeader = true;
                  this.viewGradeSubForm = true;
                }
              }

              if (this.flag == true) {
                this.translate.use(this.selectedLanguage);
                this.translate.get('Please select single Test session record.').subscribe(function (res) {
                  alert(res);
                  _this150.flag = true;
                });
              }
            }
          } else {
            if (this.flag == true) {
              this.translate.use(this.selectedLanguage);
              this.translate.get('Please select single Test session record.').subscribe(function (res) {
                alert(res);
                _this150.flag = true;
              });
            } else {
              this.translate.use(this.selectedLanguage);
              this.translate.get("Grade's for this test are not yet received").subscribe(function (res) {
                alert(res);
              });
            }
          }
        }
      }, {
        key: "createdirJawata",
        value: function createdirJawata(vartest) {
          var _this151 = this;

          this.platform.ready().then(function () {
            //check directory for jawata
            _this151.file.checkDir(_this151.file.externalRootDirectory, 'Jawata').then(function (response) {
              console.log('Directory already present for this Jawata :- ' + response); //check directory for entity

              _this151.file.checkDir(_this151.file.externalRootDirectory + 'Jawata' + '/', localStorage.getItem('entity_no') + '/').then(function (response) {
                console.log('Directory already present for this Entity :- ' + response); //check directory for Test 

                _this151.file.checkDir(_this151.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/', vartest + '/').then(function (response) {
                  console.log('Directory already present for this Tests :- ' + response);
                }, function (error) {
                  // create directory for Tests
                  _this151.file.createDir(_this151.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/', vartest + '/', false).then(function (response) {
                    console.log('in function createDir for class', response);
                  });
                });
              }, function (error) {
                //create entity 
                _this151.file.createDir(_this151.file.externalRootDirectory + 'Jawata' + '/', localStorage.getItem('entity_no') + '/', false).then(function (response) {
                  console.log('in function createDir for entity :-', response); //check directory for Tests 

                  _this151.file.checkDir(_this151.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/', vartest + '/').then(function (response) {
                    console.log('Directory already present for this Tests :- ' + response);
                  }, function (error) {
                    // create directory for Tests
                    _this151.file.createDir(_this151.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/', vartest + '/', false).then(function (response) {
                      console.log('in function createDir for class', response);
                    });
                  });
                });
              });
            }, function (error) {
              console.log('Directory doesn\'t exist jawata :- ' + JSON.stringify(error));

              _this151.file.createDir(_this151.file.externalRootDirectory, 'Jawata', false).then(function (response) {
                console.log('createDir for jawata ', response); //create entity

                _this151.file.createDir(_this151.file.externalRootDirectory + 'Jawata' + '/', localStorage.getItem('entity_no') + '/', false).then(function (response) {
                  console.log('in function createDir for entity :-', response); // create directory for Test

                  _this151.file.createDir(_this151.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/', vartest + '/', false).then(function (response) {
                    console.log('in function createDir for Tests', response);
                  });
                }, function (error) {
                  // create directory for Test
                  _this151.file.createDir(_this151.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/', vartest + '/', false).then(function (response) {
                    console.log('in function createDir for Tests', response);
                  });
                });
              }, function (error) {
                console.error('error to create jawata' + _this151.file.externalRootDirectory + 'Jawata' + '/');
                console.log('path exist :-' + JSON.stringify(error)); //create entity

                _this151.file.createDir(_this151.file.externalRootDirectory + 'Jawata' + '/', localStorage.getItem('entity_no') + '/', false).then(function (response) {
                  console.log('in function createDir for entity :-', response);
                });
              });
            });
          });
        }
      }, {
        key: "createdirTestSessionID",
        value: function createdirTestSessionID(subject, vartest) {
          var _this152 = this;

          var folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/'; //this.file.checkDir(this.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/' + vartest + '/', subject + '/').then(response => {

          this.file.checkDir(this.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/' + vartest + '/', subject + '/').then(function (response) {
            console.log('Directory already present for this test session ID  :- ' + _this152.file.externalRootDirectory + 'Jawata' + '/' + localStorage.getItem('entity_no') + '/' + vartest + '/', subject + '/');
            return true;
          }, function (error) {
            console.log('Directory doesn\'t exist session ID  :-' + JSON.stringify(error));

            _this152.platform.ready().then(function () {
              _this152.file.createDir(_this152.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/' + vartest + '/', subject + '/', false).then(function (response) {
                console.log('in function createDir for tests session ID ', response);
              });
            });
          });
        }
      }, {
        key: "onClickDownload",
        value: function onClickDownload(fileName, testSessionId, entityId, classId, icon) {
          var _this153 = this;

          console.log('this.network.type' + this.network.type + '--icon--' + icon);

          if (this.network.type != "none") {
            if (icon.toString() == 'open') {
              //this.filepath = this.file.externalDataDirectory + fileName;
              var folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
              var storedpath = this.file.externalRootDirectory + folderdir + '/'; //'my_downloads/';

              this.filepath = storedpath + fileName;
              console.log('online this.filepath :- ' + this.filepath);
              this.openDownloadedFile();
            } else {
              console.log('this.file.externalRootDirectory' + this.file.externalRootDirectory + '--this.haspermission:-' + this.haspermission);
              console.log('this.file.externalDataDirectory' + this.file.externalDataDirectory);
              var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/test_sessions/Target/TestFile/") + testSessionId + '/' + fileName;
              console.log("URL is :-" + url);
              /**check permission ,  create folder and save file , change icon status */

              if (this.haspermission) {
                var _folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/'; // filetransfer download


                var _storedpath = this.file.externalRootDirectory + _folderdir + '/'; //'my_downloads/';


                var request = {
                  uri: encodeURI(url),
                  // title: 'MyDownload',
                  title: fileName,
                  description: '',
                  mimeType: '',
                  visibleInDownloadsUi: true,
                  notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_18__["NotificationVisibility"].VisibleNotifyCompleted,
                  destinationInExternalFilesDir: {
                    dirType: fileName,
                    subPath: ''
                  }
                };
                console.log("DownloadRequest is :-" + JSON.stringify(request));

                try {
                  this.file.checkDir(this.file.externalRootDirectory, _folderdir.toString()).then(function (response) {
                    console.log('Directory already present :- ' + _folderdir.toString());

                    var fileTransfer1 = _this153.transfer.create();

                    fileTransfer1.download(encodeURI(url), _storedpath + fileName, true).then(function (entry) {
                      console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));
                      _this153.filepath = entry.toURL();
                      console.log("Downloaded File Path :-" + _this153.filepath);

                      _this153.downloader.download(request).then(function (location) {
                        console.log('File downloaded at:' + location);
                      })["catch"](function (error) {
                        return console.error('DOWNLOAD error' + error);
                      });
                      /**Log entry */


                      _this153.LogEntryForDownloadTestFile();
                      /**after download change the icon status */


                      _this153.onClickOpenFile();
                    }, function (error) {
                      // handle error
                      console.log('File Download Error Here !' + JSON.stringify(error));
                    });
                  }, function (error) {
                    console.log('Directory doesn\'t exist jawata :- ' + JSON.stringify(error) + '--Path--' + _folderdir); //this.createdirJawata('Tests');

                    _this153.createdirTests();

                    _this153.createdirTestSessionID(testSessionId, 'Tests');

                    var fileTransfer2 = _this153.transfer.create();

                    fileTransfer2.download(encodeURI(url), _storedpath + fileName, true).then(function (entry) {
                      console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));
                      _this153.filepath = entry.toURL();
                      console.log("Downloaded File Path :-" + _this153.filepath);

                      _this153.downloader.download(request).then(function (location) {
                        console.log('File downloaded at:' + location);
                      })["catch"](function (error) {
                        return console.error('DOWNLOAD error' + error);
                      });
                      /**Log entry */


                      _this153.LogEntryForDownloadTestFile();

                      _this153.onClickOpenFile();
                    }, function (error) {
                      // handle error
                      console.log('File Download Error Here !' + JSON.stringify(error));
                    });
                  });
                } catch (error) {
                  console.log('catch block :' + JSON.stringify(error));
                } // this.file.createDir(this.file.externalRootDirectory, folderdir.toString(), true).then(response => {
                //   console.log('Directory created', response);
                //   // save file from server
                //   this.fileTransfer.download(encodeURI(url), storedpath + fileName, true).then((entry) => {
                //     console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));
                //     this.filepath = entry.toURL();
                //     console.log("Downloaded File Path :-" + this.filepath);
                //     this.onClickOpenFile();
                //   }, (error) => {
                //     // handle error
                //     console.log('File Download Error Here !' + JSON.stringify(error));
                //   });
                // },
                //   (error) => {
                //     console.log('dir error :-' + JSON.stringify(error));
                //     // save file from server
                //     this.fileTransfer.download(encodeURI(url), storedpath + fileName, true).then((entry) => {
                //       console.log('this.fileTransfer.download (entry) else :-' + JSON.stringify(entry));
                //       this.filepath = entry.toURL();
                //       console.log("Downloaded File Path :-" + this.filepath);
                //       /**after download change the icon status */
                //       this.onClickOpenFile();
                //     }, (error) => {
                //       // handle error
                //       console.log('File Download Error Here !' + JSON.stringify(error));
                //     });
                //   });

              } else {
                console.log('else permission :-' + this.haspermission);
                this.getstoragepermission();
              }
            }
          } else {
            if (icon == 'open') {
              //this.filepath = this.file.externalDataDirectory + fileName;
              var _folderdir2 = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';

              var _storedpath2 = this.file.externalRootDirectory + _folderdir2 + '/'; //'my_downloads/';


              this.filepath = _storedpath2 + fileName;
              console.log('Offline this.filepath :- ' + this.filepath);
              var fileExtn = this.filepath.split('.').reverse()[0];

              for (var i = 0; i < this.fileTypeArr.length; i++) {
                if (fileExtn == this.fileTypeArr[i]['fileType']) {
                  var fileType = this.fileTypeArr[i]['fileExtension'];
                }
              }

              this.fileOpener.open(this.filepath, fileType).then().then()["catch"](function (e) {
                return console.log("Error opening file :-" + JSON.stringify(e));
              });
            } else {
              this.translate.use(this.selectedLanguage);
              this.translate.get('Before to download file, Please connect internet connection').subscribe(function (res) {
                alert(res);
              });
            }
          }
          /** Old download code end from here */

        }
      }, {
        key: "downLoadGradefile",
        value: function downLoadGradefile(fileName, testSessionId, entityId, classId, icon) {
          var _this154 = this;

          /**New Downloader plugin code start from here */
          //var url = `${environment.apiUrl}/test_sessions/Target/GradedFile/` + testSessionId + '/' + localStorage.getItem('userId') + '/' + fileName;
          var url = '';

          if (localStorage.getItem('userType') == "Actor's Parent") {
            url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/test_sessions/Target/GradedFile/") + testSessionId + '/' + localStorage.getItem('actorId') + '/' + fileName;
          } else {
            url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/test_sessions/Target/GradedFile/") + testSessionId + '/' + localStorage.getItem('userId') + '/' + fileName;
          }

          var request = {
            uri: encodeURI(url),
            // title: 'MyDownload',
            title: fileName,
            description: '',
            mimeType: '',
            visibleInDownloadsUi: true,
            notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_18__["NotificationVisibility"].VisibleNotifyCompleted,
            destinationInExternalFilesDir: {
              dirType: 'Download',
              subPath: ''
            }
          };
          /** Old download code start from here */

          console.log('this.network.type' + this.network.type + '--icon--' + icon);
          console.log("fileName,testSessionId, entityId, classId, icon :-" + fileName, testSessionId, entityId, classId, icon);

          if (this.network.type != "none") {
            if (icon.toString() == 'open') {
              //this.filepath = this.file.externalDataDirectory + fileName;
              var folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
              var storedpath = this.file.externalRootDirectory + folderdir + '/'; //'my_downloads/';

              this.filepath = storedpath + fileName;
              console.log('online this.filepath :- ' + this.filepath);
              this.openDownloadedFile();
            } else {
              if (localStorage.getItem('userType') == "Actor's Parent") {
                url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/test_sessions/Target/GradedFile/") + testSessionId + '/' + localStorage.getItem('actorId') + '/' + fileName;
              } else {
                url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/test_sessions/Target/GradedFile/") + testSessionId + '/' + localStorage.getItem('userId') + '/' + fileName;
              }

              console.log("URL is :-" + url);
              /**check permission ,  create folder and save file , change icon status */

              if (this.haspermission) {
                // create dir
                this.platform.ready().then(function () {
                  var folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
                  var storedpath = _this154.file.externalRootDirectory + folderdir + '/'; //'my_downloads/';

                  var request = {
                    uri: url,
                    // title: 'MyDownload',
                    title: fileName,
                    description: '',
                    mimeType: '',
                    visibleInDownloadsUi: true,
                    notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_18__["NotificationVisibility"].VisibleNotifyCompleted,
                    destinationInExternalFilesDir: {
                      dirType: fileName,
                      subPath: ''
                    }
                  };
                  console.log("DownloadRequest is :-" + JSON.stringify(request));

                  try {
                    _this154.file.checkDir(_this154.file.externalRootDirectory, folderdir.toString()).then(function (response) {
                      console.log('Directory already present :- ' + folderdir.toString());

                      var fileTransfer4 = _this154.transfer.create();

                      fileTransfer4.download(encodeURI(url), storedpath + fileName, true).then(function (entry) {
                        console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));
                        _this154.filepath = entry.toURL();
                        console.log("Downloaded File Path :-" + _this154.filepath);

                        _this154.downloader.download(request).then(function (location) {
                          /**after download change the icon status */
                          _this154.onClickViewGrade();

                          console.log('File downloaded at:' + location);
                        })["catch"](function (error) {
                          return console.error('DOWNLOAD error' + error);
                        });
                      }, function (error) {
                        // handle error
                        console.log('File Download Error Here !' + JSON.stringify(error));
                      });
                    }, function (error) {
                      console.log('Directory doesn\'t exist jawata :- ' + JSON.stringify(error) + '--Path--' + folderdir); //this.createdirJawata('Grade');

                      _this154.createdirTests();

                      _this154.createdirTestSessionID(testSessionId, 'Grade');

                      var fileTransfer3 = _this154.transfer.create();

                      fileTransfer3.download(encodeURI(url), storedpath + fileName, true).then(function (entry) {
                        console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));
                        _this154.filepath = entry.toURL();
                        console.log("Downloaded File Path :-" + _this154.filepath);

                        _this154.downloader.download(request).then(function (location) {
                          _this154.onClickViewGrade();

                          console.log('File downloaded at:' + location);
                        })["catch"](function (error) {
                          return console.error('DOWNLOAD error' + error);
                        });
                      }, function (error) {
                        // handle error
                        console.log('File Download Error Here !' + JSON.stringify(error));
                      });
                    });
                  } catch (error) {
                    console.log('catch block :' + JSON.stringify(error));
                  } // this.file.createDir(this.file.externalRootDirectory, folderdir.toString(), true).then(response => {
                  //   console.log('Directory created', response);
                  //   // save file from server
                  //   this.fileTransfer.download(encodeURI(url), storedpath + fileName, true).then((entry) => {
                  //     console.log('this.fileTransfer.download (entry) if :-' + JSON.stringify(entry));
                  //     this.filepath = entry.toURL();
                  //     console.log("Downloaded File Path :-" + this.filepath);
                  //     //this.openDownloadedFile();
                  //     this.onClickViewGrade();
                  //   }, (error) => {
                  //     // handle error
                  //     console.log('File Download Error Here !' + JSON.stringify(error));
                  //   });
                  // },
                  //   (error) => {
                  //     // save file from server
                  //     this.fileTransfer.download(encodeURI(url), storedpath + fileName, true).then((entry) => {
                  //       console.log('this.fileTransfer.download (entry) else :-' + JSON.stringify(entry));
                  //       this.filepath = entry.toURL();
                  //       console.log("Downloaded File Path :-" + this.filepath);
                  //       // let folderdir = 'Jawata/' + localStorage.getItem('entity_no') + '/Grade/' + testSessionId + '/';
                  //       // let storedpath = this.file.externalRootDirectory + folderdir + '/';//'my_downloads/';
                  //       // this.filepath = storedpath + fileName;
                  //       // console.log('online this.filepath :- ' + this.filepath);
                  //       // this.openDownloadedFile();
                  //       /**after download change the icon status */
                  //       this.onClickViewGrade();
                  //     }, (error) => {
                  //       // handle error
                  //       console.log('File Download Error Here !' + JSON.stringify(error));
                  //     });
                  //     console.log('dir error :-' + JSON.stringify(error));
                  //   });

                });
              } else {
                console.log('else permission :-' + this.haspermission);
                this.getstoragepermission();
              }
            }
          } else {
            if (icon == 'open') {
              //this.filepath = this.file.externalDataDirectory + fileName;
              var _folderdir3 = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';

              var _storedpath3 = this.file.externalRootDirectory + _folderdir3 + '/'; //'my_downloads/';


              this.filepath = _storedpath3 + fileName;
              console.log('Offline this.filepath :- ' + this.filepath);
              var fileExtn = this.filepath.split('.').reverse()[0];

              for (var i = 0; i < this.fileTypeArr.length; i++) {
                if (fileExtn == this.fileTypeArr[i]['fileType']) {
                  var fileType = this.fileTypeArr[i]['fileExtension'];
                }
              }

              this.fileOpener.open(this.filepath, fileType).then().then()["catch"](function (e) {
                return console.log("Error opening file :-" + JSON.stringify(e));
              });
            } else {
              this.translate.use(this.selectedLanguage);
              this.translate.get('Before to download file, Please connect internet connection').subscribe(function (res) {
                alert(res);
              });
            }
          }
          /** Old download code end from here */

        }
      }, {
        key: "isExistGradeFile",
        value: function isExistGradeFile(id, test_session_id, actor_id, deadline_date, test_file, test_created_by, answer_file, answer_date, is_received, graded_file, graded_date, grade_decided_manager_id, graded_file_sent, file_grade, avg_grade, created_at, updated_at, entity_id, class_id, subject_id, start_date, is_delete, send_and_start) {
          var _this155 = this;

          var folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
          var storedpath = this.file.externalRootDirectory + folderdir + '/'; //'my_downloads/';

          console.log('storedpath :-' + storedpath, graded_file);
          this.file.checkFile(storedpath, graded_file).then(function (files) {
            console.log('if exist' + JSON.stringify(files));
          }, function (error) {
            console.log('else exist' + JSON.stringify(error)); // alert('else exist' + JSON.stringify(error))
          });
          return this.file.checkFile(storedpath, graded_file).then(function (files) {
            _this155.isExist = true;

            _this155.gradeListArr.push({
              "id": id,
              "test_session_id": test_session_id,
              "actor_id": actor_id,
              "deadline_date": deadline_date,
              "test_file": test_file,
              "test_created_by": test_created_by,
              "answer_file": answer_file,
              "answer_date": answer_date,
              "is_received": is_received,
              "graded_file": graded_file,
              "graded_date": graded_date,
              "grade_decided_manager_id": grade_decided_manager_id,
              "graded_file_sent": graded_file_sent,
              "file_grade": file_grade,
              "avg_grade": avg_grade,
              "created_at": created_at,
              "updated_at": updated_at,
              "entity_id": entity_id,
              "class_id": class_id,
              "subject_id": subject_id,
              "start_date": start_date,
              "is_delete": is_delete,
              "send_and_start": send_and_start,
              'icon': 'open'
            });
          })["catch"](function (err) {
            _this155.isExist = false;

            _this155.gradeListArr.push({
              "id": id,
              "test_session_id": test_session_id,
              "actor_id": actor_id,
              "deadline_date": deadline_date,
              "test_file": test_file,
              "test_created_by": test_created_by,
              "answer_file": answer_file,
              "answer_date": answer_date,
              "is_received": is_received,
              "graded_file": graded_file,
              "graded_date": graded_date,
              "grade_decided_manager_id": grade_decided_manager_id,
              "graded_file_sent": graded_file_sent,
              "file_grade": file_grade,
              "avg_grade": avg_grade,
              "created_at": created_at,
              "updated_at": updated_at,
              "entity_id": entity_id,
              "class_id": class_id,
              "subject_id": subject_id,
              "start_date": start_date,
              "is_delete": is_delete,
              "send_and_start": send_and_start,
              'icon': 'download'
            });
          });
        }
        /**Offline App code start here */

      }, {
        key: "createDB",
        value: function createDB() {
          var _this156 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this156.databaseObj = db;

            _this156.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this156.table_name + ' (UniqueTestID INTEGER PRIMARY KEY AUTOINCREMENT,userId varchar(2),class_id varchar(2), class_reference varchar(2), class_grade varchar(2), ref_grade varchar(2), subject_name varchar(2), start_date varchar(2), test_session_id varchar(2), id varchar(2), actor_id varchar(2), deadline_date varchar(2), test_file varchar(2), test_created_by varchar(2), answer_file varchar(2), answer_date varchar(2), is_received varchar(2), grade varchar(2), grade_decided_manager_id varchar(2), created_at varchar(2), updated_at varchar(2), firstname varchar(2), lastname varchar(2), checked varchar(2),test_session_count_for_that_entity varchar(2),graded_date varchar(2),graded_file_sent varchar(2),disabled varchar(2) )', []).then(function () {
              // alert('Database Created :-' + this.database_name);
              // alert('Table Created :-' + this.table_name);
              if (_this156.network.type == "none") {
                _this156.getTestRows();
              }
            })["catch"](function (e) {// alert("Error to Create Test List Table !" + JSON.stringify(e))
            });

            _this156.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this156.testFile_table + ' (UniqueTestFileID INTEGER PRIMARY KEY AUTOINCREMENT, userId varchar(2), testSessionId varchar(2), id varchar(2), entity_id varchar(2), class_id varchar(2), subject_id varchar(2), start_date varchar(2), deadline_date varchar(2), is_delete varchar(2), send_and_start varchar(2), created_at varchar(2), updated_at varchar(2), test_file varchar(2), detail_id varchar(2), test_session_id varchar(2), test_created_by varchar(2), firstname varchar(2), lastname varchar(2), icon varchar(2))', []).then(function () {// alert('Database Created :-' + this.database_name);
              // alert('Table Created :-' + this.table_name); 
            })["catch"](function (e) {// alert("Error to Create TestOpenFiles Table !" + JSON.stringify(e))
            });
          })["catch"](function (e) {// alert("Error to Database Create ! " + JSON.stringify(e))
          });
        }
      }, {
        key: "createDBGrade",
        value: function createDBGrade() {
          var _this157 = this;

          this.sqlite.create({
            name: this.database_name,
            location: 'default'
          }).then(function (db) {
            _this157.databaseObj = db;

            _this157.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' + _this157.grade_Table + ' (UniqueGradeID INTEGER PRIMARY KEY AUTOINCREMENT, userId varchar(2), testSessionId varchar(2), id varchar(2), test_session_id varchar(2), actor_id varchar(2), deadline_date varchar(2), test_file varchar(2), test_created_by varchar(2), answer_file varchar(2), answer_date varchar(2), is_received varchar(2), graded_file varchar(2), graded_date varchar(2), grade_decided_manager_id varchar(2), graded_file_sent varchar(2), file_grade varchar(2), avg_grade varchar(2), created_at varchar(2), updated_at varchar(2), entity_id varchar(2), class_id varchar(2), subject_id varchar(2), start_date varchar(2), is_delete varchar(2), send_and_start varchar(2), icon)', []).then(function () {// alert('Database Created :-' + this.database_name);
              // alert('Table Created :-' + this.grade_Table);
            })["catch"](function (e) {// alert("Error to Create grade_Table !" + JSON.stringify(e))
            });
          })["catch"](function (e) {// alert("Error to Database Create ! " + JSON.stringify(e))
          });
        }
      }, {
        key: "insertTestRow",
        value: function insertTestRow() {
          var _this158 = this;

          this.databaseObj.executeSql("SELECT * FROM " + this.table_name, []).then(function (res) {
            // alert("res is:-" + JSON.stringify(res));
            _this158.row_data = [];

            for (var i = 0; i < res.rows.length; i++) {
              _this158.row_data.push(res.rows.item(i));
            } // alert("row_data is :-" + JSON.stringify(this.row_data));
            // delete rows here


            for (var i = 0; i < _this158.row_data.length; i++) {
              if (_this158.row_data[i]['userId'] == localStorage.getItem('userId')) {
                _this158.databaseObj.executeSql("DELETE FROM ".concat(_this158.table_name, " WHERE userId = ").concat(_this158.row_data[i]['userId']), []).then(function (res) {// alert("Row Deleted :-" + JSON.stringify(res));
                })["catch"](function (e) {// alert("error to test list delete rows " + JSON.stringify(e))
                });
              }
            } // Inserting rows here


            for (var i = 0; i < _this158.testSessionArr.length; i++) {
              _this158.databaseObj.executeSql('INSERT INTO ' + _this158.table_name + ' (userId, class_id, class_reference, class_grade, ref_grade, subject_name, start_date, test_session_id, id, actor_id, deadline_date, test_file, test_created_by, answer_file, answer_date, is_received, grade, grade_decided_manager_id, created_at, updated_at, firstname, lastname, checked, test_session_count_for_that_entity,graded_date,graded_file_sent, disabled) VALUES ("' + localStorage.getItem('userId') + '","' + _this158.testSessionArr[i]['class_id'] + '","' + _this158.testSessionArr[i]['class_reference'] + '","' + _this158.testSessionArr[i]['class_grade'] + '","' + _this158.testSessionArr[i]['ref_grade'] + '","' + _this158.testSessionArr[i]['subject_name'] + '","' + _this158.testSessionArr[i]['start_date'] + '","' + _this158.testSessionArr[i]['test_session_id'] + '","' + _this158.testSessionArr[i]['id'] + '","' + _this158.testSessionArr[i]['actor_id'] + '","' + _this158.testSessionArr[i]['deadline_date'] + '","' + _this158.testSessionArr[i]['test_file'] + '","' + _this158.testSessionArr[i]['test_created_by'] + '","' + _this158.testSessionArr[i]['answer_file'] + '","' + _this158.testSessionArr[i]['answer_date'] + '","' + _this158.testSessionArr[i]['is_received'] + '","' + _this158.testSessionArr[i]['grade'] + '","' + _this158.testSessionArr[i]['grade_decided_manager_id'] + '","' + _this158.testSessionArr[i]['created_at'] + '","' + _this158.testSessionArr[i]['updated_at'] + '","' + _this158.testSessionArr[i]['firstname'] + '","' + _this158.testSessionArr[i]['lastname'] + '","' + _this158.testSessionArr[i]['checked'] + '","' + _this158.testSessionArr[i]['test_session_count_for_that_entity'] + '","' + _this158.testSessionArr[i]['graded_date'] + '","' + _this158.testSessionArr[i]['graded_file_sent'] + '","' + 'false' + '")', []).then(function () {
                console.log('Row Inserted Test List :-' + _this158.testSessionArr[i]['test_session_count_for_that_entity'] + ' --graded_file_sent --' + _this158.testSessionArr[i]['graded_file_sent']);
              })["catch"](function (e) {// alert("Error Is Test Insert Rows:- " + JSON.stringify(e))
              });
            }
          })["catch"](function (e) {// alert("Error Is to get Test Rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "getTestRows",
        value: function getTestRows() {
          var _this159 = this;

          this.databaseObj.executeSql("SELECT DISTINCT userId, class_id, class_reference, class_grade, ref_grade, subject_name, start_date, test_session_id, id, actor_id, deadline_date, test_file, test_created_by, answer_file, answer_date, is_received, grade, grade_decided_manager_id, created_at, updated_at, firstname, lastname, checked,test_session_count_for_that_entity,graded_date, graded_file_sent FROM " + this.table_name, []).then(function (res) {
            // alert("TestRows res is :-" + JSON.stringify(res));
            _this159.row_data = [];
            _this159.testSessionArr = [];
            _this159.flag = true;

            for (var i = 0; i < res.rows.length; i++) {
              _this159.row_data.push(res.rows.item(i));
            } // alert("testRow row_data :-" + JSON.stringify(this.row_data));
            // alert("UserId is :-" + localStorage.getItem('userId'));


            for (var i = 0; i < _this159.row_data.length; i++) {
              if (_this159.row_data[i]['userId'] == localStorage.getItem('userId')) {
                _this159.testSessionArr.push(_this159.row_data[i]);
              }
            }

            console.log("testSessionArr offline Stored response is:-" + JSON.stringify(_this159.testSessionArr));
          })["catch"](function (e) {// alert("Error Is to get Test Rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "insertOpenTestFiles",
        value: function insertOpenTestFiles() {
          var _this160 = this;

          this.databaseObj.executeSql("SELECT * FROM " + this.testFile_table, []).then(function (res) {
            // alert("res is:-" + JSON.stringify(res));
            _this160.row_data = [];

            for (var i = 0; i < res.rows.length; i++) {
              _this160.row_data.push(res.rows.item(i));
            } // delete rows here


            for (var i = 0; i < _this160.row_data.length; i++) {
              if (_this160.row_data[i]['userId'] == localStorage.getItem('userId') && _this160.row_data[i]['testSessionId'] == localStorage.getItem('testSessionId')) {
                _this160.databaseObj.executeSql("DELETE FROM ".concat(_this160.testFile_table, " WHERE userId = ").concat(_this160.row_data[i]['userId']), []).then(function (res) {// alert("Row Deleted :-" + JSON.stringify(res));
                })["catch"](function (e) {// alert("Error to open test files delete rows " + JSON.stringify(e))
                });
              }
            } // Inserting rows here


            for (var i = 0; i < _this160.tempArr.length; i++) {
              _this160.databaseObj.executeSql('INSERT INTO ' + _this160.testFile_table + ' (userId, testSessionId, id, entity_id, class_id, subject_id , start_date , deadline_date , is_delete , send_and_start , created_at, updated_at , test_file , detail_id , test_session_id , test_created_by , firstname, lastname, icon ) VALUES ("' + localStorage.getItem('userId') + '","' + localStorage.getItem('testSessionId') + '","' + _this160.tempArr[i]['id'] + '","' + _this160.tempArr[i]['entity_id'] + '","' + _this160.tempArr[i]['class_id'] + '","' + _this160.tempArr[i]['subject_id'] + '","' + _this160.tempArr[i]['start_date'] + '","' + _this160.tempArr[i]['deadline_date'] + '","' + _this160.tempArr[i]['is_delete'] + '","' + _this160.tempArr[i]['send_and_start'] + '","' + _this160.tempArr[i]['created_at'] + '","' + _this160.tempArr[i]['updated_at'] + '","' + _this160.tempArr[i]['test_file'] + '","' + _this160.tempArr[i]['detail_id'] + '","' + _this160.tempArr[i]['test_session_id'] + '","' + _this160.tempArr[i]['test_created_by'] + '","' + _this160.tempArr[i]['firstname'] + '","' + _this160.tempArr[i]['lastname'] + '","' + "download" + '")', []).then(function () {// alert('Row Inserted inside of Test File :-' + this.testFile_table);
              })["catch"](function (e) {// alert("Error Is Test Insert File Rows:- " + JSON.stringify(e))
              });
            }
          })["catch"](function (e) {// alert("Error Is to get Test Files rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "getTestFileRows",
        value: function getTestFileRows() {
          var _this161 = this;

          this.databaseObj.executeSql("SELECT DISTINCT userId, testSessionId, id, entity_id, class_id, subject_id , start_date , deadline_date , is_delete , send_and_start , created_at, updated_at , test_file , detail_id , test_session_id , test_created_by , firstname, lastname, icon FROM " + this.testFile_table, []).then(function (res) {
            // alert("TestRows File res is :-" + JSON.stringify(res));
            // alert("Flag is offline fileRows :-" + this.flag);
            if (_this161.flag == false) {
              _this161.flag = true;
              _this161.row_data = [];
              _this161.testSessionFiles = [];
              _this161.openFileSubForm = true;
              _this161.testSessionHeader = false;
              _this161.testSessionData = false;
              _this161.testSessionSubHeader = false;
              _this161.fileUploadPage = false;
              _this161.testSessionFileSubHeader = true;
              localStorage.setItem('TestSession', "true");

              for (var i = 0; i < res.rows.length; i++) {
                _this161.row_data.push(res.rows.item(i));
              }

              for (var i = 0; i < _this161.row_data.length; i++) {
                if (_this161.row_data[i]['userId'] == localStorage.getItem('userId') && _this161.row_data[i]['testSessionId'] == localStorage.getItem('testSessionId')) {
                  // this.testSessionFiles.push(this.row_data[i])
                  _this161.isExistfileOffline(_this161.row_data[i]['userId'], _this161.row_data[i]['testSessionId'], _this161.row_data[i]['id'], _this161.row_data[i]['entity_id'], _this161.row_data[i]['class_id'], _this161.row_data[i]['subject_id'], _this161.row_data[i]['start_date'], _this161.row_data[i]['deadline_date'], _this161.row_data[i]['is_delete'], _this161.row_data[i]['send_and_start'], _this161.row_data[i]['created_at'], _this161.row_data[i]['updated_at'], _this161.row_data[i]['test_file'], _this161.row_data[i]['detail_id'], _this161.row_data[i]['test_session_id'], _this161.row_data[i]['test_created_by'], _this161.row_data[i]['firstname'], _this161.row_data[i]['lastname']);
                }
              } // alert("testSessionFiles :-" + JSON.stringify(this.testSessionFiles));

            }
          })["catch"](function (e) {// alert("Error Is to get Test Files Rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "insertGradeList",
        value: function insertGradeList() {
          var _this162 = this;

          this.databaseObj.executeSql("SELECT * FROM " + this.grade_Table, []).then(function (res) {
            // alert("res is:-" + JSON.stringify(res));
            _this162.row_data = [];

            for (var i = 0; i < res.rows.length; i++) {
              _this162.row_data.push(res.rows.item(i));
            } // delete rows here


            for (var i = 0; i < _this162.row_data.length; i++) {
              if (_this162.row_data[i]['userId'] == localStorage.getItem('userId') && _this162.row_data[i]['testSessionId'] == localStorage.getItem('testSessionId')) {
                _this162.databaseObj.executeSql("DELETE FROM ".concat(_this162.grade_Table, " WHERE userId = ").concat(_this162.row_data[i]['userId']), []).then(function (res) {// alert("Row Deleted Grade list table:-" + JSON.stringify(res));
                })["catch"](function (e) {// alert("Error to open test files delete rows " + JSON.stringify(e))
                });
              }
            } // Inserting rows here


            for (var i = 0; i < _this162.tempGradeList.length; i++) {
              _this162.databaseObj.executeSql('INSERT INTO ' + _this162.grade_Table + ' (userId, testSessionId, id, test_session_id, actor_id, deadline_date, test_file, test_created_by, answer_file, answer_date, is_received, graded_file, graded_date, grade_decided_manager_id, graded_file_sent, file_grade, avg_grade, created_at, updated_at, entity_id, class_id, subject_id, start_date, is_delete, send_and_start, icon ) VALUES ("' + localStorage.getItem('userId') + '","' + localStorage.getItem('testSessionId') + '","' + _this162.tempGradeList[i]['id'] + '","' + _this162.tempGradeList[i]['test_session_id'] + '","' + _this162.tempGradeList[i]['actor_id'] + '","' + _this162.tempGradeList[i]['deadline_date'] + '","' + _this162.tempGradeList[i]['test_file'] + '","' + _this162.tempGradeList[i]['test_created_by'] + '","' + _this162.tempGradeList[i]['answer_file'] + '","' + _this162.tempGradeList[i]['answer_date'] + '","' + _this162.tempGradeList[i]['is_received'] + '","' + _this162.tempGradeList[i]['graded_file'] + '","' + _this162.tempGradeList[i]['graded_date'] + '","' + _this162.tempGradeList[i]['grade_decided_manager_id'] + '","' + _this162.tempGradeList[i]['graded_file_sent'] + '","' + _this162.tempGradeList[i]['file_grade'] + '","' + _this162.tempGradeList[i]['avg_grade'] + '","' + _this162.tempGradeList[i]['created_at'] + '","' + _this162.tempGradeList[i]['updated_at'] + '","' + _this162.tempGradeList[i]['entity_id'] + '","' + _this162.tempGradeList[i]['class_id'] + '","' + _this162.tempGradeList[i]['subject_id'] + '","' + _this162.tempGradeList[i]['start_date'] + '","' + _this162.tempGradeList[i]['is_delete'] + '","' + _this162.tempGradeList[i]['send_and_start'] + '","' + "download" + '")', []).then(function () {
                console.log('Row Inserted inside of gradeList graded_file_sent :-' + _this162.tempGradeList[i]['graded_file_sent']);
              })["catch"](function (e) {// alert("Error is to insert gradeList:- " + JSON.stringify(e))
              });
            }
          })["catch"](function (e) {// alert("Error Is to get Test Files rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "getGradeList",
        value: function getGradeList() {
          var _this163 = this;

          this.databaseObj.executeSql("SELECT DISTINCT userId, testSessionId, id, test_session_id, actor_id, deadline_date, test_file, test_created_by, answer_file, answer_date, is_received, graded_file, graded_date, grade_decided_manager_id, graded_file_sent, file_grade, avg_grade, created_at, updated_at, entity_id, class_id, subject_id, start_date, is_delete, send_and_start, icon FROM " + this.grade_Table, []) // this.databaseObj.executeSql("SELECT * FROM " + this.grade_Table, [])
          .then(function (res) {
            // alert("Get Grade List Is :-" + JSON.stringify(res));
            // alert("Flag is offline fileRows :-" + this.flag);
            if (_this163.flag == false) {
              // this.flag = true;
              _this163.row_data = [];
              _this163.testSessionFiles = [];
              _this163.gradeListArr = [];
              _this163.openFileSubForm = false;
              _this163.testSessionHeader = false;
              _this163.testSessionData = false;
              _this163.testSessionSubHeader = false;
              _this163.fileUploadPage = false;
              _this163.testSessionFileSubHeader = false;
              _this163.viewGradeSubHeader = true;
              _this163.viewGradeSubForm = true;
              localStorage.setItem('TestSession', "true");

              for (var i = 0; i < res.rows.length; i++) {
                _this163.row_data.push(res.rows.item(i));
              }

              for (var i = 0; i < _this163.row_data.length; i++) {
                if (_this163.row_data[i]['userId'] == localStorage.getItem('userId') && _this163.row_data[i]['testSessionId'] == localStorage.getItem('testSessionId')) {
                  _this163.gradeListArr.push(_this163.row_data[i]);
                }
              } // alert("this.gradeListArr.length :-" + this.gradeListArr.length);

            }
          })["catch"](function (e) {// alert("Error Is to get Test Files Rows:- " + JSON.stringify(e))
          });
        }
      }, {
        key: "isExistfileOffline",
        value: function isExistfileOffline(userId, testSessionId, id, entity_id, class_id, subject_id, start_date, deadline_date, is_delete, send_and_start, created_at, updated_at, test_file, detail_id, test_session_id, test_created_by, firstname, lastname) {
          var _this164 = this;

          var folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
          var storedpath = this.file.externalRootDirectory + folderdir + '/'; //'my_downloads/';

          console.log('storedpath :-' + storedpath, test_file);
          this.file.checkFile(storedpath, test_file).then(function (files) {
            console.log('if exist' + JSON.stringify(files));
          }, function (error) {
            console.log('else exist' + JSON.stringify(error));
          }); //return this.file.checkFile(this.file.externalDataDirectory, test_file).then(

          return this.file.checkFile(storedpath, test_file).then(function (files) {
            _this164.isExist = true; // return this.file.checkFile(this.file.externalDataDirectory, test_file).then(
            //   (files) => {

            _this164.isExist = true; // this.testSessionFiles = [];

            _this164.testSessionFiles.push({
              "userId": userId,
              "testSessionId": testSessionId,
              "id": id,
              "entity_id": entity_id,
              "class_id": class_id,
              "subject_id": subject_id,
              "start_date": start_date,
              "deadline_date": deadline_date,
              "is_delete": is_delete,
              "send_and_start": send_and_start,
              "created_at": created_at,
              "updated_at": updated_at,
              "test_file": test_file,
              "detail_id": detail_id,
              "test_session_id": test_session_id,
              "test_created_by": test_created_by,
              "firstname": firstname,
              "lastname": lastname,
              'icon': 'open'
            });
          })["catch"](function (err) {
            _this164.isExist = false; // this.testSessionFiles = [];

            _this164.testSessionFiles.push({
              "userId": userId,
              "testSessionId": testSessionId,
              "id": id,
              "entity_id": entity_id,
              "class_id": class_id,
              "subject_id": subject_id,
              "start_date": start_date,
              "deadline_date": deadline_date,
              "is_delete": is_delete,
              "send_and_start": send_and_start,
              "created_at": created_at,
              "updated_at": updated_at,
              "test_file": test_file,
              "detail_id": detail_id,
              "test_session_id": test_session_id,
              "test_created_by": test_created_by,
              "firstname": firstname,
              "lastname": lastname,
              'icon': 'download'
            });
          });
        }
      }, {
        key: "isExistOfflineGradeFile",
        value: function isExistOfflineGradeFile(id, test_session_id, actor_id, deadline_date, test_file, test_created_by, answer_file, answer_date, is_received, graded_file, graded_date, grade_decided_manager_id, graded_file_sent, file_grade, avg_grade, created_at, updated_at, entity_id, class_id, subject_id, start_date, is_delete, send_and_start) {
          var _this165 = this;

          var folderdir = 'Documents/Jawata/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no') + '/Tests/' + localStorage.getItem('testSessionNo') + '/';
          var storedpath = this.file.externalRootDirectory + folderdir + '/'; //'my_downloads/';

          console.log('storedpath :-' + storedpath, graded_file);
          this.file.checkFile(storedpath, graded_file).then(function (files) {
            console.log('if exist' + JSON.stringify(files));
          }, function (error) {
            console.log('else exist' + JSON.stringify(error));
          }); //return this.file.checkFile(this.file.externalDataDirectory, test_file).then(

          return this.file.checkFile(storedpath, graded_file).then(function (files) {
            _this165.isExist = true; // this.testSessionFiles = [];

            _this165.gradeListArr.push({
              "id": id,
              "test_session_id": test_session_id,
              "actor_id": actor_id,
              "deadline_date": deadline_date,
              "test_file": test_file,
              "test_created_by": test_created_by,
              "answer_file": answer_file,
              "answer_date": answer_date,
              "is_received": is_received,
              "graded_file": graded_file,
              "graded_date": graded_date,
              "grade_decided_manager_id": grade_decided_manager_id,
              "graded_file_sent": graded_file_sent,
              "file_grade": file_grade,
              "avg_grade": avg_grade,
              "created_at": created_at,
              "updated_at": updated_at,
              "entity_id": entity_id,
              "class_id": class_id,
              "subject_id": subject_id,
              "start_date": start_date,
              "is_delete": is_delete,
              "send_and_start": send_and_start,
              'icon': 'open'
            });
          })["catch"](function (err) {
            _this165.isExist = false;

            _this165.gradeListArr.push({
              "id": id,
              "test_session_id": test_session_id,
              "actor_id": actor_id,
              "deadline_date": deadline_date,
              "test_file": test_file,
              "test_created_by": test_created_by,
              "answer_file": answer_file,
              "answer_date": answer_date,
              "is_received": is_received,
              "graded_file": graded_file,
              "graded_date": graded_date,
              "grade_decided_manager_id": grade_decided_manager_id,
              "graded_file_sent": graded_file_sent,
              "file_grade": file_grade,
              "avg_grade": avg_grade,
              "created_at": created_at,
              "updated_at": updated_at,
              "entity_id": entity_id,
              "class_id": class_id,
              "subject_id": subject_id,
              "start_date": start_date,
              "is_delete": is_delete,
              "send_and_start": send_and_start,
              'icon': 'download'
            });
          });
        }
      }, {
        key: "createdirTests",
        value: function createdirTests() {
          var _this166 = this;

          this.platform.ready().then(function () {
            _this166.file.checkDir(_this166.file.externalRootDirectory, 'Documents').then(function (response) {
              console.log('Directory already present for this Documents :- ' + response);

              _this166.file.checkDir(_this166.file.externalRootDirectory + 'Documents' + '/', 'Jawata').then(function (response) {
                console.log('Directory already present for this Jawata :- ' + response);

                _this166.file.checkDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('citizen_id') + '/').then(function (response) {
                  console.log('Directory already present for this citizen_id :- ' + response);

                  _this166.file.checkDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id') + '/', localStorage.getItem('entity_no').toString() + '/').then(function (response) {
                    console.log('Directory already present for this entity_no :- ' + response);

                    _this166.file.checkDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id') + '/' + localStorage.getItem('entity_no').toString() + '/', 'Tests' + '/').then(function (response) {
                      console.log('Directory already present for this Tests :- ' + response);
                    }, function (error) {
                      // Create Subjects and remaining directory
                      _this166.file.createDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Tests' + '/', false).then(function (response) {
                        console.log('createDir for userid ', response);
                      });
                    });
                  }, function (error) {
                    // Create Entity No. and remaining directory
                    _this166.file.createDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/', localStorage.getItem('entity_no').toString(), false).then(function (response) {
                      console.log('createDir for userid ', response);

                      _this166.file.createDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Tests' + '/', false).then(function (response) {
                        console.log('createDir for userid ', response);
                      });
                    });
                  });
                }, function (error) {
                  // citizen Id create and remaining directory
                  _this166.file.createDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('citizen_id').toString(), false).then(function (response) {
                    console.log('createDir for userid ', response);

                    _this166.file.createDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/', localStorage.getItem('entity_no').toString(), false).then(function (response) {
                      console.log('createDir for userid ', response);

                      _this166.file.createDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Tests' + '/', false).then(function (response) {
                        console.log('createDir for userid ', response);
                      });
                    });
                  });
                });
              }, function (error) {
                //  create Jawata and remaining directory
                _this166.file.createDir(_this166.file.externalRootDirectory + 'Documents' + '/', 'Jawata', false).then(function (response) {
                  console.log('createDir for jawata ', response);

                  _this166.file.createDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('citizen_id').toString(), false).then(function (response) {
                    console.log('createDir for userid ', response);

                    _this166.file.createDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/', localStorage.getItem('entity_no').toString(), false).then(function (response) {
                      console.log('createDir for userid ', response);

                      _this166.file.createDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Tests' + '/', false).then(function (response) {
                        console.log('createDir for userid ', response);
                      });
                    });
                  });
                });
              });
            }, function (error) {
              //  create Documents and remaining directory
              _this166.file.createDir(_this166.file.externalRootDirectory, 'Documents', false).then(function (response) {
                console.log('createDir for jawata ', response); // create directory for jawata 

                _this166.file.createDir(_this166.file.externalRootDirectory + 'Documents' + '/', 'Jawata', false).then(function (response) {
                  console.log('createDir for jawata ', response); // create directory for username

                  _this166.file.createDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/', localStorage.getItem('citizen_id').toString(), false).then(function (response) {
                    console.log('createDir for userid ', response);

                    _this166.file.createDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/', localStorage.getItem('entity_no').toString(), false).then(function (response) {
                      console.log('createDir for userid ', response);

                      _this166.file.createDir(_this166.file.externalRootDirectory + 'Documents' + '/' + 'Jawata' + '/' + localStorage.getItem('citizen_id').toString() + '/' + localStorage.getItem('entity_no').toString(), 'Tests' + '/', false).then(function (response) {
                        console.log('createDir for userid ', response);
                      });
                    });
                  });
                });
              });
            });
          });
        }
      }, {
        key: "onFileChangearrayinsert",
        value: function onFileChangearrayinsert(event) {
          var _this167 = this;

          // clear the stored files array
          console.log('onFileChangearrayinsert this.images.length :-' + this.images.length); //this.images = [];

          if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            console.log('filesAmount :-' + filesAmount);

            var _loop2 = function _loop2(i) {
              reader = new FileReader();
              var file = event.target.files[i];

              reader.onload = function (event) {
                // console.log(event.target.result);
                //this.images.push(event.target.result);
                if (_this167.images.length > 0) {
                  for (var j = 0; j < _this167.images.length; j++) {
                    console.log('this.images[j].filename' + _this167.images[j].filename);

                    if (file.name == _this167.images[j].filename) {
                      _this167.images.splice(j, 1);
                    }
                  }

                  _this167.images.push({
                    'filename': file.name,
                    'icon': 'close',
                    'base64Image': event.target.result
                  });
                } else {
                  _this167.images.push({
                    'filename': file.name,
                    'icon': 'close',
                    'base64Image': event.target.result
                  });
                }
              };

              reader.readAsDataURL(event.target.files[i]);
            };

            for (var i = 0; i < filesAmount; i++) {
              var reader;

              _loop2(i);
            }
          }

          if (event.target.files && event.target.files[0]) {
            // if (this.images.length > 0) {
            //   this.images = this.images.filter((n, i) => this.images.indexOf(n) === i);
            //   //console.log('distinctArray length :-' + distinctArray.length)
            //   // console.log('distinctArray  :-'+ JSON.stringify(distinctArray));
            //   // this.images = [];
            //   // for (let i = 0; i < filesAmount; i++) {
            //   //   this.images.push({
            //   //     'filename': distinctArray[i].filename,
            //   //     'icon': 'close',
            //   //     'base64Image': distinctArray[i].base64Image
            //   //   });
            //   // }
            //   // this.images =Object.assign([], distinctArray);
            //   console.log('distinctArray this.images :-' + JSON.stringify(this.images));
            // }
            event.target.value = '';
          }
        }
      }, {
        key: "confirmSubmitTestAnswer",
        value: function confirmSubmitTestAnswer() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var _this168 = this;

            var varCancel, varOK, varheader, varmsg, _alert3;

            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    // check file is uploaded
                    console.log('Files count :-' + this.images.length);

                    if (!(this.images.length == 0)) {
                      _context26.next = 6;
                      break;
                    }

                    this.translate.use(this.selectedLanguage);
                    this.translate.get('Please select file to upload').subscribe(function (res) {
                      alert(res);
                    });
                    _context26.next = 19;
                    break;

                  case 6:
                    varCancel = '';
                    varOK = '';
                    varheader = '';
                    varmsg = '';
                    this.translate.get('This action will Send all the Answer files and terminate the Test Session.').subscribe(function (res) {
                      varmsg = res;
                    });
                    this.translate.get('Confirm Answer Files!').subscribe(function (res) {
                      varheader = res;
                    });
                    this.translate.get('Cancel').subscribe(function (res) {
                      varCancel = res;
                    });
                    this.translate.get('Confirm').subscribe(function (res) {
                      varOK = res;
                    });
                    _context26.next = 16;
                    return this.alertCtrl.create({
                      // cssClass: 'my-custom-class',
                      header: varheader.toString(),
                      message: varmsg.toString(),
                      buttons: [{
                        text: varCancel.toString(),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: varOK.toString(),
                        handler: function handler() {
                          _this168.submit();

                          console.log('Confirm Okay');
                        }
                      }]
                    });

                  case 16:
                    _alert3 = _context26.sent;
                    _context26.next = 19;
                    return _alert3.present();

                  case 19:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "submit",
        value: function submit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
            var _this169 = this;

            var dateTime, apicallcount, i, forrmdata, headers;
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    this.disabled = true;
                    console.log('this.images :- ' + JSON.stringify(this.images));
                    dateTime = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH-mm-ss');
                    apicallcount = 0;

                    if (this.images.length == 0) {
                      this.translate.use(this.selectedLanguage);
                      this.translate.get('Please select file to upload').subscribe(function (res) {
                        alert(res);
                      });
                    } else {
                      if (this.deviceid == undefined) {
                        this.getID_UID('UUID');
                        console.log('UUID :-' + this.deviceid);
                        this.platform.ready().then(function () {
                          _this169.submit();
                        });
                      } else {
                        this.showLoader();
                        this.uploadedFile = "false";

                        for (i = 0; i < this.images.length; i++) {
                          // console.log('this.images in loop :- ' + this.images[i].base64Image);
                          if (localStorage.getItem('userType') == 'Actor') {
                            forrmdata = {
                              'testSessionId': localStorage.getItem('testSessionId'),
                              'actorId': localStorage.getItem('userId'),
                              'ip_address': this.deviceid,
                              'uploadedFile': this.uploadedFile,
                              testSessionFile: this.images[i].filename,
                              'dateTime': dateTime,
                              'answerFileUpload': this.images[i].base64Image //res['url'],

                            };
                          } else {
                            forrmdata = {
                              'testSessionId': localStorage.getItem('testSessionId'),
                              'actorId': localStorage.getItem('actorId'),
                              'ip_address': this.deviceid,
                              'uploadedFile': this.uploadedFile,
                              testSessionFile: this.images[i].filename,
                              'dateTime': dateTime,
                              'answerFileUpload': this.images[i].base64Image //res['url'],

                            };
                          }

                          headers = {
                            'Content-Type': 'application/json'
                          };
                          console.log("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/upload_test_files"), forrmdata);
                          this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/upload_test_files"), forrmdata, headers).then(function (data) {
                            console.log('File move API response :-' + JSON.stringify(data));
                            _this169.uploadedFile = "true";
                            apicallcount = apicallcount + 1;
                            console.log('In API response :' + apicallcount + '--' + _this169.images.length);

                            if (apicallcount == _this169.images.length) {
                              _this169.testSessionHeader = true;
                              _this169.fileUploadedcount = 0;
                              _this169.fileUploadPage = false;
                              _this169.testSessionData = true;
                              _this169.images = [];

                              _this169.getTestSessionList();

                              _this169.onClickCancel();

                              _this169.dismissLodader();
                            }
                          })["catch"](function (error) {
                            _this169.dismissLodader();

                            console.log(" Error Here move file in API :-!" + JSON.stringify(error));
                          });
                          this.uploadedFile = "true";
                        }
                      }
                    }

                  case 5:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "onClickremove",
        value: function onClickremove(i) {
          console.log('index :+' + i);
          this.images.splice(i, 1);
          console.log('after delete this.images :- ' + JSON.stringify(this.images));
        }
      }, {
        key: "getID_UID",
        value: function getID_UID(type) {
          if (type == "UUID") {
            console.log('this.uid.UUID :-' + this.uid.UUID);
            this.deviceid = this.uid.UUID;
            return this.uid.UUID;
          }
        }
      }, {
        key: "showLoader",
        value: function showLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            var _this170 = this;

            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    this.translate.use(this.selectedLanguage);
                    this.translate.get('Loading').subscribe(function (res) {
                      _this170.loaderLanguage = "";
                      _this170.loaderLanguage = res;
                    });
                    _context28.next = 4;
                    return this.loadingController.create({
                      message: this.loaderLanguage + ' ....',
                      duration: 10000
                    }).then(function (a) {
                      a.present().then(function () {
                        console.log('presented');
                      });
                    });

                  case 4:
                    return _context28.abrupt("return", _context28.sent);

                  case 5:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "dismissLodader",
        value: function dismissLodader() {
          this.loadingController.dismiss().then(function () {
            return console.log('dismissed');
          });
        }
      }]);

      return TestSessionsComponent;
    }();

    TestSessionsComponent.ctorParameters = function () {
      return [{
        type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_8__["MenuService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"]
      }, {
        type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_13__["SQLite"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Events"]
      }, {
        type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__["LocalNotifications"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__["AndroidPermissions"]
      }, {
        type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_18__["Downloader"]
      }, {
        type: _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_19__["NetworkInterface"]
      }, {
        type: _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_20__["Uid"]
      }];
    };

    TestSessionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test-sessions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test-sessions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/test-sessions/test-sessions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test-sessions.component.scss */
      "./src/app/sidemenu/test-sessions/test-sessions.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_8__["MenuService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_7__["FileTransfer"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_13__["SQLite"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Events"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__["LocalNotifications"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_15__["AndroidPermissions"], _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_18__["Downloader"], _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_19__["NetworkInterface"], _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_20__["Uid"]])], TestSessionsComponent);
    /***/
  },

  /***/
  "./src/app/translate-config.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/translate-config.service.ts ***!
    \*********************************************/

  /*! exports provided: TranslateConfigService */

  /***/
  function srcAppTranslateConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateConfigService", function () {
      return TranslateConfigService;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var TranslateConfigService = /*#__PURE__*/function () {
      function TranslateConfigService(translate) {
        _classCallCheck(this, TranslateConfigService);

        this.translate = translate;
      }

      _createClass(TranslateConfigService, [{
        key: "getDefaultLanguage",
        value: function getDefaultLanguage() {
          var language = this.translate.getBrowserLang();
          this.translate.setDefaultLang(language);
          return language;
        }
      }, {
        key: "setLanguage",
        value: function setLanguage(setLang) {
          this.translate.use(setLang);
        }
      }, {
        key: "get",
        value: function get(title) {
          var _this171 = this;

          this.translate.get(title).subscribe(function (res) {
            _this171.title = res; // alert('res is:-' + res);
          });
          return this.title;
        }
      }]);

      return TranslateConfigService;
    }();

    TranslateConfigService.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };

    TranslateConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])], TranslateConfigService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      // apiUrl:'https://67.205.164.212'
      // apiUrl: 'http://103.79.100.31:9001/jawata_qa/public'  
      // for local server 
      apiUrl: 'http://103.79.100.31:9001/jawata_dev/public' // for client 
      // apiUrl: 'https://jawata.one'

    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/admin/Documents/Amey/JAWATA/jawata-manager/JawataManagerApp/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map