import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    ChartsModule
  ]
})
export class HomeModule { }
