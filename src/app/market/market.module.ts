import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { MarketComponent } from './market.component';

import { MarketRoutingModule } from './market-routing.module';


@NgModule({
  declarations: [ MarketComponent],
  imports: [
    SharedModule,
    MarketRoutingModule
  ]
})
export class MarketModule { }
