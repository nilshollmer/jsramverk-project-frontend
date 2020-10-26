import { ModuleWithProviders, NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [RegisterComponent, LoginComponent],
    imports: [
        SharedModule,
        AuthRoutingModule,
    ],
    providers: []

})
export class AuthModule { }
