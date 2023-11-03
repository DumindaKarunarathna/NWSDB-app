import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { alarm, alarmFill, alignBottom } from 'ngx-bootstrap-icons';


const icons = {
  alarm,
  alarmFill,
  alignBottom
};

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
    NgxBootstrapIconsModule.pick(icons),

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
