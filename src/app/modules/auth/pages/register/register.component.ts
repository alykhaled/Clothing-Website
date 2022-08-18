import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@core/services';
import Validation from '@core/utils/form.validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      repeatPassword: ['', Validators.required],
      termsField: [false, Validators.requiredTrue]
    },
    {
      validators: [Validation.match('password', 'repeatPassword')]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  get nameField() {
    return this.registerForm.get('fullname');
  }
  get emailField() {
    return this.registerForm.get('email');
  }
  get passwordRepeatField() {
    return this.registerForm.get('repeatPassword');
  }

  get passwordField() {
    return this.registerForm.get('password');
  }

  get termsField() {
    return this.registerForm.get('termsField');
  }

  register()
  {
    const data = {
      fullName: this.nameField!.value,
      email: this.emailField!.value,
      password: this.passwordField!.value,
    };
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log(this.registerForm.errors)
      return;
    }
    // console.log(JSON.stringify(this.form.value, null, 2));
    this.authenticationService.register(data).subscribe((response) => {
      console.log(response);
      // this.submitted = true;
      // location.reload();
    })
  }
}
