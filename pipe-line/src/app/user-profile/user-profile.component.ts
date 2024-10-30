import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user = {
    name: 'Vinod Vijay',
    birthdate: new Date(1990, 1, 1), // February 1, 1990
    email: 'balde@com',
    balance: 1234.56,
    interests: ['Angular', 'TypeScript', 'Web Development']
  };
}
