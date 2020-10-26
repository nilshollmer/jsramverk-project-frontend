import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent, FooterComponent } from './layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
      CommonModule,
      NgbModule,
      FormsModule,
      HttpClientModule,
      RouterModule
  ]

})
export class SharedModule { }
