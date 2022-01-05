import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Contact } from '../models/contact.model';
import { User } from '../models/user.model';
import { UtilsService } from './utilservice.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private KEY = 'user';

  constructor(private utilService: UtilsService) {
  }

  //mock the server


  private _user$ = new BehaviorSubject<User>(this.utilService.load(this.KEY) || null)
  public user$ = this._user$.asObservable()


  public getUser() {
    return this.user$
  }

  public signup(user: User): void {
    this.utilService.store('user', user)
    this._user$.next(user)
  }

  public logout() {
    console.log('logging out...')
    localStorage.removeItem("user");
  }

  public addMove(contact: Contact, amount: number) {
    const newMove = {
      toId: contact._id,
      to: contact.name,
      amount,
      at: Date.now()
    }
    const currUser = { ...this._user$.value }
    currUser.coins -= amount
    currUser.moves.unshift(newMove)
    this.utilService.store('user', currUser)
    this._user$.next(currUser)
  }


}