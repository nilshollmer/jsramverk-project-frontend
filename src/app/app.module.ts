import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    FooterComponent,
    HeaderComponent,
    SharedModule
} from './shared';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { MarketModule } from './market/market.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
