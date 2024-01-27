import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LayoutComponent } from './layout.component';
import { AccountRoutingModule } from './account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
    imports:[
        CommonModule,
        AccountRoutingModule,
        ReactiveFormsModule
    ],
    declarations:[
        LoginComponent,
        LayoutComponent
    ]
}
)
export class AccountModule {}