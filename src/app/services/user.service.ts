import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersSubject = new BehaviorSubject<User[]>([
    {
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin'
    },
    {
      name: 'Priya',
      email: 'priya@example.com',
      role: 'Editor'
    }
  ]);

  users$ = this.usersSubject.asObservable();

  addUser(user: User) {

    const currentUsers = this.usersSubject.value;

    this.usersSubject.next([
      ...currentUsers,
      user
    ]);
  }
}