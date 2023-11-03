import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './web/shared/nav-menu/nav-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { LandsAllMainComponent } from './web/lands/all/lands-all-main/lands-all-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LandsAllMainComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
