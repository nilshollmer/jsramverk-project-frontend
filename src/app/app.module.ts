import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
    FooterComponent,
    HeaderComponent,
    SharedModule
} from './shared';
import { CoreModule } from './core';
import { HomeModule } from './home';
import { AuthModule } from './auth';
import { AccountModule } from './account';
import { MarketModule } from './market';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AccountModule,
    AuthModule,
    MarketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
