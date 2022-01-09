import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  user: User 
  bitcoinRate$: Observable<number>
  userSubscriber: Subscription

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  ngOnInit() {
      this.bitcoinRate$ = (this.user)? this.bitcoinService.getRate(this.user.coins) : this.bitcoinService.getRate(100)
    this.userSubscriber = this.userService.user$.subscribe(user => this.user = user)
  }

}
