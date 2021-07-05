(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/settings/settings.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/settings/settings.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div style=\"width: 0%;margin: 19px;\">\n    <div class=\"card bg-default\"\n      style=\"background-color: #343a40 !important;width: 100%;\">\n      <div class=\"card-body text-center\"\n        style=\"padding:0.5rem; border: 0rem;border-radius: 0.66rem;box-shadow: 0rem 0rem 0.41rem #00000024;\">\n\n        <!-- <ion-text color=\"light\" style=\"float: left;\"><b style=\"color: #fff !important;\"> {{heading}}</b>\n        </ion-text> -->\n\n      </div>\n    </div>\n  </div>\n\n  <ion-item>\n    <ion-label style=\"font-size: 1rem !important;\">{{'Continuous Scanning' | translate}}</ion-label>\n    <ion-select (ionCancel)=\"onCancel()\"  okText=\"{{'SAVE'|translate}}\" cancelText=\"{{'CANCEL'|translate}}\"\n      [(ngModel)]=\"defaultAction\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"changeScanAction($event.target.value)\"\n      style=\"font-size: 1rem !important;\">\n      <ion-select-option *ngFor=\"let item of actionList\" [value]=\"item.name\">{{item.name}} </ion-select-option>\n    </ion-select>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label style=\"font-size: 1rem !important;\">{{'Camera Selection'| translate}}</ion-label>\n    <ion-select (ionCancel)=\"onCancel()\"  okText=\"{{'SAVE'|translate}}\" cancelText=\"{{'CANCEL'|translate}}\"\n      [(ngModel)]=\"defaultCamera\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"changeCamera($event.target.value)\"\n      style=\"font-size: 1rem !important;\">\n      <ion-select-option *ngFor=\"let item of cameraList\" [value]=\"item.name\">{{item.name}} </ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label style=\"font-size: 1rem !important;\">{{'Alarm'| translate}}</ion-label>\n    <ion-select (ionCancel)=\"onCancel()\" okText=\"{{'SAVE'|translate}}\" cancelText=\"{{'CANCEL'|translate}}\"\n      [(ngModel)]=\"defaultAlarm\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"changeScanAlarm($event.target.value)\"\n      style=\"font-size: 1rem !important;\">\n      <ion-select-option *ngFor=\"let item of alarmList\" [value]=\"item.name\">{{item.name}} </ion-select-option>\n    </ion-select>\n  </ion-item>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/sidemenu/settings/settings.module.ts":
/*!******************************************************!*\
  !*** ./src/app/sidemenu/settings/settings.module.ts ***!
  \******************************************************/
/*! exports provided: LanguageLoader, SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageLoader", function() { return LanguageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/sidemenu/settings/settings.page.ts");
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
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/sidemenu/settings/settings.page.scss":
/*!******************************************************!*\
  !*** ./src/app/sidemenu/settings/settings.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51L3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/sidemenu/settings/settings.page.ts":
/*!****************************************************!*\
  !*** ./src/app/sidemenu/settings/settings.page.ts ***!
  \****************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/translate-config.service */ "./src/app/translate-config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");





