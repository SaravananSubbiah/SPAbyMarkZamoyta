import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
//import { LazyModule } from './lazy/lazy.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsMaintComponent } from './settings-maint/settings-maint.component';
import { appRoutes } from './app.routing';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryScoreComponent } from './country-score/country-score.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.service';
import { UserApi } from '../fw/users/user-api';
import { AuthGuard } from './services/auth-guard.service';
import { AppDataService } from './services/app-data.service';
import { CountryPanelComponent } from './panels/country-panel/country-panel.component';
import { ImagePanelComponent } from './panels/image-panel/image-panel.component';
import { TempConvertPipe } from './../fw/pipes/temp-converter';
import { LoggerService } from './../fw/services/logger.service';
import { TextEditor } from './editor/text-editor';
import { BarChartDemoComponent } from './chartjs/bar-chart-demo';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    SettingsMaintComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryScoreComponent,
    CountryMaintComponent,
    AuthenticatedUserComponent,
    CountryPanelComponent,
    ImagePanelComponent,
    TextEditor,
    TempConvertPipe,
    BarChartDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    //LazyModule,
    RouterModule.forRoot(appRoutes),
    // In your App's module:
   ChartsModule
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard,
    AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
