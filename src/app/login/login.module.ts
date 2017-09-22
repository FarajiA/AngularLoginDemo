import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../_services/auth.service';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'login', component: LoginComponent }
        ])
  ],
    declarations: [LoginComponent],
    providers: [AuthService],
})
export class LoginModule { }
