import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user!: User;
  @Input() isActive: boolean = true;
  @Output() toggleActive = new EventEmitter<void>();

  onToggleActive(): void {
    this.toggleActive.emit();
  }
}