import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  user: User 
  bitcoinRate: any
  userSubscriber: Subscription

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  async ngOnInit(): Promise<any> {
    // this.setUser()
    if (this.user) {
      
      // let currBtcRate = await this.bitcoinService.getRate(+this.user.coins).toPromise()
      // this.bitcoinService.getRate.subscribe()
      // this.bitcoinService.getRate.subscribe((rate) => this.bitcoinRate = +(1 / rate).toFixed(2));

    }

    this.bitcoinRate = (1 / 0.00210407).toFixed(2)
    let marketPrice = await this.bitcoinService.getMarketPrice().toPromise()


    this.userSubscriber = this.userService.user$.subscribe(user => this.user = user)
    console.log(this.user)
  }

  // setUser() {
  //   let currUser = this.userService.getUser()
  //   this.user = currUser
  // }

}
