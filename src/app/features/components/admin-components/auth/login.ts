import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, type FormBuilder, type FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { featherEye, featherEyeOff } from '@ng-icons/feather-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    NgIconsModule  
  ],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
  viewProviders:[provideIcons({featherEye,featherEyeOff})]

})
export class Login {

}
