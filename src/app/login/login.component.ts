import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';

@NgModule({
  imports: [
    FormsModule,
    FormBuilder,    // added here too
    ReactiveFormsModule // added here too
  ],
  declarations: [],
  providers: []
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails;

  bioSection = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  getErrorMessage() {
    return this.bioSection.hasError('required') ? 'You must enter a value' :
        this.bioSection.hasError('required') ? 'Not a valid value' :
            '';
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginDetails = this.formBuilder.group({
      name: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your details has been submitted', customerData);

    this.loginDetails.reset();

    console.log(this.bioSection.value);

    if (customerData.username === 'demo' && customerData.password === 'demo') {
      console.log('yessssssssssssssssss');

      this.router.navigate(['/home-page-dashboard']);
    } else {
      // this.bioSection.controls.
    }
  }
  // this.router.navigate(['/home-page-dashboard']);
}
