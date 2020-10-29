import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ErrorsListComponent } from './errors-list.component';

import { HeaderComponent, FooterComponent } from './layout';



@NgModule({
  declarations: [
      ErrorsListComponent
  ],
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
      ErrorsListComponent,
      HttpClientModule,
      RouterModule
  ]

})
export class SharedModule { }
