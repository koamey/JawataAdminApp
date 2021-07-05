(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scanpage-scanpage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/scanpage/scanpage.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/scanpage/scanpage.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n<ion-header>\n  <ion-toolbar>\n    <ion-title>{{heading}}</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <div style=\"width: 0%;margin: 19px;\">\n    <div class=\"card bg-default\"\n      style=\"background-color: #343a40 !important;width: 100%;\">\n      <div class=\"card-body text-center\"\n        style=\"padding:0.5rem; border: 0rem;border-radius: 0.66rem;box-shadow: 0rem 0rem 0.41rem #00000024;\">\n\n        <!-- <ion-text color=\"light\" style=\"float: left;\"><b style=\"color: #fff !important;\"> {{heading}}</b>\n        </ion-text> -->\n\n      </div>\n    </div>\n  </div>\n<!-- \n  <ion-row radio-group [(ngModel)]=\"radiobtnValue\">\n   \n    <ion-col>\n      <ion-item no-lines>\n        <ion-radio value=\"in\" style=\"margin: 5px;height: 15px; width: 15px; max-width: 100%; max-height: 100%;\">\n        </ion-radio>\n        <ion-label>Arrival</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item no-lines>\n        <ion-radio value=\"out\" ></ion-radio>\n       <ion-label>Departure</ion-label>\n      </ion-item>\n    </ion-col>\n    <ion-button color=\"dark\" (click)=\"scanBarcode()\">Scan</ion-button>\n  </ion-row> -->\n\n  <ion-list>\n    <ion-radio-group allow-empty-selection=\"false\" name=\"radio-group\" (ionChange)=\"radioGroupChange($event)\" #radioGroup>\n      <ion-list-header>\n        <ion-label>{{'Select'| translate}}</ion-label>\n      </ion-list-header>\n  \n      <ion-item>\n        <ion-label>{{'Arrival'| translate}}</ion-label>\n        <ion-radio slot=\"start\" checked=\"true\" style=\"--color-checked: black !important;\" value=\"In\"></ion-radio>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>{{'Departure'| translate}}</ion-label>\n        <ion-radio slot=\"start\" style=\"--color-checked: black !important;\" value=\"Out\"></ion-radio>\n      </ion-item>\n  \n    </ion-radio-group>\n  \n  </ion-list>\n\n  <ion-button color=\"dark\" (click)=\"scanBarcode()\" style=\"width: 33%;  margin-left: 30%;  margin-top: 5%;  margin-right: 69%;\">\n    {{'Scan'| translate}}\n  </ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/sidemenu/scanpage/scanpage.module.ts":
/*!******************************************************!*\
  !*** ./src/app/sidemenu/scanpage/scanpage.module.ts ***!
  \******************************************************/
/*! exports provided: LanguageLoader, ScanpagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageLoader", function() { return LanguageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanpagePageModule", function() { return ScanpagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scanpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scanpage.page */ "./src/app/sidemenu/scanpage/scanpage.page.ts");
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
        component: _scanpage_page__WEBPACK_IMPORTED_MODULE_6__["ScanpagePage"]
    }
];
let ScanpagePageModule = class ScanpagePageModule {
};
ScanpagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
        declarations: [_scanpage_page__WEBPACK_IMPORTED_MODULE_6__["ScanpagePage"]]
    })
], ScanpagePageModule);



/***/ }),

/***/ "./src/app/sidemenu/scanpage/scanpage.page.scss":
/*!******************************************************!*\
  !*** ./src/app/sidemenu/scanpage/scanpage.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51L3NjYW5wYWdlL3NjYW5wYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/sidemenu/scanpage/scanpage.page.ts":
/*!****************************************************!*\
  !*** ./src/app/sidemenu/scanpage/scanpage.page.ts ***!
  \****************************************************/
/*! exports provided: ScanpagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanpagePage", function() { return ScanpagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/translate-config.service */ "./src/app/translate-config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");










