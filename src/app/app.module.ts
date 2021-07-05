import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Network } from '@ionic-native/network/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';

import { ModalPage } from './components/modal/modal.page';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './sidemenu/dashboard/dashboard.component';
import { ResourceLinkComponent } from './sidemenu/resource-link/resource-link.component';
import { AuditTrailComponent } from './sidemenu/audit-trail/audit-trail.component';
import { FeedbackComponent } from './sidemenu/feedback/feedback.component';
import { ProfileComponent } from './sidemenu/profile/profile.component';
import { SubjectsComponent } from './sidemenu/subjects/subjects.component';
import { SsoComponent } from './sidemenu/sso/sso.component';
import { LogoutComponent } from './sidemenu/logout/logout.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from './translate-config.service';
import { Ng2DeepSearchPipe } from './pipes/pipe';
import { EntitymodalPage } from './components/entitymodal/entitymodal.page';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { HtmlToPlaintextPipe } from './pipes/htmlToPlaintext';
import { TestSessionsComponent } from './sidemenu/test-sessions/test-sessions.component';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { QRCodeComponent } from './sidemenu/qr-code/qr-code.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Downloader } from '@ionic-native/downloader/ngx';;
import { FileUploadModule } from 'ng2-file-upload';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { Vibration } from '@ionic-native/vibration/ngx';

export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ModalPage,
    EntitymodalPage,
    HeaderComponent,
    DashboardComponent,
    AuditTrailComponent,
    FeedbackComponent,
    ProfileComponent,
    SubjectsComponent,
    SsoComponent,
    ResourceLinkComponent,
    LogoutComponent,
    TestSessionsComponent,
    QRCodeComponent,
    Ng2DeepSearchPipe,
    HtmlToPlaintextPipe,
  ],
  entryComponents: [ModalPage, EntitymodalPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    FileUploadModule,
    NgxQRCodeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    StatusBar,
    DatePipe,
    SplashScreen,
    NativeStorage,
    SQLite,
    LocalNotifications,
    Network,
    HTTP,
    File,
    FileTransfer,
    FileOpener,
    NetworkInterface,
    TranslateConfigService,
    AppComponent,
    AuditTrailComponent,
    FeedbackComponent,
    ProfileComponent,
    SubjectsComponent,
    SsoComponent,
    UniqueDeviceID,
    AndroidPermissions,
    BarcodeScanner,
    Downloader,
   // FileUploader,
    FileUploadModule,
    FilePath,
    Uid,
    Camera,
    WebView,
    ExtendedDeviceInformation,
    Vibration,
    // TablinksPageModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