let SettingsPage = class SettingsPage {
    constructor(popoverCtrl, platform, translateConfigService, translate) {
        this.popoverCtrl = popoverCtrl;
        this.platform = platform;
        this.translateConfigService = translateConfigService;
        this.translate = translate;
        this.actionList = [];
        this.defaultAction = ""; //this.langTransalate(localStorage.getItem('scanAction'));
        this.selectedLanguage = localStorage.getItem('selectedL');
        this.heading = this.translateConfigService.get('Settings');
        this.defaultCamera = "";
        this.cameraList = [];
        this.defaultAlarm = "";
        this.alarmList = [];
    }
    ngOnInit() {
        this.platform.ready().then(() => {
            this.translate.use(this.selectedLanguage);
            // this.defaultAction = "";
            // this.defaultAction = this.langTransalate(localStorage.getItem('scanAction'));
            // this.defaultCamera = "";
            // this.defaultCamera = this.langTransalate(localStorage.getItem('cameraAction'));
            // this.defaultAlarm = "";
            // this.defaultAlarm = this.langTransalate(localStorage.getItem('scanAlarm'));
            console.log('scanActionID :=>' + localStorage.getItem('scanActionID') + '----cameraActionID--' + localStorage.getItem('cameraActionID') + '--scanAlarmID--' + localStorage.getItem('scanAlarmID'));
            console.log('ngonint this.defaultAction', this.defaultAction);
            console.log(' ngonint this.defaultCamera', this.defaultCamera);
            this.translate.get('Settings').subscribe((res) => {
                this.heading = "";
                this.heading = res;
                this.setLanguages();
                this.getScanAction();
                this.getCamera();
                this.getScanAlarm();
            });
            //alert('Settings clicked..');
        });
    }
    setLanguages() {
        if (localStorage.getItem('scanActionID') != "") {
            let scanid = localStorage.getItem('scanActionID');
            this.defaultAction = "";
            this.defaultAction = (scanid == "0") ? this.langTransalate('Activated') : this.langTransalate('Deactivated');
        }
        if (localStorage.getItem('cameraActionID') != "") {
            let cameraid = localStorage.getItem('cameraActionID');
            this.defaultCamera = "";
            this.defaultCamera = (cameraid == "0") ? this.langTransalate('Back Camera') : this.langTransalate('Front Camera');
        }
        if (localStorage.getItem('scanAlarmID') != "") {
            let alarmid = localStorage.getItem('scanAlarmID');
            this.defaultAlarm = "";
            this.defaultAlarm = (alarmid == "0") ? this.langTransalate('Sound') : ((alarmid == "1") ? this.langTransalate('Vibrate') : this.langTransalate('Sound and Vibrate'));
        }
        console.log('setlangugae this.defaultAction', this.defaultAction);
        console.log('setLanguage this.defaultCamera', this.defaultCamera);
        console.log('setLanguage this.defaultAlarm', this.defaultAlarm);
    }
    onCancel() {
        console.log('oncancel click');
        this.popoverCtrl.dismiss();
    }
    /** start Scan Action */
    getScanAction() {
        /**Bind static json data */
        this.actionList.push({
            "id": 0,
            "name": this.langTransalate("Activated"),
        }, {
            "id": 1,
            "name": this.langTransalate("Deactivated")
        });
        if (localStorage.getItem('scanAction') == null) {
            for (var i = 0; i < this.actionList.length; i++) {
                this.defaultAction = this.langTransalate(this.actionList[0]['name']);
                localStorage.setItem('scanAction', this.actionList[0]['name']);
                localStorage.setItem('scanActionID', this.actionList[1]['id']);
            }
        }
    }
    langTransalate(changeText) {
        var localChnageText = changeText;
        this.translate.use(this.selectedLanguage);
        this.translate.get(changeText).subscribe((res) => {
            localChnageText = res;
        });
        // console.log('localChnageText', localChnageText)
        return localChnageText;
    }
    changeScanAction(value) {
        this.defaultAction = "";
        this.defaultAction = value.trim();
        console.log('this.defaultAction' + this.defaultAction);
        for (var i = 0; i < this.actionList.length; i++) {
            if (value.trim() == this.actionList[i]['name']) {
                localStorage.setItem('scanActionID', this.actionList[i]['id']);
                this.defaultAction = this.langTransalate(value.trim());
                localStorage.setItem('scanAction', this.actionList[i]['name']);
            }
        }
    }
    /** end Scan Action */
    /** Start camera option */
    getCamera() {
        /**Bind static json data */
        this.cameraList.push({
            "id": 0,
            "name": this.langTransalate("Back Camera"),
        }, {
            "id": 1,
            "name": this.langTransalate("Front Camera"),
        });
        if (localStorage.getItem('cameraAction') == null) {
            for (var i = 0; i < this.cameraList.length; i++) {
                this.defaultAction = this.cameraList[0]['name'];
                localStorage.setItem('cameraActionID', this.cameraList[0]['id']);
                localStorage.setItem('cameraAction', this.cameraList[0]['name']);
            }
        }
    }
    changeCamera(value) {
        this.defaultCamera = "";
        this.defaultCamera = value.trim();
        console.log('this.defaultCamera' + this.defaultCamera);
        for (var i = 0; i < this.actionList.length; i++) {
            if (value.trim() == this.cameraList[i]['name']) {
                localStorage.setItem('cameraAction', this.cameraList[i]['name']);
                localStorage.setItem('cameraActionID', this.cameraList[i]['id']);
            }
        }
    }
    /** End camera option */
    /** start Scan Action */
    getScanAlarm() {
        /**Bind static json data */
        this.alarmList.push({
            "id": 0,
            "name": this.langTransalate("Sound"),
        }, {
            "id": 1,
            "name": this.langTransalate("Vibrate"),
        }, {
            "id": 2,
            "name": this.langTransalate("Sound and Vibrate"),
        });
        if (localStorage.getItem('scanAlarm') == null) {
            for (var i = 0; i < this.alarmList.length; i++) {
                this.defaultAction = this.alarmList[0]['name'];
                localStorage.setItem('scanAlarmID', this.alarmList[0]['id']);
                localStorage.setItem('scanAlarm', this.alarmList[0]['name']);
            }
        }
    }
    changeScanAlarm(value) {
        this.defaultAlarm = "";
        this.defaultAlarm = value.trim();
        console.log('this.defaultAlarm' + this.defaultAlarm);
        for (var i = 0; i < this.alarmList.length; i++) {
            if (value.trim() == this.alarmList[i]['name']) {
                localStorage.setItem('scanAlarmID', this.alarmList[i]['id']);
                localStorage.setItem('scanAlarm', this.alarmList[i]['name']);
            }
        }
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_3__["TranslateConfigService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SettingsPage.prototype, "heading", void 0);
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/settings/settings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.page.scss */ "./src/app/sidemenu/settings/settings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_3__["TranslateConfigService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map