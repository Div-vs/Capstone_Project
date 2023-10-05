import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() {}

  ngOnInit() {}
  
  displayStyle = "block";
  closePopup() {
    this.displayStyle = "none";
  }
  login: string = '';

}
