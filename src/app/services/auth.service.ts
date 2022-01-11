import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User
  constructor(private userService: UserService,private router:Router) { }

  checkIfLoggedIn(): boolean {
    this.userService.user$.subscribe(user => this.user = user)
    if (this.user) return true
    else {
      this.router.navigateByUrl('signup')
      return false
    }
  }
}