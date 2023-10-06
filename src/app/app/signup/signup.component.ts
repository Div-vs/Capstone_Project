import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit
{
  
registerForm!:FormGroup;
submitted=false;


constructor(private formBuilder: FormBuilder) {
  this.registerForm = this.formBuilder.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern('^[a-zA-Z ]*$')]),

    addressGroup: this.formBuilder.group({
      address: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      city: new FormControl('', []),
      state: new FormControl('', []),
      pincode: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8),
        Validators.pattern('^[a-zA-Z0-9]*$')])       
    }),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(12),
      Validators.pattern('^[0-9]*$')]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(80),
      Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
    ]),
  });
}

  ngOnInit() {

  }

  
onRegistrationFormSubmit() {
  this.submitted = true;
  if(this.registerForm.valid){      
    console.log("User Registration Form Submit", this.registerForm.value);
  }
  
}
}
