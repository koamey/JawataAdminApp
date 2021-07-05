(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/history/history.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/history/history.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div style=\"width: 0%;margin: 19px;\">\n    <div class=\"card bg-default\" style=\"background-color: #343a40 !important;width: 100%;\">\n      <div class=\"card-body text-center\"\n        style=\"padding:0.5rem; border: 0rem;border-radius: 0.66rem;box-shadow: 0rem 0rem 0.41rem #00000024;\">\n<!-- \n        <ion-text color=\"light\" style=\"float: left;\"><b style=\"color: #fff !important;\"> {{heading}}</b>\n        </ion-text> -->\n\n      </div>\n    </div>\n  </div>\n<div>\n<ion-grid>\n  <ion-row style=\"font-weight: bold;\">\n    <ion-col>{{'Name'| translate}}</ion-col>\n    <ion-col>{{'Date & Time'| translate}}</ion-col>\n    <ion-col>{{'Status'| translate}}</ion-col>\n  </ion-row>\n  <hr class=\"hr-class\"/>\n  <div style=\"height: 100%;overflow: scroll;\" *ngFor=\"let item of historyData; let i=index\">\n<ion-row style=\"height: 55px;\" scrollX=\"true\">\n  <ion-col>\n    <p>\n      {{item.Name}}\n    </p>\n  </ion-col>\n  <ion-col >\n    <p>\n      {{item.checkindate}}\n    </p>\n  </ion-col>\n <ion-col color=\"light\">\n    <p>\n      {{item.arrival}} \n    </p>\n  </ion-col>\n \n</ion-row>\n<hr />\n</div>\n\n</ion-grid>\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"{{'Loading more data...'|translate}}\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</div>\n\n  <!-- </ion-content>\n  <ion-content> -->\n\n    <!-- <ion-grid style=\"padding: 0 1vw; position: relative; height: 92%; overflow: scroll; max-height: 100%;\">\n\n      <div style=\"width: 100%;\">\n        <ion-row *ngFor=\"let item of historyData; let i=index\"\n          style=\"padding: 0.41rem 0rem;background: #fff;border-bottom: 0.08rem solid rgba(0, 0, 0, 0.125);margin-bottom: 0.08rem;\">\n          <hr>\n          <ion-col size=\"12\" style=\"background-color: white;padding: 0rem 0.83rem;\" color=\"light\">\n            <p style=\"width: calc(100% - 2.5rem); float: left;font-size: 1rem;margin: 0rem; color: #000 !important;\">\n              {{item.citizenID}}\n            </p>\n          </ion-col>\n\n          <hr>\n          <ion-col size=\"12\" style=\"background-color: white;padding: 0rem 0.83rem;\" color=\"light\">\n            <p style=\"width: calc(100% - 2.5rem); float: left;font-size: 1rem;margin: 0rem; color: #000 !important;\">\n              {{item.checkindate}}\n            </p>\n          </ion-col>\n\n          <hr>\n          <ion-col size=\"12\" style=\"background-color: white;padding: 0rem 0.83rem;\" color=\"light\">\n            <p style=\"width: calc(100% - 2.5rem); float: left;font-size: 1rem;margin: 0rem; color: #000 !important;\">\n              {{item.arrival}} \n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-grid> -->\n     <!-- {{item.checkoutdate =='null'?'Arrival':'Departure'}} -->\n    <!-- {{item.checkoutdate =='null'?item.checkindate:item.checkoutdate}} -->\n  <!-- </ion-content>\n    <ion-content> -->\n    <!-- <div style=\"width: 100%; float: left;    top: calc(42px + 20.933vw); position: relative;\">\n      <ion-row *ngFor=\"let item of historyData; let i=index\">\n    \n        <div class=\"mobile-table\"\n          style=\"padding:1rem; border: 0rem;border-radius: 0.66rem;box-shadow: 0rem 0rem 0.41rem #00000024;\"\n          style=\"width: calc(100% - 17.466vw);float: right; margin: 0 !important;\">\n          <div class=\"mobile-table-inner\" style=\"margin-top: 0;\">\n  \n            <div class=\"mobile-border\">\n  \n              <div class=\"mobile-file\" style=\"color: #000 !important;\">\n                <b>citizenID</b><br>\n                <span style=\"color: #000 !important; font-weight: normal;\">{{item.citizenID}}\n                </span>\n              </div>\n  \n              <div class=\"mobile-file\" style=\"color: #000 !important;\"><b>Date</b> <span\n                  style=\"color: #000 !important;font-weight: normal;\">\n                  {{item.checkindate}} </span>\n              </div>\n  \n              <div class=\"mobile-file\" style=\"color: #000 !important;\"><b>Status</b> <span\n                style=\"color: #000 !important;font-weight: normal;\">\n                {{item.arrival}} </span>\n            </div>\n            </div>\n          </div>\n        </div>\n      </ion-row>\n    </div> -->\n\n  </ion-content>");

