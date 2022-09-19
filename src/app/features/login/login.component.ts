import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'itk-login',
  templateUrl: './login.component.html',

})
export class LoginComponent {

  constructor(private fb: FormBuilder,
    public auth: AuthService) { }

  login: FormGroup = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required]
  })

}
