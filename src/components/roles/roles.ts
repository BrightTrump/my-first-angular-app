import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.html',
  styleUrl: './roles.scss',
})
export class Roles {
  firstName: string = 'Bright';
  angularVersion: string | number = 'Version 3';
  currentDate: Date = new Date();
  inputType: string = 'checkbox';
  selectedState: string = '';

  showWelcomeAlert() {
    alert('Welocme to Angular 18');
  }
  showMessage(message: string) {
    alert(message);
  }
}
