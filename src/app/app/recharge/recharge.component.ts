import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
myform:FormBuilder;
  constructor() {}

  ngOnInit() {}
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  userInput: string = '';

  // onInputChange() {
  //   if (this.userInput.length < 10) {
  //     this.userInput = this.userInput.slice(0, 10); 
  //   }
  // }
  

}
