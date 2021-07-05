import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
​
import { TranslateService } from '@ngx-translate/core';
import { BarcodeScannerOptions, BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
​
​
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QRCodeComponent implements OnInit {
​
  heading = "QR-Code"
  selectedLanguage = localStorage.getItem('selectedL');
​
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
​
  constructor(private platform: Platform, private translate: TranslateService,
    private barcodeScanner: BarcodeScanner) {
    this.encodeData = {
      //'entityId': localStorage.getItem('entityId'),
      'citizen_id': localStorage.getItem('citizen_id'),
      'userId': localStorage.getItem('userId'),
      'userName': localStorage.getItem('userName')
      //'class_id': localStorage.getItem('class_id')
    };
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
    this.platform.ready().then(() => {
      // this.encodedText();
    });
  }
​
  ngOnInit() {
    this.translate.use(this.selectedLanguage);
    this.translate.get('QR-Code').subscribe((res: string) => {
      this.heading = "";
      this.heading = res;
    });
​
  }
​
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        console.log("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
​
  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          alert('encodedData'+ encodedData);
          console.log('encodedData' + encodedData + '--Json encodedData :-' + JSON.stringify(encodedData));
          //this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + JSON.stringify(err));
        }
      );
  }
​
}