/***/ }),

/***/ "./src/app/sidemenu/history/history.module.ts":
/*!****************************************************!*\
  !*** ./src/app/sidemenu/history/history.module.ts ***!
  \****************************************************/
/*! exports provided: LanguageLoader, HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageLoader", function() { return LanguageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/sidemenu/history/history.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/translate-config.service */ "./src/app/translate-config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");











function LanguageLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}
const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
    }
];
let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: (LanguageLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                }
            }),
        ], providers: [
            src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_9__["TranslateConfigService"]
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "./src/app/sidemenu/history/history.page.scss":
/*!****************************************************!*\
  !*** ./src/app/sidemenu/history/history.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mobile-table {\n  width: 100%;\n  float: left; }\n\n.mobile-table .mobile-table-inner {\n  width: 100%;\n  float: left;\n  margin: 0.50rem 0;\n  box-shadow: 0 0 0.83rem #0003;\n  padding: 4vw;\n  border-radius: 0.33rem;\n  border: 0.08rem solid black; }\n\n.hr-class {\n  box-sizing: content-box;\n  height: 1px;\n  overflow: visible;\n  border: 0;\n  border-top: 2px solid rgba(0, 0, 0, 0.1);\n  margin: 10px 5px 10px 1px; }\n\n.mobile-table .mobile-table-inner .mobile-border {\n  width: 100%;\n  float: left;\n  border-bottom: 0.08rem solid #D6D6D6;\n  margin-bottom: 1.25rem; }\n\n.mobile-table .mobile-table-inner .mobile-border h5 {\n  margin-top: 0rem;\n  color: #000 !important;\n  font-family: 'arimoregular';\n  font-size: 1.20rem;\n  margin-bottom: 0.66rem; }\n\n.mobile-table .mobile-table-inner .mobile-border h5 span {\n  margin-left: 0.41rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file {\n  width: 100%;\n  float: left;\n  margin-bottom: 0.30rem;\n  font-size: 1rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file b, .mobile-table .mobile-table-inner .mobile-border .mobile-file span {\n  font-size: 0.9rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file span {\n  margin-left: 0.41rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file.mobile-file-priority {\n  margin-bottom: 1.25rem; }\n\n.mobile-table .mobile-table-inner .mobile-border:last-child {\n  border: 0;\n  margin: 0; }\n\n.mobile-table .mobile-table-inner .mobile-border:last-child .mobile-file.mobile-file-priority {\n  margin-bottom: 0; }\n\n.mobile-file {\n  width: 49% !important;\n  text-align: left;\n  font-size: 3.3vw !important;\n  margin-right: 2%; }\n\n.mobile-file b {\n  font-size: 3.3vw !important;\n  color: #676767 !important; }\n\n.mobile-file span {\n  display: block;\n  width: 100%;\n  margin: 0 !important;\n  font-size: 3.3vw !important;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.mobile-file:nth-child(2n) {\n  text-align: left !important;\n  margin-right: 0 !important; }\n\n.mobile-file:first-child {\n  text-align: left !important; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file {\n  width: 100%;\n  float: left;\n  margin-bottom: 0.30rem;\n  font-size: 1rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file b, .mobile-table .mobile-table-inner .mobile-border .mobile-file span {\n  font-size: 0.9rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file span {\n  margin-left: 0.41rem; }\n\n.mobile-table .mobile-table-inner .mobile-border .mobile-file.mobile-file-priority {\n  margin-bottom: 1.25rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvQW1leS9KQVdBVEEvamF3YXRhLW1hbmFnZXIvSmF3YXRhTWFuYWdlckFwcC9zcmMvYXBwL3NpZGVtZW51L2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUlmO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMkJBQ0osRUFBQTs7QUFDQTtFQUNJLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCx3Q0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQUUxQjtFQUNDLG9CQUFvQixFQUFBOztBQUVyQjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxvQkFBb0IsRUFBQTs7QUFFeEI7RUFDQyxzQkFDRCxFQUFBOztBQUNBO0VBQ0ksU0FBUztFQUNULFNBQVMsRUFBQTs7QUFHYjtFQUNBLGdCQUFlLEVBQUE7O0FBR2Y7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSwyQkFBMkI7RUFDM0IseUJBQXdCLEVBQUE7O0FBRTVCO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsMkJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksMkJBQTJCO0VBQzNCLDBCQUF5QixFQUFBOztBQUU3QjtFQUNJLDJCQUEyQixFQUFBOztBQUkvQjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxvQkFBb0IsRUFBQTs7QUFFeEI7RUFDQyxzQkFDRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lkZW1lbnUvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1vYmlsZS10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cblxuLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDAuNTByZW0gMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMC44M3JlbSAjMDAwMztcbiAgICBwYWRkaW5nOiA0dnc7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zM3JlbTtcbiAgICBib3JkZXI6MC4wOHJlbSBzb2xpZCBibGFja1xufVxuLmhyLWNsYXNze1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGhlaWdodDogMXB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLDAsMCwuMSk7XG4gICAgbWFyZ2luOiAxMHB4IDVweCAxMHB4IDFweDtcbn1cbi8vIG5ldyBzdHlsZSBmb3IgbmV3IGRlc2lnblxuLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAwLjA4cmVtIHNvbGlkICNENkQ2RDY7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cbi5tb2JpbGUtdGFibGUgLm1vYmlsZS10YWJsZS1pbm5lciAubW9iaWxlLWJvcmRlciBoNSB7XG4gICAgbWFyZ2luLXRvcDogMHJlbTtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiAnYXJpbW9yZWd1bGFyJztcbiAgICBmb250LXNpemU6IDEuMjByZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC42NnJlbTtcbn1cbi5tb2JpbGUtdGFibGUgLm1vYmlsZS10YWJsZS1pbm5lciAubW9iaWxlLWJvcmRlciBoNSBzcGFue1xuXHRtYXJnaW4tbGVmdDogMC40MXJlbTtcbn1cbi5tb2JpbGUtdGFibGUgLm1vYmlsZS10YWJsZS1pbm5lciAubW9iaWxlLWJvcmRlciAubW9iaWxlLWZpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDAuMzByZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIC5tb2JpbGUtZmlsZSBiLCAubW9iaWxlLXRhYmxlIC5tb2JpbGUtdGFibGUtaW5uZXIgLm1vYmlsZS1ib3JkZXIgLm1vYmlsZS1maWxlIHNwYW57XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG59XG4ubW9iaWxlLXRhYmxlIC5tb2JpbGUtdGFibGUtaW5uZXIgLm1vYmlsZS1ib3JkZXIgLm1vYmlsZS1maWxlIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjQxcmVtO1xufVxuLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIC5tb2JpbGUtZmlsZS5tb2JpbGUtZmlsZS1wcmlvcml0eXtcblx0bWFyZ2luLWJvdHRvbToxLjI1cmVtXG59XG4ubW9iaWxlLXRhYmxlIC5tb2JpbGUtdGFibGUtaW5uZXIgLm1vYmlsZS1ib3JkZXI6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyOmxhc3QtY2hpbGQgLm1vYmlsZS1maWxlLm1vYmlsZS1maWxlLXByaW9yaXR5e1xubWFyZ2luLWJvdHRvbTowO1xufVxuXG4ubW9iaWxlLWZpbGUge1xuICAgIHdpZHRoOiA0OSUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMy4zdncgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xufVxuLm1vYmlsZS1maWxlIGJ7XG4gICAgZm9udC1zaXplOiAzLjN2dyAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiM2NzY3NjcgIWltcG9ydGFudDtcbn1cbi5tb2JpbGUtZmlsZSBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6My4zdncgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ubW9iaWxlLWZpbGU6bnRoLWNoaWxkKDJuKSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDowICFpbXBvcnRhbnQ7XG59XG4ubW9iaWxlLWZpbGU6Zmlyc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuXG4ubW9iaWxlLXRhYmxlIC5tb2JpbGUtdGFibGUtaW5uZXIgLm1vYmlsZS1ib3JkZXIgLm1vYmlsZS1maWxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjMwcmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5tb2JpbGUtdGFibGUgLm1vYmlsZS10YWJsZS1pbm5lciAubW9iaWxlLWJvcmRlciAubW9iaWxlLWZpbGUgYiwgLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIC5tb2JpbGUtZmlsZSBzcGFue1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLm1vYmlsZS10YWJsZSAubW9iaWxlLXRhYmxlLWlubmVyIC5tb2JpbGUtYm9yZGVyIC5tb2JpbGUtZmlsZSBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMC40MXJlbTtcbn1cbi5tb2JpbGUtdGFibGUgLm1vYmlsZS10YWJsZS1pbm5lciAubW9iaWxlLWJvcmRlciAubW9iaWxlLWZpbGUubW9iaWxlLWZpbGUtcHJpb3JpdHl7XG5cdG1hcmdpbi1ib3R0b206MS4yNXJlbVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/sidemenu/history/history.page.ts":
/*!**************************************************!*\
  !*** ./src/app/sidemenu/history/history.page.ts ***!
  \**************************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/translate-config.service */ "./src/app/translate-config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let HistoryPage = class HistoryPage {
    constructor(translateConfigService, http, datepipe, platform, changeRef, navCtrl, translate) {
        this.translateConfigService = translateConfigService;
        this.http = http;
        this.datepipe = datepipe;
        this.platform = platform;
        this.changeRef = changeRef;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.result = [];
        this.historyData = [];
        this.selectedLanguage = localStorage.getItem('selectedL');
        this.heading = this.translateConfigService.get('History');
        this.Page = 20;
        //alert('constructor call');
        // this.changeRef.detectChanges();
    }
    ngOnInit() {
        localStorage.setItem('nav', 'false'); //set storage for update history records
        this.platform.ready().then(() => {
            // alert('History clicked..');
            this.translate.use(this.selectedLanguage);
            this.translate.get('History').subscribe((res) => {
                this.heading = "";
                this.heading = res;
                this.GetCheckInData();
            });
        });
    }
    GetInfinityPageData(event, page) {
        // this.result = [];
        // this.result = temp.checkInOutData;
        this.Page = this.Page + 15;
        console.log('page', page);
        console.log('this.page', this.Page);
        console.log('this.result.length' + JSON.stringify(this.result));
        if (this.result.length > 0) {
            for (let i = page; i < this.Page; i++) {
                if (i < this.result.length) //15<32
                 {
                    var date = "";
                    if (this.result[i]["check_out_date_time"] == null) {
                        date = this.utcdateToLocal(this.result[i]["check_in_date_time"]);
                        var tempStatus = this.langTransalate('Arrival');
                        this.historyData.push({
                            "id": this.result[i]["id"],
                            "citizenID": this.result[i]["citizen_id"],
                            "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
                            "checkindate": date,
                            "arrival": tempStatus
                        });
                    }
                    else {
                        if (this.result[i]["check_in_date_time"] != null) {
                            date = this.utcdateToLocal(this.result[i]["check_in_date_time"]);
                            var tempStatus = this.langTransalate('Arrival');
                            this.historyData.push({
                                "id": this.result[i]["id"],
                                "citizenID": this.result[i]["citizen_id"],
                                "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
                                "checkindate": date,
                                "arrival": tempStatus
                            });
                            if (this.result[i]["check_in_date_time"] != null) {
                                date = this.utcdateToLocal(this.result[i]["check_out_date_time"]);
                                var tempStatus = this.langTransalate('Departure');
                                this.historyData.push({
                                    "id": this.result[i]["id"],
                                    "citizenID": this.result[i]["citizen_id"],
                                    "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
                                    "checkindate": date,
                                    "arrival": tempStatus
                                });
                            }
                        }
                    }
                    // this.historyData.push({
                    //   "id": this.result[i]["id"],
                    //   "citizenID": this.result[i]["citizen_id"],
                    //   "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
                    //   "checkindate": date,//this.result[i]["check_in_date_time"],
                    //   // "checkoutdate": this.result[i]["check_out_date_time"],
                    //   "arrival": arrival
                    // });
                }
                else {
                    event.target.disabled = true;
                    return false;
                }
            }
        }
    }
    GetCheckInData() {
        this.platform.ready().then(() => {
            this.data = {
                'entityId': localStorage.getItem('entityId'),
            };
            var headers = {
                'Content-Type': 'application/json',
            };
            console.log(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/api/check_in_out_view`, JSON.stringify(this.data));
            this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/api/check_in_out_view`, this.data, headers).then(res => {
                console.log("Check In Data:-", JSON.parse(res.data));
                this.result = [];
                this.result = JSON.parse(res.data);
                var temp;
                temp = [];
                temp = JSON.parse(res.data);
                this.result = [];
                this.result = temp.checkInOutData;
                console.log('this.result.length' + JSON.stringify(this.result));
                if (this.result.length > 0) {
                    this.historyData = [];
                    for (let i = 0; i < this.Page; i++) {
                        var date = "";
                        if (this.result[i]["check_out_date_time"] == null) {
                            date = this.utcdateToLocal(this.result[i]["check_in_date_time"]);
                            var tempStatus = this.langTransalate('Arrival');
                            this.historyData.push({
                                "id": this.result[i]["id"],
                                "citizenID": this.result[i]["citizen_id"],
                                "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
                                "checkindate": date,
                                "arrival": tempStatus
                            });
                        }
                        else {
                            if (this.result[i]["check_in_date_time"] != null) {
                                date = this.utcdateToLocal(this.result[i]["check_in_date_time"]);
                                var tempStatus = this.langTransalate('Arrival');
                                this.historyData.push({
                                    "id": this.result[i]["id"],
                                    "citizenID": this.result[i]["citizen_id"],
                                    "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
                                    "checkindate": date,
                                    "arrival": tempStatus
                                });
                                if (this.result[i]["check_in_date_time"] != null) {
                                    date = this.utcdateToLocal(this.result[i]["check_out_date_time"]);
                                    var tempStatus = this.langTransalate('Departure');
                                    this.historyData.push({
                                        "id": this.result[i]["id"],
                                        "citizenID": this.result[i]["citizen_id"],
                                        "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
                                        "checkindate": date,
                                        "arrival": tempStatus
                                    });
                                }
                            }
                        }
                        // this.historyData.push({
                        //   "id": this.result[i]["id"],
                        //   "citizenID": this.result[i]["citizen_id"],
                        //   "Name": this.result[i]["firstname"] + " " + this.result[i]["lastname"],
                        //   "checkindate": date,//this.result[i]["check_in_date_time"],
                        //   // "checkoutdate": this.result[i]["check_out_date_time"],
                        //   "arrival": arrival
                        // });
                    }
                }
                console.log('this.historyData' + JSON.stringify(this.historyData));
            }).catch(err => {
                console.log('Error', err);
            });
        });
    }
    loadData(event) {
        console.log('event of ion scroll', event);
        setTimeout(() => {
            console.log('Done');
            console.log('this.len', this.Page);
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.Page > this.result.length) //21>=20
             {
                console.log('this.page return', this.Page);
                event.target.disabled = true;
                return false;
            }
            else {
                this.GetInfinityPageData(event, this.Page);
                event.target.complete();
            }
        }, 2000);
    }
    utcdateToLocal(utcdate) {
        let utcDate = new Date(utcdate);
        let tzOffset = new Date().getTimezoneOffset() * 60 * 1000;
        let newTime = utcDate.getTime() - tzOffset;
        let localDate = new Date(newTime);
        return this.datepipe.transform(localDate, 'yyyy-MM-dd HH:mm:ss');
    }
    /**ionViewWillEnter : It’s fired when entering a page, before it becomes the active one. Use it for tasks you want to do every time you enter in the view (setting event listeners, updating a table, etc.). */
    ionViewWillEnter() {
        console.log('ionViewWillEnter history');
        this.GetCheckInData();
        //this.navCtrl.navigateForward(['tablinks/'+localStorage.getItem('selectedtabs')]);
    }
    langTransalate(changeText) {
        var localChnageText = changeText;
        this.translate.use(this.selectedLanguage);
        this.translate.get(changeText).subscribe((res) => {
            // this.heading = "";
            // this.heading = res;
            localChnageText = res;
        });
        console.log('localChnageText', localChnageText);
        return localChnageText;
    }
};
HistoryPage.ctorParameters = () => [
    { type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_6__["TranslateConfigService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HistoryPage.prototype, "heading", void 0);
HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/history/history.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history.page.scss */ "./src/app/sidemenu/history/history.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_6__["TranslateConfigService"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
], HistoryPage);



/***/ })

}]);
//# sourceMappingURL=history-history-module-es2015.js.map