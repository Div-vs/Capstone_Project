import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  formVar: FormGroup;

  constructor(private fb: FormBuilder) {}

 

  ngOnInit() {

    this.formVar = this.fb.group({

      rec:String

    });

  }


  public recharge: string ;

  check() {

    console.log(this.formVar.value);
  
  }

}
