import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './sidemenu/dashboard/dashboard.component';
import { AuditTrailComponent } from './sidemenu/audit-trail/audit-trail.component';
import { FeedbackComponent } from './sidemenu/feedback/feedback.component';
import { ProfileComponent } from './sidemenu/profile/profile.component';
import { SubjectsComponent } from './sidemenu/subjects/subjects.component';
import { SsoComponent } from './sidemenu/sso/sso.component';
import { LogoutComponent } from './sidemenu/logout/logout.component';
import { ResourceLinkComponent } from './sidemenu/resource-link/resource-link.component';
import { TestSessionsComponent } from './sidemenu/test-sessions/test-sessions.component';
import { QRCodeComponent } from './sidemenu/qr-code/qr-code.component';
// import { TablinksPageModule } from './sidemenu/tablinks/tablinks.module';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./sidemenu/tablinks/tablinks.module').then(m => m.TablinksPageModule)
  },
  {
    path: 'app-home',
    component: AppComponent
  },
  {
    path: 'app-homereload',
    component: AppComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboardreload',
    component: DashboardComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
  },
  {
    path: 'subjectsreload',
    component: SubjectsComponent
  },
  {
    path: 'resource-link',
    component: ResourceLinkComponent
  },
  {
    path: 'resource-linkreload',
    component: ResourceLinkComponent
  },
  {
    path: 'audit-trail',
    component: AuditTrailComponent
  },
  {
    path: 'audit-trailreload',
    component: AuditTrailComponent
  },
  {
    path: 'sso',
    component: SsoComponent
  },
  {
    path: 'ssoreload',
    component: SsoComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'feedbackreload',
    component: FeedbackComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'test-sessions',
    component: TestSessionsComponent
  },
  {
    path: 'test-sessionsreload',
    component: TestSessionsComponent
  },
  {
    path: 'QR-code',
    component: QRCodeComponent
  },
  {
    path: 'QR-codeReload',
    component: QRCodeComponent
  },
  {
    path: 'tablinks',
    loadChildren: './sidemenu/tablinks/tablinks.module#TablinksPageModule'
  },
  { path: 'scanpage', loadChildren: './sidemenu/scanpage/scanpage.module#ScanpagePageModule' },
  { path: 'history', loadChildren: './sidemenu/history/history.module#HistoryPageModule' },
  {path: 'settings',loadChildren: './sidemenu/settings/settings.module#SettingsPageModule'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