let ScanpagePage = class ScanpagePage {
    constructor(barcodeScanner, translateConfigService, http, datepipe, platform, popoverCtrl, vibration, translate, alertCtrl) {
        this.barcodeScanner = barcodeScanner;
        this.translateConfigService = translateConfigService;
        this.http = http;
        this.datepipe = datepipe;
        this.platform = platform;
        this.popoverCtrl = popoverCtrl;
        this.vibration = vibration;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.selectedLanguage = localStorage.getItem('selectedL');
        this.heading = this.translateConfigService.get('Scan');
        this.radiobtnValue = "";
        this.options = {
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true,
            disableSuccessBeep: true,
            torchOn: false,
            prompt: 'Place a QR code inside the scan area',
            resultDisplayDuration: 500,
            formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
            orientation: 'portrait',
        };
    }
    ngOnInit() {
        this.platform.ready().then(() => {
            this.translate.use(this.selectedLanguage);
            this.translate.get('Scan').subscribe((res) => {
                this.heading = "";
                this.heading = res;
            });
            console.log('selected Language' + this.selectedLanguage);
            console.log('scanAction :-' + localStorage.getItem('scanAction'));
            console.log('cameraction :-' + localStorage.getItem('cameraAction') + '----' + 'ScanAlarm :-' + localStorage.getItem('scanAlarm'));
            this.checkdefaultsettings();
            //this.GetCheckInData();
        });
    }
    vibrate() {
        this.vibration.vibrate(500);
    }
    checkdefaultsettings() {
        if (localStorage.getItem('scanAction') == null) {
            localStorage.setItem('scanActionID', '1');
            localStorage.setItem('scanAction', this.langTransalate('Deactivated'));
        }
        if (localStorage.getItem('cameraAction') == null) {
            localStorage.setItem("cameraActionID", "0");
            localStorage.setItem('cameraAction', this.langTransalate('Back Camera'));
        }
        if (localStorage.getItem('scanAlarm') == null) {
            localStorage.setItem("scanAlarmID", "0");
            localStorage.setItem('scanAlarm', this.langTransalate('Sound'));
        }
    }
    scanBarcode() {
        /**Start Configuration from settings from  */
        console.log('scanBarcode() scanAction :-' + localStorage.getItem('scanAction'));
        console.log('scanBarcode() cameraction :-' + localStorage.getItem('cameraAction') + '----' + 'ScanAlarm :-' + localStorage.getItem('scanAlarm'));
        if (localStorage.getItem('cameraActionID') == '1') {
            this.options.preferFrontCamera = true;
        }
        else {
            this.options.preferFrontCamera = false;
        }
        if (localStorage.getItem('scanAlarmID') == '0' || localStorage.getItem('scanAlarmID') == '2')
            this.options.disableSuccessBeep = false;
        /**End Configuration from settings from  */
        this.barcodeScanner.scan(this.options).then(barcodeData => {
            console.log('Barcode data', barcodeData);
            this.scannedData = barcodeData;
            //let dateTime = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH-mm-ss');
            /**Start Local to Utc date */
            var d = new Date();
            var n = d.toUTCString();
            console.log('UTCString :-' + n);
            var utctime = new Date().toISOString();
            var strreplace = utctime.replace('T', ' ');
            var datetime = strreplace.split('.');
            /**End Local to Utc date */
            this.data = {
                'entityId': localStorage.getItem('entityId'),
                'citizenId': barcodeData.text,
                'currentUserId': localStorage.getItem('userId'),
                'date_time': datetime[0],
                'Inout': this.radiobtnValue,
                'locale': localStorage.getItem('selectedL')
            };
            var headers = {
                'Content-Type': 'application/json',
            };
            if (barcodeData.text != "") {
                console.log(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/check_in`, JSON.stringify(this.data));
                this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/check_in`, this.data, headers).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log("Data:-", JSON.parse(res.data));
                    this.ScanArr = [];
                    this.ScanArr = JSON.parse(res.data);
                    console.log('scan api message..', this.ScanArr['message']);
                    console.log('actor_not_belong', this.ScanArr['actor_not_belong']);
                    if (localStorage.getItem('scanAlarmID') != '0') {
                        this.vibrate();
                    }
                    if (this.ScanArr['actor_not_belong'] == true) {
                        console.log('inside alert.......');
                        var temp1 = this.langTransalate('OK');
                        let alert = yield this.alertCtrl.create({
                            message: this.ScanArr['message'],
                            buttons: [{
                                    text: temp1,
                                    handler: () => {
                                        if (localStorage.getItem('scanActionID') == '0') {
                                            if (barcodeData.cancelled == true)
                                                return false;
                                            else
                                                this.scanBarcode();
                                        }
                                    }
                                }]
                        });
                        alert.present();
                    }
                    else {
                        if (localStorage.getItem('scanActionID') == '0') {
                            if (barcodeData.cancelled == true)
                                return false;
                            else
                                this.scanBarcode();
                        }
                    }
                })).catch(err => {
                    console.log('Error', err);
                });
            }
        }).catch(err => {
            console.log('Error', err);
        });
    }
    radioGroupChange(event) {
        console.log("radioGroupChange", event);
        this.radiobtnValue = event.detail.value;
    }
    langTransalate(changeText) {
        var localChnageText = changeText;
        this.translate.use(this.selectedLanguage);
        this.translate.get(changeText).subscribe((res) => {
            localChnageText = res;
        });
        console.log('scan localChnageText', localChnageText);
        return localChnageText;
    }
};
ScanpagePage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"] },
    { type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_8__["TranslateConfigService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_7__["Vibration"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ScanpagePage.prototype, "heading", void 0);
ScanpagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scanpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scanpage.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/scanpage/scanpage.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scanpage.page.scss */ "./src/app/sidemenu/scanpage/scanpage.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"],
        src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_8__["TranslateConfigService"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_7__["Vibration"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], ScanpagePage);



/***/ })

}]);
//# sourceMappingURL=scanpage-scanpage-module-es2015.js.map