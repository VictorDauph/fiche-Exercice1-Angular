import { Component } from '@angular/core';
import { User } from '../models/User';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-component',
  imports: [UserCardComponent],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent {

  user: User = new User(1, 'Alice', 'alice@example.com');
  isUserActive: boolean = true;

  ngOnInit(): void {
    console.log('Utilisateur initialisé :', this.user);
  }

  toggleUserState(): void {
    this.isUserActive = !this.isUserActive;
  }
}
