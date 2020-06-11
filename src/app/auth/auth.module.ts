import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AngularFireAuth} from '@angular/fire/auth';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AuthRoutingModule
    ],
    providers: [
        AngularFireAuth,
    ]
})
export class AuthModule {
}
