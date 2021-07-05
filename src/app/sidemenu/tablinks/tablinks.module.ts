import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TablinksPage } from './tablinks.page';
import { TablinksPageRoutingModule } from './tablinks-routing.module';
// import { HeaderComponent } from '../../components/header/header.component';
// import { AppComponent } from '../../app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from 'src/app/translate-config.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //IonicModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    // AppComponent,
    // HeaderComponent,
    TablinksPageRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    }),    // RouterModule.forChild(routes)
  ],
  providers: [
  TranslateConfigService
  ],
  declarations: [TablinksPage]
})
export class TablinksPageModule {}
