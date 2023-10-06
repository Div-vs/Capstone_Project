import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,NgForm, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustserviceService } from 'src/app/custservice.service';
import { telecomcustomers } from 'src/app/telecomcustomers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit
{
  
registerForm!:FormGroup;
submitted=false;


// Toast toast = Toast.makeText(this, "This is a toast that is centered onscreen but the text isn't centered", Toast.LENGTH_SHORT);
// toast.setGravity(Gravity.CENTER, 0, 0);
// toast.show();


Cust:telecomcustomers= new telecomcustomers("","","","");
msg:any;
constructor(private formBuilder: FormBuilder,private serv:CustserviceService,private router:Router,private msg1:ToastrService) {
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
    
    //console.log(this.registerForm.value);
    // let res = this.serv.CustomerRegister(this.Cust);
    // res.subscribe((data)=>this.msg=data);
    this.serv.CustomerRegister(this.Cust).subscribe(data=>
      {
        if(data!=null){
        this.msg1.success("Successful Registration!",undefined,{
          positionClass:'toast-top-center'
        })
      }else{
        this.msg1.error("Customer with this Phone Number Already Exists !",
    undefined,{
      positionClass:'toast-top-center'
    });

      }
      })
    
  }else{
    this.msg1.error("Provide Valid Details. Fill in the details appropriately",
    undefined,{
      positionClass:'toast-top-center'
    });
  }
  
}
}
