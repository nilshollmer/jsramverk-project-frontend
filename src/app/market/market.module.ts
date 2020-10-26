import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';
import { MarketComponent } from './market.component';

import { MarketRoutingModule } from './market-routing.module';


@NgModule({
  declarations: [ MarketComponent],
  imports: [
    CommonModule,
    SharedModule,
    MarketRoutingModule
  ]
})
export class MarketModule { }
