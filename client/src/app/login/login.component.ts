import { Component, Inject } from '@angular/core';
import { environment } from './../../environments/environment';
import { DOCUMENT } from '@angular/common';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  test:string = environment.title;
  // Inject the authentication service into your component through the constructor
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}
