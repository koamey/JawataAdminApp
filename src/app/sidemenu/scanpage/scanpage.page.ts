import { Component, OnInit, Input } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform, LoadingController, AlertController, PopoverController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { DatePipe, Location } from '@angular/common';
import { ModalPage } from 'src/app/components/modal/modal.page';
import { Vibration } from '@ionic-native/vibration/ngx';
import { TranslateConfigService } from 'src/app/translate-config.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-scanpage',
  templateUrl: './scanpage.page.html',
  styleUrls: ['./scanpage.page.scss'],
})
export class ScanpagePage implements OnInit {

  selectedLanguage = localStorage.getItem('selectedL');
  scannedData: any;
  @Input()
  heading = this.translateConfigService.get('Scan');

  radiobtnValue: string = "";
  data;

  options: BarcodeScannerOptions = {
    preferFrontCamera: false,
    showFlipCameraButton: true,
    showTorchButton: true,
    disableSuccessBeep: true,
    torchOn: false,
    prompt: 'Place a QR code inside the scan area',
    resultDisplayDuration: 500,
    formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
    orientation: 'portrait',
    // saveHistory: true, // Android, save scan history (default false)
  };
  ScanArr: any[];


  constructor(private barcodeScanner: BarcodeScanner
    , private translateConfigService: TranslateConfigService
    , private http: HTTP
    , private datepipe: DatePipe
    , private platform: Platform
    , private popoverCtrl: PopoverController
    , private vibration: Vibration
    , private translate: TranslateService,
    private alertCtrl: AlertController) {

  }

  ngOnInit() {

    this.platform.ready().then(() => {
      this.translate.use(this.selectedLanguage);
      this.translate.get('Scan').subscribe((res: string) => {
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
    } else {
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
      }
      var headers = {
        'Content-Type': 'application/json',
      }

      if (barcodeData.text != "") {
        console.log(`${environment.apiUrl}/api/check_in`, JSON.stringify(this.data));
        this.http.post(`${environment.apiUrl}/api/check_in`, this.data, headers).then(async res => {
          console.log("Data:-", JSON.parse(res.data));
          this.ScanArr = [];
          this.ScanArr = JSON.parse(res.data);
          console.log('scan api message..', this.ScanArr['message'])
          console.log('actor_not_belong', this.ScanArr['actor_not_belong'])
          if (localStorage.getItem('scanAlarmID') != '0') { this.vibrate(); }
          if (this.ScanArr['actor_not_belong'] == true) { 
            console.log('inside alert.......')
            var temp1 = this.langTransalate('OK')
            let alert = await this.alertCtrl.create({
              message: this.ScanArr['message'],
              buttons: [{
                text: temp1,
                handler: () => {
                  if (localStorage.getItem('scanActionID') == '0') {
                    if (barcodeData.cancelled == true)
                      return false
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
                return false
              else
                this.scanBarcode();
            }
         }
        }).catch(err => {
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
    this.translate.get(changeText).subscribe((res: string) => {
      localChnageText = res;
    });
    console.log('scan localChnageText', localChnageText)
    return localChnageText;
  }
}
