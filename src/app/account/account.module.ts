import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { AccountComponent } from './account.component';

import { AccountRoutingModule } from './account-routing.module';


@NgModule({
    declarations: [AccountComponent],
    imports: [
        SharedModule,
        AccountRoutingModule
    ]
})
export class AccountModule { }
